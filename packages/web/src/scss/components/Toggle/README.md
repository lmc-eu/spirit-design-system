# Toggle

Toggle is a form control that allows users to switch between two states.

## Basic Usage

The Toggle component implements the HTML [checkbox input][mdn-checkbox] element. It uses
the native input element and styles it to look like a toggle switch.

```html
<label for="toggle-default" class="Toggle">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
  </span>
  <input type="checkbox" id="toggle-default" class="Toggle__input" name="default" />
</label>
```

## Indicators

If you need to indicate the state of the toggle, you can add the `Toggle__input--indicators`
modifier class to the input. This will add a visual indicators to the toggle switch.

```html
<label for="toggle-indicators" class="Toggle">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
  </span>
  <input type="checkbox" id="toggle-indicators" class="Toggle__input Toggle__input--indicators" name="default" />
</label>
```

## Required

Add the `required` attribute to the input to mark it as required and add the
`Toggle__label--required` modifier class to the label to indicate the state.

```html
<label for="toggle-required" class="Toggle">
  <span class="Toggle__text">
    <span class="Toggle__label Toggle__label--required">Toggle Label</span>
  </span>
  <input type="checkbox" id="toggle-required" class="Toggle__input" name="required" required />
</label>
```

## Hidden Label

```html
<label for="toggle-hidden-label" class="Toggle">
  <span class="Toggle__text">
    <span class="Toggle__label Toggle__label--hidden">Toggle Label</span>
  </span>
  <input type="checkbox" id="toggle-hidden-label" class="Toggle__input" name="hidden-label" />
</label>
```

## Fluid

```html
<label for="toggle-fluid" class="Toggle Toggle--fluid">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
  </span>
  <input type="checkbox" id="toggle-fluid" class="Toggle__input" name="fluid" />
</label>
```

## Helper Text

```html
<label for="toggle-helper-text" class="Toggle">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
    <span class="Toggle__helperText" id="toggle-helper-text-helper-text">Helper text</span>
  </span>
  <input
    type="checkbox"
    id="toggle-helper-text"
    class="Toggle__input"
    name="helper-text"
    aria-describedby="toggle-helper-text-helper-text"
  />
</label>
```

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`Toggle--success`, `Toggle--warning`, `Toggle--danger`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-danger`). See Validation state [dictionary][dictionary-validation].

- To render validation text as a list, use `<ul>` element inside of `.Toggle__validationText`.
- To render validation text with an icon, add `<svg>` icon inside of `.Toggle__validationText`.

```html
<label for="toggle-success" class="Toggle Toggle--success">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
  </span>
  <input type="checkbox" id="toggle-success" class="Toggle__input" name="default" />
</label>

<label for="toggle-warning" class="Toggle Toggle--warning">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
    <span class="Toggle__validationText" id="toggle-warning-validation-text">Validation text</span>
  </span>
  <input
    type="checkbox"
    id="toggle-warning"
    class="Toggle__input"
    name="default"
    aria-describedby="toggle-warning-validation-text"
    checked
  />
</label>

<div class="Toggle Toggle--danger">
  <div class="Toggle__text">
    <label for="toggle-danger" class="Toggle__label">Toggle Label</label>
    <ul class="Toggle__validationText" id="toggle-danger-validation-text">
      <li>First validation text</li>
      <li>Second validation text</li>
    </ul>
  </div>
  <input
    type="checkbox"
    id="toggle-danger"
    class="Toggle__input"
    name="default"
    aria-describedby="toggle-danger-validation-text"
  />
</div>

<label for="toggle-warning" class="Toggle Toggle--warning">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
    <span class="Toggle__validationText" id="toggle-warning-validation-text">
      <svg width="20" height="20" aria-hidden="true">
        <use xlink:href="/assets/icons/svg/sprite.svg#warning" />
      </svg>
      <span>Validation text with icon</span>
    </span>
  </span>
  <input
    type="checkbox"
    id="toggle-warning"
    class="Toggle__input"
    name="default"
    aria-describedby="toggle-warning-validation-text"
    checked
  />
</label>
```

### JavaScript-Controlled Validation Text

When implementing client-side form validation, use JS interaction state classes
(`has-success`, `has-warning`, `has-danger`) on the wrapping `<div>` element and
render validation texts in a `<div>` with `data-spirit-element="validation_text"`
attribute. This way your JS remains disconnected from CSS that may or may not be
[prefixed][prefixed].

**Remember this approach is only valid for vanilla JS implementation. React
components mix CSS with JS by design and handle prefixes their own way.**

```html
<label for="toggle-success" class="Toggle has-success">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
    <div class="Toggle__validationText" id="toggle-success-validation-text" data-spirit-element="validation_text">
      Validation text
    </div>
  </span>
  <input
    type="checkbox"
    id="toggle-success"
    class="Toggle__input"
    name="default"
    aria-describedby="toggle-success-validation-text"
  />
</label>
```

To render validation text as a list, use `<ul>` element inside of `<div>`.

```html
<div class="Toggle__validationText" id="toggle-success-validation-text" data-spirit-element="validation_text">
  <ul>
    <li>First validation text</li>
    <li>Second validation text</li>
  </ul>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the input, disabled Toggle needs to
be marked by adding `Toggle--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<label for="toggle-disabled" class="Toggle Toggle--disabled">
  <span class="Toggle__text">
    <span class="Toggle__label">Toggle Label</span>
  </span>
  <input type="checkbox" id="toggle-disabled" class="Toggle__input" name="default" disabled />
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
[mdn-checkbox]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
[prefixed]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#prefixing-css-class-names
