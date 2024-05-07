# NoSsr

The NoSsr component disables rendering of any wrapped component by server prerender.

```jsx
import { NoSsr } from '@lmc-eu/spirit-web-react/components';
```

Basic example usage:

```jsx
<NoSsr>This is never prerendered</NoSsr>
```

### API

| Name       | Type        | Default | Required | Description  |
| ---------- | ----------- | ------- | -------- | ------------ |
| `children` | `ReactNode` | —       | ✓        | Wrapped node |
