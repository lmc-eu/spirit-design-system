# Button

This is React implementation of the [Button][button].

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

### API

| Name               | Type                                                                                      | Default   | Required | Description                                                                |
| ------------------ | ----------------------------------------------------------------------------------------- | --------- | -------- | -------------------------------------------------------------------------- |
| `children`         | `ReactNode`                                                                               | `null`    | ✕        | Content of the Button                                                      |
| `color`            | [Action Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                              |
| `elementType`      | `ElementType`                                                                             | `button`  | ✕        | Type of element                                                            |
| `isBlock`          | `bool`                                                                                    | `false`   | ✕        | Span the element to the full width of its parent                           |
| `isDisabled`       | `bool`                                                                                    | `false`   | ✕        | If true, Button is disabled                                                |
| `isLoading`        | `bool`                                                                                    | `false`   | ✕        | If true, Button is in a loading state, disabled and the Spinner is visible |
| `isSquare`         | `bool`                                                                                    | `false`   | ✕        | If true, Button is square, usually only with an Icon                       |
| `name`             | `string`                                                                                  | —         | ✕        | For use a button as a form data reference                                  |
| `onClick`          | `string`                                                                                  | `null`    | ✕        | JS function to call on click                                               |
| `ref`              | `ForwardedRef<HTMLButtonElement>`                                                         | —         | ✕        | Button element reference                                                   |
| `size`             | [Size dictionary][dictionary-size]                                                        | `medium`  | ✕        | Size variant                                                               |
| `type`             | `string`                                                                                  | `button`  | ✕        | Type of the Button                                                         |
| `UNSAFE_className` | `string`                                                                                  | —         | ✕        | Wrapper custom class name                                                  |
| `UNSAFE_style`     | `CSSProperties`                                                                           | —         | ✕        | Wrapper custom style                                                       |

For more information see [Button][button] component. Button also contain all the appropriate
attributes according to the type of element. The default element type for Button is `<button>`.

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
