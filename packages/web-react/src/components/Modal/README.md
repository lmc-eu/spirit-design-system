# Modal

This is the React implementation of the [Modal][modal] component.

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
  - [Stacking Modals](#stacking-modals)
  - [Full Example](#full-example)

## Modal

Modal establishes the top layer with a backdrop. Under the hood it uses the [`<dialog>` element][mdn-dialog] which
provides several accessibility advantages.

```jsx
<Modal id="modal-example">…</Modal>
```

### Vertical Alignment

Modal can be aligned to the center (default), top, or bottom. These values come from the
[alignment dictionary][dictionary-alignment]. Using a corresponding alignment option will align the modal accordingly:

- `top`
- `center` (default)
- `bottom`

Example:

```jsx
<Modal alignmentY="top" id="modal-example">
  …
</Modal>
```

### API

| Name                   | Type                                           | Default  | Required | Description                                           |
| ---------------------- | ---------------------------------------------- | -------- | -------- | ----------------------------------------------------- |
| `alignmentY`           | [AlignmentY dictionary][dictionary-alignment]  | `center` | ✕        | Vertical alignment of modal                           |
| `children`             | `ReactNode`                                    | —        | ✕        | Children node                                         |
| `closeOnBackdropClick` | `bool`                                         | `true`   | ✕        | Whether the modal will close when backdrop is clicked |
| `id`                   | `string`                                       | —        | ✔        | Modal ID                                              |
| `isOpen`               | `bool`                                         | `false`  | ✔        | Open state                                            |
| `onClose`              | `(event: ClickEvent or KeyboardEvent) => void` | —        | ✔        | Callback on dialog closed                             |

Also, all properties of the [`<dialog>` element][mdn-dialog] are supported.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

#### ⚠️ DEPRECATION NOTICE

The `isExpandedOnMobile` prop will be set to `true` by default in the next major release and the ModalDialog will be
expanded on mobile by default. It will be possible to re-collapse the inside by setting the `isExpandedOnMobile` prop
to `false` value.

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

👉 Please note the preferred height options are ignored when scrolling inside ModalDialog is
[turned off](#disable-scrolling-inside-modaldialog).

👉 Please note the custom height values are considered **preferred:** Modal will not expand beyond the viewport height.

### Custom Max Height

The default maximum height of Modal is:

- viewport height minus 1100 spacing on mobile screens, and
- 600 px on tablet screens and up (shrunk if necessary).

You can use the `maxHeightFromTabletUp` option to override the max height on tablet screens and up:

```jsx
<ModalDialog maxHeightFromTabletUp="700px">…</ModalDialog>
```

👉 Please note the max height is ignored when scrolling inside ModalDialog is [turned off](#disable-scrolling-inside-modaldialog).

👉 Please note the max height on mobile screens is currently not customizable. Let us know if you need this feature! 🙏

### API

| Name                          | Type                  | Default   | Required | Description                                                                                                                                                 |
| ----------------------------- | --------------------- | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`                    | `ReactNode`           | —         | ✕        | Children node                                                                                                                                               |
| `elementType`                 | [`article` \| `form`] | `article` | ✕        | ModalDialog element type                                                                                                                                    |
| `isDockedOnMobile`            | `bool`                | `false`   | ✕        | [REQUIRES FEATURE FLAG](#feature-flag-uniform-appearance-on-all-breakpoints): Dock the ModalDialog to the bottom of the screen on mobile                    |
| `isExpandedOnMobile`          | `bool`                | `false`   | ✕        | ModalDialog shrinks to fit the height of its content. [**DEPRECATED**][readme-deprecations] the default value will be set to true in the next major version |
| `isScrollable`                | `bool`                | `true`    | ✕        | If the ModalDialog should be scrollable. If set to `false`, the dialog will not scroll and will expand to fit the content.                                  |
| `maxHeightFromTabletUp`       | `string`              | `null`    | ✕        | Max height of the modal. Accepts any valid CSS value.                                                                                                       |
| `preferredHeightFromTabletUp` | `string`              | `null`    | ✕        | Preferred height of the modal on tablet and larger. Accepts any valid CSS value.                                                                            |
| `preferredHeightOnMobile`     | `string`              | `null`    | ✕        | Preferred height of the modal on mobile. Accepts any valid CSS value.                                                                                       |

Also, all properties of the [`<article>` element][mdn-article] and [`<form>` element][mdn-form] are supported.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

| Name         | Type        | Default | Required | Description        |
| ------------ | ----------- | ------- | -------- | ------------------ |
| `children`   | `ReactNode` | —       | ✕        | Children node      |
| `closeLabel` | `string`    | —       | ✕        | Close button label |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

| Name       | Type        | Default | Required | Description   |
| ---------- | ----------- | ------- | -------- | ------------- |
| `children` | `ReactNode` | —       | ✕        | Children node |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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
[alignment dictionary][dictionary-alignment]. Using a corresponding alignment option will align the footer actions
accordingly:

- `right` (default)
- `center`
- `left`

```jsx
<ModalFooter alignmentX="right">…</ModalFooter>
```

### API

| Name          | Type                                          | Default | Required | Description                 |
| ------------- | --------------------------------------------- | ------- | -------- | --------------------------- |
| `alignmentX`  | [AlignmentX dictionary][dictionary-alignment] | `right` | ✕        | ModalFooter alignment       |
| `children`    | `ReactNode`                                   | —       | ✕        | Children node               |
| `description` | `string`                                      | `null`  | ✕        | Optional Footer Description |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Opening the Modal

Use a hook to open your Modal, e.g.:

```jsx
const [isOpen, setOpen] = useState(false);
const toggleModal = () => setOpen(!isOpen);
const handleClose = () => setOpen(false);

<Button onClick={toggleModal} aria-controls="modal-example" aria-expanded={isOpen}>
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

### Disable Scrolling Inside ModalDialog

Scrolling inside ModalDialog can be turned off by setting the `ModalDialog` prop `isScrollable` to `false`:

```jsx
<ModalDialog isScrollable="false">
  <!-- … -->
</ModalDialog>
```

This way, the ModalBody will expand to fit the height of its content and the whole ModalDialog will scroll in case the
content is longer than user's viewport.

👉 Please note that this modifier class can produce unexpected results when used in combination with ScrollView.

#### ⚠️ DEPRECATION NOTICE

The `isScrollable` prop will be set to `false` by default in the next major release and the ModalDialog will be made
non-scrollable by default. It will be possible to re-enable the inside scrolling by adding the `isScrollable` prop.

## Stacking Modals

Multiple Modals can be open at the same time. That means, you can open a Modal from another Modal, and they will display
stacked on top of each other. The topmost Modal is always the one that is **last in the DOM**.

```jsx
<!-- First Modal: -->
<Modal id="modal-first"></Modal>
<!-- This Modal will stack up on the previous Modal: -->
<Modal id="modal-topmost"></Modal>
```

👉 Please note that Modals **cannot be nested** into each other **in the DOM**.

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
  aria-controls="modal-example"
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

## Feature Flag: Uniform Appearance on All Breakpoints

The uniform appearance of modal dialog on all breakpoints is disabled by default. To enable it, either set the
`$modal-enable-uniform-dialog` Sass feature flag to `true` or use the `spirit-feature-modal-enable-uniform-dialog` CSS
class on any parent of the modal.

For more info, see main [README][readme-feature-flags].

### ⚠️ DEPRECATION NOTICE

The uniform dialog appearance will replace current behavior in the next major release. Current mobile appearance will
remain accessible via the `isDockedOnMobile` property.

[What are deprecations?][readme-deprecations]

[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[mdn-article]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
[mdn-dialog-form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#usage_notes
[mdn-dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[mdn-form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
[modal]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Modal
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[scroll-view]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/ScrollView/README.md
