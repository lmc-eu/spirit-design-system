# IconBox

The `IconBox` component is a composition of the `Icon` inside the `Box` component.

```jsx
<IconBox name="search" />
```

## Shape

You can define shape using the `shape` prop.

```jsx
<IconBox name="search" shape="circle" />
```

## Has Border

You can set `hasBorder` prop to render the `IconBox` without a border.

```jsx
<IconBox name="search" hasBorder={false} />
```

## Size

You can define size using the `size` prop.

```jsx
<IconBox name="search" size="large" />
```

## Color

You can define color using the `color` prop.

```jsx
<IconBox name="search" color="primary" />
```

## Implementation Notes

IconBox is a composed component built from [Box][box-component] and [Icon][icon-component] components, designed to streamline the presentation of icons within a consistent visual container.
Its purpose is to improve the user experience by providing sensible defaults for padding, border radius, size, and color, so that icons align visually across the UI with minimal effort.

To keep the API simple and opinionated, some styles and layout options are generalized or preset.
If you encounter limitations or need finer control, you can always use Box and Icon directly for full customization.

```jsx
import { Box, Icon } from '@lmc-eu/spirit-web-react';

<Box backgroundColor="primary" borderRadius="200" borderWidth="100" padding="space-600">
  <Icon name="search" />
</Box>;
```

## API

| Name          | Type                                                                                                                                                              | Default  | Required | Description                      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | -------------------------------- |
| `shape`       | \[`rounded` \| `circle` \| `square`]                                                                                                                              | `circle` | ✕        | Shape of the IconBox             |
| `color`       | \[[Background Color dictionary][dictionary-color] \| Accent Color \| [Emotion Color dictionary][dictionary-color] ✕ [Intensity dictionary][dictionary-intensity]] | -        | ✕        | Color variant of the IconBox     |
| `elementType` | `ElementType`                                                                                                                                                     | `div`    | ✕        | Type of element                  |
| `iconName`    | `string`                                                                                                                                                          | ✓        | ✕        | Name of the icon to render       |
| `size`        | [Size Extended dictionary][dictionary-size]                                                                                                                       | `medium` | ✕        | Size of the IconBox              |
| `hasBorder`   | `bool`                                                                                                                                                            | `true`   | ✕        | Whether the IconBox has a border |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[box-component]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Box/README.md
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#color
[dictionary-intensity]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#intensity
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[icon-component]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Icon/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
