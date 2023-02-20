# CheckboxField

## Basic usage:

```html
<label for="checkboxfield0" class="CheckboxField">
  <input type="checkbox" id="checkboxfield0" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox unselected</span>
  </span>
</label>
```

## Required input:

```html
<label for="checkboxfield1" class="CheckboxField">
  <input type="checkbox" id="checkboxfield1" class="CheckboxField__input" required />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Label of required input</span>
  </span>
</label>
```

## Additional message:

```html
<label for="checkboxfield2" class="CheckboxField">
  <input type="checkbox" id="checkboxfield2" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox unselected</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```

## Hidden label:

```html
<label for="checkboxfield3" class="CheckboxField">
  <input type="checkbox" id="checkboxfield3" class="CheckboxField__input" value="Filled" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--hidden">Label Hidden</span>
  </span>
</label>
```

## Validation states:

See Validation state [dictionary][dictionary-validation].

```html
<label for="checkboxfield4_0" class="CheckboxField CheckboxField--danger">
  <input type="checkbox" id="checkboxfield4_0" class="CheckboxField__input" checked />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox with danger</span>
    <span class="CheckboxField__message">Validation message</span>
  </span>
</label>
<label for="checkboxfield4_1" class="CheckboxField CheckboxField--warning">
  <input type="checkbox" id="checkboxfield4_1" class="CheckboxField__input" checked />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox with warning</span>
    <span class="CheckboxField__message">Validation message</span>
  </span>
</label>
<label for="checkboxfield4_2" class="CheckboxField CheckboxField--success">
  <input type="checkbox" id="checkboxfield4_2" class="CheckboxField__input" checked />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox with success</span>
    <span class="CheckboxField__message">Validation message</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="checkboxfield5" class="CheckboxField CheckboxField--disabled">
  <input type="checkbox" id="checkboxfield5" class="CheckboxField__input" disabled />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Label of input with indeterminate</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```

## As an Item:

```html
<label for="checkboxfield6" class="CheckboxField CheckboxField--item">
  <input type="checkbox" id="checkboxfield6" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Item</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
