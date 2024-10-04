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

## —— 👻 The Spirit Design System Makefile 👻 —————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Dependencies 📦 ——————————————————————————————————————————————————————————————

install: ## Install dependencies
	corepack enable
	$(PKG_MANAGER) $(PKG_MANAGER_INSTALL) $(PKG_MANAGER_FLAGS) && touch node_modules

outdated: ## List outdated dependencies
	$(PKG_MANAGER) outdated || true
	$(PKG_MANAGER) $(MONOREPO_TOOL) exec "$(PKG_MANAGER) outdated || true"

unlock: pristine ## Unlock dependencies
	rm -f yarn.lock packages/*/yarn.lock
	touch package.json
	touch yarn.lock

pristine: clean ## Remove all `node_modules`, `vendor` and files
	-rm -rf node_modules {apps,configs,examples,exporters,packages}/*/node_modules
	-rm -rf vendor {packages,apps}/*/vendor

## —— Development 🏗️ ——————————————————————————————————————————————————————————————

ifeq ($(pkg),)
start: ## Starts development environment, pass the parameter "pkg=" to start specific package environment, example: make start pkg=web
	@$(eval pkg ?=)
	@$(PKG_MANAGER) start
else
start:
	@$(eval pkg ?=)
	@$(PKG_MANAGER) run start --scope @lmc-eu/spirit-$(pkg)
endif

## —— Testing 🚦 ——————————————————————————————————————————————————————————————

format: ## Checks code formatting of all packages
	$(PKG_MANAGER) format

format-fix: ## Fixes code formatting
	$(PKG_MANAGER) format:fix

lint: ## Lints all packages
	$(PKG_MANAGER) lint

lint-fix: ## Fixes lint errors in all packages
	$(PKG_MANAGER) lint:fix

test: ## Run tests in all packages
	$(PKG_MANAGER) test

test-e2e: ## Run End-to-End tests
	./bin/make/e2e.sh

test-e2e-update: ## Update snapshots for End-to-End tests
	./bin/make/e2e.sh --update

test-e2e-report: ## Open report for End-to-End tests
	./bin/make/e2e.sh --report

test-e2e-ui: ## Open UI for End-to-End tests
	./bin/make/e2e.sh --ui

types: ## Check types in all packages
	$(PKG_MANAGER) types

## —— Release 🚀 ——————————————————————————————————————————————————————————————

build: ## Builds all packages
	$(PKG_MANAGER) build

version: ## Create new release version of packages
# @see https://github.com/lerna/lerna/tree/main/commands/version#readme
# Bump version of packages changed since the last release
# --yes` - skip all confirmation prompts
	$(PKG_MANAGER) $(MONOREPO_TOOL) version --create-release github --yes --no-push $(MONOREPO_TOOL_FLAGS) $(MONOREPO_TOOL_NO_PUSH)

preversion: ## Create new pre-release version of packages, use "preid=" parameter to specify pre-release identifier, example: make preversion preid=alpha
# @see https://github.com/lerna/lerna/tree/main/commands/version#readme
# Bump version of packages changed since the last release
# --yes` - skip all confirmation prompts
	@$(eval preid ?=)
	$(PKG_MANAGER) $(MONOREPO_TOOL) version --conventional-prerelease --preid $(preid) --create-release github --yes --no-push $(MONOREPO_TOOL_FLAGS) $(MONOREPO_TOOL_NO_PUSH)

graduate: ## Graduate a pre-release version of packages to stable
# @see https://github.com/lerna/lerna/tree/main/commands/version#readme
# Bump version of packages changed since the last release
# --yes` - skip all confirmation prompts
	$(PKG_MANAGER) $(MONOREPO_TOOL) version --conventional-graduate --create-release github --yes --no-push $(MONOREPO_TOOL_FLAGS) $(MONOREPO_TOOL_NO_PUSH)

ifeq ($(pkg),web-twig)
publish: ## Publish packages to repository, pass the parameter "pkg=" to publish specific package (supports only `web-twig`), example: make publish pkg=web-twig
	@$(eval pkg ?=)
	git push web-twig-readonly `git subtree split --prefix packages/web-twig main`:main
else
publish:
	@$(eval pkg ?=)
	$(PKG_EXECUTE) $(MONOREPO_TOOL) publish from-package --yes $(MONOREPO_TOOL_FLAGS)
endif

## —— Miscellaneous 🛠️ ——————————————————————————————————————————————————————————————

clean: ## Clean output files
	find . -path ./node_modules -prune -o -type d \( \
        -name '.nyc_output' -o \
        -name 'coverage' -o \
        -name '.coverage' -o \
        -name '.cache' -o \
        -name '.nx' -o \
        -name 'dist' -o \
        -name 'build' -o \
        -name 'esm' -o \
        -name 'cjs' -o \
        -name 'umd' -o \
        -name 'playwright-report' -o \
        -name 'test-results' -o \
        -name '.next' \
    \) -exec rm -rf {} +
		find . -path ./node_modules -prune -o -name '*.log' -print -delete
