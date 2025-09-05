# ButtonLink

## Basic Example Usage

```jsx
import { ButtonLink } from '@lmc-eu/spirit-web-react';
```

```jsx
  <ButtonLink href="#" color="primary">Click me</ButtonLink>
  <ButtonLink href="#" color="secondary">Click me</ButtonLink>
  <ButtonLink href="#" color="tertiary">Click me</ButtonLink>
  <ButtonLink href="#" color="plain">Click me</ButtonLink>
  <ButtonLink href="#" color="success">Click me</ButtonLink>
  <ButtonLink href="#" color="informative">Click me</ButtonLink>
  <ButtonLink href="#" color="warning">Click me</ButtonLink>
  <ButtonLink href="#" color="danger">Click me</ButtonLink>
```

### How to Make a Fluid ButtonLink

To span a `ButtonLink` to the full width of its parent, you can use display utility classes or `Grid` to achieve the desired layout.

```jsx
<div className="d-grid">
  <ButtonLink href="#">Primary block-level Button</ButtonLink>
</div>
<div className="d-grid d-tablet-block">
  <ButtonLink href="#">Primary responsive block-level Button</ButtonLink>
</div>
<Grid
  cols={{ mobile: 1, tablet: 2 }}
  spacing="space-1100"
>
  <ButtonLink href="#">Primary responsive block-level Button</ButtonLink>
  <ButtonLink href="#" color="secondary">Secondary responsive block-level Button</ButtonLink>
</Grid>
```

### DEPRECATION NOTICE

Property `isBlock` is deprecated and will be removed in the next major release.

For more information, please read the section [How to Make a Fluid ButtonLink](#how-to-make-a-fluid-buttonlink).

### API

| Name            | Type                                                                                          | Default   | Required | Description                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------- | --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`      | `ReactNode`                                                                                   | `null`    | ✕        | Content of the ButtonLink                                                                                                                                             |
| `color`         | [Component Button dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                                                                                                                         |
| `elementType`   | `ElementType`                                                                                 | `a`       | ✕        | Type of element                                                                                                                                                       |
| `href`          | `string`                                                                                      | —         | ✓        | Link URL                                                                                                                                                              |
| `isBlock`       | `bool`                                                                                        | `false`   | ✕        | [**DEPRECATED**](#deprecation-notice) Span the element to the full width of its parent, see [How to Make a Fluid ButtonLink](#how-to-make-a-fluid-buttonlink) section |
| `isDisabled`    | `bool`                                                                                        | `false`   | ✕        | If true, ButtonLink is disabled                                                                                                                                       |
| `isLoading`     | `bool`                                                                                        | `false`   | ✕        | If true, ButtonLink is in a loading state, disabled and the Spinner is visible                                                                                        |
| `isSymmetrical` | `bool`                                                                                        | `false`   | ✕        | If true, ButtonLink has symmetrical dimensions, usually only with an Icon                                                                                             |
| `onClick`       | `string`                                                                                      | `null`    | ✕        | JS function to call on click                                                                                                                                          |
| `ref`           | `ForwardedRef<HTMLAnchorElement>`                                                             | —         | ✕        | Anchor element reference                                                                                                                                              |
| `size`          | [Size dictionary][dictionary-size]                                                            | `medium`  | ✕        | Size variant                                                                                                                                                          |
| `target`        | `string`                                                                                      | `null`    | ✕        | Link target                                                                                                                                                           |

For more information see [Button][button] component. ButtonLink also contain all the appropriate
attributes according to the type of element.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Icons

This component uses the `Icon` component internally. To ensure correct rendering,
please refer to the [Icon component documentation][readme-icon-usage] for setup instructions.

Icon sizes differ based on button size.
You can always set your desired size of an icon with `boxSize` prop.

### Button and Icon Sizes

| Button Size | Icon Size |
| ----------- | --------- |
| small       | 20px      |
| medium      | 20px      |
| large       | 24px      |

You can always set your desired size of an icon with the [`boxSize`][readme-icon-api] prop.

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-icon-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Icon/README.md#api
[readme-icon-usage]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Icon/README.md#usage
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
