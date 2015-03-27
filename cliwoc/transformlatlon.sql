-- Voeg the_geom toe en zet lat en long om naar EPSG 4326
ALTER TABLE cliwocreformat ADD COLUMN the_geom geometry(POINT,4326);
UPDATE cliwocreformat SET the_geom = ST_SetSRID(ST_MakePoint(longitude,latitude),4326);

-- Begin transformatie
ALTER TABLE cliwocreformat ADD COLUMN the_geom_webmercator geometry(POINT,3857);
UPDATE cliwocreformat SET the_geom_webmercator = CDB_TransformToWebmercator(the_geom);