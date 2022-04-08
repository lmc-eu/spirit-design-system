# Grid

Use Grid to build multiple column layouts. This Grid works on twelve column
system, and it contains variants of 12, 6, 4, 3, 2, and 1 column for each breakpoint.
And additionally one centered narrow column.

```html
<div class="Grid Grid--cols-1">
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  ...
</div>
<div class="Grid Grid--cols-2">
  <span>col 1</span>
  ...
</div>
<div class="Grid Grid--cols-3">
  <span>col 1</span>
  ...
</div>
<div class="Grid Grid--cols-4">
  <span>col 1</span>
  ...
</div>
<div class="Grid Grid--cols-6">
  <span>col 1</span>
  ...
</div>
<div class="Grid Grid--cols-12">
  <span>col 1</span>
  ...
</div>
<div class="Grid Grid--cols-2 Grid--tablet--cols-3 Grid--desktop--cols-4">
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</div>
<div class="Grid Grid--narrow">
  <span>Narrow col</span>
</div>
```
