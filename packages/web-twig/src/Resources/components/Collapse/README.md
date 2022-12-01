# Collapse

This is Twig implementation of the [Collapse] component.

Basic example usage:

```twig
<Button data-toggle="collapse" data-target="CollapseExample">Collapse trigger</Button>
<Collapse id="CollapseExample">Collapse content</Collapse>
```

Usage with link:

```twig
<ButtonLink href="javascript:void(0)" data-toggle="collapse" data-target="CollapseExample">Collapse trigger</ButtonLink> {# … #}
```

Open on load example (by aria-expanded):

```twig
<Button {# … #} aria-expanded="true">Collapse trigger</Button> {# … #}
```

Responsive usage for tablet

```twig
<Button {# … #} class="d-tablet-none">Collapse trigger</Button>
<Collapse breakpoint="tablet">Collapse content</Collapse>
```

Hide button when collapse

```twig
<Button {# … #} data-more>Collapse trigger</Button> {# … #}
```

Without lexer:

```twig
{% embed "@spirit/collapse.twig" with { props: {
    id: 'collapse-example',
    breakpoint: 'tablet',
    class: 'collapse-custom-class',
}} %}
    {% block content %}
        Collapse content
    {% endblock %}
{% endembed %}
```

You can add any custom trigger like `<button>` or `<a>` but it is necessary to add `data-toggle="collapse"`, `data-target="<id>"`
attributes to register trigger events.

## API

| Prop name     | Type     | Default | Required | Description                                                            |
| ------------- | -------- | ------- | -------- | ---------------------------------------------------------------------- |
| `id`          | `string` | -       | yes      | Collapse ID                                                            |
| `breakpoint`  | `string` | -       | no       | Breakpoint level [mobile,tablet,desktop]                               |
| `parent`      | `string` | -       | no       | A parent element selector that ensures that only one item is opened \* |
| `class`       | `string` | `null`  | no       | Custom CSS class                                                       |
| `elementType` | `string` | `'div'` | no       | Custom element type                                                    |

(\*) Attribute for Accordion implementation

## Trigger attributes

| Prop name       | Type      | Default    | Required | Description                         |
| --------------- | --------- | ---------- | -------- | ----------------------------------- |
| `data-toggle`   | `string`  | `collapse` | yes      | Iterable selector                   |
| `data-target`   | `string`  | -          | yes      | Target selector                     |
| `data-more`     | `boolean` | -          | no       | For hide on collapse as more button |
| `aria-expanded` | `string`  | -          | no       | Aria expanded state (auto)          |
| `aria-controls` | `string`  | -          | no       | Aria controls state (auto)          |

Other necessary attributes are toggled automatically, like `aria-controls` and `aria-expanded` when component is loaded
or width of window is changed. There can be several triggers, the same rules apply to each.

[collapse]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Modal
