# TextField

Basic usage:

```html
<div class="TextField">
  <label for="textfieldDefault" class="TextField__label">Label</label>
  <input type="text" id="textfieldDefault" class="TextField__input" placeholder="Placeholder" />
</div>
```

Required input:

```html
<div class="TextField">
  <label for="textfieldRequired" class="TextField__label TextField__label--required">Label</label>
  <input type="text" id="textfieldRequired" class="TextField__input" placeholder="Placeholder" required />
</div>
```

Hidden label:

```html
<div class="TextField">
  <label for="textfieldHiddenLabel" class="TextField__label TextField__label--hidden">Label</label>
  <input type="text" id="textfieldHiddenLabel" class="TextField__input" placeholder="Placeholder" />
</div>
```

Fluid width:

```html
<div class="TextField TextField--fluid">
  <label for="textfieldFluid" class="TextField__label">Label</label>
  <input type="text" id="textfieldFluid" class="TextField__input" placeholder="Placeholder" value="Filled" />
</div>
```

Helper Text:

```html
<div class="TextField">
  <label for="textfieldHelperText" class="TextField__label">Label</label>
  <input type="text" id="textfieldHelperText" class="TextField__input" placeholder="Placeholder" />
  <div class="TextField__helperText">Helper Text</div>
</div>
```

## Supported `type` Values

TextField supports the following input types:

- `email`
- `number`
- `password`
- `search`
- `tel`
- `text`
- `url`

Other meaningful values (e.g. `date`, `file`) will work but the design of the
input field will not be consistent across platforms/browsers.

## Input Width

There are several ways to adjust the input width:

### `size` Attribute

The `size` attribute is supported on inputs of the following types: `email`,
`password`, `tel`, `text`, `url`.

This option is generally recommended for inputs with a limited value length
(e.g. numeric representation of day, month, year). Supported values are `2`, `3`
and `4` (characters). If you need any other value or prefer using `em` unit
instead of default `ch`, define a `--width` CSS custom property on the `<input>`
element:

```html
<div class="TextField">
  <label for="textfieldSize" class="TextField__label">4000 (in Roman numerals)</label>
  <input type="text" size="4" id="textfieldSize" class="TextField__input" placeholder="Placeholder" />
</div>
<div class="TextField">
  <label for="textfieldSizeEm" class="TextField__label">4000 (in Roman numerals)</label>
  <input
    type="text"
    size="4"
    id="textfieldSizeEm"
    class="TextField__input"
    placeholder="Placeholder"
    style="--width: 4em;"
  />
</div>
```

### Grid

For other use cases (wider input or input with unknown value length), we
recommend placing them inside the Grid component and using `TextField--fluid`
modifier to fill the available space.

## Password Toggle

TextField with `type="password"` can have a toggle button. When toggling don't
forget to change not only the input type but also `aria-pressed` and
`aria-label`.

```html
<div class="TextField">
  <label for="textfieldPasswordToggle" class="TextField__label">Password Toggle</label>
  <div class="TextField__passwordToggle">
    <input
      type="password"
      id="textfieldPasswordToggle"
      class="TextField__input"
      placeholder="Password must be at least 6 characters long"
    />
    <button
      type="button"
      class="TextField__passwordToggle__button"
      role="switch"
      aria-pressed="false"
      aria-label="Show password"
      data-toggle="password"
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
  <label for="textfieldSuccess" class="TextField__label">Label</label>
  <input type="text" id="textfieldSuccess" class="TextField__input" placeholder="Placeholder" value="Filled" />
</div>

<div class="TextField TextField--warning">
  <label for="textfieldWarning" class="TextField__label">Label</label>
  <input type="text" id="textfieldWarning" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div class="TextField__validationText">Validation text</div>
</div>

<div class="TextField TextField--danger">
  <label for="textfieldDanger" class="TextField__label">Label</label>
  <input type="text" id="textfieldDanger" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <ul class="TextField__validationText">
    <li>Validation Text</li>
    <li>Second Validation Text</li>
  </ul>
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
<div class="TextField has-danger">
  <label for="textfieldHasDanger" class="TextField__label">Label</label>
  <input type="text" id="textfieldHasDanger" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div data-element="validator_message">Error message inserted by JS</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the input, disabled TextField can
be marked by adding `TextField--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="TextField TextField--disabled">
  <label for="textfieldDisabled" class="TextField__label">Label</label>
  <input type="text" id="textfieldDisabled" class="TextField__input" placeholder="Placeholder" disabled />
</div>

<div class="TextField TextField--disabled">
  <label for="textfieldDisabledFilled" class="TextField__label TextField__label--required">Label</label>
  <input
    type="text"
    id="textfieldDisabledFilled"
    class="TextField__input"
    placeholder="Placeholder"
    disabled
    required
    value="Filled"
  />
</div>
```

### Feature flag to enable a new disabled style

⚠️ This feature flag is only temporary and will be removed in version 1. The new disabled style will be made default.

To enable a new disabled style, add the feature class `spirit-v1-box-field-disabled` to a parent element.
The preferred one is the `body` element because this way it will affect all TextField components everywhere.

```html
<body class="spirit-v1-box-field-disabled">
  ...
  <div class="TextField TextField--disabled">
    <label for="textfieldDisabledV1" class="TextField__label TextField__label--required">Label</label>
    <input type="text" id="textfieldDisabledV1" class="TextField__input" placeholder="Placeholder" disabled />
  </div>
  ...
</body>
```

[prefixed]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/README.md#deprecations
