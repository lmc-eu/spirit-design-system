# Executables (local)
PKG_MANAGER   = yarn
PKG_EXECUTE   = npx
MONOREPO_TOOL = lerna

# Flags
# Modify these variables in local.mk to add flags to the commands, ie.
# YARN_FLAGS += --prefer-offline
PKG_MANAGER_FLAGS :=
# On CI servers, use the `yarn install --frozen-lockfile` installer to avoid introducing changes to the package-lock.json
# On developer machines, prefer the generally more flexible `yarn install`. 💪
PKG_MANAGER_INSTALL := $(if $(CI), install --frozen-lockfile, install)
MONOREPO_TOOL_FLAGS :=
# Use `make target DEBUG=true` for enabling debug mode
MONOREPO_TOOL_NO_PUSH := $(if $(DEBUG), --no-git-tag-version)

# Misc
.DEFAULT_GOAL = help
.PHONY        = help sh bash

# If this file exists, load it and add it to this makefile.
# Useful for defining per-developer variables or make targets. This file should not be under
# version control. ⚠️
-include local.mk

## —— 🐳 The Jobs Design System Makefile 🐳  —————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Dependencies 📦 ——————————————————————————————————————————————————————————————

install: ## Install dependencies
	$(PKG_MANAGER) $(PKG_MANAGER_INSTALL) $(PKG_MANAGER_FLAGS) && touch node_modules

outdated: ## List outdated dependencies
	$(PKG_MANAGER) outdated || true
	$(PKG_MANAGER) $(MONOREPO_TOOL) exec "$(PKG_MANAGER) outdated || true"

unlock: ## Unlock dependencies
	pristine
	rm -f yarn.lock packages/*/yarn.lock
	touch package.json

pristine: ## Remove all `node_modules` and files
	clean
	rm -rf node_modules packages/*/node_modules

## —— Release 🚀 ——————————————————————————————————————————————————————————————

version: ## Create new version of packages
# @see https://github.com/lerna/lerna/tree/main/commands/version#readme
# Bump version of packages changed since the last release
# `./bin/ci/semver.sh` - determines semantic versioning keyword, e.g.: major, minor, patch
# --yes` - skip all confirmation prompts
	$(PKG_MANAGER) $(MONOREPO_TOOL) version $(shell ./bin/ci/semver.sh) --yes --no-push $(MONOREPO_TOOL_FLAGS) $(MONOREPO_TOOL_NO_PUSH)

publish: ## Publish packages to repository
# @ee: https://github.com/lerna/lerna/tree/main/commands/publish#readme
# Publish packages updated since the last release
# `from-package` - list of packages to publish is determined by inspecting each `package.json`
# `--yes` - skip all confirmation prompts
# `--no-verify-access` - disable verification of the logged-in npm user's access to the packages about to be published
	$(PKG_EXECUTE) $(MONOREPO_TOOL) publish from-package --yes --no-verify-access $(MONOREPO_TOOL_FLAGS)

## —— Miscellaneous 🛠️ ——————————————————————————————————————————————————————————————

clean: ## Clean output files
	rm -rf {.nyc_output,coverage}
	find . -name '*.log' -print -delete
