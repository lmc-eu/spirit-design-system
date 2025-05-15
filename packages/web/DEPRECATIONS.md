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

#### Migration Guide

- `<div class="Flex Flex--row" />` → `<div class="Flex Flex--horizontal" />`
- `<div class="Flex Flex--column" />` → `<div class="Flex Flex--vertical" />`

### Header

The `Header` component was removed, please use `UNSTABLE_Header` component instead.

### Skeleton

The check for the existence of the `skeleton-gradient` token will be removed. Ensure that the skeleton-gradient token is properly set up in your project, as if you import all components, the project will not run without it.

### Stack

If you are using the `Stack` component with dividers, you must wrap each item inside the `Stack` component with a `StackItem` component.

#### Migration Guide

```html
<div class="Stack Stack--hasIntermediateDividers">
  <div>Item</div>
  <div>Item</div>
</div>
```

↓

```html
<div class="Stack Stack--hasIntermediateDividers">
  <div class="StackItem">Item</div>
  <div class="StackItem">Item</div>
</div>
```

### Button

The `Button--block` modifier will be removed in the next major version.

For more information, see documentation for [Button][button] component.

👉 [What are deprecations?][readme-deprecations]

[button]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Button/README.md
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#deprecations
