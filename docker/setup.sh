#!/bin/bash

declare -A params=()
for i in $@; do
  replaced="${i/--/}"
  IFS='=' read -a Vars <<<"$replaced"
  if [ ${Vars[1]} ]; then
    declare "params_${Vars[0]}=${Vars[1]}"
  else
    declare "params_${Vars[0]}=true"
  fi

done

run_docker="params_run"
run_certbot="params_certbot"
run_env="params_env"
run_initial="params_initial"

# variables from .env file and put them in script
if [ -f .env ]; then
  export $(cat .env | xargs)
fi

function setup() {

  if [ "${!run_env}" ]; then
    cp .env.example .env
    nano .env
  fi

    if [ "${!run_initial}" ]; then



      mkdir certbot
      mkdir certbot/conf
      mkdir certbot/conf/live


      mkdir certbot/conf/live/$HASURA_URL
      docker run --name=openssl  -it -v $(pwd):/export frapsoft/openssl  req -x509 -nodes -days 365     -subj  "/C=CA/ST=QC/O=Company Inc/CN=example.com"      -newkey rsa:2048 -keyout /export/privkey.pem     -out /export/fullchain.pem;
      mv fullchain.pem certbot/conf/live/$HASURA_URL/fullchain.pem
      mv privkey.pem certbot/conf/live/$HASURA_URL/privkey.pem
      docker container rm openssl

      mkdir certbot/conf/live/$SERVICES_URL
      docker run --name=openssl  -it -v $(pwd):/export frapsoft/openssl  req -x509 -nodes -days 365     -subj  "/C=CA/ST=QC/O=Company Inc/CN=example.com"      -newkey rsa:2048 -keyout /export/privkey.pem     -out /export/fullchain.pem;
      mv fullchain.pem certbot/conf/live/$SERVICES_URL/fullchain.pem
      mv privkey.pem certbot/conf/live/$SERVICES_URL/privkey.pem
      docker container rm openssl

    fi

  if [ "${!run_docker}" ]; then
    vars="${!run_docker}"
    if [[ vars == *"postgres"* ]]; then
      vars=${vars/postgres/}
      vars+="hasura " + vars
    fi
    docker-compose up -d ${vars//,/ }
  fi

  if [ "${!run_certbot}" ]; then
    certbot_email="params_email"
    certbot_address="params_address"

    if [[ "${!certbot_email}" && "${!certbot_address}" ]]; then
      export SSL_EMAIL="${!certbot_email}"
      export SSL_ADDRESS="${!certbot_address}"
      docker-compose up certbot
      
    else
      echo "Please add params 'email' and 'address"
    fi

  fi

}

setup
