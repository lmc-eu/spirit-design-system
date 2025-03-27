# Radio

## Basic Usage

```html
<div class="Radio">
  <input type="radio" id="radio-default" class="Radio__input" name="default" aria-labelledby="radio-default-label" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-default" id="radio-default-label">Radio Label</label>
  </div>
</div>
```

## Selected State

```html
<div class="Radio">
  <input
    type="radio"
    id="radio-default-checked"
    class="Radio__input"
    name="default"
    aria-labelledby="radio-default-checked-label"
    checked
  />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-default-checked" id="radio-default-checked-label">Radio Label</label>
  </div>
</div>
```

## Disabled State

```html
<div class="Radio Radio--disabled">
  <input
    type="radio"
    id="radio-disabled"
    class="Radio__input"
    name="default"
    aria-labelledby="radio-disabled-label"
    disabled
  />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-disabled" id="radio-disabled-label">Radio Label</label>
  </div>
</div>
```

## Validation States

See Validation state [dictionary][dictionary-validation].

```html
<div class="Radio Radio--success">
  <input type="radio" id="radio-success" class="Radio__input" name="validation" aria-labelledby="radio-success-label" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-success" for="radio-success-label">Radio Label</label>
  </div>
</div>

<div class="Radio Radio--warning">
  <input type="radio" id="radio-warning" class="Radio__input" name="validation" aria-labelledby="radio-warning-label" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-warning" id="radio-warning-label">Radio Label</label>
  </div>
</div>

<div class="Radio Radio--danger">
  <input type="radio" id="radio-danger" class="Radio__input" name="validation" aria-labelledby="radio-danger-label" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-danger" for="radio-danger-label">Radio Label</label>
  </div>
</div>
```

## With Helper Text

```html
<div class="Radio">
  <input
    type="radio"
    id="radio-helper-text"
    class="Radio__input"
    name="helperText"
    aria-labelledby="radio-helper-text-label"
    aria-describedby="radio-helper-text-helper-text"
  />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-helper-text" for="radio-helper-text-label">Radio Label</label>
    <div class="Radio__helperText" id="radio-helper-text-helper-text">Helper text</div>
  </div>
</div>
```

## As an Item

```html
<div class="Radio Radio--item">
  <input
    type="radio"
    id="radio-item-default"
    class="Radio__input"
    name="item"
    aria-labelledby="radio-item-default-label"
  />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-item-default" id="radio-item-default-label">Radio Label</label>
  </div>
</div>
```

## As an Item Wrapped with Helper Text

```html
<div class="Radio Radio--item">
  <input
    type="radio"
    id="radio-item-helper-text"
    class="Radio__input"
    name="item"
    aria-labelledby="radio-item-helper-text-label"
    aria-describedby="radio-item-helper-text-helper-text"
  />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-item-helper-text" for="radio-item-helper-text-label">Radio Label</label>
    <div class="Radio__helperText" id="radio-item-helper-text-helper-text">Helper text</div>
  </div>
</div>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
