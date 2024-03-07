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

## Input Width

There are several ways to adjust the input width:

### `inputWidth` Attribute

The `inputWidth` attribute is supported on inputs of the following types: `email`,
`password`, `tel`, `text`, `url`.

```jsx
<TextField
  id="textFieldWidthCh"
  inputWidth={4}
  label="Input width wide 4 characters"
  name="textFieldWidthCh"
  placeholder="Placeholder"
  type="text"
/>
```

This option is generally recommended for inputs with a limited value length
(e.g. numeric representation of day, month, year). Supported values are `2`, `3`
and `4` (characters).

### `--width` CSS Custom Property

If you need any other value or prefer using `em` unit
instead of default `ch`, define a `--width` CSS custom property on the `<input>`
element via `inputProps` attribute:

```jsx
<TextField
  id="textFieldWidthCh"
  inputProps="{{ { style: '--width: 10ch' } }}"
  label="Input width wide 10 characters"
  name="textFieldWidthCh"
  placeholder="Placeholder"
  type="text"
/>
```

### Grid

For other use cases (wider input or input with unknown value length), we
recommend placing them inside the Grid component and set `isFluid` to `true` to fill the available space.

## API

| Name                | Type                                                                        | Default | Required | Description                                                             |
| ------------------- | --------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `autoComplete`      | `bool`                                                                      | —       | ✕        | [Automated assistance in filling][autocomplete-attr]                    |
| `hasPasswordToggle` | `bool`                                                                      | —       | ✔        | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`        | `string`                                                                    | —       | ✕        | Custom helper text                                                      |
| `id`                | `string`                                                                    | —       | ✕        | Input and label identification                                          |
| `inputWidth`        | `[2, 3, 4]`                                                                 | —       | ✕        | Input width in the characters                                           |
| `isDisabled`        | `bool`                                                                      | —       | ✕        | Whether is field disabled                                               |
| `isFluid`           | `bool`                                                                      | —       | ✕        | If true, the element spans to the full width of its parent              |
| `isLabelHidden`     | `bool`                                                                      | —       | ✕        | Whether is label hidden                                                 |
| `isRequired`        | `bool`                                                                      | —       | ✕        | Whether is field required                                               |
| `label`             | `string`                                                                    | —       | ✕        | Label text                                                              |
| `name`              | `string`                                                                    | —       | ✕        | Input name                                                              |
| `pattern`           | `string`                                                                    | —       | ✕        | Defines regular expressions for allowed value types                     |
| `placeholder`       | `string`                                                                    | —       | ✕        | Input placeholder                                                       |
| `ref`               | `ForwardedRef<HTMLInputElement>`                                            | —       | ✕        | Input element reference                                                 |
| `type`              | [`email` \| `number` \| `password` \| `search` \| `tel` \| `text` \| `url`] | —       | ✕        | Input type                                                              |
| `validationState`   | [Validation dictionary][dictionary-validation]                              | —       | ✕        | Type of validation state                                                |
| `validationText`    | [`string` \| `string[]`]                                                    | —       | ✕        | Validation text                                                         |
| `value`             | `string`                                                                    | —       | ✕        | Input value                                                             |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
