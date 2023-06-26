# Text

This is Twig implementation of the [Link] component.

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

| Prop name      | Type                                             | Default   | Required | Description                        |
| -------------- | ------------------------------------------------ | --------- | -------- | ---------------------------------- |
| `color`        | [Action Link Color dictionary][dictionary-color] | `primary` | no       | Color variant                      |
| `href`         | `string`                                         | —         | yes      | Link URL                           |
| `isDisabled`   | `bool`                                           | `false`   | no       | If true, Link is disabled          |
| `isUnderlined` | `bool`                                           | `false`   | no       | If true, Link is underlined        |
| `target`       | `string`                                         | `null`    | no       | Link target                        |
| `title`        | `string`                                         | `null`    | no       | Optional title to display on hover |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[link]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Link
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
