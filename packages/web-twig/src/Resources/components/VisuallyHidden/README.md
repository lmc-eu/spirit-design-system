# VisuallyHidden

The VisuallyHidden component helps improve web accessibility by rendering its content in a way that it's hidden visually but still accessible to screen readers.

Basic example usage:

```twig
<VisuallyHidden>Label</VisuallyHidden>
```

Advanced example:

```twig
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
| `children`         | `string`        | —       | ✓        | Hidden Label                         |
| `elementType`      | `string`        | `span`  | ✕        | Type of element used as main wrapper |
| `UNSAFE_className` | `string`        | —       | ✕        | Wrapper custom class name            |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | Wrapper custom style                 |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
