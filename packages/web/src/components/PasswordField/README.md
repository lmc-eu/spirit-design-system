# PasswordField

PasswordField enables the user to type in a password or any other secret text. It has input, label,
and an optional message. It could be disabled or have one of the following states: success, warning,
error. The label could be hidden and show if the input is required.

```html
<div class="PasswordField">
  <label for="PasswordField1" class="PasswordField__label">Label</label>
  <input type="password" id="PasswordField1" class="PasswordField__input" placeholder="Placeholder" />
</div>
<div class="PasswordField">
  <label for="PasswordField2" class="PasswordField__label PasswordField__label--required">
    Label of required input
  </label>
  <input type="password" id="PasswordField2" class="PasswordField__input" placeholder="Placeholder" required />
</div>
<div class="PasswordField">
  <label for="PasswordField3" class="PasswordField__label">Label of input with message</label>
  <input type="password" id="PasswordField3" class="PasswordField__input" placeholder="Placeholder" />
  <div class="PasswordField__message">Message</div>
</div>
<div class="PasswordField">
  <label for="PasswordField4" class="PasswordField__label PasswordField__label--hidden">Label Hidden</label>
  <input type="password" id="PasswordField4" class="PasswordField__input" placeholder="Placeholder" value="Filled" />
</div>
<div class="PasswordField PasswordField--success">
  <label for="PasswordField5" class="PasswordField__label PasswordField__label--required">
    Label of input in success state
  </label>
  <input type="password" id="PasswordField5" class="PasswordField__input" placeholder="Placeholder" value="Filled" />
  <div class="PasswordField__message">Success message</div>
</div>
<div class="PasswordField PasswordField--warning">
  <label for="PasswordField6" class="PasswordField__label PasswordField__label--required">
    Label of input with warning
  </label>
  <input type="password" id="PasswordField6" class="PasswordField__input" placeholder="Placeholder" value="Filled" />
  <div class="PasswordField__message">Warning message</div>
</div>
<div class="PasswordField PasswordField--error">
  <label for="PasswordField7" class="PasswordField__label PasswordField__label--required">
    Label of input with error
  </label>
  <input type="password" id="PasswordField7" class="PasswordField__input" placeholder="Placeholder" value="Filled" />
  <div class="PasswordField__message">Error message</div>
</div>
<div class="PasswordField PasswordField--disabled">
  <label for="PasswordField8" class="PasswordField__label PasswordField__label--required">
    Label of disabled input
  </label>
  <input type="password" id="PasswordField8" class="PasswordField__input" placeholder="Placeholder" disabled />
  <div class="PasswordField__message">Message</div>
</div>
```
