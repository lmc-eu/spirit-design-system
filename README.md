# SPIRIT

> Spirit is an open-source design system built by LMC. With the LMC Design

<a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with Lerna" />
</a>

- [Getting started](#usage)
- [Prerequisites](#prerequisites)
- [Development](#development)
- [Releases](#releases)

<a name="usage"></a>

## Getting started

```javascript
npm install @spirit/<package-name>
```

If you're just getting started, check out
[`@spirit/components`](./packages/components). If you're looking for React
components, take a look at [`@spirit/react`](./packages/react).

If you're trying to find something specific, here's a full list of packages that
we support!

| Package name                                  | Description                                                                                                                                                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@spirit/colors`](./packages/colors)  | Work with LMC Design Language colors                                                                                                                                                                                                       |

<a name="prerequisites"></a>

## Prerequisites

- [node.js](https://nodejs.org/en/) Node Stable
- [yarn](https://yarnpkg.com/lang/en/)

### Dependencies

<a name="development"></a>

## Development

### Start development

- `git clone ssh://git@bitbucket.lmc.cz:7999/ds/spirit.git`
- `cd spirit`
- `yarn <script>`

### Scripts

In the project directory, you can run:

- `build` - Compiles source code to library in `dist/` directory.
- `format` - Alias form `format:check`.
- `format:check` - Runs check of code format (done via `prettier`).
- `format:fix` - Fixes code format (done via `prettier`).
- `test` - Run in non-interactive mode.
- `test:watch` - Run tests in interactive mode.
- `test:coverage` - Run tests with code coverage check.
- `types` - Checks types.
- `lint` - Code lint with code formatting check.
- `lint:fix` - Code linter and fixer with code formatting rules applied.
- `ci` - Runs Continuous Integration cascade (`lint`, `types`, `test`, `format`).
- `changelog` - Generates changelog.
- `changelog:origin` - Generates changelog for entire history.
- `commit:lint:test` - Test last commit message with commit linter against conventional changelog rules.
- `version` - Releases new version.
- `vuln` - Run audit for security vulnerabilities.

<a name="releases"></a>

## Releases

Automagic using Jenkins.

For seamless integration you can use `./bin/integrate.sh` script, eg.: it merges your actual branch into actual integration branch.

- Integration branch: <http://spirit-design-system.dev.internal.lmc/>
- Main branch: <http://spirit-design-system.prod.internal.lmc/>
