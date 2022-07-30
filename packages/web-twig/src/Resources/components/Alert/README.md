# Alert

This is Twig implementation of the [Alert] component.

Basic example usage:

```html
<Alert>Alert</Alert>
```

Advanced example usage:

```html
<Alert color="danger" elementType="span">Danger Alert</Alert>
```

Without lexer:

```twig
{% embed "@spirit/alert.twig" with { props: {
    color: 'danger'
    elementType: 'span'
}} %}
    {% block content %}
          Danger Alert
    {% endblock %}
{% endembed %}
```

## API

| Prop name     | Type                               | Default   | Required | Description        |
| ------------- | ---------------------------------- | --------- | -------- | ------------------ |
| `class`       | `string`                           | `null`    | no       | Custom CSS class   |
| `color`       | `success`, `danger`, `informative` | `success` | no       | Color variant      |
| `elementType` | `string`                           | `div`     | no       | HTML tag to render |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[alert]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Alert
