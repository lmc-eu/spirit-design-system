# Text

This is Twig implementation of the [Text] component.

## Examples
pure implementation:
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

With Html syntax lexer (enabled by default):
```twig
<Text size="large" emphasis="italic">Text content</Text>
```

## Available props

| Name       | Type                                | Default  | Description          |
| ---------- | ----------------------------------- | -------- | -------------------- |
| `size`     | `large`, `medium`, `small`, `xmall` | `medium` | Size of the text     |
| `emphasis` | `italic`, `bold`                    |          | Emphasis of the text |

[Tag]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Text
