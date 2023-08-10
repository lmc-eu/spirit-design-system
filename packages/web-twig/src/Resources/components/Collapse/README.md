# Collapse

This is Twig implementation of the [Collapse] component.

Basic example usage:

```twig
<Button data-spirit-toggle="collapse" data-spirit-target="CollapseExample">Collapse trigger</Button>
<Collapse id="CollapseExample">Collapse content</Collapse>
```

Usage with link:

```twig
<ButtonLink href="javascript:void(0)" data-spirit-toggle="collapse" data-spirit-target="CollapseExample">Collapse trigger</ButtonLink>
```

Open on page load:

```twig
<Button data-spirit-toggle="collapse" data-spirit-target="CollapseExample" aria-expanded="true">Collapse trigger</Button>
<Collapse id="CollapseExample" isOpen>Collapse content</Collapse>
```

Activate Collapse only on mobile screens:

```twig
<Button {# … #} UNSAFE_className="d-tablet-none">Collapse trigger</Button>
<Collapse breakpoint="tablet">Collapse content</Collapse>
```

Hide Collapse trigger on collapse:

```twig
<Button {# … #} data-spirit-more>Collapse trigger</Button> {# … #}
```

Without lexer:

```twig
{% embed "@spirit/collapse.twig" with { props: {
    breakpoint: 'tablet',
    id: 'collapse-example',
}} %}
    {% block content %}
        Collapse content
    {% endblock %}
{% endembed %}
```

You can add any custom trigger like `<button>` or `<a>` but it is necessary to add `data-spirit-toggle="collapse"`, `data-spirit-target="<id>"`
attributes to register trigger events.

## API

| Prop name     | Type      | Default | Required | Description                                                            |
| ------------- | --------- | ------- | -------- | ---------------------------------------------------------------------- |
| `breakpoint`  | `string`  | `null`  | no       | Breakpoint level [mobile,tablet,desktop]                               |
| `elementType` | `string`  | `'div'` | no       | Custom element type for wrapper and content                            |
| `id`          | `string`  | -       | yes      | Collapse ID                                                            |
| `isOpen`      | `boolean` | `false` | no       | If true, make the item open on page load                               |
| `parent`      | `string`  | `null`  | no       | A parent element selector that ensures that only one item is opened \* |

(\*) Attribute for Accordion implementation

You can add `data-*` or `aria-*` attributes to further extend the component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

## Trigger attributes

| Prop name            | Type      | Default    | Required | Description                         |
| -------------------- | --------- | ---------- | -------- | ----------------------------------- |
| `aria-controls`      | `string`  | -          | no       | Aria controls state (auto)          |
| `aria-expanded`      | `string`  | -          | no       | Aria expanded state (auto)          |
| `data-spirit-more`   | `boolean` | -          | no       | For hide on collapse as more button |
| `data-spirit-target` | `string`  | -          | yes      | Target selector                     |
| `data-spirit-toggle` | `string`  | `collapse` | yes      | Iterable selector                   |

Other necessary attributes are toggled automatically, like `aria-controls` and `aria-expanded` when component is loaded
or width of window is changed. There can be several triggers, the same rules apply to each.

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Collapse/README.md#javascript-plugin
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[collapse]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Collapse
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
