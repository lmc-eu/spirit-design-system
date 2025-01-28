<div align="center">
<img src="https://github.com/lmc-eu/spirit-design-system/blob/main/static/spirit.svg?raw=true" width="400" height="230" alt="Spirit Design System" />

### Spirit Design System

[![Maintained with Lerna][lerna-svg]][lerna]
[![Code Quality Checks][code-quality-checks-svg]][code-quality-checks]
[![Coverage Status][coverage-status-svg]][coverage-status]

Spirit is an open-source design system developed by [Alma Career (formerly LMC)][alma-career].

</div>

## Getting Started

See individual [packages](#packages) to learn how to get started.

## Packages

| Package name                                                   | Description                                                   | Version                                                  |
| -------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------- |
| [`@lmc-eu/spirit-analytics`][packages-analytics]               | Analytic tools for Spirit Design System                       | [![@lmc-eu/spirit-analytics][sa-badge]][sa-npm]          |
| [`@lmc-eu/spirit-codemods`][packages-codemods]                 | Codemod transforms for Spirit Design System version migration | [![@lmc-eu/spirit-codemods][sc-badge]][sc-npm]           |
| [`@lmc-eu/spirit-common`][packages-common]                     | Common scripts for Spirit Design System                       | Private                                                  |
| [`@lmc-eu/spirit-design-tokens`][packages-design-tokens]       | Design tokens for Spirit Design System                        | [![@lmc-eu/spirit-design-tokens][sdt-badge]][sdt-npm]    |
| [`@lmc-eu/spirit-form-validations`][packages-form-validations] | Form Validations for Spirit Design System                     | [![@lmc-eu/spirit-form-validations][sfv-badge]][sfv-npm] |
| [`@lmc-eu/spirit-icons`][packages-icons]                       | Icons for Spirit Design System                                | [![@lmc-eu/spirit-icons][si-badge]][si-npm]              |
| [`@lmc-eu/spirit-web`][packages-web]                           | CSS and vanilla JS implementation of Spirit Design System     | [![@lmc-eu/spirit-web][sw-badge]][sw-npm]                |
| [`@lmc-eu/spirit-web-react`][packages-web-react]               | React implementation of Spirit Design System components       | [![@lmc-eu/spirit-web-react][swr-badge]][swr-npm]        |
| [`@lmc-eu/spirit-web-twig`][packages-web-twig]                 | Twig implementation of Spirit Design System components        | [![@lmc-eu/spirit-web-twig][swt-badge]][swt-packagist]   |

## Development

### Prerequisites

- [NodeJS][nodejs]
- [Corepack][corepack]
- [Yarn][yarn]
- [Lerna][lerna]

### 🚀 Start Development

- `git clone ssh://git@github.com:lmc-eu/spirit-design-system.git`
- `cd spirit-design-system`
- `corepack enable`
- `corepack install`
- `yarn install`
- `yarn start`

See [`package.json`][package.json] for all available tasks.

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide][contributing]! 👀

## 📝 License

See the [LICENSE][license] file for information.

[alma-career]: https://github.com/lmc-eu
[code-quality-checks]: https://github.com/lmc-eu/spirit-design-system/actions
[code-quality-checks-svg]: https://github.com/lmc-eu/spirit-design-system/actions/workflows/test.yaml/badge.svg?branch=main
[contributing]: https://github.com/lmc-eu/spirit-design-system/blob/main/CONTRIBUTING.md
[coverage-status]: https://coveralls.io/github/lmc-eu/spirit-design-system?branch=main
[coverage-status-svg]: https://coveralls.io/repos/github/lmc-eu/spirit-design-system/badge.svg?branch=main
[corepack]: https://yarnpkg.com/corepack#installation
[lerna]: https://lerna.js.org
[lerna-svg]: https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg
[license]: https://github.com/lmc-eu/spirit-design-system/blob/main/LICENSE.md
[nodejs]: https://nodejs.org
[packages-analytics]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/analytics
[packages-codemods]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/codemods
[packages-common]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/common
[packages-design-tokens]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/design-tokens
[packages-form-validations]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/form-validations
[packages-icons]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
[packages-web]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web
[packages-web-react]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react
[packages-web-twig]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig
[package.json]: https://github.com/lmc-eu/spirit-design-system/blob/main/package.json
[sa-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-analytics.svg?style=flat-square
[sa-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-analytics
[sc-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-codemods.svg?style=flat-square
[sc-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-codemods
[sdt-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-design-tokens.svg?style=flat-square
[sdt-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-design-tokens
[sfv-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-form-validations.svg?style=flat-square
[sfv-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-form-validations
[si-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-icons.svg?style=flat-square
[si-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-icons
[sw-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-web.svg?style=flat-square
[sw-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-web
[swr-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-web-react.svg?style=flat-square
[swr-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-web-react
[swt-badge]: https://img.shields.io/packagist/v/lmc/spirit-web-twig-bundle.svg?style=flat-square
[swt-packagist]: https://packagist.org/packages/lmc/spirit-web-twig-bundle
[yarn]: https://yarnpkg.com
