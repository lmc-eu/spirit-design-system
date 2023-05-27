# Select

Basic usage:

```html
<div class="Select">
  <label for="selectSimple" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="selectSimple" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
</div>
```

Required select:

```html
<div class="Select">
  <label for="selectSimple" class="Select__label Select__label--required">Label</label>
  <div class="Select__inputContainer">
    <select id="selectSimple" class="Select__input" required>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
</div>
```

Hidden label:

```html
<div class="Select">
  <label for="selectHiddenLabel" class="Select__label Select__label--hidden">Label</label>
  <div class="Select__inputContainer">
    <select id="selectHiddenLabel" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
</div>
```

Fluid width:

```html
<div class="Select Select--fluid">
  <label for="selectFluid" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="selectFluid" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
</div>
```

Usage with helper text:

```html
<div class="Select">
  <label for="selectHelperText" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="selectHelperText" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <div class="Select__helperText">Helper Text</div>
</div>
```

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`Select--success`, `Select--warning`, `Select--danger`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-danger`, `has-error`). See Validation state [dictionary][dictionary-validation].

```html
<div class="Select Select--success">
  <label for="selectSuccess" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="selectSuccess" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
</div>

<div class="Select Select--warning">
  <label for="selectWarning" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="selectWarning" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <div class="Select__validationText">Validation Text</div>
</div>

<div class="Select Select--danger">
  <label for="selectDanger" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="selectDanger" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <ul class="Select__validationText">
    <li>First Validation text</li>
    <li>Second Validation text</li>
  </ul>
</div>
```

### JavaScript-Controlled Validation Message

When implementing client-side form validation, use JS interaction state classes
(`has-success`, `has-warning`, `has-danger`) on the wrapping `<div>` element and
render validation messages in a `<div>` with `data-spirit-element="validator_message"`
attribute. This way your JS remains disconnected from CSS that may or may not be
[prefixed].

**Remember this approach is only valid for vanilla JS implementation. React
components mix CSS with JS by design and handle prefixes their own way.**

```html
<div class="Select has-danger">
  <label for="SelectJSValidation" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="SelectJSValidation" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <div data-spirit-element="validator_message">Validation text</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the select, disabled Select should
be marked by adding `Select--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="Select Select--disabled">
  <label for="selectDisabled" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="selectDisabled" class="Select__input" disabled>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
</div>
<div class="Select is-disabled">
  <label for="selectIsDisabled" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="selectIsDisabled" class="Select__input" disabled>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
</div>
```

[prefixed]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#prefixing-css-class-names
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/README.md#deprecations
