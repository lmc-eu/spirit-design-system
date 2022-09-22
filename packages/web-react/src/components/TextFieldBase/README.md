# TextFieldBase

This is React implementation of the abstract component [TextFieldBase] for the purposes of the form components TextField and TextArea.

```jsx
<TextFieldBase id="example" type="text" name="example" isRequired validationState="error" message="validation failed" />
<TextFieldBase id="example" type="password" name="example" isRequired validationState="error" message="validation failed" />
<TextFieldBase id="example" type="email" name="example" isRequired validationState="error" message="validation failed" />
```

## Available props

| Name              | Type                          | Description                       |
| ----------------- | ----------------------------- | --------------------------------- |
| `id`              | string                        | Input and label identification    |
| `name`            | string                        | Input name                        |
| `type`            | `text`, `password`, `email`   | Input type                        |
| `label`           | string                        | Label text                        |
| `placeholder`     | string                        | Input placeholder                 |
| `value`           | string                        | Input value                       |
| `message`         | string                        | Validation or help message        |
| `validationState` | `success`, `warning`, `error` | Type of validation state          |
| `isDisabled`      | boolean                       | Whether is field disabled         |
| `isMultiline`     | boolean                       | Whether is DOM element `textarea` |
| `isRequired`      | boolean                       | Whether is field required         |
| `isLabelHidden`   | boolean                       | Whether is label hidden           |
