# ButtonLink

## Basic Example Usage

```jsx
import { ButtonLink } from '@lmc-eu/spirit-web-react';
```

```jsx
  <ButtonLink color="primary">Click me</ButtonLink>
  <ButtonLink color="secondary">Click me</ButtonLink>
  <ButtonLink color="tertiary">Click me</ButtonLink>
  <ButtonLink color="plain">Click me</ButtonLink>
  <ButtonLink color="success">Click me</ButtonLink>
  <ButtonLink color="informative">Click me</ButtonLink>
  <ButtonLink color="warning">Click me</ButtonLink>
  <ButtonLink color="danger">Click me</ButtonLink>
```

### API

| Name            | Type                                                                                      | Default   | Required | Description                                                                    |
| --------------- | ----------------------------------------------------------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `children`      | `ReactNode`                                                                               | `null`    | ✕        | Content of the ButtonLink                                                      |
| `color`         | [Action Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                                  |
| `elementType`   | `ElementType`                                                                             | `a`       | ✕        | Type of element                                                                |
| `href`          | `string`                                                                                  | —         | ✓        | Link URL                                                                       |
| `isBlock`       | `bool`                                                                                    | `false`   | ✕        | Span the element to the full width of its parent                               |
| `isDisabled`    | `bool`                                                                                    | `false`   | ✕        | If true, ButtonLink is disabled                                                |
| `isLoading`     | `bool`                                                                                    | `false`   | ✕        | If true, ButtonLink is in a loading state, disabled and the Spinner is visible |
| `isSymmetrical` | `bool`                                                                                    | `false`   | ✕        | If true, ButtonLink has symmetrical dimensions, usually only with an Icon      |
| `onClick`       | `string`                                                                                  | `null`    | ✕        | JS function to call on click                                                   |
| `ref`           | `ForwardedRef<HTMLAnchorElement>`                                                         | —         | ✕        | Anchor element reference                                                       |
| `size`          | [Size dictionary][dictionary-size]                                                        | `medium`  | ✕        | Size variant                                                                   |
| `target`        | `string`                                                                                  | `null`    | ✕        | Link target                                                                    |

For more information see [Button][button] component. ButtonLink also contain all the appropriate
attributes according to the type of element.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Icons

This component uses the `Icon` component internally. To ensure correct rendering,
please refer to the [Icon component documentation][web-react-icon-documentation] for setup instructions.

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[web-react-icon-documentation]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Icon/README.md#-usage
