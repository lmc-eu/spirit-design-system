# TextField

This is Twig implementation of the [TextField] component.

Basic example usage:

```html
<TextField id="example" label="Label" name="example" />
```

Advanced example usage:

```html
<TextField
  id="example2"
  isRequired
  label="Password"
  messsage="validation failed"
  name="example2"
  placeholder="Placeholder"
  type="password"
  validationState="error"
/>
```

Without lexer:

```twig
{% include "@spirit/textField.twig" with { props: {
    id: "example",
    type: "text",
    label: "Password",
    name: "example",
    isRequired: true,
    validationState: "error",
    message: "validation failed",
}} %}
```

## API

| Prop name         | Type                                                          | Default | Required | Description                                                |
| ----------------- | ------------------------------------------------------------- | ------- | -------- | ---------------------------------------------------------- |
| `class`           | `string`                                                      | `null`  | no       | Custom CSS class                                           |
| `id`              | `string`                                                      | —       | yes      | Input and label identification                             |
| `isDisabled`      | `bool`                                                        | `false` | no       | If true, input is disabled                                 |
| `isFluid`         | `bool`                                                        | `false` | no       | If true, the element spans to the full width of its parent |
| `isLabelHidden`   | `bool`                                                        | `false` | no       | If true, label is hidden                                   |
| `isRequired`      | `bool`                                                        | `false` | no       | If true, input is required                                 |
| `label`           | `string`                                                      | —       | yes      | Label text                                                 |
| `message`         | `string`                                                      | `null`  | no       | Validation or help message                                 |
| `name`            | `string`                                                      | `null`  | no       | Input name                                                 |
| `placeholder`     | `string`                                                      | `null`  | no       | Input placeholder                                          |
| `inputWidth`      | `number`                                                      | `null`  | no       | Input width                                                |
| `type`            | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | `text`  | no       | Input type                                                 |
| `validationState` | `success`, `warning`, `error`                                 | `null`  | no       | Type of validation state                                   |
| `value`           | `string`                                                      | `null`  | no       | Input value                                                |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

[textfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextField
