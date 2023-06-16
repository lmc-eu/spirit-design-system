# TextArea

Basic usage:

```html
<div class="TextArea">
  <label for="textAreaDefault" class="TextArea__label">Label</label>
  <textarea id="textAreaDefault" class="TextArea__input" name="default" placeholder="Placeholder"></textarea>
</div>
```

Required textarea:

```html
<div class="TextArea">
  <label for="textAreaRequired" class="TextArea__label TextArea__label--required">Label</label>
  <textarea id="textAreaRequired" class="TextArea__input" name="required" placeholder="Placeholder"></textarea>
</div>
```

Hidden label:

```html
<div class="TextArea">
  <label for="textAreaHiddenLabel" class="TextArea__label TextArea__label--hidden">Hidden Label</label>
  <textarea id="textAreaHiddenLabel" class="TextArea__input" name="hiddenLabel" placeholder="Placeholder">
Filled</textarea
  >
</div>
```

Fluid width:

```html
<div class="TextArea TextArea--fluid">
  <label for="textAreaFluid" class="TextArea__label">Label</label>
  <textarea id="textAreaFluid" class="TextArea__input" name="fluid" placeholder="Placeholder"></textarea>
</div>
```

Helper text:

```html
<div class="TextArea">
  <label for="textAreaHelperText" class="TextArea__label">Label</label>
  <textarea id="textAreaHelperText" class="TextArea__input" name="helperText" placeholder="Placeholder"></textarea>
  <div class="TextArea__helperText">Helper text</div>
</div>
```

## Input Width

There are several ways to adjust the textarea width:

### `rows` Attribute

The number of visible text lines for the control. Supported values are positive integers from `3` up.

```html
<div class="TextArea">
  <label for="TextAreaRows" class="TextArea__label">Label</label>
  <textarea id="TextAreaRows" class="TextArea__input" rows="3" name="rows"></textarea>
</div>
```

### Grid

For other use cases (wider textarea or textarea with unknown value length), we
recommend placing them inside the Grid component and using `TextArea--fluid`
modifier to fill the available space.

## JavaScript Plugin for Auto-Resizing

To enable auto-resizing of the textarea, first, you need to provide Spirit JavaScript,
which will handle the functionality:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript
plugins.

Then you need to add data attribute `data-toggle="autoResize"` to the component.

```html
<div class="TextArea" data-toggle="autoResize">
  <label for="textAreaAutoResize" class="TextArea__label">Label of auto-resizing TextArea</label>
  <textarea id="textAreaAutoResize" class="TextArea__input" name="autoResize"></textarea>
</div>
```

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`TextArea--success`, `TextArea--warning`, `TextArea--danger`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-danger`). See Validation state [dictionary][dictionary-validation].

```html
<div class="TextArea TextArea--danger">
  <label for="textAreaDanger" class="TextArea__label">Label</label>
  <textarea id="textAreaDanger" class="TextArea__input" name="danger" placeholder="Placeholder">Filled</textarea>
  <div class="TextArea__validationText">Danger validation text</div>
</div>
<div class="TextArea has-danger">
  <label for="textAreaDangerHasDanger" class="TextArea__label">Label</label>
  <textarea id="textAreaDangerHasDanger" class="TextArea__input" name="hasDanger" placeholder="Placeholder">
Filled</textarea
  >
  <div class="TextArea__validationText">Danger validation text</div>
</div>
```

### JavaScript-Controlled Validation Text

When implementing client-side form validation, use JS interaction state classes
(`has-success`, `has-warning`, `has-danger`) on the wrapping `<div>` element and
render validation texts in a `<div>` with `data-element="validator_message"`
attribute. This way your JS remains disconnected from CSS that may or may not be
[prefixed].

**Remember this approach is only valid for vanilla JS implementation. React
components mix CSS with JS by design and handle prefixes their own way.**

```html
<div class="TextArea has-danger">
  <label for="textAreaJSValidation" class="TextArea__label">Label</label>
  <textarea id="textAreaJSValidation" class="TextArea__input" name="jsValidation" placeholder="Placeholder">
Filled</textarea
  >
  <div data-element="validator_message">Error message inserted by JS</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the textarea, disabled TextArea can
be marked by adding `TextArea--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="TextArea TextArea--disabled">
  <label for="textAreaDisabled" class="TextArea__label">Label</label>
  <textarea id="textAreaDisabled" class="TextArea__input" name="disabled" placeholder="Placeholder" disabled></textarea>
</div>
<div class="TextArea TextArea--disabled">
  <label for="textAreaDisabledFilled" class="TextArea__label">Label</label>
  <textarea
    id="textAreaDisabledFilled"
    class="TextArea__input"
    name="disabledFilled"
    placeholder="Placeholder"
    disabled
  >
Filled</textarea
  >
</div>
```

### Feature flag to enable a new disabled style

⚠️ This feature flag is only temporary and will be removed in version 1. The new disabled style will be made default.

To enable a new disabled style, add the feature class `spirit-v1-box-field-disabled` to a parent element.
The preferred one is the `body` element because this way it will affect all TextArea components everywhere.

```html
<body class="spirit-v1-box-field-disabled">
  ...
  <div class="TextArea TextArea--disabled">
    <label for="textAreaDisabledV1" class="TextArea__label">Label</label>
    <textarea
      id="textAreaDisabledV1"
      class="TextArea__input"
      name="disabled"
      placeholder="Placeholder"
      disabled
    ></textarea>
  </div>
  ...
</body>
```

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[prefixed]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
