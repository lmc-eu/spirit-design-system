# Flex

Flex is a component that allows you to create a flexible one-dimensional layout.

## Basic Usage

Row layout:

```html
<div class="Flex Flex--row Flex--noWrap Flex--alignmentXStretch Flex--alignmentYStretch">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Column layout:

```html
<div class="Flex Flex--column Flex--noWrap Flex--alignmentXStretch Flex--alignmentYStretch">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Usage with a list:

```html
<ul class="Flex Flex--column Flex--noWrap Flex--alignmentXStretch Flex--alignmentYStretch">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

ℹ️ For the row layout, the Flex component uses the [`display: flex`][mdn-display-flex] CSS property. For the column
layout, [`display: grid`][mdn-display-grid] is used because of technical advantages: better overflow control or
alignment API consistency.

## Responsive Direction

To create a responsive layout, use the `tablet` and `desktop` infixes, e.g. `Flex--tablet--row` or `Flex--desktop--column`.

```html
<div class="Flex Flex--column Flex--tablet--row Flex--noWrap Flex--alignmentXStretch Flex--alignmentYStretch">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Wrapping

By default, Flex items will not wrap (the `Flex--noWrap` modifier). To enable wrapping on all breakpoints, use the
`Flex--wrap` modifier class instead.

```html
<div class="Flex Flex--row Flex--wrap Flex--alignmentXStretch Flex--alignmentYStretch">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Responsive Wrapping

To create a responsive layout, use the `tablet` and `desktop` infixes, e.g. `Flex--tablet--wrap` or `Flex--desktop--wrap`.

```html
<div
  class="
    Flex
    Flex--row
    Flex--wrap
    Flex--tablet--noWrap
    Flex--desktop--wrap
    Flex--alignmentXStretch
    Flex--alignmentYStretch
  "
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Alignment

### Horizontal Alignment

Flex can be horizontally aligned as stretched (default), or justified to the left, center, or right. Additionally, you
can evenly distribute the items using the space-between value. These values come from the extended
[alignmentX dictionary][dictionary-alignment]. Using a corresponding modifier class will align the Flex items accordingly:

- `Flex--alignmentXStretch` (default)
- `Flex--alignmentXLeft`
- `Flex--alignmentXCenter`
- `Flex--alignmentXRight`
- `Flex--alignmentXSpaceBetween`

### Vertical Alignment

Similarly to the horizontal alignment, Flex can be vertically aligned as stretched (default), or justified to the top,
center, or bottom. There is also an option to align the items to the baseline. These values come from the extended
[alignmentY dictionary][dictionary-alignment]. Using a corresponding modifier class will align the Flex items accordingly:

- `Flex--alignmentYStretch` (default)
- `Flex--alignmentYTop`
- `Flex--alignmentYCenter`
- `Flex--alignmentYBottom`
- `Flex--alignmentYBaseline`

Example:

```html
<div class="Flex Flex--row Flex--noWrap Flex--alignmentXRight Flex--alignmentYBaseline">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Responsive Alignment

To create a responsive layout, use the `tablet` and `desktop` infixes, e.g. `Flex--tablet--alignmentXRight` or
`Flex--desktop--alignmentYBaseline`.

Example:

```html
<div
  class="
    Flex
    Flex--row
    Flex--noWrap
    Flex--alignmentXLeft
    Flex--alignmentYStretch
    Flex--tablet--alignmentXSpaceBetween
    Flex--tablet--alignmentYBaseline
  "
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Custom Spacing

Use CSS custom properties to define custom spacing between items. Set the `--flex-spacing` property to one of the
spacing token values defined on the `:root` element, e.g. `--flex-spacing: var(--spirit-space-800)`.
This will set the spacing to `var(--spirit-space-800)` for all breakpoints.

```html
<div
  class="Flex Flex--row Flex--noWrap Flex--alignmentXStretch Flex--alignmentYStretch"
  style="--flex-spacing: var(--spirit-space-1200)"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

ℹ️ We highly discourage from using absolute values like `--flex-spacing: 1rem`. It will work, but you will lose
the consistency between the spacing and the design tokens.

If you need to set custom spacing from a specific breakpoint, use the `--flex-spacing-{breakpoint}` property,
e.g. `--flex-spacing-tablet: var(--spirit-space-800)`. The breakpoint value must be one of the breakpoint tokens
except for the `mobile` breakpoint you don't need the suffix at all. The spacing is set to all larger breakpoints
automatically if you don't set them explicitly. E.g. if you set only `--flex-spacing-tablet: var(--spirit-space-800)`
the spacing will be set to `var(--spirit-space-800)` for `tablet` and `desktop` breakpoints while on the `mobile`
breakpoint the default spacing will be used.

Custom spacing from tablet up:

```html
<div
  class="Flex Flex--row Flex--noWrap Flex--alignmentXStretch Flex--alignmentYStretch"
  style="--flex-spacing-tablet: var(--spirit-space-1200)"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Custom spacing for each breakpoint:

```html
<div
  class="Flex Flex--row Flex--noWrap Flex--alignmentXStretch Flex--alignmentYStretch"
  style="--flex-spacing: var(--spirit-space-800); --flex-spacing-tablet: var(--spirit-space-1000); --flex-spacing-desktop: var(--spirit-space-1200)"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

[mdn-display-flex]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
[mdn-display-grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment