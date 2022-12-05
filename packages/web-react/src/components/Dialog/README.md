# Dialog

React implementation of native HTML [dialog] element.

```jsx
import { Dialog } from '@lmc-eu/spirit-web-react/components';
```

```jsx
const [isOpen, setOpen] = useState(false);

const toggleDialog = () => setOpen(!isOpen);

const handleClose = () => {
  setOpen(false);
};

<Dialog isOpen={isOpen} onClose={handleClose}>
  {/* children */}
</Dialog>;
```

## Dialog

**Available props**

| Name       | Type                                           | Default | Description               |
| ---------- | ---------------------------------------------- | ------- | ------------------------- |
| `isOpen`   | `boolean`                                      | `false` | Open state                |
| `onClose`  | `(event: ClickEvent or KeyboardEvent) => void` | -       | Callback on dialog closed |
| `children` | `ReactNode`                                    | -       | Children node             |

[dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
