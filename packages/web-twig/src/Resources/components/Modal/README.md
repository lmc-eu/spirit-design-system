# Modal

This is the Twig implementation of the [Modal][modal] component.

Modal is a composition of several subcomponents:

- [Modal](#modal)
  - [ModalDialog](#modaldialog)
    - [ModalHeader](#modalheader)
    - [ModalBody](#modalfooter)
    - [ModalFooter](#modalfooter)

## Modal

Modal establishes the top layer with a backdrop. Under the hood it uses the [`<dialog>` element][mdn-dialog] which
provides several accessibility advantages.

```twig
<Modal id="modal-example" titleId="modal-example-title">
  …
</Modal>
```

👉 Please note the `titleId` attribute is linked to the title inside the [Modal Header](#modalheader) and provides an
accessible name for the dialog.

### Vertical Alignment

Modal can be aligned to the center (default), top, or bottom. These values come from the
[alignment dictionary][dictionary-alignment]. Using a corresponding alignment option will align the modal accordingly:

- `top`
- `center` (default)
- `bottom`

Example:

```twig
<Modal alignmentY="top" id="modal-example" titleId="modal-example-title">
  …
</Modal>
```

### API

| Name                   | Type                                          | Default  | Required | Description                                           |
| ---------------------- | --------------------------------------------- | -------- | -------- | ----------------------------------------------------- |
| `alignmentY`           | [AlignmentY dictionary][dictionary-alignment] | `center` | ✕        | Vertical alignment of modal                           |
| `closeOnBackdropClick` | `bool`                                        | `true`   | ✕        | Whether the modal will close when backdrop is clicked |
| `id`                   | `string`                                      | —        | ✔        | Modal ID                                              |
| `titleId`              | `string`                                      | `null`   | ✕        | ID of the title inside ModalHeader                    |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## ModalDialog

ModalDialog is the actual dialog window, a place for the header, body, and footer of the dialog.

```twig
<ModalDialog>
  …
</ModalDialog>
```

### Forms in Modal

Modal can also contain interactive content like forms. For such cases, you may find it convenient to use the `<form>`
element with the attribute `method="dialog"`. Buttons with `type="submit"` then [handle both][mdn-dialog-form] saving
the state of the form and closing the dialog.

```twig
<ModalDialog elementType="form" method="dialog" name="modal-example">
  …
  <Button type="submit">Save</Button>
</ModalDialog>
```

### Expand on Mobile Screens

We recommend expanding the dialog on mobile screens using the `isExpandedOnMobile` option. If you omit the option, the
dialog shrinks to fit the height of its content (if smaller than the viewport).

```twig
<ModalDialog isExpandedOnMobile>
  …
</ModalDialog>
```

### Custom Height

By default, Modal expands to fit the height of its content, as long as it fits the viewport (see [more below](#custom-max-height)).
You can override this behavior by setting a preferred height using the following options:

- `preferredHeightOnMobile` for mobile screens, and
- `preferredHeightFromTabletUp` for tablet screens and up.

This is useful for Modals with dynamic content, e.g. a list of items that can be added or removed, or a multistep wizard.

```twig
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

```twig
<ModalDialog maxHeightFromTabletUp="700px">
  …
</ModalDialog>
```

👉 Please note the max height on mobile screens is currently not customizable. Let us know if you need this feature! 🙏

### API

| Name                          | Type                          | Default   | Required | Description                                                                                                                              |
| ----------------------------- | ----------------------------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `accept-charset`              | `string`                      | `null`    | ✕        | `elementType="form"` only: Character encodings to use for form submission (intentionally in kebab-case)                                  |
| `action`                      | `string`                      | `null`    | ✕        | `elementType="form"` only: URL to use for form submission                                                                                |
| `autocomplete`                | `string`                      | `null`    | ✕        | `elementType="form"` only: [Automated assistance in filling][autocomplete-attr]                                                          |
| `elementType`                 | `string`                      | `article` | ✕        | HTML tag to render                                                                                                                       |
| `enctype`                     | `string`                      | `null`    | ✕        | `elementType="form"` only: Encoding to use for form submission                                                                           |
| `isDockedOnMobile`            | `bool`                        | `false`   | ✕        | [REQUIRES FEATURE FLAG](#feature-flag-uniform-appearance-on-all-breakpoints): Dock the ModalDialog to the bottom of the screen on mobile |
| `isExpandedOnMobile`          | `bool`                        | `true`    | ✕        | If the ModalDialog should expand on mobile. Overrides any height defined by `preferredHeightOnMobile`.                                   |
| `maxHeightFromTabletUp`       | `string`                      | `null`    | ✕        | Max height of the modal. Accepts any valid CSS value.                                                                                    |
| `method`                      | [`get` \| `post` \| `dialog`] | `null`    | ✕        | `elementType="form"` only: HTTP method to use for form submission                                                                        |
| `name`                        | `string`                      | `null`    | ✕        | `elementType="form"` only: Name of the form                                                                                              |
| `novalidate`                  | `void`                        | `null`    | ✕        | `elementType="form"` only: [If the dialog should have validation disabled][novalidate-attr]                                              |
| `preferredHeightFromTabletUp` | `string`                      | `null`    | ✕        | Preferred height of the modal on tablet and larger. Accepts any valid CSS value.                                                         |
| `preferredHeightOnMobile`     | `string`                      | `null`    | ✕        | Preferred height of the modal on mobile. Accepts any valid CSS value.                                                                    |
| `rel`                         | `string`                      | `null`    | ✕        | `elementType="form"` only: Relationship between the current document and the linked resource                                             |
| `target`                      | `string`                      | `null`    | ✕        | `elementType="form"` only: Browsing context for form submission                                                                          |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## ModalHeader

ModalHeader contains the title of the dialog and the close button.

ℹ️ We strongly recommend providing the ModalHeader in every use case to ensure the dialog is accessible
and allows users to easily close it.

```twig
<ModalHeader modalId="modal-example" titleId="modal-example-title">
  Title of the Modal
</ModalHeader>
```

### Hidden Title

Even in cases you don't need the title to be visible you should provide an accessible name for the dialog, e.g.
using the `aria-label` attribute on `<Modal>` component:

```twig
<Modal id="modal-example" aria-label="Accessible Modal Title">
  <ModalDialog>
    <ModalHeader modalId="modal-example" />
    <ModalBody>
      …
    </ModalBody>
  </ModalDialog>
</Modal>
```

### API

| Name            | Type     | Default | Required | Description             |
| --------------- | -------- | ------- | -------- | ----------------------- |
| `closeLabel`    | `string` | `Close` | ✕        | Custom close label      |
| `enableDismiss` | `bool`   | `true`  | ✕        | Enable JS Modal dismiss |
| `modalId`       | `string` | —       | ✔        | Modal ID                |
| `titleId`       | `string` | `null`  | ✕        | ID of the title         |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## ModalBody

ModalBody holds the actual content of the Modal.

```twig
<ModalBody>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
    perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis provident
    unde. Eveniet, iste, molestiae?
  </p>
</ModalBody>
```

### API

There are no API options for ModalBody.

The components accept [additional attributes][readme-additional-attributes].
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

```twig
<ModalFooter>
  <Button color="primary">Primary action</Button>
  <Button color="secondary">Secondary action</Button>
</ModalFooter>
```

### Footer Description

Optionally, you can add a description into the footer:

```twig
<ModalFooter description="Optional description">
  …
</ModalFooter>
```

### Footer Alignment

ModalFooter can be aligned to the right (default), center, or left. These values come from the
[alignment dictionary][dictionary-alignment]. Using a corresponding alignment option will align the footer actions
accordingly:

- `right` (default)
- `center`
- `left`

```twig
<ModalFooter alignmentX="right">
  …
</ModalFooter>
```

### API

| Name          | Type                                          | Default | Required | Description                 |
| ------------- | --------------------------------------------- | ------- | -------- | --------------------------- |
| `alignmentX`  | [AlignmentX dictionary][dictionary-alignment] | `right` | ✕        | Alignment of Footer Actions |
| `description` | `string`                                      | `null`  | ✕        | Optional Footer Description |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Opening the Modal

Use our JavaScript plugin to open your Modal, e.g.:

```twig
<Button
  data-spirit-toggle="modal"
  data-spirit-target="#modal-example"
  aria-controls="modal-example"
  aria-expanded="false"
>
    Open Modal
</Button>
```

## Scrolling Long Content

When Modals become too long for the user's viewport or device, they automatically scroll independently of the page itself.

### Scrolling with ScrollView

To make content overflow more obvious to users, you can wrap the ModalBody content in a [ScrollView][scroll-view] that
takes over the responsibility for scrolling and provides visual overflow decorators, e.g.:

```twig
<ScrollView data-spirit-toggle="scrollView" overflowDecorators="both">
  <ModalBody>
    …Long content…
  </ModalBody>
</ScrollView>
```

## Stacking Modals

Multiple Modals can be open at the same time. That means, you can open a Modal from another Modal, and they will display
stacked on top of each other. The topmost Modal is always the one that is **last in the DOM**.

```twig
<!-- First Modal: -->
<Modal id="modal-first" titleId="modal-first-title"></Modal>
<!-- This Modal will stack up on the previous Modal: -->
<Modal id="modal-topmost" titleId="modal-topmost-title"></Modal>
```

👉 Please note that Modals **cannot be nested** into each other **in the DOM**.

## Full Example

When you put it all together:

```twig
<Button
  data-spirit-toggle="modal"
  data-spirit-target="#modal-example"
  aria-controls="modal-example"
  aria-expanded="false"
>
  Open Modal
</Button>

<Modal id="modal-example" titleId="modal-example-title">
  <ModalDialog>
    <ModalHeader modalId="modal-example" titleId="modal-example-title">
      Title of the Modal
    </ModalHeader>
    <ScrollView data-spirit-toggle="scrollView" overflowDecorators="both">
      <ModalBody>
        <p>Modal body</p>
      </ModalBody>
    </ScrollView>
    <ModalFooter alignmentX="left" description="Modal footer description">
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

## Feature Flag: Uniform Appearance on All Breakpoints

The uniform appearance of modal dialog on all breakpoints is disabled by default. To enable it, either set the
`$modal-enable-uniform-dialog` Sass feature flag to `true` or use the `spirit-feature-modal-enable-uniform-dialog` CSS
class on any parent of the modal.

For more info, see main [README][readme-feature-flags].

### ⚠️ DEPRECATION NOTICE

The uniform dialog appearance will replace current behavior in the next major release. Current mobile appearance will
remain accessible via the `isDockedOnMobile` property.

[What are deprecations?][readme-deprecations]

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[autocomplete-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
[mdn-dialog-form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#usage_notes
[mdn-dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[modal]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Modal
[novalidate-attr]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#deprecations
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[scroll-view]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/ScrollView/README.md
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Modal/README.md#javascript-plugin
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
