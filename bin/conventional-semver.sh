#!/usr/bin/env bash

function grep_word_from_git_commits_since_last_tag() {
    local commits=$(git log --oneline $(git describe --tags --abbrev=0 @^)..@ --grep="$1" 2> /dev/null)

    if [ $? -eq 128 ]; then
        echo 2
    elif [ -z "$commits" ];
    then
        echo 0
    else
        echo 1
    fi
}

function get_version() {
    if [ `grep_word_from_git_commits_since_last_tag "BREAKING CHANGE"` -gt 0 ]
    then
        echo "major"
    elif [ `grep_word_from_git_commits_since_last_tag "Feat"` -gt 0 ]
    then
        echo "minor"
    else
        echo "patch"
    fi
}

get_version

