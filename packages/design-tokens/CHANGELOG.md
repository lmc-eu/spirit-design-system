# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.6.0"></a>

## [0.6.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.5.0...@lmc-eu/spirit-design-tokens@0.6.0) (2022-01-12)

### Documentation

- **design-tokens:** Include changelog ([de526ae](https://github.com/lmc-eu/spirit-design-system/commit/de526ae))
- **license:** Include license file ([8f0af0a](https://github.com/lmc-eu/spirit-design-system/commit/8f0af0a))

### Features

- Add background backdrop token ([9b5f0cd](https://github.com/lmc-eu/spirit-design-system/commit/9b5f0cd))
- Add breakpoints to tokens ([c4290c2](https://github.com/lmc-eu/spirit-design-system/commit/c4290c2))
- Split border tokens and subtract border width value from button paddings ([dfbf6ac](https://github.com/lmc-eu/spirit-design-system/commit/dfbf6ac))

### Styles

- Reformat codebase using code formatter ([a2abf71](https://github.com/lmc-eu/spirit-design-system/commit/a2abf71))

<a name="0.5.0"></a>

## [0.5.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.4.5...@lmc-eu/spirit-design-tokens@0.5.0) (2021-12-21)

### BREAKING CHANGES

- Remove `$border-main-selected` color ([d650659](https://github.com/lmc-eu/spirit-design-system/commit/d650659))

### Chores

- **web-react**: Instroduce `test` script ([7fe668c](https://github.com/lmc-eu/spirit-design-system/commit/7fe668c))
- Add eslint with its configuration to react package and add linters to GitHub workflow ([47b21c3](https://github.com/lmc-eu/spirit-design-system/commit/47b21c3))

### Features

- Synchronize color scales with designers ([42c2a30](https://github.com/lmc-eu/spirit-design-system/commit/42c2a30))

<a name="0.4.5"></a>

## [0.4.5](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.4.4...@lmc-eu/spirit-design-tokens@0.4.5) (2021-12-02)

### Bug Fixes

- **design-tokens:** Declare style even for hidden border so it's consistent with other border styles ([22047be](https://github.com/lmc-eu/spirit-design-system/commit/22047be))

### Features

- Update button style. Add new font-weight token ([c142c2e](https://github.com/lmc-eu/spirit-design-system/commit/c142c2e))
- Update color palette according to Figma and use same naming ([87266da](https://github.com/lmc-eu/spirit-design-system/commit/87266da))

<a name="0.4.4"></a>

## [0.4.4](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.4.3...@lmc-eu/spirit-design-tokens@0.4.4) (2021-11-24)

### Bug Fixes

- Render text with `sans-serif` when Inter font is not available ([9c64a16](https://github.com/lmc-eu/spirit-design-system/commit/9c64a16))

<a name="0.4.3"></a>

## [0.4.3](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.4.2...@lmc-eu/spirit-design-tokens@0.4.3) (2021-11-13)

### Chores

- Declare path to repository in package.json ([d337221](https://github.com/lmc-eu/spirit-design-system/commit/d337221))

<a name="0.4.2"></a>

## [0.4.2](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.4.1...@lmc-eu/spirit-design-tokens@0.4.2) (2021-10-21)

### Features

- Add border design tokens ([4791b5c](https://github.com/lmc-eu/spirit-design-system/commit/4791b5c))

<a name="0.4.1"></a>

## [0.4.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.4.0...@lmc-eu/spirit-design-tokens@0.4.1) (2021-10-20)

### BREAKING CHANGES

- Remove product specific design tokens and CSS from Spirit packages ([0767891](https://github.com/lmc-eu/spirit-design-system/commit/0767891))
  - They will be managed by product teams.
  - Change Jobs demo to custom branding example with overridden design tokens and a Sass pipeline.

### Bug Fixes

- Make all design token categories configurable by adding `!default` flag ([df67132](https://github.com/lmc-eu/spirit-design-system/commit/df67132))

<a name="0.4.0"></a>

## [0.4.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.3.0...@lmc-eu/spirit-design-tokens@0.4.0) (2021-10-07)

### Features

- Introduce `spirit-design-tokens` package with default branding in Sass ([930e07e](https://github.com/lmc-eu/spirit-design-system/commit/930e07e))

<a name="0.3.0"></a>

## [0.3.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.2.0...@lmc-eu/spirit-design-tokens@0.3.0) (2021-09-30)

### BREAKING CHANGES

- Prefix replaceable Sass modules with `@` to mark their special loading behavior ([ea775bd](https://github.com/lmc-eu/spirit-design-system/commit/ea775bd))

<a name="0.2.0"></a>

## [0.2.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-design-tokens@0.1.0...@lmc-eu/spirit-design-tokens@0.2.0) (2021-09-22)

### Code Refactoring

- Keep source for publishing in `dist` directory in all packages ([31cc3af](https://github.com/lmc-eu/spirit-design-system/commit/31cc3af))

### Features

- Extend Jobs design tokens ([b4d97aa](https://github.com/lmc-eu/spirit-design-system/commit/b4d97aa))
- Introduce branding to the `web` package ([c42bb53](https://github.com/lmc-eu/spirit-design-system/commit/c42bb53))
- Switch color config to color scales ([f302688](https://github.com/lmc-eu/spirit-design-system/commit/f302688))
- Update Design Tokens according to the current state of Figma tokens ([5c04041](https://github.com/lmc-eu/spirit-design-system/commit/5c04041))

<a name="0.1.0"></a>

## 0.1.0 (2021-09-20)

### Features

- Introduce `spirit-design-tokens` package with default branding in Sass ([bb999d1](https://github.com/lmc-eu/spirit-design-system/commit/bb999d1))
