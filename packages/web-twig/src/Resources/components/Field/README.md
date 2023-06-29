# ValidationText

The validationText subcomponent displays validation texts for Field components like TextField, TextArea, Checkbox, FileUploader, etc.

Basic example usage:

```twig
<ValidationText
    className="Component__validationText"
    validationState="danger"
    validationText="Danger validation text"
/>
```

Advanced example:

```twig
<ValidationText
    className="Component__validationText"
    elementType="span"
    validationState="danger"
    UNSAFE_validationText="Danger <strong>validation</strong> text"
/>
```

Without lexer:

```twig
{% embed "@spirit/validationText.twig" with { props: {
    className: 'Component__validationText',
    validationState: 'danger',
    validationText: 'Danger validation text'
}} %}{% endembed %}
```

## API

| Prop name               | Type                 | Default | Required | Description                                                                   |
| ----------------------- | -------------------- | ------- | -------- | ----------------------------------------------------------------------------- |
| `className`             | `string`             | -       | yes      | ClassName of the ValidationText                                               |
| `elementType`           | `string`             | `div`   | no       | HTML tag to render, except if text is an array, then the root element is `ul` |
| `validationState`       | `string`             | `null`  | no       | Validation State is used to determine if the component should be rendered     |
| `validationText`        | `string`, `string[]` | -       | yes\*    | Validation text                                                               |
| `UNSAFE_validationText` | `string`, `string[]` | -       | yes\*    | Validation text with HTML tags                                                |

\*: ValidationText is required. You can use the `validationText` for simple text or `UNSAFE_validationText` for HTML content.
