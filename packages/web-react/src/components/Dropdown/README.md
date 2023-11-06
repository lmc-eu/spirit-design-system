# Dropdown

⚠️ Dropdown component is [deprecated][deprecated] and will be removed in the next major version. Please use "DropdownModern" component instead.
This is the React implementation of the [Dropdown] component.

## Usage

```jsx
import { Dropdown, Button } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<Dropdown id="DropdownExample" renderTrigger={({ trigger }) => <Button {...trigger}>Trigger</Button>}>
  …
</Dropdown>
```

## API

| Name               | Type                                             | Default       | Required | Description                                    |
| ------------------ | ------------------------------------------------ | ------------- | -------- | ---------------------------------------------- |
| `enableAutoClose`  | `bool`                                           | `true`        | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`    | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`         | ✕        | Full-width mode                                |
| `id`               | `string`                                         | `<random>`    | ✕        | Component id                                   |
| `onAutoClose` .    | `(event: Event) => void`                         | —             | ✕        | Callback on close on click outside of Dropdown |
| `placement`        | [Placement dictionary][dictionary-placement]     | `bottom-left` | ✕        | Alignment of the component                     |
| `renderTrigger`    | `(render: DropdownRenderProps) => ReactNode`     | —             | ✕        | Properties for trigger render                  |
| `UNSAFE_className` | `string`                                         | —             | ✕        | Wrapper custom classname                       |
| `UNSAFE_style`     | `CSSProperties`                                  | —             | ✕        | Wrapper custom style                           |

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

⚠️ `DropdownModern` component is [deprecated] and will be renamed to `Dropdown` in the next major version.

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

| Name               | Type                                             | Default       | Required | Description                                    |
| ------------------ | ------------------------------------------------ | ------------- | -------- | ---------------------------------------------- |
| `enableAutoClose`  | `bool`                                           | `true`        | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`    | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`         | ✕        | Full-width mode                                |
| `id`               | `string`                                         | -             | ✔        | Component id                                   |
| `isOpen`           | `bool`                                           | `false`       | ✔        | Open state                                     |
| `onAutoClose`      | `(event: Event) => void`                         | —             | ✕        | Callback on close on click outside of Dropdown |
| `onToggle`         | `() => void`                                     | —             | ✔        | Function for toggle open state of dropdown     |
| `placement`        | [Placement dictionary][dictionary-placement]     | `bottom-left` | ✕        | Alignment of the component                     |
| `UNSAFE_className` | `string`                                         | —             | ✕        | Wrapper custom classname                       |
| `UNSAFE_style`     | `CSSProperties`                                  | —             | ✕        | Wrapper custom style                           |

### DropdownTrigger

| Name               | Type                      | Default  | Required | Description                      |
| ------------------ | ------------------------- | -------- | -------- | -------------------------------- |
| `children`         | [`string` \| `ReactNode`] | —        | ✔        | Content of trigger element       |
| `elementType`      | [`string` \| `ReactNode`] | `button` | ✕        | Element type of dropdown trigger |
| `UNSAFE_className` | `string`                  | —        | ✕        | DropdownTrigger custom classname |
| `UNSAFE_style`     | `CSSProperties`           | —        | ✕        | DropdownTrigger custom style     |

### DropdownPopover

| Name               | Type                      | Default | Required | Description                      |
| ------------------ | ------------------------- | ------- | -------- | -------------------------------- |
| `children`         | [`string` \| `ReactNode`] | —       | ✔        | Content of trigger element       |
| `UNSAFE_className` | `string`                  | —       | ✕        | DropdownPopover custom classname |
| `UNSAFE_style`     | `CSSProperties`           | —       | ✕        | DropdownPopover custom style     |

### UncontrolledDropdown

| Name               | Type                                             | Default       | Required | Description                                    |
| ------------------ | ------------------------------------------------ | ------------- | -------- | ---------------------------------------------- |
| `enableAutoClose`  | `bool`                                           | `true`        | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`    | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`         | ✕        | Full-width mode                                |
| `id`               | `string`                                         | `<random>`    | ✕        | Component id                                   |
| `onAutoClose`      | `(event: Event) => void`                         | —             | ✕        | Callback on close on click outside of Dropdown |
| `placement`        | [Placement dictionary][dictionary-placement]     | `bottom-left` | ✕        | Alignment of the component                     |
| `UNSAFE_className` | `string`                                         | —             | ✕        | Wrapper custom classname                       |
| `UNSAFE_style`     | `CSSProperties`                                  | —             | ✕        | Wrapper custom style                           |

[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/README.md#deprecations
[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#placement
[dropdown]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Dropdown
[dropdownbreakpoint]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/types/dropdown.ts#L11
[dropdownfullwidthmode]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/types/dropdown.ts#L19
