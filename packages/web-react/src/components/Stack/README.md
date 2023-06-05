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

| Prop name                 | Type     | Default | Required | Description                            |
| ------------------------- | -------- | ------- | -------- | -------------------------------------- |
| `class`                   | `string` | `null`  | no       | Custom CSS class                       |
| `elementType`             | `string` | `div`   | no       | Element type of the wrapper element    |
| `hasEndDivider`           | `bool`   | `false` | no       | Render a divider after the last item   |
| `hasIntermediateDividers` | `bool`   | `false` | no       | Render dividers between items          |
| `hasSpacing`              | `bool`   | `false` | no       | Apply a spacing between items          |
| `hasStartDivider`         | `bool`   | `false` | no       | Render a divider before the first item |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[stack]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Stack
