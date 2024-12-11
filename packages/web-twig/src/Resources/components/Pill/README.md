# Pill

This is Twig implementation of the [Pill][pill] component.

Basic example usage:

```twig
<Pill>3</Pill>
```

Advanced example usage:

```twig
<Pill color="warning" elementType="div">333</Pill>
```

Without lexer:

```twig
{% embed "@spirit/pill.twig" with { props: {
    color: 'selected'
    elementType: 'div'
}} %}
    {% block content %}
          333
    {% endblock %}
{% endembed %}
```

## API

| Name          | Type                                                                       | Default    | Required | Description        |
| ------------- | -------------------------------------------------------------------------- | ---------- | -------- | ------------------ |
| `color`       | \[[Emotion Color dictionary][dictionary-color] \| `selected` \| `neutral`] | `selected` | ✕        | Color variant      |
| `elementType` | `string`                                                                   | `span`     | ✕        | HTML tag to render |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[pill]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Pill
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
