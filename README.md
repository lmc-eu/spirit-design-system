<div align="center">
<img src="https://github.com/lmc-eu/spirit-design-system/blob/main/static/spirit.svg?raw=true" width="422" height="300" alt="Spirit Design System" />

### Spirit Design System

[![Maintained with Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org)
[![Code Quality Checks](https://github.com/lmc-eu/spirit-design-system/actions/workflows/test.yaml/badge.svg?branch=main)](https://github.com/lmc-eu/spirit-design-system/actions)
[![Coverage Status](https://coveralls.io/repos/github/lmc-eu/spirit-design-system/badge.svg?branch=main)](https://coveralls.io/github/lmc-eu/spirit-design-system?branch=main)

Spirit is an open-source design system developed by [LMC][lmc].

</div>

## Getting Started

See individual [packages](#packages) to learn how to get started.

## Packages

| Package name                                                     | Description                                               | Version                                                  |
| ---------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- |
| [`@lmc-eu/spirit-analytics`](./packages/analytics)               | Analytic tools for Spirit Design System                   | [![@lmc-eu/spirit-analytics][sa-badge]][sa-npm]          |
| [`@lmc-eu/spirit-common`](./packages/common)                     | Common scripts for Spirit Design System                   | Private                                                  |
| [`@lmc-eu/spirit-design-tokens`](./packages/design-tokens)       | Design tokens for Spirit Design System                    | [![@lmc-eu/spirit-design-tokens][sdt-badge]][sdt-npm]    |
| [`@lmc-eu/spirit-form-validations`](./packages/form-validations) | Form Validations for Spirit Design System                 | [![@lmc-eu/spirit-form-validations][sfv-badge]][sfv-npm] |
| [`@lmc-eu/spirit-icons`](./packages/icons)                       | Icons for Spirit Design System                            | [![@lmc-eu/spirit-icons][si-badge]][si-npm]              |
| [`@lmc-eu/spirit-web`](./packages/web)                           | CSS and vanilla JS implementation of Spirit Design System | [![@lmc-eu/spirit-web][sw-badge]][sw-npm]                |
| [`@lmc-eu/spirit-web-react`](./packages/web-react)               | React implementation of Spirit Design System components   | [![@lmc-eu/spirit-web-react][swr-badge]][swr-npm]        |
| [`@lmc-eu/spirit-web-twig`](./packages/web-twig)                 | Twig implementation of Spirit Design System components    | [![@lmc-eu/spirit-web-twig][swt-badge]][swt-packagist]   |

## Development

### Prerequisites

- [Node >= 14](https://nodejs.org)
- [Yarn 1.22](https://yarnpkg.com)
- [Lerna 4.x](https://lerna.js.org)

### Start Development

- `git clone ssh://git@github.com:lmc-eu/spirit-design-system.git`
- `cd spirit-design-system`
- `yarn install`
- `yarn start`

See [`package.json`](./package.json) for all available tasks.

## License

See the [LICENSE](LICENSE.md) file for information.

[lmc]: https://github.com/lmc-eu
[sa-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-analytics
[sa-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-analytics.svg?style=flat-square
[sdt-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-design-tokens
[sdt-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-design-tokens.svg?style=flat-square
[si-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-icons
[si-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-icons.svg?style=flat-square
[sw-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-web
[sw-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-web.svg?style=flat-square
[swr-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-web-react
[swr-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-web-react.svg?style=flat-square
[swt-packagist]: https://packagist.org/packages/lmc/spirit-web-twig-bundle
[swt-badge]: https://img.shields.io/packagist/v/lmc/spirit-web-twig-bundle.svg?style=flat-square
[sfv-npm]: https://www.npmjs.com/package/@lmc-eu/spirit-form-validations
[sfv-badge]: https://img.shields.io/npm/v/%40lmc-eu/spirit-form-validations.svg?style=flat-square
