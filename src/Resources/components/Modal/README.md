# Modal

This is Twig implementation of the [Modal] component.

Modal is a composition of several subcomponents:

- [Modal](#modal)
  - [ModalDialog](#modaldialog)
    - [ModalHeader](#modalheader)
    - [ModalBody](#modalfooter)
    - [ModalFooter](#modalfooter)

## Modal

### Examples:

```twig
<Modal id="modal-example">
  …
</Modal>
<Modal id="modal-example" titleId="modal-example-title">
  …
</Modal>
```

👉 Please note the `titleId` attribute is linked to the title inside
[Modal Header](#modalheader) and provides an accessible name for the dialog.

### API

| Name      | Type     | Default | Required | Description                        |
| --------- | -------- | ------- | -------- | ---------------------------------- |
| `id`      | `string` | —       | ✔        | Modal ID                           |
| `titleId` | `string` | `null`  | ✕        | ID of the title inside ModalHeader |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## ModalDialog

ModalDialog is the actual dialog window, a place for the header, body, and
footer of the dialog.

### Examples:

```twig
<ModalDialog>
  …
</ModalDialog>

<ModalDialog elementType="form" isExpandedOnMobile={false} method="dialog">
  …
</ModalDialog>
```

### API

| Name                          | Type                          | Default   | Required | Description                                                                                             |
| ----------------------------- | ----------------------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `accept-charset`              | `string`                      | `null`    | ✕        | `elementType="form"` only: Character encodings to use for form submission (intentionally in kebab-case) |
| `action`                      | `string`                      | `null`    | ✕        | `elementType="form"` only: URL to use for form submission                                               |
| `autocomplete`                | `string`                      | `null`    | ✕        | `elementType="form"` only: [Automated assistance in filling][autocomplete-attr]                         |
| `elementType`                 | `string`                      | `article` | ✕        | HTML tag to render                                                                                      |
| `enctype`                     | `string`                      | `null`    | ✕        | `elementType="form"` only: Encoding to use for form submission                                          |
| `isExpandedOnMobile`          | `bool`                        | `true`    | ✕        | If the ModalDialog should expand on mobile. Overrides any height defined by `preferredHeightOnMobile`.  |
| `maxHeightFromTabletUp`       | `string`                      | `null`    | ✕        | Max height of the modal. Accepts any valid CSS value.                                                   |
| `method`                      | [`get` \| `post` \| `dialog`] | `null`    | ✕        | `elementType="form"` only: HTTP method to use for form submission                                       |
| `name`                        | `string`                      | `null`    | ✕        | `elementType="form"` only: Name of the form                                                             |
| `novalidate`                  | `bool`                        | `false`   | ✕        | `elementType="form"` only: If the dialog should have validation disabled                                |
| `preferredHeightFromTabletUp` | `string`                      | `null`    | ✕        | Preferred height of the modal on tablet and larger. Accepts any valid CSS value.                        |
| `preferredHeightOnMobile`     | `string`                      | `null`    | ✕        | Preferred height of the modal on mobile. Accepts any valid CSS value.                                   |
| `rel`                         | `string`                      | `null`    | ✕        | `elementType="form"` only: Relationship between the current document and the linked resource            |
| `target`                      | `string`                      | `null`    | ✕        | `elementType="form"` only: Browsing context for form submission                                         |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component. Also, all `form` attributes
are allowed when the `elementType` is set to `form`.

### Forms in Modal

Modal can also contain interactive content like forms. For such cases, you may
find convenient to use the prop `elementType="form"` with the attribute
`method="dialog"`. Buttons with `type="submit"` then
[handle both][mdn-dialog-form] saving the state of the form and closing the
dialog.

```html
<ModalDialog elementType="form" method="dialog"> … </ModalDialog>
```

### Expand on Mobile Screens

We recommend to expand the ModalDialog on mobile screens using the
`isExpandedOnMobile` prop. If you disable the prop, the ModalDialog shrinks
to fit the height of its content (if smaller than viewport).

## ModalHeader

### Examples:

```twig
<ModalHeader modalId="modal-example" />

<Modal id="modal-example" titleId="modal-example-title">
  <ModalDialog>
    <ModalHeader
      closeLabel="Close form"
      enableDismiss={false}
      modalId="modal-example"
      titleId="modal-example-title"
    >
      Title of the Modal
    </ModalHeader>
    …
  </ModalDialog>
</Modal>
```

👉 Even in cases you don't need the title to be visible you should provide an
accessible name for the dialog, e.g. using the `aria-label` attribute on
`<Modal>` component:

```twig
<Modal id="modal-example" aria-label="Accessible Modal Title"> … </Modal>
```

### API

| Name            | Type     | Default | Required | Description             |
| --------------- | -------- | ------- | -------- | ----------------------- |
| `closeLabel`    | `string` | `Close` | ✕        | Custom close label      |
| `enableDismiss` | `bool`   | `true`  | ✕        | Enable JS Modal dismiss |
| `modalId`       | `string` | —       | ✔        | Modal ID                |
| `titleId`       | `string` | `null`  | ✕        | ID of the title         |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## ModalBody

### Examples:

```twig
<ModalBody>
  …
</ModalBody>
```

### API

There are no API options for ModalBody.

You can add `data-*` or `aria-*` attributes to further extend
component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## ModalFooter

### Examples:

```twig
<ModalFooter>
  …
</ModalFooter>
<ModalFooter alignmentX="left" description="Modal Footer description">
  …
</ModalFooter>
```

### API

| Name          | Type                                          | Default | Required | Description                 |
| ------------- | --------------------------------------------- | ------- | -------- | --------------------------- |
| `alignmentX`  | [AlignmentX dictionary][dictionary-alignment] | `right` | ✕        | Alignment of Footer Actions |
| `description` | `string`                                      | `null`  | ✕        | Optional Footer Description |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

## Full Example

When you put it all together:

```twig
<Button
  color="primary"
  data-spirit-toggle="modal"
  data-spirit-target="#modal-example"
  aria-controls="modal-example"
  aria-expanded="false"
>
  Open Modal
</Button>

<Modal
  id="modal-example"
  titleId="modal-example-title"
>
  <ModalDialog>
    <ModalHeader
      closeLabel="Close form"
      modalId="modal-example"
      titleId="modal-example-title"
    >
      Title of the Modal
    </ModalHeader>
    <ModalBody>
      <p>Modal body form</p>
    </ModalBody>
    <ModalFooter alignmentX="left" description="Modal Footer description">
      <Button color="primary">
        Submit
      </Button>
      <Button color="secondary">
        Cancel
      </Button>
    </ModalFooter>
  </ModalDialog>
</Modal>
```

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Modal/README.md#javascript-plugin
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[modal]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Modal
[mdn-dialog-form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#usage_notes
[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
