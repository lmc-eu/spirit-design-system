# Icon

Icon component uses inlineSVG extension, so don't forget to add icons path in the configuration
as seen in [inlineSVG docs][inlinesvg-docs].

Basic example usage:

```twig
<Icon name="warning" />
```

Advanced example usage:

```twig
<Icon name="warning" title="This is warning!" boxSize="32" ariaHidden="false" />
```

Without lexer:

```twig
{% embed "@spirit/icon.twig" with { props: {
    name: 'warning'
}} %}{% endembed %}
```

## Render as Symbol

If you need to prerender the icon as a [symbol][mdn-symbol], you can use the `isSymbol` prop:

```twig
<Icon name="warning" isSymbol />
```

The ID of the symbol will be the same as the `name` prop and the whole SVG element will be hidden.

⚠️ Please note that SVG IDs are global and you might encounter ID conflicts if you use the same in
`name` prop as an existing element on your site.

👉 Even though the `svg` only includes the `symbol` element, the `svg` still takes some space in browser,
so you might want to hide it using either wrapping element with `hidden` attribute or use CSS.

```twig
<div hidden>
  <Icon name="warning" isSymbol />
</div>
```

## API

| Name         | Type     | Default | Required | Description                                                                                                             |
| ------------ | -------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `ariaHidden` | `bool`   | `true`  | ✕        | If true, icon is hidden from a11y API                                                                                   |
| `boxSize`    | `number` | `24`    | ✕        | Size of the icon                                                                                                        |
| `isReusable` | `bool`   | `true`  | ✕        | Enables reusability of SVG icons                                                                                        |
| `isSymbol`   | `bool`   | `false` | ✕        | If true, the element will be rendered as SVG symbol with the name assigned to the ID attribute, other props are skipped |
| `name`       | `string` | —       | ✓        | Name of the icon, case sensitive                                                                                        |
| `title`      | `string` | `null`  | ✕        | Optional title to display on hover                                                                                      |

Get the list of `name` options in the [Icon package][icon-package] or your source of icons.

Also, UNSAFE styling props are available, see the [Escape hatches][escape-hatches]
section in README to learn how and when to use them.

[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
[icon-package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
[inlinesvg-docs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/docs/inlineSVG.md
[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol
