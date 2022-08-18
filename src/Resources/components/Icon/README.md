# Icon

This is Twig implementation of the [Icon] component.

Icon component uses inlineSVG extension, so don't forget to add icons path in the configuration
as seen in [inlineSVG docs].

Basic example usage:

```html
<Icon name="warning" />
```

Advanced example usage:

```html
<Icon name="warning" title="This is warning!" />
```

Without lexer:

```twig
{% embed "@spirit/icon.twig" with { props: {
    name: 'warning'
}} %}{% endembed %}
```

## API

| Prop name | Type     | Default | Required | Description                        |
| --------- | -------- | ------- | -------- | ---------------------------------- |
| `class`   | `string` | `null`  | no       | Custom CSS class                   |
| `name`    | `string` | —       | yes      | Name of the icon                   |
| `title`   | `string` | `null`  | no       | Optional title to display on hover |

Get list of `name` options in the [Icon package] or your source of icons.

[icon]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Icon
[inlinesvg docs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/docs/inlineSVG.md
[icon package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
