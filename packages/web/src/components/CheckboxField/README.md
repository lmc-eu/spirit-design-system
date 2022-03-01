# CheckboxField

CheckboxField enables the user to check/uncheck choice. It has input, a label,
and an optional message. It can be disabled or have an error state. The label can be hidden
and show if the input is required.

```html
<label for="checkboxfield1" class="CheckboxField">
  <input type="checkbox" id="checkboxfield1" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Label</span>
  </span>
</label>
<label for="checkboxfield2" class="CheckboxField">
  <input type="checkbox" id="checkboxfield2" class="CheckboxField__input" required />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Label of required input</span>
  </span>
</label>
<label for="checkboxfield3" class="CheckboxField">
  <input type="checkbox" id="checkboxfield3" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Label of input with message</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
<label for="checkboxfield4" class="CheckboxField">
  <input type="checkbox" id="checkboxfield4" class="CheckboxField__input" value="Filled" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--hidden">Label Hidden</span>
  </span>
</label>
<label for="checkboxfield5" class="CheckboxField jobs-CheckboxField--error">
  <input type="checkbox" id="checkboxfield5" class="CheckboxField__input" value="Filled" checked />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Label of input with error</span>
    <span class="CheckboxField__message">Error message</span>
  </span>
</label>
<label for="checkboxfield6" class="CheckboxField jobs-CheckboxField--disabled">
  <input type="checkbox" id="checkboxfield6" class="CheckboxField__input" disabled />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Label of disabled input</span>
    <span class="CheckboxField__message">Message</span>
  </span>
</label>
```
