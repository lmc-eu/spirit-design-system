# Migration Guide

Introducing version 4 of the _spirit-web-twig_ package.

> Please follow these steps to safely upgrade to Spirit Design System v4 components.

> ℹ️ Don't forget to check the [migration guide of the _spirit-web_ package][migration-guide-web] for general changes in
> available feature flags, CSS, JavaScript plugins, and other changes that might affect your project.

## Overview

- [Component Changes](#component-changes)
  - [Button and ButtonLink: `isSquare` prop](#button-and-buttonlink-issquare-prop-renamed-to-issymmetrical)

## Component Changes

### Button and ButtonLink: `isSquare` prop renamed to `isSymmetrical`

Button `isSquare` prop was renamed to `isSymmetrical`.

#### Migration Guide

- `<Button isSquare … />` → `<Button isSymmetrical … />`
- `<ButtonLink isSquare … />` → `<ButtonLink isSymmetrical … />`

### Heading elementType prop is now mandatory

The `Heading` component previously had a default `elementType` of `"div"`.
We've removed this default to encourage developers to explicitly choose a more appropriate semantic HTML element.

#### Migration Guide

- `<Heading … />` → `<Heading elementType="{/* Your semantic HTML element here */}" … />`

---

Please refer back to this guide or reach out to our team if you encounter any issues during migration.

[migration-guide-web]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/migrations/web/MIGRATION-v3.md
