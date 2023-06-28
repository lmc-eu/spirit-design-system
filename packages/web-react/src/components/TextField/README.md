# TextField

TextField enables the user to type in text information. It has an input, a
label, and an optional helper text. It supports several input types like `text` or
`password` etc. It can be disabled or have a validation state. The label can be
hidden or show if the input is required.

Basic example usage:

```jsx
<TextField id="textFieldDefault" name="textFieldDefault" />
```

Advanced example usage:

```jsx
<TextField
  helperText="custom helper text"
  id="textFieldAdvanced"
  isRequired
  label="Label"
  name="textFieldAdvanced"
  placeholder="Placeholder"
  type="text"
  validationState="danger"
  validationText="validation failed"
/>
```

TextField with password toggle (button to reveal the password):

```jsx
<TextField
  hasPasswordToggle
  id="textFieldPasswordToggle"
  isRequired
  label="Password"
  name="textFieldPasswordToggle"
  placeholder="Placeholder"
  validationState="danger"
  validationText="validation failed"
/>
```

## Available props

| Prop name           | Type                                                          | Default | Required | Description                                                             |
| ------------------- | ------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `autocomplete`      | `boolean`                                                     | -       | no       | If the field should have autocomplete enabled                           |
| `hasPasswordToggle` | `boolean`                                                     | -       | yes      | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`        | `string`                                                      | -       | no       | Custom helper text                                                      |
| `id`                | `string`                                                      | -       | no       | Input and label identification                                          |
| `inputWidth`        | `number`                                                      | -       | no       | Input width                                                             |
| `isDisabled`        | `boolean`                                                     | -       | no       | Whether is field disabled                                               |
| `isLabelHidden`     | `boolean`                                                     | -       | no       | Whether is label hidden                                                 |
| `isRequired`        | `boolean`                                                     | -       | no       | Whether is field required                                               |
| `label`             | `string`                                                      | -       | no       | Label text                                                              |
| `name`              | `string`                                                      | -       | no       | Input name                                                              |
| `pattern`           | `string`                                                      | -       | no       | Defines regular expressions for allowed value types                     |
| `placeholder`       | `string`                                                      | -       | no       | Input placeholder                                                       |
| `ref`               | `ForwardedRef<HTMLInputElement>`                              | -       | no       | Input element reference                                                 |
| `type`              | `email`, `number`, `password`, `search`, `tel`, `text`, `url` | -       | no       | Input type                                                              |
| `validationState`   | [Validation dictionary][dictionary-validation]                | -       | no       | Type of validation state                                                |
| `validationText`    | `string`, `string[]`                                          | -       | no       | Validation text                                                         |
| `value`             | `string`                                                      | -       | no       | Input value                                                             |

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

For detailed information see [TextField](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextField/README.md) component.

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
