# Checkbox

Checkbox enables the user to check/uncheck choice.
It has input, a label, and an optional helperText.
It could be disabled or have a validation state.
The label could be hidden and show if the input is required.

Basic example usage:

```jsx
<Checkbox id="checkbox-default" label="Label" name="checkboxDefault" />
```

Advanced example usage:

```jsx
<Checkbox
  id="checkbox-advanced"
  isChecked
  isRequired
  name="checkboxAdvanced"
  validationText="validation text"
  validationState="danger"
  helperText="Helper text"
/>
```

## API

| Name              | Type                                           | Default | Required | Description                                          |
| ----------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------------------- |
| `autoComplete`    | `string`                                       | -       | ✕        | [Automated assistance in filling][autocomplete-attr] |
| `helperText`      | `string`                                       | —       | ✕        | Custom helper text                                   |
| `id`              | `string`                                       | -       | ✓        | Input and label identification                       |
| `isDisabled`      | `boolean`                                      | -       | ✕        | Whether is field disabled                            |
| `isChecked`       | `boolean`                                      | -       | ✕        | Whether is field checked                             |
| `isItem`          | `boolean`                                      | -       | ✕        | To render in [Item][item] mode                       |
| `isLabelHidden`   | `boolean`                                      | -       | ✕        | Whether is label hidden                              |
| `isRequired`      | `boolean`                                      | -       | ✕        | Whether is field required                            |
| `label`           | `string`                                       | -       | ✕        | Label text                                           |
| `name`            | `string`                                       | -       | ✕        | Input name                                           |
| `ref`             | `ForwardedRef<HTMLInputElement>`               | -       | ✕        | Input element reference                              |
| `validationState` | [Validation dictionary][dictionary-validation] | -       | ✕        | Type of validation state.                            |
| `validationText`  | `string`, `string[]`                           | -       | ✕        | Validation text                                      |
| `value`           | `string`                                       | -       | ✕        | Input value                                          |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Custom Component

Text field classes are fabricated using `useCheckboxStyleProps` hook. You can use it to create your own custom Checkbox component.

```jsx
const CustomCheckbox = (props: SpiritCheckboxProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useCheckboxStyleProps(props);

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

For detailed information see [Checkbox](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Checkbox/README.md) component

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
