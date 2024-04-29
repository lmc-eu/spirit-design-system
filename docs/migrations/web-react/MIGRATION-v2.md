# Migration Guide WIP

Introducing version 2 of the _spirit-web-react_ package

> Please follow these steps to safely upgrade to Spirit Design System v2 components.

## Overview

- [General Changes](#general-changes)
  - [Form Components Required `id` Prop](#form-components-required-id-prop)
  - [Placements in Tooltip and Dropdown](#placements-in-tooltip-and-dropdown)
  - [The `id` Prop in Dropdown and Collapse](#the-id-prop-in-dropdown-and-collapse)
- [Component Changes](#component-changes)
  - [Alert: `danger` Icon](#alert-danger-icon)
  - [Alert: `role="alert"`](#alert-rolealert)
  - [FileUploader: FileUploaderAttachment `buttonLabel` and `editButtonLabel` Props](#fileuploader-fileuploaderattachment-buttonlabel-and-editbuttonlabel-props)
  - [Dropdown: Refactored](#dropdown-refactored)
  - [Grid: Breakpoint Props](#grid-breakpoint-props)
  - [Grid: GridSpan Component](#grid-gridspan-component)
  - [Modal: ModalDialog `isExpandedOnMobile` Prop](#modal-modaldialog-isexpandedonmobile-prop)
  - [Modal: ModalDialog `isScrollable` Prop](#modal-modaldialog-isscrollable-prop)
  - [Modal: ModalDialog Uniform Appearance](#modal-modaldialog-uniform-appearance)
  - [TextField: `label` prop](#textfield-label-prop)
  - [Tooltip: `off` Placement](#tooltip-off-placement)
  - [Tooltip: Refactored](#tooltip-refactored)
  - [TooltipModern](#tooltipmodern)

## General Changes

### Form Components Required `id` Prop

The `id` prop is required for all form components.

Affected components:

- `Checkbox`
- `FieldGroup`
- `FileUploader`
- `Radio`
- `Select`
- `TextArea`
- `TextField`

#### Migration Guide

Add `id` prop to the form components.

### Placements in Tooltip and Dropdown

The `Tooltip` and `Dropdown` components no longer support non-flow-relative placements.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/dropdown-tooltip-flow-placement
```

See [Codemods documentation][readme-codemods] for more details.

Or manually edit your usages of Tooltip and Dropdown. Instead of using `top-left` or
`left-bottom` and etc, use `top-start` or `left-end` and so on.
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

### The `id` Prop in Dropdown and Collapse

The `id` prop are mandatory for the `Dropdown` and `Collapse` components.

#### Migration Guide

Add `id` prop to the `Dropdown` component.
Add `id` prop to the `Collapse` component.

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

### FileUploader: FileUploaderAttachment `buttonLabel` and `editButtonLabel` Props

The `buttonLabel` and `editButtonLabel` props were removed from the `FileUploaderAttachment` component.
Use `removeText` and `editText` props instead.

#### Migration Guide

Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/fileuploader-prop-names
```

See [Codemods documentation][readme-codemods] for more details.

Or manually replace the props in your project.

- `<FileUploaderAttachment buttonLabel="Remove this attachment" … />` → `<FileUploaderAttachment removeText="Remove this attachment" … />`
- `<FileUploaderAttachment editButtonLabel="Edit this attachment" … />` → `<FileUploaderAttachment editText="Edit this attachment" … />`

### Dropdown: Refactored

The `Dropdown` component was refactored and new structure and API were introduced.

#### Migration Guide

See [`Dropdown` documentation][dropdown-readme] for more details and examples.
The new `Dropdown` has a different API.

Instead of:

```jsx
<Dropdown id="DropdownExample" renderTrigger={({ trigger }) => <Button {...trigger}>Trigger</Button>}>
  …
</Dropdown>
```

Use:

```jsx
const [isOpen, setIsOpen] = React.useState(false);
const onToggle = () => setIsOpen(!isOpen);

<Dropdown id="DropdownExample" isOpen={isOpen} onToggle={onToggle}>
  <DropdownTrigger elementType={Button}>Trigger button</DropdownTrigger>
  <DropdownPopover>…</DropdownPopover>
</Dropdown>;
```

If you are still using the `DropdownModern` component name instead of `Dropdown`, you can use codemode to automatically update your code.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/dropdownmodern-component-name
```

### Grid: Breakpoint Props

The `cols` prop in the `Grid` now supports object values for different breakpoints.
The `tablet` and `desktop` props were removed.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/grid-breakpoint-props
```

See [Codemods documentation][readme-codemods] for more details.

Or manually replace `tablet` and `desktop` props with the `cols` object prop.

- `<Grid cols="2" tablet="3" … />` → `<Grid cols={{ mobile: 2, tablet: 3 }} … />`
- `<Grid desktop="3" … />` → `<Grid cols={{ desktop: 3 }} … />`
- `<Grid cols="1" tablet="2" desktop="3" … />` → `<Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} … />`

### Grid: GridSpan Component

The `GridSpan` component was removed. Use `GridItem` instead.

#### Migration Guide

Use our codemod to automatically migrate your code.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/grid-gridspan
```

See [Codemods documentation][readme-codemods] for more details.

Or follow these steps:

The hardest part in the migration is to get the `columnStart` value. The equation is `1 + (columns - over) / 2`,
where `columns` is the number of columns in the grid and `over` is the value from the `GridSpan` component.
The default number of columns is 12, so the equation is `1 + (12 - over) / 2` most of the time.

1. Replace `GridSpan` with `GridItem`.
2. Calculate and set the `columnStart` value as `1 + (columns - over) / 2`. In our 12-column grid, the equation is `1 + (12 - over) / 2`, where `over` is the value from the `GridSpan` component.
3. Set the `columnEnd` value to `span over` or use `columnStart + over`.
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

### Modal: ModalDialog `isExpandedOnMobile` Prop

The `isExpandedOnMobile` prop is set to `true` by default and the ModalDialog is expanded on mobile
by default. It is possible to re-collapse the inside by setting the `isExpandedOnMobile` prop
to `false`.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-isexpandedonmobile-prop
```

See [Codemods documentation][readme-codemods] for more details.

Or manually add `isExpandedOnMobile={false}` prop to the `ModalDialog` component to keep the current behavior.

### Modal: ModalDialog `isScrollable` Prop

The `isScrollable` prop is now set to `false` by default and the ModalDialog is non-scrollable by default.
It is possible to re-enable the inside scrolling by adding the `isScrollable` prop.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-iscrollable-prop
```

See [Codemods documentation][readme-codemods] for more details.

Or manually add `isScrollable` prop to the `ModalDialog` component.

### Modal: ModalDialog Uniform Appearance

The uniform `ModalDialog` appearance replaced the current behavior. Current mobile appearance
remains accessible via the `isDockedOnMobile` property.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-isdockeonmobile-prop
```

See [Codemods documentation][readme-codemods] for more details.

Or manually add `isDockedOnMobile` prop to the `ModalDialog` component.

### TextField: `label` prop

The `label` prop is now required.

#### Migration Guide

Please ensure that `label` is added to all `TextField` components.
If you need to hide your `label`, you can use the `isLabelHidden` prop.

### Tooltip: `off` Placement

The `off` placement was removed.

#### Migration Guide

Please use the new refactored `Tooltip` component.

### Tooltip: Refactored

The `Tooltip` component was refactored and new structure and API were introduced.

#### Migration Guide

See [`Tooltip` documentation][tooltip-readme] for more details and examples.
Tooltip now uses Floating UI library and has a different API.

Instead of:

```jsx
<TooltipWrapper>
  <Button UNSAFE_className="TooltipTarget">I have a tooltip!</Button>
  <Tooltip>Hello there!</Tooltip>
</TooltipWrapper>
```

Use:

```jsx
<Tooltip
  id="Tooltip"
  // …
>
  <TooltipTrigger elementType={Button}>I have a tooltip!</TooltipTrigger>
  <TooltipPopover>Hello there!</TooltipPopover>
</Tooltip>
```

### TooltipModern

The `TooltipModern` component was renamed to `Tooltip`.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/tooltipmodern-component-name
```

See [Codemods documentation][readme-codemods] for more details.

Or manually rename `TooltipModern` to the `Tooltip`.

---

Please refer back to these instructions or reach out to our team if you encounter any issues during migration.

[alert-role-documentation]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-codemods]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/README.md
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
[dropdown-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Dropdown/README.md
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
[tooltip-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Tooltip/README.md
