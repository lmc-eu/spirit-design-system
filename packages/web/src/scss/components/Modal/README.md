# Modal

Modal is a composition of several subcomponents:

- [Modal](#modal-1)
  - [ModalDialog](#modaldialog)
    - [ModalHeader](#modalheader)
    - [ModalBody](#modalfooter)
    - [ModalFooter](#modalfooter)

## Modal

Modal establishes the layer with backdrop. Under the hood it uses the
[`<dialog>` element][mdn-dialog] which provides several accessibility
advantages.

```html
<dialog id="example_1" class="Modal" aria-labelledby="example_1_title">
  <!-- ModalDialog -->
</dialog>
```

👉 Please note the `aria-labelledby` attribute is linked to the title inside
[ModalHeader](#modalheader) and provides an accessible name for the dialog.

### Custom Preferred Height

By default, Modal expands to fit the height of its content, as long as it fits the viewport (see [more below](#custom-max-height)).
You can override this behavior by setting a custom preferred height using a custom property:

- `--modal-preferred-height-mobile` for mobile screens, and
- `--modal-preferred-height-tablet` for tablet screens and up.

This is useful for Modals with dynamic content, e.g. a list of items that can be added or removed, or a multistep wizard.

```html
<dialog
  id="example_1"
  class="Modal"
  aria-labelledby="example_1_title"
  style="--modal-preferred-height-mobile: 400px; --modal-preferred-height-tablet: 500px;"
>
  <!-- ModalDialog -->
</dialog>
```

### Custom Max Height

The default maximum height of Modal is:

- viewport height minus 1100 spacing on mobile screens, and
- 600 px on tablet screens and up (shrunk if necessary).

You can use the custom property `--modal-max-height-tablet` to override the max height on tablet screens and up:

```html
<dialog id="example_1" class="Modal" aria-labelledby="example_1_title" style="--modal-max-height-tablet: 700px">
  <!-- ModalDialog -->
</dialog>
```

👉 Please note the max height on mobile screens is currently not customizable. Let us know if you need this feature! 🙏

## ModalDialog

ModalDialog is the actual dialog window, a place for the header, body, and
footer of the dialog.

```html
<article class="ModalDialog">
  <!-- ModalHeader -->
  <!-- ModalBody -->
  <!-- ModalFooter -->
</article>
```

### Forms in Modal

Modal can also contain interactive content like forms. For such cases, you may
find convenient to use the `<form>` element with the attribute
`method="dialog"`. Buttons with `type="submit"` then
[handle both][mdn-dialog-form] saving the state of the form and closing the
dialog.

```html
<form class="ModalDialog" method="dialog">
  <!-- … -->
</form>
```

### Expand on Mobile Screens

We recommend to expand the dialog on mobile screens using the
`ModalDialog--expandOnMobile` modifier class. If you omit the class, the dialog
shrinks to fit the height of its content (if smaller than viewport).

## ModalHeader

ModalHeader contains the title of the dialog and the close button.

```html
<div class="ModalHeader">
  <h2 id="example_1_title" class="ModalHeader__title">Modal Title</h2>
  <button
    type="button"
    class="Button Button--tertiary Button--square Button--medium"
    data-dismiss="modal"
    data-target="#example_1"
    aria-controls="example_1"
    aria-expanded="false"
  >
    <svg class="Icon" width="24" height="24" aria-hidden="true">
      <use xlink:href="/icons/svg/sprite.svg#close" />
    </svg>
    <span class="accessibility-hidden">Close</span>
  </button>
</div>
```

👉 Even in cases you don't need the title to be visible you should provide an
accessible name for the dialog, e.g. using the `aria-label` attribute:

```html
<dialog id="example_1" class="Modal" aria-label="Accessible Modal Title">
  <!-- … -->
</dialog>
```

## ModalBody

ModalBody holds the actual content of the Modal.

```html
<div class="ModalBody">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
    perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis provident
    unde. Eveniet, iste, molestiae?
  </p>
</div>
```

### Feature Flag to Enable Extra Padding

⚠️ This feature flag is only temporary and will be removed in version 1. The extra vertical padding will be made default.

To enable vertical padding on ModalBody, add the feature class `spirit-v1-modal-body-padding` to a parent element.
The preferred one is the `body` element because this way it will affect all Modal components everywhere.

```html
<body class="spirit-v1-modal-body-padding">
  <!-- Modal -->
</body>
```

## ModalFooter

ModalFooter is the place for actions represented by the Button component.
While there always must be a primary Button, secondary actions are optional.

👉 Please note the actions are _visually_ ordered from right to left from the
tablet breakpoint up. However, the _actual_ order in code is followed when users
tab over the interface.

```html
<div class="ModalFooter ModalFooter--right">
  <div class="ModalFooter__actions">
    <button type="button" class="Button Button--primary Button--medium" data-dismiss="modal" data-target="#example_1">
      Primary action
    </button>
    <button type="button" class="Button Button--secondary Button--medium" data-dismiss="modal" data-target="#example_1">
      Secondary action
    </button>
  </div>
</div>
```

### Footer Description

Optionally, you can add a description into the footer:

```html
<div class="ModalFooter ModalFooter--right">
  <div class="ModalFooter__description">Optional description</div>
  <div class="ModalFooter__actions">
    <!-- Actions… -->
  </div>
</div>
```

### Footer Alignment

ModalFooter can be aligned to the right (default), center, or left.
These values come from the [dictionary][dictionary-alignment].
Using a corresponding modifier class:

- `ModalFooter--right` (default)
- `ModalFooter--center`
- `ModalFooter--left`

## Opening the Modal

Use our JavaScript plugin to open your Modal, e.g.:

```html
<button
  type="button"
  class="Button Button--primary Button--medium"
  data-toggle="modal"
  data-target="#example_1"
  aria-controls="example_1"
  aria-expanded="false"
>
  Open Modal
</button>
```

## Scrolling Long Content

When Modals become too long for the user's viewport or device, they scroll independent of the page itself. By default,
ModalBody has `overflow-y: auto` applied to it, so it scrolls vertically.

Alternatively, you can wrap the ModalBody content in a [ScrollView][scroll-view] to take over the responsibility for
scrolling, e.g.:

```html
<article class="ModalDialog">
  <!-- ModalHeader -->
  <div class="ScrollView ScrollView--vertical" data-toggle="scrollView">
    <div class="ScrollView__viewport" data-spirit-element="viewport">
      <div class="ScrollView__content" data-spirit-element="content">
        <div class="ModalBody">
          <!-- … -->
        </div>
      </div>
    </div>
    <div class="ScrollView__overflowDecorators ScrollView__overflowDecorators--borders" aria-hidden="true"></div>
  </div>
  <!-- ModalFooter -->
</article>
```

## Full Example

When you put it all together:

```html
<!-- Modal Trigger: start -->
<button
  type="button"
  class="Button Button--primary Button--medium"
  data-toggle="modal"
  data-target="#example_1"
  aria-controls="example_1"
  aria-expanded="false"
>
  Open Modal
</button>
<!-- Modal Trigger: end -->

<!-- Modal: start -->
<dialog id="example_1" class="Modal" aria-labelledby="example_1_title">
  <!-- ModalDialog: start -->
  <article class="ModalDialog">
    <!-- ModalHeader: start -->
    <div class="ModalHeader">
      <h2 id="example_1_title" class="ModalHeader__title">Modal Title</h2>
      <button
        type="button"
        class="Button Button--tertiary Button--square Button--medium"
        data-dismiss="modal"
        data-target="#example_1"
        aria-controls="example_1"
        aria-expanded="false"
      >
        <svg class="Icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#close" />
        </svg>
        <span class="accessibility-hidden">Close</span>
      </button>
    </div>
    <!-- ModalHeader: end -->

    <!-- ModalBody: start -->
    <div class="ModalBody">
      <!-- Content: start -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
        perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis provident
        unde. Eveniet, iste, molestiae?
      </p>
      <!-- Content: end -->
    </div>
    <!-- ModalBody: end -->

    <!-- ModalFooter: start -->
    <div class="ModalFooter ModalFooter--right">
      <div class="ModalFooter__description">Optional description</div>
      <div class="ModalFooter__actions">
        <button
          type="button"
          class="Button Button--primary Button--medium"
          data-dismiss="modal"
          data-target="#example_1"
        >
          Primary action
        </button>
        <button
          type="button"
          class="Button Button--secondary Button--medium"
          data-dismiss="modal"
          data-target="#example_1"
        >
          Secondary action
        </button>
      </div>
    </div>
    <!-- ModalFooter: end -->
  </article>
  <!-- ModalDialog: end -->
</dialog>
<!-- Modal: end -->
```

## Toggle Attributes

Both trigger and close buttons use `data` attributes to open and close the Modal.

| Prop name       | Type     | Default | Required | Description                |
| --------------- | -------- | ------- | -------- | -------------------------- |
| `aria-controls` | `string` | -       | no       | Aria controls state (auto) |
| `aria-expanded` | `string` | -       | no       | Aria expanded state (auto) |
| `data-dismiss`  | `string` | `modal` | no       | Iterable selector          |
| `data-target`   | `string` | -       | yes      | Target selector            |
| `data-toggle`   | `string` | `modal` | no       | Iterable selector          |

## State Classes

If there is more content that could fit the screen, ModalBody provides
the following state classes:

- `.is-scrolled-at-top` if there is content overflowing at the top,
- `.is-scrolled-at-bottom` if there is content overflowing at the bottom.

## JavaScript Plugin

For full functionality you need to provide JavaScript which will handle toggling of the Modal dialog component.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult [main package README][web-readme] for how to include JavaScript plugins.

Or feel free to write controlling scripts yourself.

[mdn-dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[mdn-dialog-form]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#usage_notes
[scroll-view]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/ScrollView/README.md
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#alignment
