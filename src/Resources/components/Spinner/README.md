# Spinner

This is Twig implementation of the Spinner component.

Basic example usage:

```html
<Spinner />
```

Advanced example usage:

```html
<Spinner color="secondary" boxSize="36" />
```

Without lexer:

```twig
{% embed "@spirit/spinner.twig" with { props: {
    color: 'secondary',
    boxSize: 36,
}} %}
{% endembed %}
```

## API

| Name    | Type                                      | Default | Required | Description   |
| ------- | ----------------------------------------- | ------- | -------- | ------------- |
| `color` | [Text Color dictionary][dictionary-color] | `null`  | ✕        | Color variant |

👉 `Spinner` is a wrapper of the `Icon` component.
Please, read [`Icon` documentation][icon-documentation] to find out which other props can be passed.

You can add `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[icon-documentation]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Icon/README.md
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
