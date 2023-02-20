# TextFieldBase

This is React implementation of the abstract component [TextFieldBase] for the purposes of the form components TextField and TextArea.

```jsx
<TextFieldBase id="example" label="Example TextFieldBase" name="example" isRequired validationState="danger" message="validation failed" />
<TextFieldBase id="example" label="Example multiline TextFieldBase" name="example" isMultiline isRequired validationState="danger" message="validation failed" />
```

## Available props

| Prop name           | Type                                                          | Default | Required | Description                                                             |
| ------------------- | ------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `hasPasswordToggle` | boolean                                                       | -       | no       | If true, the `type` is set to `password` and a password toggle is shown |
| `id`                | string                                                        | -       | yes      | Input and label identification                                          |
| `isDisabled`        | boolean                                                       | -       | no       | Whether is field disabled                                               |
| `isLabelHidden`     | boolean                                                       | -       | no       | Whether is label hidden                                                 |
| `isMultiline`       | boolean                                                       | -       | no       | Whether is DOM element `textarea`                                       |
| `isRequired`        | boolean                                                       | -       | no       | Whether is field required                                               |
| `label`             | string                                                        | -       | no       | Label text                                                              |
| `message`           | string                                                        | -       | no       | Validation or help message                                              |
| `name`              | string                                                        | -       | no       | Input name                                                              |
| `placeholder`       | string                                                        | -       | no       | Input placeholder                                                       |
| `type`              | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | -       | no       | Input type                                                              |
| `validationState`   | `success`, `warning`, `danger`, `error`                       | -       | no       | Type of validation state. See [dictionaries]                            |
| `value`             | string                                                        | -       | no       | Input value                                                             |

[docs]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md
