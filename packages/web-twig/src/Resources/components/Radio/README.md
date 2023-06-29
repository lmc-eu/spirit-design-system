# Radio

This is Twig implementation of the [Radio] component.

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

| Prop name           | Type                                           | Default | Required | Description                                          |
| ------------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------------------- |
| `autocomplete`      | `string`                                       | `null`  | no       | [Automated assistance in filling][autocomplete-attr] |
| `helperText`        | `string`                                       | `null`  | no       | Custom helper text                                   |
| `id`                | `string`                                       | `null`  | no       | Input and label identification                       |
| `inputProps`        | `string[]`                                     | `[]`    | no       | Pass additional attributes to the input element      |
| `isChecked`         | `bool`                                         | `false` | no       | If true, input is checked                            |
| `isDisabled`        | `bool`                                         | `false` | no       | If true, input is disabled                           |
| `isItem`            | `bool`                                         | `false` | no       | To render in [Item][item] mode                       |
| `isLabelHidden`     | `bool`                                         | `false` | no       | If true, label is hidden                             |
| `label`             | `string`                                       | —       | yes      | Label text                                           |
| `name`              | `string`                                       | `null`  | no       | Input name                                           |
| `UNSAFE_helperText` | `string`                                       | `null`  | no       | Unescaped custom helper text                         |
| `UNSAFE_label`      | `string`                                       | —       | yes      | Unescaped label text                                 |
| `validationState`   | [Validation dictionary][dictionary-validation] | `null`  | no       | Type of validation state                             |
| `value`             | `string`                                       | `null`  | no       | Input value                                          |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

[radio]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Radio
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
