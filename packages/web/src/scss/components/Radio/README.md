# Radio

## Basic usage:

```html
<label for="radio-default" class="Radio">
  <input type="radio" id="radio-default" class="Radio__input" name="default" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## Selected state:

```html
<label for="radio-default-checked" class="Radio">
  <input type="radio" id="radio-default-checked" class="Radio__input" name="default" checked />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="radio-disabled" class="Radio Radio--disabled">
  <input type="radio" id="radio-disabled" class="Radio__input" name="default" disabled />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## Validation States:

See Validation state [dictionary][dictionary-validation].

```html
<label for="radio-success" class="Radio Radio--success">
  <input type="radio" id="radio-success" class="Radio__input" name="validation" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>

<label for="radio-warning" class="Radio Radio--warning">
  <input type="radio" id="radio-warning" class="Radio__input" name="validation" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>

<label for="radio-danger" class="Radio Radio--danger">
  <input type="radio" id="radio-danger" class="Radio__input" name="validation" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## With helper text:

```html
<label for="radio-helper-text" class="Radio">
  <input type="radio" id="radio-helper-text" class="Radio__input" name="helperText" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
    <span class="Radio__helperText">Helper text</span>
  </span>
</label>
```

## As an Item:

```html
<label for="radio-item-default" class="Radio Radio--item">
  <input type="radio" id="radio-item-default" class="Radio__input" name="item" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## As an Item wrapped with helper text:

```html
<label for="radio-item-helper-text" class="Radio Radio--item">
  <input type="radio" id="radio-item-helper-text" class="Radio__input" name="item" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
    <span class="Radio__helperText">Helper text</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
