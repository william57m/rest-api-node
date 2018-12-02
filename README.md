# rest-api-node

Test structure for a NodeJS REST API using Restify, Sequelize and Postgresql

## Setup

```bash
# Build images
docker-compose build

# Init DB
docker run --rm \
           --link server-db \
           rest-api-node_server \
           npm run initdb
```


## Run

```bash
docker-compose up -d
```
