# Radio

This is Twig implementation of the [Radio][radio] component.

Basic example usage:

```html
<Radio id="radioDefault" label="Label" name="radioDefault" isChecked />
```

Advanced example usage:

```html
<Radio
  id="radioAdvanced"
  label="some label"
  isChecked
  name="radioAdvanced"
  validationState="danger"
  helperText="Helper text"
  autocomplete="off"
/>
```

Without lexer:

```twig
{% embed "@spirit/radio.twig" with { props: {
    id: "radioEmbed",
    label: "some label",
    name: "radioEmbed",
    isChecked: "true",
    validationState: "danger",
    helperText: "Helper text",
}} %}
```

## API

| Name                | Type                                           | Default | Required | Description                                          |
| ------------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------------------- |
| `autocomplete`      | `string`                                       | `null`  | ✕        | [Automated assistance in filling][autocomplete-attr] |
| `helperText`        | `string`                                       | `null`  | ✕        | Custom helper text                                   |
| `id`                | `string`                                       | `null`  | ✕        | Input and label identification                       |
| `inputProps`        | `string[]`                                     | `[]`    | ✕        | Pass additional attributes to the input element      |
| `isChecked`         | `bool`                                         | `false` | ✕        | If true, input is checked                            |
| `isDisabled`        | `bool`                                         | `false` | ✕        | If true, input is disabled                           |
| `isItem`            | `bool`                                         | `false` | ✕        | To render in [Item][item] mode                       |
| `isLabelHidden`     | `bool`                                         | `false` | ✕        | If true, label is hidden                             |
| `label`             | `string`                                       | —       | ✓\*      | Label text                                           |
| `name`              | `string`                                       | `null`  | ✕        | Input name                                           |
| `UNSAFE_helperText` | `string`                                       | `null`  | ✕        | Unescaped custom helper text                         |
| `UNSAFE_label`      | `string`                                       | —       | ✓\*      | Unescaped label text                                 |
| `validationState`   | [Validation dictionary][dictionary-validation] | `null`  | ✕        | Type of validation state                             |
| `value`             | `string`                                       | `null`  | ✕        | Input value                                          |

(\*) Label is required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
[radio]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Radio
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
