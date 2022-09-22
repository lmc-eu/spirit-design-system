# Collapse

This is Twig implementation of the [Collapse] component.

Basic example usage:

```html
<button type="button" role="button" data-toggle="collapse" data-target="CollapseExample">trigger</button>
<div id="CollapseExample" class="Collapse">
  <div class="Collapse__content">content</div>
</div>
```

Usage with link:

```html
<a role="button" href="javascript:void(0)" data-toggle="collapse" data-target="CollapseExample"> trigger </a> ...
```

Open on load example (by aria-expanded):

```html
<button ... aria-expanded="true">trigger</button> ...
```

Open on load example (by class):

```html
<button ... class="is-expanded">trigger</button> ...
```

Responsive usage for tablet

```html
...
<div id="CollapseExample" class="Collapse" data-breakpoint="tablet">
  <div class="Collapse__content">...</div>
</div>
```

Hide button when collapse

```html
<button ... data-more>trigger</button> ...
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

| Prop name     | Type     | Default | Required | Description                              |
| ------------- | -------- | ------- | -------- | ---------------------------------------- |
| `id`          | `string` | -       | yes      | Collapse ID                              |
| `breakpoint`  | `string` | -       | no       | Breakpoint level [mobile,tablet,desktop] |
| `class`       | `string` | `null`  | no       | Custom CSS class                         |
| `elementType` | `string` | `'div'` | no       | Custom element type                      |

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
