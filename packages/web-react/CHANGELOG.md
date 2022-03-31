# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.11.0"></a>

# [0.11.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.10.0...@lmc-eu/spirit-web-react@0.11.0) (2022-03-31)

### BREAKING CHANGES

- **web-react:** Build library for ES6 ([9b03978](https://github.com/lmc-eu/spirit-design-system/commit/9b03978))

### Dependencies

- Update all non-major dependencies ([211daef](https://github.com/lmc-eu/spirit-design-system/commit/211daef))

### Documentation

- **web-react:** Add Introduction stories ([4f614d1](https://github.com/lmc-eu/spirit-design-system/commit/4f614d1))
- **web-react:** Introduce Login Form example in storybook ([4c114ba](https://github.com/lmc-eu/spirit-design-system/commit/4c114ba))
- **web-react:** Introduce more detailed Alert documentation ([02f961d](https://github.com/lmc-eu/spirit-design-system/commit/02f961d))

### Features

- **web-react:** Introduce `isFluid` prop for TextField component ([cd2b922](https://github.com/lmc-eu/spirit-design-system/commit/cd2b922))

### Styles

- **web-react:** Fix jsdoc typo ([9007ba7](https://github.com/lmc-eu/spirit-design-system/commit/9007ba7))
- **web-react:** Introduce global declaration file for types ([bb0592d](https://github.com/lmc-eu/spirit-design-system/commit/bb0592d))
- **web-react:** Remove unused prop ([53c1d9f](https://github.com/lmc-eu/spirit-design-system/commit/53c1d9f))
- **web-react:** Remove useless index and declare better global Window ([c38dc76](https://github.com/lmc-eu/spirit-design-system/commit/c38dc76))

### Tests

- **web-react:** Ignore data providers in test directory ([0f693af](https://github.com/lmc-eu/spirit-design-system/commit/0f693af))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.10.0"></a>

# [0.10.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.9.0...@lmc-eu/spirit-web-react@0.10.0) (2022-03-28)

## BREAKING CHANGES

- **web-react:** Remove `className` from all components refs [#DS-158](https://github.com/lmc-eu/spirit-design-system/issues/DS-158) ([788aaf5](https://github.com/lmc-eu/spirit-design-system/commit/788aaf5))
  - we want to be more defensive in styling the components
  - please use existing classes or see the docs for web package
  - @see: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#rebranding
- **web-react:** Filter out unwanted props on components (refs [#DS-160](https://github.com/lmc-eu/spirit-design-system/issues/DS-160)) ([09ef597](https://github.com/lmc-eu/spirit-design-system/commit/09ef597))
  - we want to be more defensive in styling the components
  - please use existing classes or see the docs for web package
  - @see: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#rebranding
- **web-react:** Use `is` prefix for boolean props (refs [#DS-160](https://github.com/lmc-eu/spirit-design-system/issues/DS-160)) ([849a88a](https://github.com/lmc-eu/spirit-design-system/commit/849a88a))
  - we want to use `is` and `has` prefix for boolean props to improve readibility
  - also most of the components are not just HTML tag wrappers so it is
    needed to distinguish components API from HTML attributes

### Features

- **web-react:** Introduce Alert component (refs [#DS-164](https://github.com/lmc-eu/spirit-design-system/issues/DS-164)) ([6681999](https://github.com/lmc-eu/spirit-design-system/commit/6681999))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.9.0"></a>

# [0.9.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.8.0...@lmc-eu/spirit-web-react@0.9.0) (2022-03-22)

### Dependencies

- Update all non-major dependencies ([3fd178b](https://github.com/lmc-eu/spirit-design-system/commit/3fd178b))
- Update all non-major dependencies ([f464e89](https://github.com/lmc-eu/spirit-design-system/commit/f464e89))

### Documentation

- **web-react:** Fix typo in TextField doc ([eb328a3](https://github.com/lmc-eu/spirit-design-system/commit/eb328a3))
- **web-react:** Introduce missing button variants in storybook ([d4ba453](https://github.com/lmc-eu/spirit-design-system/commit/d4ba453))

### Features

- **web-react:** Introduce CheckboxField component (refs [#DS-136](https://github.com/lmc-eu/spirit-design-system/issues/DS-136)) ([89514c8](https://github.com/lmc-eu/spirit-design-system/commit/89514c8))
- **web-react:** Introduce isSquare prop on Button component ([f0ead80](https://github.com/lmc-eu/spirit-design-system/commit/f0ead80))
- **web-react:** Introduce PasswordField component (refs [#DS-149](https://github.com/lmc-eu/spirit-design-system/issues/DS-149)) ([5f7a31e](https://github.com/lmc-eu/spirit-design-system/commit/5f7a31e))

### Styles

- **ci:** Introduce ES Lint ruleset for Jest tests ([63e462d](https://github.com/lmc-eu/spirit-design-system/commit/63e462d))
- **web-react:** Reformat codebase using new eslint rules ([c2e3f5d](https://github.com/lmc-eu/spirit-design-system/commit/c2e3f5d))
- **web-react:** Use of @lmc-eu/eslint-config-react ([683e13f](https://github.com/lmc-eu/spirit-design-system/commit/683e13f))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.8.0"></a>

# [0.8.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.7.0...@lmc-eu/spirit-web-react@0.8.0) (2022-03-11)

### Bug Fixes

- **web-react:** Fix ButtonLink props ([24adcfc](https://github.com/lmc-eu/spirit-design-system/commit/24adcfc))

### Dependencies

- Update all non-major dependencies ([2e73df7](https://github.com/lmc-eu/spirit-design-system/commit/2e73df7))
- Update all non-major dependencies ([1e0fa1e](https://github.com/lmc-eu/spirit-design-system/commit/1e0fa1e))

### Documentation

- **web-react:** Refactor Grid component story using class name ([2a430fa](https://github.com/lmc-eu/spirit-design-system/commit/2a430fa))

### Features

- Update Button variant colors and add new inverted variant [#DS-148](https://github.com/lmc-eu/spirit-design-system/issues/DS-148) ([d66afb0](https://github.com/lmc-eu/spirit-design-system/commit/d66afb0))
- **web-react:** Introduce Stack component (refs [#DS-165](https://github.com/lmc-eu/spirit-design-system/issues/DS-165)) ([79e717b](https://github.com/lmc-eu/spirit-design-system/commit/79e717b))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.7.0"></a>

# [0.7.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.6.1...@lmc-eu/spirit-web-react@0.7.0) (2022-02-26)

### Code Refactoring

- **web-react:** Hook `useClassNamePrefix` now accept argument className ([30a80af](https://github.com/lmc-eu/spirit-design-system/commit/30a80af))
- **web-react:** Move Grid class building logic to react hook ([8cdcf81](https://github.com/lmc-eu/spirit-design-system/commit/8cdcf81))

### Dependencies

- Update all non-major dependencies ([cd7de25](https://github.com/lmc-eu/spirit-design-system/commit/cd7de25))
- Update dependency eslint-config-airbnb to v19 ([50846c9](https://github.com/lmc-eu/spirit-design-system/commit/50846c9))
- Update dependency eslint-plugin-promise to v6 ([360a014](https://github.com/lmc-eu/spirit-design-system/commit/360a014))
- Update dependency jest-junit to v13 ([64e6207](https://github.com/lmc-eu/spirit-design-system/commit/64e6207))

### Documentation

- **web-react:** Add missing jsdoc blocks in build scripts ([e6623cc](https://github.com/lmc-eu/spirit-design-system/commit/e6623cc))

### Features

- **web-react:** Introduce Container component ([7dd9fe0](https://github.com/lmc-eu/spirit-design-system/commit/7dd9fe0))
- **web-react:** Introduce Grid component ([35396f7](https://github.com/lmc-eu/spirit-design-system/commit/35396f7))
- **web-react:** Introduce TextField component (refs [#DS-120](https://github.com/lmc-eu/spirit-design-system/issues/DS-120)) ([8dc3c3d](https://github.com/lmc-eu/spirit-design-system/commit/8dc3c3d))

### Tests

- **web-react:** Collect coverage from all files for report ([d0ca12e](https://github.com/lmc-eu/spirit-design-system/commit/d0ca12e))
- **web-react:** Set absolute path for lcov reporter ([8c84ea7](https://github.com/lmc-eu/spirit-design-system/commit/8c84ea7))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.6.1"></a>

## [0.6.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.6.0...@lmc-eu/spirit-web-react@0.6.1) (2022-02-20)

### Bug Fixes

- **web-react:** Add missing children prop in buttons ([375506d](https://github.com/lmc-eu/spirit-design-system/commit/375506d))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.6.0"></a>

# [0.6.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.5.0...@lmc-eu/spirit-web-react@0.6.0) (2022-02-18)

### Chores

- **web-react:** Fill new entrypoints for package build ([f3dd04f](https://github.com/lmc-eu/spirit-design-system/commit/f3dd04f))

### Code Refactoring

- Define component class name on one place only ([38bb7ee](https://github.com/lmc-eu/spirit-design-system/commit/38bb7ee))
- **web-react:** Generate class names using utility functions [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104) ([936add3](https://github.com/lmc-eu/spirit-design-system/commit/936add3))
- **web-react:** Use hooks to setup button and button link [#DS-132](https://github.com/lmc-eu/spirit-design-system/issues/DS-132) ([b3c06b7](https://github.com/lmc-eu/spirit-design-system/commit/b3c06b7))
- **web-react:** Use tag for element definition and constant for component class (refs [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104)) ([6d2c03b](https://github.com/lmc-eu/spirit-design-system/commit/6d2c03b))

### Dependencies

- Pin dependencies ([1b35871](https://github.com/lmc-eu/spirit-design-system/commit/1b35871))
- Pin dependencies ([dc33b40](https://github.com/lmc-eu/spirit-design-system/commit/dc33b40))
- Update all non-major dependencies ([a48da0b](https://github.com/lmc-eu/spirit-design-system/commit/a48da0b))
- Update all non-major dependencies ([7203ccb](https://github.com/lmc-eu/spirit-design-system/commit/7203ccb))
- Update all non-major dependencies ([a2289eb](https://github.com/lmc-eu/spirit-design-system/commit/a2289eb))

### Documentation

- **web-react:** How to provide prefix to classes using context (refs [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104)) ([7c4d0b5](https://github.com/lmc-eu/spirit-design-system/commit/7c4d0b5))

### Features

- **web-react:** DS-132 Add React implementation ButtonLink component ([81ec22e](https://github.com/lmc-eu/spirit-design-system/commit/81ec22e))
- **web-react:** Introduce context and hook for setting classname prefix ([9aab6ff](https://github.com/lmc-eu/spirit-design-system/commit/9aab6ff))
- **web-react:** Pass down an access to button dom via ref prop ([9e41fa1](https://github.com/lmc-eu/spirit-design-system/commit/9e41fa1))

### Styles

- Reformat changelogs using Prettier ([2491f02](https://github.com/lmc-eu/spirit-design-system/commit/2491f02))

### Tests

- **web-react:** Introduce component testing with testing library [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104) ([61de0c2](https://github.com/lmc-eu/spirit-design-system/commit/61de0c2))
- **web-react:** Introduce test setup for react components [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104) ([2fc017f](https://github.com/lmc-eu/spirit-design-system/commit/2fc017f))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

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
