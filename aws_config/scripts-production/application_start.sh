#!/bin/bash

# Stop all servers and start the server as a daemon
pm2 stop all
#O padrão é a pasta opt/codedeploy-agent (ou algo assim), por isso o ../../
pm2 start ../../home/admin/project-api-production/server.js

# Quando o servidor de teste não for mais necessário, remover esta linha
pm2 start ../../home/admin/project-api-production/server.js

pm2 save