# Dropdown

## Usage

```jsx
import { Dropdown, DropdownTrigger, DropdownPopover } from '@lmc-eu/spirit-web-react/components';
```

```jsx
const [isOpen, setIsOpen] = React.useState(false);
const onToggle = () => setIsOpen(!isOpen);

<Dropdown id="dropdown-example" isOpen={isOpen} onToggle={onToggle}>
  <DropdownTrigger elementType="button">Trigger button</DropdownTrigger>
  <DropdownPopover>…</DropdownPopover>
</Dropdown>;
```

### Dropdown with Item

Enhance your DropdownPopover by incorporating the versatile [Item][item] component.
Explore additional examples and insights within the dedicated documentation for the [Item][item] component.

```jsx
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);
const onToggle = () => setIsOpen(!isOpen);

<Dropdown id="dropdown-example" isOpen={isOpen} onToggle={onToggle}>
  <DropdownTrigger elementType="button">Trigger button</DropdownTrigger>
  <DropdownPopover>
    <Item elementType="a" href="#" label="Item label" />
  </DropdownPopover>
</Dropdown>;
```

### Uncontrolled dropdown

```jsx
import { UncontrolledDropdown, DropdownTrigger, DropdownPopover } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<UncontrolledDropdown id="uncontrolled-dropdown-example">
  <DropdownTrigger elementType="button">Trigger button</DropdownTrigger>
  <DropdownPopover>…</DropdownPopover>
</UncontrolledDropdown>
```

## API

### Dropdown

| Name              | Type                                             | Default        | Required | Description                                    |
| ----------------- | ------------------------------------------------ | -------------- | -------- | ---------------------------------------------- |
| `enableAutoClose` | `bool`                                           | `true`         | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`   | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`          | ✕        | Full-width mode                                |
| `id`              | `string`                                         | —              | ✓        | Component ID                                   |
| `isOpen`          | `bool`                                           | `false`        | ✓        | Open state                                     |
| `onAutoClose`     | `(event: Event) => void`                         | —              | ✕        | Callback on close on click outside of Dropdown |
| `onToggle`        | `() => void`                                     | —              | ✓        | Function for toggle open state of dropdown     |
| `placement`       | [Placement dictionary][dictionary-placement]     | `bottom-start` | ✕        | Alignment of the component                     |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### DropdownTrigger

| Name          | Type                      | Default  | Required | Description                      |
| ------------- | ------------------------- | -------- | -------- | -------------------------------- |
| `children`    | [`string` \| `ReactNode`] | —        | ✓        | Content of trigger element       |
| `elementType` | [`string` \| `ReactNode`] | `button` | ✕        | Element type of dropdown trigger |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### DropdownPopover

| Name       | Type                      | Default | Required | Description                |
| ---------- | ------------------------- | ------- | -------- | -------------------------- |
| `children` | [`string` \| `ReactNode`] | —       | ✓        | Content of trigger element |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### UncontrolledDropdown

| Name              | Type                                             | Default        | Required | Description                                    |
| ----------------- | ------------------------------------------------ | -------------- | -------- | ---------------------------------------------- |
| `enableAutoClose` | `bool`                                           | `true`         | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`   | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`          | ✕        | Full-width mode                                |
| `id`              | `string`                                         | `<random>`     | ✕        | Component ID                                   |
| `onAutoClose`     | `(event: Event) => void`                         | —              | ✕        | Callback on close on click outside of Dropdown |
| `placement`       | [Placement dictionary][dictionary-placement]     | `bottom-start` | ✕        | Alignment of the component                     |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#placement
[dropdownfullwidthmode]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/types/dropdown.ts#L19
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
