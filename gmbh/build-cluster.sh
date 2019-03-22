#!/bin/bash

# docker build -t gmbh-img-core -f ./Dockerfiles/core.Dockerfile --build-arg CACHEBUST=$(date +%s) ./
# docker build -t gmbh-img-procm -f ./Dockerfiles/procm.Dockerfile --build-arg CACHEBUST=$(date +%s)  ./

cd ../
docker build -t gmbh-img-node_2 -f ./node_2.Dockerfile --build-arg CACHEBUST=$(date +%s)  ./
docker build -t gmbh-img-node_1 -f ./node_1.Dockerfile --build-arg CACHEBUST=$(date +%s)  ./