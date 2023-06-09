# TextArea

This is Twig implementation of the [TextArea] component.

Basic example usage:

```twig
<TextArea id="example" label="Label" name="example" />
```

Advanced example usage:

```twig
<TextArea
  helperText="custom helper text"
  id="example2"
  isRequired
  label="Label"
  maxlength="180"
  message="validation failed"
  name="example2"
  placeholder="Placeholder"
  rows="10"
  validationState="danger"
  value="TextArea"
/>
```

Without lexer:

```twig
{% include "@spirit/textArea.twig" with { props: {
    helperText: "custom helper text",
    id: "example",
    isRequired: true,
    label: "Label",
    maxlength: 180,
    message: "validation failed",
    name: "example",
    placeholder: "Placeholder",
    rows: 10,
    validationState: "danger",
    value: "TextArea"
}} %}
```

## API

| Prop name           | Type                                                                 | Default | Required | Description                                                                                                                        |
| ------------------- | -------------------------------------------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `helperText`        | `string`                                                             | `null`  | no       | Custom helper text                                                                                                                 |
| `UNSAFE_helperText` | `string`                                                             | `null`  | no       | Unescaped custom helper text                                                                                                       |
| `id`                | `string`                                                             | —       | yes      | TextArea and label identification                                                                                                  |
| `inputProps`        | `string[]`                                                           | `[]`    | no       | Pass additional attributes to the textarea element                                                                                 |
| `isAutoResizing`    | `bool`                                                               | `false` | no       | If true, TextArea adjusts its height as user types, see [plugin info](#javascript-plugin-for-auto-resizing)                        |
| `isDisabled`        | `bool`                                                               | `false` | no       | If true, TextArea is disabled                                                                                                      |
| `isFluid`           | `bool`                                                               | `false` | no       | If true, the element spans to the full width of its parent                                                                         |
| `isLabelHidden`     | `bool`                                                               | `false` | no       | If true, label is hidden                                                                                                           |
| `isRequired`        | `bool`                                                               | `false` | no       | If true, TextArea is required                                                                                                      |
| `label`             | `string`                                                             | —       | yes\*    | Label text                                                                                                                         |
| `UNSAFE_label`      | `string`                                                             | —       | yes\*    | Unescaped label text                                                                                                               |
| `maxlength`         | `number`                                                             | `null`  | no       | Maximum number of characters                                                                                                       |
| `message`           | `string`, `string[]`                                                 | `null`  | no       | Validation message                                                                                                                 |
| `UNSAFE_message`    | `string`, `string[]`                                                 | `null`  | no       | Unescaped validation message                                                                                                       |
| `name`              | `string`                                                             | `null`  | no       | TextArea name                                                                                                                      |
| `placeholder`       | `string`                                                             | `null`  | no       | TextArea placeholder                                                                                                               |
| `rows`              | `number`                                                             | `null`  | no       | Number of visible rows                                                                                                             |
| `validationState`   | [Validation dictionary][dictionary-validation], `error` (deprecated) | `null`  | no       | Type of validation state. [**DEPRECATED**][deprecated] The value "error" in the dictionary will be replaced by the value "danger". |
| `value`             | `string`                                                             | `null`  | no       | TextArea value                                                                                                                     |

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

[textarea]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextArea
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
