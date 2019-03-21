#!/bin/bash

docker build -t gmbh-img-core -f ./Dockerfiles/core.Dockerfile --build-arg CACHEBUST=$(date +%s) ./
docker build -t gmbh-img-procm -f ./Dockerfiles/procm.Dockerfile --build-arg CACHEBUST=$(date +%s)  ./