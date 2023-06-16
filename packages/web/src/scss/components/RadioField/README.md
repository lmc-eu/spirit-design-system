# RadioField

## Basic usage:

```html
<label for="radiofieldDefault" class="RadioField">
  <input type="radio" id="radiofieldDefault" class="RadioField__input" name="default" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## Selected state:

```html
<label for="radiofieldDefaultChecked" class="RadioField">
  <input type="radio" id="radiofieldDefaultChecked" class="RadioField__input" name="default" checked />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="radiofieldDisabled" class="RadioField RadioField--disabled">
  <input type="radio" id="radiofieldDisabled" class="RadioField__input" disabled />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## Validation States:

See Validation state [dictionary][dictionary-validation].

```html
<label for="radiofieldSuccess" class="RadioField RadioField--success">
  <input type="radio" id="radiofieldSuccess" class="RadioField__input" name="validation" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>

<label for="radiofieldWarning" class="RadioField RadioField--warning">
  <input type="radio" id="radiofieldWarning" class="RadioField__input" name="validation" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>

<label for="radiofieldDanger" class="RadioField RadioField--danger">
  <input type="radio" id="radiofieldDanger" class="RadioField__input" name="validation" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## With helper text:

```html
<label for="radiofieldHelperText" class="RadioField">
  <input type="radio" id="radiofieldHelperText" class="RadioField__input" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
    <span class="RadioField__helperText">Helper text</span>
  </span>
</label>
```

## As an Item:

```html
<label for="radiofieldItemDefault" class="RadioField RadioField--item">
  <input type="radio" id="radiofieldItemDefault" class="RadioField__input" name="item" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
  </span>
</label>
```

## As an Item wrapped with helper text:

```html
<label for="radiofieldItemHelperText" class="RadioField RadioField--item">
  <input type="radio" id="radiofieldItemHelperText" class="RadioField__input" name="item" />
  <span class="RadioField__text">
    <span class="RadioField__label">Radio Label</span>
    <span class="RadioField__helperText">Helper text</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
