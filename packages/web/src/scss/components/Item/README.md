# Item

The Item component is used to display a single item in a list. Currently we support
two types of item content: RadioField and CheckboxField. In order to unify and simplify
API of these components and also to avoid repeating ourselves, we use Item as their modifier.

So, to create an Item of RadioField content, you need to add `RadioField--item` modifier class.

```html
<label for="radiofieldItem" class="RadioField RadioField--item">
  <input type="radio" id="radiofieldItem" name="example" class="RadioField__input" checked />
  <span class="RadioField__label">Item</span>
</label>
```

And to create an Item of CheckboxField content, you need to add `CheckboxField--item` modifier class.

```html
<label for="checkboxfieldItem" class="CheckboxField CheckboxField--item">
  <input type="checkbox" id="checkboxfieldItem" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Item</span>
  </span>
</label>
```
