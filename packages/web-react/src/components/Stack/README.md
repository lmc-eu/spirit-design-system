# Stack

[Stack][stack] is a component that allows you to compose elements vertically.

Basic example usage:

```jsx
<Stack>
  <div>Block 1</div>
  <div>Block 2</div>
  <div>Block 3</div>
</Stack>
```

Advanced example usage:

```jsx
<Stack elementType="ul" hasIntermediateDividers hasStartDivider hasEndDivider>
  <li>
    <div>List item 1</div>
  </li>
  <li>
    <div>List item 1</div>
  </li>
  <li>
    <div>List item 1</div>
  </li>
</Stack>
```

## Custom Spacing

You can use the `spacing` prop to apply custom spacing between items. The prop
accepts either a spacing token (eg. `space-100`) or an object with breakpoint keys and spacing token values.

```jsx
<Stack hasSpacing spacing="space-1200">
  <div>Block 1</div>
  <div>Block 2</div>
  <div>Block 3</div>
</Stack>

<Stack hasSpacing spacing={{ mobile: 'space-400', tablet: 'space-800' }}>
  <div>Block 1</div>
  <div>Block 2</div>
  <div>Block 3</div>
</Stack>
```

## API

| Name                      | Type                                                             | Default | Required | Description                                                         |
| ------------------------- | ---------------------------------------------------------------- | ------- | -------- | ------------------------------------------------------------------- |
| `elementType`             | `string`                                                         | `div`   | ✕        | Element type of the wrapper element                                 |
| `hasEndDivider`           | `bool`                                                           | `false` | ✕        | Render a divider after the last item                                |
| `hasIntermediateDividers` | `bool`                                                           | `false` | ✕        | Render dividers between items                                       |
| `hasSpacing`              | `bool`                                                           | `false` | ✕        | Apply a spacing between items                                       |
| `hasStartDivider`         | `bool`                                                           | `false` | ✕        | Render a divider before the first item                              |
| `spacing`                 | [`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | —       | ✕        | Custom spacing between items, see [Custom Spacing](#custom-spacing) |
| `UNSAFE_className`        | `string`                                                         | —       | ✕        | Wrapper custom class name                                           |
| `UNSAFE_style`            | `CSSProperties`                                                  | —       | ✕        | Wrapper custom style                                                |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[stack]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Stack
