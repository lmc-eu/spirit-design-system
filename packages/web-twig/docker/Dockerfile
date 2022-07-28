FROM php:7.4

RUN apt-get update && apt-get install -y \
    git \
    zip

# copy files
COPY ./install-composer.sh /tmp

WORKDIR /srv/www/spirit-web-twig-bundle

RUN bash /tmp/install-composer.sh
