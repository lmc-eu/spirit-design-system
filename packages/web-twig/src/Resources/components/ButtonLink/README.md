# ButtonLink

This is Twig implementation of the [ButtonLink][button] component.

Basic example usage:

```twig
<ButtonLink href="#">Primary ButtonLink</ButtonLink>
```

Advanced example usage:

```twig
<ButtonLink color="primary" href="#" isBlock>Primary block ButtonLink</ButtonLink>
```

Without lexer:

```twig
{% embed "@spirit/buttonLink.twig" with { props: {
    color: 'primary',
    href: '#'
}} %}
    {% block content %}
        Primary ButtonLink
    {% endblock %}
{% endembed %}
```

## API

| Name            | Type                                                                                             | Default   | Required | Description                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------ | --------- | -------- | ------------------------------------------------------------------------------ |
| `color`         | [Action Button Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                                  |
| `href`          | `string`                                                                                         | —         | ✓        | Link URL                                                                       |
| `isBlock`       | `bool`                                                                                           | `false`   | ✕        | Span the element to the full width of its parent                               |
| `isDisabled`    | `bool`                                                                                           | `false`   | ✕        | If true, ButtonLink is disabled                                                |
| `isLoading`     | `bool`                                                                                           | `false`   | ✕        | If true, ButtonLink is in a loading state, disabled and the Spinner is visible |
| `isSymmetrical` | `bool`                                                                                           | `false`   | ✕        | If true, ButtonLink has symmetrical dimensions, usually only with an Icon      |
| `size`          | [Size dictionary][dictionary-size]                                                               | `medium`  | ✕        | Size variant                                                                   |
| `target`        | `string`                                                                                         | `null`    | ✕        | Browsing context for the link                                                  |
| `title`         | `string`                                                                                         | `null`    | ✕        | Optional title to display on hover                                             |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
