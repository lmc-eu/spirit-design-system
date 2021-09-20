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

## Deployment

This project uses GitHub Actions to deploy the packages automatically to npm. Release is created after the PR is merged into main branch. PR can be merged only by appropriate group of maintainers.

> If you have further questions do not hesitate to open an issue and ask us! ❤️

[conventional-commits]: https://www.conventionalcommits.org
[lerna-home]: https://lernajs.io
[commitlint-config]: https://github.com/lmc-eu/code-quality-tools/tree/main/packages/commitlint-config
