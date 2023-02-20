# RadioField

Use RadioField when you have a group of mutually exclusive choices and only one selection from the group is allowed. It has input and label. It can be disabled or have an error state. The label can be hidden.

```jsx
<RadioField id="example" name="example" label="Label text" isChecked />
```

## Available props

| Prop name       | Type    | Default | Required | Description                    |
| --------------- | ------- | ------- | -------- | ------------------------------ |
| `id`            | string  | -       | yes      | Input and label identification |
| `name`          | string  | -       | no       | Input name                     |
| `label`         | string  | -       | no       | Label text                     |
| `value`         | string  | -       | no       | Input value                    |
| `isDisabled`    | boolean | -       | no       | Whether is field disabled      |
| `isChecked`     | boolean | -       | no       | Whether is field checked       |
| `isItem`        | boolean | -       | no       | To render in [Item][item] mode |
| `isLabelHidden` | boolean | -       | no       | Whether is label hidden        |

## Custom component

Text field classes are fabricated using `useRadioFieldStyleProps` hook. You can use it to create your own custom RadioField component.

```jsx
const CustomRadioField = (props: SpiritRadioFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useRadioFieldStyleProps(props);

  return (
    <label htmlFor={props.id} className={classProps.root}>
      <input {...modifiedProps} className={classProps.input} />
      <span className={styleProps.label}>{props.label}</span>
    </label>
  );
};
```

For detailed information see [RadioField](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/RadioField/README.md) component

[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
