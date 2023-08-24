# VisuallyHidden

The VisuallyHidden component helps improve web accessibility by rendering its content in a way that it's hidden visually but still accessible to screen readers.

Basic example usage:

```html
<VisuallyHidden>Label</VisuallyHidden>
```

Advanced example:

```html
<VisuallyHidden elementType="div">Label</VisuallyHidden>
```

Without lexer:

```twig
{% embed "@spirit/visuallyHidden.twig" with { props: {
    elementType: 'div',
}} %}
    {% block content %}
        Label
    {% endblock %}
{% endembed %}
```

### API

| Name               | Type            | Default | Required | Description                          |
| ------------------ | --------------- | ------- | -------- | ------------------------------------ |
| `children`         | `string`        | —       | ✔        | Hidden Label                         |
| `elementType`      | `string`        | `span`  | ✕        | Type of element used as main wrapper |
| `UNSAFE_className` | `string`        | —       | ✕        | Wrapper custom class name            |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | Wrapper custom style                 |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
