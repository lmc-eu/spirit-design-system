# Grid

This is Twig implementation of the [Grid][grid] component.

## Grid

Basic example usage:

```twig
<Grid>
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</Grid>
```

Advanced example usage:

```twig
<Grid
  cols="{{ { mobile: 2, tablet: 3, desktop: 4 } }}"
  elementType="section"
  spacing="{{ { mobile: 'space-400', tablet: 'space-800' } }}"
>
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</Grid>
```

Without lexer:

```twig
{% embed "@spirit/grid.twig" with { props: {
    cols: {
        mobile: 2,
        tablet: 3,
        desktop: 4,
    },
    elementType: 'section',
    spacing: 'space-900',
}} %}
    {% block content %}
        <span>col 1</span>
        <span>col 2</span>
        <span>col 3</span>
        <span>col 4</span>
        <span>col 5</span>
        <span>col 6</span>
    {% endblock %}
{% endembed %}
```

## Custom Spacing

You can use the `spacing` prop to apply custom spacing between items in both horizontal and vertical directions. The prop
accepts either a spacing token (for example `space-100`) or an object with breakpoint keys and spacing token values.

You can set custom spacing in the horizontal (x-axis) and vertical (y-axis) direction separately using the `spacingX` and `spacingY` props.

Custom spacing:

```twig
<Grid spacing="space-1200">
  <!-- Grid content -->
</Grid>
```

Custom responsive spacing:

```twig
<Grid spacing="{{ { mobile: 'space-400', tablet: 'space-800' } }}">
  <!-- Grid content -->
</Grid>
```

Custom horizontal (x-axis) spacing:

```twig
<Grid spacingX="{{ { mobile: 'space-400', tablet: 'space-800' } }}">
  <!-- Grid content -->
</Grid>
```

Custom vertical (y-axis) spacing:

```twig
<Grid spacingY="{{ { mobile: 'space-400', tablet: 'space-800' } }}">
  <!-- Grid content -->
</Grid>
```

## Item Alignment

The `alignmentX` and `alignmentY` props are used to control the alignment of items within the `Grid` container.
The available values for these properties can be found in our [alignment dictionary][dictionary-alignment].

`alignmentX`: Manages horizontal alignment, allowing you to position items to the left, center, or right of the container. It can also be configured with responsive values for different breakpoints.
`alignmentY`: Manages vertical alignment, enabling you to position items at the top, center, or bottom of the container. It supports responsive values for various breakpoints as well.

Both props can be set using either fixed values or objects with breakpoint-specific settings to ensure the alignment adapts across different screen sizes.

Horizontal alignment:

```twig
<Grid alignmentX="left">
  <!-- Grid content -->
</Grid>
```

Horizontal and vertical alignment:

```twig
<Grid alignmentX="left" alignmentY="top">
  <!-- Grid content -->
</Grid>
```

Responsive horizontal and vertical alignment:

```twig
<Grid
  alignmentX="{{ { mobile: 'left', tablet: 'center', desktop: 'right' } }}"
  alignmentY="{{ { mobile: 'top', tablet: 'center', desktop: 'bottom' } }}"
>
  <!-- Grid content -->
</Grid>
```

👉 Please note that the `stretch` option may have undesired impact on elements with a defined size or aspect ratio. The dimensions (or the ratio) will not be respected by `Grid` and the element will be stretched just like any other item.

### API

