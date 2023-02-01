# Text

This is Twig implementation of the [Text] component.

Basic example usage:

```html
<Text>Text content</Text>
```

Advanced example usage:

```html
<Text size="large" emphasis="italic">Text content</Text>
```

Without lexer:

```twig
{% embed "@spirit/text.twig" with { props: {
    size: 'medium'
    emphasis: 'bold'
}} %}
    {% block content %}
        Text content
    {% endblock %}
{% endembed %}
```

## API

| Prop name     | Type                                                   | Default   | Required | Description          |
| ------------- | ------------------------------------------------------ | --------- | -------- | -------------------- |
| `class`       | `string`                                               | `null`    | no       | Custom CSS class     |
| `elementType` | `string`                                               | `p`       | no       | HTML tag to render   |
| `emphasis`    | `regular`, `bold`, `italic`                            | `regular` | no       | Emphasis of the text |
| `size`        | [Size and Size Extended dictionaries][dictionary-size] | `medium`  | no       | Size of the text     |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[text]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Text
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
