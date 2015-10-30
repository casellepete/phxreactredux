#!/bin/bash
# docker_shell.sh

set -e

if (docker ps -a | grep phxreactredux_shell); then
  docker rm -f farmer_shell
fi


docker run -it --name phxreactredux_shell \
  -v "$PWD":/phxreactredux \
  -v /etc/ssl/cas-certs:/etc/ssl/cas-certs \
  -p 80:80 \
  -p 443:443 \
  -p 4000:4000 \
  -w /phoenix \
  caselle2/phoenix:v3 \
  bash

  #caselle2/phoenix:v1.0.2 \


exit 0
