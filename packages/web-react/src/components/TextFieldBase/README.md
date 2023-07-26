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

## API

| Name                | Type                                                                        | Default | Required | Description                                                             |
| ------------------- | --------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `autoComplete`      | `bool`                                                                      | —       | ✕        | [Automated assistance in filling][autocomplete-attr]                    |
| `hasPasswordToggle` | `bool`                                                                      | —       | ✕        | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`        | `string`                                                                    | —       | ✕        | Custom helper text                                                      |
| `id`                | `string`                                                                    | —       | ✔        | Input and label identification                                          |
| `isDisabled`        | `bool`                                                                      | —       | ✕        | Whether is field disabled                                               |
| `isLabelHidden`     | `bool`                                                                      | —       | ✕        | Whether is label hidden                                                 |
| `isMultiline`       | `bool`                                                                      | —       | ✕        | Whether is DOM element `textarea`                                       |
| `isRequired`        | `bool`                                                                      | —       | ✕        | Whether is field required                                               |
| `label`             | `string`                                                                    | —       | ✕        | Label text                                                              |
| `name`              | `string`                                                                    | —       | ✕        | Input name                                                              |
| `pattern`           | `string`                                                                    | —       | ✕        | Defines regular expressions for allowed value types                     |
| `placeholder`       | `string`                                                                    | —       | ✕        | Input placeholder                                                       |
| `ref`               | `ForwardedRef<HTMLInputElement or HTMLTextAreaElement>`                     | —       | ✕        | Field element reference                                                 |
| `type`              | [`email` \| `number` \| `password` \| `search` \| `tel` \| `text` \| `url`] | —       | ✕        | Input type                                                              |
| `UNSAFE_className`  | `string`                                                                    | —       | ✕        | Wrapper custom class name                                               |
| `UNSAFE_style`      | `CSSProperties`                                                             | —       | ✕        | Wrapper custom style                                                    |
| `validationState`   | [Validation dictionary][dictionary-validation]                              | —       | ✕        | Type of validation state.                                               |
| `validationText`    | [`string` \| `string[]`]                                                    | —       | ✕        | Validation text                                                         |
| `value`             | `string`                                                                    | —       | ✕        | Input value                                                             |

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[textfield]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextField/README.md
[textarea]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextArea/README.md
[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
