# TextArea

Basic usage:

```html
<div class="TextArea">
  <label for="TextArea1" class="TextArea__label">Label</label>
  <textarea id="TextArea1" class="TextArea__input" placeholder="Placeholder"></textarea>
</div>
```

Required textarea:

```html
<div class="TextArea">
  <label for="TextArea2" class="TextArea__label TextArea__label--required">Label of required textarea</label>
  <textarea id="TextArea2" class="TextArea__input" placeholder="Placeholder" required></textarea>
</div>
```

Additional message:

```html
<div class="TextArea">
  <label for="TextArea3" class="TextArea__label">Label of textarea with message</label>
  <textarea id="TextArea3" class="TextArea__input" placeholder="Placeholder"></textarea>
  <div class="TextArea__message">Message</div>
</div>
```

Hidden label:

```html
<div class="TextArea">
  <label for="TextArea4" class="TextArea__label TextArea__label--hidden">Label hidden</label>
  <textarea id="TextArea4" class="TextArea__input" placeholder="Placeholder">Filled</textarea>
</div>
```

Fluid width:

```html
<div class="TextArea TextArea--fluid">
  <label for="TextArea7" class="TextArea__label">Label of a fluid textarea</label>
  <textarea id="TextArea7" class="TextArea__input" placeholder="Placeholder"></textarea>
  <div class="TextArea__message">Message</div>
</div>
```

Usage with helper text:

```html
<div class="TextArea">
  <label for="TextArea-helperText" class="TextArea__label">Label</label>
  <textarea id="TextArea-helperText" class="TextArea__input" placeholder="Placeholder"></textarea>
  <div class="TextArea__helperText">Helper text</div>
</div>
```

## Input Width

There are several ways to adjust the textarea width:

### `rows` Attribute

The number of visible text lines for the control. Supported values are positive integers from `3` up.

```html
<div class="TextArea">
  <label for="TextArea-rows" class="TextArea__label">Label</label>
  <textarea rows="3" id="TextArea-rows" class="TextArea__input"></textarea>
</div>
```

### Grid

For other use cases (wider textarea or textarea with unknown value length), we
recommend placing them inside the Grid component and using `TextArea--fluid`
modifier to fill the available space.

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`TextArea--success`, `TextArea--warning`, `TextArea--danger`, `TextArea--error`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-danger`, `has-error`). See Validation state [dictionary][dictionary-validation].

[**DEPRECATED**][deprecated] The value "error" in the dictionary will be replaced by the value "danger".

```html
<div class="TextArea TextArea--danger">
  <label for="TextAreaValidation1" class="TextArea__label TextArea__label--required">
    Label of textarea with error
  </label>
  <textarea id="TextAreaValidation1" class="TextArea__input" placeholder="Placeholder" required>Filled</textarea>
  <div class="TextArea__message">Error message</div>
</div>
<div class="TextArea has-danger">
  <label for="TextAreaValidation2" class="TextArea__label TextArea__label--required">
    Label of textarea with error
  </label>
  <textarea id="TextAreaValidation2" class="TextArea__input" placeholder="Placeholder" required>Filled</textarea>
  <div class="TextArea__message">Error message</div>
</div>
```

### JavaScript-Controlled Validation Message

When implementing client-side form validation, use JS interaction state classes
(`has-success`, `has-warning`, `has-danger`, `has-error`) on the wrapping `<div>` element and
render validation messages in a `<div>` with `data-element="validator_message"`
attribute. This way your JS remains disconnected from CSS that may or may not be
[prefixed].

[**DEPRECATED**][deprecated] The value "has-error" in the dictionary will be replaced by the value "has-danger".

**Remember this approach is only valid for vanilla JS implementation. React
components mix CSS with JS by design and handle prefixes their own way.**

```html
<div class="TextArea has-danger">
  <label for="TextAreaJSValidation1" class="TextArea__label TextArea__label--required">
    Label of textarea with error
  </label>
  <textarea id="TextAreaJSValidation1" class="TextArea__input" placeholder="Placeholder" required>Filled</textarea>
  <div data-element="validator_message">Error message inserted by JS</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the textarea, disabled TextArea can
be marked by adding `TextArea--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="TextArea TextArea--disabled">
  <label for="TextAreaDisabled1" class="TextArea__label TextArea__label--required">Label of disabled textarea</label>
  <textarea id="TextAreaDisabled1" class="TextArea__input" placeholder="Placeholder" disabled required></textarea>
  <div class="TextArea__message">Message</div>
</div>
<div class="TextArea is-disabled">
  <label for="TextAreaDisabled2" class="TextArea__label TextArea__label--required">Label of disabled textarea</label>
  <textarea id="TextAreaDisabled2" class="TextArea__input" placeholder="Placeholder" disabled required></textarea>
  <div class="TextArea__message">Message</div>
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
    <label for="textareaDisabledFeature" class="TextArea__label TextArea__label--required">Label</label>
    <textarea id="textareaDisabledFeature" class="TextArea__input" placeholder="Placeholder" disabled></textarea>
  </div>
  ...
</body>
```

[prefixed]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/README.md#deprecations
