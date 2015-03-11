-- Belangrijk, nog een query maken waarbij alle fouten
-- eerst uit de dataset gehaald worden

-- Nieuwe tijdelijke tabel, met geconcateneerde vertrek en aankomsttijd
CREATE TABLE tempTable
SELECT	voyId, 
		VoyDASNumber,
		CONCAT(CONCAT_WS("-", `voyDepartureYear`, `voyDepartureMonth`, `voyDepartureDay`),'T00:00:00Z') AS `voyDepartureDate`,
		voyDeparturePlaceId, 
		voyDepartureRegioId,
		CONCAT(CONCAT_WS("-", `voyArrivalYear`, `voyArrivalMonth`, `voyArrivalDay`),'T00:00:00Z') AS `voyArrivalDate`,
		voyArrivalPlaceId,
		voyArrivalRegioId
FROM `bgbVoyage`;

-- Wrs niet de mooiste oplossing, maar anders werkt INNER JOIN niet
CREATE TABLE tempPlaceArrival LIKE bgbPlace;
INSERT INTO tempPlaceArrival SELECT * FROM bgbPlace;
ALTER TABLE tempPlaceArrival
CHANGE naam PlaceOfArrival varChar(255);

-- Tijdelijke tabel voor Places, omzetting ID's naar namen
CREATE TABLE tempTablePlace
SELECT 	e.voyId, 
		e.voyDASNumber, 
		e.voyDepartureDate, 
		e.voyArrivalDate,
		d.naam, 
		f.PlaceOfArrival 
FROM tempTable e 
INNER JOIN bgbPlace d 
ON e.voyDeparturePlaceId = d.id 
INNER JOIN tempPlaceArrival f 
ON e.voyArrivalPlaceId = f.id;

-- Pas columnnaam aan: naam > PlaceOfDeparture
ALTER TABLE tempTablePlace
CHANGE naam PlaceOfDeparture varChar(255);

-- Weer niet de mooiste oplossing, maar anders werkt INNER JOIN niet
CREATE TABLE tempRegioArrival LIKE bgbRegio;
INSERT INTO tempRegioArrival SELECT * FROM bgbRegio;
ALTER TABLE tempRegioArrival
CHANGE naam PlaceOfArrival varChar(255);

-- Tijdelijke tabel voor Regios, omzetting ID's naar namen
CREATE TABLE tempTableRegio
SELECT	e.voyId, 
		e.voyDASNumber, 
		e.voyDepartureDate, 
		e.voyArrivalDate,
		s.naam, 
		f.PlaceOfArrival 
FROM tempTable e 
INNER JOIN bgbRegio s
ON e.voyDepartureRegioId = s.id 
INNER JOIN tempRegioArrival f 
ON e.voyArrivalRegioId = f.id
WHERE `voyDeparturePlaceId` IS NULL OR `voyArrivalPlaceId` IS NULL;

-- Pas opnieuw columnnaam aan: naam > PlaceOfDeparture
ALTER TABLE tempTableRegio
CHANGE naam PlaceOfDeparture varChar(255);

-- Merge tijdelijke tables
CREATE TABLE bgbVoyageReformat
AS SELECT * FROM tempTablePlace
UNION SELECT * FROM tempTableRegio;

ALTER TABLE bgbVoyageReformat
ADD PRIMARY KEY (voyId);  

-- Drop alle tijdelijke tables
DROP TABLE 	tempTable,
			tempTableRegio,
			tempTablePlace,
			tempRegioArrival,
			tempPlaceArrival;

-- \/\/\/\/\/\/\/\/ --
--   DAS GEDEELTE   --
-- /\/\/\/\/\/\/\/\	--
CREATE TABLE tempTableDAS
SELECT 	voyId, 
		VoyNumber, 
		voyDeparture, 
		voyArrivalDate,
		voyDeparturePlace,
		voyArrivalPlace
FROM `voyage`;

