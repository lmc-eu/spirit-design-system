# Segmented Control

A Segmented Control is a linear set of two or more segments, each of which functions as a button.

## Basic Usage

Uses `radio` buttons to allow users to select one option from a set of options.
By default, allows only **5** animated options, but can be extended by use [JS plugin](#javascript-plugin).
Labels should be short and descriptive and are truncated if they are too long.

👉 Keep in mind, that you must provide `SegmentedControl` with an `legend` or `aria-label` for accessibility reasons.

```html
<fieldset class="SegmentedControl SegmentedControl--outlined">
  <legend class="accessibility-hidden">Label</legend>

  <input
    type="radio"
    id="segmented-control-label-1"
    name="segmented"
    value="value-1"
    class="SegmentedControl__input"
    checked
  />
  <label for="segmented-control-label-1" class="SegmentedControl__label"
    ><span class="text-truncate">Label</span></label
  >

  <input type="radio" id="segmented-control-label-2" name="segmented" value="value-2" class="SegmentedControl__input" />
  <label for="segmented-control-label-2" class="SegmentedControl__label"
    ><span class="text-truncate">Label</span></label
  >

  <input type="radio" id="segmented-control-label-3" name="segmented" value="value-3" class="SegmentedControl__input" />
  <label for="segmented-control-label-3" class="SegmentedControl__label"
    ><span class="text-truncate">Label</span></label
  >
</fieldset>
```

## Variants

### Design Variants

- `SegmentedControl--outlined` (default)
- `SegmentedControl--filled`

```html
<fieldset class="SegmentedControl SegmentedControl--outlined">
  <!-- Inputs and labels -->
</fieldset>

<fieldset class="SegmentedControl SegmentedControl--filled">
  <!-- Inputs and labels -->
</fieldset>
```

### Icon Only Variant

Use this variant when there is limited space or when the icons are intuitive and easy to understand.
Keep in mind you must provide `SegmentedControl__label` with an `<span class="accessibility-hidden">Label</span>` or `aria-label` for accessibility reasons.

```html
<input type="radio" id="segmented-control-label" name="segmented" value="value" class="SegmentedControl__input" />
<label for="segmented-control-label" class="SegmentedControl__label">
  <svg width="20" height="20" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#file"></use>
  </svg>
  <span class="accessibility-hidden">Label</span>
</label>
```

### Text Only Variant

```html
<input type="radio" id="segmented-control-label" name="segmented" value="value" class="SegmentedControl__input" />
<label for="segmented-control-label" class="SegmentedControl__label"><span class="text-truncate">Label</span></label>
```

### Text and Icon Variant

```html
<input type="radio" id="segmented-control-label" name="segmented" value="value" class="SegmentedControl__input" />
<label for="segmented-control-label" class="SegmentedControl__label">
  <svg width="20" height="20" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#file"></use>
  </svg>
  <span class="text-truncate">Label</span>
</label>
```

## Horizontal Alignment

The `fluid` variant will make the Segmented Control fit to its parent width.

- `SegmentedControl--fluid`

```html
<fieldset class="SegmentedControl SegmentedControl--fluid">
  <!-- Inputs and labels -->
</fieldset>
```

## Multiple Selection

Uses `checkboxes` instead of `radio` buttons to allow multiple selections.
There is no limit to the number of options, but it is recommended to use 2-5 options.

```html
<fieldset class="SegmentedControl SegmentedControl--outlined">
  <legend class="accessibility-hidden">Label</legend>

  <input
    type="checkbox"
    id="segmented-control-label-1"
    name="segmented"
    value="value-1"
    class="SegmentedControl__input"
    checked
  />
  <label for="segmented-control-label-1" class="SegmentedControl__label">
    <span class="text-truncate">Label</span>
  </label>

  <input
    type="checkbox"
    id="segmented-control-label-2"
    name="segmented"
    value="value-2"
    class="SegmentedControl__input"
  />
  <label for="segmented-control-label-2" class="SegmentedControl__label">
    <span class="text-truncate">Label</span>
  </label>

  <input
    type="checkbox"
    id="segmented-control-label-3"
    name="segmented"
    value="value-3"
    class="SegmentedControl__input"
  />
  <label for="segmented-control-label-3" class="SegmentedControl__label">
    <span class="text-truncate">Label</span>
  </label>
</fieldset>
```

## Disabled Option

- Set the `disabled` attribute on the input to disable the Segmented Control item.

```html
<input
  type="radio"
  id="segmented-control-label"
  name="segmented"
  value="value"
  class="SegmentedControl__input"
  disabled
/>
<label for="segmented-control-label" class="SegmentedControl__label"><span class="text-truncate">Label</span></label>
```

## JavaScript Plugin

If you want to have animated options on `radio` segment with more than **5** options, you can use the JavaScript plugin to handle the selection.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Set `data-spirit-toggle="segmentedControl"` attribute on the `fieldset` element.

```html
<fieldset class="SegmentedControl SegmentedControl--outlined" data-spirit-toggle="segmentedControl">
  <!-- Inputs and labels -->
</fieldset>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
