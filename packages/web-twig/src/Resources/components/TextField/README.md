# TextField

This is Twig implementation of the [TextField][textfield] component.

Basic example usage:

```twig
<TextField id="text-field-default" label="Label" name="textFieldDefault" />
```

Advanced example usage:

Default TextField:

```twig
<TextField
  helperText="custom helper text"
  id="text-field-advanced"
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

```twig
<TextField
  hasPasswordToggle
  id="text-field-password-toggle"
  isRequired
  label="Password"
  name="textFieldPasswordToggle"
  placeholder="Placeholder"
  validationState="danger"
  validationText="validation failed"
/>
```

Without lexer:

```twig
{% embed "@spirit/textField.twig" with { props: {
    helperText: "custom helper text",
    id: "text-field-embed",
    isRequired: true,
    label: "Password",
    name: "textFieldEmbed",
    type: "text",
    validationState: "danger",
    validationText: "validation failed",
}} %}
```

## API

| Name                    | Type                                                                        | Default | Required | Description                                                             |
| ----------------------- | --------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `autocomplete`          | `string`                                                                    | `null`  | ✕        | [Automated assistance in filling][autocomplete-attr]                    |
| `hasPasswordToggle`     | `bool`                                                                      | `false` | ✕        | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`            | `string`                                                                    | `null`  | ✕        | Custom helper text                                                      |
| `id`                    | `string`                                                                    | —       | ✓        | Input and label identification                                          |
| `inputProps`            | `string[]`                                                                  | `[]`    | ✕        | Pass additional attributes to the input element                         |
| `inputWidth`            | `number`                                                                    | `null`  | ✕        | Input width                                                             |
| `isDisabled`            | `bool`                                                                      | `false` | ✕        | If true, input is disabled                                              |
| `isFluid`               | `bool`                                                                      | `false` | ✕        | If true, the element spans to the full width of its parent              |
| `isLabelHidden`         | `bool`                                                                      | `false` | ✕        | If true, label is hidden                                                |
| `isRequired`            | `bool`                                                                      | `false` | ✕        | If true, input is required                                              |
| `label`                 | `string`                                                                    | —       | ✓\*      | Label text                                                              |
| `name`                  | `string`                                                                    | `null`  | ✕        | Input name                                                              |
| `placeholder`           | `string`                                                                    | `null`  | ✕        | Input placeholder                                                       |
| `type`                  | [`email` \| `number` \| `password` \| `search` \| `tel` \| `text` \| `url`] | `text`  | ✕        | Input type                                                              |
| `UNSAFE_helperText`     | `string`                                                                    | `null`  | ✕        | Unescaped custom helper text                                            |
| `UNSAFE_label`          | `string`                                                                    | —       | ✓\*      | Unescaped label text                                                    |
| `UNSAFE_validationText` | [`string` \| `string[]`]                                                    | `null`  | ✕        | Unescaped validation text                                               |
| `validationState`       | [Validation dictionary][dictionary-validation]                              | `null`  | ✕        | Type of validation state.                                               |
| `validationText`        | [`string` \| `string[]`]                                                    | `null`  | ✕        | Validation text                                                         |
| `value`                 | `string`                                                                    | `null`  | ✕        | Input value                                                             |

(\*) The label is required for this component. Use `label` or `UNSAFE_label` to set the label.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## JavaScript Plugin for Password Toggle

To enable password toggle, first, you need to provide Spirit JavaScript,
which will handle the functionality:

```twig
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript
plugins.

Then you need to add attribute `hasPasswordToggle` to the component.

```twig
<TextField
  hasPasswordToggle
  id="textFieldPasswordToggle"
  label="Password"
  name="textFieldPasswordToggle"
/>
```

👉 Check the [component’s docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[textfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextField
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextField/README.md#javascript-plugin-for-password-toggle
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
