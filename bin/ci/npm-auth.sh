#!/bin/sh

set -o errexit

# Authorise npm for publishing
cat <<NPMRC >> .npmrc
@lmc-eu:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
NPMRC

npm whoami
