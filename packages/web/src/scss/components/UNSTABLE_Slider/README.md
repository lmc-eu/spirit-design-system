# UNSTABLE Slider

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

Slider is a form control that allows users to select a value from a range of values.

## Basic Usage

The Slider component implements the HTML [range input][mdn-range] element. With the current state of CSS, this requires
a lot of browser-specific styles and a bit of JavaScript to update the slider's appearance when the value changes (this
is required by Webkit-based browsers such as Chrome or Safari).

```html
<div class="UNSTABLE_Slider">
  <label for="slider-default" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-default"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
</div>
```

### Slider Steps and Value

You can specify the Slider steps and value range by setting the `min`, `max`, and `step` attributes on the input element.

```html
<div class="UNSTABLE_Slider">
  <label for="slider-steps" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-steps"
    style="--slider-position: 30%"
    type="range"
    min="1"
    max="100"
    step="10"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
</div>
```

### Slider Position

The `--slider-position` CSS custom property is used to set the size of the lower portion of the slider track. The custom
property needs to be present when the Slider is initially rendered (see the `style` attribute) and updated anytime the slider
value changes (see the `oninput` handler with the calculation) which includes also the user's interaction with the
slider.

👉 Please note the value of `--slider-position` must be a **percentage value from 0 to 100**.

For example, with a value of 60 in a range from 0 to 200, the `--slider-position` property is 30 %:

```html
<div class="UNSTABLE_Slider">
  <label for="slider-percentage" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-percentage"
    style="--slider-position: 30%"
    type="range"
    value="60"
    min="0"
    max="200"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 200)}%`);"
  />
</div>
```

## Required

ℹ️ As per the [HTML specification][html-spec-range], the Slider component does not have a `required` attribute.

## Hidden Label

```html
<div class="UNSTABLE_Slider">
  <label for="slider-hidden-label" class="UNSTABLE_Slider__label UNSTABLE_Slider__label--hidden">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-hidden-label"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
</div>
```

## Fluid Width

```html
<div class="UNSTABLE_Slider UNSTABLE_Slider--fluid">
  <label for="slider-fluid" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-fluid"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
</div>
```

## Helper Text

```html
<div class="UNSTABLE_Slider">
  <label for="slider-helper-text" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-helper-text"
    aria-describedby="slider-helper-text-helper-text"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
  <div id="slider-helper-text-helper-text" class="UNSTABLE_Slider__helperText">Helper text</div>
</div>
```

## Validation States

Validation states can be presented either by adding a CSS modifier class
(`UNSTABLE_Slider--success`, `UNSTABLE_Slider--warning`, `UNSTABLE_Slider--danger`), or by adding
a JS interaction class when controlled by JavaScript (`has-success`,
`has-warning`, `has-danger`). See Validation state [dictionary][dictionary-validation].

```html
<div class="UNSTABLE_Slider UNSTABLE_Slider--success">
  <label for="slider-success" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-success"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
</div>

<div class="UNSTABLE_Slider UNSTABLE_Slider--warning">
  <label for="slider-warning" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-warning"
    aria-describedby="slider-warning-validation-text"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
  <div id="slider-warning-validation-text" class="UNSTABLE_Slider__validationText">Validation text</div>
</div>

<div class="UNSTABLE_Slider UNSTABLE_Slider--danger">
  <label for="slider-danger" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-danger"
    aria-describedby="slider-danger-validation-text"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
  <ul id="slider-danger-validation-text" class="UNSTABLE_Slider__validationText">
    <li>First validation text</li>
    <li>Second validation text</li>
  </ul>
</div>
```

### JavaScript-Controlled Validation Text

When implementing client-side form validation, use JS interaction state classes
(`has-success`, `has-warning`, `has-danger`) on the wrapping `<div>` element and
render validation texts in a `<div>` or `<ul>` with `data-spirit-element="validation_text"`
attribute. This way your JS remains disconnected from CSS that may or may not be
[prefixed][prefixed].

**Remember this approach is only valid for vanilla JS implementation. React
components mix CSS with JS by design and handle prefixes their own way.**

```html
<div class="UNSTABLE_Slider UNSTABLE_Slider--danger">
  <label for="slider-danger" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-danger"
    aria-describedby="slider-danger-validation-text"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
  />
  <div data-spirit-element="validation_text">Error message inserted by JS</div>
</div>
```

## Disabled State

On top of adding the `disabled` attribute to the input, disabled Slider needs to
be marked by adding `UNSTABLE_Slider--disabled` modifier class, or with `is-disabled`
JS interaction class when controlled by JavaScript:

```html
<div class="UNSTABLE_Slider UNSTABLE_Slider--disabled">
  <label for="slider-disabled" class="UNSTABLE_Slider__label">Slider</label>
  <input
    class="UNSTABLE_Slider__input"
    id="slider-disabled"
    style="--slider-position: 30%"
    type="range"
    value="30"
    oninput="this.style.setProperty('--slider-position', `${Math.round((100 * this.value) / 100)}%`);"
    disabled
  />
</div>
```

[mdn-range]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
[html-spec-range]: https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range)
[prefixed]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#prefixing-css-class-names
[dictionary-validation]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#validation
