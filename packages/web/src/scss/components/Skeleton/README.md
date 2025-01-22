# Skeleton

On the parent element, you must use `aria-busy` and `aria-live` attributes to indicate that the content inside is loading.
The `aria-busy` is set to `true` when the content is loading, and `aria-live` is set to `polite` to announce the loading
state to screen readers.

## Text

The `Skeleton--text` class is used to create a text skeleton.

- Number of lines is defined by the number of `Skeleton__item` elements
- Minimum number of lines is 1

```html
<div class="Skeleton Skeleton--text Skeleton--small">
  <div class="Skeleton__item" aria-hidden="true"></div>
  <div class="Skeleton__item" aria-hidden="true"></div>
</div>
```

## Heading

The `Skeleton--heading` class is used to create a heading skeleton.

```html
<div class="Skeleton Skeleton--heading Skeleton--small">
  <div class="Skeleton__item" aria-hidden="true"></div>
  <div class="Skeleton__item" aria-hidden="true"></div>
</div>
```

### Text, Heading Sizes

The Skeleton component supports the following sizes for text and heading skeletons:

- `Skeleton--xsmall`
- `Skeleton--small`
- `Skeleton--medium` (default)
- `Skeleton--large`
- `Skeleton--xlarge`

```html
<div class="Skeleton Skeleton--heading Skeleton--medium"></div>
```

## Shapes

Use CSS custom properties to define the width, height, and radius of the shape.

- The default radius is `--spirit-radius-300`

- `--spirit-skeleton-shape-width: number{px};`
- `--spirit-skeleton-shape-height: number{px};`
- `--spirit-skeleton-shape-radius: var(--spirit-radius-200);`
- `--spirit-skeleton-shape-radius-tablet: var(--spirit-radius-300);`
- `--spirit-skeleton-shape-radius-desktop: var(--spirit-radius-400);`

```html
<div
  class="Skeleton Skeleton--shape"
  style="--spirit-skeleton-shape-width: 100px; --spirit-skeleton-shape-height: 100px; --spirit-skeleton-shape-radius: var(--spirit-radius-400)"
></div>
```

```html
<div
  class="Skeleton Skeleton--shape"
  style="--spirit-skeleton-shape-width: 100px; --spirit-skeleton-shape-height: 100px"
></div>
```
