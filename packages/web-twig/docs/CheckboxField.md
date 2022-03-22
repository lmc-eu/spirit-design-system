# CheckboxField

This is Twig implementation of the [CheckboxField] component.

## Examples
pure implementation:
```twig
{% include "@spirit/checkboxField.twig" with { props: {
    id: "example",
    label: "some label",
    name: "example",
    required: "true",
    validationState: "error",
    message: "validation failed",
}} %}
```

With Html syntax lexer (enabled by default):
```twig
<CheckboxField id="example" name="example" required checked validationState="error" messsage="validation failed" />
```

## Available props

| Name              | Type      | Description                    |
|-------------------|-----------|--------------------------------|
| `id`              | string    | Input and label identification |
| `name`            | string    | Input name                     |
| `label`           | string    | Label text                     |
| `value`           | string    | Input value                    |
| `message`         | string    | Validation or help message     |
| `disabled`        | boolean   | Whether is field disabled      |
| `required`        | boolean   | Whether is field required      |
| `checked`         | boolean   | Whether is field checked       |
| `validationState` | `error`   | Type of validation state       |
| `isLabelHidden`   | boolean   | Whether is label hidden        |
| `class`           | string    | Additional class name          |

[CheckboxField]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/CheckboxField