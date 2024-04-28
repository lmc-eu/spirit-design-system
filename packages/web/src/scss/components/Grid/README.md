# Grid

Single column on all breakpoints:

```html
<div class="Grid Grid--cols-1">
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  …
</div>
```

Multiple columns on all breakpoints:

```html
<div class="Grid Grid--cols-2">
  <span>col 1</span>
  …
</div>
<div class="Grid Grid--cols-3">
  <span>col 1</span>
  …
</div>
<div class="Grid Grid--cols-4">
  <span>col 1</span>
  …
</div>
<div class="Grid Grid--cols-5">
  <span>col 1</span>
  …
</div>
<div class="Grid Grid--cols-6">
  <span>col 1</span>
  …
</div>
<div class="Grid Grid--cols-12">
  <span>col 1</span>
  …
</div>
```

Responsive columns:

```html
<div class="Grid Grid--cols-2 Grid--tablet--cols-3 Grid--desktop--cols-4">
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</div>
```

👉 Please note the 5-column modifier is not aligned with the underlying
12-column guides. This behavior is intentional as the 5-column grid serves to
equally distribute 5 items in a row.

## Grid Item

Grid Item is a wrapper for Grid items. It allows you to configure your Grid structure
as you wish. Use CSS variables to set a column where the Grid Item should start or end.
If you want to set how to item should span, set the value as `span X` where X is the
number of columns the item should span, like this `--grid-item-column-start: span 2`.

These variables are available:

- `--grid-item-column-start`
- `--grid-item-column-end`

Add suffixes to these variables to set them for specific breakpoints:

- `--grid-item-column-start-tablet`
- `--grid-item-column-end-desktop`
- etc.

Mobile suffix is not needed as it is the default. If no breakpoint value is set for
current breakpoint, the previous breakpoint value will be used.

All nested Grid Items have their CSS variables firstly reset to the default values.
This allows you to nest Grids with Grid Items and set their column values independently.
Please note that every, even nested, Grid has 12 columns if not specified otherwise.

Basic Grid Item example:

```html
<div class="Grid">
  <div
    class="GridItem"
    style="
      --grid-item-column-start: 1;
      --grid-item-column-end: 10;
    "
  >
    <div class="docs-Box docs-Box--small">Content</div>
  </div>
  <div
    class="GridItem"
    style="
      --grid-item-column-start: 11;
      --grid-item-column-end: span 2;
    "
  >
    <div class="docs-Box docs-Box--small">Sidebar</div>
  </div>
</div>
```

Example with responsive columns:

```html
<div class="Grid">
  <div
    class="GridItem"
    style="
      --grid-item-column-start: 1;
      --grid-item-column-end: 5;
      --grid-item-column-end-tablet: 9;
    "
  >
    <div class="docs-Box docs-Box--small">Content</div>
  </div>
  <div
    class="GridItem"
    style="
      --grid-item-column-start: 10;
      --grid-item-column-end: span 3;
      --grid-item-column-start-tablet: 11;
      --grid-item-column-end-tablet: span 2;
    "
  >
    <div class="docs-Box docs-Box--small">Sidebar</div>
  </div>
</div>
```

Nested Grids with Grid Items:

```html
<div class="Grid">
  <div
    class="GridItem"
    style="
      --grid-item-column-start: 1;
      --grid-item-column-end: 10;
    "
  >
    <div class="Grid">
      <div
        class="GridItem"
        style="
          --grid-item-column-start: 1;
          --grid-item-column-end: span 4;
        "
      >
        <div class="docs-Box docs-Box--small">First Nested Content</div>
      </div>
      <div
        class="GridItem"
        style="
          --grid-item-column-start: 5;
          --grid-item-column-end: span 4;
        "
      >
        <div class="docs-Box docs-Box--small">Second Nested Content</div>
      </div>
    </div>
  </div>
  <div
    class="GridItem"
    style="
      --grid-item-column-start: 11;
      --grid-item-column-end: span 2;
    "
  >
    <div class="docs-Box docs-Box--small">Sidebar</div>
  </div>
</div>
```

You can also set rows of the Grid Item. Use `--grid-item-row-start` and
`--grid-item-row-end` variables. These variables work the same as the column and breakpoint
variables.

```html
<div class="Grid">
  <div
    class="GridItem"
    style="
      --grid-item-column-start: 1;
      --grid-item-column-end: 8;
    "
  >
    <div class="docs-Box docs-Box--small">Content</div>
  </div>
  <div
    class="GridItem"
    style="
      --grid-item-column-start: 9;
      --grid-item-column-end: span 4;
      --grid-item-row-start-desktop: 2;
    "
  >
    <div class="docs-Box docs-Box--small">Sidebar</div>
  </div>
</div>
```
