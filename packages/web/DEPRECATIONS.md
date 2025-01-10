# Deprecations List

This document lists all deprecations that will be removed in the next major version of the _spirit-web_ package.

> Please follow the migration guides to safely upgrade your design system components.

## Deprecations

### Collapse `data-spirit-is-disposable`

The `data-spirit-more` attribute was removed, please use `data-spirit-is-disposable` instead.

#### Migration Guide

- `<a data-spirit-more … />` → `<a data-spirit-id-disposable … />`

### Flex

The direction values `row` and `column` were removed, please use `horizontal` and `vertical` instead.

### Migration Guide

- `<div class="Flex Flex--row" />` → `<div class="Flex Flex--horizontal" />`
- `<div class="Flex Flex--column" />` → `<div class="Flex Flex--vertical" />`

👉 [What are deprecations?][readme-deprecations]

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#deprecations
