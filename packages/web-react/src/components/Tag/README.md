# Tag

```jsx
import { Tag } from '@lmc-eu/spirit-web-react';
```

```jsx
  <Tag color="neutral">Tag</Tag>
  <Tag color="success">Tag</Tag>
  <Tag color="informative">Tag</Tag>
  <Tag color="warning">Tag</Tag>
  <Tag color="danger">Tag</Tag>
```

## Available props

| Prop name     | Type                                                                            | Default   | Required | Description                                                                                                      |
| ------------- | ------------------------------------------------------------------------------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `children`    | `ReactNode`                                                                     | -         | ✔        | Content of the Tag                                                                                               |
| `color`       | [Emotion Color dictionary][dictionary-color], `neutral`, `default` (deprecated) | `neutral` | ✕        | Color of the component; [**DEPRECATED**][deprecated] The value `default` will be replaced by the value `neutral` |
| `elementType` | `React.Element`                                                                 | `span`    | ✕        | HTML tag                                                                                                         |
| `isSubtle`    | `boolean`                                                                       | `false`   | ✕        | If is Subtle color variant used                                                                                  |
| `ref`         | `ForwardedRef<HTMLSpanElement>`                                                 | -         | ✕        | Tag element reference                                                                                            |
| `size`        | [Size Extended dictionary][dictionary-size]                                     | `medium`  | ✕        | Size of the Tag                                                                                                  |
| `tag`         | `React.Element`                                                                 | `span`    | ✕        | [**DEPRECATED**][deprecated] in favor of `elementType`; HTML tag                                                 |
| `theme`       | `light`, `dark`                                                                 | `null`    | ✕        | [**DEPRECATED**][deprecated] in favor of `isSubtle`; Theme of the component                                      |

For detailed information see [Tag](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Tag/README.md) component

[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/README.md#deprecations
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
