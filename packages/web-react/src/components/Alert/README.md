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

| Prop name      | Type                                         | Default          | Required | Description                |
| -------------- | -------------------------------------------- | ---------------- | -------- | -------------------------- |
| `children`     | `ReactNode`                                  | -                | yes      | Content of the Alert       |
| `color`        | [Emotion Color dictionary][dictionary-color] | `success`        | no       | Color of the component     |
| `iconName`     | `string`                                     | Based on `color` | no       | Icon used in Alert         |
| `isCentered` . | `boolean`                                    | `false`          | no       | If true, Alert is centered |

For detailed information see [Alert](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/Alert/README.md) component

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
