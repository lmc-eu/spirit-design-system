# Dropdown

⚠️ Dropdown component is [deprecated][readme-deprecations] and will be removed in the next major version. Please use "DropdownModern" component instead.
This is the React implementation of the [Dropdown][dropdown] component.

## Usage

```jsx
import { Dropdown, Button } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<Dropdown id="DropdownExample" renderTrigger={({ trigger }) => <Button {...trigger}>Trigger</Button>}>
  …
</Dropdown>
```

### Dropdown with Item

Enhance your DropdownPopover by incorporating the versatile [Item][item] component.
Explore additional examples and insights within the dedicated documentation for the [Item][item] component.

```jsx
import { Dropdown, Button, Item } from '@lmc-eu/spirit-web-react/components';

<Dropdown id="DropdownExample" renderTrigger={({ trigger }) => <Button {...trigger}>Trigger</Button>}>
  <Item elementType="a" href="#" label="Item label" />
</Dropdown>;
```

## API

| Name              | Type                                             | Default        | Required | Description                                    |
| ----------------- | ------------------------------------------------ | -------------- | -------- | ---------------------------------------------- |
| `enableAutoClose` | `bool`                                           | `true`         | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`   | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`          | ✕        | Full-width mode                                |
| `id`              | `string`                                         | `<random>`     | ✕        | Component id                                   |
| `onAutoClose` .   | `(event: Event) => void`                         | —              | ✕        | Callback on close on click outside of Dropdown |
| `placement`       | [Placement dictionary][dictionary-placement]     | `bottom-start` | ✕        | Alignment of the component                     |
| `renderTrigger`   | `(render: DropdownRenderProps) => ReactNode`     | —              | ✕        | Properties for trigger render                  |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### DropdownRenderProps

| Name                       | Type                                               | Description             |
| -------------------------- | -------------------------------------------------- | ----------------------- |
| `isOpen`                   | `bool`                                             | When dropdown is open   |
| `trigger`                  | `Object`                                           | Trigger properties      |
| `trigger.onClick`          | `string`                                           | Trigger onClick event   |
| `trigger.className`        | `string`                                           | Trigger state classname |
| `trigger['aria-expanded']` | `Booleanish`                                       | Trigger aria expanded   |
| `trigger['aria-controls']` | `string`                                           | Trigger aria controls   |
| `trigger.ref`              | `LegacyRef<HTMLButtonElement & HTMLAnchorElement>` | Trigger reference       |

---

# DropdownModern

⚠️ `DropdownModern` component is [deprecated][readme-deprecations] and will be renamed to `Dropdown` in the next major version.

## Usage

```jsx
import { DropdownModern, DropdownTrigger, DropdownPopover } from '@lmc-eu/spirit-web-react/components';
```

```jsx
const [isOpen, setIsOpen] = React.useState(false);
const onToggle = () => setIsOpen(!isOpen);

<DropdownModern id="DropdownExample" isOpen={isOpen} onToggle={onToggle}>
  <DropdownTrigger elementType="button">Trigger button</DropdownTrigger>
  <DropdownPopover>…</DropdownPopover>
</DropdownModern>;
```

### ⚠️ DEPRECATION NOTICE

Both cross-axis placements have been renamed from `top-left`, `top-right`, `right-top`, `right-bottom`,
etc. to `top-start`, `top-end`, `right-start`, `right-end`, etc. The old names are deprecated and will be
removed in the next major release.

[What are deprecations?][readme-deprecations]

### Dropdown with Item

Enhance your DropdownPopover by incorporating the versatile [Item][item] component.
Explore additional examples and insights within the dedicated documentation for the [Item][item] component.

```jsx
const [isOpen, setIsOpen] = React.useState(false);
const onToggle = () => setIsOpen(!isOpen);

<DropdownModern id="DropdownExample" isOpen={isOpen} onToggle={onToggle}>
  <DropdownTrigger elementType="button">Trigger button</DropdownTrigger>
  <DropdownPopover>
    <Item elementType="a" href="#" label="Item label" />
  </DropdownPopover>
</DropdownModern>;
```

### Uncontrolled dropdown

```jsx
import { UncontrolledDropdown, DropdownTrigger, DropdownPopover } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<UncontrolledDropdown id="UncontrolledDropdownExample">
  <DropdownTrigger elementType="button">Trigger button</DropdownTrigger>
  <DropdownPopover>…</DropdownPopover>
</UncontrolledDropdown>
```

## API

### DropdownModern

| Name              | Type                                             | Default        | Required | Description                                    |
| ----------------- | ------------------------------------------------ | -------------- | -------- | ---------------------------------------------- |
| `enableAutoClose` | `bool`                                           | `true`         | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`   | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`          | ✕        | Full-width mode                                |
| `id`              | `string`                                         | -              | ✔        | Component id                                   |
| `isOpen`          | `bool`                                           | `false`        | ✔        | Open state                                     |
| `onAutoClose`     | `(event: Event) => void`                         | —              | ✕        | Callback on close on click outside of Dropdown |
| `onToggle`        | `() => void`                                     | —              | ✔        | Function for toggle open state of dropdown     |
| `placement`       | [Placement dictionary][dictionary-placement]     | `bottom-start` | ✕        | Alignment of the component                     |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### DropdownTrigger

| Name          | Type                      | Default  | Required | Description                      |
| ------------- | ------------------------- | -------- | -------- | -------------------------------- |
| `children`    | [`string` \| `ReactNode`] | —        | ✔        | Content of trigger element       |
| `elementType` | [`string` \| `ReactNode`] | `button` | ✕        | Element type of dropdown trigger |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### DropdownPopover

| Name       | Type                      | Default | Required | Description                |
| ---------- | ------------------------- | ------- | -------- | -------------------------- |
| `children` | [`string` \| `ReactNode`] | —       | ✔        | Content of trigger element |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### UncontrolledDropdown

| Name              | Type                                             | Default        | Required | Description                                    |
| ----------------- | ------------------------------------------------ | -------------- | -------- | ---------------------------------------------- |
| `enableAutoClose` | `bool`                                           | `true`         | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`   | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`          | ✕        | Full-width mode                                |
| `id`              | `string`                                         | `<random>`     | ✕        | Component id                                   |
| `onAutoClose`     | `(event: Event) => void`                         | —              | ✕        | Callback on close on click outside of Dropdown |
| `placement`       | [Placement dictionary][dictionary-placement]     | `bottom-start` | ✕        | Alignment of the component                     |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#placement
[dropdown]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Dropdown
[dropdownbreakpoint]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/types/dropdown.ts#L11
[dropdownfullwidthmode]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/types/dropdown.ts#L19
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/README.md#deprecations
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
