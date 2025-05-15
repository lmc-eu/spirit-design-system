# Deprecations List

This document lists all deprecations that will be removed in the next major version of the _spirit-web-twig_ package.

> Please follow the migration guides to safely upgrade your design system components.

## Deprecations

### Collapse `data-spirit-is-disposable`

The `data-spirit-more` attribute was removed, please use `data-spirit-is-disposable` instead.

#### Migration Guide

- `<a data-spirit-more … />` → `<a data-spirit-is-disposable … />`

👉 [What are deprecations?][readme-deprecations]

### Stack

If you are using the `Stack` component with dividers, you must wrap each item inside the `Stack` component with a `StackItem` component.

#### Migration Guide

```twig
<Stack hasIntermediateDividers>
  <>Item</>
  <>Item</>
</Stack>
```

↓

```twig
<Stack hasIntermediateDividers>
  <StackItem>Item</StackItem>
  <StackItem>Item</StackItem>
</Stack>
```

### Button and ButtonLink

The `isBlock` property will be removed in the next major version.

For more information, see documentation for [Button][button] and [ButtonLink][button-link] components.

[button]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Button/README.md#how-to-make-a-fluid-button
[button-link]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/ButtonLink/README.md#how-to-make-a-fluid-buttonlink
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#deprecations
