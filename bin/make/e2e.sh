#!/usr/bin/env bash

set -o errexit

project_root=$(cd $(dirname "${BASH_SOURCE}")/../..; pwd)

if ! command -v jq &> /dev/null; then
  echo "jq could not be found, please install it."
  exit 1
else
  PLAYWRIGHT_VERSION=$(jq -r '.devDependencies["@playwright/test"]' "$(dirname "$0")/../../package.json")
fi
UBUNTU_VERSION=noble

PWD="$(pwd)"
E2E_FLAG=""
PORT_ARGS=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --update)
            E2E_FLAG=":update"
            ;;
        --ui)
            E2E_FLAG=":ui"
            # Map the UI port (9323) from container to host.
            UI_PORT=9323
            ;;
        --report)
            E2E_FLAG=":report"
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
    shift
done

# `docker compose run` does not honor the ports configuration in the docker-compose file.
# Instead, it requires explicit port mappings via the --publish flag.
# On the other hand, `docker compose up` will use the ports configuration in the docker-compose file.
docker_compose_command="run --rm e2e"

# If running in UI mode, print the URL users should visit.
if [ "$E2E_FLAG" = ":ui" ]; then
  echo "Open http://localhost:9323 in your browser."
  docker_compose_command="up --remove-orphans"
fi

export PLAYWRIGHT_VERSION
export UBUNTU_VERSION
export E2E_FLAG
export XVFB
export UI_PORT
export PWD

docker compose --file "${project_root}/bin/docker/docker-compose.e2e.yml" ${docker_compose_command}
