# Changelog

<!-- There should always be "Unreleased" section at the beginning. -->
## Unreleased

## 1.8.0 - 2022-07-18
- Update `Tag` - add sizes, split theme and color classes, allow elementType change
- Bugfix `isRequired` functionality in `TextField` component
- Introduce `Pill` component
- Introduce `Tabs` component
- Refactor components and update their readme

## 1.7.0 - 2022-05-09
- Add Svg twig extension for optimal loading of svg files as inline
- Add configuration param `icons` to define icon set path and alias

## 1.6.0 - 2022-04-29
- Add main props `data-*` and `id` into `Button` and `ButtonLink` components
- Introduce `Header`, `Navbar`, `NavbarActions`, `NavbarClose`, `NavbarToggle`, `Nav `, `NavItem`, `NavLink `components
- Allow `aria-*` as main props in `Button` and `ButtonLink` components
- Ignore empty string in `mainProps` twig function
- Introduce `Text` component as typography helper
- Introduce `Heading` component as typography helper
- Introduce `Link` component as typography helper
- Add `Alert` component
- Print raw `label` and `message` props in `TextField` and `CheckboxField` components

## 1.5.0 - 2022-04-04
- [BC] Use is prefix for boolean props
- Bugfix `Grid` component props
- Bugfix `Grid` component reset layout class if cols, tablet or desktop props defined
- Add onClick prop into `ButtonLink` component
- Add `title` prop into `ButtonLink`

## 1.4.0 - 2022-03-28
- Add support Twig 1.44.6 for Jobs

## 1.3.0 - 2022-03-22
- Add `ButtonLink`, `Container`, `Grid`, `Stack`, `TextField` and `CheckboxField` component
- Add Snapshot tests
- Update documentation
- Bugfix camelCase filename in compiler

## 1.2.0 - 2021-12-15
- Add prop `class` into components for customization
- Add base spirit component alias `spirit`
- Add tests extendable components cases
- Bugfix load bundle in project with multiple twig extension

## 1.1.0 - 2021-12-13
- Add Symfony 3 support for Jobs

## 1.0.0 - 2021-12-10
- [BC] Add possible link multiple components path into same alias in configuration
- [BC] Rename config param `path` into `paths`
- [BC] Rename config param `path_alias` into `paths_alias`
- [BC] Add configuration param `spirit_css_class_prefix` to define prefixes in class components
- Add Twig implementation of spirit component [Button](https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Button) and [Tag](https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Tag)
- configuration enabling html like-syntax into twig with config param `html_syntax_lexer`
- Add PHPStan into QA and refactoring
- Add `square` and `onClick` properties into Button component

## 0.1.0 - 2021-11-29
- Drop support php 7.3
- Add lowest deps into QA pipeline
- Add symfony polyfill php 8.0 functions
- Add simple components unit tests
- Upgrade LMC coding standards from v2 to v3

## 0.0.2 - 2021-11-24
- Add syntax example into README
- Fix connect yaml configuration into Twig

## 0.0.1 - 2021-11-24
- Initial release
