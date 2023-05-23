# ScrollView

This is the Twig implementation of the [ScrollView] component.

Basic example usage:

```html
<ScrollView data-toggle="scrollView">ScrollView</ScrollView>
```

Advanced example usage:

```html
<ScrollView direction="horizontal" indicators="both" data-toggle="scrollView">ScrollView content</ScrollView>
```

Without lexer:

```twig
{% embed "@spirit/scrollView.twig" with { props: {
    direction: 'horizontal',
    indicators: 'both',
    data-toggle: 'scrollView'
}} %}
    {% block content %}
        ScrollView content
    {% endblock %}
{% endembed %}
```

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Check the [component's docs in the web package][web-js-api] to see the full documentation of the plugin.

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

## API

| Prop name             | Type                         | Default    | Required | Description                        |
| --------------------- | ---------------------------- | ---------- | -------- | ---------------------------------- |
| `direction`           | `horizontal`, `vertical`     | `vertical` | no       | Direction of the scroll            |
| `indicators`          | `borders`, `shadows`, `both` | `shadows`  | no       | Type of indicators                 |
| `isScrollbarDisabled` | `bool`                       | `false`    | no       | If true, the Scrollbar is disabled |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[ScrollView]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/ScrollView
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/ScrollView/README.md#javascript-plugin-api
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
