# TextArea

Basic usage:

```html
<div class="TextArea">
  <label for="textareaDefault" class="TextArea__label">Label</label>
  <textarea id="textareaDefault" class="TextArea__input" placeholder="Placeholder"></textarea>
</div>
```

Required textarea:

```html
<div class="TextArea">
  <label for="textareaRequired" class="TextArea__label TextArea__label--required">Label</label>
  <textarea id="textareaRequired" class="TextArea__input" placeholder="Placeholder"></textarea>
</div>
```

Hidden label:

```html
<div class="TextArea">
  <label for="textareaHiddenLabel" class="TextArea__label TextArea__label--hidden">Hidden Label</label>
  <textarea id="textareaHiddenLabel" class="TextArea__input" placeholder="Placeholder">Filled</textarea>
</div>
```

Fluid width:

```html
<div class="TextArea TextArea--fluid">
  <label for="textareaFluid" class="TextArea__label">Label</label>
  <textarea id="textareaFluid" class="TextArea__input" placeholder="Placeholder"></textarea>
</div>
```

Helper text:

```html
<div class="TextArea">
  <label for="textareaHelperText" class="TextArea__label">Label</label>
  <textarea id="textareaHelperText" class="TextArea__input" placeholder="Placeholder"></textarea>
  <div class="TextArea__helperText">Helper Text</div>
</div>
```

## Input Width

There are several ways to adjust the textarea width:

### `rows` Attribute

The number of visible text lines for the control. Supported values are positive integers from `3` up.

```html
<div class="TextArea">
  <label for="TextAreaRows" class="TextArea__label">Label</label>
  <textarea id="TextAreaRows" class="TextArea__input" rows="3"></textarea>
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
  <label for="textareaAutoResize" class="TextArea__label">Label of auto-resizing TextArea</label>
  <textarea id="textareaAutoResize" class="TextArea__input"></textarea>
</div>
```

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`TextArea--success`, `TextArea--warning`, `TextArea--danger`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-danger`). See Validation state [dictionary][dictionary-validation].

```html
<div class="TextArea TextArea--danger">
  <label for="textareaDanger" class="TextArea__label">Label</label>
  <textarea id="textareaDanger" class="TextArea__input" placeholder="Placeholder">Filled</textarea>
  <div class="TextArea__validationText">Error Validation Text</div>
</div>
<div class="TextArea has-danger">
  <label for="textareaDangerHasDanger" class="TextArea__label">Label</label>
  <textarea id="textareaDangerHasDanger" class="TextArea__input" placeholder="Placeholder">Filled</textarea>
  <div class="TextArea__validationText">Error Validation Text</div>
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
  <label for="TextAreaJSValidation" class="TextArea__label">Label</label>
  <textarea id="TextAreaJSValidation" class="TextArea__input" placeholder="Placeholder">Filled</textarea>
  <div data-element="validator_message">Error message inserted by JS</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the textarea, disabled TextArea can
be marked by adding `TextArea--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="TextArea TextArea--disabled">
  <label for="textareaDisabled" class="TextArea__label">Label</label>
  <textarea id="textareaDisabled" class="TextArea__input" placeholder="Placeholder" disabled></textarea>
</div>
<div class="TextArea TextArea--disabled">
  <label for="textareaDisabledFilled" class="TextArea__label">Label</label>
  <textarea id="textareaDisabledFilled" class="TextArea__input" placeholder="Placeholder" disabled>Filled</textarea>
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
    <label for="textareaDisabledV1" class="TextArea__label">Label</label>
    <textarea id="textareaDisabledV1" class="TextArea__input" placeholder="Placeholder" disabled></textarea>
  </div>
  ...
</body>
```

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[prefixed]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/README.md#deprecations
