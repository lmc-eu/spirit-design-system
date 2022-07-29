# RadioField

Use RadioField when you have a group of mutually exclusive choices and only one selection from the group is allowed. It has input and label. It can be disabled or have an error state. The label can be hidden.

```html
<label for="radiofield1" class="RadioField">
  <input type="radio" id="radiofield1" name="example" class="RadioField__input" />
  <span class="RadioField__label">Radio unselected</span>
</label>
<label for="radiofield2" class="RadioField RadioField--disabled">
  <input type="radio" id="radiofield2" name="example" class="RadioField__input" disabled />
  <span class="RadioField__label">Radio unselected</span>
</label>
<label for="radiofield3" class="RadioField">
  <input type="radio" id="radiofield3" name="example" class="RadioField__input" checked />
  <span class="RadioField__label">Radio selected</span>
</label>
<label for="radiofield4" class="RadioField RadioField--disabled">
  <input type="radio" id="radiofield4" name="example2" class="RadioField__input" checked disabled />
  <span class="RadioField__label">Radio selected</span>
</label>
```
