# Stack

Stack is a component that allows you to compose elements vertically.

👉 Vertical margin of items inside Stack is reset to zero to ensure proper spacing between items. Read more about spacing in the [Variants](#variants) section.

## Basic usage

Usage with form fields:

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
```

Usage with a list:

```html
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

## Variants

⚠ `Stack--hasSpacing` uses the CSS `padding` property to be able to create dividers using the `border` property.
It is recommended to wrap the direct descendants of the `Stack` component to the proper HTML element.
Otherwise, the applied spacing via vertical padding could break the visual view of the children's items.

### Spacing between items

👉 The vertical spacing between items is applied via `Stack--hasSpacing`. The size corresponds with the value of the design token `$space-600`.
In case you need another spacing, please use utility classes or add custom-defined styles to the direct descendants.

Usage with spacing:

```html
<ul class="Stack Stack--hasSpacing">
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

### Dividers between items

Usage with middle dividers:

```html
<ul class="Stack Stack--hasMiddleDividers">
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

Usage with inner and outer dividers:

```html
<ul class="Stack Stack--hasMiddleDividers Stack--hasTopDivider Stack--hasBottomDivider">
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

## Advanced usage

Usage with combination of spacing and dividers:

```html
<ul class="Stack Stack--hasSpacing Stack--hasMiddleDividers Stack--hasTopDivider Stack--hasBottomDivider">
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
