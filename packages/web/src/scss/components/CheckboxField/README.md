# CheckboxField

## Basic usage:

```html
<label for="checkboxfieldDefault" class="CheckboxField">
  <input type="checkbox" id="checkboxfieldDefault" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
  </span>
</label>
```

## Required input:

```html
<label for="checkboxfieldRequired" class="CheckboxField">
  <input type="checkbox" id="checkboxfieldRequired" class="CheckboxField__input" required />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Checkbox Label</span>
  </span>
</label>
```

## Validation State with Validation Text:

See Validation state [dictionary][dictionary-validation].

````html
```html
<label for="checkboxfieldWarning" class="CheckboxField CheckboxField--warning">
  <input type="checkbox" id="checkboxfieldWarning" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
    <span class="CheckboxField__validationText">Warning validation text</span>
  </span>
</label>

<label for="checkboxfieldDanger" class="CheckboxField CheckboxField--danger">
  <input type="checkbox" id="checkboxfieldDanger" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
    <ul class="CheckboxField__validationText">
      <li>First Validation text</li>
      <li>Second Validation text</li>
    </ul>
  </span>
</label>
````

## Hidden label:

```html
<label for="checkboxfieldHiddenLabel" class="CheckboxField">
  <input type="checkbox" id="checkboxfieldHiddenLabel" class="CheckboxField__input" required />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--hidden">Checkbox Label</span>
  </span>
</label>
```

## Helper Text:

```html
<label for="checkboxfieldHelperText" class="CheckboxField">
  <input type="checkbox" id="checkboxfieldHelperText" class="CheckboxField__input" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
    <span class="CheckboxField__helperText">Helper text</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="checkboxfieldDisabled" class="CheckboxField CheckboxField--disabled">
  <input type="checkbox" id="checkboxfieldDisabled" class="CheckboxField__input" disabled />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
  </span>
</label>
```

## As an Item:

```html
<label for="checkboxfieldItemDefault" class="CheckboxField CheckboxField--item">
  <input type="checkbox" id="checkboxfieldItemDefault" class="CheckboxField__input" name="item" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
