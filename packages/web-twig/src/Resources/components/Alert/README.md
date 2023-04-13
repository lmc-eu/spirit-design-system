# Alert

This is Twig implementation of the [Alert] component.

Basic example usage:

```html
<Alert>Alert</Alert>
```

Advanced example usage:

```html
<Alert color="danger" elementType="span" iconName="close" isCentered>Danger Alert</Alert>
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

| Prop name     | Type                                         | Default   | Required | Description                |
| ------------- | -------------------------------------------- | --------- | -------- | -------------------------- |
| `color`       | [Emotion Color dictionary][dictionary-color] | `success` | no       | Color variant              |
| `elementType` | `string`                                     | `div`     | no       | HTML tag to render         |
| `iconName`    | `string`                                     | `null`    | no       | Icon used in Alert         |
| `isCentered`  | `bool`                                       | `false`   | no       | If true, Alert is centered |

You can add `id`, `data-*` or `aria-*` attributes to further extend the component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[alert]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Alert
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
