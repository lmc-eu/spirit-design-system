# TextField

Basic usage:

```html
<div class="TextField">
  <label for="textfield" class="TextField__label">Label</label>
  <input type="text" id="textfield" class="TextField__input" placeholder="Placeholder" />
</div>
```

Required input:

```html
<div class="TextField">
  <label for="textfield-required" class="TextField__label TextField__label--required">Label of required input</label>
  <input type="text" id="textfield-required" class="TextField__input" placeholder="Placeholder" required />
</div>
```

Additional message:

```html
<div class="TextField">
  <label for="textfield-message" class="TextField__label">Label of input with message</label>
  <input type="text" id="textfield-message" class="TextField__input" placeholder="Placeholder" />
  <div class="TextField__message">Message</div>
</div>
```

Hidden label:

```html
<div class="TextField">
  <label for="textfield-label-hidden" class="TextField__label TextField__label--hidden">Label Hidden</label>
  <input type="text" id="textfield-label-hidden" class="TextField__input" placeholder="Placeholder" value="Filled" />
</div>
```

Fluid width:

```html
<div class="TextField TextField--fluid">
  <label for="textfield-fluid" class="TextField__label">Label of a fluid input</label>
  <input type="text" id="textfield-fluid" class="TextField__input" placeholder="Placeholder" />
  <div class="TextField__message">Message</div>
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
  <label for="textfield-size" class="TextField__label">4000 (in Roman numerals)</label>
  <input type="text" size="4" id="textfield-size" class="TextField__input" style="--width: 4em;" />
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
  <label for="textfield-password-toggle" class="TextField__label TextField__label--required">Password Toggle</label>
  <div class="TextField__passwordToggle">
    <button
      type="button"
      class="TextField__passwordToggle__button"
      role="switch"
      aria-pressed="false"
      aria-label="Show password"
      data-toggle="password"
    >
      <span class="TextField__passwordToggle__icon TextField__passwordToggle__icon--hidden">
        <svg class="Icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#visibility-on" />
        </svg>
      </span>
      <span class="TextField__passwordToggle__icon TextField__passwordToggle__icon--shown">
        <svg class="Icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#visibility-off" />
        </svg>
      </span>
    </button>
    <input
      type="password"
      id="textfield-password-toggle"
      class="TextField__input"
      placeholder="Password must be at least 6 characters long"
    />
  </div>
</div>
```

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`TextField--success`, `TextField--warning`, `TextField--error`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-error`).

```html
<div class="TextField TextField--error">
  <label for="textfield-validation-1" class="TextField__label TextField__label--required">
    Label of input with error
  </label>
  <input type="text" id="textfield-validation-1" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div class="TextField__message">Error message</div>
</div>
<div class="TextField has-error">
  <label for="textfield-validation-2" class="TextField__label TextField__label--required">
    Label of input with error
  </label>
  <input type="text" id="textfield-validation-2" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div class="TextField__message">Error message</div>
</div>
```

### JavaScript-Controlled Validation Message

When implementing client-side form validation, use JS interaction state classes
(`has-success`, `has-warning`, `has-error`) on the wrapping `<div>` element and
render validation messages in a `<div>` with `data-element="validator_message"`
attribute. This way your JS remains disconnected from CSS that may or may not be
[prefixed].

**Remember this approach is only valid for vanilla JS implementation. React
components mix CSS with JS by design and handle prefixes their own way.**

```html
<div class="TextField has-error">
  <label for="textfield-js-validation" class="TextField__label TextField__label--required">
    Label of input with error
  </label>
  <input type="text" id="textfield-js-validation" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div data-element="validator_message">Error message inserted by JS</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the input, disabled TextField can
be marked by adding `TextField--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="TextField TextField--disabled">
  <label for="textfield-disabled-1" class="TextField__label TextField__label--required">Label of disabled input</label>
  <input type="text" id="textfield-disabled-1" class="TextField__input" placeholder="Placeholder" disabled />
  <div class="TextField__message">Message</div>
</div>
<div class="TextField is-disabled">
  <label for="textfield-disabled-2" class="TextField__label TextField__label--required">Label of disabled input</label>
  <input type="text" id="textfield-disabled-2" class="TextField__input" placeholder="Placeholder" disabled />
  <div class="TextField__message">Message</div>
</div>
```

[prefixed]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
