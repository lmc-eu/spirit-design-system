# Contributing to `@lmc-eu/spirit-design-system`

First of all, thanks for your contribution to this project! ❤️
Here are some tips how to make your contributing efforts efficient and eventually accepted & merged:

- [General Usage](#general-usage)
- [Project structure](#project-structure)
- [Commit Conventions](#commit-conventions)
- [Code style](#code-style)
- [Documenting the Components](#documenting-the-components)
- [Testing](#testing)
- [Publishing](#publishing)

## General usage

This project uses `makefile` for managing various chores, like dependency installation, testing, linting etc. Make sure you run `make` right after you clone the repository - it will set you up with everything needed to get started. Once you are done with that, have a look at what commands (targets) are available for you to run using `make` - `make install` etc.

## Project structure

This project is a monorepo managed by [Lerna][lerna-home]. This means that each folder inside the [packages/][packages] directory represents a package published to npm. The root directory also contains _package.json_ file but this is only used for local development purposes and does not represent something that is ever published to npm (you might notice that it only contains _devDependencies_ and no prod deps 🤷‍♂️).

## Development

See [Developer Handbook][developer-handbook] for more information about development.

## Commit Conventions

All commits you make SHOULD adhere to our commit guidelines. We use [conventional commits][conventional-commits] strategy with slight modification of our own - [@lmc-eu/commitlint-config][commitlint-config]. This is later used during release phase to determine how to bump the packages' version numbers based on commit history. 🚀

### Commit Message Format

We have very precise rules over how our Git commit messages MUST be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and MUST conform to the [Commit Message Header](#commit-header) format.

The `body` is optional but recommended for all commits except for those of type "Docs".
When the body is present it MUST be at least 20 characters long and MUST conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it MUST have.

#### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Sentence case. No period at the end.
  │       │
  │       └─⫸ Commit Scope: analytics|design-tokens|form-validations|icons|web|web-react|web-twig|exporter-js|
  |                          exporter-scss|exporter-svg|ci|repo
  │
  └─⫸ Commit Type: Feat|Fix|Perf|Revert|Docs|Style|Refactor|Test|Chore|Deps
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

MUST be one of the following:

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

The scope SHOULD be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

- Apps:
  - `demo`
- Exporters:
  - `exporter-js`
  - `exporter-scss`
  - `exporter-svg`
- Packages:
  - `analytics`
  - `design-tokens`
  - `form-validations`
  - `icons`
  - `web`
  - `web-react`
  - `web-twig`
- Repository-wide:
  - `ci`: used for changes that affects Continuous Integration process and builds
  - `repo`: used for repository wide changes
  - none/empty string: useful for `Test` and `Refactor` changes that are done across all packages (e.g. `Test: Add missing unit tests`) and for docs changes that are not related to a specific package (e.g. `Docs: Fix typo in tutorial`).

##### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- use the sentence case (capitalize the first letter of the sentence)
- no dot (.) at the end

#### Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message SHOULD explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

#### Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.
For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
Fixes #<issue number>
```

Breaking Change section SHOULD start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

### Revert commits

If the commit reverts a previous commit, it SHOULD begin with `Revert: `, followed by the header of the reverted commit.

The content of the commit message body SHOULD contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

### Before commit:

Test your code before committing with `% yarn test` or `% yarn packages:test`. It will run type linting, code listing, testing, and code formatting.

## Code Style

This project uses Prettier for code formatting. You can run `make format` to format all your code before you submit your code for review.

## Documenting the Components

1. All components MUST be documented in a `README` file in the root of the component, e.g. `packages/web-react/Accordion/README.md`.
2. The documentation MUST be written in Markdown.
3. The documentation MUST contain at least a basic example usage of the component.
4. For complex components or components with subcomponents, the documentation SHOULD contain examples of individual building blocks as well as an example composition.
5. Component and subcomponent props MUST be documented in a table.
   1. The table MUST be placed in a section introduced by a headline called `API`.
   2. The table MUST contain the following columns:
      - `Name` — the name of the prop, e.g. `title`
      - `Type` — the type of the prop, e.g. `string`, `number`, `bool`, `[horizontal | vertical]`, an existing [dictionary], etc.
      - `Default` — the default value of the prop, e.g. `null` or `—` (em-dash) if there is no default value
      - `Required` — if the prop is required `✔` or not `✕`
      - `Description` — the description of the prop, e.g. `Title of the accordion`
   3. The props MUST be sorted alphabetically by their name.

## Testing

Each package contains a script called `test`.
Using this you can test entire package and verify that all parts of the package are in good shape and all rules are met.

Testing script includes:

- linting using [ESlint][eslint]
- checking formatting using [Prettier][prettier]
- checking types using [Typescript][typescript] compiler
- running unit test using [Jest][jest]

### Unit testing

You can run unit testing via `test:unit` scripts.
For all available scripts see the package's `package.json` file.

### Visual regression testing

**Prerequisites:** [Docker][docker] 🐳

You can run visual regression testing via `Makefile` in the project root.
All commands will execute Docker command that starts [Playwright][playwright] in containerized environment.

- Use `make test-e2e` to run the tests.
- Use `make test-e2e-update` to update the snapshots.
- Use `make test-e2e-report` to generate and serve report of visual regression testing. Find report URL in the terminal output.

👉 Visual snapshots are generated based on platform, so we need to use same platform locally and on CI (GitHub Actions).

⚠️ Version number of the Playwright dependency must be the same in `package.json` file and in the `./bin/make/e2e.sh` to ensure that no additional Playwright dependencies will need to install (browsers are backed in the Docker image). See https://playwright.dev/docs/docker.

We run visual regression testing locally against our demo apps. Web and Web React packages are served using Vite.
Web Twig package is served using Symfony app.

In CI we use Netlify to test against.

⚠️ Currently we do not deploy the Web Twig package to any environment, so you can only test it locally.

We have two test suites and you can find them in the `./tests/e2e` directory:

- `demo-homepages` - tests the homepages of our demo apps.
  - This test is used to verify that the demo apps are working properly and their homepages are not broken.
- `demo-components-compare` - tests components' pages of our demo apps'.
  - This test gets the list of components from file system for each package and then it goes through each component and compares its page in all demo apps.
  - Only one screenshot is taken for each component. If you run the update command, only the last screenshot will be saved.

👉 To save time and repository size, we test only in Chromium browser and only on desktop viewport.

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
[packages]: packages/
[dictionary]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md
[developer-handbook]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/contributtion/development.md
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[typescript]: https://www.typescriptlang.org/
[jest]: https://jestjs.io/
[docker]: https://www.docker.com/
[playwright]: https://playwright.dev/
