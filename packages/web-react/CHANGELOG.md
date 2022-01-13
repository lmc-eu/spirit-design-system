# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.5.0"></a>

## [0.5.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.4.0...@lmc-eu/spirit-web-react@0.5.0) (2022-01-12)

### Bug Fixes

- **web-react:** Rename main types to be exported during build ([0893fcb](https://github.com/lmc-eu/spirit-design-system/commit/0893fcb))

### Chores

- Introduce global ESLint config ([17bda77](https://github.com/lmc-eu/spirit-design-system/commit/17bda77))

### Documentation

- **license:** Include license file ([8f0af0a](https://github.com/lmc-eu/spirit-design-system/commit/8f0af0a))
- **web-react:** Include changelog ([2742756](https://github.com/lmc-eu/spirit-design-system/commit/2742756))

### Features

- **web-react:** Enable class name extension via className prop ([d30a53f](https://github.com/lmc-eu/spirit-design-system/commit/d30a53f))

### Styles

- Reformat codebase using code formatter ([a2abf71](https://github.com/lmc-eu/spirit-design-system/commit/a2abf71))

<a name="0.4.0"></a>

## [0.4.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.3.0...@lmc-eu/spirit-web@0.4.0) (2021-12-21)

### Bug Fixes

- Change for the default color property value in the implementation of the tag component ([90e569f](https://github.com/lmc-eu/spirit-design-system/commit/90e569f))

### Chores

- **web-react:** Instroduce `test` script ([7fe668c](https://github.com/lmc-eu/spirit-design-system/commit/7fe668c))
- Add eslint with its configuration to react package and add linters to GitHub workflow ([47b21c3](https://github.com/lmc-eu/spirit-design-system/commit/47b21c3))

### Documentation

- Deploy examples instead of Storybook to GitHub Pages [#DS-76](https://github.com/lmc-eu/spirit-design-system/issues/DS-76) ([7d9607a](https://github.com/lmc-eu/spirit-design-system/commit/7d9607a))

### Features

- Update demo example ([6167786](https://github.com/lmc-eu/spirit-design-system/commit/6167786))
- Update react implementation of Button ([e20ffcb](https://github.com/lmc-eu/spirit-design-system/commit/e20ffcb))

### Styles

- **web-react:** Reformat codebase with ESLint ([6972c2c](https://github.com/lmc-eu/spirit-design-system/commit/6972c2c))

<a name="0.3.0"></a>

## [0.3.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.7...@lmc-eu/spirit-web@0.3.0) (2021-12-03)

### BREAKING CHANGES

- Remove default prefix from CSS class names to make it opt-in ([d064f94](https://github.com/lmc-eu/spirit-design-system/commit/d064f94))

<a name="0.2.7"></a>

## [0.2.7](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.6...@lmc-eu/spirit-web@0.2.7) (2021-12-02)

### Features

- Improve storybook and its stories. Update examples. Add shebang to husky commitlint ([f9885ef](https://github.com/lmc-eu/spirit-design-system/commit/f9885ef))
- Update color palette according to Figma and use same naming ([87266da](https://github.com/lmc-eu/spirit-design-system/commit/87266da))

<a name="0.2.6"></a>

## [0.2.6](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.5...@lmc-eu/spirit-web@0.2.6) (2021-11-26)

### Bug Fixes

- **web-react:** Export Tag from components ([3009321](https://github.com/lmc-eu/spirit-design-system/commit/3009321))

### Chores

- **web-react:** Refactor bundling to make cleaner dist structure ([9f27d9e](https://github.com/lmc-eu/spirit-design-system/commit/9f27d9e))

### Styles

- **web-react:** Reformat package codebase ([ea86d84](https://github.com/lmc-eu/spirit-design-system/commit/ea86d84))

<a name="0.2.5"></a>

## [0.2.5](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.4...@lmc-eu/spirit-web@0.2.5) (2021-11-26)

### Features

- Add react implementation of component Tag ([9a23d17](https://github.com/lmc-eu/spirit-design-system/commit/9a23d17))

<a name="0.2.4"></a>

## [0.2.4](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.3...@lmc-eu/spirit-web@0.2.4) (2021-11-13)

### Chores

- Declare path to repository in package.json ([d337221](https://github.com/lmc-eu/spirit-design-system/commit/d337221))

<a name="0.2.3"></a>

## [0.2.3](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.2...@lmc-eu/spirit-web@0.2.3) (2021-10-20)

### BREAKING CHANGES

- Remove product specific design tokens and CSS from Spirit packages ([0767891](https://github.com/lmc-eu/spirit-design-system/commit/0767891))
  - They will be managed by product teams.
  - Change Jobs demo to custom branding example with overridden design tokens and a Sass pipeline.

<a name="0.2.2"></a>

## [0.2.2](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.1...@lmc-eu/spirit-web@0.2.2) (2021-10-12)

### Code Refactoring

- **button:** Use ButtonProps type also in story ([91ad36b](https://github.com/lmc-eu/spirit-design-system/commit/91ad36b))
- Use typescript also for stories ([645fd86](https://github.com/lmc-eu/spirit-design-system/commit/645fd86))

<a name="0.2.1"></a>

## [0.2.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.2.0...@lmc-eu/spirit-web@0.2.1) (2021-10-07)

### Code Refactoring

- Configure storybook for react and sass support ([ed2e766](https://github.com/lmc-eu/spirit-design-system/commit/ed2e766))
- Setup storybook to use stories from packages ([809d533](https://github.com/lmc-eu/spirit-design-system/commit/809d533))

<a name="0.2.0"></a>

## [0.2.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.1.0...@lmc-eu/spirit-web@0.2.0) (2021-10-07)

### Code Refactoring

- Deliver untranspiled source code via esnext property ([6b5d13e](https://github.com/lmc-eu/spirit-design-system/commit/6b5d13e))
- Split webpack configuration into specific files ([cbf1ced](https://github.com/lmc-eu/spirit-design-system/commit/cbf1ced))
- Set webpack as root dev dependency ([4f82440](https://github.com/lmc-eu/spirit-design-system/commit/4f82440))
- Introduce Typescript support with build scripts ([c286c4c](https://github.com/lmc-eu/spirit-design-system/commit/c286c4c))
- Migrate Button to Typescript ([6788a23](https://github.com/lmc-eu/spirit-design-system/commit/6788a23))
- Keep source for publishing in `dist` directory in all packages ([31cc3af](https://github.com/lmc-eu/spirit-design-system/commit/31cc3af))

### Chores

- Remove unused browserslist config for web-react package ([df8da7c](https://github.com/lmc-eu/spirit-design-system/commit/df8da7c))
- Build package to dist directory ([3025806](https://github.com/lmc-eu/spirit-design-system/commit/3025806))
- Build UMD bundle using Webpack ([c244eea](https://github.com/lmc-eu/spirit-design-system/commit/c244eea))
- Cross-link monorepo packages with `*` and simplify cross-package paths in npm scripts ([35690d2](https://github.com/lmc-eu/spirit-design-system/commit/35690d2))

### Documentation

- Update main `README` to be in sync with code ([489f241](https://github.com/lmc-eu/spirit-design-system/commit/489f241))

### Features

- Introduce `spirit-web-react` package with `Button` component and add example usage ([12725cf](https://github.com/lmc-eu/spirit-design-system/commit/12725cf))

<a name="0.1.0"></a>

## 0.1.0 (2021-09-20)

### Features

- Introduce `spirit-web-react` package with `Button` component and add example usage ([1bc3f09](https://github.com/lmc-eu/spirit-design-system/commit/1bc3f09))
