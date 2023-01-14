#!/bin/bash
echo "--- Current system info ---"
uname -a
echo "--- Building server ---"
cd .. && cp package.json /Server/package.json
cd .. && cp settings.json /Server/settings.json
cd .. && cp app.yaml /Server/app.yaml
cd Server && tsc
echo "--- Building client ---"
cd WebApp && ng build --prod
echo "--- Starting server and client ---"
