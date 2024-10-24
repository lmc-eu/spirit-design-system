# Migration Guide

Introducing version 3 of the _spirit-web-react_ package.

> Please follow these steps to safely upgrade to Spirit Design System v3 components.

> ℹ️ Don't forget to check the [migration guide of the _spirit-web_ package][migration-guide-web] for general changes in
> available feature flags, CSS, and other changes that might affect your project.

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

🪄 Use codemods to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/button-isSquare-prop-name
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/buttonLink-isSquare-prop-name
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually replace the props in your project.

- `<Button isSquare … />` → `<Button isSymmetrical … />`
- `<ButtonLink isSquare … />` → `<ButtonLink isSymmetrical … />`
</details>

### Heading elementType prop is now mandatory

The `Heading` component previously had a default `elementType` of `"div"`.
We've removed this default to encourage developers to explicitly choose a more appropriate semantic HTML element.

#### Migration Guide

🪄 Use codemods to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/heading-elementType-prop
```

👉 See [Codemods documentation][readme-codemods] for more details.

⚠️ This codemod will add `elementType="div"` where it's missing.
**We highly recommend reviewing these changes and updating them to use the most appropriate semantic HTML elements.**

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually replace the props in your project.

- `<Heading … />` → `<Heading elementType="{/* Your semantic HTML element here */}" … />`
</details>

### Link: The `hasVisitedStyleAllowed` prop was added

The `hasVisitedStyleAllowed` property was added. This property allows the link to have visited state style. There is also a change in the use of the visited state style for the `Heading` component, which had previously this state set by default.
Now a prop `hasVisitedStyleAllowed` has to be added to enable the visited state.

#### Migration Guide

🪄 Use codemods to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/link-hasVisitedStyleAllowed-prop
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

- `<Link … />` → `<Link hasVisitedStyleAllowed … />`
</details>

### Link `isUnderlined`

The `isUnderlined` property was removed, please use `underlined` instead.

#### Migration Guide

🪄 Use codemods to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v3/web-react/link-underlined-prop
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually replace the props in your project.

- `<Link isUnderlined … />` → `<Link underlined="always" … />`
</details>

---

Please refer back to these instructions or reach out to our team if you encounter any issues during migration.

[migration-guide-web]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/migrations/web/MIGRATION-v3.md
[readme-codemods]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/README.md