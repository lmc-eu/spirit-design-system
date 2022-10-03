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

## SpiritModalProps

| Name               | Type                                           | Default   | Description                         |
| ------------------ | ---------------------------------------------- | --------- | ----------------------------------- |
| `isOpen`           | `boolean`                                      | `false`   | Open state                          |
| `onClose`          | `(event: ClickEvent or KeyboardEvent) => void` | -         | When dialog is closed               |
| `contentProps`     | `SpiritModalContentProps`                      | -         | Content component props             |
| `backdropProps`    | `SpiritModalBackdropProps`                     | -         | Backdrop component props            |
| `dialogProps`      | `SpiritModalDialogProps`                       | -         | Dialog component props              |
| `closeButtonProps` | `SpiritModalCloseButtonProps`                  | -         | Close button props                  |
| `closeOnBackdrop`  | `boolean`                                      | `true`    | When click on backdrop closes modal |
| `closeOnEscape`    | `boolean`                                      | `true`    | When escape press closes modal      |
| `parentSelector`   | `string`                                       | `'#root'` | Portal parent element selector      |
| `showBodyClose`    | `boolean`                                      | `true`    | Shows close button on body          |
| `children`         | `ReactNode`                                    | -         | Children node                       |
| `UNSAFE_className` | `string`                                       | -         | Classname                           |
| `UNSAFE_style`     | `CSSProperties`                                | -         | CSS Properties                      |

## SpiritModalHeaderProps

| Name               | Type            | Default | Description    |
| ------------------ | --------------- | ------- | -------------- |
| `children`         | `ReactNode`     | -       | Children node  |
| `UNSAFE_className` | `string`        | -       | Classname      |
| `UNSAFE_style`     | `CSSProperties` | -       | CSS Properties |

## SpiritModalBodyProps

| Name               | Type            | Default | Description    |
| ------------------ | --------------- | ------- | -------------- |
| `children`         | `ReactNode`     | -       | Children node  |
| `UNSAFE_className` | `string`        | -       | Classname      |
| `UNSAFE_style`     | `CSSProperties` | -       | CSS Properties |

## SpiritModalFooterProps

| Name               | Type            | Default | Description    |
| ------------------ | --------------- | ------- | -------------- |
| `children`         | `ReactNode`     | -       | Children node  |
| `UNSAFE_className` | `string`        | -       | Classname      |
| `UNSAFE_style`     | `CSSProperties` | -       | CSS Properties |
