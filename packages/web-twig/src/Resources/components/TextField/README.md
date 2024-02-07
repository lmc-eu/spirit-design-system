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

## Input Width

There are several ways to adjust the input width:

### `inputWidth` Attribute

The `inputWidth` attribute is supported on inputs of the following types: `email`,
`password`, `tel`, `text`, `url`.

```twig
<TextField
  id="textFieldWidthCh"
  inputWidth="4"
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

```twig
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

| Name                    | Type                                                                        | Default | Required | Description                                                             |
| ----------------------- | --------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------- |
| `autocomplete`          | `string`                                                                    | `null`  | ✕        | [Automated assistance in filling][autocomplete-attr]                    |
| `hasPasswordToggle`     | `bool`                                                                      | `false` | ✕        | If true, the `type` is set to `password` and a password toggle is shown |
| `helperText`            | `string`                                                                    | `null`  | ✕        | Custom helper text                                                      |
| `id`                    | `string`                                                                    | —       | ✔        | Input and label identification                                          |
| `inputProps`            | `string[]`                                                                  | `[]`    | ✕        | Pass additional attributes to the input element                         |
| `inputWidth`            | `[2, 3, 4]`                                                                 | `null`  | ✕        | Input width in the characters                                           |
| `isDisabled`            | `bool`                                                                      | `false` | ✕        | If true, input is disabled                                              |
| `isFluid`               | `bool`                                                                      | `false` | ✕        | If true, the element spans to the full width of its parent              |
| `isLabelHidden`         | `bool`                                                                      | `false` | ✕        | If true, label is hidden                                                |
| `isRequired`            | `bool`                                                                      | `false` | ✕        | If true, input is required                                              |
| `label`                 | `string`                                                                    | —       | ✔\*      | Label text                                                              |
| `name`                  | `string`                                                                    | `null`  | ✕        | Input name                                                              |
| `placeholder`           | `string`                                                                    | `null`  | ✕        | Input placeholder                                                       |
| `type`                  | [`email` \| `number` \| `password` \| `search` \| `tel` \| `text` \| `url`] | `text`  | ✕        | Input type                                                              |
| `UNSAFE_helperText`     | `string`                                                                    | `null`  | ✕        | Unescaped custom helper text                                            |
| `UNSAFE_label`          | `string`                                                                    | —       | ✔\*      | Unescaped label text                                                    |
| `UNSAFE_validationText` | [`string` \| `string[]`]                                                    | `null`  | ✕        | Unescaped validation text                                               |
| `validationState`       | [Validation dictionary][dictionary-validation]                              | `null`  | ✕        | Type of validation state.                                               |
| `validationText`        | [`string` \| `string[]`]                                                    | `null`  | ✕        | Validation text                                                         |
| `value`                 | `string`                                                                    | `null`  | ✕        | Input value                                                             |

(\*) The label is required for this component. Use `label` or `UNSAFE_label` to set the label.

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
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
