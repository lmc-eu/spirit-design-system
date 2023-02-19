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

| Prop name     | Type                                                                            | Default   | Required | Description                                                                                                      |
| ------------- | ------------------------------------------------------------------------------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `class`       | `string`                                                                        | `null`    | no       | Custom CSS class                                                                                                 |
| `color`       | [Emotion Color dictionary][dictionary-color], `neutral`, `default` (deprecated) | `neutral` | no       | Color of the component; [**DEPRECATED**][deprecated] The value `default` will be replaced by the value `neutral` |
| `isSubtle`    | `boolean`                                                                       | `false`   | no       | Whether is Tag displayed in subtle variant                                                                       |
| `elementType` | `string`                                                                        | `span`    | no       | HTML tag to render                                                                                               |
| `size`        | [Size Extended dictionary][dictionary-size]                                     | `medium`  | no       | Size of the Tag                                                                                                  |
| `theme`       | `light`, `dark`                                                                 | `null`    | no       | [**DEPRECATED**][deprecated] in favor of `isSubtle`; Theme variant                                               |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[tag]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tag
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
