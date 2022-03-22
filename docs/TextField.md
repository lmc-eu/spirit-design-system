# TextField

This is Twig implementation of the [TextField] component.

## Examples
pure implementation:
```twig
{% include "@spirit/textField.twig" with { props: {
    id: "example",
    type: "text",
    name: "example",
    required: "true",
    validationState: "error",
    message: "validation failed",
}} %}
```

With Html syntax lexer (enabled by default):
```twig
<TextField id="example" type="text" name="example" required validationState="error" messsage="validation failed" />
<TextField id="example2" type="password" name="example2" required validationState="error" messsage="validation failed" />
```

## Available props

| Name              | Type                          | Description                    |
|-------------------|-------------------------------|--------------------------------|
| `id`              | string                        | Input and label identification |
| `name`            | string                        | Input name                     |
| `type`            | `text`, `password`            | Input type                     |
| `label`           | string                        | Label text                     |
| `placeholder`     | string                        | Input placeholder              |
| `value`           | string                        | Input value                    |
| `message`         | string                        | Validation or help message     |
| `disabled`        | boolean                       | Whether is field disabled      |
| `required`        | boolean                       | Whether is field required      |
| `validationState` | `success`, `warning`, `error` | Type of validation state       |
| `isLabelHidden`   | boolean                       | Whether is label hidden        |
| `class`           | string                        | Additional class name          |

[TextField]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/TextField