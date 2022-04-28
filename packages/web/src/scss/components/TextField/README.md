# TextField

TextField enables the user to type in text information. It has input, a label,
and an optional message. It can be disabled or have success, warning, or error
state. The label can be hidden and show if the input is required.

```html
<div class="TextField">
  <label for="textfield1" class="TextField__label">Label</label>
  <input type="text" id="textfield1" class="TextField__input" placeholder="Placeholder" />
</div>
<div class="TextField">
  <label for="textfield2" class="TextField__label TextField__label--required">Label of required input</label>
  <input type="text" id="textfield2" class="TextField__input" placeholder="Placeholder" required />
</div>
<div class="TextField">
  <label for="textfield3" class="TextField__label">Label of input with message</label>
  <input type="text" id="textfield3" class="TextField__input" placeholder="Placeholder" />
  <div class="TextField__message">Message</div>
</div>
<div class="TextField">
  <label for="textfield4" class="TextField__label TextField__label--hidden">Label Hidden</label>
  <input type="text" id="textfield4" class="TextField__input" placeholder="Placeholder" value="Filled" />
</div>
<div class="TextField TextField--error">
  <label for="textfield5" class="TextField__label TextField__label--required">Label of input with error</label>
  <input type="text" id="textfield5" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div class="TextField__message">Error message</div>
</div>
<div class="TextField TextField--disabled">
  <label for="textfield6" class="TextField__label TextField__label--required">Label of disabled input</label>
  <input type="text" id="textfield6" class="TextField__input" placeholder="Placeholder" disabled />
  <div class="TextField__message">Message</div>
</div>
<div class="TextField TextField--fluid">
  <label for="textfield7" class="TextField__label TextField__label--required">Label of disabled input</label>
  <input type="text" id="textfield7" class="TextField__input" placeholder="Placeholder" />
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

Other meaningful values (e.g. `date`, `file`) will work but design of the input field is not consistent across platforms/browsers.

## Input Width

There are several ways to adjust the input width:

### `size` Attribute

The `size` attribute is supported on inputs of the following types: `email`, `password`, `tel`, `text`, `url`.

This option is generally recommended for inputs with a limited value length (e.g. numeric representation of day, month, year). Supported values are `2`, `3` and `4` (characters). If you need any other value or prefer using `em` unit instead of default `ch`, define a `--width` CSS custom property on the `<input>` element:

```html
<div class="TextField">
  <label for="textfield-size" class="TextField__label">4000 (in Roman numerals)</label>
  <input type="text" size="4" id="textfield-size" class="TextField__input" style="--width: 4em;" />
</div>
```

### Grid

For other use cases (wider input or input with unknown value length), we recommend placing them inside the Grid component and using `TextField--fluid` modifier to fill the available space.

## TextField Password Toggle

TextField with `type="password"` can have a toggle button. When toggling don't forget to change
not only the input type but also `aria-pressed` and `aria-label`.

```html
<div class="TextField">
  <label for="textfieldPasswordToggle" class="TextField__label TextField__label--required">Password Toggle</label>
  <div class="TextField__passwordToggle">
    <button
      type="button"
      class="TextField__passwordToggle__button"
      role="switch"
      aria-pressed="false"
      aria-label="Show password"
      data-toggle="password"
    >
      <span class="TextField__passwordToggle__icon" aria-hidden="true"></span>
    </button>
    <input
      type="password"
      id="textfieldPasswordToggle"
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
  <label for="textfieldValidation1" class="TextField__label TextField__label--required">
    Label of input with error
  </label>
  <input type="text" id="textfieldValidation1" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div class="TextField__message">Error message</div>
</div>
<div class="TextField has-error">
  <label for="textfieldValidation2" class="TextField__label TextField__label--required">
    Label of input with error
  </label>
  <input type="text" id="textfieldValidation2" class="TextField__input" placeholder="Placeholder" value="Filled" />
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
  <label for="textfieldJSValidation1" class="TextField__label TextField__label--required">
    Label of input with error
  </label>
  <input type="text" id="textfieldJSValidation1" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div data-element="validator_message">Error message inserted by JS</div>
</div>
```

## Disabled TextField

On top of adding the `disabled` attribute to the input, disabled TextField can
be marked by adding `TextField--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="TextField TextField--disabled">
  <label for="textfieldDisabled1" class="TextField__label TextField__label--required">Label of disabled input</label>
  <input type="text" id="textfieldDisabled1" class="TextField__input" placeholder="Placeholder" disabled />
  <div class="TextField__message">Message</div>
</div>
<div class="TextField is-disabled">
  <label for="textfieldDisabled2" class="TextField__label TextField__label--required">Label of disabled input</label>
  <input type="text" id="textfieldDisabled2" class="TextField__input" placeholder="Placeholder" disabled />
  <div class="TextField__message">Message</div>
</div>
```

[prefixed]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
