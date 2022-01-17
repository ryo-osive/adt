#!/bin/bash

#### Elastic Search Config
export ELASTICSEARCH_NODE="http://192.168.1.18:9200"
export ELASTIC_USERNAME=elastic
export ELASTIC_PASSWORD=changeme
#

#### Script Path
#### Change following path as you needed
export PS_SCRIPT_PATH=$HOME/Grid-3.0-Rocket/Backend/scripts/windows.ps1
export SH_SCRIPT_PATH=$HOME/Grid-3.0-Rocket/Backend/scripts/linux.sh
#

##### Database Config
export MONGO_DBNAME='myFirstDatabase'
export MONGO_HOSTS='amt.5wmz6.mongodb.net'
export MONGO_USERNAME='amt'
export MONGO_PASSWORD='dH5TWNJyVQn1cNZA'
export MONGO_READ_PREFERENCE=primary
export MONGO_PEM_PATH=''
#

##### JWT SECRET
export JWT_SECRET_KEY=fsjkfksdfkjsiufhsidfnisnfdi


#### Kibana URL
export KIBANA_URL='http://localhost:5601/'

#### Cron Period
export CRON_TIME='*/15 * * * *'

npm start