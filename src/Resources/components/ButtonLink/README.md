# ButtonLink

This is Twig implementation of the [ButtonLink] component.

Basic example usage:

```html
<ButtonLink href="#">Primary ButtonLink</ButtonLink>
```

Advanced example usage:

```html
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

| Prop name    | Type                                                                                      | Default   | Required | Description                                              |
| ------------ | ----------------------------------------------------------------------------------------- | --------- | -------- | -------------------------------------------------------- |
| `class`      | `string`                                                                                  | `null`    | no       | Custom CSS class                                         |
| `color`      | [Action Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | no       | Color variant                                            |
| `size`       | [Size dictionary][dictionary-size]                                                        | `medium`  | no       | Size variant                                             |
| `href`       | `string`                                                                                  | —         | yes      | Link URL                                                 |
| `isBlock`    | `bool`                                                                                    | `false`   | no       | Span the element to the full width of its parent         |
| `isDisabled` | `bool`                                                                                    | `false`   | no       | If true, ButtonLink is disabled                          |
| `isSquare`   | `bool`                                                                                    | `false`   | no       | If true, ButtonLink is square, usually only with an icon |
| `onClick`    | `string`                                                                                  | `null`    | no       | JS function to call on click                             |
| `target`     | `string`                                                                                  | `null`    | no       | Link target                                              |
| `title`      | `string`                                                                                  | `null`    | no       | Optional title to display on hover                       |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[buttonLink]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
