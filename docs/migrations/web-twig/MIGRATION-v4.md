# Migration Guide

Introducing version 4 of the _spirit-web-twig_ package.

> Please follow these steps to safely upgrade to Spirit Design System v4 components.

> ℹ️ Don't forget to check the [migration guide of the _spirit-web_ package][migration-guide-web] for general changes in
> available feature flags, CSS, JavaScript plugins, and other changes that might affect your project.

## Overview

- [Component Changes](#component-changes)
  - [Button and ButtonLink: `isSquare` prop](#button-and-buttonlink-issquare-prop-renamed-to-issymmetrical)
  - [Heading elementType prop is now mandatory](#heading-elementtype-prop-is-now-mandatory)
  - [Link `hasVisitedStyleAllowed`](#link-hasvisitedstyleallowed)
  - [Link `isUnderlined`](#link-isunderlined)

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

### Link: The `hasVisitedStyleAllowed` prop was added

The `hasVisitedStyleAllowed` property was added. This property allows the link to have visited state style. There is also a change in the use of the visited state style for the `Heading` component, which had previously this state set by default.
Now a prop `hasVisitedStyleAllowed` has to be added to enable the visited state.

#### Migration Guide

If you want to enable the visited state style for the `Link` component, please manually add the `hasVisitedStyleAllowed` prop.

- `<Link … />` → `<Link hasVisitedStyleAllowed … />`

### Link `isUnderlined`

The `isUnderlined` property was removed, please use `underlined` instead.

#### Migration Guide

- `<Link isUnderlined … />` → `<Link underlined="always" … />`

---

Please refer back to this guide or reach out to our team if you encounter any issues during migration.

[migration-guide-web]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/migrations/web/MIGRATION-v3.md
