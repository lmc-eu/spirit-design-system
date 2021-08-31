# Theming

Theming can be basically done on two levels:

1. **Design tokens.** Special variables that define the smallest pieces of a
   design language, especially colors, typography, or spacing. Design tokens
   enable adjusting the **common parts** of visual design.

2. **Component themes.** While components make use of design tokens, they can
   also feature their own, **component specific** styling which may or may not
   further reuse design tokens.

## How It Works

Design tokens and component themes are Sass modules that are referred to just by
their filenames. The correct include path for the desired theming is then being
declared on build time.

## File Structure

```
- src
  - components
    - …
    - Button
      - _Button.scss
      - _theme.scss — default theme, contains Sass variables with !default flag
      - _tools.scss
      - index.scss
      - README.md
    - …
  - themes
    - default
      - …
      - _Button.theme.scss — just includes component's _theme.scss
      - …
    - products – directory with product specific themes
      - …
      - jobs
        - …
        - _Button.theme.scss – includes and configures component's _theme.scss
        - …
      - …
```

## Default Theme

All theming options must be always declared in `_theme.scss` file in the
component's  directory. It may be convenient to directly use the `_theme.scss`
file during development:

```scss
// src/components/Button/_Button.scss

@use 'theme'; // Needs to be changed to 'Button.theme' later.

.lmc-Button {
    font-family: theme.$font-family;
}
```

All themeable properties in the default `_theme.scss` must end with the
`!default` flag, marking the variable as writeable:

```scss
// src/components/Button/_theme.scss

$font-family: 'Open Sans', sans-serif !default;
```

To make theming possible, `_theme.scss` needs to be loaded through an
intermediate step: the `_Button.theme.scss` file:

```scss
// src/components/Button/_Button.scss

@use 'Button.theme' as theme;

.lmc-Button {
    font-family: theme.$font-family;
}
```

This file is stored in a different location than the component itself,
depending on the brand. Default Spirit theme only includes the `_theme.scss`
file, applying component's default styling:

```scss
// src/themes/default/_Button.theme.scss

@forward '../../components/Button/theme';
```

### Why `Button.theme`?

Component themes are named as `_<ComponentName>.theme.scss` for several reasons:

1. Theme filename must not exist within the component's directory, otherwise it
   would take precedence in loading and actual themes would never be picked up.
   That's why a plain `theme` wouldn't work.

2. Theme filename must be unique across the whole project because it lives
   outside the safe scope guarded by component's directory. That's why component
   name `Button` is included.

3. Putting 1 and 2 together, theme filename composes of component name and the
   `theme` infix. This way we can have unique theme files for each component
   while keeping the directory structure relatively simple.

## Product Specific Theme

Product specific theming configures the `_theme.scss` file with product specific
options:

```scss
// src/themes/products/jobs/_Button.theme.scss

@forward '../../../components/Button/theme' with (
    $padding-x: 24px,
    $padding-y: 0,
    $border-radius: 0,
    $line-height: 40px,
);
```

## Reusing Design Tokens

Both default and product specific theme can reuse design tokens:

```scss
// src/components/Button/_theme.scss

@use 'tokens';

$font-family: tokens.$font-family-default !default;
```

```scss
// src/themes/products/jobs/_Button.theme.scss

@use 'tokens';

@forward '../../../components/Button/theme' with (
    $primary-default-background: tokens.$action-primary-default,
);
```

## Compilation

Finally, the correct include path for design tokens and component themes is
being set on build time. This is defined in `package.json` with the
`--load-path` option:

```json
{
  "scripts": {
    "css:compile:jobs": "sass --load-path=node_modules/@lmc-eu/spirit-design-tokens/src/products/jobs/scss --load-path=src/themes/products/jobs \"src/components/index.scss\" dist/css/jobs/components.css"
  }
}
```
