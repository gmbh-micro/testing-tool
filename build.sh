#!/bin/bash

cd services
cd c0 && make
cd ../c1 && make
cd ../c2 && make
cd ../c3 && make
cd ../c4 && make
cd ../webserver && make
