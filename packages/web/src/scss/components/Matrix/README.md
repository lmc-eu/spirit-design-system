# Matrix

Matrix component distributes nested components in equal columns and allows their
content to be aligned. It's especially useful for multiple stacked layouts where
content needs to be organized in a uniform grid pattern.

## Basic Usage

By default, the Matrix component creates a [grid-based][mdn-grid] layout with
even columns:

```html
<div class="Matrix">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Aligning Nested Components

As you may have noticed in the example above, you can achieve the same result
for a single row with our [Grid][grid] component.

To really unlock the power of the Matrix layout, use it with **nested components
that use [CSS grid layout][mdn-grid]**. For example, you can use it to align
multiple [Stack][stack] layouts:

```html
<div class="Matrix">
  <div class="Stack Stack--hasSpacing">
    <div>Stack 1</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</div>
    <div>Lorem ipsum</div>
  </div>
  <div class="Stack Stack--hasSpacing">
    <div>Stack 2</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</div>
  </div>
  <div class="Stack Stack--hasSpacing">
    <div>Stack 3</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.</div>
  </div>
</div>
```

👉 Use Matrix with multiple [Pricing Plan][pricing-plan] components to create
aligned, easy-to-read pricing overviews.

## Matrix Vs. Grid

The key difference of [Grid][grid] and Matrix is that Matrix is capable of
**aligning the content of nested components**. For this to work, the nested
components must use [CSS grid layout][mdn-grid] at the root level.

## Implementation Notes

- Matrix uses CSS Grid and forces [`subgrid`][mdn-subgrid] for direct
  descendants.
- All direct descendants of Matrix span the Matrix layout vertically and
  inherit its grid rows.

## Accessibility

When using Matrix for content organization, ensure that the reading order makes
sense for screen reader users. This should be already guaranteed by the
implementation of the nested components.

## Customization

By default, Matrix creates a 3-column grid with 100 rows and a standard column
gap.

Matrix allows customization of columns, rows, and column gap through CSS
variables:

```css
.my-matrix {
  --spirit-matrix-columns: 4; /* Change number of columns */
  --spirit-matrix-rows: 50; /* Change maximum number of rows */
  --spirit-matrix-column-gap: var(--spirit-space-1000); /* Custom column gap */
}
```

### Custom Columns

Adjust the number of columns in your Matrix:

```html
<div class="Matrix" style="--spirit-matrix-columns: 4;">
  <!-- Content items -->
</div>
```

### Custom Column Gap

Customize the spacing between columns:

```html
<div class="Matrix" style="--spirit-matrix-column-gap: var(--spirit-space-1000);">
  <!-- Content items -->
</div>
```

## Matrix on Mobile

Matrix is optimized for desktop screens and does not adapt to smaller screens.
We recommend using Matrix along with a horizontal [Scroll View][scroll-view]
to create scrollable content on mobile.

## Known Limitations

As of now, only single-column components are supported in Matrix.

[grid]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Grid/README.md
[pricing-plan]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/PricingPlan/README.md
[scroll-view]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/ScrollView/README.md
[stack]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Stack/README.md
[mdn-grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
[mdn-subgrid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid
