# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.4.1-alpha.0"></a>

## 2.4.1-alpha.0 (2024-10-04)

Miscellaneous changes

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="2.4.0"></a>

# [2.4.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@2.3.0...@lmc-eu/spirit-web@2.4.0) (2024-09-09)

### Bug Fixes

- **web:** Remove change of `AccordionHeader` background on non-hover devices ([c55256f](https://github.com/lmc-eu/spirit-design-system/commit/c55256f))

### Dependencies

- Pin dependency @types/eslint to 9.6.0 ([0198202](https://github.com/lmc-eu/spirit-design-system/commit/0198202))
- Update all non-major dependencies ([ec96d80](https://github.com/lmc-eu/spirit-design-system/commit/ec96d80))
- Update all non-major dependencies ([bca6b32](https://github.com/lmc-eu/spirit-design-system/commit/bca6b32))
- Update dependency stylelint to v16 ([e3b7ae6](https://github.com/lmc-eu/spirit-design-system/commit/e3b7ae6))

### Features

- **web:** Add `spacing` property to `Grid` [#DS-1388](https://github.com/lmc-eu/spirit-design-system/issues/DS-1388) ([c088cd0](https://github.com/lmc-eu/spirit-design-system/commit/c088cd0))
- **web:** Add alignmentX and alignmentY classes to Grid component [#DS-1414](https://github.com/lmc-eu/spirit-design-system/issues/DS-1414) ([e5d834c](https://github.com/lmc-eu/spirit-design-system/commit/e5d834c))
- **web:** Add responsive variants to breakout-container helper [#DS-1386](https://github.com/lmc-eu/spirit-design-system/issues/DS-1386) ([cc622c3](https://github.com/lmc-eu/spirit-design-system/commit/cc622c3))
- **web:** Add spacing property to Tabs component [#DS-1315](https://github.com/lmc-eu/spirit-design-system/issues/DS-1315) ([c5018a5](https://github.com/lmc-eu/spirit-design-system/commit/c5018a5))
- **web:** Introduce `Flex` layout component [#DS-1415](https://github.com/lmc-eu/spirit-design-system/issues/DS-1415) ([1e0571b](https://github.com/lmc-eu/spirit-design-system/commit/1e0571b))
- **web:** Introduce new class to remove link underlining ([185c8b1](https://github.com/lmc-eu/spirit-design-system/commit/185c8b1))

### Styles

- **web:** Apply markdonw linting rules ([07aafa1](https://github.com/lmc-eu/spirit-design-system/commit/07aafa1))
- **web:** Apply stylistic rules ([2cd0f17](https://github.com/lmc-eu/spirit-design-system/commit/2cd0f17))

### Tests

- **web:** Update SCSS link generator tests with new token values ([2cc2b49](https://github.com/lmc-eu/spirit-design-system/commit/2cc2b49))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="2.3.0"></a>

# [2.3.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@2.2.0...@lmc-eu/spirit-web@2.3.0) (2024-07-24)

### Bug Fixes

- **web,web-react:** Ensure `Slider` renders correctly with non-zero `min` values ([ebd606c](https://github.com/lmc-eu/spirit-design-system/commit/ebd606c))
- **web:** Use UNSTABLE_Section instead of docs-Section ([4b1532c](https://github.com/lmc-eu/spirit-design-system/commit/4b1532c))

### Code Refactoring

- **demo:** Switch from `docs-Section` to `UNSTABLE_Section` component ([44cfab9](https://github.com/lmc-eu/spirit-design-system/commit/44cfab9))

### Documentation

- Change relative path to absolute path in md [#DS-1364](https://github.com/lmc-eu/spirit-design-system/issues/DS-1364) ([ebd2b3f](https://github.com/lmc-eu/spirit-design-system/commit/ebd2b3f))

### Features

- **web-react:** Introduce UNSTABLE_PartnerLogo component [#DS-1356](https://github.com/lmc-eu/spirit-design-system/issues/DS-1356) ([79f55b4](https://github.com/lmc-eu/spirit-design-system/commit/79f55b4))
- **web:** Introduce Divider component [#DS-1391](https://github.com/lmc-eu/spirit-design-system/issues/DS-1391) ([028998b](https://github.com/lmc-eu/spirit-design-system/commit/028998b))
- **web:** Introduce UNSTABLE Toggle component [#DS-1345](https://github.com/lmc-eu/spirit-design-system/issues/DS-1345) ([100ad5e](https://github.com/lmc-eu/spirit-design-system/commit/100ad5e))
- **web:** Introduce UNSTABLE_PartnerLogo component [#DS-1356](https://github.com/lmc-eu/spirit-design-system/issues/DS-1356) ([96f5595](https://github.com/lmc-eu/spirit-design-system/commit/96f5595))
- **web:** Introduce UNSTABLE_ProductLogo component [#DS-1350](https://github.com/lmc-eu/spirit-design-system/issues/DS-1350) ([e7eed31](https://github.com/lmc-eu/spirit-design-system/commit/e7eed31))
- **web:** Introduce UNSTABLE_Section component ([1dd8a6f](https://github.com/lmc-eu/spirit-design-system/commit/1dd8a6f))
- **web:** ModalHeader hide close button prop DS-1063 ([ebb878c](https://github.com/lmc-eu/spirit-design-system/commit/ebb878c))

### Tests

- **e2e:** Create test for opened Modal components ([305b252](https://github.com/lmc-eu/spirit-design-system/commit/305b252))
- **web-react:** Fix & Enable Tooltip visual tests ([26c38bd](https://github.com/lmc-eu/spirit-design-system/commit/26c38bd))
- **web:** Fix & Enable Tooltip visual tests ([6e9b711](https://github.com/lmc-eu/spirit-design-system/commit/6e9b711))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="2.2.0"></a>

# [2.2.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@2.1.0...@lmc-eu/spirit-web@2.2.0) (2024-06-26)

### Bug Fixes

- **web:** Id of Checkbox component indeterminate demo ([84ec8e8](https://github.com/lmc-eu/spirit-design-system/commit/84ec8e8))

### Chores

- **web:** Use sharable Stylelint configuration ([7cb66fd](https://github.com/lmc-eu/spirit-design-system/commit/7cb66fd))

### Code Refactoring

- **web-react:** Change ID naming to kebab-case ([5d601af](https://github.com/lmc-eu/spirit-design-system/commit/5d601af))
- **web-twig:** Update UNSTABLE_EmptyState according to design [#DS-1311](https://github.com/lmc-eu/spirit-design-system/issues/DS-1311) ([09aa447](https://github.com/lmc-eu/spirit-design-system/commit/09aa447))
- **web:** Change ID naming to kebab-case ([1a07fa4](https://github.com/lmc-eu/spirit-design-system/commit/1a07fa4))
- **web:** Update UNSTABLE_EmptyState according to design [#DS-1311](https://github.com/lmc-eu/spirit-design-system/issues/DS-1311) ([8773c2c](https://github.com/lmc-eu/spirit-design-system/commit/8773c2c))

### Dependencies

- Update all non-major dependencies ([7876fb8](https://github.com/lmc-eu/spirit-design-system/commit/7876fb8))
- Update all non-major dependencies ([2ece372](https://github.com/lmc-eu/spirit-design-system/commit/2ece372))
- Update dependency postcss-cli to v11 ([345dd33](https://github.com/lmc-eu/spirit-design-system/commit/345dd33))
- Update dependency rollup to v4 ([c611d09](https://github.com/lmc-eu/spirit-design-system/commit/c611d09))
- Update dependency sass-true to v8 ([62b8481](https://github.com/lmc-eu/spirit-design-system/commit/62b8481))

### Documentation

- **web, web-react:** Emphasize the UNSTABLE component warning ([3c0f2e1](https://github.com/lmc-eu/spirit-design-system/commit/3c0f2e1))
- **web:** Add documentation and demo for ActionLayout component [#DS-1310](https://github.com/lmc-eu/spirit-design-system/issues/DS-1310) ([538dfb9](https://github.com/lmc-eu/spirit-design-system/commit/538dfb9))
- **web:** Add documentation and demo for EmptyState component [#DS-1310](https://github.com/lmc-eu/spirit-design-system/issues/DS-1310) ([4d9962e](https://github.com/lmc-eu/spirit-design-system/commit/4d9962e))
- **web:** Improve Divider Readme [#DS-1304](https://github.com/lmc-eu/spirit-design-system/issues/DS-1304) ([171eadc](https://github.com/lmc-eu/spirit-design-system/commit/171eadc))
- **web:** Link feature flags documentation to the web package readme ([c7fbbbd](https://github.com/lmc-eu/spirit-design-system/commit/c7fbbbd))

### Features

- **web-react:** Introduce UNSTABLE_Avatar component [#DS-1324](https://github.com/lmc-eu/spirit-design-system/issues/DS-1324) ([d36d9fa](https://github.com/lmc-eu/spirit-design-system/commit/d36d9fa))
- **web:** Adjust the `UNSTABLE_Slider` component according to the design [#DS-1330](https://github.com/lmc-eu/spirit-design-system/issues/DS-1330) ([187e0e5](https://github.com/lmc-eu/spirit-design-system/commit/187e0e5))
- **web:** Introduce ActionLayout component [#DS-1311](https://github.com/lmc-eu/spirit-design-system/issues/DS-1311) ([a87be23](https://github.com/lmc-eu/spirit-design-system/commit/a87be23))
- **web:** Introduce UNSTABLE_Avatar component [#DS-1323](https://github.com/lmc-eu/spirit-design-system/issues/DS-1323) ([2e82388](https://github.com/lmc-eu/spirit-design-system/commit/2e82388))
- **web:** Introduce unstable_EmptyState component [#DS-1308](https://github.com/lmc-eu/spirit-design-system/issues/DS-1308) ([e82f73d](https://github.com/lmc-eu/spirit-design-system/commit/e82f73d))
- **web:** Introduce UNSTABLE_Slider component [#DS-1321](https://github.com/lmc-eu/spirit-design-system/issues/DS-1321) ([273123d](https://github.com/lmc-eu/spirit-design-system/commit/273123d))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="2.1.0"></a>

# [2.1.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@2.0.0...@lmc-eu/spirit-web@2.1.0) (2024-06-12)

### Features

- **web:** Introduce UNSTABLE_Divider component [#DS-1302](https://github.com/lmc-eu/spirit-design-system/issues/DS-1302) ([635fb5d](https://github.com/lmc-eu/spirit-design-system/commit/635fb5d))

### Styles

- **repo:** Replace unicode "heavy check mark" with "check mark" ([32f2d76](https://github.com/lmc-eu/spirit-design-system/commit/32f2d76))
- **web:** Apply import sorting ESLint rule [#DS-1101](https://github.com/lmc-eu/spirit-design-system/issues/DS-1101) ([1aaac3a](https://github.com/lmc-eu/spirit-design-system/commit/1aaac3a))
- **web:** Reformat codebase using Prettier v3 ([5f2d6e4](https://github.com/lmc-eu/spirit-design-system/commit/5f2d6e4))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="2.0.0"></a>

# [2.0.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.15.0...@lmc-eu/spirit-web@2.0.0) (2024-06-10)

### BREAKING CHANGES

- **repo:** Drop support for Node.js v16 ([08788be](https://github.com/lmc-eu/spirit-design-system/commit/08788be)), closes [#DS-466](https://github.com/lmc-eu/spirit-design-system/issues/DS-466)
- **web-twig:** Tooltip plugin support only TooltipFloatingUI ([215dd2c](https://github.com/lmc-eu/spirit-design-system/commit/215dd2c))
- **web:** Add component prefix to CSS variables [#DS-1105](https://github.com/lmc-eu/spirit-design-system/issues/DS-1105) ([f1b8d32](https://github.com/lmc-eu/spirit-design-system/commit/f1b8d32))
- **web:** Enhance custom height and max height options of `ModalDialog` [#DS-1134](https://github.com/lmc-eu/spirit-design-system/issues/DS-1134) ([b9f819a](https://github.com/lmc-eu/spirit-design-system/commit/b9f819a))
- **web:** Enhance the Dropdown shadow and remove its feature flag [#DS-1067](https://github.com/lmc-eu/spirit-design-system/issues/DS-1067) ([cf740bb](https://github.com/lmc-eu/spirit-design-system/commit/cf740bb))
- **web:** Pagination Item has the same minimal width as Button [#DS-1030](https://github.com/lmc-eu/spirit-design-system/issues/DS-1030) ([abad96f](https://github.com/lmc-eu/spirit-design-system/commit/abad96f))
- **web:** Remove `HeaderDesktopActions` slots in favor of `isAtEnd` modifier [#DS-1059](https://github.com/lmc-eu/spirit-design-system/issues/DS-1059) ([55e1b19](https://github.com/lmc-eu/spirit-design-system/commit/55e1b19))
- **web:** Remove Dropdown and Tooltip non-flow-relative placements [#DS-1138](https://github.com/lmc-eu/spirit-design-system/issues/DS-1138) ([8963279](https://github.com/lmc-eu/spirit-design-system/commit/8963279))
- **web:** Remove Dropdown combined placement classes [#DS-1139](https://github.com/lmc-eu/spirit-design-system/issues/DS-1139) ([17a5884](https://github.com/lmc-eu/spirit-design-system/commit/17a5884))
- **web:** Remove feature class for bordered Alert [#DS-1230](https://github.com/lmc-eu/spirit-design-system/issues/DS-1230) ([25e4ea8](https://github.com/lmc-eu/spirit-design-system/commit/25e4ea8))
- **web:** Remove feature flag for controlled placement of `Tooltip` [#DS-1182](https://github.com/lmc-eu/spirit-design-system/issues/DS-1182) ([ae651d8](https://github.com/lmc-eu/spirit-design-system/commit/ae651d8))
- **web:** Remove feature flag for the uniform `Modal` variant [#DS-1181](https://github.com/lmc-eu/spirit-design-system/issues/DS-1181) ([1788306](https://github.com/lmc-eu/spirit-design-system/commit/1788306))
- **web:** Remove GridSpan component [#DS-1244](https://github.com/lmc-eu/spirit-design-system/issues/DS-1244) ([dd8bf34](https://github.com/lmc-eu/spirit-design-system/commit/dd8bf34))
- **web:** Remove placement classes [#DS-1183](https://github.com/lmc-eu/spirit-design-system/issues/DS-1183) ([12a965f](https://github.com/lmc-eu/spirit-design-system/commit/12a965f))
- **web:** Rename Dropdown classes [#DS-1248](https://github.com/lmc-eu/spirit-design-system/issues/DS-1248) ([56dbbe8](https://github.com/lmc-eu/spirit-design-system/commit/56dbbe8))
- **web:** Tooltip className changes [#DS-1267](https://github.com/lmc-eu/spirit-design-system/issues/DS-1267) ([e0b5c2c](https://github.com/lmc-eu/spirit-design-system/commit/e0b5c2c))
- **web:** Tooltip plugin support only TooltipFloatingUI ([79e798d](https://github.com/lmc-eu/spirit-design-system/commit/79e798d))
- **web:** Turn off scrolling inside `ModalDialog` by default [#DS-1184](https://github.com/lmc-eu/spirit-design-system/issues/DS-1184) ([2a93f40](https://github.com/lmc-eu/spirit-design-system/commit/2a93f40))

### Bug Fixes

- **web:** Change max width for dismissible tooltip ([abb0421](https://github.com/lmc-eu/spirit-design-system/commit/abb0421))

### Code Refactoring

- **web:** Improve `Tooltip` CSS since the position is only controlled by Floating UI [#DS-1267](https://github.com/lmc-eu/spirit-design-system/issues/DS-1267) ([f2aab61](https://github.com/lmc-eu/spirit-design-system/commit/f2aab61))
- **web:** Refactor placement transformation to allow input of logical placements ([8719647](https://github.com/lmc-eu/spirit-design-system/commit/8719647))

### Documentation

- **repo:** Introduce new Migration Guide structure and prepare WIP guides for new versions [#DS-1218](https://github.com/lmc-eu/spirit-design-system/issues/DS-1218) ([63ab3f1](https://github.com/lmc-eu/spirit-design-system/commit/63ab3f1))
- **web:** Improve ModalDialog expandedOnMobile documentation [#DS-1201](https://github.com/lmc-eu/spirit-design-system/issues/DS-1201) ([f860dcd](https://github.com/lmc-eu/spirit-design-system/commit/f860dcd))
- **web:** The alert role has been removed for Alert component [#DS-1175](https://github.com/lmc-eu/spirit-design-system/issues/DS-1175) ([55ed7db](https://github.com/lmc-eu/spirit-design-system/commit/55ed7db))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.15.0"></a>

# [1.15.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.14.0...@lmc-eu/spirit-web@1.15.0) (2024-06-03)

### Bug Fixes

- **web:** FileUploader `isRequired` prop only marks label ([76ccd52](https://github.com/lmc-eu/spirit-design-system/commit/76ccd52))

### Dependencies

- Update all non-major dependencies ([d0625a8](https://github.com/lmc-eu/spirit-design-system/commit/d0625a8))

### Features

- **web-react:** Add autoclose feature to Toast component ([ef7b36c](https://github.com/lmc-eu/spirit-design-system/commit/ef7b36c))
- **web-react:** Add Message and Link for ToastBar [#DS-1213](https://github.com/lmc-eu/spirit-design-system/issues/DS-1213) ([e60fabb](https://github.com/lmc-eu/spirit-design-system/commit/e60fabb))
- **web-twig:** Add Message and Link for ToastBar [#DS-1213](https://github.com/lmc-eu/spirit-design-system/issues/DS-1213) ([d0f9663](https://github.com/lmc-eu/spirit-design-system/commit/d0f9663))
- **web:** Add autoclose feature to Toast component ([d33c5a8](https://github.com/lmc-eu/spirit-design-system/commit/d33c5a8))
- **web:** Add Message and Link for ToastBar [#DS-1213](https://github.com/lmc-eu/spirit-design-system/issues/DS-1213) ([0a497a6](https://github.com/lmc-eu/spirit-design-system/commit/0a497a6))

### Tests

- **web:** Remove unnecessary stylelint disable and rename sass-true module ([17013fd](https://github.com/lmc-eu/spirit-design-system/commit/17013fd))
- **web:** Use jest-config-spirit common preset ([5d29885](https://github.com/lmc-eu/spirit-design-system/commit/5d29885))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.14.0"></a>

# [1.14.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.13.1...@lmc-eu/spirit-web@1.14.0) (2024-05-20)

### Code Refactoring

- **web:** Use configurable base layout for demo ([7b92d18](https://github.com/lmc-eu/spirit-design-system/commit/7b92d18))
- **web:** Use configurable header template for demo ([300c9b8](https://github.com/lmc-eu/spirit-design-system/commit/300c9b8))
- **web:** Use configurable plain layout for demo ([af454ca](https://github.com/lmc-eu/spirit-design-system/commit/af454ca))
- **web:** Use default layout of demo app ([12facaf](https://github.com/lmc-eu/spirit-design-system/commit/12facaf))
- **web:** Use new partials structure for demo ([ae78a17](https://github.com/lmc-eu/spirit-design-system/commit/ae78a17))
- **web:** Use tabs from demo layout partials ([0af263e](https://github.com/lmc-eu/spirit-design-system/commit/0af263e))

### Dependencies

- Update all non-major dependencies ([7b34614](https://github.com/lmc-eu/spirit-design-system/commit/7b34614))

### Features

- **web:** Introduce bulk `Toast` queue clearing [#DS-1222](https://github.com/lmc-eu/spirit-design-system/issues/DS-1222) ([d54b6ea](https://github.com/lmc-eu/spirit-design-system/commit/d54b6ea))
- **web:** Introduce stacking of the `Toast` queue ([d331d79](https://github.com/lmc-eu/spirit-design-system/commit/d331d79))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.13.1"></a>

## [1.13.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.13.0...@lmc-eu/spirit-web@1.13.1) (2024-04-24)

### Bug Fixes

- **web:** `Dropdown` can now be placed inside a non-scrollable `Modal` [#DS-939](https://github.com/lmc-eu/spirit-design-system/issues/DS-939) ([641f5a4](https://github.com/lmc-eu/spirit-design-system/commit/641f5a4))
- **web:** Use correct overflow CSS variable in ModalDialog [#DS-939](https://github.com/lmc-eu/spirit-design-system/issues/DS-939) ([2788887](https://github.com/lmc-eu/spirit-design-system/commit/2788887))

### Chores

- **repo:** Add missing jest dependency ([f313886](https://github.com/lmc-eu/spirit-design-system/commit/f313886))
- **repo:** Fix Nx settings by running `nx repair` ([4f0bc02](https://github.com/lmc-eu/spirit-design-system/commit/4f0bc02))
- **repo:** Migrate to Yarn Modern ([f20e36a](https://github.com/lmc-eu/spirit-design-system/commit/f20e36a)), closes [#264](https://github.com/lmc-eu/spirit-design-system/issues/264)

### Code Refactoring

- **ci:** Yarn no longer supports `pre*` and `post*` scripts ([44b8f1c](https://github.com/lmc-eu/spirit-design-system/commit/44b8f1c))

### Dependencies

- Pin dependencies ([91f46eb](https://github.com/lmc-eu/spirit-design-system/commit/91f46eb))
- Update all non-major dependencies ([1a4adb6](https://github.com/lmc-eu/spirit-design-system/commit/1a4adb6))
- Update all non-major dependencies ([10774a2](https://github.com/lmc-eu/spirit-design-system/commit/10774a2))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.13.0"></a>

# [1.13.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.12.0...@lmc-eu/spirit-web@1.13.0) (2024-04-11)

### Chores

- **ci:** Remove deploy to GitHub pages in favor of the Netlify app ([b3558c0](https://github.com/lmc-eu/spirit-design-system/commit/b3558c0))
- **web:** Customize demos for Docs app ([3ddeef9](https://github.com/lmc-eu/spirit-design-system/commit/3ddeef9))
- **web:** Remove configuration for the demo app ([bd8183d](https://github.com/lmc-eu/spirit-design-system/commit/bd8183d))

### Dependencies

- Update all non-major dependencies ([b971d44](https://github.com/lmc-eu/spirit-design-system/commit/b971d44))

### Documentation

- **repo:** Deploy Docs app to Netlify ([23d0455](https://github.com/lmc-eu/spirit-design-system/commit/23d0455))
- **repo:** How to setup and start this project ([b6ec3a7](https://github.com/lmc-eu/spirit-design-system/commit/b6ec3a7))
- **repo:** Rebrand to Alma Career ([4a9a28b](https://github.com/lmc-eu/spirit-design-system/commit/4a9a28b))
- **web:** List Deprecations in the web package [#DS-1043](https://github.com/lmc-eu/spirit-design-system/issues/DS-1043) ([3b9499d](https://github.com/lmc-eu/spirit-design-system/commit/3b9499d))

### Features

- **web-twig:** Introduce the `Toast` component [#DS-1115](https://github.com/lmc-eu/spirit-design-system/issues/DS-1115) ([ee9789d](https://github.com/lmc-eu/spirit-design-system/commit/ee9789d))
- **web:** Deprecate Grid Span in favor of Grid Item [#DS-1041](https://github.com/lmc-eu/spirit-design-system/issues/DS-1041) ([6b2ebe0](https://github.com/lmc-eu/spirit-design-system/commit/6b2ebe0))
- **web:** Introduce `Toast` JavaScript plugin [#DS-1115](https://github.com/lmc-eu/spirit-design-system/issues/DS-1115) ([1ab3f7f](https://github.com/lmc-eu/spirit-design-system/commit/1ab3f7f))
- **web:** Print all design tokens as CSS root variables [#DS-1200](https://github.com/lmc-eu/spirit-design-system/issues/DS-1200) ([b0a7ee7](https://github.com/lmc-eu/spirit-design-system/commit/b0a7ee7))

### Tests

- **web:** Add tests for Toast component ([2d63d05](https://github.com/lmc-eu/spirit-design-system/commit/2d63d05))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.12.0"></a>

# [1.12.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.11.0...@lmc-eu/spirit-web@1.12.0) (2024-03-11)

### Bug Fixes

- **web:** Dropdown autoclose option should be strictly checked ([b8966a4](https://github.com/lmc-eu/spirit-design-system/commit/b8966a4)), closes [#DS-1157](https://github.com/lmc-eu/spirit-design-system/issues/DS-1157)

### Documentation

- **web:** Do not list components that don't have index.html on Demo homepage [#DS-1185](https://github.com/lmc-eu/spirit-design-system/issues/DS-1185) ([7162a16](https://github.com/lmc-eu/spirit-design-system/commit/7162a16))
- **web:** Dropdown demo with disabled autoclose should be disabled ([0bd9836](https://github.com/lmc-eu/spirit-design-system/commit/0bd9836)), closes [#DS-1157](https://github.com/lmc-eu/spirit-design-system/issues/DS-1157)
- **web:** Use danger icon for danger color in Alert and Toast ([3324d6b](https://github.com/lmc-eu/spirit-design-system/commit/3324d6b))

### Features

- **web:** Add Bordered Alert Feature Flag and showcase it in Demo ([b5ff0f5](https://github.com/lmc-eu/spirit-design-system/commit/b5ff0f5)), closes [#DS-1156](https://github.com/lmc-eu/spirit-design-system/issues/DS-1156)
- **web:** Introduce the `Toast` component [#DS-1112](https://github.com/lmc-eu/spirit-design-system/issues/DS-1112) ([07742b8](https://github.com/lmc-eu/spirit-design-system/commit/07742b8))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.11.0"></a>

# [1.11.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.10.0...@lmc-eu/spirit-web@1.11.0) (2024-02-20)

### Chores

- **web:** Set `sass` as optional peer dependency ([a680690](https://github.com/lmc-eu/spirit-design-system/commit/a680690)), closes [#DS-1162](https://github.com/lmc-eu/spirit-design-system/issues/DS-1162)

### Documentation

- **web, web-react, web-twig:** Fix the `aria-controls` ID references in examples ([2a7c1aa](https://github.com/lmc-eu/spirit-design-system/commit/2a7c1aa))
- **web:** Add demo with Tooltip on Icon element ([fae7fde](https://github.com/lmc-eu/spirit-design-system/commit/fae7fde))
- **web:** Fix Sass implementation notes ([24054e1](https://github.com/lmc-eu/spirit-design-system/commit/24054e1))

### Features

- **web:** Deprecate Dropdown non flow and modifier placement DS-1132 ([28ef059](https://github.com/lmc-eu/spirit-design-system/commit/28ef059))
- **web:** Tooltip hover ([dfd1dd1](https://github.com/lmc-eu/spirit-design-system/commit/dfd1dd1))
- **web:** Unify naming in SCSS, use padding or gap [#DS-782](https://github.com/lmc-eu/spirit-design-system/issues/DS-782) ([eab44eb](https://github.com/lmc-eu/spirit-design-system/commit/eab44eb))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.10.0"></a>

# [1.10.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.9.0...@lmc-eu/spirit-web@1.10.0) (2024-02-07)

### Code Refactoring

- **web:** Change `Modal` positioning from fixed position to margins ([26a8289](https://github.com/lmc-eu/spirit-design-system/commit/26a8289))

### Features

- **web:** Introduce option to disable scrolling inside `Modal` [#DS-732](https://github.com/lmc-eu/spirit-design-system/issues/DS-732) ([e3c385a](https://github.com/lmc-eu/spirit-design-system/commit/e3c385a))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.9.0"></a>

# [1.9.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.8.0...@lmc-eu/spirit-web@1.9.0) (2024-01-30)

### Bug Fixes

- **web:** Check if controlled placement on Tooltip is also undefined ([049ebf7](https://github.com/lmc-eu/spirit-design-system/commit/049ebf7))

### Chores

- **web,web-react:** Hide Vite HMR overlay ([66bb64a](https://github.com/lmc-eu/spirit-design-system/commit/66bb64a))
- **web,web-twig,web-react:** Unify demo differences in components [#DS-660](https://github.com/lmc-eu/spirit-design-system/issues/DS-660) ([db7426e](https://github.com/lmc-eu/spirit-design-system/commit/db7426e))

### Dependencies

- **web:** Adding peer FloatingUI dependency to web package.json ([6484314](https://github.com/lmc-eu/spirit-design-system/commit/6484314))

### Documentation

- **web, web-twig, web-react:** Clarify that `Modal` can be stacked, but not nested in the DOM ([16f3b70](https://github.com/lmc-eu/spirit-design-system/commit/16f3b70))

### Features

- **demo,web,web-react,form-validations:** Set font-display to block in google fonts load ([258d9e9](https://github.com/lmc-eu/spirit-design-system/commit/258d9e9))
- **web-react:** Introduce vertical alignment options for `Modal` [#DS-940](https://github.com/lmc-eu/spirit-design-system/issues/DS-940) ([67e2594](https://github.com/lmc-eu/spirit-design-system/commit/67e2594))
- **web:** Add FloatingUI support to Tooltip components ([40887b2](https://github.com/lmc-eu/spirit-design-system/commit/40887b2))
- **web:** Introduce vertical alignment options for `Modal` [#DS-940](https://github.com/lmc-eu/spirit-design-system/issues/DS-940) ([966f44e](https://github.com/lmc-eu/spirit-design-system/commit/966f44e))
- **web:** New CSS variable for Tooltip maxWidth ([1db03e9](https://github.com/lmc-eu/spirit-design-system/commit/1db03e9))

### Tests

- **web:** Adding test for tooltip config attribute ([274bab6](https://github.com/lmc-eu/spirit-design-system/commit/274bab6))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.8.0"></a>

# [1.8.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.7.0...@lmc-eu/spirit-web@1.8.0) (2024-01-17)

### Features

- **web-react:** Introduce optional uniform appearance of `Modal` [#DS-1091](https://github.com/lmc-eu/spirit-design-system/issues/DS-1091) ([531a9d9](https://github.com/lmc-eu/spirit-design-system/commit/531a9d9))

### Reverts

- **web:** Move `common` files back to the package ([08eb968](https://github.com/lmc-eu/spirit-design-system/commit/08eb968))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.7.0"></a>

# [1.7.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.6.0...@lmc-eu/spirit-web@1.7.0) (2024-01-12)

### Bug Fixes

- **web:** Remove `will-change` from `Modal` to prevent high memory consumption ([a907e23](https://github.com/lmc-eu/spirit-design-system/commit/a907e23))
- **web:** Simplify scroll blocking used by `Modal` and `OffCanvas` to CSS-only solution [#DS-1124](https://github.com/lmc-eu/spirit-design-system/issues/DS-1124) ([e9277ea](https://github.com/lmc-eu/spirit-design-system/commit/e9277ea))

### Chores

- **web:** Build desing tokens only if they do not exists ([e3eee15](https://github.com/lmc-eu/spirit-design-system/commit/e3eee15))
- **web:** Require `sass` from v1.57.0 above due to `string.split` ([cf65e20](https://github.com/lmc-eu/spirit-design-system/commit/cf65e20))
- **web:** Use common local server configuration ([6846b69](https://github.com/lmc-eu/spirit-design-system/commit/6846b69)), closes [#DS-1093](https://github.com/lmc-eu/spirit-design-system/issues/DS-1093)

### Code Refactoring

- **web:** Use `warning` utility instead of `console.warn` ([bf4e899](https://github.com/lmc-eu/spirit-design-system/commit/bf4e899))

### Dependencies

- Pin dependencies ([1906e75](https://github.com/lmc-eu/spirit-design-system/commit/1906e75))
- Update all non-major dependencies ([67f8357](https://github.com/lmc-eu/spirit-design-system/commit/67f8357))
- Update all non-major dependencies ([8acf2e7](https://github.com/lmc-eu/spirit-design-system/commit/8acf2e7))
- Update all non-major dependencies ([04252f1](https://github.com/lmc-eu/spirit-design-system/commit/04252f1))

### Documentation

- **web:** Record our convention for CSS and JS selectors to avoid confusion ([bfa569f](https://github.com/lmc-eu/spirit-design-system/commit/bfa569f))
- **web:** Update Dropdown demo with Item usage [#DS-956](https://github.com/lmc-eu/spirit-design-system/issues/DS-956) ([1209da8](https://github.com/lmc-eu/spirit-design-system/commit/1209da8))
- **web:** Use dash instead of underscore for `id` and `name` attribute values in `Modal` docs ([cbe878b](https://github.com/lmc-eu/spirit-design-system/commit/cbe878b))

### Features

- **web:** Extend Tooltip Floating UI example, deprecate CSS modifiers and side corners names ([02c3ddf](https://github.com/lmc-eu/spirit-design-system/commit/02c3ddf)), closes [#DS-618](https://github.com/lmc-eu/spirit-design-system/issues/DS-618)
- **web:** Introduce custom Stack spacing [#DS-1079](https://github.com/lmc-eu/spirit-design-system/issues/DS-1079) ([72e58ec](https://github.com/lmc-eu/spirit-design-system/commit/72e58ec))
- **web:** Introduce optional uniform appearance of `Modal` [#DS-1091](https://github.com/lmc-eu/spirit-design-system/issues/DS-1091) ([8eefa26](https://github.com/lmc-eu/spirit-design-system/commit/8eefa26))

### Styles

- **web:** Fix lint errors and warnings ([feeda8f](https://github.com/lmc-eu/spirit-design-system/commit/feeda8f))

### Tests

- **repo:** Use common configuration for server endpoints ([a057101](https://github.com/lmc-eu/spirit-design-system/commit/a057101)), closes [#DS-1093](https://github.com/lmc-eu/spirit-design-system/issues/DS-1093)

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.6.0"></a>

# [1.6.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.5.1...@lmc-eu/spirit-web@1.6.0) (2023-12-05)

### Bug Fixes

- **web:** FileUploader error message changed to be same across all ([0ee008b](https://github.com/lmc-eu/spirit-design-system/commit/0ee008b))
- **web:** Make Item, Checkbox Item and Radio Item full width ([3bf097c](https://github.com/lmc-eu/spirit-design-system/commit/3bf097c))
- **web:** Refactor `Accordion` styles to fully support theming via design tokens [#DS-1074](https://github.com/lmc-eu/spirit-design-system/issues/DS-1074) ([ac0fec6](https://github.com/lmc-eu/spirit-design-system/commit/ac0fec6))

### Features

- **web:** Introduce Item component [#DS-1047](https://github.com/lmc-eu/spirit-design-system/issues/DS-1047) ([684560d](https://github.com/lmc-eu/spirit-design-system/commit/684560d))

### Tests

- **web:** Fixed test to expect updated error message ([1d0d80f](https://github.com/lmc-eu/spirit-design-system/commit/1d0d80f))
- **web:** Introduce SASS unit tests ([7b88d4c](https://github.com/lmc-eu/spirit-design-system/commit/7b88d4c))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.5.1"></a>

## [1.5.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.5.0...@lmc-eu/spirit-web@1.5.1) (2023-11-18)

Miscellaneous changes

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.5.0"></a>

# [1.5.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.4.0...@lmc-eu/spirit-web@1.5.0) (2023-11-15)

### Bug Fixes

- **web, web-twig:** FileUploader changed selectors in JS plugin ([967d5a4](https://github.com/lmc-eu/spirit-design-system/commit/967d5a4))
- **web:** Disable text decoration changes for disabled links ([c01055a](https://github.com/lmc-eu/spirit-design-system/commit/c01055a))

### Chores

- **ci:** Build packages before running tests ([e310181](https://github.com/lmc-eu/spirit-design-system/commit/e310181))
- **web:** Build design tokens before building examples ([e4d9586](https://github.com/lmc-eu/spirit-design-system/commit/e4d9586))
- **web:** Change design-tokens path in scripts ([d3e14a2](https://github.com/lmc-eu/spirit-design-system/commit/d3e14a2))
- **web:** Do not deploy Offcanvas component as it is empty ([c18effd](https://github.com/lmc-eu/spirit-design-system/commit/c18effd))

### Code Refactoring

- **web:** FileUploader imageObjectFit data attr changed to style ([0b21067](https://github.com/lmc-eu/spirit-design-system/commit/0b21067))
- **web:** Offcanvas uses design token instead of hardcoded value ([f4ce7b0](https://github.com/lmc-eu/spirit-design-system/commit/f4ce7b0)), closes [#DS-1012](https://github.com/lmc-eu/spirit-design-system/issues/DS-1012)

### Dependencies

- Update all non-major dependencies ([828bc68](https://github.com/lmc-eu/spirit-design-system/commit/828bc68))

### Documentation

- **web, web-twig, web-react:** Document ModalHeader and ModalFooter usage recommendations [#DS-1033](https://github.com/lmc-eu/spirit-design-system/issues/DS-1033) ([403cc0b](https://github.com/lmc-eu/spirit-design-system/commit/403cc0b))
- **web,web-twig,web-react:** Add interactive demo of `Dropdown` placements [#DS-1037](https://github.com/lmc-eu/spirit-design-system/issues/DS-1037) ([deb054c](https://github.com/lmc-eu/spirit-design-system/commit/deb054c))
- **web,web-twig,web-react:** Make use of new `GridItem` component in `Tooltip` placement examples ([81d9952](https://github.com/lmc-eu/spirit-design-system/commit/81d9952))
- **web:** FileUploaderAttachment documentation update ([728f31b](https://github.com/lmc-eu/spirit-design-system/commit/728f31b))
- **web:** Introduce Offcanvas readme and bind it to the Header ([16dff9a](https://github.com/lmc-eu/spirit-design-system/commit/16dff9a)), closes [#DS-1012](https://github.com/lmc-eu/spirit-design-system/issues/DS-1012)
- **web:** Put pure CSS examples of `Tooltip` in line so they are usable in more viewport sizes ([753867a](https://github.com/lmc-eu/spirit-design-system/commit/753867a))
- **web:** Showcase placement valuse on Tooltip demo ([1aa8b5c](https://github.com/lmc-eu/spirit-design-system/commit/1aa8b5c)), closes [#DS-923](https://github.com/lmc-eu/spirit-design-system/issues/DS-923)

### Features

- **web:** Add breakpoint tokens to root CSS variables ([a16707e](https://github.com/lmc-eu/spirit-design-system/commit/a16707e))
- **web:** Add Feature flag to enable enhanced Dropdown shadow [#DS-963](https://github.com/lmc-eu/spirit-design-system/issues/DS-963) ([c59507b](https://github.com/lmc-eu/spirit-design-system/commit/c59507b))
- **web:** All JS plugins can now load configuration ([0836854](https://github.com/lmc-eu/spirit-design-system/commit/0836854))
- **web:** Allow combining links and buttons in `HeaderDesktopActions` ([14f8ee5](https://github.com/lmc-eu/spirit-design-system/commit/14f8ee5))
- **web:** Enable `<button>` elements to be styled as links ([89809e8](https://github.com/lmc-eu/spirit-design-system/commit/89809e8))
- **web:** Introduce Config class for loading configuration ([08916d9](https://github.com/lmc-eu/spirit-design-system/commit/08916d9)), closes [#DS-1012](https://github.com/lmc-eu/spirit-design-system/issues/DS-1012)
- **web:** Offcanvas plugin can load breakpoint option ([79108ab](https://github.com/lmc-eu/spirit-design-system/commit/79108ab)), closes [#DS-1012](https://github.com/lmc-eu/spirit-design-system/issues/DS-1012)

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.4.0"></a>

# [1.4.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.3.0...@lmc-eu/spirit-web@1.4.0) (2023-11-02)

### Bug Fixes

- **web:** Increase image quality of FileUploader image preview ([ccbd6c0](https://github.com/lmc-eu/spirit-design-system/commit/ccbd6c0)), closes [#DS-1039](https://github.com/lmc-eu/spirit-design-system/issues/DS-1039)
- **web:** Recalculate FileUploader image preview by crop values ([1d9ed7d](https://github.com/lmc-eu/spirit-design-system/commit/1d9ed7d)), closes [#DS-1038](https://github.com/lmc-eu/spirit-design-system/issues/DS-1038)

### Features

- **web:** Attachment image preview object fit [#DS-1005](https://github.com/lmc-eu/spirit-design-system/issues/DS-1005) ([90ecd0e](https://github.com/lmc-eu/spirit-design-system/commit/90ecd0e))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.3.0"></a>

# [1.3.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.2.2...@lmc-eu/spirit-web@1.3.0) (2023-10-25)

### Dependencies

- Update all non-major dependencies ([e7b6413](https://github.com/lmc-eu/spirit-design-system/commit/e7b6413))
- Update all non-major dependencies ([f8e1a11](https://github.com/lmc-eu/spirit-design-system/commit/f8e1a11))
- Update dependency @lmc-eu/browserslist-config to v2 ([29d7a59](https://github.com/lmc-eu/spirit-design-system/commit/29d7a59))
- Update dependency @lmc-eu/stylelint-config to v7 ([ff26da7](https://github.com/lmc-eu/spirit-design-system/commit/ff26da7))

### Documentation

- **web, web-react, web-twig:** Dealing with text truncate in Breadcrumb ([d15fd1b](https://github.com/lmc-eu/spirit-design-system/commit/d15fd1b)), closes [#DS-960](https://github.com/lmc-eu/spirit-design-system/issues/DS-960)
- **web:** Add CDN links for quick usage of the `spirit-web` package ([93577b2](https://github.com/lmc-eu/spirit-design-system/commit/93577b2))
- **web:** Explain abbreviation in the Accessibility section ([73a80f2](https://github.com/lmc-eu/spirit-design-system/commit/73a80f2))
- **web:** FileUploader - Support for crop image [#DS-954](https://github.com/lmc-eu/spirit-design-system/issues/DS-954) ([0cb30d5](https://github.com/lmc-eu/spirit-design-system/commit/0cb30d5))
- **web:** Remove unexisting `Icon` class ([02bb9ff](https://github.com/lmc-eu/spirit-design-system/commit/02bb9ff))
- **web:** Switch sides of the icon in Breadcrumbs ([9cfc538](https://github.com/lmc-eu/spirit-design-system/commit/9cfc538))
- **web:** Unify component examples in demos [#DS-979](https://github.com/lmc-eu/spirit-design-system/issues/DS-979) ([bba851d](https://github.com/lmc-eu/spirit-design-system/commit/bba851d))

### Features

- **web-react:** Introduce Grid Item component [#DS-961](https://github.com/lmc-eu/spirit-design-system/issues/DS-961) ([2cf07c9](https://github.com/lmc-eu/spirit-design-system/commit/2cf07c9))
- **web:** Add disabled backdrop click option to Modal component ([ef1f268](https://github.com/lmc-eu/spirit-design-system/commit/ef1f268))
- **web:** FileUploader - Support for crop image [#DS-954](https://github.com/lmc-eu/spirit-design-system/issues/DS-954) ([3c94b1c](https://github.com/lmc-eu/spirit-design-system/commit/3c94b1c))
- **web:** Introduce Grid Item component [#DS-961](https://github.com/lmc-eu/spirit-design-system/issues/DS-961) ([23bce0f](https://github.com/lmc-eu/spirit-design-system/commit/23bce0f))
- **web:** Introduce Placement dictionary and use it in `Dropdown` and `Tooltip` [#DS-923](https://github.com/lmc-eu/spirit-design-system/issues/DS-923) ([3cd80e6](https://github.com/lmc-eu/spirit-design-system/commit/3cd80e6))
- **web:** Showcase noninteractive breadcrumbs item [#DS-957](https://github.com/lmc-eu/spirit-design-system/issues/DS-957) ([4af0774](https://github.com/lmc-eu/spirit-design-system/commit/4af0774))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.2.2"></a>

## [1.2.2](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.2.1...@lmc-eu/spirit-web@1.2.2) (2023-09-26)

### Bug Fixes

- **web,web-twig:** Fix `Button` flickering during spinner animation in Firefox ([f3cfd93](https://github.com/lmc-eu/spirit-design-system/commit/f3cfd93))
- **web:** Prevent Stack with inner dividers from removing vertical padding of outer items ([e32b945](https://github.com/lmc-eu/spirit-design-system/commit/e32b945))

### Code Refactoring

- **web:** Use demo package css instead of own ([1db1d90](https://github.com/lmc-eu/spirit-design-system/commit/1db1d90))

### Documentation

- **web-react:** Add Collapse demo [#DS-893](https://github.com/lmc-eu/spirit-design-system/issues/DS-893) ([d3cd38c](https://github.com/lmc-eu/spirit-design-system/commit/d3cd38c))
- **web, web-react, web-twig:** Unify `Modal` READMEs ([f126dca](https://github.com/lmc-eu/spirit-design-system/commit/f126dca))
- **web:** Add Collapse demo [#DS-893](https://github.com/lmc-eu/spirit-design-system/issues/DS-893) ([b73811e](https://github.com/lmc-eu/spirit-design-system/commit/b73811e))
- **web:** Add Icons demo [#DS-900](https://github.com/lmc-eu/spirit-design-system/issues/DS-900) ([e59b123](https://github.com/lmc-eu/spirit-design-system/commit/e59b123))
- **web:** Add Link demo [#DS-901](https://github.com/lmc-eu/spirit-design-system/issues/DS-901) ([108d295](https://github.com/lmc-eu/spirit-design-system/commit/108d295))
- **web:** Add Modal demo [#DS-902](https://github.com/lmc-eu/spirit-design-system/issues/DS-902) ([92a97f4](https://github.com/lmc-eu/spirit-design-system/commit/92a97f4))
- **web:** Add Pagination demo DS-903 ([8db680a](https://github.com/lmc-eu/spirit-design-system/commit/8db680a))
- **web:** Add Pill demo [#DS-904](https://github.com/lmc-eu/spirit-design-system/issues/DS-904) ([b63bf9e](https://github.com/lmc-eu/spirit-design-system/commit/b63bf9e))
- **web:** Add Radio demo [#DS-905](https://github.com/lmc-eu/spirit-design-system/issues/DS-905) ([546c714](https://github.com/lmc-eu/spirit-design-system/commit/546c714))
- **web:** Add ScrollView demo [#DS-906](https://github.com/lmc-eu/spirit-design-system/issues/DS-906) ([38004cf](https://github.com/lmc-eu/spirit-design-system/commit/38004cf))
- **web:** Add Spinner demo [#DS-907](https://github.com/lmc-eu/spirit-design-system/issues/DS-907) ([4860146](https://github.com/lmc-eu/spirit-design-system/commit/4860146))
- **web:** Add Stack demo [#DS-908](https://github.com/lmc-eu/spirit-design-system/issues/DS-908) ([a2d8b85](https://github.com/lmc-eu/spirit-design-system/commit/a2d8b85))
- **web:** Add Tabs demo [#DS-909](https://github.com/lmc-eu/spirit-design-system/issues/DS-909) ([254afeb](https://github.com/lmc-eu/spirit-design-system/commit/254afeb))
- **web:** Add Tag demo [#DS-911](https://github.com/lmc-eu/spirit-design-system/issues/DS-911) ([e1debbf](https://github.com/lmc-eu/spirit-design-system/commit/e1debbf))
- **web:** Add Text demo [#DS-911](https://github.com/lmc-eu/spirit-design-system/issues/DS-911) ([01211cb](https://github.com/lmc-eu/spirit-design-system/commit/01211cb))
- **web:** Add TextArea demo [#DS-912](https://github.com/lmc-eu/spirit-design-system/issues/DS-912) ([17eb911](https://github.com/lmc-eu/spirit-design-system/commit/17eb911))
- **web:** Add TextField demo [#DS-913](https://github.com/lmc-eu/spirit-design-system/issues/DS-913) ([a34e914](https://github.com/lmc-eu/spirit-design-system/commit/a34e914))
- **web:** Add Tooltip demo [#DS-914](https://github.com/lmc-eu/spirit-design-system/issues/DS-914) ([3dd7c3b](https://github.com/lmc-eu/spirit-design-system/commit/3dd7c3b))
- **web:** Removing subtitles about using JS plugin ([28113e9](https://github.com/lmc-eu/spirit-design-system/commit/28113e9))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.2.1"></a>

## [1.2.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.2.0...@lmc-eu/spirit-web@1.2.1) (2023-09-06)

### Bug Fixes

- **web:** Add missing event call in FileUploader event handler [#DS-938](https://github.com/lmc-eu/spirit-design-system/issues/DS-938) ([714f626](https://github.com/lmc-eu/spirit-design-system/commit/714f626))
- **web:** Debounce in ScrollView now trigger correctly during scrolling ([b5911df](https://github.com/lmc-eu/spirit-design-system/commit/b5911df))
- **web:** Use `unknown` instead of `any` type in Transitions ([7fa47fd](https://github.com/lmc-eu/spirit-design-system/commit/7fa47fd))

### Dependencies

- Update all non-major dependencies ([2ed3156](https://github.com/lmc-eu/spirit-design-system/commit/2ed3156))

### Documentation

- **web:** Add Breadcrumbs demo [#DS-981](https://github.com/lmc-eu/spirit-design-system/issues/DS-981) ([8390b10](https://github.com/lmc-eu/spirit-design-system/commit/8390b10))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.2.0"></a>

# [1.2.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.1.0...@lmc-eu/spirit-web@1.2.0) (2023-08-23)

### Bug Fixes

- **web:** Drop support of Windows high contrast mode in `Radio` to fix antialiasing issues ([8d80269](https://github.com/lmc-eu/spirit-design-system/commit/8d80269))
- **web:** Prevent underline in ButtonLink in the active state ([7c8b27a](https://github.com/lmc-eu/spirit-design-system/commit/7c8b27a))
- **web:** Remove unused data attribute in Accordion [#DS-883](https://github.com/lmc-eu/spirit-design-system/issues/DS-883) ([fcfb261](https://github.com/lmc-eu/spirit-design-system/commit/fcfb261))
- **web:** Set correct order of hover, focus and active states in CSS ([6bcf3cf](https://github.com/lmc-eu/spirit-design-system/commit/6bcf3cf))
- **web:** Use gap in Stack with spacing and without dividers [#DS-880](https://github.com/lmc-eu/spirit-design-system/issues/DS-880) ([04fe707](https://github.com/lmc-eu/spirit-design-system/commit/04fe707))

### Dependencies

- Update all non-major dependencies ([acba328](https://github.com/lmc-eu/spirit-design-system/commit/acba328))
- Update dependency @testing-library/jest-dom to v6 ([d21b678](https://github.com/lmc-eu/spirit-design-system/commit/d21b678))

### Documentation

- **form-validations, web, web-twig, web-react:** Unify unicode characters in API tables ([8c837eb](https://github.com/lmc-eu/spirit-design-system/commit/8c837eb))
- **web-react, web-twig:** Unify the syntax of enums in API tables ([f83e9ac](https://github.com/lmc-eu/spirit-design-system/commit/f83e9ac))
- **web, web-react:** Unify the syntax of boolean and string props ([8449ae8](https://github.com/lmc-eu/spirit-design-system/commit/8449ae8))
- **web, web-twig:** Unify column names in API tables ([b33b8ff](https://github.com/lmc-eu/spirit-design-system/commit/b33b8ff))
- **web:** Add missing JS plugin info to TextField Password Toggle [#DS-870](https://github.com/lmc-eu/spirit-design-system/issues/DS-870) ([3975c19](https://github.com/lmc-eu/spirit-design-system/commit/3975c19))

### Features

- **web-twig:** Add support of image preview and edit button to FileUploaderAttachment [#DS-851](https://github.com/lmc-eu/spirit-design-system/issues/DS-851) ([401c399](https://github.com/lmc-eu/spirit-design-system/commit/401c399))
- **web:** FileUploader Image attachment preview ([350aeee](https://github.com/lmc-eu/spirit-design-system/commit/350aeee))
- **web:** Set image preview dataset on the attachment instead on the list [#DS-851](https://github.com/lmc-eu/spirit-design-system/issues/DS-851) ([89daf60](https://github.com/lmc-eu/spirit-design-system/commit/89daf60))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.1.0"></a>

# [1.1.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@1.0.0...@lmc-eu/spirit-web@1.1.0) (2023-08-09)

### Bug Fixes

- **web:** Fix ModalDialog unset box-sizing [#DS-878](https://github.com/lmc-eu/spirit-design-system/issues/DS-878) ([8392bbc](https://github.com/lmc-eu/spirit-design-system/commit/8392bbc))

### Chores

- **web:** Remove `readdirSync` because it is defined but never used ([5de1ef4](https://github.com/lmc-eu/spirit-design-system/commit/5de1ef4))

### Code Refactoring

- **web:** Function is banned type, use FunctionConstructor instead ([716b067](https://github.com/lmc-eu/spirit-design-system/commit/716b067))

### Dependencies

- Update all non-major dependencies ([19335a3](https://github.com/lmc-eu/spirit-design-system/commit/19335a3))

### Documentation

- **web, web-react, web-twig:** Minor typo fix ([be40478](https://github.com/lmc-eu/spirit-design-system/commit/be40478))
- **web,web-twig:** Mark visual-only examples in `FileUploader` demo ([27b3533](https://github.com/lmc-eu/spirit-design-system/commit/27b3533))
- **web,web-twig:** Showcase the fluid variant of `Select` ([3486a99](https://github.com/lmc-eu/spirit-design-system/commit/3486a99))

### Features

- **web:** Extend `FileUploaderAttachment` with preview and custom actions slot ([768906f](https://github.com/lmc-eu/spirit-design-system/commit/768906f))
- **web:** Introduce `FieldGroup` component [#DS-855](https://github.com/lmc-eu/spirit-design-system/issues/DS-855) ([76b9a0f](https://github.com/lmc-eu/spirit-design-system/commit/76b9a0f))

### Styles

- **web:** Fix JSDoc formatting in EventHandler ([9e20aba](https://github.com/lmc-eu/spirit-design-system/commit/9e20aba))

### Tests

- **web-react:** Replace toThrowError() with its canonical name of toThrow() ([a84e5c1](https://github.com/lmc-eu/spirit-design-system/commit/a84e5c1))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="1.0.0"></a>

# [1.0.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.50.1...@lmc-eu/spirit-web@1.0.0) (2023-07-21)

### BREAKING CHANGES

- **web:** Add `spirit` infix to data attr names for components and JS plugins [#DS-585](https://github.com/lmc-eu/spirit-design-system/issues/DS-585) ([1a8acd9](https://github.com/lmc-eu/spirit-design-system/commit/1a8acd9))
- **web:** Add underline to hover and active states to default links [#DS-650](https://github.com/lmc-eu/spirit-design-system/issues/DS-650) ([6e83710](https://github.com/lmc-eu/spirit-design-system/commit/6e83710))
- **web:** Composed Modal became Modal [#DS-592](https://github.com/lmc-eu/spirit-design-system/issues/DS-592) ([369bbe1](https://github.com/lmc-eu/spirit-design-system/commit/369bbe1))
- **web:** Remove `default` (now `neutral`) and `light` (`subtle`) `Tag` variants [#DS-648](https://github.com/lmc-eu/spirit-design-system/issues/DS-648) ([273aa26](https://github.com/lmc-eu/spirit-design-system/commit/273aa26))
- **web:** Remove `error` state from Checkbox, Radio, TextField, and TextArea [#DS-677](https://github.com/lmc-eu/spirit-design-system/issues/DS-677) ([813d9c3](https://github.com/lmc-eu/spirit-design-system/commit/813d9c3))
- **web:** Remove `fullWidth` and `data-breakpoint` modifiers from `Dropdown` [#DS-588](https://github.com/lmc-eu/spirit-design-system/issues/DS-588) ([31296ea](https://github.com/lmc-eu/spirit-design-system/commit/31296ea)), closes [#935](https://github.com/lmc-eu/spirit-design-system/issues/935), [#935](https://github.com/lmc-eu/spirit-design-system/issues/935), [#935](https://github.com/lmc-eu/spirit-design-system/issues/935)
- **web:** Remove deprecated `Header` component [#653](https://github.com/lmc-eu/spirit-design-system/issues/653) ([c730a62](https://github.com/lmc-eu/spirit-design-system/commit/c730a62)), closes [#935](https://github.com/lmc-eu/spirit-design-system/issues/935), [#935](https://github.com/lmc-eu/spirit-design-system/issues/935)
- **web:** Remove modal body padding feature class [#DS-863](https://github.com/lmc-eu/spirit-design-system/issues/DS-863) ([462a245](https://github.com/lmc-eu/spirit-design-system/commit/462a245))
- **web:** Rename `CheckboxField` to `Checkbox` [#DS-522](https://github.com/lmc-eu/spirit-design-system/issues/DS-522) ([5270040](https://github.com/lmc-eu/spirit-design-system/commit/5270040))
- **web:** Rename `message` to `validationText` in Form Fields [#DS-676](https://github.com/lmc-eu/spirit-design-system/issues/DS-676) ([44a9fd7](https://github.com/lmc-eu/spirit-design-system/commit/44a9fd7))
- **web:** Rename `RadioField` to `Radio` [#DS-521](https://github.com/lmc-eu/spirit-design-system/issues/DS-521) ([c5219d1](https://github.com/lmc-eu/spirit-design-system/commit/c5219d1))
- **web:** Rename `validator_message` to `validation_text` [#DS-838](https://github.com/lmc-eu/spirit-design-system/issues/DS-838) ([bef2d7a](https://github.com/lmc-eu/spirit-design-system/commit/bef2d7a))
- **web:** Rename ScrollView `indicators` class to `overflowDecorators` [#DS-825](https://github.com/lmc-eu/spirit-design-system/issues/DS-825) ([d7b8026](https://github.com/lmc-eu/spirit-design-system/commit/d7b8026))
- **web:** Set `Stack` default spacing to zero [#DS-741](https://github.com/lmc-eu/spirit-design-system/issues/DS-741) ([27deefc](https://github.com/lmc-eu/spirit-design-system/commit/27deefc))
- **web:** Update `TextField` and `TextArea` default disabled style [#DS-649](https://github.com/lmc-eu/spirit-design-system/issues/DS-649) ([3ddf8c2](https://github.com/lmc-eu/spirit-design-system/commit/3ddf8c2))

### Documentation

- **web:** Introduce migration guide for v1 refs [#DS-800](https://github.com/lmc-eu/spirit-design-system/issues/DS-800) ([884ad9d](https://github.com/lmc-eu/spirit-design-system/commit/884ad9d))
- **web:** Remove deprecation reference from Select README ([38f0189](https://github.com/lmc-eu/spirit-design-system/commit/38f0189))
- **web:** Unify TextArea demo with Twig ([e90904b](https://github.com/lmc-eu/spirit-design-system/commit/e90904b))

### Features

- **web:** Unify FileUploaderInput and Attachment paddings with design [#DS-859](https://github.com/lmc-eu/spirit-design-system/issues/DS-859) ([3840d0a](https://github.com/lmc-eu/spirit-design-system/commit/3840d0a))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.50.1"></a>

## [0.50.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.50.0...@lmc-eu/spirit-web@0.50.1) (2023-07-21)

### Bug Fixes

- **web:** Fix FileUploader Drag and Drop and duplicated validation messages ([5fdd298](https://github.com/lmc-eu/spirit-design-system/commit/5fdd298)), closes [#DS-848](https://github.com/lmc-eu/spirit-design-system/issues/DS-848)

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.50.0"></a>

# [0.50.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.49.1...@lmc-eu/spirit-web@0.50.0) (2023-07-02)

### Documentation

- **web:** Rename FileUloader's validation message data element ([f5a76a8](https://github.com/lmc-eu/spirit-design-system/commit/f5a76a8))

### Features

- **web:** Allow FileUploader to customize error messages ([027f2aa](https://github.com/lmc-eu/spirit-design-system/commit/027f2aa))
- **web:** Display validation text on FileUploader ([5b5bf30](https://github.com/lmc-eu/spirit-design-system/commit/5b5bf30))

### Tests

- **web:** Add missing tests for FileUploader methods ([42c0289](https://github.com/lmc-eu/spirit-design-system/commit/42c0289))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.49.1"></a>

## [0.49.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.49.0...@lmc-eu/spirit-web@0.49.1) (2023-06-29)

### Bug Fixes

- **web:** Escape attachment file name in FileUploader ([6142be3](https://github.com/lmc-eu/spirit-design-system/commit/6142be3))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.49.0"></a>

# [0.49.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.48.0...@lmc-eu/spirit-web@0.49.0) (2023-06-28)

### Bug Fixes

- **web:** FileUploader can pick files with special characters in name ([72ee61e](https://github.com/lmc-eu/spirit-design-system/commit/72ee61e)), closes [#DS-830](https://github.com/lmc-eu/spirit-design-system/issues/DS-830)
- **web:** FileUploader cannot remove files with same names ([40fa603](https://github.com/lmc-eu/spirit-design-system/commit/40fa603)), closes [#DS-830](https://github.com/lmc-eu/spirit-design-system/issues/DS-830)
- **web:** Keep the `name` attribute on `FileUploader` input when the file queue is empty [#DS-829](https://github.com/lmc-eu/spirit-design-system/issues/DS-829) ([f70ee93](https://github.com/lmc-eu/spirit-design-system/commit/f70ee93))
- **web:** Match the name and function of the expand-on-mobile toggle in `Modal` ([f51f50d](https://github.com/lmc-eu/spirit-design-system/commit/f51f50d))
- **web:** Modal close on mobile safari [#DS-824](https://github.com/lmc-eu/spirit-design-system/issues/DS-824) ([ff9226f](https://github.com/lmc-eu/spirit-design-system/commit/ff9226f))

### Code Refactoring

- **web:** Use inset in CSS instead of separate values ([f74a9ec](https://github.com/lmc-eu/spirit-design-system/commit/f74a9ec))

### Dependencies

- Update all non-major dependencies ([ba23f3d](https://github.com/lmc-eu/spirit-design-system/commit/ba23f3d))
- Update all non-major dependencies ([c70b276](https://github.com/lmc-eu/spirit-design-system/commit/c70b276))

### Documentation

- **web:** Change example IDs of `Modal` demos to be descriptive and order independent ([2d27e41](https://github.com/lmc-eu/spirit-design-system/commit/2d27e41))
- **web:** Minor improvements of `FileUploader` docs ([fc3fc78](https://github.com/lmc-eu/spirit-design-system/commit/fc3fc78))
- **web:** Why is the event listener not passive by default ([1841edb](https://github.com/lmc-eu/spirit-design-system/commit/1841edb)), closes [#DS-824](https://github.com/lmc-eu/spirit-design-system/issues/DS-824)

### Features

- **web:** Make the preferred height and max height of `Modal` customizable [#DS-723](https://github.com/lmc-eu/spirit-design-system/issues/DS-723) ([cfe63fd](https://github.com/lmc-eu/spirit-design-system/commit/cfe63fd))
- **web:** Redo accessibility features of Pagination ([d4598ac](https://github.com/lmc-eu/spirit-design-system/commit/d4598ac))
- **web:** Reset default button styles for Pagination Link ([16281f9](https://github.com/lmc-eu/spirit-design-system/commit/16281f9))

### Styles

- **web:** Use `go to` as a correct word form ([a79ff22](https://github.com/lmc-eu/spirit-design-system/commit/a79ff22))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.48.0"></a>

# [0.48.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.47.0...@lmc-eu/spirit-web@0.48.0) (2023-06-11)

### Bug Fixes

- **web:** Fix `ScrollView` collapsing in Safari [#DS-808](https://github.com/lmc-eu/spirit-design-system/issues/DS-808) ([34c915b](https://github.com/lmc-eu/spirit-design-system/commit/34c915b))

### Code Refactoring

- **web:** Reorganize CSS helpers and create a standalone preview for each [#DS-821](https://github.com/lmc-eu/spirit-design-system/issues/DS-821) ([409c892](https://github.com/lmc-eu/spirit-design-system/commit/409c892))

### Documentation

- **web,web-react,web-twig:** Improve Demo Header [#DS-821](https://github.com/lmc-eu/spirit-design-system/issues/DS-821) ([c168eea](https://github.com/lmc-eu/spirit-design-system/commit/c168eea))
- **web,web-twig:** Wrap `Alert` demos into sections and add Icons demo ([2408053](https://github.com/lmc-eu/spirit-design-system/commit/2408053)), closes [#309](https://github.com/lmc-eu/spirit-design-system/issues/309), [#DS-668](https://github.com/lmc-eu/spirit-design-system/issues/DS-668)
- **web:** Demonstrate the composition of `Modal` and `ScrollView` [#DS-808](https://github.com/lmc-eu/spirit-design-system/issues/DS-808) ([10c8e04](https://github.com/lmc-eu/spirit-design-system/commit/10c8e04))
- **web:** Document how to add a placeholder to the Select [#DS-810](https://github.com/lmc-eu/spirit-design-system/issues/DS-810) ([784c435](https://github.com/lmc-eu/spirit-design-system/commit/784c435))

### Features

- **web-react:** Introduce Select component [#DS-789](https://github.com/lmc-eu/spirit-design-system/issues/DS-789) ([8cc74f9](https://github.com/lmc-eu/spirit-design-system/commit/8cc74f9))
- **web,web-twig:** Add vertical padding to `ModalBody` [#DS-763](https://github.com/lmc-eu/spirit-design-system/issues/DS-763) ([2e668c7](https://github.com/lmc-eu/spirit-design-system/commit/2e668c7))
- **web:** Add disabled state to the FileUploaderInput [#DS-772](https://github.com/lmc-eu/spirit-design-system/issues/DS-772) ([676b8ab](https://github.com/lmc-eu/spirit-design-system/commit/676b8ab))
- **web:** Enable customization of `ScrollView` shadows via custom properties ([68b0a67](https://github.com/lmc-eu/spirit-design-system/commit/68b0a67))
- **web:** Introduce Select component [#DS-788](https://github.com/lmc-eu/spirit-design-system/issues/DS-788) ([10b2b54](https://github.com/lmc-eu/spirit-design-system/commit/10b2b54))
- **web:** Introduce Select component [#DS-788](https://github.com/lmc-eu/spirit-design-system/issues/DS-788) ([b7ce696](https://github.com/lmc-eu/spirit-design-system/commit/b7ce696))
- **web:** Let link in Alert inherit its color ([bcd628f](https://github.com/lmc-eu/spirit-design-system/commit/bcd628f))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.47.0"></a>

# [0.47.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.46.0...@lmc-eu/spirit-web@0.47.0) (2023-05-29)

### Bug Fixes

- **web:** `FileUploader` focus visibility ([cfd5ba8](https://github.com/lmc-eu/spirit-design-system/commit/cfd5ba8))
- **web:** Add missing validation text styling for CheckboxField ([95f3855](https://github.com/lmc-eu/spirit-design-system/commit/95f3855))

### Features

- **web,web-react,web-twig:** Allow multiline message in CheckboxField [#DS-735](https://github.com/lmc-eu/spirit-design-system/issues/DS-735) ([395af3d](https://github.com/lmc-eu/spirit-design-system/commit/395af3d))
- **web,web-react,web-twig:** Allow multiline message in TextArea [#DS-738](https://github.com/lmc-eu/spirit-design-system/issues/DS-738) ([9759666](https://github.com/lmc-eu/spirit-design-system/commit/9759666))
- **web,web-react,web-twig:** Allow multiline message in TextField [#DS-734](https://github.com/lmc-eu/spirit-design-system/issues/DS-734) ([81b0882](https://github.com/lmc-eu/spirit-design-system/commit/81b0882))
- **web,web-react,web-twig:** Allow multiline validationText in FileUploaderInput [#DS-737](https://github.com/lmc-eu/spirit-design-system/issues/DS-737) ([6724d7a](https://github.com/lmc-eu/spirit-design-system/commit/6724d7a))
- **web:** Enhance `ScrollView` scrolling indicators to be shadows, borders, or both [#DS-796](https://github.com/lmc-eu/spirit-design-system/issues/DS-796) ([cd329ca](https://github.com/lmc-eu/spirit-design-system/commit/cd329ca))
- **web:** Introduce `ScrollView` component [#DS-449](https://github.com/lmc-eu/spirit-design-system/issues/DS-449) ([4d7265b](https://github.com/lmc-eu/spirit-design-system/commit/4d7265b))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.46.0"></a>

# [0.46.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.45.0...@lmc-eu/spirit-web@0.46.0) (2023-05-18)

### Bug Fixes

- **web:** Add the missing `spirit` prefix to `FileUploader`s `data-populate-field` [#DS-684](https://github.com/lmc-eu/spirit-design-system/issues/DS-684) ([07320d5](https://github.com/lmc-eu/spirit-design-system/commit/07320d5))
- **web:** Maximum number of files in the queue during drag and drop ([2adbbda](https://github.com/lmc-eu/spirit-design-system/commit/2adbbda))
- **web:** Remove additional whitespace added by template tag ([0aa6824](https://github.com/lmc-eu/spirit-design-system/commit/0aa6824))

### Features

- **web-react:** Hiding input when the queue is full [#DS-730](https://github.com/lmc-eu/spirit-design-system/issues/DS-730) ([159152b](https://github.com/lmc-eu/spirit-design-system/commit/159152b))
- **web-twig:** Hiding input when the queue is full [#DS-730](https://github.com/lmc-eu/spirit-design-system/issues/DS-730) ([2612484](https://github.com/lmc-eu/spirit-design-system/commit/2612484))
- **web-twig:** Introduce `FileUploader` component [#DS-684](https://github.com/lmc-eu/spirit-design-system/issues/DS-684) ([bd85a04](https://github.com/lmc-eu/spirit-design-system/commit/bd85a04))
- **web:** Add AutoResize JS plugin to make TextArea autoresize [#DS-320](https://github.com/lmc-eu/spirit-design-system/issues/DS-320) ([a667bbf](https://github.com/lmc-eu/spirit-design-system/commit/a667bbf))
- **web:** FileUploader onDrop validation [#DS-724](https://github.com/lmc-eu/spirit-design-system/issues/DS-724) ([e89b767](https://github.com/lmc-eu/spirit-design-system/commit/e89b767))
- **web:** Hiding input when the queue is full [#DS-730](https://github.com/lmc-eu/spirit-design-system/issues/DS-730) ([1595537](https://github.com/lmc-eu/spirit-design-system/commit/1595537))
- **web:** Improve `FileUploader` states, attachment border radius, and icon color [#DS-729](https://github.com/lmc-eu/spirit-design-system/issues/DS-729) ([7fd2e35](https://github.com/lmc-eu/spirit-design-system/commit/7fd2e35))
- **web:** Introduction of JS for FileUploader component [#DS-682](https://github.com/lmc-eu/spirit-design-system/issues/DS-682) ([c79319b](https://github.com/lmc-eu/spirit-design-system/commit/c79319b))
- **web:** Rename divider classes according to the Figma documentation ([38e8263](https://github.com/lmc-eu/spirit-design-system/commit/38e8263)), closes [#DS-571](https://github.com/lmc-eu/spirit-design-system/issues/DS-571)
- **web:** Use logical properties to apply borders in Stack direct descendants [#JALL-107](https://github.com/lmc-eu/spirit-design-system/issues/JALL-107) ([1c38dbe](https://github.com/lmc-eu/spirit-design-system/commit/1c38dbe))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.45.0"></a>

# [0.45.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.44.0...@lmc-eu/spirit-web@0.45.0) (2023-04-17)

### Bug Fixes

- **web:** Remove useless script in Item index ([18025a4](https://github.com/lmc-eu/spirit-design-system/commit/18025a4))

### Code Refactoring

- **web:** Improve deprecation message [#DS-662](https://github.com/lmc-eu/spirit-design-system/issues/DS-662) ([6b44efa](https://github.com/lmc-eu/spirit-design-system/commit/6b44efa))
- **web:** Improve form-fields variables naming [#DS-662](https://github.com/lmc-eu/spirit-design-system/issues/DS-662) ([1c42c11](https://github.com/lmc-eu/spirit-design-system/commit/1c42c11))

### Documentation

- **web:** Example for stacked Modal component ([90461b8](https://github.com/lmc-eu/spirit-design-system/commit/90461b8))
- **web:** Fix target in stacked Modal ([11a4948](https://github.com/lmc-eu/spirit-design-system/commit/11a4948))
- **web:** Update recommended way to prefix CSS classes [#DS-627](https://github.com/lmc-eu/spirit-design-system/issues/DS-627) ([69d54b0](https://github.com/lmc-eu/spirit-design-system/commit/69d54b0))

### Features

- **web:** Add feature class to make links correctly underlined [#DS-516](https://github.com/lmc-eu/spirit-design-system/issues/DS-516) ([dbc0076](https://github.com/lmc-eu/spirit-design-system/commit/dbc0076))
- **web:** Extend Stack component [#JALL-107](https://github.com/lmc-eu/spirit-design-system/issues/JALL-107) ([07d5bc9](https://github.com/lmc-eu/spirit-design-system/commit/07d5bc9))
- **web:** Introduce `FileUploader` component [#DS-664](https://github.com/lmc-eu/spirit-design-system/issues/DS-664) ([0a6c4f9](https://github.com/lmc-eu/spirit-design-system/commit/0a6c4f9))
- **web:** Introduce deprecation class `spirit-v1-stack-no-default-gap` for `Stack` component ([f8daf72](https://github.com/lmc-eu/spirit-design-system/commit/f8daf72))
- **web:** Introduce loading state to Button, add css vars to dictionaries and animations [#DS-640](https://github.com/lmc-eu/spirit-design-system/issues/DS-640) ([0f96be5](https://github.com/lmc-eu/spirit-design-system/commit/0f96be5))
- **web:** Introduce Spinner component [#DS-639](https://github.com/lmc-eu/spirit-design-system/issues/DS-639) ([6f9064b](https://github.com/lmc-eu/spirit-design-system/commit/6f9064b))
- **web:** Prevent scrolling while the dialog is open [#DS-191](https://github.com/lmc-eu/spirit-design-system/issues/DS-191) ([6ad875f](https://github.com/lmc-eu/spirit-design-system/commit/6ad875f))
- **web:** Rename Text Color dictionary to Action Link and introduce correct Text Color one [#DS-639](https://github.com/lmc-eu/spirit-design-system/issues/DS-639) ([4ee0395](https://github.com/lmc-eu/spirit-design-system/commit/4ee0395))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.44.0"></a>

# [0.44.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.43.0...@lmc-eu/spirit-web@0.44.0) (2023-03-21)

### Bug Fixes

- **web:** RadioField label in disabled state ([8cf9229](https://github.com/lmc-eu/spirit-design-system/commit/8cf9229))
- **web:** Remove Tabs trigger focus causing weird scroll placement [#DS-630](https://github.com/lmc-eu/spirit-design-system/issues/DS-630) ([de78fbf](https://github.com/lmc-eu/spirit-design-system/commit/de78fbf))

### Documentation

- **web:** Paragraph indentation and typos ([e1c462f](https://github.com/lmc-eu/spirit-design-system/commit/e1c462f))

### Features

- **web-twig:** Introduce new `Header` with subcomponents [#DS-248](https://github.com/lmc-eu/spirit-design-system/issues/DS-248) ([9f5b7c4](https://github.com/lmc-eu/spirit-design-system/commit/9f5b7c4))
- **web:** Add feature class to enable v1 disabled state style in TextArea and TextField [#DS-641](https://github.com/lmc-eu/spirit-design-system/issues/DS-641) ([b909378](https://github.com/lmc-eu/spirit-design-system/commit/b909378))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.43.0"></a>

# [0.43.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.42.0...@lmc-eu/spirit-web@0.43.0) (2023-03-08)

### Bug Fixes

- **web:** Fix link Button color on hover, focus and active ([3e4b572](https://github.com/lmc-eu/spirit-design-system/commit/3e4b572))
- **web:** Password toggle missing event target ([e32a86e](https://github.com/lmc-eu/spirit-design-system/commit/e32a86e))
- **web:** Set correct order of pseudo classes on Pagination link [#DS-629](https://github.com/lmc-eu/spirit-design-system/issues/DS-629) ([ae26d0b](https://github.com/lmc-eu/spirit-design-system/commit/ae26d0b))

### Code Refactoring

- **web:** Redo color dictionaries and their generation in components ([2476486](https://github.com/lmc-eu/spirit-design-system/commit/2476486))

### Features

- **web-react:** TextField and TextArea helper text [#DS-597](https://github.com/lmc-eu/spirit-design-system/issues/DS-597) ([b0aa2de](https://github.com/lmc-eu/spirit-design-system/commit/b0aa2de))
- **web-react:** Validation state dictionary [#DS-590](https://github.com/lmc-eu/spirit-design-system/issues/DS-590) ([bb495da](https://github.com/lmc-eu/spirit-design-system/commit/bb495da))
- **web-twig:** Align dictionaries [#DS-628](https://github.com/lmc-eu/spirit-design-system/issues/DS-628) ([061275a](https://github.com/lmc-eu/spirit-design-system/commit/061275a))
- **web-twig:** Validation state dictionary [#DS-590](https://github.com/lmc-eu/spirit-design-system/issues/DS-590) ([4d2f048](https://github.com/lmc-eu/spirit-design-system/commit/4d2f048))
- **web:** Add `setVar` and `eq` helpers to Vite ([04f3eda](https://github.com/lmc-eu/spirit-design-system/commit/04f3eda))
- **web:** Align dictionaries [#DS-628](https://github.com/lmc-eu/spirit-design-system/issues/DS-628) ([ef46efa](https://github.com/lmc-eu/spirit-design-system/commit/ef46efa))
- **web:** Introduce new `Header` with subcomponents [#DS-424](https://github.com/lmc-eu/spirit-design-system/issues/DS-424) ([8b3fe19](https://github.com/lmc-eu/spirit-design-system/commit/8b3fe19))
- **web:** Introduce new `Offcanvas` plugin derived from the `Header` plugin (refs [#DS-240](https://github.com/lmc-eu/spirit-design-system/issues/DS-240)) ([cb35ffd](https://github.com/lmc-eu/spirit-design-system/commit/cb35ffd))
- **web:** TextField and TextArea helper text [#DS-597](https://github.com/lmc-eu/spirit-design-system/issues/DS-597) ([00712b8](https://github.com/lmc-eu/spirit-design-system/commit/00712b8))
- **web:** Update Tag - Color and Size dictionaries, deprecate `default` and add subtle prop [#DS-442](https://github.com/lmc-eu/spirit-design-system/issues/DS-442) ([e183574](https://github.com/lmc-eu/spirit-design-system/commit/e183574))
- **web:** Use Dictionaries in Button component - add all emotion colors and small size [#DS-436](https://github.com/lmc-eu/spirit-design-system/issues/DS-436) ([af95c8b](https://github.com/lmc-eu/spirit-design-system/commit/af95c8b))
- **web:** Validation state dictionary [#DS-590](https://github.com/lmc-eu/spirit-design-system/issues/DS-590) ([ea79db2](https://github.com/lmc-eu/spirit-design-system/commit/ea79db2))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.42.0"></a>

# [0.42.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.41.1...@lmc-eu/spirit-web@0.42.0) (2023-02-17)

### Bug Fixes

- **web:** Disable automatic changes of text size in mobile Safari ([c318614](https://github.com/lmc-eu/spirit-design-system/commit/c318614))
- **web:** In `Modal`, make only text selectable to prevent interaction glitches in Chrome ([93f760c](https://github.com/lmc-eu/spirit-design-system/commit/93f760c))

### Chores

- **web:** Run PostCSS and Autoprefixer also in development mode ([2b6708b](https://github.com/lmc-eu/spirit-design-system/commit/2b6708b))

### Code Refactoring

- **web:** Keep transition settings in a single place (to make their way to design tokens easy) ([5a3a554](https://github.com/lmc-eu/spirit-design-system/commit/5a3a554))
- **web:** Make Alert icons in demo same as it is in design ([71858e8](https://github.com/lmc-eu/spirit-design-system/commit/71858e8))
- **web:** Simplify JS plugins with right use of this.element ([211f282](https://github.com/lmc-eu/spirit-design-system/commit/211f282))

### Dependencies

- Update all non-major dependencies ([fa43a3a](https://github.com/lmc-eu/spirit-design-system/commit/fa43a3a))

### Features

- **web:** Allow JS plugin to find component by selector ([0d5e7fb](https://github.com/lmc-eu/spirit-design-system/commit/0d5e7fb))
- **web:** Component triggers can find target element by target dataset ([c651c30](https://github.com/lmc-eu/spirit-design-system/commit/c651c30))
- **web:** Display backdrop for native dialog element ([b9a10f6](https://github.com/lmc-eu/spirit-design-system/commit/b9a10f6))
- **web:** Introduce `Modal` subcomponents [#DS-505](https://github.com/lmc-eu/spirit-design-system/issues/DS-505) ([213262f](https://github.com/lmc-eu/spirit-design-system/commit/213262f))
- **web:** Introduce Action Color Dictionary and use it in Pill component [#DS-574](https://github.com/lmc-eu/spirit-design-system/issues/DS-574) ([1fa0b91](https://github.com/lmc-eu/spirit-design-system/commit/1fa0b91))
- **web:** Introduce Text Color Dictionary and use it in Link helper [#DS-573](https://github.com/lmc-eu/spirit-design-system/issues/DS-573) ([25a8303](https://github.com/lmc-eu/spirit-design-system/commit/25a8303))

### Styles

- **web:** Add support for backdrop pseudo-element for legacy modal ([bbb7413](https://github.com/lmc-eu/spirit-design-system/commit/bbb7413))
- **web:** Removed unused legacy Modal\_\_backdrop class ([4cc6ec1](https://github.com/lmc-eu/spirit-design-system/commit/4cc6ec1))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.41.1"></a>

## [0.41.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.41.0...@lmc-eu/spirit-web@0.41.1) (2023-02-13)

### Dependencies

- Update dependency @lmc-eu/stylelint-config to v6 ([32caf4a](https://github.com/lmc-eu/spirit-design-system/commit/32caf4a))
- Update dependency @rollup/plugin-typescript to v11 ([d72bc29](https://github.com/lmc-eu/spirit-design-system/commit/d72bc29))
- Update dependency stylelint to v15 ([55f379a](https://github.com/lmc-eu/spirit-design-system/commit/55f379a))
- Update dependency stylelint-order to v6 ([91e09c1](https://github.com/lmc-eu/spirit-design-system/commit/91e09c1))
- Update dependency vite to v4 ([7fa207c](https://github.com/lmc-eu/spirit-design-system/commit/7fa207c))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.41.0"></a>

# [0.41.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.40.0...@lmc-eu/spirit-web@0.41.0) (2023-02-09)

### Chores

- **web:** Build individual JavaScript plugins ([f7ef0e3](https://github.com/lmc-eu/spirit-design-system/commit/f7ef0e3))
- **web:** Disable generation of declaration files for bundles ([f5aebd9](https://github.com/lmc-eu/spirit-design-system/commit/f5aebd9))

### Code Refactoring

- **web:** Solve circular dependency by relocating functions by context ([02df356](https://github.com/lmc-eu/spirit-design-system/commit/02df356))

### Dependencies

- Update all non-major dependencies ([190529b](https://github.com/lmc-eu/spirit-design-system/commit/190529b))

### Documentation

- **web:** How works Data and Programmatic API ([13cdfe5](https://github.com/lmc-eu/spirit-design-system/commit/13cdfe5))

### Features

- **web:** Introduce Emotion Color Dictionary and use it in Alert component [#DS-555](https://github.com/lmc-eu/spirit-design-system/issues/DS-555) ([175a09d](https://github.com/lmc-eu/spirit-design-system/commit/175a09d))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.40.0"></a>

# [0.40.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.39.1...@lmc-eu/spirit-web@0.40.0) (2023-02-06)

### Features

- **web:** Deprecate `fullWidth` class in Dropdown component ([6f9bf3a](https://github.com/lmc-eu/spirit-design-system/commit/6f9bf3a))
- **web:** Introduce fullWithMode functionality to Dropdown ([9c9167f](https://github.com/lmc-eu/spirit-design-system/commit/9c9167f))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.39.1"></a>

## [0.39.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.39.0...@lmc-eu/spirit-web@0.39.1) (2023-02-01)

Miscellaneous changes

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.39.0"></a>

# [0.39.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.38.0...@lmc-eu/spirit-web@0.39.0) (2023-01-29)

### Bug Fixes

- **web:** Collapse content flashing when page loads [#DS-538](https://github.com/lmc-eu/spirit-design-system/issues/DS-538) ([9f21660](https://github.com/lmc-eu/spirit-design-system/commit/9f21660))

### Documentation

- **web, web-react:** Fix external links in README's ([6384a5d](https://github.com/lmc-eu/spirit-design-system/commit/6384a5d))
- **web:** Improve `Accordion` README and demo preview ([9ac9124](https://github.com/lmc-eu/spirit-design-system/commit/9ac9124))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.38.0"></a>

# [0.38.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.37.0...@lmc-eu/spirit-web@0.38.0) (2023-01-16)

### Chores

- **web:** Mark package as side-effect free ([67d900c](https://github.com/lmc-eu/spirit-design-system/commit/67d900c))

### Documentation

- **web:** Fix misleading headline in the `Collapse` demo ([35dd370](https://github.com/lmc-eu/spirit-design-system/commit/35dd370))

### Features

- **web:** Make all plugins and utils available for building on product ([206fc25](https://github.com/lmc-eu/spirit-design-system/commit/206fc25))

### Reverts

- **web:** Mark package as side-effect free ([9224133](https://github.com/lmc-eu/spirit-design-system/commit/9224133))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.37.0"></a>

# [0.37.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.36.0...@lmc-eu/spirit-web@0.37.0) (2023-01-10)

### Bug Fixes

- **web:** Fix Accordion arrow stacking context [#DS-527](https://github.com/lmc-eu/spirit-design-system/issues/DS-527) ([db86857](https://github.com/lmc-eu/spirit-design-system/commit/db86857))
- **web:** Only show `Item` background during interactions on hover-enabled devices ([342d688](https://github.com/lmc-eu/spirit-design-system/commit/342d688))

### Features

- **web:** Collapse toggle with variable content [#DS-501](https://github.com/lmc-eu/spirit-design-system/issues/DS-501) ([2e466f2](https://github.com/lmc-eu/spirit-design-system/commit/2e466f2))
- **web:** Disable tap highlight on inputs in mobile Safari ([bfde960](https://github.com/lmc-eu/spirit-design-system/commit/bfde960))
- **web:** Set foundation typography directly on body tag [#DS-523](https://github.com/lmc-eu/spirit-design-system/issues/DS-523) ([bc3c766](https://github.com/lmc-eu/spirit-design-system/commit/bc3c766))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.36.0"></a>

# [0.36.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.35.0...@lmc-eu/spirit-web@0.36.0) (2022-12-26)

### Bug Fixes

- **web:** Fix Accordion styles [DS-494, DS-499, DS-500] ([e3779c6](https://github.com/lmc-eu/spirit-design-system/commit/e3779c6))
- **web:** Prevent from dropdown content overflow outside its container ([3501c91](https://github.com/lmc-eu/spirit-design-system/commit/3501c91))
- **web:** Remove block margin from form field of type Item ([f7b9327](https://github.com/lmc-eu/spirit-design-system/commit/f7b9327))

### Features

- **web:** Set all cursors in global cursors settings ([d141a9e](https://github.com/lmc-eu/spirit-design-system/commit/d141a9e))
- **web:** Set RadioField and CheckboxField cursors to pointer, except in disabled state ([b48a63e](https://github.com/lmc-eu/spirit-design-system/commit/b48a63e))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.35.0"></a>

# [0.35.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.34.0...@lmc-eu/spirit-web@0.35.0) (2022-12-16)

### Bug Fixes

- **web:** Fix RadioField input to more comply with the design ([9afa036](https://github.com/lmc-eu/spirit-design-system/commit/9afa036))

### Documentation

- **contributing:** Addition to readme and contribution files ([692d7df](https://github.com/lmc-eu/spirit-design-system/commit/692d7df))
- **contributing:** Updating readme and contribution files ([6f7dc73](https://github.com/lmc-eu/spirit-design-system/commit/6f7dc73))

### Features

- **web:** Add Item variant to RadioField and CheckboxField [#DS-364](https://github.com/lmc-eu/spirit-design-system/issues/DS-364) ([5043c07](https://github.com/lmc-eu/spirit-design-system/commit/5043c07))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.34.0"></a>

# [0.34.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.33.0...@lmc-eu/spirit-web@0.34.0) (2022-12-08)

### Bug Fixes

- **web:** Collapse implementation fixes ([d3c8093](https://github.com/lmc-eu/spirit-design-system/commit/d3c8093))
- **web:** Modification of the Collapse component toggling behavior, Collapse example ([c53f776](https://github.com/lmc-eu/spirit-design-system/commit/c53f776))

### Features

- **web-twig:** Collapse Twig properties update, tests, documentation ([3bdf57d](https://github.com/lmc-eu/spirit-design-system/commit/3bdf57d))
- **web:** Introduction of Accordion CSS+JS ([d3a10d3](https://github.com/lmc-eu/spirit-design-system/commit/d3a10d3))
- **web:** Make `Pagination` component inline to enable horizontal alignment [#JALL-37](https://github.com/lmc-eu/spirit-design-system/issues/JALL-37) ([aa5949f](https://github.com/lmc-eu/spirit-design-system/commit/aa5949f))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.33.0"></a>

# [0.33.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.32.0...@lmc-eu/spirit-web@0.33.0) (2022-11-30)

### Bug Fixes

- **web:** Incorrect naming and sorting of assets in preview [#DS-421](https://github.com/lmc-eu/spirit-design-system/issues/DS-421) ([3d91997](https://github.com/lmc-eu/spirit-design-system/commit/3d91997))
- **web:** Order top-level CSS layers by selector specificity ([db63fb1](https://github.com/lmc-eu/spirit-design-system/commit/db63fb1))

### Dependencies

- Pin dependencies ([d5c1a51](https://github.com/lmc-eu/spirit-design-system/commit/d5c1a51))
- Update dependency @rollup/plugin-typescript to v9 ([1fe2089](https://github.com/lmc-eu/spirit-design-system/commit/1fe2089))
- Update dependency jest to v29 ([d7e3dc9](https://github.com/lmc-eu/spirit-design-system/commit/d7e3dc9))
- Update dependency jest-environment-jsdom to v29 ([f7342b1](https://github.com/lmc-eu/spirit-design-system/commit/f7342b1))
- Update dependency rollup to v3 ([5da2bd2](https://github.com/lmc-eu/spirit-design-system/commit/5da2bd2))

### Features

- **web:** Introduce TextArea component [#DS-319](https://github.com/lmc-eu/spirit-design-system/issues/DS-319) ([8e14ddd](https://github.com/lmc-eu/spirit-design-system/commit/8e14ddd))
- **web:** Unify styles for form field components ([b7aa908](https://github.com/lmc-eu/spirit-design-system/commit/b7aa908))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.32.0"></a>

# [0.32.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.31.0...@lmc-eu/spirit-web@0.32.0) (2022-11-07)

### Dependencies

- Update all non-major dependencies ([48cac89](https://github.com/lmc-eu/spirit-design-system/commit/48cac89))

### Features

- **web:** Add utility classes for border radius using radii tokens [#JALL-53](https://github.com/lmc-eu/spirit-design-system/issues/JALL-53) ([b362c31](https://github.com/lmc-eu/spirit-design-system/commit/b362c31))
- **web:** Implementation of Dropdown component [#DS-393](https://github.com/lmc-eu/spirit-design-system/issues/DS-393) ([61c244d](https://github.com/lmc-eu/spirit-design-system/commit/61c244d))
- **web:** Update Button colors - disabled text and background colors, extend examples [#DS-418](https://github.com/lmc-eu/spirit-design-system/issues/DS-418) ([7ae8495](https://github.com/lmc-eu/spirit-design-system/commit/7ae8495))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.31.0"></a>

# [0.31.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.30.0...@lmc-eu/spirit-web@0.31.0) (2022-10-25)

### Bug Fixes

- **web:** Collapse example and breakpoint updates [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([8ad0b2b](https://github.com/lmc-eu/spirit-design-system/commit/8ad0b2b))
- **web:** Collapse example utility class [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([b8bf7c4](https://github.com/lmc-eu/spirit-design-system/commit/b8bf7c4))
- **web:** Collapse minor updates [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([565c032](https://github.com/lmc-eu/spirit-design-system/commit/565c032))
- **web:** Collapse style linter fix [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([78bd715](https://github.com/lmc-eu/spirit-design-system/commit/78bd715))

### Features

- **web:** Add brand colors to text and background utilities ([95b676f](https://github.com/lmc-eu/spirit-design-system/commit/95b676f))
- **web:** Collapse web implementation [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([2362be7](https://github.com/lmc-eu/spirit-design-system/commit/2362be7))
- **web:** Implementation updates and tests [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([3b09991](https://github.com/lmc-eu/spirit-design-system/commit/3b09991))
- **web:** Updates and fixes from comments [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([4e15ede](https://github.com/lmc-eu/spirit-design-system/commit/4e15ede))
- **web:** Updates by comments [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([f4b9b01](https://github.com/lmc-eu/spirit-design-system/commit/f4b9b01))
- **web:** Updates, Fixes, API [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([7ae0399](https://github.com/lmc-eu/spirit-design-system/commit/7ae0399))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.30.0"></a>

# [0.30.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.29.0...@lmc-eu/spirit-web@0.30.0) (2022-10-14)

### Features

- **web:** Add display grid utility classes (refs [#FP-2166](https://github.com/lmc-eu/spirit-design-system/issues/FP-2166)) ([adce1ad](https://github.com/lmc-eu/spirit-design-system/commit/adce1ad))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.29.0"></a>

# [0.29.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.28.0...@lmc-eu/spirit-web@0.29.0) (2022-10-13)

### BREAKING CHANGES

- **web:** Update Pill variants - remove secondary and add emotion colors [#DS-408](https://github.com/lmc-eu/spirit-design-system/issues/DS-408) ([8f9ef2e](https://github.com/lmc-eu/spirit-design-system/commit/8f9ef2e))

### Dependencies

- Pin dependency @lmc-eu/stylelint-config to 5.0.0 ([674a405](https://github.com/lmc-eu/spirit-design-system/commit/674a405))

### Features

- **web:** Introduce `Dropdown` component (refs [#DS-326](https://github.com/lmc-eu/spirit-design-system/issues/DS-326)) ([8b323fc](https://github.com/lmc-eu/spirit-design-system/commit/8b323fc))

### Styles

- **web:** Upgrade stylelint config and fix errors [#DS-322](https://github.com/lmc-eu/spirit-design-system/issues/DS-322) ([4df87da](https://github.com/lmc-eu/spirit-design-system/commit/4df87da))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.28.0"></a>

# [0.28.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.27.0...@lmc-eu/spirit-web@0.28.0) (2022-10-03)

### BREAKING CHANGES

- Remove `narrow` preset of `Grid` in favour of product-specific layouts ([64f5588](https://github.com/lmc-eu/spirit-design-system/commit/64f5588))

### Bug Fixes

- **web:** Fix underlined Link ([abe7e55](https://github.com/lmc-eu/spirit-design-system/commit/abe7e55))

### Features

- **web:** Introduce `Pagination` component (refs [#DS-314](https://github.com/lmc-eu/spirit-design-system/issues/DS-314)) ([e3b707d](https://github.com/lmc-eu/spirit-design-system/commit/e3b707d))
- **web:** Introduce Grid Span to enable responsively centered content over multiple `Grid` columns ([e1f7584](https://github.com/lmc-eu/spirit-design-system/commit/e1f7584))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.27.0"></a>

# [0.27.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.26.0...@lmc-eu/spirit-web@0.27.0) (2022-09-22)

### BREAKING CHANGES

- **web:** Button must have set a size variant [#DS-318](https://github.com/lmc-eu/spirit-design-system/issues/DS-318) ([4ef5e85](https://github.com/lmc-eu/spirit-design-system/commit/4ef5e85))

### Bug Fixes

- **web:** Add styles for large square Button [#DS-318](https://github.com/lmc-eu/spirit-design-system/issues/DS-318) ([db30e09](https://github.com/lmc-eu/spirit-design-system/commit/db30e09))

### Code Refactoring

- **web:** Remove duplicated styles ([04e2cad](https://github.com/lmc-eu/spirit-design-system/commit/04e2cad))

### Features

- **web:** Set vite components and icons using directories and files in repository ([f3df9df](https://github.com/lmc-eu/spirit-design-system/commit/f3df9df))
- **web:** Use new grid-columns token ([54390b5](https://github.com/lmc-eu/spirit-design-system/commit/54390b5))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.26.0"></a>

# [0.26.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.25.0...@lmc-eu/spirit-web@0.26.0) (2022-09-15)

### BREAKING CHANGES

- **web:** Remove `Button__icon` class as we don't use it and don't need it ([7816699](https://github.com/lmc-eu/spirit-design-system/commit/7816699))
- **web:** Remove Icon component as we don't need any styles added to the SVG ([3b5fd99](https://github.com/lmc-eu/spirit-design-system/commit/3b5fd99))

### Bug Fixes

- **web:** Fix `RadioField` state in forced-colors mode ([78dee50](https://github.com/lmc-eu/spirit-design-system/commit/78dee50))

### Dependencies

- Update all non-major dependencies ([264c250](https://github.com/lmc-eu/spirit-design-system/commit/264c250))

### Features

- **web:** Add basic spin animation helper ([e6dfed1](https://github.com/lmc-eu/spirit-design-system/commit/e6dfed1))
- **web:** Add five columns option to Grid ([7d41817](https://github.com/lmc-eu/spirit-design-system/commit/7d41817))
- **web:** Add interactions foundation with button svg pointer reset ([d94b3d5](https://github.com/lmc-eu/spirit-design-system/commit/d94b3d5))
- **web:** Add property size to the Button [#DS-318](https://github.com/lmc-eu/spirit-design-system/issues/DS-318) ([71804fa](https://github.com/lmc-eu/spirit-design-system/commit/71804fa))
- **web:** Update Breadcrumbs' last item's theme color (refs [#DS-313](https://github.com/lmc-eu/spirit-design-system/issues/DS-313)) ([7f53b42](https://github.com/lmc-eu/spirit-design-system/commit/7f53b42))
- **web:** Use Icon in Alert and add centered variant [#DS-304](https://github.com/lmc-eu/spirit-design-system/issues/DS-304) ([3e4afd7](https://github.com/lmc-eu/spirit-design-system/commit/3e4afd7))
- **web:** Use Icon in Breadcrumbs [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([2be2b92](https://github.com/lmc-eu/spirit-design-system/commit/2be2b92))
- **web:** Use Icon in Button [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([70479de](https://github.com/lmc-eu/spirit-design-system/commit/70479de))
- **web:** Use Icon in Header [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([c1814ed](https://github.com/lmc-eu/spirit-design-system/commit/c1814ed))
- **web:** Use Icon in Modal [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([2ba6478](https://github.com/lmc-eu/spirit-design-system/commit/2ba6478))
- **web:** Use Icon in TextField [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([6b7e4d1](https://github.com/lmc-eu/spirit-design-system/commit/6b7e4d1))
- **web:** Use Icon in Tooltip [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([89460a3](https://github.com/lmc-eu/spirit-design-system/commit/89460a3))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.25.0"></a>

# [0.25.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.24.0...@lmc-eu/spirit-web@0.25.0) (2022-08-31)

### Bug Fixes

- **web:** Move `check-plain` icon to Code Icons from Design section [#DS-286](https://github.com/lmc-eu/spirit-design-system/issues/DS-286) ([c0dec39](https://github.com/lmc-eu/spirit-design-system/commit/c0dec39))

### Dependencies

- Update all non-major dependencies ([28d33a2](https://github.com/lmc-eu/spirit-design-system/commit/28d33a2))

### Documentation

- **web:** Improve previews for both development and Supernova context ([653b618](https://github.com/lmc-eu/spirit-design-system/commit/653b618))
- **web:** Improve READMEs to better work in Supernova context ([0b9046e](https://github.com/lmc-eu/spirit-design-system/commit/0b9046e))

### Features

- Add shx package to cross-platform commands ([9c358ef](https://github.com/lmc-eu/spirit-design-system/commit/9c358ef))
- **web:** Introduce `Breadcrumbs` component (refs [#DS-302](https://github.com/lmc-eu/spirit-design-system/issues/DS-302)) ([b02a140](https://github.com/lmc-eu/spirit-design-system/commit/b02a140))
- **web:** Introduce Icon component [#DS-286](https://github.com/lmc-eu/spirit-design-system/issues/DS-286) ([a74088d](https://github.com/lmc-eu/spirit-design-system/commit/a74088d))
- **web:** Introduce RadioField component ([a574dbd](https://github.com/lmc-eu/spirit-design-system/commit/a574dbd))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.24.0"></a>

# [0.24.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.23.0...@lmc-eu/spirit-web@0.24.0) (2022-08-10)

### Dependencies

- Update all non-major dependencies to v7.18.10 ([b4306fb](https://github.com/lmc-eu/spirit-design-system/commit/b4306fb))

### Features

- **web:** Introduce `informative` variant to `Alert` [#DS-274](https://github.com/lmc-eu/spirit-design-system/issues/DS-274) ([1115756](https://github.com/lmc-eu/spirit-design-system/commit/1115756))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.23.0"></a>

# [0.23.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.22.1...@lmc-eu/spirit-web@0.23.0) (2022-07-30)

### Dependencies

- Update all non-major dependencies ([8e53fff](https://github.com/lmc-eu/spirit-design-system/commit/8e53fff))

### Documentation

- **web:** Add favicon to web demo ([cfb9842](https://github.com/lmc-eu/spirit-design-system/commit/cfb9842))

### Features

- **web:** Introduce `Tooltip` component ([352fe7e](https://github.com/lmc-eu/spirit-design-system/commit/352fe7e))
- **web:** Introduce Tooltip component JS plugin ([ec26ff2](https://github.com/lmc-eu/spirit-design-system/commit/ec26ff2))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.22.1"></a>

## [0.22.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.22.0...@lmc-eu/spirit-web@0.22.1) (2022-07-19)

### Dependencies

- Update all non-major dependencies ([2dd4292](https://github.com/lmc-eu/spirit-design-system/commit/2dd4292))
- Update all non-major dependencies ([c3efcf9](https://github.com/lmc-eu/spirit-design-system/commit/c3efcf9))
- Update dependency postcss-cli to v10 ([169cedd](https://github.com/lmc-eu/spirit-design-system/commit/169cedd))
- Update dependency vite to v3 ([533dca5](https://github.com/lmc-eu/spirit-design-system/commit/533dca5))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.22.0"></a>

# [0.22.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.21.0...@lmc-eu/spirit-web@0.22.0) (2022-07-07)

### Dependencies

- Pin dependencies ([8ba1b24](https://github.com/lmc-eu/spirit-design-system/commit/8ba1b24))
- Update all non-major dependencies ([4429cf1](https://github.com/lmc-eu/spirit-design-system/commit/4429cf1))
- Update all non-major dependencies ([8b2c9a9](https://github.com/lmc-eu/spirit-design-system/commit/8b2c9a9))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.21.0"></a>

# [0.21.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.20.0...@lmc-eu/spirit-web@0.21.0) (2022-06-23)

### Bug Fixes

- **web:** Find related header nav element base on data target attribute ([7a9cf1e](https://github.com/lmc-eu/spirit-design-system/commit/7a9cf1e))
- **web:** Force animation when injecting backdrop (refs [#DS-218](https://github.com/lmc-eu/spirit-design-system/issues/DS-218)) ([33842a2](https://github.com/lmc-eu/spirit-design-system/commit/33842a2))
- **web:** Remove `is-open` class correctly from nav element ([8d93eff](https://github.com/lmc-eu/spirit-design-system/commit/8d93eff))

### Chores

- Move tsconfigs to package root ([ed4b357](https://github.com/lmc-eu/spirit-design-system/commit/ed4b357))
- **repo:** Speed up monorepo scripts using Nx (refs [#265](https://github.com/lmc-eu/spirit-design-system/issues/265)) ([6c9e828](https://github.com/lmc-eu/spirit-design-system/commit/6c9e828))
- **web:** Fix deploy to GH pages by making links relative to root ([cc00881](https://github.com/lmc-eu/spirit-design-system/commit/cc00881))
- **web:** Fix missing helpers example on github pages ([be30348](https://github.com/lmc-eu/spirit-design-system/commit/be30348))

### Code Refactoring

- **web:** Introduce global types for html elements ([42c1209](https://github.com/lmc-eu/spirit-design-system/commit/42c1209))

### Dependencies

- Update all non-major dependencies ([493b4d7](https://github.com/lmc-eu/spirit-design-system/commit/493b4d7))
- Update dependency @types/jest to v28 ([d98405d](https://github.com/lmc-eu/spirit-design-system/commit/d98405d))

### Features

- **web:** Add `list-unstyled` helper class for unstyled lists ([47c97c7](https://github.com/lmc-eu/spirit-design-system/commit/47c97c7))
- **web:** Introduce Javascript plugin for Tabs component (refs [#DS-231](https://github.com/lmc-eu/spirit-design-system/issues/DS-231)) ([51a962c](https://github.com/lmc-eu/spirit-design-system/commit/51a962c))
- **web:** Introduce support class name for active Tab (refs [#DS-231](https://github.com/lmc-eu/spirit-design-system/issues/DS-231)) ([943a690](https://github.com/lmc-eu/spirit-design-system/commit/943a690))
- **web:** Introduce Tab component [#DS-230](https://github.com/lmc-eu/spirit-design-system/issues/DS-230) ([a72fa80](https://github.com/lmc-eu/spirit-design-system/commit/a72fa80))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.20.0"></a>

# [0.20.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.19.0...@lmc-eu/spirit-web@0.20.0) (2022-06-06)

### Bug Fixes

- **web:** Add missing interaction state class to `Button` variants ([6d75335](https://github.com/lmc-eu/spirit-design-system/commit/6d75335))
- **web:** Ignore `build` directory when using ESLint ([7089029](https://github.com/lmc-eu/spirit-design-system/commit/7089029))

### Chores

- **ci:** Do not run Netlify deploy when upgrading dependencies ([70ab5cb](https://github.com/lmc-eu/spirit-design-system/commit/70ab5cb))
- **ci:** Use @swc to speed up Jest tests ([93e1614](https://github.com/lmc-eu/spirit-design-system/commit/93e1614))
- **web:** Build examples out of development files ([1213451](https://github.com/lmc-eu/spirit-design-system/commit/1213451))
- **web:** Change build includePaths to source code ([ff6a901](https://github.com/lmc-eu/spirit-design-system/commit/ff6a901))
- **web:** Change examples output build directory to `build` ([4cc9260](https://github.com/lmc-eu/spirit-design-system/commit/4cc9260))
- **web:** Deploy configuration file for Netlify builds ([1ad1ac4](https://github.com/lmc-eu/spirit-design-system/commit/1ad1ac4))
- **web:** Make demo accessible in local network during development ([4d968b9](https://github.com/lmc-eu/spirit-design-system/commit/4d968b9))

### Code Refactoring

- **web:** Leverage custom properties for `Container` padding to make it easily accessible ([c4370dd](https://github.com/lmc-eu/spirit-design-system/commit/c4370dd))

### Dependencies

- Update all non-major dependencies ([a7990c7](https://github.com/lmc-eu/spirit-design-system/commit/a7990c7))
- Update all non-major dependencies ([2de1f66](https://github.com/lmc-eu/spirit-design-system/commit/2de1f66))

### Features

- **web:** Add auto option to mx and my utilities ([a83e1a4](https://github.com/lmc-eu/spirit-design-system/commit/a83e1a4))
- **web:** Add simple Modal component [#DS-211](https://github.com/lmc-eu/spirit-design-system/issues/DS-211) ([05547e9](https://github.com/lmc-eu/spirit-design-system/commit/05547e9))
- **web:** Introduce breakout helper and mixin to expand content out of `Container` ([a011b80](https://github.com/lmc-eu/spirit-design-system/commit/a011b80))
- **web:** Introduce Pill component [#DS-243](https://github.com/lmc-eu/spirit-design-system/issues/DS-243) ([1323802](https://github.com/lmc-eu/spirit-design-system/commit/1323802))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.19.0"></a>

# [0.19.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.18.0...@lmc-eu/spirit-web@0.19.0) (2022-05-19)

### BREAKING CHANGES

- **web:** Add Tag sizes and change Tag API [#DS-245](https://github.com/lmc-eu/spirit-design-system/issues/DS-245) ([e351ba5](https://github.com/lmc-eu/spirit-design-system/commit/e351ba5))

### Bug Fixes

- **web:** Reset vertical margin of `Stack` children ([fd32094](https://github.com/lmc-eu/spirit-design-system/commit/fd32094))
- **web:** Update `TextField` label color according to design changes ([593ba7e](https://github.com/lmc-eu/spirit-design-system/commit/593ba7e))

### Chores

- **web:** Create and extend layout template in component examples ([d4feb8b](https://github.com/lmc-eu/spirit-design-system/commit/d4feb8b))
- **web:** Setup the dev server for local development ([d9e4232](https://github.com/lmc-eu/spirit-design-system/commit/d9e4232))

### Code Refactoring

- **web:** Move JS handler initialization into separate function ([4841599](https://github.com/lmc-eu/spirit-design-system/commit/4841599))
- **web:** Reduce specificity of shared bottom margin to make overrides easier ([3e459e3](https://github.com/lmc-eu/spirit-design-system/commit/3e459e3))

### Dependencies

- Update all non-major dependencies ([02f8247](https://github.com/lmc-eu/spirit-design-system/commit/02f8247))
- Update all non-major dependencies ([1cefb14](https://github.com/lmc-eu/spirit-design-system/commit/1cefb14))

### Documentation

- **web:** Introduce start scripts and document them ([3d44cd0](https://github.com/lmc-eu/spirit-design-system/commit/3d44cd0))

### Features

- **web:** Add `.link-stretched` helper class and mixin ([4fc9792](https://github.com/lmc-eu/spirit-design-system/commit/4fc9792))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.18.0"></a>

# [0.18.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.17.0...@lmc-eu/spirit-web@0.18.0) (2022-05-02)

### Bug Fixes

- **web:** Vertically align content of text elements in `Header` to center ([11a8077](https://github.com/lmc-eu/spirit-design-system/commit/11a8077))

### Dependencies

- Update all non-major dependencies ([d6efb47](https://github.com/lmc-eu/spirit-design-system/commit/d6efb47))

### Documentation

- **web:** Better way to describe how to use JS plugins individually ([663be5f](https://github.com/lmc-eu/spirit-design-system/commit/663be5f))

### Features

- **web:** Add support for TextField's size attribute [#DS-154](https://github.com/lmc-eu/spirit-design-system/issues/DS-154) ([c5e55b8](https://github.com/lmc-eu/spirit-design-system/commit/c5e55b8))
- **web:** Allow styling of `TextField` validation messages via data attribute selector ([6c9c124](https://github.com/lmc-eu/spirit-design-system/commit/6c9c124))
- **web:** Fix formatting [#DS-155](https://github.com/lmc-eu/spirit-design-system/issues/DS-155) ([b94863b](https://github.com/lmc-eu/spirit-design-system/commit/b94863b))
- **web:** Introduce text helper for truncating single- and multiline texts [#DS-209](https://github.com/lmc-eu/spirit-design-system/issues/DS-209) ([9d0cac7](https://github.com/lmc-eu/spirit-design-system/commit/9d0cac7))
- **web:** Support JS interaction classes for `Button` and `TextField` components ([9c99031](https://github.com/lmc-eu/spirit-design-system/commit/9c99031))
- **web:** Supported TextField's type attribute values [#DS-155](https://github.com/lmc-eu/spirit-design-system/issues/DS-155) ([4fc52a9](https://github.com/lmc-eu/spirit-design-system/commit/4fc52a9))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.17.0"></a>

# [0.17.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.16.0...@lmc-eu/spirit-web@0.17.0) (2022-04-28)

### BREAKING CHANGES

- Set correct grid narrow span on tablet, should spread 10 columns instead of 8 ([2c4bcba](https://github.com/lmc-eu/spirit-design-system/commit/2c4bcba))

### Code Refactoring

- **web:** Remove unnecessary comments in Password and Header ([584d277](https://github.com/lmc-eu/spirit-design-system/commit/584d277))

### Dependencies

- **repo:** Install `jest-environment-jsdom` which is required by jest@28 ([ebae8d1](https://github.com/lmc-eu/spirit-design-system/commit/ebae8d1))
- Update all non-major dependencies ([c0817e6](https://github.com/lmc-eu/spirit-design-system/commit/c0817e6))
- Update dependency babel-jest to v28 ([cd71a29](https://github.com/lmc-eu/spirit-design-system/commit/cd71a29))

### Features

- **web:** Add Image css helpers ([93a6002](https://github.com/lmc-eu/spirit-design-system/commit/93a6002))
- **web:** Introduce JavaScript handler for Password toggle (refs [#DS-171](https://github.com/lmc-eu/spirit-design-system/issues/DS-171)) ([223c4f7](https://github.com/lmc-eu/spirit-design-system/commit/223c4f7))
- **web:** Store component handler instances in a map (refs [#DS-171](https://github.com/lmc-eu/spirit-design-system/issues/DS-171)) ([13adbb5](https://github.com/lmc-eu/spirit-design-system/commit/13adbb5))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.16.0"></a>

# [0.16.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.15.0...@lmc-eu/spirit-web@0.16.0) (2022-04-25)

### Bug Fixes

- CheckboxField label interaction [#DS-179](https://github.com/lmc-eu/spirit-design-system/issues/DS-179) ([9240a52](https://github.com/lmc-eu/spirit-design-system/commit/9240a52))

### Chores

- **web:** Add missing peer dependencies ([5a11424](https://github.com/lmc-eu/spirit-design-system/commit/5a11424))

### Code Refactoring

- **web:** Use typescript for javascript handlers ([fb84cd3](https://github.com/lmc-eu/spirit-design-system/commit/fb84cd3))

### Dependencies

- Update all non-major dependencies ([db90539](https://github.com/lmc-eu/spirit-design-system/commit/db90539))

### Documentation

- **web:** Document prefixing of CSS class names [#DS-143](https://github.com/lmc-eu/spirit-design-system/issues/DS-143) ([18d8be8](https://github.com/lmc-eu/spirit-design-system/commit/18d8be8))

### Features

- **web:** Add focus shadow to CheckboxField and TextField ([4a57c8e](https://github.com/lmc-eu/spirit-design-system/commit/4a57c8e))
- **web:** Introduce javascript handlers for web components ([611e520](https://github.com/lmc-eu/spirit-design-system/commit/611e520))
- **web:** Style password toggle [#DS-192](https://github.com/lmc-eu/spirit-design-system/issues/DS-192) ([9867f32](https://github.com/lmc-eu/spirit-design-system/commit/9867f32))

### Styles

- **web:** Introduce ESlint for javascript handlers ([77bbcaf](https://github.com/lmc-eu/spirit-design-system/commit/77bbcaf))

### Tests

- **web:** Ignore code coverage reports ([0a95775](https://github.com/lmc-eu/spirit-design-system/commit/0a95775))
- **web:** Introduce tests for javascript handlers ([dbbc762](https://github.com/lmc-eu/spirit-design-system/commit/dbbc762))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.15.0"></a>

# [0.15.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.14.0...@lmc-eu/spirit-web@0.15.0) (2022-04-13)

### BREAKING CHANGES

- **web:** Remove bottom margin from last-child elements ([582545f](https://github.com/lmc-eu/spirit-design-system/commit/582545f))

### Code Refactoring

- **web:** Move SASS styles into `scss` directory (refs [#255](https://github.com/lmc-eu/spirit-design-system/issues/255)) ([b6532eb](https://github.com/lmc-eu/spirit-design-system/commit/b6532eb))

### Dependencies

- Update all non-major dependencies ([9f7e5df](https://github.com/lmc-eu/spirit-design-system/commit/9f7e5df))

### Documentation

- **design-tokens:** Add missing node_modules in sass loader configuration ([ddb40e7](https://github.com/lmc-eu/spirit-design-system/commit/ddb40e7))

### Features

- **web:** Add helper for hiding text visually ([1f11fc6](https://github.com/lmc-eu/spirit-design-system/commit/1f11fc6))
- **web:** Introduce `Header` component [#DS-163](https://github.com/lmc-eu/spirit-design-system/issues/DS-163) ([96d22e4](https://github.com/lmc-eu/spirit-design-system/commit/96d22e4))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.14.0"></a>

# [0.14.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.13.0...@lmc-eu/spirit-web@0.14.0) (2022-04-08)

### BREAKING CHANGES

- Remove PasswordField in favor of TextField, add email type to TextField [#DS-182](https://github.com/lmc-eu/spirit-design-system/issues/DS-182) ([4ff5966](https://github.com/lmc-eu/spirit-design-system/commit/4ff5966))

### Bug Fixes

- **web:** Make the TextField fluid again ([d89f16b](https://github.com/lmc-eu/spirit-design-system/commit/d89f16b))

### Dependencies

- Update all non-major dependencies ([127f300](https://github.com/lmc-eu/spirit-design-system/commit/127f300))

### Features

- **web:** Add text and background color utilities [#DS-189](https://github.com/lmc-eu/spirit-design-system/issues/DS-189) ([5d04f2b](https://github.com/lmc-eu/spirit-design-system/commit/5d04f2b))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.13.0"></a>

# [0.13.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.12.0...@lmc-eu/spirit-web@0.13.0) (2022-03-31)

### Bug Fixes

- **web:** Stretch input to entire container ([717343d](https://github.com/lmc-eu/spirit-design-system/commit/717343d))

### Dependencies

- Update all non-major dependencies ([211daef](https://github.com/lmc-eu/spirit-design-system/commit/211daef))
- Update dependency @lmc-eu/stylelint-config to v4 ([53c825b](https://github.com/lmc-eu/spirit-design-system/commit/53c825b))

### Features

- **web:** Introduce fluid modificator for text field component ([2bf4832](https://github.com/lmc-eu/spirit-design-system/commit/2bf4832))

### Styles

- **web:** Respect community `value-keyword-case` for currentcolor ([1d86c6c](https://github.com/lmc-eu/spirit-design-system/commit/1d86c6c))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.12.0"></a>

# [0.12.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.11.0...@lmc-eu/spirit-web@0.12.0) (2022-03-28)

### Features

- **web:** Add Cursor settings with disabled state and use it in links and Button ([4340e16](https://github.com/lmc-eu/spirit-design-system/commit/4340e16))
- **web:** Add Link helpers [#DS-137](https://github.com/lmc-eu/spirit-design-system/issues/DS-137) ([5b634b8](https://github.com/lmc-eu/spirit-design-system/commit/5b634b8))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.11.0"></a>

# [0.11.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.10.0...@lmc-eu/spirit-web@0.11.0) (2022-03-22)

### Bug Fixes

- **web:** Fix foundation normalize path ([4ac9042](https://github.com/lmc-eu/spirit-design-system/commit/4ac9042))
- **web:** Fix Square Button width and show it in examples, fixes [#193](https://github.com/lmc-eu/spirit-design-system/issues/193) ([b6dc9ac](https://github.com/lmc-eu/spirit-design-system/commit/b6dc9ac))

### Dependencies

- Update all non-major dependencies ([3fd178b](https://github.com/lmc-eu/spirit-design-system/commit/3fd178b))
- Update all non-major dependencies ([f464e89](https://github.com/lmc-eu/spirit-design-system/commit/f464e89))
- Update dependency @lmc-eu/stylelint-config to v3.0.1 ([f43d4f6](https://github.com/lmc-eu/spirit-design-system/commit/f43d4f6))
- Update dependency stylelint to v14 ([cf14c4b](https://github.com/lmc-eu/spirit-design-system/commit/cf14c4b))
- Update dependency stylelint-order to v5 ([97664aa](https://github.com/lmc-eu/spirit-design-system/commit/97664aa))

### Features

- **web:** Add svg escape tool and use non base64 encoded svg in Checkboxfield [#DS-177](https://github.com/lmc-eu/spirit-design-system/issues/DS-177) ([9a46cca](https://github.com/lmc-eu/spirit-design-system/commit/9a46cca))
- **web:** Add Utilities classes for display, margins, paddings and text align [#DS-166](https://github.com/lmc-eu/spirit-design-system/issues/DS-166) ([ebfe8be](https://github.com/lmc-eu/spirit-design-system/commit/ebfe8be))
- **web:** Introduce Alert component (refs [#DS-164](https://github.com/lmc-eu/spirit-design-system/issues/DS-164)) ([0665fca](https://github.com/lmc-eu/spirit-design-system/commit/0665fca))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.10.0"></a>

# [0.10.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.9.0...@lmc-eu/spirit-web@0.10.0) (2022-03-11)

### Bug Fixes

- **web:** ButtonLink prevent text-decoration underline ([6fdcd6e](https://github.com/lmc-eu/spirit-design-system/commit/6fdcd6e))

### Dependencies

- Update all non-major dependencies ([2e73df7](https://github.com/lmc-eu/spirit-design-system/commit/2e73df7))
- Update all non-major dependencies ([1e0fa1e](https://github.com/lmc-eu/spirit-design-system/commit/1e0fa1e))

### Features

- Update Button variant colors and add new inverted variant [#DS-148](https://github.com/lmc-eu/spirit-design-system/issues/DS-148) ([d66afb0](https://github.com/lmc-eu/spirit-design-system/commit/d66afb0))
- **web:** Add Stack component for vertical spacing [#DS-165](https://github.com/lmc-eu/spirit-design-system/issues/DS-165) ([4a87e6a](https://github.com/lmc-eu/spirit-design-system/commit/4a87e6a))
- **web:** Introduce CheckboxField component (refs [#DS-136](https://github.com/lmc-eu/spirit-design-system/issues/DS-136)) ([a24ac0c](https://github.com/lmc-eu/spirit-design-system/commit/a24ac0c))
- **web:** Introduce foundation CSS layer [#DS-173](https://github.com/lmc-eu/spirit-design-system/issues/DS-173) ([d87c08c](https://github.com/lmc-eu/spirit-design-system/commit/d87c08c))
- **web:** Introduce helpers and add typography classes [#DS-167](https://github.com/lmc-eu/spirit-design-system/issues/DS-167) ([cefc694](https://github.com/lmc-eu/spirit-design-system/commit/cefc694))
- **web:** Introduce PasswordField component [#DS-149](https://github.com/lmc-eu/spirit-design-system/issues/DS-149) ([a273829](https://github.com/lmc-eu/spirit-design-system/commit/a273829))

**Note:** Version bump only for package @lmc-eu/spirit-web

<a name="0.9.0"></a>

# [0.9.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web@0.8.0...@lmc-eu/spirit-web@0.9.0) (2022-02-26)

### Bug Fixes

- Set default template columns to grid narrow variant [#DS-156](https://github.com/lmc-eu/spirit-design-system/issues/DS-156) ([bd10f93](https://github.com/lmc-eu/spirit-design-system/commit/bd10f93))

### Chores

- **release:** Publish [ci-skip] ([a11c055](https://github.com/lmc-eu/spirit-design-system/commit/a11c055))

### Dependencies

- Update all non-major dependencies ([cd7de25](https://github.com/lmc-eu/spirit-design-system/commit/cd7de25))
- Update dependency @lmc-eu/stylelint-config to v3 ([18cfc75](https://github.com/lmc-eu/spirit-design-system/commit/18cfc75))

### Features

- Implement Grid component to spirit-web and showcase it in demo ([329b28b](https://github.com/lmc-eu/spirit-design-system/commit/329b28b))
- Implement TextField component ([455930a](https://github.com/lmc-eu/spirit-design-system/commit/455930a))

**Note:** Version bump only for package @lmc-eu/spirit-web

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
