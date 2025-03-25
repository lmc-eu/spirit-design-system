# Checkbox

## Basic Usage

```html
<div class="Checkbox">
  <input
    type="checkbox"
    id="checkbox-default"
    class="Checkbox__input"
    name="default"
    aria-labelledby="checkbox-default-label"
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label" for="checkbox-default" id="checkbox-default-label">Checkbox Label</label>
  </div>
</div>
```

## Required Input

```html
<div class="Checkbox">
  <input
    type="checkbox"
    id="checkbox-required"
    class="Checkbox__input"
    name="required"
    aria-labelledby="checkbox-required-label"
    required
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label Checkbox__label--required" for="checkbox-required" id="checkbox-required-label"
      >Checkbox Label</label
    >
  </div>
</div>
```

## Validation State with Validation Text

See Validation state [dictionary][dictionary-validation].

- To render validation text as a list, use `<ul>` element inside of `.Checkbox__validationText`.
- To render validation text with an icon, add `<svg>` icon inside of `.Checkbox__validationText`.

```html
<div class="Checkbox Checkbox--warning">
  <input
    type="checkbox"
    id="checkbox-warning"
    class="Checkbox__input"
    name="warning"
    aria-labelledby="checkbox-warning-label"
    aria-describedby="checkbox-warning-helper-text"
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label" for="checkbox-warning" id="checkbox-warning-label">Checkbox Label</label>
    <div class="Checkbox__validationText" id="checkbox-warning-helper-text">Warning validation text</div>
  </div>
</div>

<div class="Checkbox Checkbox--danger">
  <input
    type="checkbox"
    id="checkbox-danger"
    class="Checkbox__input"
    name="danger"
    aria-labelledby="checkbox-danger-label"
    aria-describedby="checkbox-danger-helper-text"
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label" for="checkbox-danger" id="checkbox-danger-label">Checkbox Label</label>
    <div class="Checkbox__validationText" id="checkbox-danger-helper-text">
      <ul>
        <li>First validation text</li>
        <li>Second validation text</li>
      </ul>
    </div>
  </div>
</div>

<div class="Checkbox Checkbox--warning">
  <input
    type="checkbox"
    id="checkbox-warning"
    class="Checkbox__input"
    name="warning"
    aria-labelledby="checkbox-warning-label"
    aria-describedby="checkbox-warning-helper-text"
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label" for="checkbox-warning" id="checkbox-warning-label">Checkbox Label</label>
    <div class="Checkbox__validationText" id="checkbox-warning-helper-text">
      <svg width="20" height="20" aria-hidden="true">
        <use xlink:href="/assets/icons/svg/sprite.svg#warning" />
      </svg>
      <span>Warning validation text with icon</span>
    </div>
  </div>
</div>
```

## Hidden Label

```html
<div class="Checkbox">
  <input
    type="checkbox"
    id="checkbox-hidden-label"
    class="Checkbox__input"
    name="hiddenLabel"
    aria-labelledby="checkbox-hidden-label-label"
    required
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label Checkbox__label--hidden" for="checkbox-hidden-label" id="checkbox-hidden-label-label"
      >Checkbox Label</label
    >
  </div>
</div>
```

## Helper Text

```html
<div class="Checkbox">
  <input
    type="checkbox"
    id="checkbox-helper-text"
    class="Checkbox__input"
    name="helperText"
    aria-labelledby="checkbox-helper-text-label"
    aria-describedby="checkbox-helper-text-helper-text"
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label" for="checkbox-helper-text" id="checkbox-helper-text-label">Checkbox Label</label>
    <div class="Checkbox__helperText" id="checkbox-helper-text-helper-text">Helper text</div>
  </div>
</div>
```

## Disabled State

```html
<div class="Checkbox Checkbox--disabled">
  <input
    type="checkbox"
    id="checkbox-disabled"
    class="Checkbox__input"
    name="disabled"
    aria-labelledby="checkbox-disabled-label"
    disabled
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label" for="checkbox-disabled" id="checkbox-disabled-label">Checkbox Label</label>
  </div>
</div>
```

## As an Item

```html
<div class="Checkbox Checkbox--item">
  <input
    type="checkbox"
    id="checkbox-item-default"
    class="Checkbox__input"
    name="item"
    aria-labelledby="checkbox-item-default-label"
  />
  <div class="Checkbox__text">
    <label class="Checkbox__label" for="checkbox-item-default" id="checkbox-item-default-label">Checkbox Label</label>
  </div>
</div>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
