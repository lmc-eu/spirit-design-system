# CheckboxField

CheckboxField enables the user to check/uncheck choice.
It has input, a label, and an optional helperText.
It could be disabled or have a validation state.
The label could be hidden and show if the input is required.

Basic example usage:

```jsx
<CheckboxField id="checkboxfieldDefault" label="Label" name="checkboxfieldDefault" />
```

Advanced example usage:

```jsx
<CheckboxField
  id="checkboxfieldAdvanced"
  isChecked
  isRequired
  name="checkboxfieldAdvanced"
  validationText="validation text"
  validationState="danger"
  helperText="Helper text"
/>
```

## Available props

| Prop name         | Type                                           | Default | Required | Description                    |
| ----------------- | ---------------------------------------------- | ------- | -------- | ------------------------------ |
| `id`              | `string`                                       | -       | yes      | Input and label identification |
| `isDisabled`      | `boolean`                                      | -       | no       | Whether is field disabled      |
| `isChecked`       | `boolean`                                      | -       | no       | Whether is field checked       |
| `isItem`          | `boolean`                                      | -       | no       | To render in [Item][item] mode |
| `isLabelHidden`   | `boolean`                                      | -       | no       | Whether is label hidden        |
| `isRequired`      | `boolean`                                      | -       | no       | Whether is field required      |
| `label`           | `string`                                       | -       | no       | Label text                     |
| `name`            | `string`                                       | -       | no       | Input name                     |
| `ref`             | `ForwardedRef<HTMLInputElement>`               | -       | no       | Input element reference        |
| `validationState` | [Validation dictionary][dictionary-validation] | -       | no       | Type of validation state.      |
| `validationText`  | `string`, `string[]`                           | -       | no       | Validation text                |
| `value`           | `string`                                       | -       | no       | Input value                    |

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
        <span className={styleProps.validationText}>{props.validationText}</span>
      </span>
    </label>
  );
};
```

For detailed information see [CheckboxField](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/CheckboxField/README.md) component

[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
