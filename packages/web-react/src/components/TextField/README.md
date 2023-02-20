# TextField

TextField enables the user to type in text information. It has an input, a
label, and an optional message. It supports several input types like `text` or
`password` etc. It can be disabled or have an error state. The label can be
hidden or show if the input is required.

```jsx
<TextField id="example-text" name="example" validationState="error" message="validation failed" isRequired />
<TextField id="example-password" type="password" name="example" validationState="error" message="validation failed" isRequired />
<TextField id="example-password-toggle" name="example" validationState="error" message="validation failed" hasPasswordToggle isRequired />
```

## Available props

| Prop name           | Type                                                          | Default | Required | Description                                                             |
| ------------------- | ------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `hasPasswordToggle` | boolean                                                       | -       | yes      | If true, the `type` is set to `password` and a password toggle is shown |
| `id`                | string                                                        | -       | no       | Input and label identification                                          |
| `inputWidth`        | number                                                        | -       | no       | Input width                                                             |
| `isDisabled`        | boolean                                                       | -       | no       | Whether is field disabled                                               |
| `isLabelHidden`     | boolean                                                       | -       | no       | Whether is label hidden                                                 |
| `isRequired`        | boolean                                                       | -       | no       | Whether is field required                                               |
| `label`             | string                                                        | -       | no       | Label text                                                              |
| `message`           | string                                                        | -       | no       | Validation or help message                                              |
| `name`              | string                                                        | -       | no       | Input name                                                              |
| `placeholder`       | string                                                        | -       | no       | Input placeholder                                                       |
| `type`              | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | -       | no       | Input type                                                              |
| `validationState`   | `success`, `warning`, `danger`, `error`                       | -       | no       | Type of validation state. See [dictionaries]                            |
| `value`             | string                                                        | -       | no       | Input value                                                             |

## Custom component

Text field classes are fabricated using `useTextFieldStyleProps` hook. You can use it to create your own custom TextField component.

```jsx
const CustomTextField = (props: SpiritTextFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextFieldStyleProps(props);

  return (
    <div className={classProps.root}>
      <input {...modifiedProps} className={classProps.input} />
      <label htmlFor={props.id} className={styleProps.label}>
        {props.label}
      </label>
    </div>
  );
};
```

For detailed information see [TextField](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/TextField/README.md) component.

[docs]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md
