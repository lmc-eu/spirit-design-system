# Button

This is React implementation of the [Button][button].

## Basic Example Usage

```jsx
import { Button } from '@lmc-eu/spirit-web-react';
```

```jsx
  <Button color="primary">Click me</Button>
  <Button color="secondary">Click me</Button>
  <Button color="tertiary">Click me</Button>
  <Button color="plain">Click me</Button>
  <Button color="success">Click me</Button>
  <Button color="informative">Click me</Button>
  <Button color="warning">Click me</Button>
  <Button color="danger">Click me</Button>
```

### Example Usage with Third-Party Component

So if you use a third-party component, the Button will take on all of its proper attributes.

```jsx
import { RouterLink } from 'react-router-dom';

<Button elementType={RouterLink} to="/">
  Link to home
</Button>;
```

### How to Make a Fluid Button

To span a `Button` to the full width of its parent, you can use display utility classes or `Grid` to achieve the desired layout.

```jsx
<div className="d-grid">
  <Button>Primary block-level Button</Button>
</div>
<div className="d-grid d-tablet-block">
  <Button>Primary responsive block-level Button</Button>
</div>
<Grid
  cols={{ mobile: 1, tablet: 2 }}
  spacing="space-1100"
>
  <Button>Primary responsive block-level Button</Button>
  <Button color="secondary">Secondary responsive block-level Button</Button>
</Grid>
```

### DEPRECATION NOTICE

Property `isBlock` is deprecated and will be removed in the next major release.

For more information, please read the section [How to Make a Fluid Button](#how-to-make-a-fluid-button).

### API

| Name            | Type                                                                                           | Default   | Required | Description                                                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`      | `ReactNode`                                                                                    | `null`    | ✕        | Content of the Button                                                                                                                                         |
| `color`         | [ComponentButtonColorType][readme-generated-types], [EmotionColorType][readme-generated-types] | `primary` | ✕        | Color variant                                                                                                                                                 |
| `elementType`   | `ElementType`                                                                                  | `button`  | ✕        | Type of element                                                                                                                                               |
| `isBlock`       | `bool`                                                                                         | `false`   | ✕        | [**DEPRECATED**](#deprecation-notice) Span the element to the full width of its parent, see [How to Make a Fluid Button](#how-to-make-a-fluid-button) section |
| `isDisabled`    | `bool`                                                                                         | `false`   | ✕        | If true, Button is disabled                                                                                                                                   |
| `isLoading`     | `bool`                                                                                         | `false`   | ✕        | If true, Button is in a loading state, disabled and the Spinner is visible                                                                                    |
| `isSymmetrical` | `bool`                                                                                         | `false`   | ✕        | If true, Button has symmetrical dimensions, usually only with an Icon                                                                                         |
| `name`          | `string`                                                                                       | —         | ✕        | For use a button as a form data reference                                                                                                                     |
| `onClick`       | `string`                                                                                       | `null`    | ✕        | JS function to call on click                                                                                                                                  |
| `ref`           | `ForwardedRef<HTMLButtonElement>`                                                              | —         | ✕        | Button element reference                                                                                                                                      |
| `size`          | [Size dictionary][dictionary-size]                                                             | `medium`  | ✕        | Size variant                                                                                                                                                  |
| `type`          | `string`                                                                                       | `button`  | ✕        | Type of the Button                                                                                                                                            |

For more information see [Button][button] component. Button also contain all the appropriate
attributes according to the type of element. The default element type for Button is `<button>`.

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
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-generated-types]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#types-generated-from-design-tokens
[readme-icon-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Icon/README.md#api
[readme-icon-usage]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Icon/README.md#usage
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
