# Easy life

Script for application publishing on all platforms with docker compose

## Main commands

- `--run`
- `--certbot`
- `--env`

## Running commands

Commands are run with setup.sh script: `./setup.sh`. In case that it script won't start give it privilege to
execute (`sudo chmod +x setup.sh`)
Before running any commands, create copy of `.env.example` file with name `.env`
and fill variables so service can run. this can be also done with running `--env` command.

### Command `--initial`

This command must be added to the first run of the script !

### Command `--run`

this command will run docker compose. Here you need to specify all what services you want to run

#### Available services

| service                      | command name |
|------------------------------|--------------|
| services application         | services     |
| nginx with all configuration | web_server  |
| hasura engine                | hasura       |
| postgres (database)          | postgres     |
| mailhog                      | mailhog     |


all services are separated by comma (`,`).

Example: `--run=hasura,services,web_server,mailhog`
In this example only two application will start. Those are: services application and hasura engine


### Command `--certbot`

Will run certbot to create ssl certificate for specific domain for this command you need to specify params: `--email`
and `--address`
**Command needs to be run for each address**



_Note: `--` as prefix for commands is not mandatory all commands can be run without it, I just like how it looks_