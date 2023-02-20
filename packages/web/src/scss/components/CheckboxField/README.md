# CheckboxField

Basic usage:

```html
<label for="checkboxfield1" class="CheckboxField">
  <input type="checkbox" id="checkboxfield1" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox unselected</span>
  </span>
</label>
```

Required input:

```html
<label for="checkboxfield9" class="CheckboxField">
  <input type="checkbox" id="checkboxfield9" class="CheckboxField__input" required />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Label of required input</span>
  </span>
</label>
```

Additional message:

```html
<label for="checkboxfield2" class="CheckboxField">
  <input type="checkbox" id="checkboxfield2" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox unselected</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```

Hidden label:

```html
<label for="checkboxfield10" class="CheckboxField">
  <input type="checkbox" id="checkboxfield10" class="CheckboxField__input" value="Filled" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--hidden">Label Hidden</span>
  </span>
</label>
```

Danger state:

```html
<label for="checkboxfield6" class="CheckboxField CheckboxField--danger">
  <input type="checkbox" id="checkboxfield6" class="CheckboxField__input" checked />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox selected</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```

Error state (Deprecated):

```html
<label for="checkboxfield6" class="CheckboxField CheckboxField--error">
  <input type="checkbox" id="checkboxfield6" class="CheckboxField__input" checked />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox selected</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```

Disabled state:

```html
<label for="checkboxfield17" class="CheckboxField CheckboxField--disabled">
  <input type="checkbox" id="checkboxfield17" class="CheckboxField__input" disabled />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Label of input with indeterminate</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```

As an Item:

```html
<label for="checkboxfield17" class="CheckboxField CheckboxField--item">
  <input type="checkbox" id="checkboxfield17" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Item</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```
