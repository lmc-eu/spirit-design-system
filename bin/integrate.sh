#!/usr/bin/env bash
set -e

# get current branch name
CURRENT_BRANCH=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

# generate integration branch name
INTEGRATION_BRANCH=integration/$(php -r "echo date(\"Y-m-d\", strtotime(\"monday this week\"));")

# check if there are uncommited changes
if [ "$(git status --porcelain --untracked-files=no)" != "" ]; then
    echo Cannot integrate, there are uncommited changes
    exit 1
fi

# get integration branch and merge current branch to it
git fetch
git checkout "${INTEGRATION_BRANCH}"
git reset --hard "origin/${INTEGRATION_BRANCH}"
git pull
git merge "${CURRENT_BRANCH}"

# push when merge was OK
if [ "$(git status --porcelain --untracked-files=no)" != "" ]; then
    echo The index has uncommited changes after the merge, not returning to ${CURRENT_BRANCH}
else
    git push -u
    git checkout "${CURRENT_BRANCH}"
    echo Done
fi
