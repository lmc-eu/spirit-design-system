# Stack

[Stack] is a component that allows you to compose elements vertically.

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

## API

| Name                      | Type            | Default | Required | Description                            |
| ------------------------- | --------------- | ------- | -------- | -------------------------------------- |
| `elementType`             | `string`        | `div`   | ✕        | Element type of the wrapper element    |
| `hasEndDivider`           | `bool`          | `false` | ✕        | Render a divider after the last item   |
| `hasIntermediateDividers` | `bool`          | `false` | ✕        | Render dividers between items          |
| `hasSpacing`              | `bool`          | `false` | ✕        | Apply a spacing between items          |
| `hasStartDivider`         | `bool`          | `false` | ✕        | Render a divider before the first item |
| `UNSAFE_className`        | `string`        | -       | ✕        | Wrapper custom class name              |
| `UNSAFE_style`            | `CSSProperties` | -       | ✕        | Wrapper custom style                   |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[stack]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Stack
