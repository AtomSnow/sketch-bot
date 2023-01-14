#!/bin/bash
echo "--- Current system info ---"
uname -a
echo "--- Installing everything ---"
npm install -g typescript @angular/cli
cd .. && npm install
cd WebApp && npm install
cd Server && npm install