# Tokens Structure

Date: 2024-11-19

Status: accepted

## Context

Our Design System uses design tokens.

Since Charm Version of our Design System, we use Figma as a single source of truth for our design tokens.
We use Figma Variables and Styles to define all tokens and import them into the codebase. No tokens are defined
outside of Figma.

Previously, we used Supernova as a single source of truth for our design tokens, where part of the tokens was
imported from Figma and the rest was hardcoded in Supernova. With Figma Variables we are able to define all tokens
in Figma and import them into the codebase. This way, we have a single source of truth for all tokens.

Figma Variables also introduced the possibility to define multiple themes in Figma. This way, we were able to
avoid confusion with `inverted` tokens and are able to solve this using themes. See the [Themes Decision](008-themes.md)
for more information about this.

With Figma Variables, we unified the structure of our tokens in Figma and in the codebase.

## Decision

1. We divide tokens into `Global Tokens` and `Theme Tokens`. The `Global Tokens` are non-themed tokens – their
   values are the same in all themes, for example breakpoints. The `Theme Tokens` have the same structure, but in each theme,
   their value can differ, for example colors. See the [Themes Decision](008-themes.md) for more information about themes.
2. Global tokens are divided into `Borders`, `Gradients`, `Other`, `Radii`, `Shadows`, `Spacing` and `Typography`. Each category
   has its own file and contains tokens that are related to the category. The `Other` category contains tokens that do not fit
   into any other category.
3. The `Gradients` and `Shadows` tokens use CSS variables to define the colors. This allows us to theme them.
4. We use scales for tokens that have multiple values. For example, the `Spacing` category contains `space-0`, `space-100`, `space-200`, etc.
   without any limits. We use hundreds for the scale, so our users have plenty of space to add their own values between the predefined ones.
5. If tokens values differ for each breakpoint, we use object with breakpoint keys. For example, the `Typography` category contains
   styles where each style has a different configuration for each breakpoint.
6. The `Theme Tokens` contains directories for each theme.
7. In `Theme Tokens` we provide a list of SCSS variables and also a mixin with CSS variables. The mixin is used to generate CSS variables
   for the theme. The SCSS variables are used to define the values of the tokens.

### Color Token Structure

These are decisions related to the color tokens:

1.  We decided to create a `component` group which contains tokens for unique components. This way, we can easily find the colors
    that are used in a specific component and we know that these colors are not used anywhere else. And if they are, we
    know it's an issue.
2.  We decided to add the `-state-` infix to the interaction state tokens before the state name. This way, we know which tokens
    are used for states and are related to each other.
3.  We decided to have suffixes `-basic` and `-subtle` for tokens for components which need two different contrast levels.
4.  We decided to have `form-field` group which contains tokens for form fields. This group has a subgroup `filled` for
    tokens which are used for filled part of the form field. In the future, we can add more subgroups for different form field types.
5.  We decided to have a `disabled` group which covers the disabled state and is used for all components that can be disabled.
6.  We decided to have a `neutral` group which contains tokens for neutral colors.
7.  We decided to have a `selected` group which contains tokens for selected items.
8.  We decided to have a single-purpose groups for tokens that are used only in one place. For example, we have a `text`, `background`,
    `link`, etc. groups.
9.  We decided to create color tokens for gradients and shadows. These tokens are used in the `Gradients` and `Shadows` categories.
    To support multiple shadow or gradients colors in one `Gradients` or `Shadows` token, we use `-color-01`, `-color-02`, etc. suffixes.
10. In `Shadows` tokens, we also have a `focus-ring` token which is used for focus rings.
11. Based on our [Dictionaries](../DICTIONARIES.md), we structure our tokens in groups and subgroups. For example, `emotion` colors
    contains `success`, `warning`, `error` and `informative` subgroups or `button` colors contains `primary`, `secondary`, `tertiary`.

## Consequences

By following this structure, we can easily find tokens and we know where to add new tokens. We can also easily add new themes
and we know where to add new tokens for the themes. This structure is hopefully easy to understand and maintain.
