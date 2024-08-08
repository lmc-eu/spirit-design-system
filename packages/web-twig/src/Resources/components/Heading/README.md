# Heading

This is Twig implementation of the [Heading][heading] component.

Basic example usage:

```twig
<Heading>Heading</Heading>
```

Advanced example usage:

```twig
<Heading size="large" elementType="h2">Text content</Heading>
```

Without lexer:

```twig
{% embed "@spirit/heading.twig" with { props: {
    size: 'medium'
}} %}
    {% block content %}
        Text content
    {% endblock %}
{% endembed %}
```

## API

| Name          | Type                                        | Default  | Required | Description                                                    |
| ------------- | ------------------------------------------- | -------- | -------- | -------------------------------------------------------------- |
| `size`        | [Size Extended dictionary][dictionary-size] | `medium` | ✕        | Size of the text                                               |
| `elementType` | `string`                                    | `div`    | ✕        | HTML tag to render                                             |
| `translate`   | [`yes` \| `no` \| `''`]                     | `null`   | ✕        | Set to `no` to disable machine translation of the text content |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[heading]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Heading
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