-- Tijdenfix
-- Tijden worden hierbij uitelkaar getrokken
CREATE TABLE tempTableDASTimefix
SELECT 	voyId,
		voyNumber,
		SUBSTRING_INDEX(`voyDeparture`, '-', -1) AS `voyVertrekJaar`,
        SUBSTRING_INDEX(`voyDeparture`, '-', 1) AS `voyVertrekDag`,
        SUBSTRING_INDEX(`voyDeparture`, '-', 2) AS `voyVertrekTijdelijk`,
        SUBSTRING_INDEX(`voyArrivalDate`, '-', -1) AS `voyAankomstJaar`,
        SUBSTRING_INDEX(`voyArrivalDate`, '-', 1) AS `voyAankomstDag`,
        SUBSTRING_INDEX(`voyArrivalDate`, '-', 2) AS `voyAankomstTijdelijk`,
        voyDeparturePlace,
        voyArrivalPlace
FROM `voyage`;

-- Ook de maanden worden nu goedgezet
CREATE TABLE tempTableDASTimefixIncludeMonths
SELECT	*,
		SUBSTRING_INDEX(`voyVertrekTijdelijk`, '-', -1) AS `voyVertrekMaand`,
        SUBSTRING_INDEX(`voyAankomstTijdelijk`, '-', -1) AS `voyAankomstMaand`
FROM tempTableDASTimefix;

-- Vervolgens samenvoeging verschillende tijden
CREATE TABLE tempTableDASTimestamp
SELECT	voyId, 
		VoyNumber,
		CONCAT(CONCAT_WS("-", `voyVertrekJaar`, `voyVertrekMaand`, `voyVertrekDag`),'T00:00:00Z') AS `voyDepartureDate`,
		CONCAT(CONCAT_WS("-", `voyAankomstJaar`, `voyAankomstMaand`, `voyAankomstDag`),'T00:00:00Z') AS `voyArrivalDate`,
		voyDeparturePlace,
		voyArrivalPlace
FROM `tempTableDASTimefixIncludeMonths`;

-- Uniformering columnnamen
ALTER TABLE tempTableDASTimestamp
CHANGE VoyNumber voyDASNumber varchar(255),
CHANGE voyDeparturePlace PlaceOfDeparture varchar(255),
CHANGE voyArrivalPlace PlaceofArrival varchar(255);


-- \/\/\/\/\/\/\/\/\/\  --
--   MERGING DAS/BGB    --
-- /\/\/\/\/\/\/\/\/\/	--

-- Tijdelijke oplossing: separeer rows zonder DAS ID
CREATE TABLE bgbVoyageReformatMinusDAS 
SELECT * 
FROM bgbVoyageReformat 
WHERE `voyDASNumber` IS NULL OR `voyDASNumber` = '';

-- Merge DAS en BGB
CREATE TABLE bgbdasVoyageMerge
AS SELECT * FROM tempTableDASTimestamp
UNION SELECT * FROM bgbVoyageReformatMinusDAS;

ALTER TABLE bgbdasVoyageMerge
ADD PRIMARY KEY (voyId);  

-- Creeer routes
CREATE TABLE bgbdasVoyageMergeRoute
SELECT 	*,
		CONCAT_WS("-", `PlaceOfDeparture`, `PlaceofArrival`) AS `voyRoute`
FROM bgbdasVoyageMerge;

-- Nieuwe tabel met routes
CREATE TABLE hdatRoutes
SELECT DISTINCT `voyRoute`
FROM bgbdasVoyageMergeRoute;

ALTER TABLE hdatRoutes
ADD routeId MEDIUMINT NOT NULL AUTO_INCREMENT KEY;
ALTER TABLE hdatRoutes
CHANGE COLUMN voyRoute voyRoute varchar(511) AFTER routeId;

-- Vervang strings met ids
CREATE TABLE bgbdasVoyageMergeRouteId
SELECT 	e.*,
		d.routeId
FROM bgbdasVoyageMergeRoute e 
INNER JOIN hdatRoutes d 
ON e.voyRoute = d.voyRoute;

ALTER TABLE bgbdasVoyageMergeRouteId
ADD PRIMARY KEY (voyId);  

-- Drop loze tabellen
DROP TABLE 	tempTableDAS,
			bgbdasVoyageMerge,
			bgbdasVoyageMergeRoute,
			tempTableDASTimestamp,
			tempTableDASTimefixIncludeMonths,
			tempTableDASTimefix;	
