# Item

The Item component is used to display a single item in a list. Currently we support
two types of item content: Radio and Checkbox. In order to unify and simplify
API of these components and also to avoid repeating ourselves, we use Item as their modifier.

So, to create an Item of Radio content, you need to add `Radio--item` modifier class.

```html
<label for="radioItem" class="Radio Radio--item">
  <input type="radio" id="radioItem" name="example" class="Radio__input" checked />
  <span class="Radio__label">Item</span>
</label>
```

And to create an Item of Checkbox content, you need to add `Checkbox--item` modifier class.

```html
<label for="checkboxItem" class="Checkbox Checkbox--item">
  <input type="checkbox" id="checkboxItem" class="Checkbox__input" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Item</span>
  </span>
</label>
```
