# Modal

```jsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@lmc-eu/spirit-web-react/components';
```

```jsx
<Modal isOpen={isOpen} onClose={closeHandler}>
  <ModalHeader>title</ModalHeader>
  <ModalBody>body</ModalBody>
  <ModalFooter>footer</ModalFooter>
</Modal>
```

## Modal

**Available props**

| Name               | Type                                           | Default        | Description                         |
| ------------------ | ---------------------------------------------- | -------------- | ----------------------------------- |
| `isOpen`           | `boolean`                                      | `false`        | Open state                          |
| `onClose`          | `(event: ClickEvent or KeyboardEvent) => void` | -              | When dialog is closed               |
| `closeButtonProps` | `SpiritModalCloseButtonProps`                  | -              | Close button props                  |
| `closeOnBackdrop`  | `boolean`                                      | `true`         | When click on backdrop closes modal |
| `closeOnEscape`    | `boolean`                                      | `true`         | When escape press closes modal      |
| `parentId`         | `string`                                       | `'modal-root'` | Portal parent element ID            |
| `showBodyClose`    | `boolean`                                      | `true`         | Shows close button on body          |
| `children`         | `ReactNode`                                    | -              | Children node                       |
| `UNSAFE_className` | `string`                                       | -              | Classname                           |
| `UNSAFE_style`     | `CSSProperties`                                | -              | CSS Properties                      |

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
