# Icon

Icons are graphical metaphors or symbols that can be used to compliment existing experiences.

```jsx
import { Icon, IconsProvider } from '@lmc-eu/spirit-web-react/components';
import icons from '@lmc-eu/spirit-icons/icons';
```

```jsx
<IconsProvider value={icons}>
  <Icon name="warning" />
  Hey! Pay attention!
</IconsProvider>
```

## API

| Name               | Type            | Default | Required | Description               |
| ------------------ | --------------- | ------- | -------- | ------------------------- |
| `boxSize`          | `number`        | 24      | ✕        | Size of the icon          |
| `name`             | `string`        | —       | ✔        | Name of the icon          |
| `title`            | `string`        | —       | ✕        | Title of the icon         |
| `UNSAFE_className` | `string`        | —       | ✕        | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | Wrapper custom style      |

For more details about Icons see [Spirit Icons](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/icons/README.md) package.
