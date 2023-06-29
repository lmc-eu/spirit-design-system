# Checkbox

## Basic usage:

```html
<label for="checkboxDefault" class="Checkbox">
  <input type="checkbox" id="checkboxDefault" class="Checkbox__input" name="default" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
  </span>
</label>
```

## Required input:

```html
<label for="checkboxRequired" class="Checkbox">
  <input type="checkbox" id="checkboxRequired" class="Checkbox__input" name="required" required />
  <span class="Checkbox__text">
    <span class="Checkbox__label Checkbox__label--required">Checkbox Label</span>
  </span>
</label>
```

## Validation State with Validation Text:

See Validation state [dictionary][dictionary-validation].

```html
<label for="checkboxWarning" class="Checkbox Checkbox--warning">
  <input type="checkbox" id="checkboxWarning" class="Checkbox__input" name="warning" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
    <span class="Checkbox__validationText">Warning validation text</span>
  </span>
</label>

<label for="checkboxDanger" class="Checkbox Checkbox--danger">
  <input type="checkbox" id="checkboxDanger" class="Checkbox__input" name="danger" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
    <ul class="Checkbox__validationText">
      <li>First validation text</li>
      <li>Second validation text</li>
    </ul>
  </span>
</label>
```

## Hidden label:

```html
<label for="checkboxHiddenLabel" class="Checkbox">
  <input type="checkbox" id="checkboxHiddenLabel" class="Checkbox__input" name="hiddenLabel" required />
  <span class="Checkbox__text">
    <span class="Checkbox__label Checkbox__label--hidden">Checkbox Label</span>
  </span>
</label>
```

## Helper Text:

```html
<label for="checkboxHelperText" class="Checkbox">
  <input type="checkbox" id="checkboxHelperText" class="Checkbox__input" name="helperText" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
    <span class="Checkbox__helperText">Helper text</span>
  </span>
</label>
```

## Disabled state:

```html
<label for="checkboxDisabled" class="Checkbox Checkbox--disabled">
  <input type="checkbox" id="checkboxDisabled" class="Checkbox__input" name="disabled" disabled />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
  </span>
</label>
```

## As an Item:

```html
<label for="checkboxItemDefault" class="Checkbox Checkbox--item">
  <input type="checkbox" id="checkboxItemDefault" class="Checkbox__input" name="item" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
