# Deprecations List

This document lists all deprecations that will be removed in the next major version of the _spirit-web-twig_ package.

> Please follow the migration guides to safely upgrade your design system components.

## Deprecations

👉 [What are deprecations?][readme-deprecations]

### Link `isUnderlined`

`isUnderlined` property will be replaced in the next major version. Please use `underlined` instead.

#### Migration Guide

```diff
- <Link isUnderlined … />
+ <Link underlined="always" … />
```

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#deprecations
