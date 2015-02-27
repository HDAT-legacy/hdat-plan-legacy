# Nederlandse Oost-Indische Companie

## Samenvatting

Een interactieve web-visualisatie van DAS en BGB. 

## Doelen

1. Een geografisch inzicht geven in de schaal en het tijdbestek van de Nederlandse handel met Azië in de 17e en 18e eeuw.
2. De impact op de betreffende landen laten zien.
3. Een detailview die de inhoud van de handel zichtbaar maakt. Dit moet zichtbaar worden door een directe samenhang van grafiek en geografische weergave. Eventueel aangevuld met een detailview van individuele schepen. 
4. Belangrijke evenementen die invloed hebben gehad op de Nederlandse handel met Azië in de 17e en 18e eeuw bijvoegen.
5. Een interpretatie in de vorm van narratief aan de visualisatie toevoegen.

## Leerdoelen

1. Omgaan met GIS en gereedschappen voor datatransformatie.
2. Kritisch naar het gebruik van DH te kijken.
3. Dieper inzicht verkrijgen in de Nederlandse handel met Azië in de 17e en 18e eeuw en haar impact op de Nederlandse samenleving.

## Plan

-> Kan individueel
1. Data preparatie in node. De datasets moeten flink opgeschoond en aangevuld worden met geografische gegevens en ontbrekende data moeten geëxtrapoleerd worden. Daarnaast moeten waardes correct genormaliseerd worden. Unieke schepen moeten ook gecheckt worden, om schepen niet dubbel te visualiseren.

-> Kan individueel
2. Creatie van een prettige kaartinterface en styling. Aangezien de map uit verschillende lagen bestaat is deze onafhankelijk van de werkelijke visualisatie. Deze basis kan worden gelegd met leaflet en map-tiles.

-> Deze kan met mockdata
3. Creatie van de ship-visualisatie. Dit is een aparte laag bovenop de map-tiles. Waarschijnlijk gedreven door Torque, maar mocht deze niet toereikend zijn, zijn er andere opties om te verkennen. Dit zal echter weinig uitmaken voor de vorige stappen.

-> Kan individueel, wellicht samen met leaflet interface layer?
4. Toevoegen van een gestileerde tijdsnavigatie-balk. Op dit moment nog zonder verdere informatie.
5. De tijdsnavigatie-balk verder aanvullen met informatie over bijvoorbeeld de grote van de vloot op een gegeven moment, of te totale waarde in omloop.
5. Dezelfde tijdnavigatie-balk ook kunnen inzetten om detailviews van de inhoud van de handel weer te geven.

-> Deze stap is vooral afhankelijk dat er een leaflet map is. Torque is minder van belang, al moet het wel een tijdsinvoer hebben. 
7. Toevoegen van wellicht een door SVG gedreven visualisatie van de impact op de landen. (inkleuren van gebieden/iconen weergeven)
Dit kan gebeuren in een aparte laag op de kaart die niet altijd zichtbaar hoeft te zijn.

-> Evenzo afhankelijk van Leaflet, maar verder individueel op basis van tijdsinvoer.
8. Belangrijke gebeurtenissen die impact hebben gehad op de handel toevoegen aan de kaart in een aparte laag.

9. De gehele visualisatie omkleden met een interpretatief en narratief verhaal. Eventueel gebruikmakend van foto’s en andere media. Evt. gebruikmakend van containersite.

## Data

In hoeverre verschillen de DAS-dataset en de BGB-dataset van elkaar? Er is enige overlap tussen de datasets te vinden. Zo bevat BGB een aantal reizen die ook in de DAS-set te vinden zijn. Deze zijn makkelijk te identificeren omdat BGB in die gevallen melding maakt van het DAS id-nummer. Des al niet te min zijn er ook flinke verschillen. De BGB-set bevat alleen reizen van en naar Batavia (de reizen die de 'Boekhouder-Generaal' in Batavia bijhield). De DAS-set begint vanaf 1595, terwijl BGB pas vanaf 1700 begint. DAS eindigt bij 1795, terwijl BGB doorgaat tot iets na 1800. Daarnaast verschillen de sets ook inhoudelijk van elkaar. DAS bevat enkel reizen van Europa naar Azië, terwijl BGB ook reizen in het Oost-Indische gebied bevat. Ook wat structuur betreft zijn er flinke verschillen. DAS bevat kwantitatieve informatie betreffende het personeel, en bevat losse, weinig systematische opmerkingen over de individuele reizen. BGB is wat algemene informatie vrij karig, maar bevat wel een indrukwekkende lijst met de goederen zich aan boord bevonden.

## Bronnen
* http://databases.tanap.net/ead/html/1.04.02/index.html?N105E9

## Technisch

We hebben een build tool nodig voor verschillende redenen. Ik denk dat gulp het beste is omdat we dan rechtstreeks node code kunnen uitvoeren. Daarmee kunnen we ook de dataset-transformaties rechtstreeks in de build opnemen (en daar gaan we er nogal wat van nodig hebben, door het hele process heen). 

Daarnaast moeten we gaan nadenken hoe we alle functionaliteiten in de app gaan organiseren. Het zijn aardig wat regeltjes code. We moeten goed in kaart brengen waar alle functionaliteiten met elkaar samenwerken, zodat iedere functie zo min mogelijk afhankelijk is van de andere. -> Zie mindmap

