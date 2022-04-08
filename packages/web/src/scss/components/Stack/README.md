# Stack

Use Stack to vertically space content. It works with lists or any other HTML elements.
It can be used to separate form fields, for example.

```html
<div class="Stack">
  <div class="TextField">
    <label for="textfieldStack1" class="TextField__label TextField__label--required">Label</label>
    <input type="text" id="textfieldStack1" class="TextField__input" placeholder="Placeholder" />
  </div>
  <div class="TextField">
    <label for="textfieldStack2" class="TextField__label TextField__label--required">Label</label>
    <input type="text" id="textfieldStack2" class="TextField__input" placeholder="Placeholder" />
  </div>
</div>
<ul class="Stack">
  <li>
    <div>Block 1</div>
  </li>
  <li>
    <div>Block 2</div>
  </li>
  <li>
    <div>Block 3</div>
  </li>
</ul>
```
