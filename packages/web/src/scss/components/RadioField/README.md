# RadioField

## Basic usage:

```html
<label for="radiofield0" class="RadioField">
  <input type="radio" id="radiofield0" name="example" class="RadioField__input" />
  <span class="RadioField__text">
    <span class="RadioField__label">Label</span>
  </span>
</label>
```

## Selected state:

```html
<label for="radiofield1" class="RadioField">
  <input type="radio" id="radiofield1" name="example" class="RadioField__input" checked />
  <span class="RadioField__text">
    <span class="RadioField__label">Label selected</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="radiofield2_0" class="RadioField RadioField--disabled">
  <input type="radio" id="radiofield2_0" name="example" class="RadioField__input" disabled />
  <span class="RadioField__text">
    <span class="RadioField__label">Unselected disabled label</span>
  </span>
</label>
<label for="radiofield2_1" class="RadioField RadioField--disabled">
  <input type="radio" id="radiofield2_1" name="example2" class="RadioField__input" checked disabled />
  <span class="RadioField__text">
    <span class="RadioField__label">Selected disabled label</span>
  </span>
</label>
```

## Validation states:

See Validation state [dictionary][dictionary-validation].

```html
<label for="radiofield3_0" class="RadioField RadioField--danger">
  <input type="radio" id="radiofield3_0" name="example" class="RadioField__input" checked />
  <span class="RadioField__text">
    <span class="RadioField__label">Label with danger</span>
  </span>
</label>
<label for="radiofield3_1" class="RadioField RadioField--warning">
  <input type="radio" id="radiofield3_1" name="example" class="RadioField__input" checked />
  <span class="RadioField__text">
    <span class="RadioField__label">Label with warning</span>
  </span>
</label>
<label for="radiofield3_2" class="RadioField RadioField--success">
  <input type="radio" id="radiofield3_2" name="example" class="RadioField__input" checked />
  <span class="RadioField__text">
    <span class="RadioField__label">Label with success</span>
  </span>
</label>
```

## With helper text:

```html
<label for="radiofield4" class="RadioField">
  <input type="radio" id="radiofield4" name="example" class="RadioField__input" checked />
  <span class="RadioField__text">
    <span class="RadioField__label">Label selected</span>
    <span class="RadioField__helperText">Helper text</span>
  </span>
</label>
```

## As an Item:

```html
<label for="radiofield5" class="RadioField RadioField--item">
  <input type="radio" id="radiofield5" name="example" class="RadioField__input" checked />
  <span class="RadioField__text">
    <span class="RadioField__label">Item</span>
  </span>
</label>
```

## As an Item wrapped with helper text:

```html
<label for="radiofield6" class="RadioField RadioField--item">
  <input type="radio" id="radiofield6" class="RadioField__input" />
  <span class="RadioField__text">
    <span class="RadioField__label">Item</span>
    <span class="RadioField__helperText">Helper text</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
