# Migration Guide

Introducing version 4 of the _spirit-web-react_ package.

> Please follow these steps to safely upgrade to Spirit Design System v4 components.

> ℹ️ Don't forget to check the [migration guide of the _spirit-web_ package][migration-guide-web] for general changes in
> available feature flags, CSS, and other changes that might affect your project.

## Overview

- [General Changes](#general-changes)
  - [Dropped Support for Node.js 18](#dropped-support-for-nodejs-18)
  - [Change Package npm Organization to `@alma-oss`](#change-package-npm-organization-to-alma-oss)

## General Changes

### Dropped Support for Node.js 18

The Node.js v18 is no longer supported. The minimum required Node.js version is 20.

### Change Package Npm Organization to `@alma-oss`

All usage of `@lmc-eu/spirit-web-react` should be renamed to `@alma-oss/spirit-web-react`.

#### Migration Guide

🪄 Use codemods to automatically update your codebase:

```sh
npx @alma-oss/spirit-codemods -p <path> -t v4/web-react/package-name-change
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually replace the package name in all import statements in your project.

- `@lmc-eu/spirit-web-react` → `@alma-oss/spirit-web-react`
- `@lmc-eu/spirit-web-react/components/...` → `@alma-oss/spirit-web-react/components/...`
- `@lmc-eu/spirit-web-react/src` → `@alma-oss/spirit-web-react/src`
</details>

---

Please refer back to these instructions or reach out to our team if you encounter any issues during migration.

[migration-guide-web]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/migrations/web/
[readme-codemods]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/README.md
