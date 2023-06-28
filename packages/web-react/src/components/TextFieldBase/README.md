# TextFieldBase

This is React implementation of the abstract component TextFieldBase for the purposes of the form components [TextField] and [TextArea].

Basic example usage:

```jsx
<TextFieldBase id="textFieldBaseDefault" label="Example TextFieldBase" name="textFieldBaseDefault" />
```

Advanced example usage:

```jsx
<TextFieldBase
  helperText="custom helper text"
  id="textFieldBaseAdvanced"
  isMultiline
  isRequired
  label="Example multiline TextFieldBase"
  name="textFieldBaseAdvanced"
  placeholder="Placeholder"
  validationState="danger"
  validationText="validation failed"
/>
```

TextFieldBase with password toggle (button to reveal the password):

```jsx
<TextFieldBase
  hasPasswordToggle
  id="textFieldBasePasswordToggle"
  isRequired
  label="Password"
  name="textFieldBasePasswordToggle"
  placeholder="Placeholder"
  validationState="danger"
  validationText="validation failed"
/>
```

## Available props

| Prop name           | Type                                                          | Default | Required | Description                                                             |
| ------------------- | ------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `autocomplete`      | `boolean`                                                     | -       | no       | If the field should have autocomplete enabled                           |
| `hasPasswordToggle` | `boolean`                                                     | -       | no       | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`        | `string`                                                      | -       | no       | Custom helper text                                                      |
| `id`                | `string`                                                      | -       | yes      | Input and label identification                                          |
| `isDisabled`        | `boolean`                                                     | -       | no       | Whether is field disabled                                               |
| `isLabelHidden`     | `boolean`                                                     | -       | no       | Whether is label hidden                                                 |
| `isMultiline`       | `boolean`                                                     | -       | no       | Whether is DOM element `textarea`                                       |
| `isRequired`        | `boolean`                                                     | -       | no       | Whether is field required                                               |
| `label`             | `string`                                                      | -       | no       | Label text                                                              |
| `name`              | `string`                                                      | -       | no       | Input name                                                              |
| `pattern`           | `string`                                                      | -       | no       | Defines regular expressions for allowed value types                     |
| `placeholder`       | `string`                                                      | -       | no       | Input placeholder                                                       |
| `ref`               | `ForwardedRef<HTMLInputElement or HTMLTextAreaElement>`       | -       | no       | Field element reference                                                 |
| `type`              | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | -       | no       | Input type                                                              |
| `validationState`   | [Validation dictionary][dictionary-validation]                | -       | no       | Type of validation state.                                               |
| `validationText`    | `string`, `string[]`                                          | -       | no       | Validation text                                                         |
| `value`             | `string`                                                      | -       | no       | Input value                                                             |

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[textfield]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextField/README.md
[textarea]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextArea/README.md
