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

## Grid Span

Grid Span allows to center content over multiple grid columns.

```html
<div class="Grid">
  <div class="Grid__span Grid__span--over-2">2</div>
  <div class="Grid__span Grid__span--over-4">4</div>
  <div class="Grid__span Grid__span--over-6">6</div>
  <div class="Grid__span Grid__span--over-8">8</div>
  <div class="Grid__span Grid__span--over-10">10</div>
</div>
```

You may notice `Grid__span` itself does not provide any styling unless you add a
modifier (`Grid__span--*`). You can leave `Grid__span` out or keep it in your
markup to make it more complete and comprehensible.

Responsive Grid Span:

```html
<div class="Grid">
  <div
    class="
      Grid__span
      Grid__span--over-10
      Grid__span--tablet--over-8
      Grid__span--desktop--over-6
    "
  >
    10 on mobile, 8 on tablet, 6 on desktop
  </div>
</div>
```

Span over all columns with Grid Span:

```html
<div class="Grid">
  <div class="Grid__span Grid__span--over-12">12 on all breakpoints</div>
</div>
```

Or without:

```html
<div class="Grid Grid--cols-1">
  <div>Grid Span not needed! 🎉</div>
</div>
```

Why the two approaches then? Great question! The 12-column modifier is here to
allow responsive spans over all 12 columns. For example, to span over all
columns on tablet only, you would do:

```html
<div class="Grid">
  <div
    class="
      Grid__span
      Grid__span--over-8
      Grid__span--tablet--over-12
      Grid__span--desktop--over-6
    "
  >
    8 on mobile, 12 on tablet, 6 on desktop
  </div>
</div>
```

Alternatively, if you start with full-width content on mobile and narrow it down
on larger breakpoints, you can combine Grid Span with responsive Grid columns:

```html
<div class="Grid Grid--cols-1 Grid--tablet--cols-12">
  <div
    class="
      Grid__span
      Grid__span--tablet--over-10
      Grid__span--desktop--over-8
    "
  >
    12 on mobile, 10 on tablet, 8 on desktop
  </div>
</div>
```

👉 Keep in mind Grid Span modifiers are designed to work only with a 12-column
Grid (`.Grid[--cols-12]`, `.Grid--tablet--cols-12`, `.Grid--desktop--cols-12`).
