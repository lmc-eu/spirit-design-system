#!/usr/bin/env bash

set -o errexit

project_root=$(cd $(dirname "${BASH_SOURCE}")/../..; pwd)

if ! command -v jq &> /dev/null; then
  echo "jq could not be found, please install it."
  exit 1
else
  PLAYWRIGHT_VERSION=$(jq -r '.devDependencies["@playwright/test"]' $(dirname "$0")/../../package.json)
fi
UBUNTU_VERSION=jammy

E2E_FLAG=""
XVFB=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --update)
            E2E_FLAG=":update"
            ;;
        --ui)
            E2E_FLAG=":ui"
            # https://playwright.dev/docs/next/ci#running-headed
            XVFB="xvfb-run"
            ;;
        --report)
            E2E_FLAG=":report"
            ;;
        *)
            # Unknown option
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
    shift
done

if [ "$(uname)" = "MINGW64_NT" ] || [ "$(uname)" = "MINGW32_NT" ]; then
    # Convert Windows path to Unix path for Docker
    WORK_DIR=$(cygpath -u "$(pwd)")
else
    WORK_DIR=$(pwd)
fi

export PLAYWRIGHT_VERSION
export E2E_FLAG
export XVFB

docker compose --file "${project_root}/docker/docker-compose-e2e.yml" run --rm e2e
