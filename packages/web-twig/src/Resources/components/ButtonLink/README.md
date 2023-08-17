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

| Prop name    | Type                                                                                      | Default   | Required | Description                                                                    |
| ------------ | ----------------------------------------------------------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `color`      | [Action Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                                  |
| `size`       | [Size dictionary][dictionary-size]                                                        | `medium`  | ✕        | Size variant                                                                   |
| `href`       | `string`                                                                                  | —         | ✔        | Link URL                                                                       |
| `isBlock`    | `bool`                                                                                    | `false`   | ✕        | Span the element to the full width of its parent                               |
| `isDisabled` | `bool`                                                                                    | `false`   | ✕        | If true, ButtonLink is disabled                                                |
| `isLoading`  | `bool`                                                                                    | `false`   | ✕        | If true, ButtonLink is in a loading state, disabled and the Spinner is visible |
| `isSquare`   | `bool`                                                                                    | `false`   | ✕        | If true, ButtonLink is square, usually only with an Icon                       |
| `target`     | `string`                                                                                  | `null`    | ✕        | Browsing context for the link                                                  |
| `title`      | `string`                                                                                  | `null`    | ✕        | Optional title to display on hover                                             |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[buttonLink]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
