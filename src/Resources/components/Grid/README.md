# Grid

This is Twig implementation of the [Grid][grid] component.

## Grid

Basic example usage:

```html
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

```html
<Grid cols="{{ { mobile: 2, tablet: 3, desktop: 4 } }}" elementType="section">
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

### API

| Name          | Type                                                         | Default | Required | Description                                                                                                |
| ------------- | ------------------------------------------------------------ | ------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| `cols`        | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12` \| `object`] | `null`  | ✕        | Number of columns to use, use object to set responsive values, e.g. `{ mobile: 1, tablet: 2, desktop: 3 }` |
| `desktop`     | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12`]             | `null`  | ✕        | [**DEPRECATED**][readme-deprecations] in favor of `cols`; Number of columns to use on desktop              |
| `elementType` | `string`                                                     | `div`   | ✕        | HTML tag to render                                                                                         |
| `tablet`      | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12`]             | `null`  | ✕        | [**DEPRECATED**][readme-deprecations] in favor of `cols`; Number of columns to use on tablet               |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## GridSpan

Grid Span allows to center content over multiple grid columns.

For more info when and why to use it, see [Grid][grid] component.

Basic example usage:

```html
<Grid>
  <GridSpan over="2">2</GridSpan>
  <GridSpan over="4">4</GridSpan>
  <GridSpan over="6">6</GridSpan>
  <GridSpan over="8">8</GridSpan>
  <GridSpan over="10">10</GridSpan>
</Grid>
```

Advanced example usage:

```html
<Grid elementType="ul">
  <GridSpan elementType="li" over="10" tablet="8" desktop="6"> 10 on mobile, 8 on tablet, 6 on desktop </GridSpan>
</Grid>
```

Without lexer:

```twig
{% embed "@spirit/gridSpan.twig" with { props: {
    over: 2,
}} %}
    {% block content %}
        <span>over 2</span>
    {% endblock %}
{% endembed %}
```

### ⚠️ DEPRECATION NOTICE

GridSpan component is deprecated and will be removed in the next major version. Use `GridItem` instead.

[What are deprecations?][readme-deprecations]

### API

| Name          | Type                                       | Default | Required | Description                               |
| ------------- | ------------------------------------------ | ------- | -------- | ----------------------------------------- |
| `desktop`     | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over on desktop |
| `elementType` | `string`                                   | `div`   | ✕        | HTML tag to render                        |
| `over`        | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over            |
| `tablet`      | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over on tablet  |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

### Responsive example usage:

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

| Name          | Type                               | Default | Required | Description                        |
| ------------- | ---------------------------------- | ------- | -------- | ---------------------------------- |
| `elementType` | `string`                           | `div`   | ✕        | HTML tag to render                 |
| `columnEnd`   | [`number` \| `string` \| `object`] | `null`  | ✕        | Column where the item should end   |
| `columnStart` | [`number` \| `string` \| `object`] | `null`  | ✕        | Column where the item should start |
| `rowEnd`      | [`number` \| `string` \| `object`] | `null`  | ✕        | Row where the item should end      |
| `rowStart`    | [`number` \| `string` \| `object`] | `null`  | ✕        | Row where the item should start    |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[digitalocean-span]: https://www.digitalocean.com/community/tutorials/css-css-grid-layout-span-keyword
[grid]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Grid
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
