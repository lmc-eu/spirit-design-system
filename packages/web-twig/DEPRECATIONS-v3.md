# Deprecations List

Following deprecations will be removed in version 3 of the _spirit-web-twig_ package.

> Please follow these steps to safely upgrade your design system to Spirit Design System v3 components.

[What are deprecations?][readme-deprecations]

## Deprecations

### Required `id` Prop For Form Components

The `id` prop will be required for all form components.

Related components:

- `Checkbox`
- `HelperText`
- `Radio`
- `Select`
- `ValidationText`

#### Migration Guide

Add `id` prop to the form components.

### Dropdown `id` Prop

The `id` prop will be mandatory for the `Dropdown` component.

#### Migration Guide

Add `id` prop to the `Dropdown` component.

### Tooltip and Dropdown Placements

The `Tooltip` and `Dropdown` components no longer support non-flow-relative placements.

#### Migration Guide

Instead of using `top-left` or `left-bottom` and etc, use `top-start` or `left-end` and so on.
See [Placement dictionary][dictionary-placement] for more details.

- `<Tooltip placement="top-left" … />` → `<Tooltip placement="top-start" … />`
- `<Tooltip placement="top-right" … />` → `<Tooltip placement="top-end" … />`
- `<Tooltip placement="right-top" … />` → `<Tooltip placement="right-start" … />`
- `<Tooltip placement="right-bottom" … />` → `<Tooltip placement="right-end" … />`
- `<Tooltip placement="bottom-left" … />` → `<Tooltip placement="bottom-start" … />`
- `<Tooltip placement="bottom-right" … />` → `<Tooltip placement="bottom-end" … />`
- `<Tooltip placement="left-top" … />` → `<Tooltip placement="left-start" … />`
- `<Tooltip placement="left-bottom" … />` → `<Tooltip placement="left-end" … />`
- `<Dropdown placement="top-left" … />` → `<Dropdown placement="top-start" … />`
- `<Dropdown placement="top-right" … />` → `<Dropdown placement="top-end" … />`
- `<Dropdown placement="right-top" … />` → `<Dropdown placement="right-start" … />`
- `<Dropdown placement="right-bottom" … />` → `<Dropdown placement="right-end" … />`
- `<Dropdown placement="bottom-left" … />` → `<Dropdown placement="bottom-start" … />`
- `<Dropdown placement="bottom-right" … />` → `<Dropdown placement="bottom-end" … />`
- `<Dropdown placement="left-top" … />` → `<Dropdown placement="left-start" … />`
- `<Dropdown placement="left-bottom" … />` → `<Dropdown placement="left-end" … />`

### Tooltip Composition

The `Tooltip` component structure will be changed, so `Tooltip` (formerly the optional
`TooltipWrapper`) becomes a mandatory wrapping component. Similarly, `Tooltip` (the tip
itself) has been renamed to `TooltipPopover`.

#### Migration Guide

Use `TooltipPopover` in you project.

Instead of:

```twig
<TooltipWrapper>
  <Link href="#" aria-describedby="my-tooltip">
    I have a tooltip
  </Link>
  <Tooltip id="my-tooltip">
    Hello there!
  </Tooltip>
</TooltipWrapper>
```

Use:

```twig
<Tooltip>
  <a
    href="#"
    data-spirit-toggle="tooltip"
    data-spirit-target="my-tooltip"
    aria-describedby="my-tooltip"
  >
    I have a tooltip
  </a>
  <TooltipPopover id="my-tooltip">
    Hello there!
  </TooltipPopover>
</Tooltip>
```

See [`Tooltip` documentation][tooltip-readme] for more details and examples.

### Breadcrumbs `goBackTitle` Prop

The `goBackTitle` prop will be required for the `Breadcrumbs` component.

#### Migration Guide

Add `goBackTitle` prop to the `Breadcrumbs` component.

### Header Abstracts Class and Style

The `style` and `class` props will be removed from these `Header` abstracts:

- `Header/_abstracts/Button`
- `Header/_abstracts/Element`
- `Header/_abstracts/Link`

Use `UNSAFE_style` and `UNSAFE_className` instead.

#### Migration Guide

Replace `style` with `UNSAFE_style` and `class` with `UNSAFE_className`.

### Grid Breakpoint Props

The `cols` prop in the `Grid` now supports object values for different breakpoints.
The `tablet` and `desktop` props will be removed in the next major version.

#### Migration Guide

Replace `tablet` and `desktop` props with the `cols` object prop.

- `<Grid cols="2" tablet="3" … />` → `<Grid cols={{ mobile: 2, tablet: 3 }} … />`
- `<Grid desktop="3" … />` → `<Grid cols={{ desktop: 3 }} … />`
- `<Grid cols="1" tablet="2" desktop="3" … />` → `<Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} … />`

### ModalDialog `isScrollable` Prop

The `isScrollable` prop will be set to `false` by default in the next major release and the ModalDialog will be made
non-scrollable by default. It will be possible to re-enable the inside scrolling by adding the `isScrollable` prop.

#### Migration Guide

Add `isScrollable` prop to the `ModalDialog` component.

### ModalDialog Uniform Appearance

The uniform `ModalDialog` appearance will replace current behavior in the next major release. Current mobile appearance will
remain accessible via the `isDockedOnMobile` property.

#### Migration Guide

Add `isDockedOnMobile` prop to the `ModalDialog` component.

### Alert `danger` Icon

The `warning` icon as a fallback for the `danger` color in the Alert component will be removed in favor of the `danger` icon.
Please, add the `danger` icon to your project's assets.

#### Migration Guide

Either install newer version of the `spirit-icons` package or add `danger` named icon to your project's icons.

### GridSpan Component

The `GridSpan` component is deprecated and will be removed in the next major version. Use `GridItem` instead.

#### Migration Guide

The hardest part in the migration is to get the `columnStart` value. The equation is `1 + (columns - over) / 2`,
where `columns` is the number of columns in the grid and `over` is the value from the `GridSpan` component.
The default number of columns is 12, so the equation is `1 + (12 - over) / 2` most of the time.

1. Replace `GridSpan` with `GridItem`.
2. Calculate and set the `columnStart` value `1 + (columns - over) / 2`, in our 12-column grid, the equation is `1 + (12 - over) / 2`, where `over` is the value from the `GridSpan` component.
3. Set the `columnEnd` value to `span over` or you can use `columnStart + over`.
4. If you use responsive props, calculate the values for each breakpoint and pass them to the `GridItem` component `columnStart` and `columnEnd` props as an object.
5. Remove the `over` prop.

Examples:

- `<GridSpan over="4">…</GridSpan>` → `<GridItem columnStart="5" columnEnd="span 4">…</GridItem>`
  - `columnStart` = 1 + (12 - 4) / 2 = 5
- `<GridSpan over="6">…</GridSpan>` → `<GridItem columnStart="4" columnEnd="span 6">…</GridItem>`
  - `columnStart` = 1 + (12 - 6) / 2 = 4
- `<GridSpan over="8" tablet="6" desktop="4">…</GridSpan>` → `<GridItem columnStart="{{ { mobile: 3, tablet: 4, desktop: 5 } }}" columnEnd="{{ { mobile: 'span 8', tablet: 'span 6', desktop: 'span 4' } }}">…</GridItem>`
  - `columnStart` = 1 + (12 - 8) / 2 = 3
  - `columnStart` = 1 + (12 - 6) / 2 = 4
  - `columnStart` = 1 + (12 - 4) / 2 = 5

[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
[dropdown-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Dropdown/README.md
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#deprecations
[tooltip-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Tooltip/README.md
