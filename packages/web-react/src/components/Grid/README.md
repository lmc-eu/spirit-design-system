# Grid

Use Grid to build multiple column layouts. This Grid works on twelve column system, and it contains variants of 12, 6, 4, 3, 2, and 1 column for each breakpoint. And additionally one centered narrow column.

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

**Narrow layout**

```jsx
<Grid layout="narrow">
  <div>content</div>
</Grid>
```

## Available props

| Name          | Type                          | Description                         |
| ------------- | ----------------------------- | ----------------------------------- |
| `cols`        | `1`, `2`, `3`, `4`, `6`, `12` | Number of columns to use            |
| `desktop`     | `1`, `2`, `3`, `4`, `6`, `12` | Number of columns to use on desktop |
| `tablet`      | `1`, `2`, `3`, `4`, `6`, `12` | Number of columns to use on tablet  |
| `layout`      | `narrow`                      | Type of layout to display           |
| `elementType` | HTML element                  | Element type to use for the Grid    |

For detailed information see [Grid](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/Grid/README.md) component
