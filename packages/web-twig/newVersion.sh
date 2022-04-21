#!/usr/bin/env bash

OS=`uname`
# $(replace_in_file pattern file)
function replace_in_file() {
    if [ "$OS" = 'Darwin' ]; then
        # for MacOS
        sed -i '' -e "$1" "$2"
    else
        # for Linux and Windows
        sed -i'' -e "$1" "$2"
    fi
}

if [ "$1" = "" ]
then
  echo "require version in first argument" && exit 1;
fi

git reset --hard
git checkout master
git pull

export VERSION=$1
DIR=$PWD
DATE=$(date '+%Y-%m-%d');

jq --arg VERSION $VERSION ".version=\"$VERSION\"" $DIR/composer.json > $DIR/composer.json.new
mv $DIR/composer.json.new $DIR/composer.json


replace_in_file "s/## Unreleased/## Unreleased\n\n## $VERSION - $DATE/g" $DIR/CHANGELOG.md
replace_in_file "s/version-.*-blue/version-$VERSION-blue/g" $DIR/README.md
replace_in_file "s/composer require lmc\/spirit-web-twig-bundle:~.*/composer require lmc\/spirit-web-twig-bundle:~$VERSION/g" $DIR/README.md

git add .
git commit -m "Release $VERSION"
git tag "$VERSION" # or any other text
git push origin master # push the commit
git push --tags origin # push the tags