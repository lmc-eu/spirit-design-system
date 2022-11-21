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
| `data-timing`   | `number`  | 250        | no       | Transition timing (ms)              |
| `aria-expanded` | `string`  | -          | no       | Aria expanded state (auto)          |
| `aria-controls` | `string`  | -          | no       | Aria controls state (auto)          |

## Wrapper attributes

| Prop name         | Type                   | Default | Required | Description                                                      |
| ----------------- | ---------------------- | ------- | -------- | ---------------------------------------------------------------- |
| `data-breakpoint` | `'tablet'`,`'desktop'` | -       | no       | Breakpoint on which the collapsed content is forced to reveal \* |

There can be several triggers, the same rules apply to each.

(\*) The mobile breakpoint rule doesn't exist because it doesn't make sense given the implementation because it always stays hidden.

## State classes

The component provides auto toggle class, like `.is-open` when triggered or initiated and also `aria-expanded` attribute.

Classname `.is-transition` is used for transitions, when collapsing or expanding. So `.Collapse.is-transition` for **opening**
and `.Collapse.is-open.is-transition` for **closing** state. The time for which the class is displayed is based on the
animation and the same value is set for both CSS and JS. If the duration of the animation will change, it is necessary
to adjust this value as well by adding the `data-timing` attribute.

## JavaScript Plugin

For full functionality, you need to provide JavaScript which will handle toggling of the Collapse component.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

## JavaScript API

### Methods

| Method                | Description                                                                                                                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getInstance`         | _Static_ method which allows you to get the collapse instance associated with a DOM element                                                                                                                                                              |
| `getOrCreateInstance` | _Static_ method which allows you to get the collapse instance associated with a DOM element, or create a new one in case it wasn’t initialized.                                                                                                          |
| `hide`                | Hides collapse. Returns to the caller before the collapse has actually been hidden (i.e. before the `hidden.collapse` event occurs). This is considered a “manual” triggering of the collapse.                                                           |
| `show`                | Reveals collapse. **Returns to the caller before the collapse has actually been shown** (i.e. before the `shown.collapse` event occurs). This is considered a “manual” triggering of the collapse. Tooltips with zero-length titles are never displayed. |
| `toggle`              | Toggles collapse. **Returns to the caller before the collapse has actually been shown or hidden** (i.e. before the `shown.collapse` or `hidden.collapse` event occurs). This is considered a “manual” triggering of the collapse.                        |

```js
const collapse = Collapse.getInstance('#example'); // Returns a collapse instance

collapse.show();
```

### Events

| Method            | Description                                                                           |
| ----------------- | ------------------------------------------------------------------------------------- |
| `hide.collapse`   | This event is fired immediately when the `hide` instance method has been called.      |
| `hidden.collapse` | This event is fired when the `hide` instance has finished being hidden from the user. |
| `show.collapse`   | This event fires immediately when the `show` instance method is called.               |
| `shown.collapse`  | This event is fired when the `show` instance has finished being shown to the user.    |

```js
const myCollapseEl = document.getElementById('myCollapse');
const collapse = Collapse.getOrCreateInstance(myCollapseEl);

myCollapseEl.addEventListener('hidden.collapse', () => {
  // do something...
});

collapse.hide();
```

Please consult [main package README][web-readme] for how to include JavaScript plugins.

Or feel free to write controlling scripts yourself.

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
