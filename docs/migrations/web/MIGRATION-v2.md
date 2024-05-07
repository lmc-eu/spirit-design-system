# Migration Guide WIP

Introducing version 2 of the _spirit-web_ package

> Please follow these steps to safely upgrade to Spirit Design System v2 components.

## Overview

- [General Changes](#general-changes)
  - [CSS Variables Component Prefix](#css-variables-component-prefix)
  - [Placement in Tooltip and Dropdown](#placement-in-tooltip-and-dropdown)
- [Component Changes](#component-changes)
  - [Alert: Bordered Feature Flag](#alert-bordered-feature-flag)
  - [Dropdown: Combined Placements](#dropdown-combined-placements)
  - [Dropdown: Shadow Feature Flag](#dropdown-shadow-feature-flag)
  - [Modal: (Non)Scrollable](#modal-nonscrollable)
  - [Modal: Uniform Variant Feature Flag](#modal-uniform-variant-feature-flag)
  - [Grid: GridSpan Component](#grid-gridspan-component)
  - [Tooltip: Data Selector Controlled Placement Feature Flag](#tooltip-data-selector-controlled-placement-feature-flag)

## General Changes

### CSS Variables Component Prefix

All CSS variables in the components now have a component name prefix.

- In Stack, `--gap` is now `--stack-gap`.
- In the `.text-truncate-multiline` helper, `--lines` is now `--text-truncate-lines`.
- The gradient `--angle` is now `--gradient-angle`.

#### Migration Guide

Update the CSS variables in your project to use the new component name prefix.

- `--gap` → `--stack-gap`
- `--lines` → `--text-truncate-lines`
- `--angle` → `--gradient-angle`

### Placement in Tooltip and Dropdown

The `Tooltip` and `Dropdown` components no longer support non-flow-relative placements.

Also, placement classes for Tooltip and Dropdown were removed.

#### Migration Guide

Instead of using `Tooltip--top`/`Dropdown--top` or `Tooltip--topLeft`/`Dropdown--topLeft`,
use data attribute like `data-spirit-placement="top"` or `data-spirit-placement="top-start"`.
See [Placement dictionary][dictionary-placement] for more details.

- `.Tooltip--topLeft` → `data-spirit-placement="top-start"`
- `.Tooltip--top` → `data-spirit-placement="top"`
- `.Tooltip--topRight` → `data-spirit-placement="top-end"`
- `.Tooltip--rightTop` → `data-spirit-placement="right-start"`
- `.Tooltip--right` → `data-spirit-placement="right"`
- `.Tooltip--rightBottom` → `data-spirit-placement="right-end"`
- `.Tooltip--bottomRight` → `data-spirit-placement="bottom-end"`
- `.Tooltip--bottom` → `data-spirit-placement="bottom"`
- `.Tooltip--bottomLeft` → `data-spirit-placement="bottom-start"`
- `.Tooltip--leftBottom` → `data-spirit-placement="left-end"`
- `.Tooltip--left` → `data-spirit-placement="left"`
- `.Tooltip--leftTop` → `data-spirit-placement="left-start"`
- `.Dropdown--topLeft` → `data-spirit-placement="top-start"`
- `.Dropdown--top` → `data-spirit-placement="top"`
- `.Dropdown--topRight` → `data-spirit-placement="top-end"`
- `.Dropdown--rightTop` → `data-spirit-placement="right-start"`
- `.Dropdown--right` → `data-spirit-placement="right"`
- `.Dropdown--rightBottom` → `data-spirit-placement="right-end"`
- `.Dropdown--bottomRight` → `data-spirit-placement="bottom-end"`
- `.Dropdown--bottom` → `data-spirit-placement="bottom"`
- `.Dropdown--bottomLeft` → `data-spirit-placement="bottom-start"`
- `.Dropdown--leftBottom` → `data-spirit-placement="left-end"`
- `.Dropdown--left` → `data-spirit-placement="left"`
- `.Dropdown--leftTop` → `data-spirit-placement="left-start"`

## Component Changes

### Alert: Bordered Feature Flag

The feature flag enabling the bordered variant of alert was removed and the bordered variant
is the default.

#### Migration Guide

You can now safely delete the CSS class `.spirit-feature-alert-enable-bordered` and/or the Sass variable
`$alert-enable-bordered` from your project as they have no effect.

### Dropdown: Combined Placements

Combined placement classes for Dropdown were removed.

#### Migration Guide

Instead of using `.Dropdown--bottom.Dropdown--left`, use combination `bottom-start` in placement data attribute.

- `.Dropdown--top.Dropdown--left` → `data-spirit-placement="top-start"`
- `.Dropdown--top.Dropdown--right` → `data-spirit-placement="top-end"`
- `.Dropdown--bottom.Dropdown--left` → `data-spirit-placement="bottom-start"`
- `.Dropdown--bottom.Dropdown--right` → `data-spirit-placement="bottom-end"`
- `.Dropdown--left.Dropdown--top` → `data-spirit-placement="left-start"`
- `.Dropdown--left.Dropdown--bottom` → `data-spirit-placement="left-end"`
- `.Dropdown--right.Dropdown--top` → `data-spirit-placement="right-start"`
- `.Dropdown--right.Dropdown--bottom` → `data-spirit-placement="right-end"`

### Dropdown: Shadow Feature Flag

The feature flag enabling the dropdown shadow was removed and the enhanced
shadow is the default.

#### Migration Guide

You can now safely delete the CSS class `.spirit-feature-dropdown-enable-enhanced-shadow` and/or the Sass variable
`$dropdown-enable-enhanced-shadow` from your project as they have no effect.

### Modal: (Non)Scrollable

The `.ModalDialog--nonScrollable` modifier was removed and the ModalDialog is made non-scrollable by default.

#### Migration Guide

In the new version, use the `.ModalDialog--scrollable` modifier class to make the ModalDialog scrollable.

- `.ModalDialog` → `.ModalDialog .ModalDialog--scrollable`

### Modal: Uniform Variant Feature Flag

The feature flag enabling the uniform variant of modal was removed and the
uniform variant is the default.

#### Migration Guide

You can now safely delete the CSS class `.spirit-feature-modal-enable-uniform-dialog` and/or the Sass variable
`$modal-enable-uniform-dialog` from your project as they have no effect.

### Grid: GridSpan Component

The `GridSpan` component was removed and the `GridItem` component should be used instead.

#### Migration Guide

1. Replace `Grid__span` with `GridItem`.
2. Calculate and set the CSS variable `--grid-item-column-start` value `1 + (columns - over) / 2`, in our 12-column grid, the equation is `1 + (12 - over) / 2`, where `over` is the number from the `Grid__span--over-*` modifier.
3. Set the CSS variable `--grid-item-column-end` value to `span over` or you can use calculated `--grid-item-column-start + over`.
4. If you use responsive props, repeat the process for each breakpoint and set the values to the `--grid-item-column-start-breakpoint` and `--grid-item-column-end-breakpoint` variables.
5. Remove `Grid__span--*` modifier classes.

- `<div class="Grid__span Grid__span--over-4">…</div>` → `<div class="GridItem" style="--grid-item-column-start: 5; --grid-item-column-end: span 4;">…</div>`
  - `column-start` = 1 + (12 - 4) / 2 = 5
- `<div class="Grid__span Grid__span--over-6">…</div>` → `<div class="GridItem" style="--grid-item-column-start: 4; --grid-item-column-end: span 6;">…</div>`
  - `column-start` = 1 + (12 - 6) / 2 = 4
- `<div class="Grid__span Grid__span--over-8 Grid__span--tablet--over-6 Grid__span--desktop--over-4">…</div>` → `<div class="GridItem" style="--grid-item-column-start: 3; --grid-item-column-end: span 8; --grid-item-column-start-tablet: 4; --grid-item-column-end-tablet: span 6; --grid-item-column-start-desktop: 5; --grid-item-column-end-desktop: span 4;">…</div>`
  - `column-start` = 1 + (12 - 8) / 2 = 3
  - `column-start` = 1 + (12 - 6) / 2 = 4
  - `column-start` = 1 + (12 - 4) / 2 = 5

### Tooltip: Data-Selector-Controlled Placement Feature Flag

The feature flag enabling the data-selector-controlled placement (`data-spirit-placement-controlled`)
for tooltip was removed and the data-selector-controlled placement is the default.

#### Migration Guide

You can now safely delete the CSS class `.spirit-feature-tooltip-enable-data-placement` and/or the Sass variable
`$tooltip-enable-data-placement` from your project as they have no effect.

---

Please refer back to these instructions or reach out to our team if you encounter any issues during migration.

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#deprecations
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
