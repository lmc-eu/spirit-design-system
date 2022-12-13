# RadioField

Basic usage:

```html
<label for="radiofield1" class="RadioField">
  <input type="radio" id="radiofield1" name="example" class="RadioField__input" />
  <span class="RadioField__label">Label</span>
</label>
```

Selected state:

```html
<label for="radiofield3" class="RadioField">
  <input type="radio" id="radiofield3" name="example" class="RadioField__input" checked />
  <span class="RadioField__label">Label selected</span>
</label>
```

Disabled state:

```html
<label for="radiofield2" class="RadioField RadioField--disabled">
  <input type="radio" id="radiofield2" name="example" class="RadioField__input" disabled />
  <span class="RadioField__label">Unselected disabled label</span>
</label>
<label for="radiofield4" class="RadioField RadioField--disabled">
  <input type="radio" id="radiofield4" name="example2" class="RadioField__input" checked disabled />
  <span class="RadioField__label">Selected disabled label</span>
</label>
```

As an Item:

```html
<label for="radiofield5" class="RadioField RadioField--item">
  <input type="radio" id="radiofield5" name="example" class="RadioField__input" checked />
  <span class="RadioField__label">Item</span>
</label>
```
