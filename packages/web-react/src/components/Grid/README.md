# Grid

Use Grid to build multiple column layouts. This Grid works on twelve column system, and it contains variants of 12, 6, 4, 3, 2, and 1 column for each breakpoint.

**Custom layout**

```jsx
<Grid cols={2} tablet={3} desktop={4}>
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</Grid>
```

## API

| Name               | Type                                      | Default | Required | Description                         |
| ------------------ | ----------------------------------------- | ------- | -------- | ----------------------------------- |
| `cols`             | [`1` \| `2` \| `3` \| `4` \| `6` \| `12`] | —       | ✕        | Number of columns to use            |
| `desktop`          | [`1` \| `2` \| `3` \| `4` \| `6` \| `12`] | —       | ✕        | Number of columns to use on desktop |
| `elementType`      | HTML element                              | `div`   | ✕        | Element type to use for the Grid    |
| `tablet`           | [`1` \| `2` \| `3` \| `4` \| `6` \| `12`] | —       | ✕        | Number of columns to use on tablet  |
| `UNSAFE_className` | `string`                                  | —       | ✕        | Wrapper custom class name           |
| `UNSAFE_style`     | `CSSProperties`                           | —       | ✕        | Wrapper custom style                |

For detailed information see [Grid] component

## GridSpan

Grid Span allows to center content over multiple grid columns.

For more info when and why to use it, see [Grid] component.

Basic example usage:

```jsx
<Grid>
  <GridSpan over="2">2</GridSpan>
  <GridSpan over="4">4</GridSpan>
  <GridSpan over="6">6</GridSpan>
  <GridSpan over="8">8</GridSpan>
  <GridSpan over="10">10</GridSpan>
</Grid>
```

Advanced example usage:

```jsx
<Grid elementType="ul">
  <GridSpan elementType="li" over="10" tablet="8" desktop="6">
    10 on mobile, 8 on tablet, 6 on desktop
  </GridSpan>
</Grid>
```

### API

| Name          | Type                                       | Default | Required | Description                               |
| ------------- | ------------------------------------------ | ------- | -------- | ----------------------------------------- |
| `desktop`     | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over on desktop |
| `elementType` | `string`                                   | `div`   | ✕        | HTML tag to render                        |
| `over`        | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over            |
| `tablet`      | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over on tablet  |

[Grid]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Grid/README.md
