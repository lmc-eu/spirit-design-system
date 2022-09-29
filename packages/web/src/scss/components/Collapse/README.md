# Collapse

Example usage with button:

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
<button ... class="d-tablet-none">trigger</button>
<div id="CollapseExample" class="Collapse" data-breakpoint="tablet">
  <div class="Collapse__content">...</div>
</div>
```

Hide button when collapse

```html
<button ... data-more>trigger</button> ...
```

## Trigger attributes

| Prop name       | Type      | Default    | Required | Description                         |
| --------------- | --------- | ---------- | -------- | ----------------------------------- |
| `data-toggle`   | `string`  | `collapse` | yes      | Iterable selector                   |
| `data-target`   | `string`  | -          | yes      | Target selector                     |
| `data-more`     | `boolean` | -          | no       | For hide on collapse as more button |
| `aria-expanded` | `string`  | -          | no       | Aria expanded state (auto)          |
| `aria-controls` | `string`  | -          | no       | Aria controls state (auto)          |

## Wrapper attributes

| Prop name         | Type                          | Default | Required | Description        |
| ----------------- | ----------------------------- | ------- | -------- | ------------------ |
| `data-breakpoint` | `'mobile','tablet','desktop'` | -       | no       | Breakpoint feature |

There can be several triggers, the same rules apply to each.

## State classes

The component provides auto toggle classes, like `.is-expanded` and `.is-collapsed` when triggered or initiated

## JavaScript Plugin

For full functionality you need to provide JavaScript which will handle toggling of the Collapse component.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult [main package README][web-readme] for how to include JavaScript plugins.

Or feel free to write controlling scripts yourself.

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
