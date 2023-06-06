#!/bin/bash

mkdir /home/admin/project-api-staging
cd /home/admin/project-api-staging

touch .env
echo 'APP_NAME=app_base' >> .env
echo 'PORT=3000' >> .env
echo 'HOST=0.0.0.0' >> .env
echo 'NODE_ENV=staging' >> .env
echo 'APP_KEY=mlIUITyHJAb2Qhc7sw4ZL7XBfwYVEKui' >> .env
echo 'DRIVE_DISK=local' >> .env
echo 'HASH_DRIVER=bcrypt' >> .env
echo 'PREFIX=staging' >> .env
echo 'DB_CONNECTION=pg' >> .env
echo 'PG_HOST=localhost' >> .env
echo 'PG_PORT=5432' >> .env
echo 'PG_USER=lucid' >> .env
echo 'PG_PASSWORD=35c4vdf' >> .env
echo 'PG_DB_NAME=lucid' >> .env

sudo npm ci --production
node ace migration:run
node ace db:seed
