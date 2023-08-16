# Alert

Alert presents feedback or important information to users.

```jsx
import { Alert } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<Alert color="success">Hey! Pay attention!</Alert>
<Alert color="informative">Hey! Pay attention!</Alert>
<Alert color="warning">Hey! Pay attention!</Alert>
<Alert color="danger">Hey! Pay attention!</Alert>
<Alert color="informative" iconName="warning">Hey! Pay attention!</Alert>
<Alert color="informative" isCentered>Hey! Pay attention!</Alert>
```

## Available props

| Prop name          | Type                                         | Default          | Required | Description                |
| ------------------ | -------------------------------------------- | ---------------- | -------- | -------------------------- |
| `children`         | `ReactNode`                                  | -                | ✔        | Content of the Alert       |
| `color`            | [Emotion Color dictionary][dictionary-color] | `success`        | ✕        | Color of the component     |
| `iconName`         | `string`                                     | Based on `color` | ✕        | Icon used in Alert         |
| `isCentered` .     | `boolean`                                    | `false`          | ✕        | If true, Alert is centered |
| `UNSAFE_className` | `string`                                     | -                | ✕        | Wrapper custom class name  |
| `UNSAFE_style`     | `CSSProperties`                              | -                | ✕        | Wrapper custom style       |

For detailed information see [Alert](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Alert/README.md) component

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
