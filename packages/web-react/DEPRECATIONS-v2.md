# Deprecations List

Following deprecations will be removed in version 2 of the _spirit-web-react_ package.

> Please follow these steps to safely upgrade your design system to Spirit Design System v2 components.

[What are deprecations?][readme-deprecations]

## Deprecations

### Required `id` Prop for Form Components

The `id` prop will be required for all form components.

Related components:

- `Checkbox`
- `FieldGroup`
- `FileUploader`
- `Radio`
- `Select`
- `TextArea`
- `TextField`

#### Migration Guide

Add `id` prop to the form components.

### FileUploaderAttachment `buttonLabel` and `editButtonLabel` Props

The `buttonLabel` and `editButtonLabel` props will be removed from the `FileUploaderAttachment` component.
Use `removeText` and `editText` props instead.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/fileuploader-prop-names
```

See [Codemods documentation][readme-codemods] for more details.

Or manually replace the props in your project.

- `<FileUploaderAttachment buttonLabel="Remove this attachment" … />` → `<FileUploaderAttachment removeText="Remove this attachment" … />`
- `<FileUploaderAttachment editButtonLabel="Edit this attachment" … />` → `<FileUploaderAttachment editText="Edit this attachment" … />`

### Dropdown and Collapse `id` Prop

The `id` prop will be mandatory for the `Dropdown` and `Collapse` components.

#### Migration Guide

Add `id` prop to the `Dropdown` component.
Add `id` prop to the `Collapse` component.

### Tooltip and Dropdown Placements

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

### Tooltip & TooltipModern

The `Tooltip` component will be replaced by the `TooltipModern` component.
Use the `TooltipModern` component now and rename it to `Tooltip` in the next major version.

#### Migration Guide

Replace `Tooltip` with `TooltipModern` in your project.
The `TooltipModern` is using the Floating UI library and has a different API.

Instead of:

```jsx
<TooltipWrapper>
  <Button UNSAFE_className="TooltipTarget">I have a tooltip!</Button>
  <Tooltip>Hello there!</Tooltip>
</TooltipWrapper>
```

Use:

```jsx
<TooltipModern
  id="TooltipModern"
  // …
>
  <TooltipTrigger>I have a tooltip!</TooltipTrigger>
  <TooltipPopover>Hello there!</TooltipPopover>
</TooltipModern>
```

See [`Tooltip` documentation][tooltip-readme] for more details and examples.

### Tooltip `off` Placement

The `off` placement is deprecated and will be removed in the next major version.

#### Migration Guide

Please use the `TooltipModern` component instead, which is the successor of the `Tooltip` component and
provides improved functionality.

### Dropdown & DropdownModern

The `Dropdown` component will be replaced by the `DropdownModern` component.
Use the `DropdownModern` component now and rename it to `Dropdown` in the next major version.

#### Migration Guide

Replace `Dropdown` with `DropdownModern` in your project.
The `DropdownModern` has a different API.

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

<DropdownModern id="DropdownExample" isOpen={isOpen} onToggle={onToggle}>
  <DropdownTrigger elementType="button">Trigger button</DropdownTrigger>
  <DropdownPopover>…</DropdownPopover>
</DropdownModern>;
```

See [`Dropdown` documentation][dropdown-readme] for more details and examples.

### Grid Breakpoint Props

The `cols` prop in the `Grid` now supports object values for different breakpoints.
The `tablet` and `desktop` props will be removed in the next major version.

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

### ModalDialog `isScrollable` Prop

The `isScrollable` prop will be set to `false` by default in the next major release and the ModalDialog will be made
non-scrollable by default. It will be possible to re-enable the inside scrolling by adding the `isScrollable` prop.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-iscrollable-prop
```

See [Codemods documentation][readme-codemods] for more details.

Or manually add `isScrollable` prop to the `ModalDialog` component.

### ModalDialog `isExpandedOnMobile` Prop

The `isExpandedOnMobile` prop will be set to `true` by default in the next major release and the ModalDialog will be
expanded on mobile by default. It will be possible to re-collapse the inside by setting the `isExpandedOnMobile` prop
to `false` value.

#### Migration Guide

Use codemod to automatically update your codebase.

```sh
npx @lmc-eu/spirit-codemods -p <path> -t v2/web-react/modal-isexpandedonmobile-prop
```

See [Codemods documentation][readme-codemods] for more details.

Or manually add `isExpandedOnMobile={false}` prop to the `ModalDialog` component to keep the current behavior.

### Alert `danger` Icon

The `warning` icon as a fallback for the `danger` color in the Alert component will be removed in favor of the `danger` icon.
Please, add the `danger` icon to your project's assets.

#### Migration Guide

Either install newer version of the `spirit-icons` package or add `danger` named icon to your project's icons.

[readme-codemods]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/README.md
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#placement
[dropdown-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Dropdown/README.md
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
[tooltip-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Tooltip/README.md
