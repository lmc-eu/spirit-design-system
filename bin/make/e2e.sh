#!/bin/sh

set -o errexit

PLAYWRIGHT_VERSION=1.40.1
UBUNTU_VERSION=jammy

docker run --rm --network=host --ipc=host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION-$UBUNTU_VERSION yarn test:e2e
