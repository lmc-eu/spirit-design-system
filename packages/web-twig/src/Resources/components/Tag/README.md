# Tag

This is Twig implementation of the [Tag] component.

Basic example usage:

```html
<Tag>Tag</Tag>
```

Advanced example usage:

```html
<Tag color="success" elementType="div" size="small" isSubtle>Tag content</Tag>
```

Without lexer:

```twig
{% embed "@spirit/tag.twig" with { props: {
    color: 'success',
    elementType: 'div'
    size: 'small',
    isSubtle: 'true'
}} %}
    {% block content %}
        Tag content
    {% endblock %}
{% endembed %}
```

## API

| Prop name     | Type                                                    | Default   | Required | Description                                    |
| ------------- | ------------------------------------------------------- | --------- | -------- | ---------------------------------------------- |
| `color`       | [Emotion Color dictionary][dictionary-color], `neutral` | `neutral` | ✕        | Color of the component                         |
| `elementType` | `string`                                                | `span`    | ✕        | HTML tag to render                             |
| `isSubtle`    | `bool`                                                  | `false`   | ✕        | Whether the Tag is displayed in subtle variant |
| `size`        | [Size Extended dictionary][dictionary-size]             | `medium`  | ✕        | Size of the Tag                                |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[tag]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tag
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
