# Tag

This is Twig implementation of the [Tag][tag] component.

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

| Name          | Type                                                    | Default   | Required | Description                                    |
| ------------- | ------------------------------------------------------- | --------- | -------- | ---------------------------------------------- |
| `color`       | [Emotion Color dictionary][dictionary-color], `neutral` | `neutral` | ✕        | Color of the component                         |
| `elementType` | `string`                                                | `span`    | ✕        | HTML tag to render                             |
| `isSubtle`    | `bool`                                                  | `false`   | ✕        | Whether the Tag is displayed in subtle variant |
| `size`        | [Size Extended dictionary][dictionary-size]             | `medium`  | ✕        | Size of the Tag                                |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[tag]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tag
