# TextFieldBase

This is React implementation of the abstract component TextFieldBase for the purposes of the form components [TextField] and [TextArea].

```jsx
<TextFieldBase id="example" label="Example TextFieldBase" name="example" isRequired validationState="danger" message="validation failed" />
<TextFieldBase id="example" label="Example multiline TextFieldBase" name="example" isMultiline isRequired validationState="danger" message="validation failed" />
```

## Available props

| Prop name           | Type                                                                 | Default | Required | Description                                                                                                                        |
| ------------------- | -------------------------------------------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `autocomplete`      | `boolean`                                                            | -       | no       | If the field should have autocomplete enabled                                                                                      |
| `hasPasswordToggle` | `boolean`                                                            | -       | no       | If true, the `type` is set to `password` and a password toggle is shown                                                            |
| `helperText`        | `string`                                                             | -       | no       | Custom helper text                                                                                                                 |
| `id`                | `string`                                                             | -       | yes      | Input and label identification                                                                                                     |
| `isDisabled`        | `boolean`                                                            | -       | no       | Whether is field disabled                                                                                                          |
| `isLabelHidden`     | `boolean`                                                            | -       | no       | Whether is label hidden                                                                                                            |
| `isMultiline`       | `boolean`                                                            | -       | no       | Whether is DOM element `textarea`                                                                                                  |
| `isRequired`        | `boolean`                                                            | -       | no       | Whether is field required                                                                                                          |
| `label`             | `string`                                                             | -       | no       | Label text                                                                                                                         |
| `message`           | `string`, `string[]`                                                 | -       | no       | Validation message                                                                                                                 |
| `name`              | `string`                                                             | -       | no       | Input name                                                                                                                         |
| `pattern`           | `string`                                                             | -       | no       | Defines regular expressions for allowed value types                                                                                |
| `placeholder`       | `string`                                                             | -       | no       | Input placeholder                                                                                                                  |
| `ref`               | `ForwardedRef<HTMLInputElement or HTMLTextAreaElement>`              | -       | no       | Field element reference                                                                                                            |
| `type`              | `email`, `number`, `password`, `search`, `tel`, `text`, `url`        | -       | no       | Input type                                                                                                                         |
| `validationState`   | [Validation dictionary][dictionary-validation], `error` (deprecated) | -       | no       | Type of validation state. [**DEPRECATED**][deprecated] The value "error" in the dictionary will be replaced by the value "danger". |
| `value`             | `string`                                                             | -       | no       | Input value                                                                                                                        |

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/README.md#deprecations
[textfield]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextField/README.md
[textarea]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextArea/README.md
