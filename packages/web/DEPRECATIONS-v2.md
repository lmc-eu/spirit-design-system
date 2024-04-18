# Deprecations List

Following deprecations and feature flags will be removed in version 2 of the _spirit-web_ package.

> Please follow these steps to safely upgrade your design system to Spirit Design System v2 components.

[What are deprecations?][readme-deprecations]

[What are feature flags?][readme-feature-flags]

## Feature Flags

### Tooltip Data Selector Controlled Placement

The feature flag enabling the data selector controlled placement (`data-spirit-placement-controlled`)
for tooltip will be removed and the data selector controlled placement will be enabled by default.

### Alert Bordered

The feature flag enabling the bordered variant of alert will be removed and the bordered variant will
be enabled by default.

## Deprecations

### Tooltip and Dropdown Placements

The `Tooltip` and `Dropdown` components will no longer support non-flows relative placements.

Also, placement classes for Tooltip and Dropdown will be removed.

#### Migration Guide

Instead of using `Tooltip--top`/`Dropdown--top` or `Tooltip--topLeft`/`Dropdown--topLeft`,
use data attribute like`data-spirit-placement="top"` or `data-spirit-placement="top-start"`.
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

### Dropdown Combined Placements

Combined placement classes for dropdown will be removed.

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

### Modal (Non)Scrollable

The `.ModalDialog--nonScrollable` modifier will be removed and the ModalDialog will be made non-scrollable by default.

#### Migration Guide

In the new version, use the `.ModalDialog--scrollable` modifier class to make the ModalDialog scrollable.

- `.ModalDialog` → `.ModalDialog .ModalDialog--scrollable`

### GridSpan

The `GridSpan` component will be removed and the `GridItem` component should be used instead.

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

[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#deprecations
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
