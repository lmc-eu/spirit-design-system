# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.8.0"></a>

# [0.8.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.7.0...@lmc-eu/spirit-web@0.8.0) (2022-02-18)

### Chores

- Add missing Stylelint Prettier Config ([81ee920](https://github.com/lmc-eu/spirit-design-system/commit/81ee920))
- Prefer javascript for configuration if possible ([328d6f1](https://github.com/lmc-eu/spirit-design-system/commit/328d6f1))

### Dependencies

- Bump @lmc-eu/stylelint-config from 1.0.4 to 2.0.2 ([5989cd1](https://github.com/lmc-eu/spirit-design-system/commit/5989cd1))
- Bump postcss-cli from 8.3.1 to 9.1.0 ([0b06bce](https://github.com/lmc-eu/spirit-design-system/commit/0b06bce))
- Pin dependencies ([1b35871](https://github.com/lmc-eu/spirit-design-system/commit/1b35871))
- Pin dependencies ([dc33b40](https://github.com/lmc-eu/spirit-design-system/commit/dc33b40))
- Update all non-major dependencies ([7203ccb](https://github.com/lmc-eu/spirit-design-system/commit/7203ccb))
- Update all non-major dependencies ([a2289eb](https://github.com/lmc-eu/spirit-design-system/commit/a2289eb))

### Documentation

- Improve docs for both users and contributors ([2c37796](https://github.com/lmc-eu/spirit-design-system/commit/2c37796))

### Features

- Implement Container component to spirit-web and showcase it in demo ([e05b367](https://github.com/lmc-eu/spirit-design-system/commit/e05b367))
- **web:** DS-132 Add disabled class for ButtonLink component ([ce3e8dd](https://github.com/lmc-eu/spirit-design-system/commit/ce3e8dd))

### Styles

- Reformat changelogs using Prettier ([2491f02](https://github.com/lmc-eu/spirit-design-system/commit/2491f02))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.7.0"></a>

## [0.7.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.6.0...@lmc-eu/spirit-web@0.7.0) (2022-01-12)

### Documentation

- **license:** Include license file ([8f0af0a](https://github.com/lmc-eu/spirit-design-system/commit/8f0af0a))
- **web:** Include changelog ([4c54b86](https://github.com/lmc-eu/spirit-design-system/commit/4c54b86))

### Features

- Split border tokens and subtract border width value from button paddings ([dfbf6ac](https://github.com/lmc-eu/spirit-design-system/commit/dfbf6ac))

### Styles

- Reformat codebase using code formatter ([a2abf71](https://github.com/lmc-eu/spirit-design-system/commit/a2abf71))

<a name="0.6.0"></a>

## [0.6.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.5.0...@lmc-eu/spirit-web@0.6.0) (2021-12-21)

### Documentation

- Deploy examples instead of Storybook to GitHub Pages [#DS-76](https://github.com/lmc-eu/spirit-design-system/issues/DS-76) ([7d9607a](https://github.com/lmc-eu/spirit-design-system/commit/7d9607a))

### Features

- Add CSS modificator block into Button ([4d24fbc](https://github.com/lmc-eu/spirit-design-system/commit/4d24fbc))
- Update react implementation of Button ([e20ffcb](https://github.com/lmc-eu/spirit-design-system/commit/e20ffcb))

<a name="0.5.0"></a>

## [0.5.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.4.5...@lmc-eu/spirit-web@0.5.0) (2021-12-03)

### BREAKING CHANGES

- Remove default prefix from CSS class names to make it opt-in ([d064f94](https://github.com/lmc-eu/spirit-design-system/commit/d064f94))

<a name="0.4.5"></a>

## [0.4.5](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.4.4...@lmc-eu/spirit-web@0.4.5) (2021-12-02)

### Bug Fixes

- **web:** Declare `font-family` for `Tag` so it doesn't rely on inheritance ([01da25a](https://github.com/lmc-eu/spirit-design-system/commit/01da25a))

### Features

- Update button style. Add new font-weight token ([c142c2e](https://github.com/lmc-eu/spirit-design-system/commit/c142c2e))
- Update color palette according to Figma and use same naming ([87266da](https://github.com/lmc-eu/spirit-design-system/commit/87266da))

<a name="0.4.4"></a>

## [0.4.4](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.4.3...@lmc-eu/spirit-web@0.4.4) (2021-11-24)

**Note**: Version bump only for package @lmc-eu/spirit-web

<a name="0.4.3"></a>

## [0.4.3](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.4.2...@lmc-eu/spirit-web@0.4.3) (2021-11-13)

### Chores

- Declare path to repository in package.json ([d337221](https://github.com/lmc-eu/spirit-design-system/commit/d337221))

<a name="0.4.2"></a>

## [0.4.2](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.4.1...@lmc-eu/spirit-web@0.4.2) (2021-10-21)

**Note**: Version bump only for package @lmc-eu/spirit-web

<a name="0.4.1"></a>

## [0.4.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.4.0...@lmc-eu/spirit-web@0.4.1) (2021-10-20)

### BREAKING CHANGES

- Remove product specific design tokens and CSS from Spirit packages ([0767891](https://github.com/lmc-eu/spirit-design-system/commit/0767891))
  - They will be managed by product teams.
  - Change Jobs demo to custom branding example with overridden design tokens and a Sass pipeline.
- Disallow components customization ([8dbf281](https://github.com/lmc-eu/spirit-design-system/commit/8dbf281))

### Documenation

- Document work with design tokens for contributors ([72de615](https://github.com/lmc-eu/spirit-design-system/commit/72de615))

<a name="0.4.0"></a>

## [0.4.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.3.0...@lmc-eu/spirit-web@0.4.0) (2021-10-07)

**Note**: Version bump only for package @lmc-eu/spirit-web

<a name="0.3.0"></a>

## [0.3.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.0...@lmc-eu/spirit-web@0.3.0) (2021-09-30)

### BREAKING CHANGES

- Prefix replaceable Sass modules with `@` to mark their special loading behavior ([ea775bd](https://github.com/lmc-eu/spirit-design-system/commit/ea775bd))

<a name="0.2.0"></a>

## [0.2.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.1.0...@lmc-eu/spirit-web@0.2.0) (2021-09-22)

### Features

- Add Tag component to web package ([f305cc7](https://github.com/lmc-eu/spirit-design-system/commit/f305cc7))

<a name="0.1.0"></a>

## 0.1.0 (2021-09-20)

### Code Refactoring

- Keep source for publishing in `dist` directory in all packages ([31cc3af](https://github.com/lmc-eu/spirit-design-system/commit/31cc3af))

### Chores

- Call `yarn` instead of `npm run` in all npm scripts ([313b135](https://github.com/lmc-eu/spirit-design-system/commit/313b135))
- Cross-link monorepo packages with `*` and simplify cross-package paths in npm scripts ([35690d2](https://github.com/lmc-eu/spirit-design-system/commit/35690d2))

### Documention

- Update main `README` to be in sync with code ([489f241](https://github.com/lmc-eu/spirit-design-system/commit/489f241))

### Features

- Introduce branding to the `web` package ([c42bb53](https://github.com/lmc-eu/spirit-design-system/commit/c42bb53))
- Introduce `spirit-web` package with `Button` component and add example usage ([7df8dbb](https://github.com/lmc-eu/spirit-design-system/commit/7df8dbb))
