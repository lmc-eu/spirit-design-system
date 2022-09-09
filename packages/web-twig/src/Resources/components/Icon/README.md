# Icon

This is Twig implementation of the [Icon] component.

Icon component uses inlineSVG extension, so don't forget to add icons path in the configuration
as seen in [inlineSVG docs].

## ⚠️ Setting up

In your `config.yml` of your Symfony application add path to `twig` property. The Icon component internally use `@icons-assests` namespace, so you must define path for this namespace.

```yml
twig:
  '%kernel.project_dir%/node_modules/@lmc-eu/spirit-icons/svg': icons-assets
```

## Usage

Basic example usage:

```html
<Icon name="warning" />
```

Advanced example usage:

```html
<Icon name="warning" title="This is warning!" size="32" />
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
| `size`    | `number` | `24`    | no       | Size of the icon                   |
| `title`   | `string` | `null`  | no       | Optional title to display on hover |

Get list of `name` options in the [Icon package] or your source of icons.

[icon]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Icon
[inlinesvg docs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/docs/inlineSVG.md
[icon package]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/icons
