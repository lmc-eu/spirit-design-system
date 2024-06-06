# Tabs

Example usage:

```html
<ul class="Tabs" role="tablist">
  <li class="Tabs__item">
    <button
      class="Tabs__link is-selected"
      role="tab"
      aria-selected="true"
      id="pane-1-tab"
      data-spirit-toggle="tab"
      data-spirit-target="#pane-1"
      aria-controls="pane-1"
    >
      Item 1
    </button>
  </li>
  <li class="Tabs__item">
    <button
      class="Tabs__link"
      role="tab"
      aria-selected="false"
      id="pane-2-tab"
      data-spirit-toggle="tab"
      data-spirit-target="#pane-2"
      aria-controls="pane-2"
    >
      Item 2
    </button>
  </li>
  <li class="Tabs__item">
    <a href="https://www.example.com" class="Tabs__link">Item Link</a>
  </li>
  <li class="Tabs__item d-none d-desktop-block">
    <a href="https://www.example.com" class="Tabs__link">Item Link Only Desktop</a>
  </li>
</ul>

<div id="pane-1" class="TabsPane is-selected" role="tabpanel" aria-labelledby="pane-1-tab">Pane 1 content</div>
<div id="pane-2" class="TabsPane" role="tabpanel" aria-labelledby="pane-2-tab">Pane 2 content</div>
```

## Link Items

A tab item can be a link that follows a URL:

```html
<li class="Tabs__item">
  <a href="https://www.example.com" class="Tabs__link"> Link item </a>
</li>
```

## Responsive Visibility

Individual tab items can take on properties that ensure their visibility from a
certain breakpoint up, preferably using Spirit utility classes.

```html
<li class="Tabs__item d-none d-desktop-block">
  <button
    class="Tabs__link is-selected"
    role="tab"
    aria-selected="true"
    id="pane-1-tab"
    data-spirit-toggle="tab"
    data-spirit-target="#pane-1"
    aria-controls="pane-1"
  >
    Item
  </button>
</li>
```

## JavaScript Plugin

For full functionality you need to provide Spirit JavaScript which will handle
Tabs changes:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript
plugins.

Or feel free to write the controlling script yourself.

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
