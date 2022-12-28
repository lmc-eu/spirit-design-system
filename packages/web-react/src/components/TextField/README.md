# TextField

TextField enables the user to type in text information. It has an input, a
label, and an optional message. It supports several input types like `text` or
`password` etc. It can be disabled or have an error state. The label can be
hidden or show if the input is required.

```jsx
<TextField id="example-text" name="example" validationState="error" message="validation failed" isRequired />
<TextField id="example-password" type="password" name="example" validationState="error" message="validation failed" isRequired />
```

## Available props

| Name              | Type                                                          | Description                    |
| ----------------- | ------------------------------------------------------------- | ------------------------------ |
| `id`              | string                                                        | Input and label identification |
| `inputWidth`      | number                                                        | Input width                    |
| `isDisabled`      | boolean                                                       | Whether is field disabled      |
| `isLabelHidden`   | boolean                                                       | Whether is label hidden        |
| `isRequired`      | boolean                                                       | Whether is field required      |
| `label`           | string                                                        | Label text                     |
| `message`         | string                                                        | Validation or help message     |
| `name`            | string                                                        | Input name                     |
| `placeholder`     | string                                                        | Input placeholder              |
| `type`            | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | Input type                     |
| `validationState` | `success`, `warning`, `error`                                 | Type of validation state       |
| `value`           | string                                                        | Input value                    |

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
