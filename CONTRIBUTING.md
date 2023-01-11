# Contributing to `@lmc-eu/spirit-design-system`

First of all, thanks for your contribution to this project! ❤️ Here are some tips how to make your contributing efforts efficient and eventually accepted & merged.

## General usage

This project uses `makefile` for managing various chores, like dependency installation, testing, linting etc. Make sure you run `make` right after you clone the repository - it will set you up with everything needed to get started. Once you are done with that, have a look at what commands (targets) are available for you to run using `make` - `make install` etc.

## Project structure

This project is a monorepo managed by [Lerna][lerna-home]. This means that each folder inside the [packages/](../packages) directory represents a package published to npm. The root directory also contains _package.json_ file but this is only used for local development purposes and does not represent something that is ever published to npm (you might notice that it only contains _devDependencies_ and no prod deps 🤷‍♂️).

## Commit messages

All commits you make should adhere to our commit guidelines. We use [conventional commits][conventional-commits] strategy with slight modification of our own - [@lmc-eu/commitlint-config][commitlint-config]. This is later used during release phase to determine how to bump the packages' version numbers based on commit history. 🚀

### Commit Message Format

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is optional but recommended for all commits except for those of type "Docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.

#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Sentence case. No period at the end.
  │       │
  │       └─⫸ Commit Scope: design-tokens|icons|web|web-react|web-twig|exporter-css|exporter-svg|
  │                          ci|repo
  │
  └─⫸ Commit Type: Feat|Fix|Perf|Revert|Docs|Style|Refactor|Test|Chore|Deps
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

Must be one of the following:

- **Chore**: Changes to our CI configuration files and scripts (examples: CircleCI, SauceLabs) or changes that affect build system
- **Deps**: Changes to dependencies
- **Docs**: Documentation only changes
- **Feat**: A new feature
- **Fix**: A bug fix
- **Perf**: A code change that improves performance
- **Refactor**: A code change that neither fixes a bug nor adds a feature
- **Revert**: Reverting code changes
- **Test**: Adding missing tests or correcting existing tests
- **Style**: Changes to code style or styling of components and pages

##### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

- `design-tokens`
- `icons`
- `web`
- `web-react`
- `web-twig`
- `exporter-css`
- `exporter-svg`
- `ci`
- `repo`

There are currently a few exceptions to the "use package name" rule:

- `ci`: used for changes that affects Continuous Integration process and builds

- `repo`: used for repository wide changes

- none/empty string: useful for `test` and `refactor` changes that are done across all packages (e.g. `Test: Add missing unit tests`) and for docs changes that are not related to a specific package (e.g. `Docs: Fix typo in tutorial`).

##### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- use the sentence case (capitalize the first letter of the sentence)
- no dot (.) at the end

#### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

#### <a name="commit-footer"></a>Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.
For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

### Revert commits

If the commit reverts a previous commit, it should begin with `Revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

### Before commit:

Test your code before committing with `% yarn test` or `% yarn packages:test`. It will run type linting, code listing, testing, and code formatting.

## Code style

This project uses Prettier for code formatting. You can run `make format` to format all your code before you submit your code for review.

## Publishing

This project uses GitHub Actions to publish the packages automatically to npm. New packages are published after the new tag is pushed to the main branch. PR can be merged only by the appropriate group of maintainers.

### Steps to create a new package version

1. Merge all appropriate PRs you want to publish into main branch
2. Run the `make version` command to bump the version number in packages (new version number is determined automatically based on commit history)
3. Check that the version number is correct and everything looks good
4. Run manually `git push && git push --tags` to push the changes to remote
5. Publishing is done automatically by GitHub Actions (uses `build` script and `make publish` command)

> If you have further questions do not hesitate to open an issue and ask us! ❤️

[conventional-commits]: https://www.conventionalcommits.org
[lerna-home]: https://lernajs.io
[commitlint-config]: https://github.com/lmc-eu/code-quality-tools/tree/main/packages/commitlint-config
