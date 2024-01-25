# Icon

Icon component uses inlineSVG extension, so don't forget to add icons path in the configuration
as seen in [inlineSVG docs][inlinesvg-docs].

Basic example usage:

```html
<Icon name="warning" />
```

Advanced example usage:

```html
<Icon name="warning" title="This is warning!" boxSize="32" ariaHidden="false" />
```

Without lexer:

```twig
{% embed "@spirit/icon.twig" with { props: {
    name: 'warning'
}} %}{% endembed %}
```

## API

| Name         | Type     | Default | Required | Description                           |
| ------------ | -------- | ------- | -------- | ------------------------------------- |
| `ariaHidden` | `bool`   | `true`  | ✕        | If true, icon is hidden from a11y API |
| `boxSize`    | `number` | `24`    | ✕        | Size of the icon                      |
| `isReusable` | `bool`   | `true`  | ✕        | Enables reusability of SVG icons      |
| `name`       | `string` | —       | ✔        | Name of the icon, case sensitive      |
| `title`      | `string` | `null`  | ✕        | Optional title to display on hover    |

Get the list of `name` options in the [Icon package][icon-package] or your source of icons.

Also, UNSAFE styling props are available, see the [Escape hatches][escape-hatches]
section in README to learn how and when to use them.

[inlinesvg-docs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/docs/inlineSVG.md
[icon-package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
