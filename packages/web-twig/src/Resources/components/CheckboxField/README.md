# CheckboxField

This is Twig implementation of the [CheckboxField] component.

Basic example usage:

```html
<CheckboxField id="checkboxfieldDefault" label="Label" name="checkboxfieldDefault" />
```

Advanced example usage:

```html
<CheckboxField
  id="checkboxfieldAdvanced"
  isChecked
  isRequired
  validationText="validation text"
  name="checkboxfieldAdvanced"
  validationState="danger"
  helperText="Helper text"
/>
```

Without lexer:

```twig
{% embed "@spirit/checkboxField.twig" with { props: {
    id: "checkboxfieldEmbed",
    label: "some label",
    name: "checkboxfieldEmbed",
    isRequired: "true",
    validationState: "danger",
    validationText: "validation text",
    helperText: "Helper text",
}} %}
```

## API

| Prop name               | Type                                           | Default | Required | Description                                          |
| ----------------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------------------- |
| `autocomplete`          | `string`                                       | `null`  | no       | [Automated assistance in filling][autocomplete-attr] |
| `helperText`            | `string`                                       | `null`  | no\*\*   | Custom helper text                                   |
| `id`                    | `string`                                       | `null`  | no       | Input and label identification                       |
| `inputProps`            | `string[]`                                     | `[]`    | no       | Pass additional attributes to the input element      |
| `isChecked`             | `bool`                                         | `false` | no       | If true, input is checked                            |
| `isDisabled`            | `bool`                                         | `false` | no       | If true, input is disabled                           |
| `isItem`                | `bool`                                         | `false` | no       | To render in [Item][item] mode                       |
| `isLabelHidden`         | `bool`                                         | `false` | no       | If true, label is hidden                             |
| `isRequired`            | `bool`                                         | `false` | no       | If true, input is required                           |
| `label`                 | `string`                                       | —       | yes\*    | Label text                                           |
| `name`                  | `string`                                       | `null`  | no       | Input name                                           |
| `UNSAFE_helperText`     | `string`                                       | `null`  | no\*\*   | Unescaped custom helper text                         |
| `UNSAFE_label`          | `string`                                       | —       | yes\*    | Unescaped label text (allows HTML)                   |
| `UNSAFE_validationText` | `string`, `string[]`                           | `null`  | no\*\*   | Unescaped validation text                            |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`  | no       | Type of validation state.                            |
| `validationText`        | `string`, `string[]`                           | `null`  | no\*\*   | Validation text                                      |
| `value`                 | `string`                                       | `null`  | no       | Input value                                          |

\*: Label is required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
\*\*: Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

[checkboxfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/CheckboxField
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
