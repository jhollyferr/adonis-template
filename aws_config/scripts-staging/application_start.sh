#!/bin/bash

# Stop all servers and start the server as a daemon
# Este stop all deve ser substituído por stop ../../home/admin/docdesk-api-test/server.js stop quando o servidor de produção estiver rodando junto
pm2 stop all

#O padrão é a pasta opt/codedeploy-agent (ou algo assim), por isso o ../../
pm2 start ../../home/admin/project-api-staging/server.js

pm2 save