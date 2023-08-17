# Modal

```jsx
import { Modal, ModalDialog, ModalBody, ModalHeader, ModalFooter, Button } from '@lmc-eu/spirit-web-react/components';
```

```jsx
const [isOpen, setOpen] = useState(false);

const toggleModal = () => setOpen(!isOpen);

const handleClose = () => {
  setOpen(false);
};

// Trigger
<Button onClick={toggleModal} aria-expanded={isOpen} aria-controls="#ModalExample">
  {isOpen ? 'Close' : 'Open'} Modal
</Button>

// Modal
<Modal id="ModalExample" isOpen={isOpen} onClose={handleClose}>
  <ModalDialog>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalBody>Modal Body</ModalBody>
    <ModalFooter description="ModalFooter description">
      <Button color="primary" onClick={handleClose}>
        Confirm
      </Button>
      <Button color="tertiary" onClick={handleClose}>
        Cancel
      </Button>
    </ModalFooter>
  </ModalDialog>
</Modal>
```

## An example using a form as a ModalDialog element

```jsx
<Modal id="ModalExample">
  <ModalDialog elementType="form" name="ModalFormExample">
    ...
  </ModalDialog>
</Modal>
```

## Modal

**Available props**

| Name               | Type                                           | Default | Required | Description               |
| ------------------ | ---------------------------------------------- | ------- | -------- | ------------------------- |
| `children`         | `ReactNode`                                    | —       | ✕        | Children node             |
| `id`               | `string`                                       | —       | ✔        | Open state                |
| `isOpen`           | `bool`                                         | `false` | ✔        | Open state                |
| `onClose`          | `(event: ClickEvent or KeyboardEvent) => void` | —       | ✔        | Callback on dialog closed |
| `UNSAFE_className` | `string`                                       | —       | ✕        | Modal custom class name   |
| `UNSAFE_style`     | `CSSProperties`                                | —       | ✕        | Modal custom style        |

The rest of the properties are created from the default `<dialog>` element. [More about the element][DialogElementDocs]

## ModalDialog

**Available props**

| Name                 | Type                  | Default   | Required | Description                                          |
| -------------------- | --------------------- | --------- | -------- | ---------------------------------------------------- |
| `children`           | `ReactNode`           | —         | ✕        | Children node                                        |
| `elementType`        | [`article` \| `form`] | `article` | ✕        | ModalDialog element type                             |
| `UNSAFE_className`   | `string`              | —         | ✕        | ModalDialog custom class name                        |
| `UNSAFE_style`       | `CSSProperties`       | —         | ✕        | ModalDialog custom style                             |
| `isExpandedOnMobile` | `bool`                | —         | ✕        | ModalDialog shrinks to fit the height of its content |

The rest of the properties are formed from the selected type of element. Documentation for [Article][ArticleElementDocs], [Form][FormElementDocs].

## ModalHeader

**Available props**

| Name               | Type            | Default | Required | Description                   |
| ------------------ | --------------- | ------- | -------- | ----------------------------- |
| `children`         | `ReactNode`     | —       | ✕        | Children node                 |
| `closeLabel`       | `string`        | —       | ✕        | Close button label            |
| `UNSAFE_className` | `string`        | —       | ✕        | ModalHeader custom class name |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | ModalHeader custom style      |

The rest of the properties are based from type of `HTMLElement`. [Docs][HTMLElementDocs]

## ModalBody

**Available props**

| Name               | Type            | Default | Required | Description                 |
| ------------------ | --------------- | ------- | -------- | --------------------------- |
| `children`         | `ReactNode`     | —       | ✕        | Children node               |
| `UNSAFE_className` | `string`        | —       | ✕        | ModalBody custom class name |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | ModalBody custom style      |

The rest of the properties are created from the default `<div>` element. [Docs][DivElementDocs]

## ModalFooter

**Available props**

| Name               | Type                                          | Default | Required | Description                   |
| ------------------ | --------------------------------------------- | ------- | -------- | ----------------------------- |
| `alignmentX`       | [AlignmentX dictionary][dictionary-alignment] | `right` | ✕        | ModalFooter alignment         |
| `children`         | `ReactNode`                                   | —       | ✕        | Children node                 |
| `UNSAFE_className` | `string`                                      | —       | ✕        | ModalFooter custom class name |
| `UNSAFE_style`     | `CSSProperties`                               | —       | ✕        | ModalFooter custom style      |

The rest of the properties are based from type of `HTMLElement`. [Docs][HTMLElementDocs]

[DialogElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[ArticleElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
[FormElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
[DivElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
[HTMLElementDocs]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
