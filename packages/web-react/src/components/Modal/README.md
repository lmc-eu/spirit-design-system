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

## Modal Stacking

⚠️ If you want to use Modal in the Modal, you need to follow the exact order of the implementation.
The Modal to be displayed on the top layer must be the first in the code and vice versa.

## Modal

**Available props**

| Name               | Type                                           | Default | Required | Description               |
| ------------------ | ---------------------------------------------- | ------- | -------- | ------------------------- |
| `id`               | `string`                                       | -       | yes      | Open state                |
| `isOpen`           | `boolean`                                      | `false` | yes      | Open state                |
| `onClose`          | `(event: ClickEvent or KeyboardEvent) => void` | -       | yes      | Callback on dialog closed |
| `children`         | `ReactNode`                                    | -       | no       | Children node             |
| `UNSAFE_className` | `string`                                       | -       | no       | Modal custom class name   |
| `UNSAFE_style`     | `CSSProperties`                                | -       | no       | Modal custom style        |

The rest of the properties are created from the default `<dialog>` element. [More about the element][DialogElementDocs]

## ModalDialog

**Available props**

| Name                 | Type                | Default     | Required | Description                                          |
| -------------------- | ------------------- | ----------- | -------- | ---------------------------------------------------- |
| `elementType`        | `'article', 'form'` | `'article'` | no       | ModalDialog element type                             |
| `children`           | `ReactNode`         | -           | no       | Children node                                        |
| `UNSAFE_className`   | `string`            | -           | no       | ModalDialog custom class name                        |
| `UNSAFE_style`       | `CSSProperties`     | -           | no       | ModalDialog custom style                             |
| `isExpandedOnMobile` | `boolean`           | -           | no       | ModalDialog shrinks to fit the height of its content |

The rest of the properties are formed from the selected type of element. Documentation for [Article][ArticleElementDocs], [Form][FormElementDocs].

## ModalHeader

**Available props**

| Name               | Type            | Default | Required | Description                   |
| ------------------ | --------------- | ------- | -------- | ----------------------------- |
| `children`         | `ReactNode`     | -       | no       | Children node                 |
| `closeLabel`       | `string`        | -       | no       | Close button label            |
| `UNSAFE_className` | `string`        | -       | no       | ModalHeader custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | no       | ModalHeader custom style      |

The rest of the properties are based from type of `HTMLElement`. [Docs][HTMLElementDocs]

## ModalBody

**Available props**

| Name               | Type            | Default | Required | Description                 |
| ------------------ | --------------- | ------- | -------- | --------------------------- |
| `children`         | `ReactNode`     | -       | no       | Children node               |
| `UNSAFE_className` | `string`        | -       | no       | ModalBody custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | no       | ModalBody custom style      |

The rest of the properties are created from the default `<div>` element. [Docs][DivElementDocs]

## ModalFooter

**Available props**

| Name               | Type                                          | Default   | Required | Description                                                                  |
| ------------------ | --------------------------------------------- | --------- | -------- | ---------------------------------------------------------------------------- |
| `children`         | `ReactNode`                                   | -         | no       | Children node                                                                |
| `align`            | [AlignmentX dictionary][dictionary-alignment] | `'right'` | no       | [**DEPRECATED**][deprecated] in favor of `alignmentX`; ModalFooter alignment |
| `alignmentX`       | [AlignmentX dictionary][dictionary-alignment] | `'right'` | no       | ModalFooter alignment                                                        |
| `UNSAFE_className` | `string`                                      | -         | no       | ModalFooter custom class name                                                |
| `UNSAFE_style`     | `CSSProperties`                               | -         | no       | ModalFooter custom style                                                     |

The rest of the properties are based from type of `HTMLElement`. [Docs][HTMLElementDocs]

[DialogElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[ArticleElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
[FormElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
[DivElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
[HTMLElementDocs]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/README.md#deprecations
