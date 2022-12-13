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
  messsage="validation failed"
  name="example2"
  validationState="error"
/>
```

Without lexer:

```twig
{% include "@spirit/checkboxField.twig" with { props: {
    id: "example",
    label: "some label",
    name: "example",
    isRequired: "true",
    validationState: "error",
    message: "validation failed",
}} %}
```

## API

| Prop name         | Type                          | Default | Required | Description                    |
| ----------------- | ----------------------------- | ------- | -------- | ------------------------------ |
| `class`           | `string`                      | `null`  | no       | Custom CSS class               |
| `id`              | `string`                      | `null`  | no       | Input and label identification |
| `isChecked`       | `bool`                        | `false` | no       | If true, input is checked      |
| `isDisabled`      | `bool`                        | `false` | no       | If true, input is disabled     |
| `isItem`          | `bool`                        | `false` | no       | To render in [Item][item] mode |
| `isLabelHidden`   | `bool`                        | `false` | no       | If true, label is hidden       |
| `isRequired`      | `bool`                        | `false` | no       | If true, input is required     |
| `label`           | `string`                      | —       | yes      | Label text                     |
| `message`         | `string`                      | `null`  | no       | Validation or help message     |
| `name`            | `string`                      | `null`  | no       | Input name                     |
| `validationState` | `success`, `warning`, `error` | `null`  | no       | Type of validation state       |
| `value`           | `string`                      | `null`  | no       | Input value                    |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

[checkboxfield]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/CheckboxField
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
