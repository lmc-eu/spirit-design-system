# Select

This is Twig implementation of the [Select][select] component.

The placeholder for the select element is handled in a different way than other form fields.
We add the first option item without a value with the `selected` attribute. You can also use the `disabled` attribute
if the select field is mandatory.

Basic example usage:

```twig
<Select id="selectDefault" label="Label" name="selectDefault">
  <option value="" selected>Placeholder</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

Usage with `isRequired` attribute:

```twig
<Select id="selectRequired" label="Label" name="selectRequired" isRequired>
  <option value="" selected disabled>Placeholder</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

Without lexer:

```twig
{% embed "@spirit/select.twig" with { props: {
    id: 'selectEmbed'
    name: 'selectEmbed'
    label: 'Label'
    isRequired: true
}} %}
    {% block content %}
      <option value="" selected disabled>Placeholder</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    {% endblock %}
{% endembed %}
```

## API

| Name                    | Type                                           | Default | Required | Description                                                |
| ----------------------- | ---------------------------------------------- | ------- | -------- | ---------------------------------------------------------- |
| `helperText`            | `string`                                       | `null`  | ✕        | Custom helper text                                         |
| `id`                    | `string`                                       | —       | ✔        | Select and label identification                            |
| `inputProps`            | `string[]`                                     | `[]`    | ✕        | Pass additional attributes to the select element           |
| `isDisabled`            | `bool`                                         | `false` | ✕        | If true, select is disabled                                |
| `isFluid`               | `bool`                                         | `false` | ✕        | If true, the element spans to the full width of its parent |
| `isLabelHidden`         | `bool`                                         | `false` | ✕        | If true, label is hidden                                   |
| `isRequired`            | `bool`                                         | `false` | ✕        | If true, select is required                                |
| `label`                 | `string`                                       | —       | ✔\*      | Label text                                                 |
| `name`                  | `string`                                       | `null`  | ✕        | Select name                                                |
| `UNSAFE_helperText`     | `string`                                       | `null`  | ✕        | Unescaped custom helper text                               |
| `UNSAFE_label`          | `string`                                       | —       | ✔\*      | Unescaped label text                                       |
| `UNSAFE_validationText` | [`string` \| `string[]`]                       | `null`  | ✕        | Unescaped validation text                                  |
| `validationState`       | [Validation dictionary][dictionary-validation] | `null`  | ✕        | Type of validation state.                                  |
| `validationText`        | [`string` \| `string[]`]                       | `null`  | ✕        | Validation text                                            |

(\*) The label is required for this component. Use `label` or `UNSAFE_label` to set the label.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[select]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Select
