# Migration Guide WIP

Introducing version 3 of the _spirit-web-twig_ package

> Please follow these steps to safely upgrade to Spirit Design System v3 components.

## Overview

- [General Changes](#general-changes)
  - [Dropped Support for PHP 7.4](#dropped-support-for-php-74)
  - [Form Components Required `id` Prop](#form-components-required-id-prop)
  - [Placements in Tooltip and Dropdown](#placements-in-tooltip-and-dropdown)
- [Component Changes](#component-changes)
  - [Alert: `danger` Icon](#alert-danger-icon)
  - [Alert: `role="alert"`](#alert-rolealert)
  - [Breadcrumbs: `goBackTitle` Prop](#breadcrumbs-gobacktitle-prop)
  - [Dropdown: `id` Prop](#dropdown-id-prop)
  - [Dropdown: Components Naming](#dropdown-components-naming)
  - [Grid: Breakpoint Props](#grid-breakpoint-props)
  - [Grid: GridSpan Component](#grid-gridspan-component)
  - [Header: Abstracts Class and Style](#header-abstracts-class-and-style)
  - [Modal: ModalDialog `isScrollable` Prop](#modal-modaldialog-isscrollable-prop)
  - [Modal: ModalDialog Custom Height](#modal-modaldialog-custom-height)
  - [Modal: ModalDialog Uniform Appearance](#modal-modaldialog-uniform-appearance)
  - [Tabs: TabLink `target` Prop](#tabs-tablink-target-prop)
  - [Tooltip: Composition](#tooltip-composition)

## General Changes

### Dropped Support for PHP 7.4

The PHP 7.4 is no longer supported. The minimum required PHP version is 8.1.

### Form Components Required `id` Prop

The `id` prop is required for all form components.

Affected components:

- `Checkbox`
- `HelperText`
- `Radio`
- `Select`
- `ValidationText`

#### Migration Guide

Add `id` prop to the form components.

### Placements in Tooltip and Dropdown

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

## Component Changes

### Alert: `danger` Icon

The `danger` icon for `danger` color in the Alert component is now required.
Please, add the `danger` icon to your project's assets.

#### Migration Guide

Either install newer version of the `spirit-icons` package or add `danger` named icon to your project's icons.

### Alert: `role="alert"`

The `role="alert"` has been removed from the default setting of the component.

The alert role is used to communicate an important and usually time-sensitive message to the user. When this role is added to an element,
the browser will send out an accessible alert event to assistive technology products which can then notify the user.
The alert role should only be used for information that requires the user's immediate attention, which is typically
content that is dynamically displayed (such as form validation message etc.), not for content that appears on page load.
It should not be used on HTML that the user hasn't interacted with.

For more information see [ARIA: alert role][alert-role-documentation].

#### Migration Guide

In case you need to use the component as an information that requires the user's immediate attention,
you can use `role="alert"` as an [additional attribute][readme-additional-attributes].

### Breadcrumbs: `goBackTitle` Prop

The `goBackTitle` prop is required for the `Breadcrumbs` component.

#### Migration Guide

Add `goBackTitle` prop to the `Breadcrumbs` component.

### Dropdown: `id` Prop

The `id` prop is mandatory for the `Dropdown` component.

#### Migration Guide

Add `id` prop to the `Dropdown` component.

### Dropdown: Components Naming

In order to have the root component called `Dropdown`, we renamed
the `DropdownWrapper` component to `Dropdown` and the original
`Dropdown` component to `DropdownPopover`.

#### Migration Guide

1. Rename `DropdownWrapper` component to `Dropdown`.
2. Rename `Dropdown` component to `DropdownPopover`.

### Grid: Breakpoint Props

The `cols` prop in the `Grid` now supports object values for different breakpoints.
The `tablet` and `desktop` props were removed.

#### Migration Guide

Replace `tablet` and `desktop` props with the `cols` object prop.

- `<Grid cols="2" tablet="3" … />` → `<Grid cols={{ mobile: 2, tablet: 3 }} … />`
- `<Grid desktop="3" … />` → `<Grid cols={{ desktop: 3 }} … />`
- `<Grid cols="1" tablet="2" desktop="3" … />` → `<Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} … />`

### Grid: GridSpan Component

The `GridSpan` component was removed. Use `GridItem` instead.

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

### Header: Abstracts Class and Style

The `style` and `class` props were removed from these `Header` abstracts:

- `Header/_abstracts/Button`
- `Header/_abstracts/Element`
- `Header/_abstracts/Link`

Use `UNSAFE_style` and `UNSAFE_className` instead.

#### Migration Guide

Replace `style` with `UNSAFE_style` and `class` with `UNSAFE_className`.

### Modal: ModalDialog `isScrollable` Prop

The `isScrollable` prop is now set to `false` by default and the ModalDialog is non-scrollable by default.
It is possible to re-enable the inside scrolling by adding the `isScrollable` prop.

#### Migration Guide

Add `isScrollable` prop to the `ModalDialog` component.

If you use `ScrollView` for scrolling the content of your modal, you must also make the
`ModalDialog` scrollable by setting the `isScrollable` prop.

### Modal: ModalDialog Custom Height

The `preferredHeightOnMobile` and `preferredHeightFromTabletUp` props were removed and
replaced with one prop `height` which accepts either a single value or
object with breakpoint keys and values.

Also, the prop `maxHeightFromTabletUp` was removed and replaced with the `maxHeight` prop,
which also accepts either a single value or object with breakpoint keys and values.

#### Migration Guide

Update the `preferredHeightOnMobile` and `preferredHeightFromTabletUp` props to the new `height` prop.

- `<ModalDialog preferredHeightOnMobile="333px" … />` → `<ModalDialog height="333px" … />`
- `<ModalDialog preferredHeightFromTabletUp="444px" … />` → `<ModalDialog height="{{ { tablet: '444px' } }}" … />`
- `<ModalDialog preferredHeightOnMobile="333px" preferredHeightFromTabletUp="444px" … />` → `<ModalDialog height="{{ { mobile: '333px', tablet: '444px' } }}" … />`

Update the `maxHeightFromTabletUp` prop to the new `maxHeight` prop.

- `<ModalDialog maxHeightFromTabletUp="555px" … />` → `<ModalDialog maxHeight="{{ { tablet: '555px' } }}" … />`

### Modal: ModalDialog Uniform Appearance

The uniform `ModalDialog` appearance replaced the current behavior. Current mobile appearance
remains accessible via the `isDockedOnMobile` property.

#### Migration Guide

Add `isDockedOnMobile` prop to the `ModalDialog` component.

### Tabs: TabLink `target` Prop

The `target` prop was renamed to `targetPaneId` in the `TabLink` component.

The reason for this change is to avoid confusion with the
[`target` attribute][mdn-anchor-target] in the anchor tag.

#### Migration Guide

Replace `target` with `targetPaneId` in the `TabLink` component.

### Tooltip: Composition

The `Tooltip` component structure was changed, so `Tooltip` (formerly the optional
`TooltipWrapper`) is now a mandatory wrapping component. Similarly, `Tooltip` (the tip
itself) was renamed to `TooltipPopover`.

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

---

Please refer back to this guide or reach out to our team if you encounter any issues during migration.

[alert-role-documentation]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
[dropdown-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Dropdown/README.md
[mdn-anchor-target]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#deprecations
[tooltip-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Tooltip/README.md
