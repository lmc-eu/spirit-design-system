# Migration Guide

Introducing version 3 of the _spirit-web_ package.

> Please follow these steps to safely upgrade to Spirit Design System v3 components.

## Overview

- [General Changes](#general-changes)
  - [Themes](#themes)
  - [Spacing values](#spacing-values)
  - [Helpers: Typography `text` infix and Heading emphasis](#helpers-typography-text-infix-and-heading-emphasis)
  - [Utilities: Removed and new classes](#utilities-removed-and-new-classes)
  - [Migrating product components](#migrating-product-components)
- [Component Changes](#component-changes)
  - [Button: renamed modifier `square`](#button-square-modifier-renamed-to-symmetrical)

## General Changes

## Themes

Starting from version 3, the design system now supports multiple themes based on the
theme tokens. As in Figma, the first theme is the default one.

The default theme is set to the `:root` element and all the themes are generated
to classes that can be applied to the any element. Their names are based on the
theme names in tokens.

This change affects all components that apply any color.

We did all the work and our components are now using CSS variables to
apply colors, however, if you have any custom styles you need to update them.

Also, all your components that previously used color tokens should be updated to
use CSS variables. See [Migrating product components](#migrating-product-components)
for more information.

To switch the theme, simply add the theme class to the element you want to apply the theme to.
All the colors in the nested component will be switched to the theme colors.

Using themes we were able to remove `inverted` variants and some `brand` tokens.

See our [Themes decision][themes-decision] for more information and why we decided to implement this feature.

### Spacing values

New spacing values were added to the design system this caused a change in the
spacing tokens and some values were updated.

All spacing props and utility classes are influenced by this change.

#### Migration Guide

Use this table to update the spacing tokens in your project.

| **Old tokens** |      | **New tokens** |      |
| -------------- | ---- | -------------- | ---- |
| space-0        | 0    | space-0        | 0px  |
| space-100      | 1px  | space-100      | 1px  |
| space-200      | 2px  | space-200      | 2px  |
| space-300      | 4px  | space-300      | 4px  |
|                |      | space-400      | 6px  |
| space-400      | 8px  | space-500      | 8px  |
| space-500      | 12px | space-600      | 12px |
| space-600      | 16px | space-700      | 16px |
|                |      | space-800      | 20px |
| space-700      | 24px | space-900      | 24px |
| space-800      | 32px | space-1000     | 32px |
| space-900      | 40px | space-1100     | 40px |
| space-1000     | 48px | space-1200     | 48px |
|                |      | space-1300     | 56px |
| space-1100     | 64px | space-1400     | 64px |
|                |      | space-1500     | 72px |
| space-1200     | 80px | space-1600     | 80px |
|                |      | space-1700     | 96px |

If you are going to use fulltext search&replace in your project, we suggest you to
start from the largest values and work your way down to the smallest ones.
This way you will avoid replacing values you already replaced.

### Helpers: Typography `text` infix and Heading emphasis

As the word `text` was omitted from the typography tokens, the typography helpers
were updated to reflect this change. Also, the `heading` helpers were updated to
support the emphasis.

#### Migration Guide

From `body` typography helpers remove the `text` infix.

For example:

- `.typography-body-large-text-bold` → `.typography-body-large-bold`
- `.typography-body-xsmall-text-regular` → `.typography-body-xsmall-regular`

Rename `text` to `bold` in the `heading` helpers.

For example:

- `.typography-heading-xlarge-text` → `.typography-heading-xlarge-bold`
- `.typography-heading-xsmall-text` → `.typography-heading-xsmall-bold`

### Utilities: Removed and new classes

Some utility classes were removed and new ones were added.

Removed utility classes:

- `.text-brand-primary`
- `.text-brand-secondary`
- `.bg-basic`
- `.bg-cover`
- `.bg-inverted`

New utility classes:

- `.text-tertiary`
- `.bg-primary`
- `.bg-secondary`
- `.bg-tertiary`

### Migrating product components

First, you need to update your tokens. You can either use Supernova to export
your tokens in new structure, or you can manually update your tokens or update
our tokens package if you are using it.

Here are some steps to migrate your product components to use the new tokens and themes:

1. If you load `foundation`, `components`, `helpers`, and `utilities` separately, you need
   add `@forward 'themes';` before them in your main file. If you load whole `scss` folder,
   you don't need to do anything.
2. Replace module load `@use '@tokens' as tokens;` in your components with `@use '@global' as global-tokens;`.
3. Rename all the tokens in your components to use the new structure.
   1. Replace all module name `tokens.*` → `global-tokens.*`.
   2. Replace all spacing tokens with new values. See [Spacing values](#spacing-values) for more information.
   3. Replace all radius tokens with new values. We added new radius token in between, so you need to update them.
   4. Replace all typography tokens with new values. We removed `text` infix from typography tokens and added emphasized headings.
   5. Switch all color tokens to use CSS variables. You can use `globals` settings module to load prefix.
   6. If you used `$border-style` tokens, you need to replace them with direct values.
   7. If you used `$focus` token, you need to replace it with `$focus-ring` token.
   8. If you used `$grid-gutter` tokens, you need to replace them with `$grid-spacing` tokens.
4. That's it! You should now have your components updated to use the new tokens and themes.

Here is a simple example of how to update your component styles:

Before:

```scss
@use '@tokens' as tokens;

$color: tokens.$text-primary;
$gap: tokens.$space-400;
```

After:

```scss
@use '@global' as global-tokens;
@use '@lmc-eu/spirit-web/scss/settings/globals' as globals;

$color: var(--#{globals.$prefix}color-text-primary);
$gap: global-tokens.$space-500;
```

## Component Changes

### Button: `square` modifier renamed to `symmetrical`

Button `square` modifier was renamed to `symmetrical`.

#### Migration Guide

Instead of using `.Button--square`, use a `.Button--symmetrical`.

- `.Button--square` → `.Button--symmetrical`

---

[themes-decision]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/decisions/008-themes.md
