# Heading

This is Twig implementation of the [Heading] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/heading.twig" with { props: {
    size: 'medium'
}} %}
    {% block content %}
        Text content
    {% endblock %}
{% endembed %}
```

With Html syntax lexer (enabled by default):
```twig
<Heading size="large">Text content</Heading>
```

## Available props

| Name          | Type                                          | Default  | Description      |
| ------------- | --------------------------------------------- | -------- | ---------------- |
| `elementType` | `React.Element`                               | `div`    | HTML tag,        |
| `size`        | `xlarge`, `large`, `medium`, `small`, `xmall` | `medium` | Size of the text |

[Tag]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Heading
