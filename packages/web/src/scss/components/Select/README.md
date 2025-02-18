# Select

Basic usage:

```html
<div class="Select">
  <label for="select-simple" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-simple" name="simple" class="Select__input">
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

Required select (requires a placeholder option):

```html
<div class="Select">
  <label for="select-simple" class="Select__label Select__label--required">Label</label>
  <div class="Select__inputContainer">
    <select id="select-simple" name="simple" class="Select__input" required>
      <option value="" selected>Select an option</option>
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
  <label for="select-hidden-label" class="Select__label Select__label--hidden">Label</label>
  <div class="Select__inputContainer">
    <select id="select-hidden-label" name="hiddenLabel" class="Select__input">
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

Placeholder:

Use the `option` with no value and the `selected` attribute. This
creates a placeholder in the selection list.

If you must fill out the selection list, also use the `disabled`
attribute for the placeholder. This way, the form can't be sent
until the user picks a real option, not the placeholder. This makes
sure users give all needed details before sending the form.

```html
<div class="Select">
  <label for="select-placeholder" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-placeholder" name="placeholder" class="Select__input">
      <option value="" selected>Select option</option>
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

<div class="Select">
  <label for="select-placeholder-disabled" class="Select__label Select__label--required">Label</label>
  <div class="Select__inputContainer">
    <select id="select-placeholder-disabled" name="placeholderDisabled" class="Select__input" required>
      <option value="" selected disabled>Select option (default is disabled)</option>
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
  <label for="select-fluid" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-fluid" name="fluid" class="Select__input">
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
  <label for="select-helper-text" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-helper-text" name="helperText" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <div class="Select__helperText">Helper text</div>
</div>
```

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`Select--success`, `Select--warning`, `Select--danger`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-danger`). See Validation state [dictionary][dictionary-validation].

- To render validation text as a list, use `<ul>` element inside of `<div>`.
- To render validation text with an icon, add class `Select__validationText--hasIcon` and `<svg>` element inside of `<div>`.

```html
<div class="Select Select--success">
  <label for="select-success" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-success" name="success" class="Select__input">
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
  <label for="select-warning" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-warning" name="warning" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <div class="Select__validationText">Validation text</div>
</div>

<div class="Select Select--danger">
  <label for="select-danger" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-danger" name="danger" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <div class="Select__validationText">
    <ul>
      <li>First validation text</li>
      <li>Second validation text</li>
    </ul>
  </div>
</div>

<div class="Select Select--warning">
  <label for="select-warning" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-warning" name="warning" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <div class="Select__validationText Select__validationText--hasIcon">
    <svg width="20" height="20" aria-hidden="true">
      <use xlink:href="/assets/icons/svg/sprite.svg#warning" />
    </svg>
    <span>Validation text with icon</span>
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
<div class="Select has-danger">
  <label for="select-js-validation" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-js-validation" name="jsValidation" class="Select__input">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </select>
    <div class="Select__icon">
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#chevron-down" />
      </svg>
    </div>
  </div>
  <div data-spirit-element="validation_text">Validation text</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the select, disabled Select should
be marked by adding `Select--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="Select Select--disabled">
  <label for="select-disabled" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-disabled" name="disabled" class="Select__input" disabled>
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
  <label for="select-is-disabled" class="Select__label">Label</label>
  <div class="Select__inputContainer">
    <select id="select-is-disabled" name="isDisabled" class="Select__input" disabled>
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

[prefixed]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#prefixing-css-class-names
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
