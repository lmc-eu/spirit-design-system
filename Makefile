# Defining shell is necessary in order to modify PATH
SHELL := sh
export PATH := bin/:node_modules/.bin/:$(PATH)
export NODE_OPTIONS := --trace-deprecation

# On CI servers, use the `yarn install --frozen-lockfile` installer to avoid introducing changes to the package-lock.json
# On developer machines, prefer the generally more flexible `yarn install`. 💪
YARN_I := $(if $(CI), install --frozen-lockfile, install)

# Modify these variables in local.mk to add flags to the commands, ie.
# YARN_FLAGS += --prefer-offline
YARN_FLAGS :=
LERNA_FLAGS :=

# Use `make target DEBUG=true` for enabling debug mode
LERNA_NO_PUSH := $(if $(DEBUG), --no-git-tag-version)

# Git hooks to be installed into the project workspace
# GITFILES := $(patsubst bin/githooks/%, .git/hooks/%, $(wildcard bin/githooks/*))

# Since this is the first target, Make will do this when make is invoked without arguments
all: install

# TASK DEFINITIONS

install: node_modules

outdated:
	yarn outdated || true
	lerna exec "yarn outdated || true"

unlock: pristine
	rm -f yarn.lock packages/*/yarn.lock
	touch package.json

clean:
	rm -rf {.nyc_output,coverage}
	find . -name '*.log' -print -delete

pristine: clean
	rm -rf node_modules packages/*/node_modules

version:
# @see https://github.com/lerna/lerna/tree/main/commands/version#readme
# Bump version of packages changed since the last release
## `./bin/ci/semver.sh` - determines semantic versioning keyword, e.g.: major, minor, patch
## --yes` - skip all confirmation prompts
	yarn lerna version $(shell ./bin/ci/semver.sh) --yes --no-push $(LERNA_FLAGS) $(LERNA_NO_PUSH)

publish:
# @ee: https://github.com/lerna/lerna/tree/main/commands/publish#readme
# Publish packages updated since the last release
## `from-package` - list of packages to publish is determined by inspecting each `package.json`
## `--yes` - skip all confirmation prompts
## `--no-verify-access` - disable verification of the logged-in npm user's access to the packages about to be published
	npx lerna publish from-package --yes --no-verify-access $(LERNA_FLAGS)

# GENERIC TARGETS

node_modules: package.json
	yarn $(YARN_I) $(YARN_FLAGS) && touch node_modules

# Use this prerequisite to force the target to never be treated as "up to date"
.PHONY: force

	# If this file exists, load it and add it to this makefile.
	# Useful for defining per-developer variables or make targets. This file should not be under
	# version control. ⚠️
-include local.mk
