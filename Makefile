# Executables (local)
DOCKER_COMP						= docker-compose
DOCKER_PART_PHP_NAME	= php
SHELL									= bash

# Docker containers
PHP_CONT_PHP = cd ./docker/ && $(DOCKER_COMP) exec $(DOCKER_PART_PHP_NAME)

# Executables
PHP      = $(PHP_CONT_PHP) php
COMPOSER = $(PHP_CONT_PHP) composer
MAKE  	 = $(PHP_CONT_PHP) make

# Misc
.DEFAULT_GOAL = help
.PHONY        = help build up start down logs sh bash composer vendor make phpunit test analyze

## —— 🐳 The Spirit Web Twig Bundle Makefile 🐳  —————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Docker 🐳 ————————————————————————————————————————————————————————————————
build: ## Builds the Docker images
	cd ./docker/ && $(DOCKER_COMP) build --pull --no-cache

up: ## Start the docker hub in detached mode (no logs), pass the parameter "f=" to `docker compose` file
	@$(eval f ?=)
	@upCommand="cd ./docker/ && $(DOCKER_COMP)"; \
	if [ -n "$f" ]; then \
		upCommand+=" --file $(f)"; \
	fi; \
	upCommand+=" up --detach"; \
	echo $$upCommand; \
	eval $$upCommand

start: build up vendor ## Build and start the containers

down: ## Stop the docker hub
	cd ./docker/ && $(DOCKER_COMP) down --remove-orphans

logs: ## Show live logs
	cd ./docker/ && $(DOCKER_COMP) logs --tail=0 --follow

bash: ## Connect to the PHP container
	$(PHP_CONT_PHP) bash

sh: bash

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

test: ## Run composer tests
	@$(COMPOSER) tests

## —— Makefile —————————————————————————————————————————————————————————————————
make: ## Run makefile in app pass the parameter "c=" to run a given command, example: make make c=npm-test
	@$(eval c ?=)
	@$(MAKE) $(c)
