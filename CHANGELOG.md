# Changelog

<!-- There should always be "Unreleased" section at the beginning. -->
## Unreleased
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
