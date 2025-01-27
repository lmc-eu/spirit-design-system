# TextField

Basic usage:

```html
<div class="TextField">
  <label for="text-field-default" class="TextField__label">Label</label>
  <input type="text" id="text-field-default" class="TextField__input" name="default" placeholder="Placeholder" />
</div>
```

Required input:

```html
<div class="TextField">
  <label for="text-field-required" class="TextField__label TextField__label--required">Label</label>
  <input
    type="text"
    id="text-field-required"
    class="TextField__input"
    name="required"
    placeholder="Placeholder"
    required
  />
</div>
```

Hidden label:

```html
<div class="TextField">
  <label for="text-field-hidden-label" class="TextField__label TextField__label--hidden">Label</label>
  <input
    type="text"
    id="text-field-hidden-label"
    class="TextField__input"
    name="hiddenLabel"
    placeholder="Placeholder"
  />
</div>
```

Fluid width:

```html
<div class="TextField TextField--fluid">
  <label for="text-field-fluid" class="TextField__label">Label</label>
  <input
    type="text"
    id="text-field-fluid"
    class="TextField__input"
    name="fluid"
    placeholder="Placeholder"
    value="Filled"
  />
</div>
```

Helper Text:

```html
<div class="TextField">
  <label for="text-field-helper-text" class="TextField__label">Label</label>
  <input type="text" id="text-field-helper-text" class="TextField__input" name="helperText" placeholder="Placeholder" />
  <div class="TextField__helperText">Helper text</div>
</div>
```

## Supported Type Attribute Values

TextField supports the following input types:

- `email`
- `number`
- `password`
- `search`
- `tel`
- `text`
- `url`

Other meaningful values (for example `date`, `file`) will work but the design of the
input field will not be consistent across platforms/browsers.

## Input Width

There are several ways to adjust the input width:

### Size Attribute

The `size` attribute is supported on inputs of the following types: `email`,
`password`, `tel`, `text`, `url`.

This option is generally recommended for inputs with a limited value length
(for example numeric representation of day, month, year). Supported values are `2`, `3`
and `4` (characters). If you need any other value or prefer using `em` unit
instead of default `ch`, define a `--text-field-input-width` CSS custom property on the `<input>`
element:

```html
<div class="TextField">
  <label for="text-field-size" class="TextField__label">4000 (in Roman numerals)</label>
  <input type="text" size="4" id="text-field-size" class="TextField__input" name="size" placeholder="Placeholder" />
</div>
<div class="TextField">
  <label for="text-field-size-em" class="TextField__label">4000 (in Roman numerals)</label>
  <input
    type="text"
    size="4"
    id="text-field-size-em"
    class="TextField__input"
    name="sizeEm"
    placeholder="Placeholder"
    style="--text-field-input-width: 4em;"
  />
</div>
```

### Grid

For other use cases (wider input or input with unknown value length), we
recommend placing them inside the Grid component and using `TextField--fluid`
modifier to fill the available space.

## JavaScript Plugin for Password Toggle

TextField with `type="password"` can have a toggle button. When toggling don't
forget to change not only the input type but also `aria-pressed` and
`aria-label`.

To enable password toggle, first, you need to provide Spirit JavaScript,
which will handle the functionality:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript
plugins.

Then you need to add data attribute `data-spirit-toggle="password"` to the input.

```html
<div class="TextField">
  <label for="text-field-password-toggle" class="TextField__label">Password Toggle</label>
  <div class="TextField__passwordToggle">
    <input
      type="password"
      id="text-field-password-toggle"
      class="TextField__input"
      name="passwordToggle"
      placeholder="Password must be at least 6 characters long"
    />
    <button
      type="button"
      class="TextField__passwordToggle__button"
      role="switch"
      aria-pressed="false"
      aria-label="Show password"
      data-spirit-toggle="password"
    >
      <span class="TextField__passwordToggle__icon TextField__passwordToggle__icon--hidden">
        <svg width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#visibility-on" />
        </svg>
      </span>
      <span class="TextField__passwordToggle__icon TextField__passwordToggle__icon--shown">
        <svg width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#visibility-off" />
        </svg>
      </span>
    </button>
  </div>
</div>
```

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`TextField--success`, `TextField--warning`, `TextField--danger`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-danger`). See Validation state [dictionary][dictionary-validation].

```html
<div class="TextField TextField--success">
  <label for="text-field-success" class="TextField__label">Label</label>
  <input
    type="text"
    id="text-field-success"
    class="TextField__input"
    name="success"
    placeholder="Placeholder"
    value="Filled"
  />
</div>

<div class="TextField TextField--warning">
  <label for="text-field-warning" class="TextField__label">Label</label>
  <input
    type="text"
    id="text-field-warning"
    class="TextField__input"
    name="warning"
    placeholder="Placeholder"
    value="Filled"
  />
  <div class="TextField__validationText">Validation text</div>
</div>

<div class="TextField TextField--danger">
  <label for="text-field-danger" class="TextField__label">Label</label>
  <input
    type="text"
    id="text-field-danger"
    class="TextField__input"
    name="danger"
    placeholder="Placeholder"
    value="Filled"
  />
  <div class="TextField__validationText">
    <ul>
      <li>Validation text</li>
      <li>Second validation text</li>
    </ul>
  </div>
</div>
```

### JavaScript-Controlled Validation Text

When implementing client-side form validation, use JS interaction state classes
(`has-success`, `has-warning`, `has-danger`) on the wrapping `<div>` element and
render validation texts in a `<div>` or `<ul>` with `data-spirit-element="validation_text"`
attribute. This way your JS remains disconnected from CSS that may or may not be
[prefixed][prefixed].

**Remember this approach is only valid for vanilla JS implementation. React
components mix CSS with JS by design and handle prefixes their own way.**

```html
<div class="TextField has-danger">
  <label for="text-field-has-danger" class="TextField__label">Label</label>
  <input
    type="text"
    id="text-field-has-danger"
    class="TextField__input"
    name="hasDanger"
    placeholder="Placeholder"
    value="Filled"
  />
  <div data-spirit-element="validation_text">Error message inserted by JS</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the input, disabled TextField can
be marked by adding `TextField--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="TextField TextField--disabled">
  <label for="text-field-disabled" class="TextField__label">Label</label>
  <input
    type="text"
    id="text-field-disabled"
    class="TextField__input"
    name="disabled"
    placeholder="Placeholder"
    disabled
  />
</div>

<div class="TextField TextField--disabled">
  <label for="text-field-disabled-filled" class="TextField__label TextField__label--required">Label</label>
  <input
    type="text"
    id="text-field-disabled-filled"
    class="TextField__input"
    name="disabledFilled"
    placeholder="Placeholder"
    disabled
    required
    value="Filled"
  />
</div>
```

[prefixed]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#prefixing-css-class-names
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
