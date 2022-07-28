#!/usr/bin/env bash

EXPECTED_SIGNATURE="$(php -r "readfile('https://composer.github.io/installer.sig');")";
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');";
ACTUAL_SIGNATURE="$(php -r "echo hash_file('SHA384', 'composer-setup.php');")";

if [ "$EXPECTED_SIGNATURE" != "$ACTUAL_SIGNATURE" ]
then
    >&2 echo 'ERROR: Invalid installer signature';
    rm composer-setup.php;
    exit 1;
fi

# fix composer version https://github.com/composer/composer/issues/10671
php composer-setup.php --version=2.2.9 --quiet;
RESULT=$?
rm composer-setup.php;

if [ "${RESULT}" == '0' ]; then
    mv composer.phar /usr/local/bin/composer && chmod +x /usr/local/bin/composer;
fi

exit "${RESULT}";
