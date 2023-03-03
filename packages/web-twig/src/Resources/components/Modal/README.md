# Modal

## Composed Modal (DEPRECATED)

This is Twig implementation of the [Modal] component.

Modal is a composition of several subcomponents:

- [ModalComposed](#modalcomposed)
  - [ModalDialog](#modaldialog)
    - [ModalHeader](#modalheader)
    - [ModalBody](#modalfooter)
    - [ModalFooter](#modalfooter)

⚠️ **DEPRECATED:** The component `ModalComposed` — which is currently necessary to
distinguish the composed version of Modal from the simple one — is deprecated
and will be removed in next major version: the composed Modal will supersede the
[Simple Modal](#simple-modal-deprecated) variant.

### ModalComposed

#### Examples:

```twig
<ModalComposed id="modal-composed">
  …
</ModalComposed>
<ModalComposed id="modal-composed" titleId="modal-composed-title">
  …
</ModalComposed>
```

👉 Please note the `titleId` attribute is linked to the title inside
[Modal Header](#modalheader) and provides an accessible name for the dialog.

#### API

| Prop name | Type     | Default | Required | Description                        |
| --------- | -------- | ------- | -------- | ---------------------------------- |
| `class`   | `string` | `null`  | no       | Custom CSS class                   |
| `id`      | `string` | —       | yes      | Modal ID                           |
| `titleId` | `string` | `null`  | no       | ID of the title inside ModalHeader |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

### ModalDialog

ModalDialog is the actual dialog window, a place for the header, body, and
footer of the dialog.

#### Examples:

```twig
<ModalDialog>
  …
</ModalDialog>

<ModalDialog elementType="form" isExpandedOnMobile=false method="dialog">
  …
</ModalDialog>
```

#### API

| Prop name            | Type      | Default   | Required | Description                                |
| -------------------- | --------- | --------- | -------- | ------------------------------------------ |
| `class`              | `string`  | `null`    | no       | Custom CSS class                           |
| `elementType`        | `string`  | `article` | no       | HTML tag to render                         |
| `isExpandedOnMobile` | `boolean` | `true`    | no       | If the ModalDialog should expand on mobile |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component. Also all `form` attributes
are allowed when the `elementType` is set to `form`.

#### Forms in Modal

Modal can also contain interactive content like forms. For such cases, you may
find convenient to use the prop `elementType="form"` with the attribute
`method="dialog"`. Buttons with `type="submit"` then
[handle both][mdn-dialog-form] saving the state of the form and closing the
dialog.

```html
<ModalDialog elementType="form" method="dialog"> … </ModalDialog>
```

#### Expand on Mobile Screens

We recommend to expand the ModalDialog on mobile screens using the
`isExpandedOnMobile` prop. If you disable the prop, the ModalDialog shrinks
to fit the height of its content (if smaller than viewport).

### ModalHeader

#### Examples:

```twig
<ModalHeader modalId="modal-composed" />

<ModalComposed id="modal-composed" titleId="modal-composed-title">
  <ModalDialog>
    <ModalHeader
      closeLabel="Close form"
      enableDismiss=false
      modalId="modal-composed"
      titleId="modal-composed-title"
    >
      Title of the Modal
    </ModalHeader>
    …
  </ModalDialog>
</ModalComposed>
```

👉 Even in cases you don't need the title to be visible you should provide an
accessible name for the dialog, e.g. using the `aria-label` attribute on
`<ModalComposed>` component:

```twig
<ModalComposed id="modal-composed" aria-label="Accessible Modal Title"> … </ModalComposed>
```

#### API

| Prop name       | Type      | Default | Required | Description             |
| --------------- | --------- | ------- | -------- | ----------------------- |
| `class`         | `string`  | `null`  | no       | Custom CSS class        |
| `closeLabel`    | `string`  | `Close` | no       | Custom close label      |
| `enableDismiss` | `boolean` | `true`  | no       | Enable JS Modal dismiss |
| `modalId`       | `string`  | —       | yes      | Modal ID                |
| `titleId`       | `string`  | `null`  | no       | ID of the title         |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

### ModalBody

#### Examples:

```twig
<ModalBody>
  …
</ModalBody>
```

#### API

| Prop name | Type     | Default | Required | Description      |
| --------- | -------- | ------- | -------- | ---------------- |
| `class`   | `string` | `null`  | no       | Custom CSS class |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

### ModalFooter

#### Examples:

```twig
<ModalFooter>
  …
</ModalFooter>
<ModalFooter alignmentX="left" description="Modal Footer description">
  …
</ModalFooter>
```

#### API

| Prop name     | Type                                          | Default | Required | Description                                                                        |
| ------------- | --------------------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------- |
| `align`       | [AlignmentX dictionary][dictionary-alignment] | `right` | no       | [**DEPRECATED**][deprecated] in favor of `alignmentX`; Alignment of Footer Actions |
| `alignmentX`  | [AlignmentX dictionary][dictionary-alignment] | `right` | no       | Alignment of Footer Actions                                                        |
| `class`       | `string`                                      | `null`  | no       | Custom CSS class                                                                   |
| `description` | `string`                                      | `null`  | no       | Optional Footer Description                                                        |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

### Full Example

When you put it all together:

```twig
<Button
  color="primary"
  data-toggle="modal"
  data-target="#modal-composed"
  aria-controls="modal-composed"
  aria-expanded="false"
>
  Open Modal
</Button>

<ModalComposed
  id="modal-composed"
  titleId="modal-composed-title"
>
  <ModalDialog>
    <ModalHeader
      closeLabel="Close form"
      modalId="modal-composed"
      titleId="modal-composed-title"
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
</ModalComposed>
```

## Simple Modal (DEPRECATED)

A simple version of Modal.

⚠️ **DEPRECATED:** Simple Modal will be removed in next major version in favour
of the composed Modal above.

Basic example usage:

```html
<button
  color="primary"
  data-toggle="modal"
  data-target="#modal-example"
  aria-controls="modal-example"
  aria-expanded="false"
>
  Open Modal
</button>
<Modal id="modal-example" />
```

Advanced example usage:

```html
<button
  color="primary"
  data-toggle="modal"
  data-target="#modal-example"
  aria-controls="modal-example"
  aria-expanded="false"
>
  Open Modal
</button>
<Modal id="modal-example" closeLabel="Dismiss" />
```

Without lexer:

```twig
{% embed "@spirit/modal.twig" with { props: {
    id: 'modal-example',
}} %}
    {% block content %}
        Modal content
    {% endblock %}
{% endembed %}
```

## API

| Prop name    | Type     | Default | Required | Description        |
| ------------ | -------- | ------- | -------- | ------------------ |
| `class`      | `string` | `null`  | no       | Custom CSS class   |
| `closeLabel` | `string` | `Close` | no       | Custom close label |
| `id`         | `string` | —       | yes      | Modal ID           |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

[modal]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Modal
[mdn-dialog-form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#usage_notes
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
