# Alert

This is Twig implementation of the [Alert][alert] component.

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
| `danger`      | `danger`      |
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
The icons come from the [Icon package][icon-package], or from your custom source of icons.
Read the section [Default Icons according to Color Variant](#default-icons-according-to-color-variant).

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[alert]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Alert
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[icon-package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
