# VisuallyHidden

The VisuallyHidden component helps improve web accessibility by rendering its content in a way that it's hidden visually but still accessible to screen readers.

```jsx
import { VisuallyHidden } from '@lmc-eu/spirit-web-react/components';
```

Basic example usage:

```jsx
<VisuallyHidden>Label</VisuallyHidden>
```

Advanced example:

```jsx
<VisuallyHidden elementType="div">Label</VisuallyHidden>
```

### API

| Name               | Type            | Default | Required | Description                          |
| ------------------ | --------------- | ------- | -------- | ------------------------------------ |
| `children`         | `string`        | —       | ✔        | Hidden Label                         |
| `elementType`      | `string`        | `span`  | ✕        | Type of element used as main wrapper |
| `UNSAFE_className` | `string`        | —       | ✕        | Wrapper custom class name            |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | Wrapper custom style                 |
