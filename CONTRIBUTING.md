# Contributing to `@lmc-eu/spirit-design-system`

First of all, thanks for your contribution to this project! ❤️ Here are some tips how to make your contributing efforts efficient and eventually accepted & merged.

## General usage

This project uses `makefile` for managing various chores, like dependency installation, testing, linting etc. Make sure you run `make` right after you clone the repository - it will set you up with everything needed to get started. Once you are done with that, have a look at what commands (targets) are available for you to run using `make` - `make install` etc.

## Project structure

This project is a monorepo managed by [Lerna][lerna-home]. This means that each folder inside the [packages/](../packages) directory represents a package published to npm. The root directory also contains _package.json_ file but this is only used for local development purposes and does not represent something that is ever published to npm (you might notice that it only contains _devDependencies_ and no prod deps 🤷‍♂️).

## Commit messages

All commits you make should adhere to our commit guidelines. We use [conventional commits][conventional-commits] strategy with slight modification of our own - [@lmc-eu/commitlint-config][commitlint-config]. This is later used during release phase to determine how to bump the packages' version numbers based on commit history. 🚀

## Code style

This project uses Prettier for code formatting. You can run `make format` to format all your code before you submit your code for review.

## Publishing

This project uses GitHub Actions to publish the packages automatically to npm. Ne packages are published after new tag is pushed to main branch. PR can be merged only by appropriate group of maintainers.

### Steps to create a new package version

1. Merge all appropriate PRs you want to publish into main branch
1. Run the `make version` command to bump the version number in packages (new version number is determined automatically based on commit history)
1. Check that the version number is correct and everything looks good
1. Run `git push && git push --tags` to push the changes to remote
1. Publishing is done automatically by GitHub Actions (uses `build` script and `make publish` command)


> If you have further questions do not hesitate to open an issue and ask us! ❤️

[conventional-commits]: https://www.conventionalcommits.org
[lerna-home]: https://lernajs.io
[commitlint-config]: https://github.com/lmc-eu/code-quality-tools/tree/main/packages/commitlint-config
