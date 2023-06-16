# RadioField

## Basic usage:

```html
<label for="radioFieldDefault" class="RadioField">
  <input type="radio" id="radioFieldDefault" class="RadioField__input" name="default" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## Selected state:

```html
<label for="radioFieldDefaultChecked" class="RadioField">
  <input type="radio" id="radioFieldDefaultChecked" class="RadioField__input" name="default" checked />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="radioFieldDisabled" class="RadioField RadioField--disabled">
  <input type="radio" id="radioFieldDisabled" class="RadioField__input" name="default" disabled />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## Validation States:

See Validation state [dictionary][dictionary-validation].

```html
<label for="radioFieldSuccess" class="RadioField RadioField--success">
  <input type="radio" id="radioFieldSuccess" class="RadioField__input" name="validation" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>

<label for="radioFieldWarning" class="RadioField RadioField--warning">
  <input type="radio" id="radioFieldWarning" class="RadioField__input" name="validation" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>

<label for="radioFieldDanger" class="RadioField RadioField--danger">
  <input type="radio" id="radioFieldDanger" class="RadioField__input" name="validation" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## With helper text:

```html
<label for="radioFieldHelperText" class="RadioField">
  <input type="radio" id="radioFieldHelperText" class="RadioField__input" name="helperText" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
    <span class="RadioField__helperText">Helper text</span>
  </span>
</label>
```

## As an Item:

```html
<label for="radioFieldItemDefault" class="RadioField RadioField--item">
  <input type="radio" id="radioFieldItemDefault" class="RadioField__input" name="item" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## As an Item wrapped with helper text:

```html
<label for="radioFieldItemHelperText" class="RadioField RadioField--item">
  <input type="radio" id="radioFieldItemHelperText" class="RadioField__input" name="item" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
    <span class="RadioField__helperText">Helper text</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
