# Pill

Pills can be used to show count or label.

```jsx
import { Pill } from '@lmc-eu/spirit-web-react';
```

```jsx
  <Pill color="selected">333</Pill>
  <Pill color="neutral">333</Pill>
  <Pill color="success">3</Pill>
  <Pill color="informative">3</Pill>
  <Pill color="warning">3</Pill>
  <Pill color="danger">3</Pill>
```

## API

| Name       | Type                                                                       | Default    | Required | Description            |
| ---------- | -------------------------------------------------------------------------- | ---------- | -------- | ---------------------- |
| `children` | `ReactNode`                                                                | —          | ✓        | Content of the Pill    |
| `color`    | \[[Emotion Color dictionary][dictionary-color] \| `selected` \| `neutral`] | `selected` | ✕        | Color of the component |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

For detailed information see [Pill][pill] component

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[pill]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Pill/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
