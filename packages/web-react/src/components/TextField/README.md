# TextField

TextField enables the user to type in text information. It has input, label,
and an optional message. It can be of type `text`, `password` or `email`. It could be disabled or have an error state. The label could be hidden
and show if the input is required.

```jsx
<TextField id="example" type="text" name="example" isRequired validationState="error" message="validation failed" />
<TextField id="example" type="password" name="example" isRequired validationState="error" message="validation failed" />
<TextField id="example" type="email" name="example" isRequired validationState="error" message="validation failed" />
```

## Available props

| Name              | Type                          | Description                    |
| ----------------- | ----------------------------- | ------------------------------ |
| `id`              | string                        | Input and label identification |
| `name`            | string                        | Input name                     |
| `type`            | `text`, `password`, `email`   | Input type                     |
| `label`           | string                        | Label text                     |
| `placeholder`     | string                        | Input placeholder              |
| `value`           | string                        | Input value                    |
| `message`         | string                        | Validation or help message     |
| `validationState` | `success`, `warning`, `error` | Type of validation state       |
| `isDisabled`      | boolean                       | Whether is field disabled      |
| `isRequired`      | boolean                       | Whether is field required      |
| `isLabelHidden`   | boolean                       | Whether is label hidden        |

## Custom component

Text field classes are fabricated using `useTextFieldStyleProps` hook. You can use it to create your own custom TextField component.

```jsx
const CustomTextField = (props: SpiritTextFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextFieldStyleProps(props);

  return (
    <div className={classProps.root}>
      <input {...modifiedProps} className={classProps.input} />
      <label className={styleProps.label}>{props.label}</label>
    </div>
  );
};
```

For detailed information see [TextField](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/TextField/README.md) component.
