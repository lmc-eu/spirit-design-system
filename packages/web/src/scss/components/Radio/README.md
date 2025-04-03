# Radio

## Basic Usage

```html
<div class="Radio">
  <input type="radio" id="radio-default" class="Radio__input" name="default" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-default">Radio Label</label>
  </div>
</div>
```

## Selected State

```html
<div class="Radio">
  <input type="radio" id="radio-default-checked" class="Radio__input" name="default" checked />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-default-checked">Radio Label</label>
  </div>
</div>
```

## Disabled State

```html
<div class="Radio Radio--disabled">
  <input type="radio" id="radio-disabled" class="Radio__input" name="default" disabled />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-disabled">Radio Label</label>
  </div>
</div>
```

## Validation States

See Validation state [dictionary][dictionary-validation].

```html
<div class="Radio Radio--success">
  <input type="radio" id="radio-success" class="Radio__input" name="validation" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-success">Radio Label</label>
  </div>
</div>

<div class="Radio Radio--warning">
  <input type="radio" id="radio-warning" class="Radio__input" name="validation" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-warning">Radio Label</label>
  </div>
</div>

<div class="Radio Radio--danger">
  <input type="radio" id="radio-danger" class="Radio__input" name="validation" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-danger" for="radio-danger">Radio Label</label>
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
    aria-describedby="radio-helper-text-helper-text"
  />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-helper-text" for="radio-helper-text">Radio Label</label>
    <div class="Radio__helperText" id="radio-helper-text-helper-text">Helper text</div>
  </div>
</div>
```

## As an Item

```html
<div class="Radio Radio--item">
  <input type="radio" id="radio-item-default" class="Radio__input" name="item" />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-item-default">Radio Label</label>
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
    aria-describedby="radio-item-helper-text-helper-text"
  />
  <div class="Radio__text">
    <label class="Radio__label" for="radio-item-helper-text">Radio Label</label>
    <div class="Radio__helperText" id="radio-item-helper-text-helper-text">Helper text</div>
  </div>
</div>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
