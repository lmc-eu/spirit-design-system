# Tooltip

Bare Tooltip HTML:

```html
<div class="Tooltip" data-spirit-placement="top">
  Hello there!
  <span class="Tooltip__arrow"></span>
</div>
```

## Feature Flag: Data Selector Placement

Tooltip placement is currently using CSS modifiers. In the future it will be using `data-spirit-placement`
attribute in order to make the placement independent of the component and compatible with Floating UI.
To enable this behavior now you can use the feature flag, either set the `$tooltip-enable-data-placement` Sass
feature flag to `true` or use the `spirit-feature-tooltip-enable-data-placement` CSS class on any parent of the Tooltip.

For more info, see main [README][readme-feature-flags].

## ⚠️ DEPRECATION NOTICE

CSS modifiers `Tooltip--top`, `Tooltip--rightTop`, `Tooltip--bottom`, etc. are deprecated and will be
removed in the next major release. Use `data-spirit-placement` attribute instead.

Also both axis side placements are renamed from `top-left`, `top-right`, `right-top`, `right-bottom`,
etc. to `top-start`, `top-end`, `right-start`, `right-end`, etc. Old names are deprecated and will be
removed in the next major release.

[What are deprecations?][readme-deprecations]

## Linking with Content

To display a Tooltip along your content, simply place it in the DOM next to it.
Tooltip is positioned relative to the closest parent element with
`position: relative` or `position: absolute`. You may either provide the CSS
yourself or you can use the prepared TooltipWrapper component.

👉 **Basic Tooltip is static and doesn't react on user interaction.** Read
further to see how to provide the desired behavior.

👉 You don't need TooltipWrapper when your Tooltip is already being positioned
correctly.

