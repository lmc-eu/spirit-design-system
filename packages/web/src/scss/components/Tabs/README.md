# Tabs

The Tabs component is used to organize related content. User can navigate between
groups of information in tabbable regions.

```html
<ul class="Tabs" role="tablist">
  <li class="Tabs__item">
    <button
      class="Tabs__link is-selected"
      role="tab"
      aria-selected="true"
      id="pane1-tab"
      data-toggle="tab"
      data-target="#pane1"
      aria-controls="pane1"
    >
      Item Selected
    </button>
  </li>
  <li class="Tabs__item">
    <button
      class="Tabs__link"
      role="tab"
      aria-selected="false"
      id="pane2-tab"
      data-toggle="tab"
      data-target="#pane2"
      aria-controls="pane2"
    >
      Item
    </button>
  </li>
  <li class="Tabs__item">
    <a href="https://www.example.com" class="Tabs__link">Item Link</a>
  </li>
  <li class="Tabs__item d-none d-desktop-block">
    <a href="https://www.example.com" class="Tabs__link">Item Link Only Desktop</a>
  </li>
</ul>
<div id="pane1" class="Tabs-pane is-selected" role="tabpanel" aria-labelledby="pane1-tab">Pane 1</div>
<div id="pane2" class="Tabs-pane" role="tabpanel" aria-labelledby="pane2-tab">Pane 2</div>
```

Tabs items are buttons or external links. They can take on properties that ensure their
visibility from a certain breakpoint using our `utilities`, for example
`d-none d-desktop-block` is hidden on mobile and visible on tablet and larger screens.

## JavaScript Plugin

For full functionality you need to provide JavaScript which will handle Tabs changes.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult [main package README][web-readme] for how to include JavaScript plugins.

Or feel free to write controlling scripts yourself.

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
