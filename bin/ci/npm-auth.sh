#!/bin/sh

set -o errexit

# Authorise npm for publishing
cat <<NPMRC >> .npmrc
@lmc-eu:registry=https://registry.npmjs.org/
NPMRC

npm whoami
