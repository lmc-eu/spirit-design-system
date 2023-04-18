# CheckboxField

This is Twig implementation of the [CheckboxField] component.

Basic example usage:

```html
<CheckboxField id="example" label="Label" name="example" />
```

Advanced example usage:

```html
<CheckboxField
  id="example2"
  isChecked
  isRequired
  message="validation failed"
  name="example2"
  validationState="danger"
  helperText="Helper text"
/>
```

Without lexer:

```twig
{% include "@spirit/checkboxField.twig" with { props: {
    id: "example",
    label: "some label",
    name: "example",
    isRequired: "true",
    validationState: "danger",
    message: "validation failed",
    helperText: "Helper text",
}} %}
```

## API

| Prop name           | Type                                                                 | Default | Required | Description                                                                                                                        |
| ------------------- | -------------------------------------------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                | `string`                                                             | `null`  | no       | Input and label identification                                                                                                     |
| `isChecked`         | `bool`                                                               | `false` | no       | If true, input is checked                                                                                                          |
| `isDisabled`        | `bool`                                                               | `false` | no       | If true, input is disabled                                                                                                         |
| `isItem`            | `bool`                                                               | `false` | no       | To render in [Item][item] mode                                                                                                     |
| `isLabelHidden`     | `bool`                                                               | `false` | no       | If true, label is hidden                                                                                                           |
| `isRequired`        | `bool`                                                               | `false` | no       | If true, input is required                                                                                                         |
| `label`             | `string`                                                             | —       | yes\*    | Label text                                                                                                                         |
| `UNSAFE_label`      | `string`                                                             | —       | yes\*    | Unescaped label text (allows HTML)                                                                                                 |
| `message`           | `string`                                                             | `null`  | no\*\*   | Validation message                                                                                                                 |
| `UNSAFE_message`    | `string`                                                             | `null`  | no\*\*   | Unescaped validation message                                                                                                       |
| `helperText`        | `string`                                                             | `null`  | no\*\*   | Custom helper text                                                                                                                 |
| `UNSAFE_helperText` | `string`                                                             | `null`  | no\*\*   | Unescaped custom helper text                                                                                                       |
| `name`              | `string`                                                             | `null`  | no       | Input name                                                                                                                         |
| `validationState`   | [Validation dictionary][dictionary-validation], `error` (deprecated) | `null`  | no       | Type of validation state. [**DEPRECATED**][deprecated] The value "error" in the dictionary will be replaced by the value "danger". |
| `value`             | `string`                                                             | `null`  | no       | Input value                                                                                                                        |

\*: Label is required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
\*\*: Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

[checkboxfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/CheckboxField
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
