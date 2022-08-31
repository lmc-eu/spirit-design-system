#!/usr/bin/env bash

export VERSION=$1
DIR=$PWD

jq --arg VERSION $VERSION ".version=\"$VERSION\"" $DIR/composer.json > $DIR/composer.json.new
mv $DIR/composer.json.new $DIR/composer.json
