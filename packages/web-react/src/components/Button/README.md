# Button & ButtonLink

This is React implementation of the [Button] and [ButtonLink][button] components.

## Button

### Basic example usage

```jsx
import { Button } from '@lmc-eu/spirit-web-react';
```

```jsx
  <Button color="primary">Click me</Button>
  <Button color="secondary">Click me</Button>
  <Button color="tertiary">Click me</Button>
  <Button color="inverted">Click me</Button>
  <Button color="success">Click me</Button>
  <Button color="informative">Click me</Button>
  <Button color="warning">Click me</Button>
  <Button color="danger">Click me</Button>
```

### Example usage with third-party component

So if you use a third-party component, the Button will take on all of its proper attributes.

```jsx
import { RouterLink } from 'react-router-dom';

<Button elementType={RouterLink} to="/">
  Link to home
</Button>;
```

### Available props

| Prop name     | Type                                                                                      | Default    | Required | Description                                          |
| ------------- | ----------------------------------------------------------------------------------------- | ---------- | -------- | ---------------------------------------------------- |
| `children`    | `ReactNode`                                                                               | `null`     | no       | Content of the Button                                |
| `color`       | [Action Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary`  | no       | Color variant                                        |
| `elementType` | `ElementType`                                                                             | `'button'` | no       | Type of element                                      |
| `isBlock`     | `bool`                                                                                    | `false`    | no       | Span the element to the full width of its parent     |
| `isDisabled`  | `bool`                                                                                    | `false`    | no       | If true, Button is disabled                          |
| `isSquare`    | `bool`                                                                                    | `false`    | no       | If true, Button is square, usually only with an icon |
| `name`        | `string`                                                                                  | -          | no       | For use a button as a form data reference            |
| `onClick`     | `string`                                                                                  | `null`     | no       | JS function to call on click                         |
| `ref`         | `ForwardedRef<HTMLButtonElement>`                                                         | -          | no       | Button element reference                             |
| `size`        | [Size dictionary][dictionary-size]                                                        | `medium`   | no       | Size variant                                         |
| `type`        | `string`                                                                                  | `button`   | no       | Type of the Button                                   |

For more information see [Button] component. Button also contain all the appropriate
attributes according to the type of element. The default element type for Button is `<button>`.

## ButtonLink

### Basic example usage

```jsx
import { ButtonLink } from '@lmc-eu/spirit-web-react';
```

```jsx
  <ButtonLink color="primary">Click me</ButtonLink>
  <ButtonLink color="secondary">Click me</ButtonLink>
  <ButtonLink color="tertiary">Click me</ButtonLink>
  <ButtonLink color="inverted">Click me</ButtonLink>
  <ButtonLink color="success">Click me</ButtonLink>
  <ButtonLink color="informative">Click me</ButtonLink>
  <ButtonLink color="warning">Click me</ButtonLink>
  <ButtonLink color="danger">Click me</ButtonLink>
```

### Available props

| Prop name     | Type                                                                                      | Default   | Required | Description                                              |
| ------------- | ----------------------------------------------------------------------------------------- | --------- | -------- | -------------------------------------------------------- |
| `children`    | `ReactNode`                                                                               | `null`    | no       | Content of the ButtonLink                                |
| `color`       | [Action Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | no       | Color variant                                            |
| `elementType` | `ElementType`                                                                             | `'a'`     | no       | Type of element                                          |
| `href`        | `string`                                                                                  | —         | yes      | Link URL                                                 |
| `isBlock`     | `bool`                                                                                    | `false`   | no       | Span the element to the full width of its parent         |
| `isDisabled`  | `bool`                                                                                    | `false`   | no       | If true, ButtonLink is disabled                          |
| `isSquare`    | `bool`                                                                                    | `false`   | no       | If true, ButtonLink is square, usually only with an icon |
| `onClick`     | `string`                                                                                  | `null`    | no       | JS function to call on click                             |
| `ref`         | `ForwardedRef<HTMLAnchorElement>`                                                         | -         | no       | Anchor element reference                                 |
| `size`        | [Size dictionary][dictionary-size]                                                        | `medium`  | no       | Size variant                                             |
| `target`      | `string`                                                                                  | `null`    | no       | Link target                                              |

For more information see [Button] component. ButtonLink also contain all the appropriate
attributes according to the type of element. The default element type for ButtonLink is `<a>`.

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
