# Deprecations List

This document lists all deprecations that will be removed in the next major version of the _spirit-web-react_ package.

> Please follow the migration guides to safely upgrade your design system components.

## Deprecations

👉 [What are deprecations?][readme-deprecations]

### UncontrolledCollapse `isDisposable`

The `hideOnCollapse` prop was removed, please use `isDisposable` instead.

#### Migration Guide

We are providing a [codemod][codemod-collapse] to assist with this change.

- `<UncontrolledCollapse id="collapse" renderTrigger={…} hideOnCollapse … />` → `<UncontrolledCollapse id="collapse" renderTrigger={…} isDisposable … />`

### Flex

The direction values `row` and `column` were removed, please use `horizontal` and `vertical` instead.

#### Migration Guide

We are providing a [codemod][codemod-flex] to assist with this change.

- `<Flex direction="row" />` → ` <Flex direction="horizontal" />`
- `<Flex direction="column" />` → `<Flex direction="vertical" />`
- `<Flex direction={{ mobile: 'column', tablet: 'row' }} />` → `<Flex direction={{ mobile: 'vertical', tablet: 'horizontal' }} />`

### Header

The `Header` component is deprecated, please use the `UNSTABLE_Header` component instead.

[codemod-collapse]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/src/transforms/v4/web-react/README.md#v4web-reactcollapse-isdisposable-prop--uncontrolledcollapse-hideoncollapse-to-isdisposable-prop-change
[codemod-flex]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/src/transforms/v4/web-react/README.md#v4web-reactflex-direction-values---flex-direction-prop-values-row-to-horizontal-and-column-to-vertical
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
