#!/bin/bash

green='\033[0;32m'
red='\033[0;31m'
NC='\033[0m' # No Color

# Voeg functie the_geom_webmercator transformatie, voor het geval je hem niet hebt
psql -d template_postgis -f CDB_TransformToWebmercator.sql
echo "	${green}✓ CDB_TransformToWebmercator${NC}"

psql -d template_postgis -f cliwoc_pgimport.sql
echo "	${green}✓ Basisstructuur tabel${NC}"

echo "	${red}=======================${NC}"
echo "	${red}=======BELANGRIJK======${NC}"
echo "	${red}=======================${NC}"
echo ""
echo "	Voer in 1) ${red}psql template_postgis${NC}"
echo "	Vervolgens 2) ${red} COPY cliwocreformat FROM '/Users/erik/Desktop/hdat-plan/cliwoc/allvoyages (2).csv' WITH (FORMAT CSV, DELIMITER ',', NULL 'NULL');${NC}"
echo "	Daarna sluiten en 3) ${red}psql -d template_postgis -f transformlatlon.sql${NC}"