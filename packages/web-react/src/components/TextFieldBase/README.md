# TextFieldBase

This is React implementation of the abstract component [TextFieldBase] for the purposes of the form components TextField and TextArea.

```jsx
<TextFieldBase id="example" label="Example TextFieldBase" name="example" isRequired validationState="error" message="validation failed" />
<TextFieldBase id="example" label="Example multiline TextFieldBase" name="example" isMultiline isRequired validationState="error" message="validation failed" />
```

## Available props

| Name                | Type                                                          | Description                                                             |
| ------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `hasPasswordToggle` | boolean                                                       | If true, the `type` is set to `password` and a password toggle is shown |
| `id`                | string                                                        | Input and label identification                                          |
| `isDisabled`        | boolean                                                       | Whether is field disabled                                               |
| `isLabelHidden`     | boolean                                                       | Whether is label hidden                                                 |
| `isMultiline`       | boolean                                                       | Whether is DOM element `textarea`                                       |
| `isRequired`        | boolean                                                       | Whether is field required                                               |
| `label`             | string                                                        | Label text                                                              |
| `message`           | string                                                        | Validation or help message                                              |
| `name`              | string                                                        | Input name                                                              |
| `placeholder`       | string                                                        | Input placeholder                                                       |
| `type`              | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | Input type                                                              |
| `validationState`   | `success`, `warning`, `error`                                 | Type of validation state                                                |
| `value`             | string                                                        | Input value                                                             |
