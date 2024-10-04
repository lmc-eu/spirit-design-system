# Migration Guide

Introducing version 3 of the _spirit-web-react_ package.

> Please follow these steps to safely upgrade to Spirit Design System v3 components.

> ℹ️ Don't forget to check the [migration guide of the _spirit-web_ package][migration-guide-web] for general changes in
> available feature flags, CSS, and other changes that might affect your project.

## Overview

- [Component Changes](#component-changes)
  - [Button and ButtonLink: `isSquare` prop](#button-and-buttonlink-issquare-prop-renamed-to-issymmetrical)

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

---

Please refer back to these instructions or reach out to our team if you encounter any issues during migration.

[migration-guide-web]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/migrations/web/MIGRATION-v3.md
[readme-codemods]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/README.md
