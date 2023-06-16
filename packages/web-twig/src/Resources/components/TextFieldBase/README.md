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
  validationText="validation failed"
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
  validationText="validation failed"
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
    validationText: "validation failed",
    name: "example",
    type: "text",
    validationState: "danger",
}} %}
```

## API

| Prop name               | Type                                                          | Default | Required | Description                                                             |
| ----------------------- | ------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `UNSAFE_helperText`     | `string`                                                      | `null`  | no       | Unescaped custom helper text                                            |
| `UNSAFE_label`          | `string`                                                      | —       | yes\*    | Unescaped label text                                                    |
| `UNSAFE_validationText` | `string`, `string[]`                                          | `null`  | no       | Unescaped validation text                                               |
| `autocomplete`          | `bool`                                                        | `false` | no       | If the field should have autocomplete enabled                           |
| `hasPasswordToggle`     | `bool`                                                        | `false` | no       | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`            | `string`                                                      | `null`  | no       | Custom helper text                                                      |
| `id`                    | `string`                                                      | —       | yes      | Input and label identification                                          |
| `inputProps`            | `string[]`                                                    | `[]`    | no       | Pass additional attributes to the input/textarea element                |
| `isAutoResizing`        | `bool`                                                        | `false` | no       | If true, TextArea adjusts its height as user types                      |
| `isDisabled`            | `bool`                                                        | `false` | no       | If true, input is disabled                                              |
| `isFluid`               | `bool`                                                        | `false` | no       | If true, the element spans to the full width of its parent              |
| `isLabelHidden`         | `bool`                                                        | `false` | no       | If true, label is hidden                                                |
| `isMultiline`           | `bool`                                                        | `false` | no       | If true, rendered DOM element is `textarea`                             |
| `isRequired`            | `bool`                                                        | `false` | no       | If true, input is required                                              |
| `label`                 | `string`                                                      | —       | yes\*    | Label text                                                              |
| `name`                  | `string`                                                      | `null`  | no       | Input name                                                              |
| `pattern`               | `string`                                                      | `null`  | no       | Defines regular expressions for allowed value types                     |
| `placeholder`           | `string`                                                      | `null`  | no       | Input placeholder                                                       |
| `type`                  | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | `text`  | no       | Input type                                                              |
| `validationState`       | [Validation dictionary][dictionary-validation]                | `null`  | no       | Type of validation state.                                               |
| `validationText`        | `string`, `string[]`                                          | `null`  | no       | Validation text                                                         |
| `value`                 | `string`                                                      | `null`  | no       | Input value                                                             |

\*: The label is required for this component. Use `label` or `UNSAFE_label` to set the label.

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

[textfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextField
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
