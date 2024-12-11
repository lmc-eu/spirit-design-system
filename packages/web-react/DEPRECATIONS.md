# Deprecations List

This document lists all deprecations that will be removed in the next major version of the _spirit-web-react_ package.

> Please follow the migration guides to safely upgrade your design system components.

## Deprecations

👉 [What are deprecations?][readme-deprecations]

<!-- @see: https://jira.almacareer.tech/browse/DS-1604 -->
<!--lint ignore heading-capitalization-->

### UncontrolledCollapse `isDisposable`

The `hideOnCollapse` prop was removed, please use `isDisposable` instead.

#### Migration Guide

We are providing a [codemod][codemod-collapse] to assist with this change.

- `<UncontrolledCollapse id="collapse" renderTrigger={…} hideOnCollapse … />` → `<UncontrolledCollapse id="collapse" renderTrigger={…} isDisposable … />`

[codemod-collapse]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/src/transforms/v4/web-react/README.md#v4web-reactcollapse-isdisposable-prop--uncontrolledcollapse-hideoncollapse-to-isdisposable-prop-change
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
