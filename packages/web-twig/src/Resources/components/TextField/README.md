# TextField

This is Twig implementation of the [TextField] component.

Basic example usage:

```html
<TextField id="textFieldDefault" label="Label" name="textFieldDefault" />
```

Advanced example usage:

Default TextField:

```html
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

```html
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

Without lexer:

```twig
{% embed "@spirit/textField.twig" with { props: {
    helperText: "custom helper text",
    id: "textFieldEmbed",
    isRequired: true,
    label: "Password",
    name: "textFieldEmbed",
    type: "text",
    validationState: "danger",
    validationText: "validation failed",
}} %}
```

## API

| Prop name               | Type                                                                        | Default | Required | Description                                                             |
| ----------------------- | --------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `autocomplete`          | `string`                                                                    | `null`  | no       | [Automated assistance in filling][autocomplete-attr]                    |
| `hasPasswordToggle`     | `bool`                                                                      | `false` | no       | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`            | `string`                                                                    | `null`  | no       | Custom helper text                                                      |
| `id`                    | `string`                                                                    | —       | yes      | Input and label identification                                          |
| `inputProps`            | `string[]`                                                                  | `[]`    | no       | Pass additional attributes to the input element                         |
| `inputWidth`            | `number`                                                                    | `null`  | no       | Input width                                                             |
| `isDisabled`            | `bool`                                                                      | `false` | no       | If true, input is disabled                                              |
| `isFluid`               | `bool`                                                                      | `false` | no       | If true, the element spans to the full width of its parent              |
| `isLabelHidden`         | `bool`                                                                      | `false` | no       | If true, label is hidden                                                |
| `isRequired`            | `bool`                                                                      | `false` | no       | If true, input is required                                              |
| `label`                 | `string`                                                                    | —       | yes\*    | Label text                                                              |
| `name`                  | `string`                                                                    | `null`  | no       | Input name                                                              |
| `placeholder`           | `string`                                                                    | `null`  | no       | Input placeholder                                                       |
| `type`                  | [`email` \| `number` \| `password` \| `search` \| `tel` \| `text` \| `url`] | `text`  | no       | Input type                                                              |
| `UNSAFE_helperText`     | `string`                                                                    | `null`  | no       | Unescaped custom helper text                                            |
| `UNSAFE_label`          | `string`                                                                    | —       | yes\*    | Unescaped label text                                                    |
| `UNSAFE_validationText` | [`string` \| `string[]`]                                                    | `null`  | no       | Unescaped validation text                                               |
| `validationState`       | [Validation dictionary][dictionary-validation]                              | `null`  | no       | Type of validation state.                                               |
| `validationText`        | [`string` \| `string[]`]                                                    | `null`  | no       | Validation text                                                         |
| `value`                 | `string`                                                                    | `null`  | no       | Input value                                                             |

\*: The label is required for this component. Use `label` or `UNSAFE_label` to set the label.

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## JavaScript Plugin for Password Toggle

To enable password toggle, first, you need to provide Spirit JavaScript,
which will handle the functionality:

```html
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

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextField/README.md#javascript-plugin-for-password-toggle
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[textfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextField
[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
