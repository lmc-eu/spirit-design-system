# Container

This is Twig implementation of the [Container] component.

Basic example usage:

```html
<Container>
    Content
</Container>
```

Without lexer:

```twig
{% embed "@spirit/container.twig" %}
    {% block content %}
        Content
    {% endblock %}
{% endembed %}
```

## API

| Prop name     | Type           | Default   | Required | Description         |
|---------------|----------------|-----------|----------|---------------------|
| `class`       | `string`       | `null`    | no       | Custom CSS class    |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[Container]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Container
