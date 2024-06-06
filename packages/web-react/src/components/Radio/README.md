# Radio

Use Radio when you have a group of mutually exclusive choices and only one selection from the group is allowed.
It has input and label.
It can be disabled or have a validation state.
The label can be hidden.

Basic example usage:

```jsx
<Radio id="radio-default" isChecked label="Label" name="radioDefault" />
```

Advanced example usage:

```jsx
<Radio
  autocomplete="off"
  helperText="Helper text"
  id="radio-advanced"
  isChecked
  label="some label"
  name="radioAdvanced"
  validationState="danger"
/>
```

## API

| Name              | Type                                           | Default | Required | Description                                          |
| ----------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------------------- |
| `autoComplete`    | string                                         | -       | ✕        | [Automated assistance in filling][autocomplete-attr] |
| `id`              | string                                         | -       | ✓        | Input and label identification                       |
| `isDisabled`      | boolean                                        | -       | ✕        | Whether is field disabled                            |
| `isChecked`       | boolean                                        | -       | ✕        | Whether is field checked                             |
| `isItem`          | boolean                                        | -       | ✕        | To render in [Item][item] mode                       |
| `isLabelHidden`   | boolean                                        | -       | ✕        | Whether is label hidden                              |
| `label`           | string                                         | -       | ✕        | Label text                                           |
| `name`            | string                                         | -       | ✕        | Input name                                           |
| `ref`             | `ForwardedRef<HTMLInputElement>`               | -       | ✕        | Input element reference                              |
| `validationState` | [Validation dictionary][dictionary-validation] | -       | ✕        | Type of validation state                             |
| `value`           | string                                         | -       | ✕        | Input value                                          |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Item/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
