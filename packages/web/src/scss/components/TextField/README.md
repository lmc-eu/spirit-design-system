# TextField

TextField enables the user to type in text information. It has input, a label,
and an optional message. It could be disabled or have an error state. The label could be hidden
and show if the input is required.

```html
<div class="TextField">
  <label for="textfield1" class="TextField__label">Label</label>
  <input type="text" id="textfield1" class="TextField__input" placeholder="Placeholder" />
</div>
<div class="TextField">
  <label for="textfield2" class="TextField__label TextField__label--required">Label of required input</label>
  <input type="text" id="textfield2" class="TextField__input" placeholder="Placeholder" required />
</div>
<div class="TextField">
  <label for="textfield3" class="TextField__label">Label of input with message</label>
  <input type="text" id="textfield3" class="TextField__input" placeholder="Placeholder" />
  <div class="TextField__message">Message</div>
</div>
<div class="TextField">
  <label for="textfield4" class="TextField__label TextField__label--hidden">Label Hidden</label>
  <input type="text" id="textfield4" class="TextField__input" placeholder="Placeholder" value="Filled" />
</div>
<div class="TextField TextField--error">
  <label for="textfield5" class="TextField__label TextField__label--required">Label of input with error</label>
  <input type="text" id="textfield5" class="TextField__input" placeholder="Placeholder" value="Filled" />
  <div class="TextField__message">Error message</div>
</div>
<div class="TextField TextField--disabled">
  <label for="textfield6" class="TextField__label TextField__label--required">Label of disabled input</label>
  <input type="text" id="textfield6" class="TextField__input" placeholder="Placeholder" disabled />
  <div class="TextField__message">Message</div>
</div>
<div class="TextField TextField--fluid">
  <label for="textfield7" class="TextField__label TextField__label--required">Label of disabled input</label>
  <input type="text" id="textfield7" class="TextField__input" placeholder="Placeholder" />
  <div class="TextField__message">Message</div>
</div>
```
