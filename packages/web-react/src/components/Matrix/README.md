# Matrix

The Matrix component distributes nested components in equal columns and allows
their content to be aligned. It's especially useful for multiple stacked layouts
where content needs to be organized in a uniform grid pattern.

## Basic Usage

```jsx
<Matrix>
  <!-- Content items -->
</Matrix>
```

## Custom Spacing

You can use the `spacing` prop to apply custom spacing between items in both horizontal and vertical directions. The prop
accepts either a spacing token (e.g. `space-100`) or an object with breakpoint keys and spacing token values.

You can set custom spacing in the horizontal (x-axis) and vertical (y-axis) direction separately using the `spacingX` and `spacingY` props.

### Custom Spacing

```jsx
<Matrix spacing="space-1200">
  <!-- Content items -->
</Matrix>
```

### Custom Responsive Spacing

```jsx
<Matrix spacing={{ mobile: 'space-400', tablet: 'space-800' }}>
  <!-- Content items -->
</Matrix>
```

### Custom Horizontal (x-Axis) Spacing

```jsx
<Matrix spacingX={{ mobile: 'space-400', tablet: 'space-800' }}>
  <!-- Content items -->
</Matrix>
```

### Custom Vertical (y-Axis) Spacing

```jsx
<Matrix spacingY={{ mobile: 'space-400', tablet: 'space-800' }}>
  <!-- Content items -->
</Matrix>
```

## Scrollable Matrix

For scrollable Matrix, you can use the `ScrollView` component to wrap the `Matrix` component. This allows the content to be scrolled horizontally.

```jsx
<ScrollView direction="horizontal" data-spirit-toggle="scrollView">
  <Matrix>
    <!-- Content items -->
  </Matrix>
</ScrollView>
```

## Responsive Matrix

You need to explicitly set the `rows` prop to define the number of Matrix rows for each breakpoint, as well as the `itemRows` prop to specify the number of items per row.

```jsx
<Matrix
  cols={{ mobile: 1, tablet: 2 }}
  itemRows={3}
  rows={{ mobile: 4, tablet: 2 }}
  spacingX={{ mobile: 'space-400', tablet: 'space-800' }}
  spacingY="space-1200"
>
  <!-- Content items -->
</Matrix>
```

⚠️ For multi-line Matrix layouts, the number of item rows `itemRows` must be set explicitly. This is required by the [`subgrid`][mdn-subgrid] feature.

## Known Limitations

As of now, only **single-column components** are supported in Matrix.

## API

| Name          | Type                                                              | Default     | Required | Description                                                                                                     |
| ------------- | ----------------------------------------------------------------- | ----------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `cols`        | \[`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12` \| `object`]     | —           | ✕        | Number of columns to use, use object to set responsive values, e.g. `{ mobile: 1, tablet: 2, desktop: 3 }`      |
| `rows`        | \[ `number` \| `object`]                                          | `3`         | ✕        | Number of rows to use, use object to set responsive values, e.g. `{ mobile: 1, tablet: 2, desktop: 3 }`         |
| `elementType` | HTML element                                                      | `div`       | ✕        | Element type to use for the Grid                                                                                |
| `itemRows`    | \[ `number` \| `object`]                                          | `div`       | ✕        | Number of items in row to use, use object to set responsive values, e.g. `{ mobile: 1, tablet: 2, desktop: 3 }` |
| `spacing`     | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | —           | ✕        | Apply [custom spacing](#custom-spacing) in both horizontal and vertical directions between items                |
| `spacingX`    | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | `space-700` | ✕        | Apply horizontal [custom spacing](#custom-spacing) between items                                                |
| `spacingY`    | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | `space-0`   | ✕        | Apply vertical [custom spacing](#custom-spacing) between items                                                  |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[mdn-subgrid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
