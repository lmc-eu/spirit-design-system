# Deprecations List

This document lists all deprecations that will be removed in the next major version of the _spirit-web-twig_ package.

> Please follow the migration guides to safely upgrade your design system components.

## Deprecations

<!-- @see: https://jira.almacareer.tech/browse/DS-1604 -->
<!--lint ignore heading-capitalization-->

## Collapse `data-spirit-is-disposable`

The `data-spirit-more` attribute was removed, please use `data-spirit-is-disposable` instead.

### Migration Guide

- `<a data-spirit-more … />` → `<a data-spirit-is-disposable … />`

👉 [What are deprecations?][readme-deprecations]

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#deprecations
