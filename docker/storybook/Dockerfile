FROM dcreg.service.consul/prod/compres-base-apache:1.1.7

LABEL maintainer="Tomas Litera <tomas.litera@lmc.eu>"

COPY --chown=$APACHE_RUN_USER:$APACHE_RUN_GROUP ./.storybook/build /srv/www
