# Modal

```jsx
import { Button, Icon, Modal, ModalHeader, ModalBody, ModalFooter } from '@lmc-eu/spirit-web-react/components';
```

```jsx
const [isOpen, setOpen] = useState(false);

const toggleModal = () => setOpen(!isOpen);

const handleClose = () => {
  setOpen(false);
};

<Button onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
  {isOpen ? 'Close' : 'Open'} Modal
</Button>
<Modal isOpen={isOpen} onClose={handleClose}>
  <ModalHeader>
    Title
    <Button isSquare color="tertiary" onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
      <Icon name="close" />
    </Button>
  </ModalHeader>
  <ModalBody>Modal Body</ModalBody>
  <ModalFooter>Modal Footer</ModalFooter>
</Modal>;
```

## Modal

**Available props**

| Name       | Type                                           | Default | Description               |
| ---------- | ---------------------------------------------- | ------- | ------------------------- |
| `isOpen`   | `boolean`                                      | `false` | Open state                |
| `onClose`  | `(event: ClickEvent or KeyboardEvent) => void` | -       | Callback on dialog closed |
| `children` | `ReactNode`                                    | -       | Children node             |

## Modal Header

**Available props**

| Name       | Type        | Default | Description   |
| ---------- | ----------- | ------- | ------------- |
| `children` | `ReactNode` | -       | Children node |

## Modal Body

**Available props**

| Name       | Type        | Default | Description   |
| ---------- | ----------- | ------- | ------------- |
| `children` | `ReactNode` | -       | Children node |

## Modal Footer

**Available props**

| Name       | Type        | Default | Description   |
| ---------- | ----------- | ------- | ------------- |
| `children` | `ReactNode` | -       | Children node |

For detailed information see [Modal](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Modal/README.md) component
