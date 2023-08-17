# Heading

This is Twig implementation of the [Heading] component.

Basic example usage:

```html
<Heading>Heading</Heading>
```

Advanced example usage:

```html
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

| Prop name     | Type                                        | Default  | Required | Description                                                    |
| ------------- | ------------------------------------------- | -------- | -------- | -------------------------------------------------------------- |
| `size`        | [Size Extended dictionary][dictionary-size] | `medium` | no       | Size of the text                                               |
| `elementType` | `string`                                    | `div`    | no       | HTML tag to render                                             |
| `translate`   | [`yes` \| `no`]                             | `null`   | no       | Set to `no` to disable machine translation of the text content |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[heading]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Heading
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
