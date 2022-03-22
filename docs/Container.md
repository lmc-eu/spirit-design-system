# Container

This is Twig implementation of the [Container] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/container.twig" %}
    {% block content %}
        Content
    {% endblock %}
{% endembed %}
```

With Html syntax lexer (enabled by default):
```twig
<Container>Content</Container>
```

[Container]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Container