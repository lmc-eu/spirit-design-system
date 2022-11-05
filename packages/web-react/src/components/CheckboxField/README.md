# CheckboxField

CheckboxField enables the user to check/uncheck choice. It has input, a label,
and an optional message. It could be disabled or have an error state. The label could be hidden
and show if the input is required.

```jsx
<CheckboxField id="example" name="example" isRequired isChecked validationState="error" message="validation failed" />
```

## Available props

| Name              | Type    | Description                    |
| ----------------- | ------- | ------------------------------ |
| `id`              | string  | Input and label identification |
| `name`            | string  | Input name                     |
| `label`           | string  | Label text                     |
| `value`           | string  | Input value                    |
| `message`         | string  | Validation or help message     |
| `validationState` | `error` | Type of validation state       |
| `isDisabled`      | boolean | Whether is field disabled      |
| `isRequired`      | boolean | Whether is field required      |
| `isChecked`       | boolean | Whether is field checked       |
| `isLabelHidden`   | boolean | Whether is label hidden        |

## Custom component

Text field classes are fabricated using `useCheckboxFieldStyleProps` hook. You can use it to create your own custom CheckboxField component.

```jsx
const CustomCheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);

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

For detailed information see [CheckboxField](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/CheckboxField/README.md) component
