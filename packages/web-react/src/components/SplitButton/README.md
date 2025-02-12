# Split Button

The Split Button component groups multiple related actions a user can take, combining a button with additional options like a dropdown menu or tooltips for better usability.

👉 The buttons' **color** and **size** are defined at the `SplitButton` component level and apply uniformly to **all buttons** within it.

👉 The `SplitButton` component works exclusively with the Spirit `Button` and is not compatible with third-party or custom buttons.

Learn more about the [Button][readme-button] component in its documentation.

Simple variant:

```jsx
<SplitButton>
  <Button>Button</Button>
  <Button>Button</Button>
</SplitButton>
```

Setting **color** for **all buttons**:

```jsx
<SplitButton color="secondary">
  <Button>Button</Button>
  <Button>Button</Button>
</SplitButton>
```

Setting **size** for **all buttons**:

```jsx
<SplitButton size="large">
  <Button>Button</Button>
  <Button>Button</Button>
</SplitButton>
```

## Variant with Dropdown

You can add a Dropdown component inside a Split Button to provide additional actions.

Learn more about the [Dropdown][readme-dropdown] component in its documentation.

```jsx
const [isOpen, setIsOpen] = React.useState(false);
const onToggle = () => setIsOpen(!isOpen);

<SplitButton>
  <Button>Button</Button>
  <Dropdown id="split-button-dropdown-id" isOpen={isOpen} onToggle={onToggle}>
    <DropdownTrigger elementType={Button}>
      Dropdown
      <Icon name="chevron-down" marginLeft="space-400" />
    </DropdownTrigger>
    <DropdownPopover>Dropdown content</DropdownPopover>
  </Dropdown>
</SplitButton>;
```

## Variant with Tooltip

You can also add a tooltip to buttons, which is especially useful for buttons that contain only icons.

Learn more about the [Tooltip][readme-tooltip] component in its documentation.

```jsx
const [isOpen, setIsOpen] = React.useState(false);

<SplitButton>
  <Button>Button</Button>
  <Tooltip id="split-button-tooltip-id" isOpen={isOpen} onToggle={setIsOpen}>
    <TooltipTrigger elementType={Button}>
      Tooltip button
      <Icon name="download" />
    </TooltipTrigger>
    <TooltipPopover>Hello there!</TooltipPopover>
  </Tooltip>
</SplitButton>;
```

## Full Example

```jsx
const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
const onDropdownToggle = () => setIsOpen(!isOpen);

<SplitButton color="secondary" size="large">
  <Button>Button</Button>
  <Tooltip id="split-button-tooltip-id" isOpen={isTooltipOpen} onToggle={setIsTooltipOpen}>
    <TooltipTrigger elementType={Button}>
      <VisuallyHidden>download</VisuallyHidden>
      <Icon name="download" />
    </TooltipTrigger>
    <TooltipPopover>Hello there!</TooltipPopover>
  </Tooltip>
  <Dropdown id="split-button-dropdown-id" isOpen={isDropdownOpen} onToggle={onDropdownToggle}>
    <DropdownTrigger elementType={Button}>
      Dropdown
      <Icon name="chevron-down" marginLeft="space-400" />
    </DropdownTrigger>
    <DropdownPopover>Dropdown content</DropdownPopover>
  </Dropdown>
</SplitButton>;
```

## API

| Name    | Type                                       | Default   | Required | Description   |
| ------- | ------------------------------------------ | --------- | -------- | ------------- |
| `color` | \[`primary` \| `secondary` \| `tertiary` ] | `primary` | ✕        | Color variant |
| `size`  | [Size dictionary][dictionary-size]         | `medium`  | ✕        | Size variant  |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-button]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Button/README.md
[readme-dropdown]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Dropdown/README.md
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[readme-tooltip]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Tooltip/README.md
