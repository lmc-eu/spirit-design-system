# TextField

This is Twig implementation of the [TextField] component.

Basic example usage:

```html
<TextField id="example" label="Label" name="example" />
```

Advanced example usage:

Default TextField:

```html
<TextField
  helperText="custom helper text"
  id="example2"
  isRequired
  label="Label"
  message="validation failed"
  name="example2"
  placeholder="Placeholder"
  type="text"
  validationState="danger"
/>
```

TextField with password toggle (button to reveal the password):

```html
<TextField
  hasPasswordToggle
  id="example3"
  isRequired
  label="Password"
  message="validation failed"
  name="example3"
  placeholder="Placeholder"
  validationState="danger"
/>
```

Without lexer:

```twig
{% include "@spirit/textField.twig" with { props: {
    helperText: "custom helper text",
    id: "example",
    isRequired: true,
    label: "Password",
    message: "validation failed",
    name: "example",
    type: "text",
    validationState: "danger",
}} %}
```

## API

| Prop name           | Type                                                                 | Default | Required | Description                                                                                                                        |
| ------------------- | -------------------------------------------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `autocomplete`      | `bool`                                                               | `false` | no       | If the field should have autocomplete enabled                                                                                      |
| `hasPasswordToggle` | `bool`                                                               | `false` | no       | If true, the `type` is set to `password` and a password toggle is shown                                                            |
| `helperText`        | `string`                                                             | `null`  | no       | Custom helper text                                                                                                                 |
| `id`                | `string`                                                             | —       | yes      | Input and label identification                                                                                                     |
| `inputProps`        | `string[]`                                                           | `[]`    | no       | Pass additional attributes to the input element                                                                                    |
| `isDisabled`        | `bool`                                                               | `false` | no       | If true, input is disabled                                                                                                         |
| `isFluid`           | `bool`                                                               | `false` | no       | If true, the element spans to the full width of its parent                                                                         |
| `isLabelHidden`     | `bool`                                                               | `false` | no       | If true, label is hidden                                                                                                           |
| `isRequired`        | `bool`                                                               | `false` | no       | If true, input is required                                                                                                         |
| `label`             | `string`                                                             | —       | yes      | Label text                                                                                                                         |
| `message`           | `string`, `string[]`                                                 | `null`  | no       | Validation message                                                                                                                 |
| `name`              | `string`                                                             | `null`  | no       | Input name                                                                                                                         |
| `placeholder`       | `string`                                                             | `null`  | no       | Input placeholder                                                                                                                  |
| `inputWidth`        | `number`                                                             | `null`  | no       | Input width                                                                                                                        |
| `type`              | `email`, `number`, `password`, `search`, `tel`, `text`, `url`        | `text`  | no       | Input type                                                                                                                         |
| `validationState`   | [Validation dictionary][dictionary-validation], `error` (deprecated) | `null`  | no       | Type of validation state. [**DEPRECATED**][deprecated] The value "error" in the dictionary will be replaced by the value "danger". |
| `value`             | `string`                                                             | `null`  | no       | Input value                                                                                                                        |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

[textfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextField
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
