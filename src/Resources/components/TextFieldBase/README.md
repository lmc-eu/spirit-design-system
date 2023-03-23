# TextFieldBase

This is Twig implementation of the abstract component [TextFieldBase] for the purposes of the form components TextField and TextArea.

Basic example usage:

```html
<TextFieldBase id="example" label="Label" name="example" />
```

Advanced example usage:

Default TextFieldBase:

```html
<TextFieldBase
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

TextFieldBase with password toggle (button to reveal the password):

```html
<TextFieldBase
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
{% include "@spirit/textFieldBase.twig" with { props: {
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
| `class`             | `string`                                                             | `null`  | no       | Custom CSS class                                                                                                                   |
| `hasPasswordToggle` | `bool`                                                               | `false` | no       | If true, the `type` is set to `password` and a password toggle is shown                                                            |
| `helperText`        | `string`                                                             | `null`  | no       | Custom helper text                                                                                                                 |
| `id`                | `string`                                                             | —       | yes      | Input and label identification                                                                                                     |
| `isDisabled`        | `bool`                                                               | `false` | no       | If true, input is disabled                                                                                                         |
| `isFluid`           | `bool`                                                               | `false` | no       | If true, the element spans to the full width of its parent                                                                         |
| `isLabelHidden`     | `bool`                                                               | `false` | no       | If true, label is hidden                                                                                                           |
| `isMultiline`       | `bool`                                                               | `false` | no       | If true, rendered DOM element is `textarea`                                                                                        |
| `isRequired`        | `bool`                                                               | `false` | no       | If true, input is required                                                                                                         |
| `label`             | `string`                                                             | —       | yes      | Label text                                                                                                                         |
| `message`           | `string`                                                             | `null`  | no       | Validation message                                                                                                                 |
| `name`              | `string`                                                             | `null`  | no       | Input name                                                                                                                         |
| `pattern`           | `string`                                                             | `null`  | no       | Defines regular expressions for allowed value types                                                                                |
| `placeholder`       | `string`                                                             | `null`  | no       | Input placeholder                                                                                                                  |
| `type`              | `email`, `number`, `password`, `search`, `tel`, `text`, `url`        | `text`  | no       | Input type                                                                                                                         |
| `validationState`   | [Validation dictionary][dictionary-validation], `error` (deprecated) | `null`  | no       | Type of validation state. [**DEPRECATED**][deprecated] The value "error" in the dictionary will be replaced by the value "danger". |
| `value`             | `string`                                                             | `null`  | no       | Input value                                                                                                                        |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

[textfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextField
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
