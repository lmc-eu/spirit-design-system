# Checkbox

## Basic Usage

```html
<label for="checkbox-default" class="Checkbox">
  <input type="checkbox" id="checkbox-default" class="Checkbox__input" name="default" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
  </span>
</label>
```

## Required Input

```html
<label for="checkbox-required" class="Checkbox">
  <input type="checkbox" id="checkbox-required" class="Checkbox__input" name="required" required />
  <span class="Checkbox__text">
    <span class="Checkbox__label Checkbox__label--required">Checkbox Label</span>
  </span>
</label>
```

## Validation State with Validation Text

See Validation state [dictionary][dictionary-validation].

```html
<label for="checkbox-warning" class="Checkbox Checkbox--warning">
  <input type="checkbox" id="checkbox-warning" class="Checkbox__input" name="warning" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
    <span class="Checkbox__validationText">Warning validation text</span>
  </span>
</label>

<label for="checkbox-danger" class="Checkbox Checkbox--danger">
  <input type="checkbox" id="checkbox-danger" class="Checkbox__input" name="danger" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
    <div class="Checkbox__validationText">
      <ul>
        <li>First validation text</li>
        <li>Second validation text</li>
      </ul>
    </div>
  </span>
</label>
```

## Hidden Label

```html
<label for="checkbox-hidden-label" class="Checkbox">
  <input type="checkbox" id="checkbox-hidden-label" class="Checkbox__input" name="hiddenLabel" required />
  <span class="Checkbox__text">
    <span class="Checkbox__label Checkbox__label--hidden">Checkbox Label</span>
  </span>
</label>
```

## Helper Text

```html
<label for="checkbox-helper-text" class="Checkbox">
  <input type="checkbox" id="checkbox-helper-text" class="Checkbox__input" name="helperText" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
    <span class="Checkbox__helperText">Helper text</span>
  </span>
</label>
```

## Disabled State

```html
<label for="checkbox-disabled" class="Checkbox Checkbox--disabled">
  <input type="checkbox" id="checkbox-disabled" class="Checkbox__input" name="disabled" disabled />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
  </span>
</label>
```

## As an Item

```html
<label for="checkbox-item-default" class="Checkbox Checkbox--item">
  <input type="checkbox" id="checkbox-item-default" class="Checkbox__input" name="item" />
  <span class="Checkbox__text">
    <span class="Checkbox__label">Checkbox Label</span>
  </span>
</label>
```

[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
