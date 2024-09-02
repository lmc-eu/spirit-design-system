#syntax=docker/dockerfile:1.8

# The different stages of this Dockerfile are meant to be built into separate images
# https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# https://docs.docker.com/compose/compose-file/#target

# Builder images
FROM composer/composer:2-bin AS composer

FROM mlocati/php-extension-installer:latest AS php_extension_installer

# Prod image
FROM php:8.3-fpm AS app_php

# Allow to use development versions of Symfony
ARG STABILITY="stable"
ENV STABILITY ${STABILITY}

# Allow to select Symfony version
ARG SYMFONY_VERSION=""
ENV SYMFONY_VERSION ${SYMFONY_VERSION}

ENV APP_ENV=prod

WORKDIR /srv/spirit-web-twig-demo

# php extensions installer: https://github.com/mlocati/docker-php-extension-installer
COPY --from=php_extension_installer --link /usr/bin/install-php-extensions /usr/local/bin/

# persistent / runtime deps
RUN apt-get update && apt-get install -y \
    acl \
    libfcgi-bin \
    file \
    gettext \
    git \
    zip

RUN set -eux; \
    install-php-extensions \
      intl \
      zip \
      apcu \
      opcache \
      tidy \
    ;

###> recipes ###
###< recipes ###

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY --link ./php/conf.d/app.ini $PHP_INI_DIR/conf.d/
COPY --link ./php/conf.d/app.prod.ini $PHP_INI_DIR/conf.d/

COPY --link ./php/php-fpm.d/zz-docker.conf /usr/local/etc/php-fpm.d/zz-docker.conf
RUN mkdir -p /var/run/php

COPY --link ./php/docker-healthcheck.sh /usr/local/bin/docker-healthcheck
RUN chmod +x /usr/local/bin/docker-healthcheck

HEALTHCHECK --interval=10s --timeout=3s --retries=3 CMD ["docker-healthcheck"]

COPY --link ./php/docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]
CMD ["php-fpm", "-R"]

# https://getcomposer.org/doc/03-cli.md#composer-allow-superuser
ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PATH="${PATH}:/root/.composer/vendor/bin"

COPY --from=composer --link /composer /usr/bin/composer

# prevent the reinstallation of vendors at every changes in the source code
COPY --link ../composer.* ../symfony.* ./
RUN set -eux; \
    if [ -f composer.json ]; then \
    composer install --prefer-dist --no-dev --no-autoloader --no-scripts --no-progress; \
    composer clear-cache; \
    fi

# copy sources
COPY --link  ../ ./
RUN rm -Rf docker/

RUN set -eux; \
  mkdir -p var/cache var/log; \
    if [ -f composer.json ]; then \
    composer dump-autoload --classmap-authoritative --no-dev; \
    composer dump-env prod; \
    composer run-script --no-dev post-install-cmd; \
    chmod +x bin/console; sync; \
    fi

# Dev image
FROM app_php AS app_php_dev

ENV APP_ENV=dev XDEBUG_MODE=off
VOLUME /srv/spirit-web-twig-demo/var/

RUN rm "$PHP_INI_DIR/conf.d/app.prod.ini"; \
  mv "$PHP_INI_DIR/php.ini" "$PHP_INI_DIR/php.ini-production"; \
  mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

COPY --link php/conf.d/app.dev.ini $PHP_INI_DIR/conf.d/

RUN set -eux; \
  install-php-extensions xdebug

RUN rm -f .env.local.php

# Caddy image
FROM caddy:2.8 AS app_caddy

WORKDIR /srv/spirit-web-twig-demo

COPY --link caddy/Caddyfile /etc/caddy/Caddyfile
