# Tooltip

Bare Tooltip HTML:

```html
<div class="Tooltip Tooltip--top">
  Hello there!
  <span class="Tooltip__arrow"></span>
</div>
```

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
  <div id="my-tooltip" class="Tooltip Tooltip--top">
    Hello there!
    <span class="Tooltip__arrow"></span>
  </div>
</div>
```

## Placement

Available placements are: top, right, bottom, and left. To apply the desired
placement, just pick a corresponding CSS modifier: `Tooltip--top`,
`Tooltip--right`, `Tooltip--bottom`, or `Tooltip--left`. For JS-controlled
positioning please use the `data-spirit-placement` attribute instead (more on that
below).

```html
<div class="Tooltip Tooltip--right">
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
  <div id="my-tooltip-on-hover" class="Tooltip Tooltip--top">
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
  <div id="my-tooltip-on-focus" class="Tooltip Tooltip--top">
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
  <div id="my-tooltip-for-disabled-button" class="Tooltip Tooltip--top">
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
  <div id="my-js-controlled-tooltip" class="Tooltip Tooltip--top is-hidden">
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
<div id="my-dismissible-tooltip" class="Tooltip Tooltip--right Tooltip--dismissible">
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
placement. Supported values are `top`, `bottom`, `left`, and `right`.

```html
<div id="my-advanced-tooltip" class="Tooltip" data-spirit-placement="top">
  Hello there!
  <span class="Tooltip__arrow"></span>
</div>
```

### Example

💻 Check our minimum [example] that uses external library
[Floating UI][floating-ui] (see the [JS source](./floating-ui-example.mjs)).

👉 Please consult [Floating UI][floating-ui] documentation to understand how it
works and to get an idea of all possible cases you may need to cover.

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
| `hide.tooltip`   | This event is fired immediately when the `hide` instance method has been called.      |
| `hidden.tooltip` | This event is fired when the `hide` instance has finished being hidden from the user. |
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

[example]: https://spirit-design-system-demo.netlify.app/src/scss/components/tooltip/#advanced-positioning
[floating-ui]: https://floating-ui.com
