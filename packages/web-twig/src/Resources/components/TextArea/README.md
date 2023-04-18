# TextArea

This is Twig implementation of the [TextArea] component.

Basic example usage:

```twig
<TextArea id="example" label="Label" name="example"></TextArea>
```

Advanced example usage:

```twig
<TextArea
  id="example2"
  label="Label"
  message="validation failed"
  name="example2"
  placeholder="Placeholder"
  validationState="danger"
  maxlength="180"
  rows="10"
  isRequired
  helperText="custom helper text"
>
    TextArea
</TextArea>
```

Without lexer:

```twig
{% include "@spirit/textArea.twig" with { props: {
    id: "example",
    label: "Label",
    name: "example",
    isRequired: true,
    validationState: "danger",
    message: "validation failed",
    helperText: "custom helper text",
}} %}
```

## API

| Prop name         | Type                                                                 | Default | Required | Description                                                                                                                        |
| ----------------- | -------------------------------------------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`              | `string`                                                             | —       | yes      | TextArea and label identification                                                                                                  |
| `isDisabled`      | `bool`                                                               | `false` | no       | If true, TextArea is disabled                                                                                                      |
| `isFluid`         | `bool`                                                               | `false` | no       | If true, the element spans to the full width of its parent                                                                         |
| `isLabelHidden`   | `bool`                                                               | `false` | no       | If true, label is hidden                                                                                                           |
| `isRequired`      | `bool`                                                               | `false` | no       | If true, TextArea is required                                                                                                      |
| `label`           | `string`                                                             | —       | yes      | Label text                                                                                                                         |
| `maxLength`       | `number`                                                             | `null`  | no       | Maximum number of characters                                                                                                       |
| `message`         | `string`                                                             | `null`  | no       | Validation message                                                                                                                 |
| `name`            | `string`                                                             | `null`  | no       | TextArea name                                                                                                                      |
| `placeholder`     | `string`                                                             | `null`  | no       | TextArea placeholder                                                                                                               |
| `rows`            | `number`                                                             | `null`  | no       | Number of visible rows                                                                                                             |
| `validationState` | [Validation dictionary][dictionary-validation], `error` (deprecated) | `null`  | no       | Type of validation state. [**DEPRECATED**][deprecated] The value "error" in the dictionary will be replaced by the value "danger". |
| `value`           | `string`                                                             | `null`  | no       | TextArea value                                                                                                                     |
| `helperText`      | `string`                                                             | `null`  | no       | Custom helper text                                                                                                                 |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

[textarea]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextArea
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
