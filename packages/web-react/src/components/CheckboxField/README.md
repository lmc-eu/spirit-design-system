# CheckboxField

CheckboxField enables the user to check/uncheck choice. It has input, a label,
and an optional message. It could be disabled or have an error state. The label could be hidden
and show if the input is required.

```jsx
<CheckboxField id="example" name="example" isRequired isChecked validationState="danger" message="validation failed" />
```

## Available props

| Prop name         | Type                                                                 | Default | Required | Description                                                                                                                        |
| ----------------- | -------------------------------------------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`              | string                                                               | -       | yes      | Input and label identification                                                                                                     |
| `name`            | string                                                               | -       | no       | Input name                                                                                                                         |
| `label`           | string                                                               | -       | no       | Label text                                                                                                                         |
| `value`           | string                                                               | -       | no       | Input value                                                                                                                        |
| `message`         | string                                                               | -       | no       | Validation or help message                                                                                                         |
| `validationState` | [Validation dictionary][dictionary-validation], `error` (deprecated) | -       | no       | Type of validation state. [**DEPRECATED**][deprecated] The value "error" in the dictionary will be replaced by the value "danger". |
| `isDisabled`      | boolean                                                              | -       | no       | Whether is field disabled                                                                                                          |
| `isItem`          | boolean                                                              | -       | no       | To render in [Item][item] mode                                                                                                     |
| `isRequired`      | boolean                                                              | -       | no       | Whether is field required                                                                                                          |
| `isChecked`       | boolean                                                              | -       | no       | Whether is field checked                                                                                                           |
| `isLabelHidden`   | boolean                                                              | -       | no       | Whether is label hidden                                                                                                            |

## Custom component

Text field classes are fabricated using `useCheckboxFieldStyleProps` hook. You can use it to create your own custom CheckboxField component.

```jsx
const CustomCheckboxField = (props: SpiritCheckboxFieldProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxFieldStyleProps(props);

  return (
    <label htmlFor={props.id} className={classProps.root}>
      <input {...modifiedProps} className={classProps.input} />
      <span className={styleProps.text}>
        <span className={styleProps.label}>{props.label}</span>
        <span className={styleProps.helperText}>{props.helperText}</span>
        <span className={styleProps.message}>{props.message}</span>
      </span>
    </label>
  );
};
```

For detailed information see [CheckboxField](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/CheckboxField/README.md) component

[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/README.md#deprecations
