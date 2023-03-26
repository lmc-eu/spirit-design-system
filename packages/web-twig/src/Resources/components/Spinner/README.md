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

| Prop name | Type                                      | Default | Required | Description      |
| --------- | ----------------------------------------- | ------- | -------- | ---------------- |
| `class`   | `string`                                  | `null`  | no       | Custom CSS class |
| `color`   | [Text Color dictionary][dictionary-color] | `null`  | no       | Color variant    |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
