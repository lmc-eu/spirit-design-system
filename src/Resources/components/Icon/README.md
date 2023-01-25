# Icon

Icon component uses inlineSVG extension, so don't forget to add icons path in the configuration
as seen in [inlineSVG docs].

Basic example usage:

```html
<Icon name="warning" />
```

Advanced example usage:

```html
<Icon name="warning" title="This is warning!" size="32" ariaHidden="false" />
```

Without lexer:

```twig
{% embed "@spirit/icon.twig" with { props: {
    name: 'warning'
}} %}{% endembed %}
```

## API

| Prop name    | Type     | Default | Required | Description                           |
| ------------ | -------- | ------- | -------- | ------------------------------------- |
| `ariaHidden` | `bool`   | `true`  | no       | If true, icon is hidden from a11y API |
| `class`      | `string` | `null`  | no       | Custom CSS class                      |
| `isReusable` | `bool`   | `true`  | no       | Enables reusability of SVG icons      |
| `name`       | `string` | —       | yes      | Name of the icon, case sensitive      |
| `size`       | `number` | `24`    | no       | Size of the icon                      |
| `title`      | `string` | `null`  | no       | Optional title to display on hover    |

Get the list of `name` options in the [Icon package] or your source of icons.

[inlinesvg docs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/docs/inlineSVG.md
[icon package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
