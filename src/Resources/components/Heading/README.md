# Heading

This is Twig implementation of the [Heading] component.

Basic example usage:

```html
<Heading>Heading</Heading>
```

Advanced example usage:

```html
<Heading size="large" elementType="h2">Text content</Heading>
```

Without lexer:

```twig
{% embed "@spirit/heading.twig" with { props: {
    size: 'medium'
}} %}
    {% block content %}
        Text content
    {% endblock %}
{% endembed %}
```

## API

| Prop name     | Type                                        | Default  | Required | Description        |
| ------------- | ------------------------------------------- | -------- | -------- | ------------------ |
| `class`       | `string`                                    | `null`   | no       | Custom CSS class   |
| `size`        | [Size Extended dictionary][dictionary-size] | `medium` | no       | Size of the text   |
| `elementType` | `string`                                    | `div`    | no       | HTML tag to render |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[heading]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Heading
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
