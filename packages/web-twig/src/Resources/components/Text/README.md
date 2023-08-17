# Text

This is Twig implementation of the [Text] component.

Basic example usage:

```html
<Text>Text content</Text>
```

Advanced example usage:

```html
<Text size="large" emphasis="italic">Text content</Text>
```

Without lexer:

```twig
{% embed "@spirit/text.twig" with { props: {
    size: 'medium'
    emphasis: 'bold'
}} %}
    {% block content %}
        Text content
    {% endblock %}
{% endembed %}
```

## API

| Name          | Type                                        | Default   | Required | Description                                                    |
| ------------- | ------------------------------------------- | --------- | -------- | -------------------------------------------------------------- |
| `elementType` | `string`                                    | `p`       | ✕        | HTML tag to render                                             |
| `emphasis`    | [`regular` \| `bold` \| `italic`]           | `regular` | ✕        | Emphasis of the text                                           |
| `size`        | [Size Extended dictionary][dictionary-size] | `medium`  | ✕        | Size of the text                                               |
| `translate`   | [`yes` \| `no` \| `''`]                     | `null`    | ✕        | Set to `no` to disable machine translation of the text content |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[text]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Text
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
