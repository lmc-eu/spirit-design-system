# Radio

## Basic usage:

```html
<label for="radioDefault" class="Radio">
  <input type="radio" id="radioDefault" class="Radio__input" name="default" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## Selected state:

```html
<label for="radioDefaultChecked" class="Radio">
  <input type="radio" id="radioDefaultChecked" class="Radio__input" name="default" checked />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="radioDisabled" class="Radio Radio--disabled">
  <input type="radio" id="radioDisabled" class="Radio__input" name="default" disabled />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## Validation States:

See Validation state [dictionary][dictionary-validation].

```html
<label for="radioSuccess" class="Radio Radio--success">
  <input type="radio" id="radioSuccess" class="Radio__input" name="validation" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>

<label for="radioWarning" class="Radio Radio--warning">
  <input type="radio" id="radioWarning" class="Radio__input" name="validation" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>

<label for="radioDanger" class="Radio Radio--danger">
  <input type="radio" id="radioDanger" class="Radio__input" name="validation" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## With helper text:

```html
<label for="radioHelperText" class="Radio">
  <input type="radio" id="radioHelperText" class="Radio__input" name="helperText" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
    <span class="Radio__helperText">Helper text</span>
  </span>
</label>
```

## As an Item:

```html
<label for="radioItemDefault" class="Radio Radio--item">
  <input type="radio" id="radioItemDefault" class="Radio__input" name="item" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
  </span>
</label>
```

## As an Item wrapped with helper text:

```html
<label for="radioItemHelperText" class="Radio Radio--item">
  <input type="radio" id="radioItemHelperText" class="Radio__input" name="item" />
  <span class="Radio__text">
    <span class="Radio__label">Radio Label</span>
    <span class="Radio__helperText">Helper text</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
