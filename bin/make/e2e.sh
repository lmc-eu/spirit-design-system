#!/bin/sh

set -o errexit

PLAYWRIGHT_VERSION=1.44.0
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

docker run --rm --network=host --ipc=host  -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION-$UBUNTU_VERSION $XVFB yarn test:e2e$E2E_FLAG
