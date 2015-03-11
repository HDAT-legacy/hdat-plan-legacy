-- Probeersels routes
-- Voeg nieuwe kolommen toe, waarbij iedere kolom een x y cood is
ALTER TABLE hdatRoutes ADD cood1 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood2 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood3 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood4 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood5 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood6 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood7 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood8 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood9 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood10 VARCHAR(60);
ALTER TABLE hdatRoutes ADD cood11 VARCHAR(60);

-- Bullshit data
UPDATE `bgb`.`hdatRoutes` SET `cood1` = '3.779296875' WHERE `hdatroutes`.`routeId` = 3;
UPDATE `bgb`.`hdatRoutes` SET `cood2` = '51.37178037591739' WHERE `hdatroutes`.`routeId` = 3;
UPDATE `bgb`.`hdatRoutes` SET `cood3` = '-7.690429687500001' WHERE `hdatroutes`.`routeId` = 3;
UPDATE `bgb`.`hdatRoutes` SET `cood4` = '47.72454454909968' WHERE `hdatroutes`.`routeId` = 3;
UPDATE `bgb`.`hdatRoutes` SET `cood5` = '-18.10930760834083' WHERE `hdatroutes`.`routeId` = 3;
UPDATE `bgb`.`hdatRoutes` SET `cood6` = '28.700797706101312' WHERE `hdatroutes`.`routeId` = 3;
UPDATE `bgb`.`hdatRoutes` SET `cood7` = '-15.468750000000005' WHERE `hdatroutes`.`routeId` = 3;
UPDATE `bgb`.`hdatRoutes` SET `cood8` = '41.70572851523752' WHERE `hdatroutes`.`routeId` = 3;

-- Voeg tabellen samen
-- Maar eerst zorgen dat tabellen niet overlappen
ALTER TABLE hdatRoutes
CHANGE routeId routerouteId varchar(255),
CHANGE voyRoute voyvoyRoute varchar(255);

CREATE TABLE bgbdatTesttesttest
SELECT * FROM bgbdasVoyageMergeRouteId
LEFT JOIN hdatRoutes ON bgbdasVoyageMergeRouteId.routeId = hdatRoutes.routerouteId
UNION
SELECT * FROM bgbdasVoyageMergeRouteId
RIGHT JOIN hdatRoutes ON bgbdasVoyageMergeRouteId.routeId = hdatRoutes.routerouteId;

-- Vervolgens zooi eruit halen

-- TORQUE TEST, TREK ALLEEN ROUTES ERUIT MET COORDINATES
CREATE TABLE bgbdashdatVoyagesCoodOnly3
SELECT *
FROM bgbdashdatVoyagesCood
WHERE `routeId` = '3';

-- Export
 
