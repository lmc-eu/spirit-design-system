# RadioField

This is Twig implementation of the [RadioField] component.

Basic example usage:

```html
<RadioField id="example" label="Label" name="example" isChecked />
```

Without lexer:

```twig
{% include "@spirit/radioField.twig" with { props: {
    id: "example",
    label: "some label",
    name: "example",
    isChecked: "true",
}} %}
```

## API

| Prop name       | Type     | Default | Required | Description                    |
| --------------- | -------- | ------- | -------- | ------------------------------ |
| `class`         | `string` | `null`  | no       | Custom CSS class               |
| `id`            | `string` | `null`  | no       | Input and label identification |
| `isChecked`     | `bool`   | `false` | no       | If true, input is checked      |
| `isDisabled`    | `bool`   | `false` | no       | If true, input is disabled     |
| `isItem`        | `bool`   | `false` | no       | To render in [Item][item] mode |
| `isLabelHidden` | `bool`   | `false` | no       | If true, label is hidden       |
| `label`         | `string` | —       | yes      | Label text                     |
| `name`          | `string` | `null`  | no       | Input name                     |
| `value`         | `string` | `null`  | no       | Input value                    |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

[radiofield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/RadioField
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
