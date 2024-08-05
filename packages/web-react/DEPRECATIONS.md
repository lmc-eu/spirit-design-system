# Deprecations List

This document lists all deprecations that will be removed in the next major version of the _spirit-web-react_ package.

> Please follow the migration guides to safely upgrade your design system components.

## Deprecations

👉 [What are deprecations?][readme-deprecations]

### Link `isUnderlined`

`isUnderlined` property will be replaced in the next major version. Please use `underlined` instead.

#### Migration Guide

We are providing a [codemod](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/src/transforms/v3/web-react/README.md#v3web-reactlink-underlined-prop--link-isunderlined-to-udnerlined-prop-change) to assist with this change.

```diff
- <Link isUnderlined … />
+ <Link underlined="always" … />
```

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
