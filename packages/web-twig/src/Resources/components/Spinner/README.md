# Spinner

This is Twig implementation of the Spinner component.

Basic example usage:

```html
<Spinner />
```

Advanced example usage:

```html
<Spinner color="secondary" />
```

Without lexer:

```twig
{% embed "@spirit/spinner.twig" with { props: {
    color: 'secondary'
}} %}
{% endembed %}
```

## API

| Prop name | Type                                      | Default | Required | Description   |
| --------- | ----------------------------------------- | ------- | -------- | ------------- |
| `color`   | [Text Color dictionary][dictionary-color] | `null`  | no       | Color variant |

You can add `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