| Name          | Type                                                                  | Default   | Required | Description                                                                                                                             |
| ------------- | --------------------------------------------------------------------- | --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `alignmentX`  | \[ [AlignmentXExtended dictionary][dictionary-alignment] \| `object`] | `stretch` | ✕        | Apply vertical alignment of items, use object to set responsive values, e.g. `{ mobile: 'left', tablet: 'center', desktop: 'right' }`   |
| `alignmentY`  | \[ [AlignmentYExtended dictionary][dictionary-alignment] \| `object`] | `stretch` | ✕        | Apply horizontal alignment of items, use object to set responsive values, e.g. `{ mobile: 'top', tablet: 'center', desktop: 'bottom' }` |
| `cols`        | \[`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12` \| `object`]         | `null`    | ✕        | Number of columns to use, use object to set responsive values, e.g. `{ mobile: 1, tablet: 2, desktop: 3 }`                              |
| `elementType` | `string`                                                              | `div`     | ✕        | HTML tag to render                                                                                                                      |
| `spacing`     | \[`spacing token` \| `object`]                                        | `null`    | ✕        | Apply [custom spacing](#custom-spacing) in both horizontal and vertical directions between items                                        |
| `spacingX`    | \[`spacing token` \| `object`]                                        | `null`    | ✕        | Apply horizontal [custom spacing](#custom-spacing) between items                                                                        |
| `spacingY`    | \[`spacing token` \| `object`]                                        | `null`    | ✕        | Apply vertical [custom spacing](#custom-spacing) between items                                                                          |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## GridItem

Grid Item is a wrapper for Grid items. It allows you to configure your Grid structure
as you wish. Use props to set a column and rows where the Grid Item should start or end.
Numeric values are used as a coordinates in the grid.

To set how to item should span over columns or rows, set the value as `span X`
where X is the number of columns or rows the item should span, like this `columnStart="span 2"`
or `rowEnd="span 3"`. Span could be used with responsive props as well and for both start and end.
To understand how to use `span` read one of many articles about CSS Grid,
for example [CSS Grid Layout: The Span Keyword][digitalocean-span].

To set a layout with repetitive columns, you can set this on the `Grid`
component itself using the [`cols` prop](#api) and might not need to set columns on the items. For example article
listing with 3 columns is easier to set using `cols="3"` on the `Grid` component than setting
`columnStart` and `columnEnd` on each `GridItem`.

### Grid Placement Props: `columnStart`, `columnEnd`, `rowStart`, `rowEnd`

These props control the placement of grid items within a CSS Grid layout by specifying where the item starts and ends in rows and columns:

- `columnStart`: Specifies the vertical grid line where the item begins.
- `columnEnd`: Specifies the vertical grid line where the item ends. The item spans up to, but does not include, this grid line. For example, if columnEnd is "3", the item ends at the line before the third column.
- `rowStart`: Specifies the horizontal grid line where the item begins.
- `rowEnd`: Specifies the horizontal grid line where the item ends. The item spans up to, but does not include, this grid line. For example, if rowEnd is "4", the item ends at the line before the fourth row.

#### Grid Placement Example

```twig
<GridItem
  columnStart="2"
  columnEnd="5" <!-- or columnEnd="span 3" -->
  rowStart="1"
  rowEnd="3" <!-- or rowEnd="span 2" -->
>
  …
</GridItem>
```

<img src="https://raw.githubusercontent.com/lmc-eu/spirit-design-system/refs/heads/main/packages/web-react/src/components/Grid/static/GridExample.svg" alt="Grid example" width="400" />

<!--lint ignore no-emphasis-as-heading-->

_The image is taken from the [CSS Grid Layout Guide][css-tricks-grid]._

These props align with their respective CSS Grid properties, providing precise control over grid item placement. Learn more in the [MDN CSS Grid][grid-mdn] documentation.

Basic example usage:

```twig
<Grid>
  <GridItem columnStart="1" columnEnd="4">
    1–4
  </GridItem>
  <GridItem columnStart="5" columnEnd="9">
    5–9
  </GridItem>
  <GridItem columnStart="10" columnEnd="span 2" rowStart="2">
    10–12
  </GridItem>
</Grid>
```

### Responsive Example Usage

Pass an object to props to set different values for different breakpoints. The values will
be applied from mobile to desktop and if not set for a breakpoint, the value from the
previous breakpoint will be used.

```twig
<Grid elementType="ul">
  <GridItem elementType="li" columnStart="1" columnEnd="4">
    1–4
  </GridItem>
  <GridItem elementType="li" columnStart="5" columnEnd="{{ { mobile: 8, tablet: 9 } }}">
    5–9 (5–8 on mobile)
  </GridItem>
  <GridItem elementType="li" columnStart="{{ { mobile: 9, tablet: 10 } }}" columnEnd="{{ { mobile: 'span 3', tablet: 'span 2' } }}">
    10–12 (9–12 on mobile)
  </GridItem>
</Grid>
```

Without lexer:

```twig
{% embed "@spirit/gridItem.twig" with { props: {
    columnStart: 1,
    columnEnd: 4,
}} %}
    {% block content %}
        1–4
    {% endblock %}
{% endembed %}
```

### API

| Name          | Type                                | Default | Required | Description                        |
| ------------- | ----------------------------------- | ------- | -------- | ---------------------------------- |
| `elementType` | `string`                            | `div`   | ✕        | HTML tag to render                 |
| `columnEnd`   | \[`number` \| `string` \| `object`] | `null`  | ✕        | Column where the item should end   |
| `columnStart` | \[`number` \| `string` \| `object`] | `null`  | ✕        | Column where the item should start |
| `rowEnd`      | \[`number` \| `string` \| `object`] | `null`  | ✕        | Row where the item should end      |
| `rowStart`    | \[`number` \| `string` \| `object`] | `null`  | ✕        | Row where the item should start    |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[css-tricks-grid]: https://css-tricks.com/snippets/css/complete-guide-grid/
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[digitalocean-span]: https://www.digitalocean.com/community/tutorials/css-css-grid-layout-span-keyword
[grid]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Grid
[grid-mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
