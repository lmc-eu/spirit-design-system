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

## API

| Name          | Type                                                    | Default   | Required | Description                     |
| ------------- | ------------------------------------------------------- | --------- | -------- | ------------------------------- |
| `children`    | `ReactNode`                                             | —         | ✔        | Content of the Tag              |
| `color`       | [Emotion Color dictionary][dictionary-color], `neutral` | `neutral` | ✕        | Color of the component          |
| `elementType` | `React.Element`                                         | `span`    | ✕        | HTML tag                        |
| `isSubtle`    | `bool`                                                  | `false`   | ✕        | If is Subtle color variant used |
| `ref`         | `ForwardedRef<HTMLSpanElement>`                         | —         | ✕        | Tag element reference           |
| `size`        | [Size Extended dictionary][dictionary-size]             | `medium`  | ✕        | Size of the Tag                 |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

For detailed information see [Tag][tag] component

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[tag]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Tag/README.md
