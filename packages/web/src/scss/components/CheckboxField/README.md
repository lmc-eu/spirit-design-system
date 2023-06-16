# CheckboxField

## Basic usage:

```html
<label for="checkboxFieldDefault" class="CheckboxField">
  <input type="checkbox" id="checkboxFieldDefault" class="CheckboxField__input" name="default" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
  </span>
</label>
```

## Required input:

```html
<label for="checkboxFieldRequired" class="CheckboxField">
  <input type="checkbox" id="checkboxFieldRequired" class="CheckboxField__input" name="required" required />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--required">Checkbox Label</span>
  </span>
</label>
```

## Validation State with Validation Text:

See Validation state [dictionary][dictionary-validation].

```html
<label for="checkboxFieldWarning" class="CheckboxField CheckboxField--warning">
  <input type="checkbox" id="checkboxFieldWarning" class="CheckboxField__input" name="warning" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
    <span class="CheckboxField__validationText">Warning validation text</span>
  </span>
</label>

<label for="checkboxFieldDanger" class="CheckboxField CheckboxField--danger">
  <input type="checkbox" id="checkboxFieldDanger" class="CheckboxField__input" name="danger" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
    <ul class="CheckboxField__validationText">
      <li>First validation text</li>
      <li>Second validation text</li>
    </ul>
  </span>
</label>
```

## Hidden label:

```html
<label for="checkboxFieldHiddenLabel" class="CheckboxField">
  <input type="checkbox" id="checkboxFieldHiddenLabel" class="CheckboxField__input" name="hiddenLabel" required />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label CheckboxField__label--hidden">Checkbox Label</span>
  </span>
</label>
```

## Helper Text:

```html
<label for="checkboxFieldHelperText" class="CheckboxField">
  <input type="checkbox" id="checkboxFieldHelperText" class="CheckboxField__input" name="helperText" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
    <span class="CheckboxField__helperText">Helper text</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="checkboxFieldDisabled" class="CheckboxField CheckboxField--disabled">
  <input type="checkbox" id="checkboxFieldDisabled" class="CheckboxField__input" name="disabled" disabled />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
  </span>
</label>
```

## As an Item:

```html
<label for="checkboxFieldItemDefault" class="CheckboxField CheckboxField--item">
  <input type="checkbox" id="checkboxFieldItemDefault" class="CheckboxField__input" name="item" />
  <span class="CheckboxField__text">
    <span class="CheckboxField__label">Checkbox Label</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
