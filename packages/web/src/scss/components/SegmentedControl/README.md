# Segmented Control

Segmented controls allow users to select from a set of mutually exclusive options.

## Basic Usage

- Uses radio buttons to allow users to select one option from a set of options.

👉 Keep in mind, that you must provide `SegmentedControl` with an `legend` or `aria-label` for accessibility reasons.

```html
<fieldset class="SegmentedControl SegmentedControl--outlined" data-spirit-toggle="segmentedControl">
  <legend class="accessibility-hidden">Label</legend>

  <div class="SegmentedControl__item">
    <input
      type="radio"
      id="segmentedControl-label-1"
      name="segmented"
      value="value-1"
      class="SegmentedControl__input"
      checked
    />
    <label for="segmentedControl-label-1" class="SegmentedControl__label">Label</label>
  </div>

  <div class="SegmentedControl__item">
    <input
      type="radio"
      id="segmentedControl-label-2"
      name="segmented"
      value="value-2"
      class="SegmentedControl__input"
    />
    <label for="segmentedControl-label-2" class="SegmentedControl__label">Label</label>
  </div>

  <div class="SegmentedControl__item">
    <input
      type="radio"
      id="segmentedControl-label-3"
      name="segmented"
      value="value-3"
      class="SegmentedControl__input"
    />
    <label for="segmentedControl-label-3" class="SegmentedControl__label">Label</label>
  </div>
</fieldset>
```

## Variants

### Design Variants

- `SegmentedControl--outlined` (default)
- `SegmentedControl--filled`

```html
<fieldset class="SegmentedControl SegmentedControl--outlined" data-spirit-toggle="segmentedControl">
  <!-- Inputs and labels -->
</fieldset>

<fieldset class="SegmentedControl SegmentedControl--filled" data-spirit-toggle="segmentedControl">
  <!-- Inputs and labels -->
</fieldset>
```

### Icon Only Variant

- Use this variant when there is limited space or when the icons are intuitive and easy to understand.
- Keep in mind, that you must provide `SegmentedControl__label` with an `<span class="accessibility-hidden">Label</span>` or `aria-label` for accessibility reasons.

```html
<div class="SegmentedControl__item">
  <input type="radio" id="segmentedControl-label-1" name="segmented" value="value-1" class="SegmentedControl__input" />
  <svg width="20" height="20" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#file"></use>
  </svg>
  <span class="accessibility-hidden">Label</span>
</div>
```

### Text Only Variant

```html
<div class="SegmentedControl__item">
  <input type="radio" id="segmentedControl-label-1" name="segmented" value="value-1" class="SegmentedControl__input" />
  <label for="segmentedControl-label-1" class="SegmentedControl__label">Label</label>
</div>
```

### Text and Icon Variant

```html
<div class="SegmentedControl__item">
  <input type="radio" id="segmentedControl-label-1" name="segmented" value="value-1" class="SegmentedControl__input" />
  <svg width="20" height="20" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#file"></use>
  </svg>
  <label for="segmentedControl-label-1" class="SegmentedControl__label">Label</label>
</div>
```

## Horizontal Alignment

Segmented Control can be horizontally aligned to `stretch`.

- `SegmentedControl--stretch`

```html
<fieldset class="SegmentedControl SegmentedControl--stretch" data-spirit-toggle="segmentedControl">
  <!-- Inputs and labels -->
</fieldset>
```

## Multiple Selection

- Uses `checkboxes` instead of `radio` buttons to allow multiple selections.

```html
<fieldset class="SegmentedControl SegmentedControl--outlined">
  <legend class="accessibility-hidden">Label</legend>

  <div class="SegmentedControl__item">
    <input
      type="checkbox"
      id="segmentedControl-label-1"
      name="segmented"
      value="value-1"
      class="SegmentedControl__input"
      checked
    />
    <label for="segmentedControl-label-1" class="SegmentedControl__label">Label</label>
  </div>

  <div class="SegmentedControl__item">
    <input
      type="checkbox"
      id="segmentedControl-label-2"
      name="segmented"
      value="value-2"
      class="SegmentedControl__input"
    />
    <label for="segmentedControl-label-2" class="SegmentedControl__label">Label</label>
  </div>

  <div class="SegmentedControl__item">
    <input
      type="checkbox"
      id="segmentedControl-label-3"
      name="segmented"
      value="value-3"
      class="SegmentedControl__input"
    />
    <label for="segmentedControl-label-3" class="SegmentedControl__label">Label</label>
  </div>
</fieldset>
```

## Disabled Option

- Set the `disabled` attribute on the input to disable the Segmented Control item.

```html
<div class="SegmentedControl__item">
  <input
    type="radio"
    id="segmentedControl-label-1"
    name="segmented-1"
    value="value-1"
    class="SegmentedControl__input"
  />
  <label for="segmentedControl-label-1" class="SegmentedControl__label">Label</label>
</div>
```

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript, which will handle animated selection in `radio` variant of the Segmented Control component:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
