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

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[icon-documentation]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Icon/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
