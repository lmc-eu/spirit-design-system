# TextArea

This is Twig implementation of the [TextArea] component.

Basic example usage:

```twig
<TextArea id="textAreaDefault" label="Label" name="textAreaDefault" />
```

Advanced example usage:

```twig
<TextArea
  helperText="custom helper text"
  id="textAreaAdvanced"
  isRequired
  label="Label"
  maxlength="180"
  name="textAreaAdvanced"
  placeholder="Placeholder"
  rows="10"
  validationState="danger"
  validationText="validation failed"
  value="TextArea"
/>
```

Without lexer:

```twig
{% embed "@spirit/textArea.twig" with { props: {
    helperText: "custom helper text",
    id: "textAreaEmbed",
    isRequired: true,
    label: "Label",
    maxlength: 180,
    name: "textAreaEmbed",
    placeholder: "Placeholder",
    rows: 10,
    validationState: "danger",
    validationText: "validation failed",
    value: "TextArea"
}} %}
```

## API

| Prop name               | Type                                           | Default | Required | Description                                                                                                 |
| ----------------------- | ---------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `autocomplete`          | `string`                                       | `null`  | ✕        | [Automated assistance in filling][autocomplete-attr]                                                        |
| `helperText`            | `string`                                       | `null`  | ✕        | Custom helper text                                                                                          |
| `id`                    | `string`                                       | —       | ✔        | TextArea and label identification                                                                           |
| `inputProps`            | `string[]`                                     | `[]`    | ✕        | Pass additional attributes to the textarea element                                                          |
| `isAutoResizing`        | `bool`                                         | `false` | ✕        | If true, TextArea adjusts its height as user types, see [plugin info](#javascript-plugin-for-auto-resizing) |
| `isDisabled`            | `bool`                                         | `false` | ✕        | If true, TextArea is disabled                                                                               |
| `isFluid`               | `bool`                                         | `false` | ✕        | If true, the element spans to the full width of its parent                                                  |
| `isLabelHidden`         | `bool`                                         | `false` | ✕        | If true, label is hidden                                                                                    |
| `isRequired`            | `bool`                                         | `false` | ✕        | If true, TextArea is required                                                                               |
| `label`                 | `string`                                       | —       | ✔\*      | Label text                                                                                                  |
| `maxlength`             | `number`                                       | `null`  | ✕        | Maximum number of characters                                                                                |
| `name`                  | `string`                                       | `null`  | ✕        | TextArea name                                                                                               |
| `placeholder`           | `string`                                       | `null`  | ✕        | TextArea placeholder                                                                                        |
| `rows`                  | `number`                                       | `null`  | ✕        | Number of visible rows                                                                                      |
| `UNSAFE_helperText`     | `string`                                       | `null`  | ✕        | Unescaped custom helper text                                                                                |
| `UNSAFE_label`          | `string`                                       | —       | ✔\*      | Unescaped label text                                                                                        |
| `UNSAFE_validationText` | [`string` \| `string[]`]                       | `null`  | ✕        | Unescaped custom validation text                                                                            |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`  | ✕        | Type of validation state.                                                                                   |
| `validationText`        | [`string` \| `string[]`]                       | `null`  | ✕        | Validation text                                                                                             |
| `value`                 | `string`                                       | `null`  | ✕        | TextArea value                                                                                              |

\*: Label is required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## JavaScript Plugin for Auto-Resizing

To enable auto-resizing of the textarea, first, you need to provide Spirit JavaScript,
which will handle the functionality:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript
plugins.

Then you need to add attribute `isAutoResizing` to the component.

```twig
<TextArea
  id="textareaAutoResize"
  isAutoResizing
  label="Label of auto-resizing TextArea"
/>
```

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/TextArea/README.md#javascript-plugin-for-auto-resizing
[textarea]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextArea
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
