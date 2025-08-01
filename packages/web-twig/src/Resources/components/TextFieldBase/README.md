# TextFieldBase

This is Twig implementation of the abstract component TextFieldBase for the purposes of the form components [TextField][textfield] and [TextArea][textarea].

Basic example usage:

```twig
<TextFieldBase id="textFieldBaseDefault" label="Label" name="textFieldBaseDefault" />
```

Advanced example usage:

```twig
<TextFieldBase
  hasValidationIcon
  helperText="custom helper text"
  id="text-field-base-advanced"
  isRequired
  label="Label"
  name="textFieldBaseAdvanced"
  placeholder="Placeholder"
  type="text"
  validationState="danger"
  validationText="validation failed"
/>
```

Sizes:

```twig
<TextFieldBase
    id="text-field-base-size-small"
    label="Small"
    name="textFieldBaseSizeSmall"
    placeholder="Placeholder"
    size="small"
    helperText="Helper text"
/>
<TextFieldBase
    id="text-field-base-size-medium"
    label="Medium (default)"
    name="textFieldBaseSizeMedium"
    placeholder="Placeholder"
    helperText="Helper text"
/>
<TextFieldBase
    id="text-field-base-size-large"
    label="Large"
    name="textFieldBaseSizeLarge"
    placeholder="Placeholder"
    size="large"
    helperText="Helper text"
/>
```

TextFieldBase with password toggle (button to reveal the password):

```twig
<TextFieldBase
  hasPasswordToggle
  id="text-field-base-password-toggle"
  isRequired
  label="Password"
  name="textFieldBasePasswordToggle"
  placeholder="Placeholder"
  validationState="danger"
  validationText="validation failed"
/>
```

Without lexer:

```twig
{% embed "@spirit/textFieldBase.twig" with { props: {
    helperText: "custom helper text",
    id: "text-field-base-embed",
    isRequired: true,
    label: "Password",
    name: "textFieldBaseEmbed",
    type: "text",
    validationState: "danger",
    validationText: "validation failed",
}} %}
```

## API

| Name                    | Type                                                                         | Default  | Required | Description                                                             |
| ----------------------- | ---------------------------------------------------------------------------- | -------- | -------- | ----------------------------------------------------------------------- |
| `autocomplete`          | `string`                                                                     | `null`   | ✕        | [Automated assistance in filling][autocomplete-attr]                    |
| `hasValidationIcon`     | `boolean`                                                                    | `false`  | ✕        | Whether to show validation icon                                         |
| `hasPasswordToggle`     | `bool`                                                                       | `false`  | ✕        | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`            | `string`                                                                     | `null`   | ✕        | Custom helper text                                                      |
| `id`                    | `string`                                                                     | —        | ✓        | Input and label identification                                          |
| `inputProps`            | `string[]`                                                                   | `[]`     | ✕        | Pass additional attributes to the input/textarea element                |
| `isAutoResizing`        | `bool`                                                                       | `false`  | ✕        | If true, TextFieldBase adjusts its height as user types                 |
| `isDisabled`            | `bool`                                                                       | `false`  | ✕        | If true, input is disabled                                              |
| `isFluid`               | `bool`                                                                       | `false`  | ✕        | If true, the element spans to the full width of its parent              |
| `isLabelHidden`         | `bool`                                                                       | `false`  | ✕        | If true, label is hidden                                                |
| `isMultiline`           | `bool`                                                                       | `false`  | ✕        | If true, rendered DOM element is `textarea`                             |
| `isRequired`            | `bool`                                                                       | `false`  | ✕        | If true, input is required                                              |
| `label`                 | `string`                                                                     | —        | ✓\*      | Label text                                                              |
| `name`                  | `string`                                                                     | `null`   | ✕        | Input name                                                              |
| `pattern`               | `string`                                                                     | `null`   | ✕        | Defines regular expressions for allowed value types                     |
| `placeholder`           | `string`                                                                     | `null`   | ✕        | Input placeholder                                                       |
| `size`                  | [Size dictionary][dictionary-size]                                           | `medium` | ✕        | Size variant                                                            |
| `type`                  | \[`email` \| `number` \| `password` \| `search` \| `tel` \| `text` \| `url`] | `text`   | ✕        | Input type                                                              |
| `UNSAFE_helperText`     | `string`                                                                     | `null`   | ✕        | Unescaped custom helper text                                            |
| `UNSAFE_label`          | `string`                                                                     | —        | ✓\*      | Unescaped label text                                                    |
| `UNSAFE_validationText` | \[`string` \| `string[]`]                                                    | `null`   | ✕        | Unescaped validation text                                               |
| `validationState`       | [Validation dictionary][dictionary-validation]                               | `null`   | ✕        | Type of validation state.                                               |
| `validationText`        | \[`string` \| `string[]`]                                                    | `null`   | ✕        | Validation text                                                         |
| `value`                 | `string`                                                                     | `null`   | ✕        | Input value                                                             |

(\*) The label is required for this component. Use `label` or `UNSAFE_label` to set the label.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#size
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[textarea]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextArea
[textfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextField
