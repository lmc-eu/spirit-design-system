# Pill

Pills can be used to show count or label.

```jsx
import { Pill } from '@lmc-eu/spirit-web-react';
```

```jsx
  <Pill color="primary">3</Pill>
  <Pill color="secondary">3</Pill>
  <Pill color="tertiary">3</Pill>
  <Pill color="inverted">3</Pill>
  <Pill color="selected">333</Pill>
  <Pill color="unselected">333</Pill>
  <Pill color="success">3</Pill>
  <Pill color="informative">3</Pill>
  <Pill color="warning">3</Pill>
  <Pill color="danger">3</Pill>
```

## Available props

| Name               | Type                                                                                                                        | Default    | Required | Description               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- | ---------- | -------- | ------------------------- |
| `children`         | `ReactNode`                                                                                                                 | —          | ✔        | Content of the Pill       |
| `color`            | [[Action Color dictionary][dictionary-color] \| [Emotion Color dictionary][dictionary-color] \| `selected` \| `unselected`] | `selected` | ✕        | Color of the component    |
| `UNSAFE_className` | `string`                                                                                                                    | —          | ✕        | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties`                                                                                                             | —          | ✕        | Wrapper custom style      |

For detailed information see [Pill](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Pill/README.md) component

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
