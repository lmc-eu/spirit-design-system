# Pill

This is Twig implementation of the [Pill] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/Pill.twig" with { props: {
    color: 'secondary',
    elementType: 'div'
}} %}
    {% block content %}
        3
    {% endblock %}
{% endembed %}
```

With Html syntax lexer (enabled by default):
```twig
<Pill color="secondary" elementType="div">333</Pill>
```

## Available props

| name        | type            | default value |
|-------------|-----------------|---------------|
| color       | `string`        | selected      |
| elementType | `HTML element ` | span          |
| class       | `string`        | undefined     |

[Pill]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Pill
