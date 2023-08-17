# Tooltip

This is Twig implementation of the [Tooltip] component.

Basic usage:

```html
<Tooltip>Hello there!</Tooltip>
```

Custom placement:

```html
<Tooltip placement="right">Hello there!</Tooltip>
```

Dismissible tooltip (requires `id` to be defined):

```html
<Tooltip id="my-tooltip" isDismissible>Hello there!</Tooltip>
```

Without lexer:

```twig
{% embed "@spirit/tooltip.twig" with { props: {
    id: 'my-tooltip',
    isDismissible: true,
    placement: 'right'
}} %}
    {% block content %}
        Hello there!
    {% endblock %}
{% endembed %}
```

## Linking with Content

Tooltip is positioned relative to the closest parent element with
`position: relative` or `position: absolute`. You may either provide the CSS
yourself or you can use the prepared TooltipWrapper component:

```html
<TooltipWrapper>
    <Link href="#" aria-describedby="my-tooltip">
        I have a tooltip
    </Link>
    <Tooltip id="my-tooltip">
        Hello there!
    </Tooltip>
</TooltipWrapper>
```

Please consult the [CSS implementation of Tooltip][tooltip] to help you pick the
best positioning approach for your use case.

## API

### Tooltip

| Prop name       | Type                                     | Default  | Required | Description              |
| --------------- | ---------------------------------------- | -------- | -------- | ------------------------ |
| `closeLabel`    | `string`                                 | `Close`  | no       | Close label              |
| `id`            | `string`                                 | `null`   | no       | Optional tooltip ID      |
| `isDismissible` | `bool`                                   | `false`  | no       | Make tooltip dismissible |
| `placement`     | [`top` \| `bottom` \| `left` \| `right`] | `bottom` | no       | Tooltip placement        |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

### TooltipWrapper

You can add `id`, `data-*` or `aria-*` attributes to further extend the component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Tooltip/README.md#javascript-api
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[tooltip]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tooltip
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
