#!/bin/sh

set -o errexit

PLAYWRIGHT_VERSION=1.39.0
UBUNTU_VERSION=jammy

docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION-$UBUNTU_VERSION yarn test:e2e
