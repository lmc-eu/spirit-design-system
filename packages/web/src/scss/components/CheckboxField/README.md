# CheckboxField

Basic usage:

```html
<div class="CheckboxField">
  <input type="checkbox" id="checkboxfield1" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <label for="checkboxfield1" class="CheckboxField__label">Label</span>
  </span>
</div>
```

Required input:

```html
<div class="CheckboxField">
  <input type="checkbox" id="checkboxfield2" class="CheckboxField__input" required />
  <span class="CheckboxField__text">
    <label for="checkboxfield2" class="CheckboxField__label CheckboxField__label--required">
      Label of required input
    </label>
  </span>
</div>
```

Additional message:

```html
<div class="CheckboxField">
  <input type="checkbox" id="checkboxfield3" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <label for="checkboxfield3" class="CheckboxField__label">Label of input with message</label>
    <span class="CheckboxField__message">Message</span>
  </span>
</div>
```

Hidden label:

```html
<div class="CheckboxField">
  <input type="checkbox" id="checkboxfield4" class="CheckboxField__input" value="Filled" />
  <span class="CheckboxField__text">
    <label for="checkboxfield4" class="CheckboxField__label CheckboxField__label--hidden">Label Hidden</label>
  </span>
</div>
```

Error state:

```html
<div class="CheckboxField jobs-CheckboxField--error">
  <input type="checkbox" id="checkboxfield5" class="CheckboxField__input" value="Filled" checked />
  <span class="CheckboxField__text">
    <label for="checkboxfield5" class="CheckboxField__label CheckboxField__label--required">
      Label of input with error
    </label>
    <span class="CheckboxField__message">Error message</span>
  </span>
</div>
```

Disabled state:

```html
<div class="CheckboxField jobs-CheckboxField--disabled">
  <input type="checkbox" id="checkboxfield6" class="CheckboxField__input" disabled />
  <span class="CheckboxField__text">
    <label for="checkboxfield6" class="CheckboxField__label CheckboxField__label--required">
      Label of disabled input
    </label>
    <span class="CheckboxField__message">Message</span>
  </span>
</div>
```
