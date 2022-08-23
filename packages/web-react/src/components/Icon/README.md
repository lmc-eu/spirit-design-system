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

## Available props

| Name    | Type     | Required | Description                    |
| ------- | -------- | -------- | ------------------------------ |
| `name`  | `string` | yes      | Name of the icon               |
| `size`  | `number` | no       | Size of the icon, default `24` |
| `title` | `string` | no       | Title of the icon              |

For detailed information see [Icon](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/Icon/README.md) component.

For more details about Icons see [Spirit Icons](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/icons/README.md) package.
