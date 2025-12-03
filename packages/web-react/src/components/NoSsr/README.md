# NoSsr

The NoSsr component disables rendering of any wrapped component by server prerender.

## 🚀 Usage

```jsx
import { NoSsr } from '@alma-oss/spirit-web-react';
```

Basic example usage:

```jsx
<NoSsr>This is never prerendered</NoSsr>
```

### API

| Name       | Type        | Default | Required | Description  |
| ---------- | ----------- | ------- | -------- | ------------ |
| `children` | `ReactNode` | —       | ✓        | Wrapped node |
