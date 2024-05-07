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
| `id`                   | `string`                                      | —        | ✓        | Modal ID                                              |
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

### Dropdowns in Modal

Dropdowns can be safely used inside **non-scrollable** Modals so that the Dropdown popover is not clipped by the Modal's
boundaries.

👉 See the [Scrolling Long Content](#scrolling-long-content) section for more information on scroll control of Modals.

### Docked Modals on Mobile Screens

On mobile screens, Modal can be docked to the bottom of the viewport using the `isDockedOnMobile` option.

```twig
<ModalDialog isDockedOnMobile>
  …
</ModalDialog>
```

#### Expanded Variant

By default, the docked dialog on mobile screens shrinks to fit the height of its content
(if smaller than the viewport). Use the `isExpandedOnMobile` option to expand the dialog on mobile.

```twig
<ModalDialog isDockedOnMobile isExpandedOnMobile>
  …
</ModalDialog>
```

### API

| Name                 | Type                          | Default   | Required | Description                                                                                                                |
| -------------------- | ----------------------------- | --------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `accept-charset`     | `string`                      | `null`    | ✕        | `elementType="form"` only: Character encodings to use for form submission (intentionally in kebab-case)                    |
| `action`             | `string`                      | `null`    | ✕        | `elementType="form"` only: URL to use for form submission                                                                  |
| `autocomplete`       | `string`                      | `null`    | ✕        | `elementType="form"` only: [Automated assistance in filling][autocomplete-attr]                                            |
| `elementType`        | `string`                      | `article` | ✕        | HTML tag to render                                                                                                         |
| `enctype`            | `string`                      | `null`    | ✕        | `elementType="form"` only: Encoding to use for form submission                                                             |
| `height`             | [`string` \| `object`]        | `null`    | ✕        | Preferred height of the modal. Accepts any valid CSS value, either as a string or an object with breakpoints as keys.      |
| `isDockedOnMobile`   | `bool`                        | `false`   | ✕        | Dock the ModalDialog to the bottom of the screen on mobile                                                                 |
| `isExpandedOnMobile` | `bool`                        | `false`   | ✕        | If the ModalDialog should expand on mobile. Overrides any height defined by `preferredHeightOnMobile`.                     |
| `isScrollable`       | `bool`                        | `true`    | ✕        | If the ModalDialog should be scrollable. If set to `false`, the dialog will not scroll and will expand to fit the content. |
| `maxHeight`          | [`string` \| `object`]        | `null`    | ✕        | Max height of the modal. Accepts any valid CSS value.                                                                      |
| `method`             | [`get` \| `post` \| `dialog`] | `null`    | ✕        | `elementType="form"` only: HTTP method to use for form submission                                                          |
| `name`               | `string`                      | `null`    | ✕        | `elementType="form"` only: Name of the form                                                                                |
| `novalidate`         | `void`                        | `null`    | ✕        | `elementType="form"` only: [If the dialog should have validation disabled][novalidate-attr]                                |
| `rel`                | `string`                      | `null`    | ✕        | `elementType="form"` only: Relationship between the current document and the linked resource                               |
| `target`             | `string`                      | `null`    | ✕        | `elementType="form"` only: Browsing context for form submission                                                            |

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
| `modalId`       | `string` | —       | ✓        | Modal ID                |
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

In case the content is longer than user's viewport or device, the ModalBody will expand to fit the height of its content
and the whole ModalDialog will scroll.

### Enable Scrolling Inside ModalDialog

Scrolling inside ModalDialog can be turned on by adding the `isScrollable` prop:

```twig
<ModalDialog isScrollable>
  …
</ModalDialog>
```

### Scrolling with ScrollView

To make content overflow more obvious to users, you can wrap the ModalBody content in a [ScrollView][scroll-view] that
takes over the responsibility for scrolling and provides visual overflow decorators, e.g.:

```twig
<ModalDialog isScrollable>
  …
  <ScrollView data-spirit-toggle="scrollView" overflowDecorators="both">
    <ModalBody>
      …Long content…
    </ModalBody>
  </ScrollView>
  …
</ModalDialog>
```

### Custom Height

By default, ModalDialog grows to the height of its content until it reaches the [maximum height](#custom-max-height)
limit.

You can set a custom preferred height of ModalDialog using the `height` prop.
The prop accepts any valid CSS value, either as a string or an object with breakpoints as keys.

The custom properties fall back to the previous breakpoint using the mobile-first approach. For example, if you set
`height="{{ { tablet: '500px' } }}"` while not setting the `desktop` breakpoint, the value will be used for
both tablet and desktop screens. The single non-object value will be used for all breakpoints.

This is useful for Modals with dynamic content, e.g. a list of items that can be added or removed, or a multistep wizard.

```twig
<ModalDialog isScrollable height="500px">
  …
</ModalDialog>
<ModalDialog isScrollable height="{{ { mobile: '300px', tablet: '500px', desktop: '600px' } }}">
  …
</ModalDialog>
```

⚠️ This feature is only available for ModalDialogs with the `isScrollable` prop.

👉 Please note the custom height values are considered **preferred**. Scrollable ModalDialog will never expand beyond
the viewport height. See the [Custom Max Height](#custom-max-height) section for more information.

### Custom Max Height

The default maximum height of a scrollable ModalDialog is **600 px**, as long as it can fit the viewport.

If the viewport is smaller, scrollable ModalDialog will shrink to fit the viewport. In such case, the ModalDialog height
will calculate as "viewport height (`100dvh`) minus 1100 spacing".

You can use the prop `maxHeight` to override the default maximum height limit.

The custom properties fall back to the previous breakpoint using the mobile-first approach. For example, if you set
`maxHeight="{{ { tablet: '500px' } }}"` while not setting the `desktop` breakpoint, the value will be used for
both tablet and desktop screens. The single non-object value will be used for all breakpoints.

```twig
<ModalDialog isScrollable maxHeight="700px">
  …
</ModalDialog>
<ModalDialog isScrollable maxHeight="{{ { mobile: '500px', tablet: '700px', desktop: '800px' } }}">
  …
</ModalDialog>
```

⚠️ This feature is only available for ModalDialogs with the `isScrollable` prop.

👉 If a [custom height](#custom-height) is set, the custom max height is only applied if it's smaller than the custom
height.

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
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[scroll-view]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/ScrollView/README.md
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Modal/README.md#javascript-plugin
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
