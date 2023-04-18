# Container

This is Twig implementation of the [Container] component.

Basic example usage:

```html
<Container>Content</Container>
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

There is no API for Container.

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[container]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Container
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
