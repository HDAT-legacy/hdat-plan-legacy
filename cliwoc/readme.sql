psql -d template_postgis -f /Users/erik/Desktop/hdat-plan/sql/cliwoc_pgimport.sql

DROP TABLE IF EXISTS cliwocreformat;
CREATE TABLE cliwocreformat (
	id			integer, 
	timestamp	timestamp, 
	latitude 	float, 
	longitude 	float
);

psql template_postgis \copy cliwocreformat FROM '/Users/erik/Desktop/hdat-plan/data/allvoyages (2).csv' WITH (FORMAT CSV, DELIMITER ',', NULL 'NULL');

-- Voeg the_geom toe en zet lat en long om naar EPSG 4326
ALTER TABLE cliwocreformat ADD COLUMN the_geom geometry(POINT,4326);
UPDATE cliwocreformat SET the_geom = ST_SetSRID(ST_MakePoint(longitude,latitude),4326);

-- The_geom_webmercator transformatie, voor het geval je hem niet hebt
psql -d template_postgis -f /Users/erik/Desktop/hdat-plan/sql/CDB_TransformToWebmercator.sql

-- Begin transformatie
ALTER TABLE cliwocreformat ADD COLUMN the_geom_webmercator geometry(POINT,3857);
UPDATE cliwocreformat SET the_geom_webmercator = CDB_TransformToWebmercator(the_geom);