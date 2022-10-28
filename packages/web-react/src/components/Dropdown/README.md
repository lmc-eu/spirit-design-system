# Dropdown

## Usage

```jsx
import { Dropdown } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<Dropdown id="DropdownExample" renderToggle={({ trigger }) => <button {...trigger}>...</button>}>
  ...
</Dropdown>
```

## Props

| Prop name          | Type                                         | Default    | Required | Description                                |
| ------------------ | -------------------------------------------- | ---------- | -------- | ------------------------------------------ |
| `id`               | `string`                                     | `<random>` | no       | Component id                               |
| `renderTrigger`    | `(render: DropdownRenderProps) => ReactNode` | -          | no       | Properties for trigger render              |
| `disableAutoClose` | `boolean`                                    | -          | no       | Disable close on click outside of Dropdown |
| `UNSAFE_className` | `string`                                     | -          | no       | Wrapper custom classname                   |
| `UNSAFE_style`     | `CSSProperties`                              | -          | no       | Wrapper custom style                       |

## DropdownRenderProps

| Prop name                  | Type                                               | Description             |
| -------------------------- | -------------------------------------------------- | ----------------------- |
| `isOpen`                   | `boolean`                                          | When dropdown is open   |
| `trigger`                  | `Object`                                           | Trigger properties      |
| `trigger.onClick`          | `string`                                           | Trigger onClick event   |
| `trigger.className`        | `string`                                           | Trigger state classname |
| `trigger['aria-expanded']` | `Booleanish`                                       | Trigger aria expanded   |
| `trigger['aria-controls']` | `string`                                           | Trigger aria controls   |
| `trigger.ref`              | `LegacyRef<HTMLButtonElement & HTMLAnchorElement>` | Trigger reference       |
