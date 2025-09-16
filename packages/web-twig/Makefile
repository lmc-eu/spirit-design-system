# Executables (local)
DOCKER_COMP						= SERVER_NAME="http://localhost" docker compose
DOCKER_PHP_SERVICE		= web-twig-demo-php
DOCKER_ENCORE_SERVICE	= web-twig-demo-encore
DOCKER_SERVER_SERVICE	= web-twig-demo-server
SHELL									= bash

# Paths
APP_DOCKER_DIR				= ./docker/
ICONS_PKG_DIR					= ./static/
DOCKER_PKG_DIR				= /srv/spirit-web-twig-bundle/
DOCKER_APP_DIR				= /srv/spirit-web-twig-demo/

# Docker containers
PHP_CONT_PHP = cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) exec --workdir $(DOCKER_PKG_DIR) $(DOCKER_PHP_SERVICE)

# Executables
PHP				= $(PHP_CONT_PHP) php
COMPOSER	= $(PHP_CONT_PHP) composer
CONT_MAKE	= $(PHP_CONT_PHP) make

# Misc
.DEFAULT_GOAL		= help
.PHONY					= help build up prestart start down logs sh bash cert composer install make phpunit test analyze icons-build

## —— 🐳 The Spirit Web Twig Bundle Makefile 🐳  ———————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Docker 🐳 ————————————————————————————————————————————————————————————————
build: ## Builds the Docker images
	cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) build --pull --no-cache

up: ## Start the docker hub in detached mode (no logs), pass the parameter "f=" to `docker compose` file
	@$(eval f ?=)
	@upCommand="cd $(APP_DOCKER_DIR) && $(DOCKER_COMP)"; \
	if [ -n "$f" ]; then \
		upCommand+=" --file $(f)"; \
	fi; \
	upCommand+=" up --detach"; \
	echo $$upCommand; \
	eval $$upCommand

down: ## Stop the docker hub
	cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) down --remove-orphans

logs: ## Show live logs
	cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) logs --tail=0 --follow

poststart: ## Finalization after start
	@if [ ! -d "$(ICONS_PKG_DIR)/svg" ]; then \
		$(MAKE) icons-copy; \
	fi

start: up install poststart ## Start the containers

stop: down ## Stop the docker hub (alias for `down`)

bash: ## Connect to the PHP container
	$(PHP_CONT_PHP) bash

sh: bash ## Connect to the PHP container (alias for `bash`)

ifeq ($(os),win)
cert: ## Trust the Authority of server certificates, pass the parameter "os=" with "win" | "linux" (default is "mac") for specific OS
	@$(eval os ?=)
	cd $(APP_DOCKER_DIR) && docker cp `docker compose ps -q $(DOCKER_SERVER_SERVICE)`:/data/caddy/pki/authorities/local/root.crt %TEMP%/root.crt && certutil -addstore -f "ROOT" %TEMP%/root.crt
else ifeq ($(os),linux)
cert:
	@$(eval os ?=)
	cd $(APP_DOCKER_DIR) && docker cp `docker compose ps -q $(DOCKER_SERVER_SERVICE)`:/data/caddy/pki/authorities/local/root.crt /usr/local/share/ca-certificates/root.crt && sudo update-ca-certificates
else
cert:
	@$(eval os ?=)
	cd $(APP_DOCKER_DIR) && docker cp `docker compose ps -q $(DOCKER_SERVER_SERVICE)`:/data/caddy/pki/authorities/local/root.crt /tmp/root.crt && sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /tmp/root.crt
endif

## —— Encore 🎭 ————————————————————————————————————————————————————————————————

encore-install: ## Install demo dependencies
	cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) exec $(DOCKER_ENCORE_SERVICE) yarn install

encore-build: ## Build demo assets
	cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) exec $(DOCKER_ENCORE_SERVICE) yarn build

encore-watch: ## Watch demo assets
	cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) exec $(DOCKER_ENCORE_SERVICE) yarn watch

encore-sh: ## Connect to encore using bash
	cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) exec $(DOCKER_ENCORE_SERVICE) sh

encore-logs: ## Show live logs for Encore service
	cd $(APP_DOCKER_DIR) && $(DOCKER_COMP) logs $(DOCKER_ENCORE_SERVICE) --tail=0 --follow

## —— Composer 🧙 ——————————————————————————————————————————————————————————————
composer: ## Run composer, pass the parameter "c=" to run a given command, example: make composer c='req symfony/orm-pack'
	@$(eval c ?=)
	@$(COMPOSER) $(c)

install: ## Install vendors according to the current composer.lock file
install: c=install --prefer-dist --no-progress --no-interaction
install: composer

phpstan: ## Run composer phpstan
	@$(COMPOSER) phpstan

phpunit: ## Run composer phpunit
	@$(COMPOSER) phpunit

phpunit-update: ## Run composer phpunit:update
	@$(COMPOSER) phpunit:update

phpunit-coverage: ## Run composer phpunit:coverage
	@$(COMPOSER) phpunit:coverage

ecs: ## Run composer ecs
	@$(COMPOSER) ecs

ecs-fix: ## Run composer ecs-fix
	@$(COMPOSER) ecs:fix

lint: ## Run linting
	@$(COMPOSER) lint

lint-fix: ## Fix linting errors
	@$(COMPOSER) lint:fix

test: ## Run composer tests
	@$(COMPOSER) test

## —— Helpers 🔧 —————————————————————————————————————————————————————————————————
icons-copy: ## Copy Icons package
	curl -L -o lmc-eu-spirit-icons-2.3.2.tgz https://registry.npmjs.org/@lmc-eu/spirit-icons/-/spirit-icons-2.3.2.tgz
	tar -xzf lmc-eu-spirit-icons-*.tgz -C ./static
	cp -r ./static/package/svg/* ./static
	rm lmc-eu-spirit-icons-*.tgz
	rm -rf ./static/package

## —— Makefile 📜 ————————————————————————————————————————————————————————————————
make: ## Run makefile in app pass the parameter "c=" to run a given command, example: make make c=npm-test
	@$(eval c ?=)
	@$(CONT_MAKE) $(c)
