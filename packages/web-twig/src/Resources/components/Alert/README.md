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

## Default Icons according to Color Variant

| Color name    | Icon name     |
| ------------- | ------------- |
| `danger`      | `warning`     |
| `default`     | `info`        |
| `informative` | `info`        |
| `success`     | `check-plain` |
| `warning`     | `warning`     |

## API

| Name          | Type                                         | Default   | Required | Description                |
| ------------- | -------------------------------------------- | --------- | -------- | -------------------------- |
| `color`       | [Emotion Color dictionary][dictionary-color] | `success` | ✕        | Color variant              |
| `elementType` | `string`                                     | `div`     | ✕        | HTML tag to render         |
| `iconName`    | `string`                                     | `info` \* | ✕        | Icon used in Alert         |
| `isCentered`  | `bool`                                       | `false`   | ✕        | If true, Alert is centered |

(\*) For each emotion color, a default icon is defined.
The icons come from the [Icon package], or from your custom source of icons.
Read the section [Default Icons according to Color Variant](#default-icons-according-to-color-variant).

You can add `id`, `data-*` or `aria-*` attributes to further extend the component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[alert]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Alert
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
[icon package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
