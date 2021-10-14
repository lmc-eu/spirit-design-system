# Contributing

> A guide for Spirit contributors.

## File Structure

This is an example of a typical file structure of a component:

```
├── src
    ├── components
        ├── <ComponentName>
            ├── _<ComponentName>.scss — component's styling
            ├── _theme.scss — contains references to design tokens and variant maps
            ├── _tools.scss — Sass functions and mixins, mostly to generate variants
            ├── index.scss — component's Sass entry point
            └── README.md — documentation of the component
```

## Linking Components to Design Tokens

Components can (and should!) reuse Spirit design tokens.

Component's theme properties can be linked to design tokens. This way, the
appearance of individual components is always unified and coherent: **anytime
design tokens change, all components are updated consistently.**

Deciding which properties are linked to which design tokens is a subject of
discussion between Spirit developers and designers. Linking component
properties to design tokens needs to be done carefully **in order for the design
to work as a system.**

Default Spirit design tokens live in the `spirit-design-tokens` package.
Products may define their own design tokens as long as they preserve the same
structure and naming.

### Sass Implementation

From the implementation point of view, design tokens are Sass variables
organized in Sass modules. Within component styles, Sass modules with design
tokens are referred to just by filename. However, because the modules do not
exist in the place they are called in (the `spirit-design-tokens` is stored in
`node_modules`), the correct include path for the desired set of design tokens
must be provided on build time (head to `README` to see how). This is the only
way how Sass modules can be affected from outside, without giving in their
advantages.

#### Example

At first, let's define a reference to design tokens in component's theme:

```scss
// src/components/Button/_theme.scss

@use '@tokens' as tokens;

$font-family: tokens.$font-family-default;
```

Use the reference from the theme in component styles:

```scss
// src/components/Button/_Button.scss

@use 'theme';

.lmc-Button {
    font-family: theme.$font-family;
}
```

## The Purpose of `_theme.scss` and `_tools.scss`

To keep actual stylesheet of the component as clean as possible, definitions of
Sass variables, functions and mixins related to the component always have their
place in standalone Sass partials, namely `_theme.scss` (theme) and
`_tools.scss` (tools).

### Theme

Component's theme serves as:

1. a centralized storage of component's references to **design tokens** (see
   further),
2. a place where **component's visual variants** are defined as Sass maps, so we
   can iterate over them later on,
3. a source of definition of other Sass variables of the component.

### Tools

Similarly, component's tools serve as a storage of component-scoped:

1. Sass **mixins,** mostly to generate visual variants from theme,
2. Sass **functions.**

## FAQ

### 👉 What are design tokens?

Design tokens are special variables that define the smallest pieces of a design
language, especially colors, typography, or spacing. Design tokens enable
adjusting the common parts of visual design.

### 👉 What are Sass modules?

Sass modules are a [new way of organizing Sass source][Sass modules]. Aside
from new methods of structuring and loading Sass files, Sass modules offer a
great portion of encapsulation, traceability, and more.

### 👉 Does `@use` behave the same way as `@import`?

In most situations, no. Most importantly, while `@import` loads everything into
global context, `@use` is scoped and works more like `import` in [ES modules].

### 👉 Why are `@tokens` prefixed with `@`?

By prefixing a Sass file name with `@`, we communicate that such file is loaded
in a special way.

In order for developers to know the file behaves differently than usual Sass
partials, a `@` prefix is added to mark this behavior both in filesystem and
inside Sass files. As a result, it's clear why e.g. `@use 'tools'` refers to
a local file and `@use '@tokens'` does not. However, **it's only a naming
convention,** there is no special tooling or configuration for Sass partials
starting with `@`.

Imported module **needs to be renamed to be compatible with SCSS** syntax
when it's used later on. That's why `@use '@tokens' as tokens`.

Look at the following snippets and compare which one offers better
comprehensibility.

Without `@` prefix:

```scss
// _Button.scss

@use 'tools'; // Calls './_tools.scss'. You don't have to explain this to me.
@use 'tokens'; // Wait, this file doesn't exist… What's going on here? Is it
// an error?
```

With `@` prefix:

```scss
// _Button.scss

@use 'tools'; // Calls './_tools.scss'.
@use '@tokens' as tokens; // OK, './_@tokens.scss' is not here, but the at-sign
// prefix suggests a special behavior. Maybe I'll learn more in the docs?
```

[Sass modules]: https://sass-lang.com/blog/the-module-system-is-launched
[ES modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
