# CheckboxField

CheckboxField enables the user to check/uncheck choice. It has input, a label,
and an optional message. It could be disabled or have an error state. The label could be hidden
and show if the input is required.

```jsx
<CheckboxField id="example" name="example" isRequired isChecked validationState="danger" message="validation failed" />
```

## Available props

| Prop name         | Type                                    | Default | Required | Description                                  |
| ----------------- | --------------------------------------- | ------- | -------- | -------------------------------------------- |
| `id`              | string                                  | -       | yes      | Input and label identification               |
| `name`            | string                                  | -       | no       | Input name                                   |
| `label`           | string                                  | -       | no       | Label text                                   |
| `value`           | string                                  | -       | no       | Input value                                  |
| `message`         | string                                  | -       | no       | Validation or help message                   |
| `validationState` | `success`, `warning`, `danger`, `error` | -       | no       | Type of validation state. See [dictionaries] |
| `isDisabled`      | boolean                                 | -       | no       | Whether is field disabled                    |
| `isItem`          | boolean                                 | -       | no       | To render in [Item][item] mode               |
| `isRequired`      | boolean                                 | -       | no       | Whether is field required                    |
| `isChecked`       | boolean                                 | -       | no       | Whether is field checked                     |
| `isLabelHidden`   | boolean                                 | -       | no       | Whether is label hidden                      |

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

[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
[dictionaries]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md
