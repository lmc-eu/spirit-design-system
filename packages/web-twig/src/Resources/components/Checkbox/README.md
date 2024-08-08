# Checkbox

This is Twig implementation of the [Checkbox][checkbox] component.

Basic example usage:

```twig
<Checkbox id="checkbox-default" label="Label" name="checkboxDefault" />
```

Advanced example usage:

```twig
<Checkbox
  id="checkbox-advanced"
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
    id: "checkbox-embed",
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
| `label`                 | `string`                                       | —       | ✓\*      | Label text                                           |
| `name`                  | `string`                                       | `null`  | ✕        | Input name                                           |
| `UNSAFE_helperText`     | `string`                                       | `null`  | ✕\*\*    | Unescaped custom helper text                         |
| `UNSAFE_label`          | `string`                                       | —       | ✓\*      | Unescaped label text (allows HTML)                   |
| `UNSAFE_validationText` | [`string` \| `string[]`]                       | `null`  | ✕\*\*    | Unescaped validation text                            |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`  | ✕        | Type of validation state.                            |
| `validationText`        | [`string` \| `string[]`]                       | `null`  | ✕\*\*    | Validation text                                      |
| `value`                 | `string`                                       | `null`  | ✕        | Input value                                          |

(\*) Label is required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
(\*\*) Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[checkbox]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Checkbox
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
