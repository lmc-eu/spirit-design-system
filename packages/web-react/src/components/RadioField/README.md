# RadioField

Use RadioField when you have a group of mutually exclusive choices and only one selection from the group is allowed. It has input and label. It can be disabled or have an error state. The label can be hidden.

```jsx
<RadioField id="example" name="example" label="Label text" isChecked />
```

## Available props

| Name            | Type    | Description                    |
| --------------- | ------- | ------------------------------ |
| `id`            | string  | Input and label identification |
| `name`          | string  | Input name                     |
| `label`         | string  | Label text                     |
| `value`         | string  | Input value                    |
| `isDisabled`    | boolean | Whether is field disabled      |
| `isChecked`     | boolean | Whether is field checked       |
| `isLabelHidden` | boolean | Whether is label hidden        |

## Custom component

Text field classes are fabricated using `useRadioFieldStyleProps` hook. You can use it to create your own custom RadioField component.

```jsx
const CustomRadioField = (props: SpiritRadioFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useRadioFieldStyleProps(props);

  return (
    <label className={classProps.root}>
      <input {...modifiedProps} className={classProps.input} />
      <span className={styleProps.label}>{props.label}</span>
    </label>
  );
};
```

For detailed information see [RadioField](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/RadioField/README.md) component
