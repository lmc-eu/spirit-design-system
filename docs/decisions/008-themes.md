# Themes

Date: 2024-10-08

Status: accepted

## Context

Since the very beginning, the Spirit Design System has been using the concept of inverted tokens and component variants
to enable light content on dark backgrounds.

However, this approach has several drawbacks:

1. **Limited component support**: The inverted component variant need to be created manually for each component. This
   leads to a limited set of components that support the inverted theme.
2. **Number of tokens**: The inverted tokens are hard to maintain and can lead to inconsistencies. For example, the text
   color token `text-primary-default` needs an inverted variant `text-primary-inverted-default`. This leads to a lot of
   duplicated tokens and makes it hard to keep them in sync.
3. **Manual composition**: In a larger inverted composition, all components need to be switched to the inverted variant
   manually.
4. **Dark mode (un)readiness**: The concept of the inverted tokens and component variants is not flexible enough to
   support a dark mode. The name "inverted" is too specific and does not work for a dark mode where, from the design
   point of view, the inversion cannot be really applied.

## Decision

1. **Removal of inverted tokens and component variants.** In some cases, the inverted tokens will be replaced by new
   "neutral" tokens that are more flexible and can be used in both light and dark themes. In other cases, themes take
   over the responsibility of defining the colors.
2. **Introduction of themes.** To enable component independent, **scoped changes of appearance**, themes will be
   introduced. Themes are another layer of abstraction that can be applied to any design token. We decided to start with
   **theming the colors** and introducing **two light-mode themes** (with dark-mode themes to come in the future):
   1. default theme with dark text on light backgrounds for the primary page content,
   2. on-brand theme with light text on brand-colored backgrounds for branded sections like site header or hero sections.
3. **Removal of brand color component modifiers.** The brand colors will now be applied through a theme which can affect
   any component in the design system.

## Consequences

### Design Tokens

All design token names need to be carefully reviewed and renamed if necessary to be flexible enough within the new
theming system, which means **words suggesting the color brightness like "light", "dark", or "inverted" must be
avoided** in the token names. The new neutral tokens will now be used in the design system and the inverted tokens will
be removed.

### Components Migration

All components will be updated to use the new design tokens structure. All inverted component variants will need to be
replaced either with the new neutral variant or with the new themes.

### Unlimited Theming

As a result, the design system will be more flexible and able to support a dark mode in the future. Also, product
designers will be able to create new themes that can be easily applied throughout the design system, for example a
high-contrast theme or a theme for colored sections. In theory, the number of themes is unlimited, and it's mostly a
question of the design tool capabilities.
