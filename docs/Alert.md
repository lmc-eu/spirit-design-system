# Alert

This is Twig implementation of the [Alert] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/alert.twig" %}
    {% block content %}
        Alert
    {% endblock %}
{% endembed %}

{% embed "@spirit/alert.twig" with { props: {
    color: 'danger'
    elementType: 'span'
}} %}
    {% block content %}
          Danger Alert
    {% endblock %}
{% endembed %}
```

With Html syntax lexer (enabled by default):
```twig
<Alert>
    Alert
</Alert>
<Alert color="danger" elementType="span">
  Danger Alert
</Alert>
```

## Available props

| Name          | Type                | Description                       |
|---------------|---------------------|-----------------------------------|
| `color`       | `success`, `danger` | Color variant of the Alert        |
| `elementType` | HTML element        | Element type to use for the Alert |

[Alert]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Alert
