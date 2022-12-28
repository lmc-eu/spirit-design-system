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
  messsage="validation failed"
  name="example2"
  placeholder="Placeholder"
  validationState="error"
  maxlength="180"
  rows="10"
  isRequired
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
    validationState: "error",
    message: "validation failed",
}} %}
```

## API

| Prop name         | Type                          | Default | Required | Description                                                |
| ----------------- | ----------------------------- | ------- | -------- | ---------------------------------------------------------- |
| `class`           | `string`                      | `null`  | no       | Custom CSS class                                           |
| `id`              | `string`                      | —       | yes      | TextArea and label identification                          |
| `isDisabled`      | `bool`                        | `false` | no       | If true, TextArea is disabled                              |
| `isFluid`         | `bool`                        | `false` | no       | If true, the element spans to the full width of its parent |
| `isLabelHidden`   | `bool`                        | `false` | no       | If true, label is hidden                                   |
| `isRequired`      | `bool`                        | `false` | no       | If true, TextArea is required                              |
| `label`           | `string`                      | —       | yes      | Label text                                                 |
| `maxLength`       | `number`                      | `null`  | no       | Maximum number of characters                               |
| `message`         | `string`                      | `null`  | no       | Validation or help message                                 |
| `name`            | `string`                      | `null`  | no       | TextArea name                                              |
| `placeholder`     | `string`                      | `null`  | no       | TextArea placeholder                                       |
| `rows`            | `number`                      | `null`  | no       | Number of visible rows                                     |
| `validationState` | `success`, `warning`, `error` | `null`  | no       | Type of validation state                                   |
| `value`           | `string`                      | `null`  | no       | TextArea value                                             |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

[textarea]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/TextArea
