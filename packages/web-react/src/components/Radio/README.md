# Radio

Use Radio when you have a group of mutually exclusive choices and only one selection from the group is allowed.
It has input and label.
It can be disabled or have a validation state.
The label can be hidden.

Basic example usage:

```jsx
<Radio id="radioDefault" isChecked label="Label" name="radioDefault" />
```

Advanced example usage:

```jsx
<Radio
  autocomplete="off"
  helperText="Helper text"
  id="radioAdvanced"
  isChecked
  label="some label"
  name="radioAdvanced"
  validationState="danger"
/>
```

## Available props

| Name               | Type                                           | Default | Required | Description                    |
| ------------------ | ---------------------------------------------- | ------- | -------- | ------------------------------ |
| `id`               | string                                         | —       | ✔        | Input and label identification |
| `isDisabled`       | boolean                                        | —       | ✕        | Whether is field disabled      |
| `isChecked`        | boolean                                        | —       | ✕        | Whether is field checked       |
| `isItem`           | boolean                                        | —       | ✕        | To render in [Item][item] mode |
| `isLabelHidden`    | boolean                                        | —       | ✕        | Whether is label hidden        |
| `label`            | string                                         | —       | ✕        | Label text                     |
| `name`             | string                                         | —       | ✕        | Input name                     |
| `ref`              | `ForwardedRef<HTMLInputElement>`               | —       | ✕        | Input element reference        |
| `UNSAFE_className` | `string`                                       | —       | ✕        | Wrapper custom class name      |
| `UNSAFE_style`     | `CSSProperties`                                | —       | ✕        | Wrapper custom style           |
| `validationState`  | [Validation dictionary][dictionary-validation] | —       | ✕        | Type of validation state       |
| `value`            | string                                         | —       | ✕        | Input value                    |

## Custom component

Text field classes are fabricated using `useRadioStyleProps` hook. You can use it to create your own custom Radio component.

```jsx
const CustomRadio = (props: SpiritRadioProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useRadioStyleProps(props);

  return (
    <label htmlFor={props.id} className={classProps.root}>
      <input {...modifiedProps} className={classProps.input} />
      <span className={styleProps.text}>
        <span className={styleProps.label}>{props.label}</span>
        <span className={styleProps.helperText}>{props.helperText}</span>
      </span>
    </label>
  );
};
```

For detailed information see [Radio](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Radio/README.md) component

[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
