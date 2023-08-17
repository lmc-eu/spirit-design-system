# Pill

This is Twig implementation of the [Pill] component.

Basic example usage:

```html
<Pill>3</Pill>
```

Advanced example usage:

```html
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

| Prop name     | Type                                                                                                                        | Default    | Required | Description        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- | -------- | ------------------ |
| `color`       | [[Action Color dictionary][dictionary-color] \| [Emotion Color dictionary][dictionary-color] \| `selected` \| `unselected`] | `selected` | ✕        | Color variant      |
| `elementType` | `string`                                                                                                                    | `span`     | ✕        | HTML tag to render |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[pill]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Pill
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
