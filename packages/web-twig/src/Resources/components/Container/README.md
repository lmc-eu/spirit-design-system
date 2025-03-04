# Container

This is Twig implementation of the [Container][container] component.

Basic example usage:

```twig
<Container>Content</Container>
```

Without lexer:

```twig
{% embed "@spirit/container.twig" %}
    {% block content %}
        Content
    {% endblock %}
{% endembed %}
```

## Fluid Container

If you need a full-width container, you can use the `isFluid` prop.

```twig
<Container isFluid>Content</Container>
```

## Sizes

If you need different sizes of the `Container`, you can use the `size` prop.

```twig
<Container size="small">Content</Container>
```

## Text Alignment

You can set the text alignment using the `textAlignment` prop.

```twig
<Container textAlignment="center">Content</Container>
<Container textAlignment="right">Content</Container>
```

You can also define responsive values for the `textAlignment` prop using an object:

```twig
<Container textAlignment="{{ { mobile: 'left', tablet: 'center', desktop: 'right' } }}">Content</Container>
```

## API

| Name            | Type                                                             | Default  | Required | Description                 |
| --------------- | ---------------------------------------------------------------- | -------- | -------- | --------------------------- |
| `isFluid`       | `bool`                                                           | `false`  | ✕        | If true, Container is fluid |
| `size`          | [Size Extended dictionary][dictionary-size]                      | `xlarge` | ✕        | Size variant                |
| `textAlignment` | \[[Text Alignment dictionary][dictionary-alignment] \| `object`] | -        | ✕        | Text alignment              |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[container]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Container
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#alignment
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
