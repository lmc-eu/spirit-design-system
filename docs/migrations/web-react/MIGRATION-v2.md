# Migration Guide

Introducing version 2 of the _spirit-web-react_ package.

> Please follow these steps to safely upgrade to Spirit Design System v2 components.

> ℹ️ Don’t forget to check the [migration guide of the _spirit-web_ package][migration-guide-web] for general changes in
> available feature flags, CSS, and other changes that might affect your project.

## Overview

- [General Changes](#general-changes)
  - [Dropped Support for Node.js 16](#dropped-support-for-nodejs-16)
  - [Required `id` Prop in Form Components](#required-id-prop-in-form-components)
  - [Placement in Dropdown and Tooltip](#placement-in-dropdown-and-tooltip)
- [Component Changes](#component-changes)
  - [Alert: `danger` Icon](#alert-danger-icon)
  - [Alert: `role="alert"`](#alert-rolealert)
  - [Collapse: `id` Prop](#collapse-id-prop)
  - [Dropdown: New Structure](#dropdown-new-structure)
  - [Dropdown: `id` Prop](#dropdown-id-prop)
  - [Dropdown: Placement Control](#dropdown-placement-control)
  - [FileUploader: FileUploaderAttachment `buttonLabel` and `editButtonLabel` Props](#fileuploader-fileuploaderattachment-buttonlabel-and-editbuttonlabel-props)
  - [Grid: Breakpoint Props](#grid-breakpoint-props)
  - [Grid: GridSpan Component](#grid-gridspan-component)
  - [Header: HeaderDesktopActions `isAtEnd` prop](#header-headerdesktopactions-isatend-prop)
  - [Modal: ModalDialog `isExpandedOnMobile` Prop](#modal-modaldialog-isexpandedonmobile-prop)
  - [Modal: ModalDialog `isScrollable` Prop](#modal-modaldialog-isscrollable-prop)
  - [Modal: ModalDialog Custom Height](#modal-modaldialog-custom-height)
  - [Modal: ModalDialog Uniform Appearance](#modal-modaldialog-uniform-appearance)
  - [Tabs: TabItem and TabPane Props](#tabs-tabitem-and-tabpane-props)
  - [TextField: `label` Prop](#textfield-label-prop)
  - [Tooltip: `off` Placement](#tooltip-off-placement)
  - [Tooltip: New Structure](#tooltip-new-structure)
  - [Tooltip: Placement Control](#tooltip-placement-control)
  - [TooltipModern](#tooltipmodern)

## General Changes

### Dropped Support for Node.js 16

The Node.js v16 is no longer supported. The minimum required Node.js version is 18.

### Required `id` Prop in Form Components

The `id` prop is now consistently required by all form components.

Affected components:

- Checkbox
- FieldGroup
- FileUploader
- Radio
- Select
- TextArea
- TextField

#### Migration Guide

Add the `id` prop to the listed form components.

### Placement in Dropdown and Tooltip

The Dropdown and Tooltip components now support only flow-relative cross-axis placements.

New [placement naming][dictionary-placement]:

1. The main placement axis (top, right, bottom, left) remains the same.
2. The cross axis (formerly also top, right, bottom, left) is now relative to the main axis: start, end.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/dropdown-tooltip-flow-placement
```

👉 See [Codemods documentation][readme-codemods] for more details.

🔧 Or check [Dropdown: Placement Control](#dropdown-placement-control) and
[Tooltip: Placement Control](#tooltip-placement-control) for manual migration steps.

## Component Changes

### Alert: `danger` Icon

The `danger` icon for `danger` color in the Alert component is now required.

#### Migration Guide

Either install newer version of the _spirit-icons_ package, or add an icon named `danger` to your project’s icons.

### Alert: `role="alert"`

The `role="alert"` was removed from the default setting of the component.

As explained in the [ARIA: alert role][alert-role-documentation] documentation:

> The alert role is used to communicate an important and usually time-sensitive message to the user. When this role is
> added to an element, the browser will send out an accessible alert event to assistive technology products which can
> then notify the user. The alert role should only be used for information that requires the user’s immediate attention,
> which is typically content that is dynamically displayed (such as form validation message etc.), not for content that
> appears on page load. It should not be used on HTML that the user hasn’t interacted with.

#### Migration Guide

In case you need to use the component as an information that requires the user’s immediate attention, you can use
`role="alert"` as an [additional attribute][readme-additional-attributes].

### Collapse: `id` Prop

The `id` prop is now required by the Collapse component.

#### Migration Guide

Add the `id` prop to the Collapse component.

### Dropdown: New Structure

The Dropdown component was refactored and new structure and API were introduced.

#### Migration Guide

The new Dropdown has a different API.

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

👉 See [Dropdown documentation][dropdown-readme] for more details and examples.

🪄 If you are still using the DropdownModern component instead of Dropdown, you can use codemod to automatically update
your code base:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/dropdownmodern-component-name
```

👉 See [Codemods documentation][readme-codemods] for more details.

### Dropdown: `id` Prop

The `id` prop is now required by the Dropdown component.

#### Migration Guide

Add the `id` prop to the Dropdown component.

### Dropdown: Placement Control

The Dropdown component now supports only [flow-relative cross-axis placements](#placement-in-dropdown-and-tooltip).

#### Migration Guide

🪄 Use codemod described in [Placement in Dropdown and Tooltip](#placement-in-dropdown-and-tooltip) to automatically
update your codebase.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually update cross-axis names in the placement prop:

- `<Dropdown placement="top-left" … />` → `<Dropdown placement="top-start" … />`
- `<Dropdown placement="top-right" … />` → `<Dropdown placement="top-end" … />`
- `<Dropdown placement="right-top" … />` → `<Dropdown placement="right-start" … />`
- `<Dropdown placement="right-bottom" … />` → `<Dropdown placement="right-end" … />`
- `<Dropdown placement="bottom-left" … />` → `<Dropdown placement="bottom-start" … />`
- `<Dropdown placement="bottom-right" … />` → `<Dropdown placement="bottom-end" … />`
- `<Dropdown placement="left-top" … />` → `<Dropdown placement="left-start" … />`
- `<Dropdown placement="left-bottom" … />` → `<Dropdown placement="left-end" … />`
</details>

### FileUploader: FileUploaderAttachment `buttonLabel` and `editButtonLabel` Props

The `buttonLabel` and `editButtonLabel` props were removed from the FileUploaderAttachment component.
Use `removeText` and `editText` props instead.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/fileuploader-prop-names
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually replace the props in your project:

- `<FileUploaderAttachment buttonLabel="Remove this attachment" … />` → `<FileUploaderAttachment removeText="Remove this attachment" … />`
- `<FileUploaderAttachment editButtonLabel="Edit this attachment" … />` → `<FileUploaderAttachment editText="Edit this attachment" … />`
</details>

### Grid: Breakpoint Props

The `cols` prop in the `Grid` now supports object values for different breakpoints.
The `tablet` and `desktop` props were removed.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/grid-breakpoint-props
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually replace `tablet` and `desktop` props with the `cols` object prop.

- `<Grid cols="2" tablet="3" … />` → `<Grid cols={{ mobile: 2, tablet: 3 }} … />`
- `<Grid desktop="3" … />` → `<Grid cols={{ desktop: 3 }} … />`
- `<Grid cols="1" tablet="2" desktop="3" … />` → `<Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} … />`
</details>

### Grid: GridSpan Component

The GridSpan component was removed. Instead, you can use the more powerful GridItem component that allows you to define
the start and end columns for each breakpoint.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/grid-gridspan
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

The hardest part in the migration is to get the `columnStart` value. The equation is `1 + (columns - over) / 2`,
where `columns` is the number of columns in the grid and `over` is the value from the GridSpan component.
The default number of columns is 12, so the equation is `1 + (12 - over) / 2` most of the time.

1. Replace `GridSpan` with `GridItem`.
2. Calculate and set the `columnStart` value as `1 + (columns - over) / 2`. In our 12-column grid, the equation is `1 + (12 - over) / 2`, where `over` is the value from the GridSpan component.
3. Set the `columnEnd` value to `span over` or use `columnStart + over`.
4. If you use responsive props, calculate the values for each breakpoint and pass them to the GridItem component `columnStart` and `columnEnd` props as an object.
5. Remove the `over` prop.

##### Examples

- Centered grid item over 4 columns:
  ```diff
  -<GridSpan over="4">…</GridSpan>
  +<GridItem columnStart="5" columnEnd="span 4">…</GridItem>
  ```
  `columnStart` = 1 + (12 - 4) / 2 = 5
- Centered grid item over 6 columns:
  ```diff
  -<GridSpan over="6">…</GridSpan>
  +<GridItem columnStart="4" columnEnd="span 6">…</GridItem>
  ```
  `columnStart` = 1 + (12 - 6) / 2 = 4
- Responsive grid item centered over 8 columns on mobile, 6 columns on tablet, and 4 columns on desktop:
  ```diff
  -<GridSpan over="8" tablet="6" desktop="4">…</GridSpan>
  +<GridItem
  +  columnStart={{ mobile: 3, tablet: 4, desktop: 5 }}
  +  columnEnd={{ mobile: 'span 8', tablet: 'span 6', desktop: 'span 4' }}
  +>…</GridItem>
  ```
  - `columnStart` = 1 + (12 - 8) / 2 = 3
  - `columnStart` = 1 + (12 - 6) / 2 = 4
  - `columnStart` = 1 + (12 - 4) / 2 = 5
  </details>

### Header: HeaderDesktopActions `isAtEnd` prop

The HeaderDesktopActions component slots were simplified and the second slot alignment is now available by using the
`isAtEnd` prop.

The HeaderDesktopActions `color` prop was removed.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/header-headerdesktopactions-isatend
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Use the HeaderDesktopActions component with the `isAtEnd` prop instead of the `color="secondary"` prop.
Remove the `color` prop from the HeaderDesktopActions component.

- `<HeaderDesktopActions color="secondary" … />` → `<HeaderDesktopActions isAtEnd … />`
- `<HeaderDesktopActions color="primary" … />` → `<HeaderDesktopActions … />`
</details>

### Modal: ModalDialog `isExpandedOnMobile` Prop

The default value of the `isExpandedOnMobile` prop is now set to `true` and the ModalDialog is expanded on mobile by
default. It is possible to re-collapse the inside by setting the `isExpandedOnMobile` prop to `false`.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-isexpandedonmobile-prop
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually add `isExpandedOnMobile={false}` prop to the ModalDialog component to keep the current behavior.

</details>

### Modal: ModalDialog `isScrollable` Prop

The default value of the `isScrollable` prop is now set to `false` and the ModalDialog is non-scrollable by default.
It is possible to re-enable the inside scrolling by adding the `isScrollable` prop.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-iscrollable-prop
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually add the `isScrollable` prop to the ModalDialog component.

</details>

If you use ScrollView for scrolling the content of your modal, you must also make the ModalDialog scrollable by setting
the `isScrollable` prop.

### Modal: ModalDialog Custom Height

The `preferredHeightOnMobile` and `preferredHeightFromTabletUp` props were removed and replaced with a single `height`
prop which accepts either a single value or object with breakpoint keys and values.

Also, the prop `maxHeightFromTabletUp` was removed and replaced with the `maxHeight` prop, which also accepts either a
single value or an object with breakpoint keys and values.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-custom-height
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually update the `preferredHeightOnMobile` and `preferredHeightFromTabletUp` props to the new `height` prop:

- `<ModalDialog preferredHeightOnMobile="333px" … />` → `<ModalDialog height="333px" … />`
- `<ModalDialog preferredHeightFromTabletUp="444px" … />` → `<ModalDialog height={{ tablet: '444px' }} … />`
- `<ModalDialog preferredHeightOnMobile="333px" preferredHeightFromTabletUp="444px" … />` → `<ModalDialog height={{ mobile: '333px', tablet: '444px' }} … />`

Update the `maxHeightFromTabletUp` prop to the new `maxHeight` prop:

- `<ModalDialog maxHeightFromTabletUp="555px" … />` → `<ModalDialog maxHeight={{ tablet: '555px' }} … />`
</details>

### Modal: ModalDialog Uniform Appearance

The uniform ModalDialog appearance replaced the current behavior. Current mobile appearance remains accessible via the
`isDockedOnMobile` property.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-isdockeonmobile-prop
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually add the `isDockedOnMobile` prop to the ModalDialog component.

</details>

### Tabs: TabItem and TabPane Props

TabItem `forTab` prop was renamed to `forTabPane`.
TabPane `tabId` prop was renamed to `id`.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/tabs-tabitem-tabpane-props
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually replace the props in your project.

- `<TabItem forTab="TabPane1" … />` → `<TabItem forTabPane="TabPane1" … />`
- `<TabPane tabId="TabPane1" … />` → `<TabPane id="TabPane1" … />`
</details>

### TextField: `label` Prop

The `label` prop is now required by the TextField component.

#### Migration Guide

Please ensure that `label` is added to all instances of the TextField component.
To hide the `label`, you can use the `isLabelHidden` prop.

### Tooltip: `off` Placement

The `off` placement was removed.

#### Migration Guide

Please use the new refactored Tooltip component.

### Tooltip: New Structure

The Tooltip component structure changed and Tooltip (formerly the optional TooltipWrapper) is now a mandatory
wrapping component. Similarly, Tooltip (the tip itself) was renamed to TooltipPopover.

#### Migration Guide

👉 See [Tooltip documentation][tooltip-readme] for more details and examples.

Tooltip now has a different API and uses the [Floating UI][floating-ui] library. That’s because we found out that most
users want the advanced positioning options anyway.

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

### Tooltip: Placement Control

The Tooltip component now supports only [flow-relative cross-axis placements](#placement-in-dropdown-and-tooltip).

#### Migration Guide

🪄 Use codemod described in [Placement in Dropdown and Tooltip](#placement-in-dropdown-and-tooltip) to automatically
update your codebase.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually update cross-axis names in the placement prop:

- `<Tooltip placement="top-left" … />` → `<Tooltip placement="top-start" … />`
- `<Tooltip placement="top-right" … />` → `<Tooltip placement="top-end" … />`
- `<Tooltip placement="right-top" … />` → `<Tooltip placement="right-start" … />`
- `<Tooltip placement="right-bottom" … />` → `<Tooltip placement="right-end" … />`
- `<Tooltip placement="bottom-left" … />` → `<Tooltip placement="bottom-start" … />`
- `<Tooltip placement="bottom-right" … />` → `<Tooltip placement="bottom-end" … />`
- `<Tooltip placement="left-top" … />` → `<Tooltip placement="left-start" … />`
- `<Tooltip placement="left-bottom" … />` → `<Tooltip placement="left-end" … />`
</details>

### TooltipModern

The TooltipModern component was renamed to Tooltip.

#### Migration Guide

🪄 Use codemod to automatically update your codebase:

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/tooltipmodern-component-name
```

👉 See [Codemods documentation][readme-codemods] for more details.

<details>
  <summary>🔧 Manual Migration Steps</summary>

Manually rename TooltipModern to Tooltip.

</details>

---

Please refer back to these instructions or reach out to our team if you encounter any issues during migration.

[migration-guide-web]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/migrations/web/MIGRATION-v2.md
[alert-role-documentation]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-codemods]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/README.md
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
[dropdown-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Dropdown/README.md
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
[tooltip-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Tooltip/README.md
[floating-ui]: https://floating-ui.com
