#!/bin/sh

set -o errexit

# Lerna always uses npm to publish packages. If you use a package manager other than npm,
# you will need to still add the appropriate publishing configuration to .npmrc,
# even if npmClient is set to something other than npm in lerna.json.
# @see: https://lerna.js.org/docs/features/version-and-publish#from-package

# @TODO: remove automation token when Lerna adds support for OIDC and trusted publishing
# @see: https://github.com/lerna/lerna/issues/4219

# Authorize npm for publishing
cat <<NPMRC >> .npmrc
@alma-oss:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
NPMRC

npm whoami
