# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.13.0"></a>

# [1.13.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.12.0...@lmc-eu/spirit-web-twig@1.13.0) (2022-10-13)

### BREAKING CHANGES

- **web-twig:** Update Pill variants - remove secondary and add emotion colors [#DS-408](https://github.com/lmc-eu/spirit-design-system/issues/DS-408) ([124ec27](https://github.com/lmc-eu/spirit-design-system/commit/124ec27))

### Bug Fixes

- **web-twig:** Omit viewBox in reused SVGs to avoid scaling bug [#JALL-7](https://github.com/lmc-eu/spirit-design-system/issues/JALL-7) ([de46450](https://github.com/lmc-eu/spirit-design-system/commit/de46450))

### Styles

- **web:** Upgrade stylelint config and fix errors [#DS-322](https://github.com/lmc-eu/spirit-design-system/issues/DS-322) ([4df87da](https://github.com/lmc-eu/spirit-design-system/commit/4df87da))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.12.0"></a>

# [1.12.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.11.0...@lmc-eu/spirit-web-twig@1.12.0) (2022-10-03)

### BREAKING CHANGES

- Remove `narrow` preset of `Grid` in favour of product-specific layouts ([64f5588](https://github.com/lmc-eu/spirit-design-system/commit/64f5588))
- **web-twig:** Delete duplicate `Tabs` sub-components ([46c430d](https://github.com/lmc-eu/spirit-design-system/commit/46c430d))
- **web-twig:** Drop support Symfony 3.4 and not LTS versions 4.x and 5.x ([286644c](https://github.com/lmc-eu/spirit-design-system/commit/286644c))
- **web-twig:** Fix `TabLink` API ([488800b](https://github.com/lmc-eu/spirit-design-system/commit/488800b))

### Chores

- **web-twig:** Add changes done by version script to VCS ([7d62978](https://github.com/lmc-eu/spirit-design-system/commit/7d62978))

### Features

- **web-twig:** Add abstract component TextFieldBase [#DS-319](https://github.com/lmc-eu/spirit-design-system/issues/DS-319) ([1a27cfc](https://github.com/lmc-eu/spirit-design-system/commit/1a27cfc))
- **web-twig:** Introduce support Symfony 6.1 and PHP 8.1 ([676ce5e](https://github.com/lmc-eu/spirit-design-system/commit/676ce5e))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.11.0"></a>

# [1.11.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.10.0...@lmc-eu/spirit-web-twig@1.11.0) (2022-09-22)

### Bug Fixes

- **web-twig:** Variable props does not exist ([2acba5d](https://github.com/lmc-eu/spirit-design-system/commit/2acba5d))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.10.0"></a>

# [1.10.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.9.0...@lmc-eu/spirit-web-twig@1.10.0) (2022-09-15)

### Bug Fixes

- ECS lint error in SvgExtension.php ([ba0f769](https://github.com/lmc-eu/spirit-design-system/commit/ba0f769))
- Update snapshot tests ([6dc61dc](https://github.com/lmc-eu/spirit-design-system/commit/6dc61dc))
- **web-twig:** Blank spaces in class props ([2e6f047](https://github.com/lmc-eu/spirit-design-system/commit/2e6f047))
- **web-twig:** ButtonLink disabled state not working without disabled class ([ef7de03](https://github.com/lmc-eu/spirit-design-system/commit/ef7de03))
- **web-twig:** ButtonLink remove disabled attribute ([480dce3](https://github.com/lmc-eu/spirit-design-system/commit/480dce3))
- **web-twig:** Remove Icon name first letter upper-casing ([801381f](https://github.com/lmc-eu/spirit-design-system/commit/801381f))
- **web-twig:** Set correct order of filters in TabPane ([d8f4e95](https://github.com/lmc-eu/spirit-design-system/commit/d8f4e95))
- **web-twig:** Unifying Link implementation ([28fe216](https://github.com/lmc-eu/spirit-design-system/commit/28fe216))

### Features

- **web-twig:** Add aria-hidden to Icon component ([6519ed8](https://github.com/lmc-eu/spirit-design-system/commit/6519ed8))
- **web-twig:** Add five columns option to Grid ([709dd30](https://github.com/lmc-eu/spirit-design-system/commit/709dd30))
- **web-twig:** Add property size to the Button [#DS-318](https://github.com/lmc-eu/spirit-design-system/issues/DS-318) ([5ce2821](https://github.com/lmc-eu/spirit-design-system/commit/5ce2821))
- **web-twig:** Allow mainProps in Icon component ([1cf080b](https://github.com/lmc-eu/spirit-design-system/commit/1cf080b))
- **web-twig:** Remove Icon class from the Icon component ([3987190](https://github.com/lmc-eu/spirit-design-system/commit/3987190))
- **web-twig:** Use Icon in Alert and add centered variant [#DS-304](https://github.com/lmc-eu/spirit-design-system/issues/DS-304) ([5cf933f](https://github.com/lmc-eu/spirit-design-system/commit/5cf933f))
- **web-twig:** Use Icon in Breadcrumbs [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([71e9032](https://github.com/lmc-eu/spirit-design-system/commit/71e9032))
- **web-twig:** Use Icon in Header [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([0172867](https://github.com/lmc-eu/spirit-design-system/commit/0172867))
- **web-twig:** Use Icon in Modal [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([c8cb2cf](https://github.com/lmc-eu/spirit-design-system/commit/c8cb2cf))
- **web-twig:** Use Icon in Tooltip [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([41b8501](https://github.com/lmc-eu/spirit-design-system/commit/41b8501))
- **web:** Update Breadcrumbs' last item's theme color (refs [#DS-313](https://github.com/lmc-eu/spirit-design-system/issues/DS-313)) ([7f53b42](https://github.com/lmc-eu/spirit-design-system/commit/7f53b42))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.9.0"></a>

# [1.9.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.8.0...@lmc-eu/spirit-web-twig@1.9.0) (2022-08-31)

### Bug Fixes

- **web-twig:** Add missing service registration for ComponentLexer ([5f94b44](https://github.com/lmc-eu/spirit-design-system/commit/5f94b44))
- **web-twig:** Default components path in spirit for extending components ([f6a137e](https://github.com/lmc-eu/spirit-design-system/commit/f6a137e))
- **web-twig:** Make `TextField` `id` mandatory as it is required for linking the label to the input ([d57b9ad](https://github.com/lmc-eu/spirit-design-system/commit/d57b9ad))
- **web-twig:** Remove classes used in TwigX Bundle ([635c73e](https://github.com/lmc-eu/spirit-design-system/commit/635c73e))
- **web-twig:** Set right order of filters ([6d7cde2](https://github.com/lmc-eu/spirit-design-system/commit/6d7cde2))
- **web-twig:** Tooltip raw id attribute ([8b47290](https://github.com/lmc-eu/spirit-design-system/commit/8b47290))
- **web-twig:** TooltipWrapper does not use additional classes ([8136de2](https://github.com/lmc-eu/spirit-design-system/commit/8136de2))
- **web-twig:** TooltipWrapper double closure of the component ([bdf6936](https://github.com/lmc-eu/spirit-design-system/commit/bdf6936))
- **web-twig:** Use ComponentLexer from TwigXBundle package ([a65866c](https://github.com/lmc-eu/spirit-design-system/commit/a65866c))

### Chores

- **web-twig:** Add package into lerna managed workspace (refs [#393](https://github.com/lmc-eu/spirit-design-system/issues/393)) ([1912563](https://github.com/lmc-eu/spirit-design-system/commit/1912563))
- **web-twig:** Introduce docker support for seamless development ([45dc8d2](https://github.com/lmc-eu/spirit-design-system/commit/45dc8d2))
- **web-twig:** Parse future version and update composer.json with it ([a8b3a4d](https://github.com/lmc-eu/spirit-design-system/commit/a8b3a4d)), closes [#393](https://github.com/lmc-eu/spirit-design-system/issues/393)
- **web-twig:** Remove ignored cache and coverage files ([ecc110b](https://github.com/lmc-eu/spirit-design-system/commit/ecc110b))
- **web-twig:** Remove Jenkins pipeline ([57ad0a9](https://github.com/lmc-eu/spirit-design-system/commit/57ad0a9))
- **web-twig:** Require v2 of twigx-bundle and remove minimum stability flag ([006e3c5](https://github.com/lmc-eu/spirit-design-system/commit/006e3c5))

### Code Refactoring

- **web-twig:** Move content to `packages/web-twig` ([23a9915](https://github.com/lmc-eu/spirit-design-system/commit/23a9915))
- **web-twig:** Refactor directory structure of components ([dfb68d1](https://github.com/lmc-eu/spirit-design-system/commit/dfb68d1))
- **web-twig:** Rename Tabs components to same names as we have in react package ([e352145](https://github.com/lmc-eu/spirit-design-system/commit/e352145))
- **web-twig:** Require compiler as separate dependency (refs [#DS-277](https://github.com/lmc-eu/spirit-design-system/issues/DS-277)) ([20cb419](https://github.com/lmc-eu/spirit-design-system/commit/20cb419))

### Dependencies

- **web-twig:** Remove unused dependency `doctrine/cache` ([acd28f8](https://github.com/lmc-eu/spirit-design-system/commit/acd28f8))
- **web-twig:** Update `twigx-bundle` to 2.1.0 ([9ac8aec](https://github.com/lmc-eu/spirit-design-system/commit/9ac8aec))

### Documentation

- **web-twig:** How to publish changes to package readonly repository ([455a328](https://github.com/lmc-eu/spirit-design-system/commit/455a328))
- **web-twig:** Regenerate changelog based on commit history (refs [#393](https://github.com/lmc-eu/spirit-design-system/issues/393)) ([a1c02b4](https://github.com/lmc-eu/spirit-design-system/commit/a1c02b4))
- **web-twig:** Remove step of adding internal repository to composer ([15e2154](https://github.com/lmc-eu/spirit-design-system/commit/15e2154))
- **web-twig:** Update links to every component readme file ([028558e](https://github.com/lmc-eu/spirit-design-system/commit/028558e))

### Features

- **web-twig:** Add size prop to Icon component [#DS-288](https://github.com/lmc-eu/spirit-design-system/issues/DS-288) ([37a6674](https://github.com/lmc-eu/spirit-design-system/commit/37a6674))
- **web-twig:** Change license from proprietary to MIT ([9b65fd7](https://github.com/lmc-eu/spirit-design-system/commit/9b65fd7))
- **web-twig:** Enable glob function pattersn in a paths ([d154204](https://github.com/lmc-eu/spirit-design-system/commit/d154204))
- **web-twig:** Introduce `Breadcrumbs` component (refs [#DS-302](https://github.com/lmc-eu/spirit-design-system/issues/DS-302)) ([0cb08ad](https://github.com/lmc-eu/spirit-design-system/commit/0cb08ad))
- **web-twig:** Introduce `informative` variant to `Alert` [#DS-274](https://github.com/lmc-eu/spirit-design-system/issues/DS-274) ([210a013](https://github.com/lmc-eu/spirit-design-system/commit/210a013))
- **web-twig:** Introduce `Tooltip` component (refs [#DS-252](https://github.com/lmc-eu/spirit-design-system/issues/DS-252)) ([cbba01b](https://github.com/lmc-eu/spirit-design-system/commit/cbba01b))
- **web-twig:** Introduce filter for Boolean props ([47d3872](https://github.com/lmc-eu/spirit-design-system/commit/47d3872))
- **web-twig:** Introduce Icon component [#DS-288](https://github.com/lmc-eu/spirit-design-system/issues/DS-288) ([69074f3](https://github.com/lmc-eu/spirit-design-system/commit/69074f3))
- **web-twig:** Introduce Modal component ([43f73ee](https://github.com/lmc-eu/spirit-design-system/commit/43f73ee))
- **web-twig:** Introduce RadioField component ([e47f30b](https://github.com/lmc-eu/spirit-design-system/commit/e47f30b))

### Styles

- **web-twig:** Cast type of variable used in foreach loop ([434affb](https://github.com/lmc-eu/spirit-design-system/commit/434affb))
- **web-twig:** Reformat documentation by the style rule ([c69f920](https://github.com/lmc-eu/spirit-design-system/commit/c69f920))

### Tests

- **web-twig:** Add missing brackets in new instance of Logger ([f35c2e7](https://github.com/lmc-eu/spirit-design-system/commit/f35c2e7))
- **web-twig:** Update snapshots after removing dependency ([53bc60c](https://github.com/lmc-eu/spirit-design-system/commit/53bc60c))
- **web-twig:** Use real paths in data provider for Compiler Pass ([2c81c5a](https://github.com/lmc-eu/spirit-design-system/commit/2c81c5a))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.8.0"></a>

# [1.8.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.7.0...@lmc-eu/spirit-web-twig@1.8.0) (2022-08-29)

### Code Refactoring

- **web-twig:** Refactor Twig components and update their readme, api not changed (refs #DS-249) ([6dcbcbe](https://github.com/lmc-eu/spirit-design-system/commit/6dcbcbe)), closes [#DS-249](https://github.com/lmc-eu/spirit-design-system/issues/DS-249)

### Features

- **web-twig:** Introduce Tabs component (refs #DS-233) ([1e43b05](https://github.com/lmc-eu/spirit-design-system/commit/1e43b05)), closes [#DS-233](https://github.com/lmc-eu/spirit-design-system/issues/DS-233)
- **web-twig:** Introduce Pill component ([23bfcf7](https://github.com/lmc-eu/spirit-design-system/commit/23bfcf7))
- **web-twig:** Update Tag - add sizes, split theme and color classes, allow elementType change. Use ([a56d0f5](https://github.com/lmc-eu/spirit-design-system/commit/a56d0f5))

### Bug Fixes

- **web-twig:** Bugfix `isRequired` functionality in `TextField` component ([6858643](https://github.com/lmc-eu/spirit-design-system/commit/6858643))

### Tests

- **web-twig:** Fixed the version of the spatie/phpunit-snapshot-assertions package ([8929c9c](https://github.com/lmc-eu/spirit-design-system/commit/8929c9c))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.7.0"></a>

# [1.7.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.6.0...@lmc-eu/spirit-web-twig@1.7.0) (2022-05-09)

### Features

- **web-twig:** SVG Twig extension ([8b9e609](https://github.com/lmc-eu/spirit-design-system/commit/8b9e609))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.6.0"></a>

# [1.6.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.5.0...@lmc-eu/spirit-web-twig@1.6.0) (2022-04-29)

### Bug Fixes

- **web-twig:** Rename Header toggle class to `mobileOnlyActions` ([3360074](https://github.com/lmc-eu/spirit-design-system/commit/3360074))
- **web-twig:** Bugfix Link component classes ([c7389a0](https://github.com/lmc-eu/spirit-design-system/commit/c7389a0))
- **web-twig:** Bugfix Link component title ([02ca0ad](https://github.com/lmc-eu/spirit-design-system/commit/02ca0ad))
- **web-twig:** Bugfix title prop in ButtonLink ([7708bed](https://github.com/lmc-eu/spirit-design-system/commit/7708bed))

### Documentation

- **web-twig:** Add new components into readme and fix newVersion script ([61fe5f7](https://github.com/lmc-eu/spirit-design-system/commit/61fe5f7))
- **web-twig:** Bugfix Header.md title ([fb91e3d](https://github.com/lmc-eu/spirit-design-system/commit/fb91e3d))
- **web-twig:** Add Header into spirit components list in README ([0185451](https://github.com/lmc-eu/spirit-design-system/commit/0185451))
- **web-twig:** Documentation for Header component (refs #DS-161) ([37f83d3](https://github.com/lmc-eu/spirit-design-system/commit/37f83d3)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)

### Features

- **web-twig:** Print raw label and message props in TextField and CheckboxField components ([aa5315f](https://github.com/lmc-eu/spirit-design-system/commit/aa5315f))
- **web-twig:** Allow validation attributtes as main props for Text and Checkbox (refs #DS-199) ([6aeb0f6](https://github.com/lmc-eu/spirit-design-system/commit/6aeb0f6)), closes [#DS-199](https://github.com/lmc-eu/spirit-design-system/issues/DS-199)
- **web-twig:** Add Alert component ([edbb04b](https://github.com/lmc-eu/spirit-design-system/commit/edbb04b))

- **web-twig:** Introduce Link component as typography helper ([15e0886](https://github.com/lmc-eu/spirit-design-system/commit/15e0886))
- **web-twig:** Introduce Heading component as typography helper ([ecca69a](https://github.com/lmc-eu/spirit-design-system/commit/ecca69a))
- **web-twig:** Introduce Text component as typography helper ([addced6](https://github.com/lmc-eu/spirit-design-system/commit/addced6))
- **web-twig:** Optimize navbarToggle component & allow aria-\* mainProps and ignore empty string (DS ([d77252d](https://github.com/lmc-eu/spirit-design-system/commit/d77252d))
- **web-twig:** Introduce Header component (refs #DS-161) ([a423509](https://github.com/lmc-eu/spirit-design-system/commit/a423509)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)
- **web-twig:** Introduce Header Nav component (refs #DS-161) ([4c9ce1a](https://github.com/lmc-eu/spirit-design-system/commit/4c9ce1a)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)
- **web-twig:** Introduce Header Navbar Actions component (refs #DS-161) ([10730ca](https://github.com/lmc-eu/spirit-design-system/commit/10730ca)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)
- **web-twig:** Introduce Header Navbar Close component (refs #DS-161) ([c504e61](https://github.com/lmc-eu/spirit-design-system/commit/c504e61)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)
- **web-twig:** Introduce Header Navbar component (refs #DS-161) ([a1a2726](https://github.com/lmc-eu/spirit-design-system/commit/a1a2726)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)
- **web-twig:** Introduce Header NavItem (refs #DS-161) ([7967b82](https://github.com/lmc-eu/spirit-design-system/commit/7967b82)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)
- **web-twig:** Introduce Header NavLink component (refs #DS-161) ([74c6d96](https://github.com/lmc-eu/spirit-design-system/commit/74c6d96)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)
- **web-twig:** Remove PasswordField in favor of TextField ([9c16853](https://github.com/lmc-eu/spirit-design-system/commit/9c16853))
- **web-twig:** Add main props `data-*` and `id` into `Button` and `ButtonLink` components ([2919d7a](https://github.com/lmc-eu/spirit-design-system/commit/2919d7a))

### Tests

- **web-twig:** Testing Header component (refs #DS-161) ([c366ae4](https://github.com/lmc-eu/spirit-design-system/commit/c366ae4)), closes [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.5.0"></a>

# [1.5.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.4.0...@lmc-eu/spirit-web-twig@1.5.0) (2022-04-04)

### BREAKING CHANGES

- **web-twig:** Use is prefix for boolean props ([ebb9f5e](https://github.com/lmc-eu/spirit-design-system/commit/ebb9f5e))

### Bug Fixes

- **web-twig:** Fix boolean props, check first if they are defined and then if they are true ([d63eaee](https://github.com/lmc-eu/spirit-design-system/commit/d63eaee))
- **web-twig:** Bugfix boolean props value ([342760a](https://github.com/lmc-eu/spirit-design-system/commit/342760a))
- **web-twig:** Bugfix Grid behavior and its unused props ([f557e02](https://github.com/lmc-eu/spirit-design-system/commit/f557e02))
- **web-twig:** Bugfix Grid component prop desktop ([b411b36](https://github.com/lmc-eu/spirit-design-system/commit/b411b36))

### Chores

- **web-twig:** Add script to release new versions and add contributing doc ([7968777](https://github.com/lmc-eu/spirit-design-system/commit/7968777))

### Features

- **web-twig:** Add title prop into ButtonLink ([20da3aa](https://github.com/lmc-eu/spirit-design-system/commit/20da3aa))
- **web-twig:** Add onClick prop into `ButtonLink` component ([b3b6998](https://github.com/lmc-eu/spirit-design-system/commit/b3b6998))

### Tests

- **web-twig:** Add snapshot to not disabled button ([999d436](https://github.com/lmc-eu/spirit-design-system/commit/999d436))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.4.0"></a>

# [1.4.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.3.0...@lmc-eu/spirit-web-twig@1.4.0) (2022-03-28)

### Features

- **web-twig:** Add support Twig 1.44.6 for Jobs ([20aa0f0](https://github.com/lmc-eu/spirit-design-system/commit/20aa0f0))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.3.0"></a>

# [1.3.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.2.0...@lmc-eu/spirit-web-twig@1.3.0) (2022-03-22)

### Bug Fixes

- **web-twig:** Bugfix CamelCase component name ([c1e3044](https://github.com/lmc-eu/spirit-design-system/commit/c1e3044))

### Documentation

- **web-twig:** Add ButtonLink component documentation ([20d13a2](https://github.com/lmc-eu/spirit-design-system/commit/20d13a2))

### Features

- **web-twig:** Add CheckboxField component ([95bd5df](https://github.com/lmc-eu/spirit-design-system/commit/95bd5df))
- **web-twig:** Add PasswordField implementation into TextField ([fb15e39](https://github.com/lmc-eu/spirit-design-system/commit/fb15e39))
- **web-twig:** Add TextField component ([38f161b](https://github.com/lmc-eu/spirit-design-system/commit/38f161b))
- **web-twig:** Add Stack component ([0b79438](https://github.com/lmc-eu/spirit-design-system/commit/0b79438))
- **web-twig:** Add ButtonLink component (refs #DS-132) ([da74e1c](https://github.com/lmc-eu/spirit-design-system/commit/da74e1c)), closes [#DS-132](https://github.com/lmc-eu/spirit-design-system/issues/DS-132)
- **web-twig:** Add Container and Grid components ([dbdcfa3](https://github.com/lmc-eu/spirit-design-system/commit/dbdcfa3))

### Tests

- **web-twig:** Add Snapshot tests ([cf26cc6](https://github.com/lmc-eu/spirit-design-system/commit/cf26cc6))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.2.0"></a>

# [1.2.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.1.0...@lmc-eu/spirit-web-twig@1.2.0) (2021-12-15)

### Documentation

- **web-twig:** Update README ([762160d](https://github.com/lmc-eu/spirit-design-system/commit/762160d))

### Features

- **web-twig:** Extend and customize components ([322c83c](https://github.com/lmc-eu/spirit-design-system/commit/322c83c))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.1.0"></a>

# [1.1.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@1.0.0...@lmc-eu/spirit-web-twig@1.1.0) (2021-12-13)

### Documentation

- **web-twig:** Fix readme ([e990c21](https://github.com/lmc-eu/spirit-design-system/commit/e990c21))

### Features

- **web-twig:** Add support Symfony 3 ([147004a](https://github.com/lmc-eu/spirit-design-system/commit/147004a))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="1.0.0"></a>

# [1.0.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@0.1.0...@lmc-eu/spirit-web-twig@1.0.0) (2021-12-10)

### Code Refactoring

- **web-twig:** Rename bundle and move repository ([5cbe22e](https://github.com/lmc-eu/spirit-design-system/commit/5cbe22e))

### Features

- **web-twig:** Add Components into bundle & refactoring (refs #DS-87) ([f9e20ee](https://github.com/lmc-eu/spirit-design-system/commit/f9e20ee)), closes [#DS-87](https://github.com/lmc-eu/spirit-design-system/issues/DS-87)

### Tests

- **web-twig:** Upgrade tests ([eceb775](https://github.com/lmc-eu/spirit-design-system/commit/eceb775))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="0.1.0"></a>

# [0.1.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@0.0.2...@lmc-eu/spirit-web-twig@0.1.0) (2021-11-29)

### Features

- **web-twig:** Updates ([8e2011d](https://github.com/lmc-eu/spirit-design-system/commit/8e2011d))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="0.0.2"></a>

## [0.0.2](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-twig@0.0.1...@lmc-eu/spirit-web-twig@0.0.2) (2021-11-24)

### Documentation

- **web-twig:** Bugfix readme ([efb1094](https://github.com/lmc-eu/spirit-design-system/commit/efb1094))

### Features

- **web-twig:** Connect params into twig ([7d771cf](https://github.com/lmc-eu/spirit-design-system/commit/7d771cf))

### Tests

- **web-twig:** Bugfix tests ([bfeba38](https://github.com/lmc-eu/spirit-design-system/commit/bfeba38))

**Note:** Version bump only for package @lmc-eu/spirit-web-twig

<a name="0.0.1"></a>

## 0.0.1 (2021-11-24)

### Features

- **web-twig:** Initial commit ([65bb1cb](https://github.com/lmc-eu/spirit-design-system/commit/65bb1cb))
