# ScrollView

This is the Twig implementation of the [ScrollView][scrollview] component.

Basic example usage:

```twig
<ScrollView data-spirit-toggle="scrollView">ScrollView</ScrollView>
```

Advanced example usage:

```twig
<ScrollView direction="horizontal" overflowDecorators="both" data-spirit-toggle="scrollView"
  >ScrollView content</ScrollView
>
```

Without lexer:

```twig
{% embed "@spirit/scrollView.twig" with { props: {
    direction: 'horizontal',
    overflowDecorators: 'both',
    data-spirit-toggle: 'scrollView'
}} %}
    {% block content %}
        ScrollView content
    {% endblock %}
{% endembed %}
```

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```twig
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

## API

| Name                  | Type                               | Default    | Required | Description                        |
| --------------------- | ---------------------------------- | ---------- | -------- | ---------------------------------- |
| `direction`           | [`horizontal` \| `vertical`]       | `vertical` | ✕        | Direction of the scroll            |
| `isScrollbarDisabled` | `bool`                             | `false`    | ✕        | If true, the Scrollbar is disabled |
| `overflowDecorators`  | [`borders` \| `shadows` \| `both`] | `shadows`  | ✕        | Type of overflow decorators        |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[scrollview]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/ScrollView
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/ScrollView/README.md#javascript-plugin-api
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