👉 Depending on your layout, you may need to provide additional styling to
shrink TooltipWrapper box model, e.g. using `d-inline-block` utility class.
(This probably won't be necessary inside flexbox and grid layouts.)

👉 Link Tooltip to your content using `id` and `aria-describedby` attributes for
improved accessibility.

```html
<div class="TooltipWrapper d-inline-block">
  <a href="#" aria-describedby="my-tooltip">I have a tooltip!</a>
  <div id="my-tooltip" class="Tooltip" data-spirit-placement="top">
    Hello there!
    <span class="Tooltip__arrow"></span>
  </div>
</div>
```

## Placement

Tooltip implements the [Placement Dictionary][dictionary-placement] for placement. The dictionary values are used as
a value of data attribute `data-spirit-placement`, e.g. `data-spirit-placement="top"`, `data-spirit-placement="right-end"`, etc.

For JS-controlled positioning please use the `data-spirit-placement-controlled` attribute instead of specifying the placement
using the `data-spirit-placement` modifiers (more on that [below](#advanced-positioning)).

```html
<div class="Tooltip" data-spirit-placement="right-start">
  Tooltip on right
  <span class="Tooltip__arrow"></span>
</div>
```

## Interaction

### Pure CSS

To display Tooltip on hover and focus (for focusable elements, i.e. mainly
links, buttons or inputs), add `TooltipTarget` class to your element and place
Tooltip HTML right after it.

```html
<div class="TooltipWrapper d-inline-block">
  <a href="#" class="TooltipTarget" aria-describedby="my-tooltip-on-hover">I have a tooltip!</a>
  <div id="my-tooltip-on-hover" class="Tooltip" data-spirit-placement="top">
    Hello there!
    <span class="Tooltip__arrow"></span>
  </div>
</div>
```

👉 Elements that are not focusable will not trigger Tooltip for keyboard users.
Add `tabindex="0"` to non-focusable elements to ensure keyboard accessibility.

```html
<div class="TooltipWrapper d-inline-block">
  <span class="TooltipTarget" aria-describedby="my-tooltip-on-focus" tabindex="0">I have a tooltip!</span>
  <div id="my-tooltip-on-focus" class="Tooltip" data-spirit-placement="top">
    Hello there!
    <span class="Tooltip__arrow"></span>
  </div>
</div>
```

Similar approach is also required for `disabled` elements. Disabled elements are
not interactive which means users cannot hover, focus or click them to trigger a
Tooltip. As a workaround, you'll want to trigger the Tooltip from a wrapper
`<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

```html
<div class="TooltipWrapper d-inline-block">
  <div class="TooltipTarget" aria-describedby="my-tooltip-for-disabled-button" tabindex="0">
    <button type="button" disabled>I have a tooltip though I'm disabled</button>
  </div>
  <div id="my-tooltip-for-disabled-button" class="Tooltip" data-spirit-placement="top">
    Hello there!
    <span class="Tooltip__arrow"></span>
  </div>
</div>
```

### JavaScript

It's not always possible to apply custom CSS class on an element, e.g. when
using a component that doesn't accept custom class names. Or maybe you even want
to trigger Tooltip programmatically from outside the target element. For this
kind of task Tooltip responds to interaction classes `is-hidden` and
`is-visible`.

```html
<button type="button" id="tooltip-trigger" data-spirit-target="#my-js-controlled-tooltip">Toggle tooltip</button>
<div class="TooltipWrapper d-inline-block">
  <div aria-describedby="my-js-controlled-tooltip">I have an externally-triggered tooltip</div>
  <div id="my-js-controlled-tooltip" class="Tooltip is-hidden" data-spirit-placement="top">
    Hello there!
    <span class="Tooltip__arrow"></span>
  </div>
</div>
```

```js
const toggleTooltip = (event) => {
  const tooltipElement = document.querySelector(event.currentTarget.dataset.target);
  tooltipElement.classList.toggle('is-hidden');
  tooltipElement.classList.toggle('is-visible');
};

document.querySelector('#tooltip-trigger').addEventListener('click', toggleTooltip);
```

## Dismissible Tooltip

Tooltip can be made dismissible by following these steps:

1. Add `Tooltip--dismissible` modifier class on Tooltip.
2. Add closing button with `Tooltip__close` class.
3. Bind JS plugin using `data-spirit-dismiss="tooltip"` and `data-spirit-target`
   attributes on the closing button.

```html
<div id="my-dismissible-tooltip" class="Tooltip Tooltip--dismissible" data-spirit-placement="right">
  Close me
  <button
    type="button"
    class="Tooltip__close"
    data-spirit-dismiss="tooltip"
    data-spirit-target="#my-dismissible-tooltip"
    aria-controls="my-dismissible-tooltip"
    aria-expanded="true"
  >
    <svg width="24" height="24" aria-hidden="true">
      <use xlink:href="/icons/svg/sprite.svg#close" />
    </svg>
    <span class="accessibility-hidden">Close</span>
  </button>
  <span class="Tooltip__arrow"></span>
</div>
```

## Advanced Positioning

While the basic setup can be sufficient in some scenarios, dropping a Tooltip
usually won't be so easy. To handle all tricky situations and edge cases
automatically, including smart position updates to ensure Tooltip visibility,
we recommend involving an external library designed specifically for this
purpose.

### Placement

When controlling Tooltip position with JavaScript, use `data-spirit-placement`
attribute instead of CSS modifiers (`Tooltip--top` etc.) to set Tooltip
placement. All [Placement Dictionary][dictionary-placement] values are supported.

```html
<div id="my-advanced-tooltip" class="Tooltip" data-spirit-placement="top">
  Hello there!
  <span class="Tooltip__arrow"></span>
</div>
```

If you have the [Data Selector Placement feature flag](#feature-flag-data-selector-placement) enabled,
set `data-spirit-placement-controlled` on the `.Tooltip` to control it and prevent conflicts with
the default CSS positioning.

```html
<div id="my-advanced-tooltip" class="Tooltip" data-spirit-placement-controlled>
  Hello there!
  <span class="Tooltip__arrow"></span>
</div>
```

### Arrow

When controlling Tooltip arrow with JavaScript, set `data-spirit-element="arrow"`
on the `.Tooltip__arrow` to control it and prevent conflicts with the default CSS positioning.

```html
<div id="my-advanced-tooltip" class="Tooltip" data-spirit-placement-controlled>
  Hello there!
  <span class="Tooltip__arrow" data-spirit-element="arrow"></span>
</div>
```

### Advanced Floating Functionality

To enable the advanced floating functionality, you need to have activated feature flag for placement, activate the JS plugin, wrap your tooltip with an element having the `data-spirit-element="tooltip-wrapper"` data attribute, and add the `data-spirit-placement-controlled` attribute to your tooltip element to modify the styling of arrows.

```html
<div class="spirit-feature-tooltip-enable-data-placement">
  <div class="TooltipWrapper d-inline-block" data-spirit-element="tooltip-wrapper">
    <button type="button" id="tooltip-trigger" data-spirit-toggle="tooltip" data-spirit-target="#floating-ui-example">
      Toggle tooltip
    </button>
    <div
      id="floating-ui-example"
      class="Tooltip is-hidden"
      data-spirit-placement="bottom"
      data-spirit-placement-controlled
    >
      Hello there!
      <span class="Tooltip__arrow" data-spirit-element="arrow"></span>
    </div>
  </div>
</div>
```

👉 Please consult [Floating UI][floating-ui] documentation to understand how it
works and to get an idea of all possible cases you may need to cover.

## Floating UI Attributes

| Attribute                                       | Type                                         | Default  | Required | Description                                                                                                                                                                                                                                                                |
| ----------------------------------------------- | -------------------------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-spirit-enable-flipping`                   | [true \| false]                              | true     | ✕        | Enables [flipping[floating-ui-flip] of the element’s placement when it starts to overflow its boundary area. For example `top` can be flipped to `bottom`.                                                                                                                 |
| `data-spirit-enable-flipping-cross-axis`        | [true \| false]                              | true     | ✕        | Enables flipping on the [cross axis][floating-ui-flip-cross-axis], the axis perpendicular to main axis. For example `top-end` can be flipped to the `top-start`.                                                                                                           |
| `data-spirit-flip-fallback-axis-side-direction` | ["none" \| "start" \| "end" ]                | "none"   | ✕        | Whether to allow [fallback to the opposite axis][floating-ui-flip-fallback-axis-side-direction] if no placements along the preferred placement axis fit, and if so, which side direction along that axis to choose. If necessary, it will fallback to the other direction. |
| `data-spirit-flip-fallback-placements`          | string                                       | -        | ✕        | This describes a list of [explicit placements][floating-ui-flip-fallback-placements] to try if the initial placement doesn’t fit on the axes in which overflow is checked. For example you can set `"top, right, bottom"`                                                  |
| `data-spirit-placement`                         | [Placement Dictionary][dictionary-placement] | "bottom" | ✕        | Placement of tooltip                                                                                                                                                                                                                                                       |
| `data-spirit-enable-shifting`                   | [true \| false]                              | true     | ✕        | Enables [shifting][floating-ui-shift] of the element to keep it inside the boundary area by adjusting its position.                                                                                                                                                        |
| `data-spirit-enable-sizing`                     | [true \| false]                              | true     | ✕        | Enables [sizing][floating-ui-size] of the element to keep it inside the boundary area by setting the max width.                                                                                                                                                            |

👆 All the attributes mentioned above can be set as an object in the `config` attribute, like this: `data-spirit-config='{"flip": "true", "flipFallbackPlacements": "top, right, bottom"}'`. Please note that this configuration has lower priority than individual attributes and will be overwritten by them.

## JavaScript API

### Methods

| Method                | Description                                                                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getInstance`         | _Static_ method which allows you to get the tooltip instance associated with a DOM. element                                                                                                                                                                       |
| `getOrCreateInstance` | _Static_ method which allows you to get the tooltip instance associated with a DOM element, or create a new one in case it wasn’t initialized.                                                                                                                    |
| `hide`                | Hides an element’s tooltip. Returns to the caller before the tooltip has actually been hidden (i.e. before the `hidden.tooltip` event occurs). This is considered a “manual” triggering of the tooltip.                                                           |
| `show`                | Reveals an element’s tooltip. **Returns to the caller before the tooltip has actually been shown** (i.e. before the `shown.tooltip` event occurs). This is considered a “manual” triggering of the tooltip. Tooltips with zero-length titles are never displayed. |
| `toggle`              | Toggles an element’s tooltip. **Returns to the caller before the tooltip has actually been shown or hidden** (i.e. before the `shown.tooltip` or `hidden.tooltip` event occurs). This is considered a “manual” triggering of the tooltip.                         |

```js
const tooltip = Tooltip.getInstance('#example'); // Returns a tooltip instance

tooltip.show();
```

### Events

| Method           | Description                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| `hidden.tooltip` | This event is fired when the `hide` instance has finished being hidden from the user. |
| `hide.tooltip`   | This event is fired immediately when the `hide` instance method has been called.      |
| `show.tooltip`   | This event fires immediately when the `show` instance method is called.               |
| `shown.tooltip`  | This event is fired when the `show` instance has finished being shown to the user.    |

```js
const myTooltipEl = document.getElementById('myTooltip');
const tooltip = Tooltip.getOrCreateInstance(myTooltipEl);

myTooltipEl.addEventListener('hidden.tooltip', () => {
  // do something...
});

tooltip.hide();
```

[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#placement
[example]: https://spirit-design-system-demo.netlify.app/src/scss/components/tooltip/#advanced-positioning
[floating-ui-flip-cross-axis]: https://floating-ui.com/docs/flip#crossaxis
[floating-ui-flip-floating-ui-flip-fallback-axis-side-direction]: https://floating-ui.com/docs/flip#fallbackaxissidedirection
[floating-ui-flip-fallback-placements]: https://floating-ui.com/docs/flip#fallbackplacements
[floating-ui-flip]: https://floating-ui.com/docs/flip
[floating-ui-shift]: https://floating-ui.com/docs/shift
[floating-ui-size]: https://floating-ui.com/docs/size
[floating-ui]: https://floating-ui.com
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#deprecations
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
