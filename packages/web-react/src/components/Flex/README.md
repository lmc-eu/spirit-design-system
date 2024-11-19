# Flex

Flex is a component that allows you to create a flexible one-dimensional layout.

## Basic Usage

Row layout:

```jsx
<Flex>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

Column layout:

```jsx
<Flex direction="column">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Usage with a list:

```jsx
<Flex elementType="ul" direction="column">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</Flex>
```

ℹ️ For the row layout, the Flex component uses the [`display: flex`][mdn-display-flex] CSS property. For the column
layout, [`display: grid`][mdn-display-grid] is used because of technical advantages: better overflow control or
alignment API consistency.

## Responsive Direction

To create a responsive layout, pass an object as the value for the `direction` property, using breakpoint keys to specify different layouts for each screen size.

```jsx
<Flex direction={{ mobile: 'column', tablet: 'row' }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

## Wrapping

By default, Flex items will not wrap. To enable wrapping on all breakpoints, use the
`isWrapping` prop.

```jsx
<Flex isWrapping>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

### Responsive Wrapping

To create a responsive wrapping layout, pass an object as the value for the `isWrapping` property, using breakpoint keys to specify different wrapping for each screen size.

```jsx
<Flex isWrapping={{ mobile: true, tablet: false }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

## Alignment

### Horizontal Alignment

Flex can be horizontally aligned as stretched (default), to the left, center, or right. Additionally, you
can evenly distribute the items using the space-between value. These values come from the extended
[alignmentX dictionary][dictionary-alignment].

### Vertical Alignment

Similarly to the horizontal alignment, Flex can be vertically aligned as stretched (default), to the top,
center, bottom. There is also an option to align the items to the baseline. These values come from the extended
[alignmentY dictionary][dictionary-alignment].

Example:

```jsx
<Flex alignmentX="right" alignmentY="baseline">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Responsive Alignment

To create a responsive alignment, pass an object as the value for the property, using breakpoint keys to specify different alignments for each screen size.

Example:

```jsx
<Flex alignmentX={{ mobile: 'left', tablet: 'space-between' }} alignmentY={{ mobile: 'stretch', tablet: 'baseline' }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

## Custom Spacing

You can use the `spacing` prop to apply custom spacing between items in both horizontal and vertical directions. The prop
accepts either a spacing token (e.g. `space-100`) or an object with breakpoint keys and spacing token values.

Alternatively, you can set custom spacing in the horizontal (x-axis) and vertical (y-axis) direction separately using the `spacingX` and `spacingY` props.

Custom spacing:

```jsx
<Flex spacing="space-1200">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Custom responsive spacing:

```jsx
<Flex spacing={{ mobile: 'space-400', tablet: 'space-800' }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

Custom horizontal (x-axis) spacing:

```jsx
<Flex spacingX={{ mobile: 'space-400', tablet: 'space-800' }}>
  <!-- Flex content -->
</Flex>
```

Custom vertical (y-axis) spacing:

```jsx
<Flex spacingY={{ mobile: 'space-400', tablet: 'space-800' }}>
  <!-- Flex content -->
</Flex>
```

## API

| Name          | Type                                                                 | Default   | Required | Description                                                                                                                                |
| ------------- | -------------------------------------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `alignmentX`  | \[[AlignmentXExtended dictionary][dictionary-alignment] \| `object`] | `stretch` | ✕        | Apply horizontal alignment of items, use an object to set responsive values, e.g. `{ mobile: 'left', tablet: 'center', desktop: 'right' }` |
| `alignmentY`  | \[[AlignmentYExtended dictionary][dictionary-alignment] \| `object`] | `stretch` | ✕        | Apply vertical alignment of items, use an object to set responsive values, e.g. `{ mobile: 'top', tablet: 'center', desktop: 'bottom' }`   |
| `direction`   | \[[Direction dictionary][direction-dictionary] \| `object` ]         | `row`     | ✕        | Direction of the items, use an object to set responsive values, e.g. `{ mobile: 'row', tablet: 'row', desktop: 'column' }`                 |
| `elementType` | HTML element                                                         | `div`     | ✕        | Element type to use for the Grid                                                                                                           |
| `isWrapping`  | \[ `bool` \| `object` ]                                              | `false`   | ✕        | Whether items will wrap, use an object to set responsive values, e.g. `{ mobile: true, tablet: true, desktop: false }`                     |
| `spacing`     | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`]    | —         | ✕        | Apply [custom spacing](#custom-spacing) in both horizontal and vertical directions between items                                           |
| `spacingX`    | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`]    | —         | ✕        | Apply horizontal [custom spacing](#custom-spacing) between items                                                                           |
| `spacingY`    | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`]    | —         | ✕        | Apply vertical [custom spacing](#custom-spacing) between items                                                                             |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[dictionary-direction]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#direction
[mdn-display-flex]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
[mdn-display-grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
