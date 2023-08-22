# Checkbox

This is Twig implementation of the [Checkbox] component.

Basic example usage:

```html
<Checkbox id="checkboxDefault" label="Label" name="checkboxDefault" />
```

Advanced example usage:

```html
<Checkbox
  id="checkboxAdvanced"
  isChecked
  isRequired
  validationText="validation text"
  name="checkboxAdvanced"
  validationState="danger"
  helperText="Helper text"
/>
```

Without lexer:

```twig
{% embed "@spirit/checkbox.twig" with { props: {
    id: "checkboxEmbed",
    label: "some label",
    name: "checkboxEmbed",
    isRequired: "true",
    validationState: "danger",
    validationText: "validation text",
    helperText: "Helper text",
}} %}
```

## API

| Name                    | Type                                           | Default | Required | Description                                          |
| ----------------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------------------- |
| `autocomplete`          | `string`                                       | `null`  | ✕        | [Automated assistance in filling][autocomplete-attr] |
| `helperText`            | `string`                                       | `null`  | ✕\*\*    | Custom helper text                                   |
| `id`                    | `string`                                       | `null`  | ✕        | Input and label identification                       |
| `inputProps`            | `string[]`                                     | `[]`    | ✕        | Pass additional attributes to the input element      |
| `isChecked`             | `bool`                                         | `false` | ✕        | If true, input is checked                            |
| `isDisabled`            | `bool`                                         | `false` | ✕        | If true, input is disabled                           |
| `isItem`                | `bool`                                         | `false` | ✕        | To render in [Item][item] mode                       |
| `isLabelHidden`         | `bool`                                         | `false` | ✕        | If true, label is hidden                             |
| `isRequired`            | `bool`                                         | `false` | ✕        | If true, input is required                           |
| `label`                 | `string`                                       | —       | ✔\*      | Label text                                           |
| `name`                  | `string`                                       | `null`  | ✕        | Input name                                           |
| `UNSAFE_helperText`     | `string`                                       | `null`  | ✕\*\*    | Unescaped custom helper text                         |
| `UNSAFE_label`          | `string`                                       | —       | ✔\*      | Unescaped label text (allows HTML)                   |
| `UNSAFE_validationText` | [`string` \| `string[]`]                       | `null`  | ✕\*\*    | Unescaped validation text                            |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`  | ✕        | Type of validation state.                            |
| `validationText`        | [`string` \| `string[]`]                       | `null`  | ✕\*\*    | Validation text                                      |
| `value`                 | `string`                                       | `null`  | ✕        | Input value                                          |

\*: Label is required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
\*\*: Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

[checkbox]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Checkbox
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
