# Text

This is Twig implementation of the [Link][link] component.

Basic example usage:

```twig
<Link href="#">Link</Link>
```

Advanced example usage:

```html
<Link
    href="#"
    color="primary"
    isUnderlined
>
    Primary Underlined Link
</Link>
```

Without lexer:

```twig
{% embed "@spirit/link.twig" with { props: {
    color: 'primary',
    href: '/'
}} %}
    {% block content %}
        Primary Link
    {% endblock %}
{% endembed %}
```

## API

| Name           | Type                                             | Default   | Required | Description                        |
| -------------- | ------------------------------------------------ | --------- | -------- | ---------------------------------- |
| `color`        | [Action Link Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                      |
| `href`         | `string`                                         | —         | ✓        | Link URL                           |
| `isDisabled`   | `bool`                                           | `false`   | ✕        | If true, Link is disabled          |
| `isUnderlined` | `bool`                                           | `false`   | ✕        | If true, Link is underlined        |
| `target`       | `string`                                         | `null`    | ✕        | Browsing context for the link      |
| `title`        | `string`                                         | `null`    | ✕        | Optional title to display on hover |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[link]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Link
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
