# Text

This is Twig implementation of the [Text][text] component.

Basic example usage:

```twig
<Text>Text content</Text>
```

Advanced example usage:

```twig
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

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[text]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Text
