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

E2E_FLAG=""
DOCKER_ARGS="--network=host"
PORT_ARGS=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --update)
            E2E_FLAG=":update"
            ;;
        --ui)
            E2E_FLAG=":ui"
            # For UI mode on Docker for Mac, we cannot use host networking.
            DOCKER_ARGS=""
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

# If running in UI mode, print the URL users should visit.
if [ "$E2E_FLAG" = ":ui" ]; then
  echo "Open http://localhost:9323 in your browser."
fi

export PLAYWRIGHT_VERSION
export UBUNTU_VERSION
export E2E_FLAG
export XVFB
export UI_PORT

docker compose --file "${project_root}/bin/docker/docker-compose.e2e.yml" run --rm e2e
