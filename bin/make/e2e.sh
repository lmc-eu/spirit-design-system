#!/bin/sh

set -o errexit

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

docker run --rm --network=host --ipc=host  -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION-$UBUNTU_VERSION $XVFB sh -c "corepack install && corepack enable && yarn test:e2e$E2E_FLAG"
