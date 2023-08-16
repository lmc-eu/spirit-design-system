# Dropdown

This is the React implementation of the [Dropdown] component.

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

| Prop name          | Type                                             | Default       | Required | Description                                    |
| ------------------ | ------------------------------------------------ | ------------- | -------- | ---------------------------------------------- |
| `enableAutoClose`  | `boolean`                                        | `true`        | ✕        | Enables close on click outside of Dropdown     |
| `fullWidthMode`    | [`DropdownFullwidthMode`][dropdownfullwidthmode] | `off`         | ✕        | Full-width mode                                |
| `id`               | `string`                                         | `<random>`    | ✕        | Component id                                   |
| `onAutoClose` .    | `(event: Event) => void`                         |               | ✕        | Callback on close on click outside of Dropdown |
| `placement`        | [`DropdownPlacement`][dropdownplacement]         | `bottom-left` | ✕        | Alignment of the component                     |
| `renderTrigger`    | `(render: DropdownRenderProps) => ReactNode`     | -             | ✕        | Properties for trigger render                  |
| `UNSAFE_className` | `string`                                         | -             | ✕        | Wrapper custom classname                       |
| `UNSAFE_style`     | `CSSProperties`                                  | -             | ✕        | Wrapper custom style                           |

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

[dropdown]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Dropdown
[dropdownplacement]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/types/dropdown.ts#L4
[dropdownbreakpoint]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/types/dropdown.ts#L11
[dropdownfullwidthmode]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/types/dropdown.ts#L19
