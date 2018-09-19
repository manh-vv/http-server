#!/usr/bin/env bash

./cstop.sh

yarn compile

docker build -t manhvu2507/http-server .
docker push manhvu2507/http-server

docker run -d --name http-server --rm -p 8080:8080 -p 8081:8081 manhvu2507/http-server
docker logs -f http-server &
