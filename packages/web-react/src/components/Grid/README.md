# Grid

Use Grid to build multiple column layouts. This Grid works on twelve column system, and it contains variants of 12, 6, 4, 3, 2, and 1 column for each breakpoint.

**Custom layout**

```jsx
<Grid cols={{ mobile: 2, tablet: 3, desktop: 4 }}>
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</Grid>
```

## API

| Name          | Type                                                         | Default | Required | Description                                                                                                |
| ------------- | ------------------------------------------------------------ | ------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| `cols`        | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12` \| `object`] | —       | ✕        | Number of columns to use, use object to set responsive values, e.g. `{ mobile: 1, tablet: 2, desktop: 3 }` |
| `desktop`     | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12`]             | —       | ✕        | [**DEPRECATED**][readme-deprecations] in favor of `cols`; Number of columns to use on desktop              |
| `elementType` | HTML element                                                 | `div`   | ✕        | Element type to use for the Grid                                                                           |
| `tablet`      | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12`]             | —       | ✕        | [**DEPRECATED**][readme-deprecations] in favor of `cols`; Number of columns to use on tablet               |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

For detailed information see [Grid][grid] component.

## GridItem

Grid Item is a wrapper for Grid items. It allows you to configure your Grid structure
as you wish. Use props to set a column and rows where the Grid Item should start or end.
Numeric values are used as a coordinates in the grid.

If you want to set how to item should span over columns or rows, set the value as `span X`
where X is the number of columns or rows the item should span, like this `columnStart="span 2"`
or `rowEnd="span 3"`. Span could be used with responsive props as well and for both start and end.
To understand how to use `span` read one of many articles about CSS Grid,
eg. [CSS Grid Layout: The Span Keyword][digitalocean-span].

If you need to set a layout with repetitive columns, you can set this on the `Grid`
component itself using the [`cols` prop](#api) and might not need to set columns on the items. Eg. article
listing with 3 columns is easier to set using `cols="3"` on the `Grid` component than setting
`columnStart` and `columnEnd` on each `GridItem`.

Basic example usage:

```jsx
<Grid>
  <GridItem columnStart={1} columnEnd={4}>
    1–4
  </GridItem>
  <GridItem columnStart={5} columnEnd={9}>
    5–9
  </GridItem>
  <GridItem columnStart={10} columnEnd="span 2" rowStart={2}>
    10–12
  </GridItem>
</Grid>
```

### Responsive example usage:

Pass an object to props to set different values for different breakpoints. The values will
be applied from mobile to desktop and if not set for a breakpoint, the value from the
previous breakpoint will be used.

```jsx
<Grid elementType="ul">
  <GridItem elementType="li" columnStart={1} columnEnd={4}>
    1–4
  </GridItem>
  <GridItem elementType="li" columnStart={5} columnEnd={{ mobile: 8, tablet: 9 }}>
    5–9 (5–8 on mobile)
  </GridItem>
  <GridItem elementType="li" columnStart={{ mobile: 9, tablet: 10 }} columnEnd={{ mobile: 'span 3', tablet: 'span 2' }}>
    10–12 (9–12 on mobile)
  </GridItem>
</Grid>
```

### API

| Name          | Type                                 | Default | Required | Description                        |
| ------------- | ------------------------------------ | ------- | -------- | ---------------------------------- |
| `elementType` | `string`                             | `div`   | ✕        | HTML tag to render                 |
| `columnEnd`   | [`number` \| `span \d+` \| `object`] | `null`  | ✕        | Column where the item should end   |
| `columnStart` | [`number` \| `span \d+` \| `object`] | `null`  | ✕        | Column where the item should start |
| `rowEnd`      | [`number` \| `span \d+` \| `object`] | `null`  | ✕        | Row where the item should end      |
| `rowStart`    | [`number` \| `span \d+` \| `object`] | `null`  | ✕        | Row where the item should start    |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[grid]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Grid/README.md
[digitalocean-span]: https://www.digitalocean.com/community/tutorials/css-css-grid-layout-span-keyword
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/README.md#deprecations
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
