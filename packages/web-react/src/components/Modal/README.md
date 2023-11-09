# Modal

This is the React implementation of the [Modal] component.

Modal is a composition of several subcomponents:

- [Modal](#modal)
  - [Modal](#modal-1)
    - [API](#api)
  - [ModalDialog](#modaldialog)
    - [Forms in Modal](#forms-in-modal)
    - [Expand on Mobile Screens](#expand-on-mobile-screens)
    - [Custom Height](#custom-height)
    - [Custom Max Height](#custom-max-height)
    - [API](#api-1)
  - [ModalHeader](#modalheader)
    - [Hidden Title](#hidden-title)
    - [API](#api-2)
  - [ModalBody](#modalbody)
    - [API](#api-3)
  - [ModalFooter](#modalfooter)
    - [Footer Description](#footer-description)
    - [Footer Alignment](#footer-alignment)
    - [API](#api-4)
  - [Opening the Modal](#opening-the-modal)
  - [Scrolling Long Content](#scrolling-long-content)
    - [Scrolling with ScrollView](#scrolling-with-scrollview)
  - [Full Example](#full-example)

## Modal

Modal establishes the top layer with a backdrop. Under the hood it uses the [`<dialog>` element][mdn-dialog] which
provides several accessibility advantages.

```jsx
<Modal id="modal-example">…</Modal>
```

### API

| Name                   | Type                                           | Default | Required | Description                                           |
| ---------------------- | ---------------------------------------------- | ------- | -------- | ----------------------------------------------------- |
| `children`             | `ReactNode`                                    | —       | ✕        | Children node                                         |
| `closeOnBackdropClick` | `bool`                                         | `true`  | ✕        | Whether the modal will close when backdrop is clicked |
| `id`                   | `string`                                       | —       | ✔        | Modal ID                                              |
| `isOpen`               | `bool`                                         | `false` | ✔        | Open state                                            |
| `onClose`              | `(event: ClickEvent or KeyboardEvent) => void` | —       | ✔        | Callback on dialog closed                             |
| `UNSAFE_className`     | `string`                                       | —       | ✕        | Modal custom class name                               |
| `UNSAFE_style`         | `CSSProperties`                                | —       | ✕        | Modal custom style                                    |

Also, all properties of the [`<dialog>` element][mdn-dialog] are supported.

## ModalDialog

ModalDialog is the actual dialog window, a place for the header, body, and footer of the dialog.

```jsx
<ModalDialog>…</ModalDialog>
```

### Forms in Modal

Modal can also contain interactive content like forms. For such cases, you may find it convenient to use the `<form>`
element with the attribute `method="dialog"`. Buttons with `type="submit"` then [handle both][mdn-dialog-form] saving
the state of the form and closing the dialog.

```jsx
<ModalDialog elementType="form" method="dialog" name="modal-example">
  …<Button type="submit">Save</Button>
</ModalDialog>
```

### Expand on Mobile Screens

We recommend expanding the dialog on mobile screens using the `isExpandedOnMobile` option. If you omit the option, the
dialog shrinks to fit the height of its content (if smaller than the viewport).

```jsx
<ModalDialog isExpandedOnMobile>…</ModalDialog>
```

### Custom Height

By default, Modal expands to fit the height of its content, as long as it fits the viewport (see [more below](#custom-max-height)).
You can override this behavior by setting a preferred height using the following options:

- `preferredHeightOnMobile` for mobile screens, and
- `preferredHeightFromTabletUp` for tablet screens and up.

This is useful for Modals with dynamic content, e.g. a list of items that can be added or removed, or a multistep wizard.

```jsx
<ModalDialog preferredHeightOnMobile="400px" preferredHeightFromTabletUp="500px">
  …
</ModalDialog>
```

👉 Please note the custom height values are considered **preferred:** Modal will not expand beyond the viewport height.

### Custom Max Height

The default maximum height of Modal is:

- viewport height minus 1100 spacing on mobile screens, and
- 600 px on tablet screens and up (shrunk if necessary).

You can use the `maxHeightFromTabletUp` option to override the max height on tablet screens and up:

```jsx
<ModalDialog maxHeightFromTabletUp="700px">…</ModalDialog>
```

👉 Please note the max height on mobile screens is currently not customizable. Let us know if you need this feature! 🙏

### API

| Name                          | Type                  | Default   | Required | Description                                                                      |
| ----------------------------- | --------------------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `children`                    | `ReactNode`           | —         | ✕        | Children node                                                                    |
| `elementType`                 | [`article` \| `form`] | `article` | ✕        | ModalDialog element type                                                         |
| `isExpandedOnMobile`          | `bool`                | —         | ✕        | ModalDialog shrinks to fit the height of its content                             |
| `maxHeightFromTabletUp`       | `string`              | `null`    | ✕        | Max height of the modal. Accepts any valid CSS value.                            |
| `preferredHeightFromTabletUp` | `string`              | `null`    | ✕        | Preferred height of the modal on tablet and larger. Accepts any valid CSS value. |
| `preferredHeightOnMobile`     | `string`              | `null`    | ✕        | Preferred height of the modal on mobile. Accepts any valid CSS value.            |
| `UNSAFE_className`            | `string`              | —         | ✕        | ModalDialog custom class name                                                    |
| `UNSAFE_style`                | `CSSProperties`       | —         | ✕        | ModalDialog custom style                                                         |

Also, all properties of the [`<article>` element][mdn-article] and [`<form>` element][mdn-form] are supported.

## ModalHeader

ModalHeader contains the title of the dialog and the close button.

ℹ️ We strongly recommend providing the ModalHeader in every use case to ensure the dialog is accessible
and allows users to easily close it.

```jsx
<ModalHeader>Modal Title</ModalHeader>
```

### Hidden Title

Even in cases where you don't need the title to be visible you should provide an
accessible name for the dialog, e.g. using the `aria-label` attribute on
`<Modal>` component:

```jsx
<Modal id="modal-example" aria-label="Accessible Modal Title">
  <ModalDialog>
    <ModalHeader />
    <ModalBody>…</ModalBody>
  </ModalDialog>
</Modal>
```

### API

| Name               | Type            | Default | Required | Description                   |
| ------------------ | --------------- | ------- | -------- | ----------------------------- |
| `children`         | `ReactNode`     | —       | ✕        | Children node                 |
| `closeLabel`       | `string`        | —       | ✕        | Close button label            |
| `UNSAFE_className` | `string`        | —       | ✕        | ModalHeader custom class name |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | ModalHeader custom style      |

## ModalBody

ModalBody holds the actual content of the Modal.

```jsx
<ModalBody>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
    perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis provident
    unde. Eveniet, iste, molestiae?
  </p>
</ModalBody>
```

### API

| Name               | Type            | Default | Required | Description                 |
| ------------------ | --------------- | ------- | -------- | --------------------------- |
| `children`         | `ReactNode`     | —       | ✕        | Children node               |
| `UNSAFE_className` | `string`        | —       | ✕        | ModalBody custom class name |
| `UNSAFE_style`     | `CSSProperties` | —       | ✕        | ModalBody custom style      |

## ModalFooter

ModalFooter is the place for actions represented by the Button component. While there always must be a primary Button,
secondary actions are optional.

👉 Please note the actions are _visually_ ordered from right to left from the tablet breakpoint up. However, the
_actual_ order in code is followed when users tab over the interface.

ℹ️ We strongly recommend including the ModalFooter with at least one primary action in every use case to facilitate
user interaction and ensure consistent spacing within the dialog. Should the ModalFooter be omitted, please ensure
to compensate for the lost spacing by applying utility spacing classes to the ModalBody.

```jsx
<ModalFooter>
  <Button color="primary">Primary action</Button>
  <Button color="secondary">Secondary action</Button>
</ModalFooter>
```

### Footer Description

Optionally, you can add a description to the footer:

```jsx
<ModalFooter description="Optional description">…</ModalFooter>
```

### Footer Alignment

ModalFooter can be aligned to the right (default), center, or left. These values come from the
[dictionary][dictionary-alignment]. Using a corresponding alignment option will align the footer actions accordingly:

- `right` (default)
- `center`
- `left`

```jsx
<ModalFooter alignmentX="right">…</ModalFooter>
```

### API

| Name               | Type                                          | Default | Required | Description                   |
| ------------------ | --------------------------------------------- | ------- | -------- | ----------------------------- |
| `alignmentX`       | [AlignmentX dictionary][dictionary-alignment] | `right` | ✕        | ModalFooter alignment         |
| `children`         | `ReactNode`                                   | —       | ✕        | Children node                 |
| `description`      | `string`                                      | `null`  | ✕        | Optional Footer Description   |
| `UNSAFE_className` | `string`                                      | —       | ✕        | ModalFooter custom class name |
| `UNSAFE_style`     | `CSSProperties`                               | —       | ✕        | ModalFooter custom style      |

## Opening the Modal

Use a hook to open your Modal, e.g.:

```jsx
const [isOpen, setOpen] = useState(false);
const toggleModal = () => setOpen(!isOpen);
const handleClose = () => setOpen(false);

<Button onClick={toggleModal} aria-controls="#modal-example" aria-expanded={isOpen}>
  Open Modal
</Button>;
```

## Scrolling Long Content

When Modals become too long for the user's viewport or device, they automatically scroll independently of the page itself.

### Scrolling with ScrollView

To make content overflow more obvious to users, you can wrap the `ModalBody` content in a [ScrollView][scroll-view] that
takes over the responsibility for scrolling and provides visual overflow decorators, e.g.:

```jsx
<ScrollView overflowDecorators="both">
  <ModalBody>…Long content…</ModalBody>
</ScrollView>
```

## Full Example

When you put it all together:

```jsx
import {
  Button,
  Modal,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ScrollView,
} from '@lmc-eu/spirit-web-react/components';

const [isOpen, setOpen] = useState(false);
const toggleModal = () => setOpen(!isOpen);
const handleClose = () => setOpen(false);

<Button
  onClick={toggleModal}
  aria-controls="#modal-example"
  aria-expanded={isOpen}
>
  Open Modal
</Button>

<Modal id="modal-example" isOpen={isOpen} onClose={handleClose}>
  <ModalDialog>
    <ModalHeader>Title of the Modal</ModalHeader>
    <ScrollView overflowDecorators="both">
      <ModalBody>Modal body</ModalBody>
    </ScrollView>
    <ModalFooter description="Modal footer description">
      <Button color="primary" onClick={handleClose}>
        Submit
      </Button>
      <Button color="tertiary" onClick={handleClose}>
        Cancel
      </Button>
    </ModalFooter>
  </ModalDialog>
</Modal>
```

[modal]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Modal
[mdn-dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[mdn-dialog-form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#usage_notes
[mdn-article]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
[mdn-form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[scroll-view]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/ScrollView/README.md
