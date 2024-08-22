# ScrollView

ScrollView makes long content scrollable. On its edges, it provides indication of whether there is more content to scroll to.

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript, which will handle toggling of the FileUploader component:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

You will find the [full documentation](#javascript-plugin-api) of the plugin below on this page.

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

## Vertical Scrolling

For vertical scrolling, you need to add the `ScrollView--vertical` class to the container element and set the
`data-spirit-direction` attribute to `vertical`.

```html
<div class="ScrollView ScrollView--vertical" data-spirit-toggle="scrollView" data-spirit-direction="vertical">
  <div class="ScrollView__viewport" data-spirit-element="viewport">
    <div class="ScrollView__content" data-spirit-element="content">
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit…</p>
    </div>
  </div>
  <div class="ScrollView__overflowDecorators ScrollView__overflowDecorators--shadows" aria-hidden="true"></div>
</div>
```

## Horizontal Scrolling

Analogically, add the `ScrollView--horizontal` class to the container element and set the `data-spirit-direction` attribute to
`horizontal` to achieve horizontal scrolling.

👉 For text content, you may need to explicitly set the `white-space` CSS property to `nowrap` on the content element to prevent the
content from wrapping.

```html
<div class="ScrollView ScrollView--horizontal" data-spirit-toggle="scrollView" data-spirit-direction="horizontal">
  <div class="ScrollView__viewport" data-spirit-element="viewport">
    <div class="ScrollView__content" data-spirit-element="content">
      <p class="mb-700" style="white-space: nowrap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit…</p>
    </div>
  </div>
  <div class="ScrollView__overflowDecorators ScrollView__overflowDecorators--shadows" aria-hidden="true"></div>
</div>
```

👉 For other content types, you may need to provide fixed width to the content element (or elements) to force scrolling.

```html
<div class="ScrollView ScrollView--horizontal" data-spirit-toggle="scrollView" data-spirit-direction="horizontal">
  <div class="ScrollView__viewport" data-spirit-element="viewport">
    <div class="ScrollView__content" data-spirit-element="content">
      <div class="Grid Grid--cols-4 mb-700">
        <div style="width: 20rem">1/4</div>
        <div style="width: 20rem">1/4</div>
        <div style="width: 20rem">1/4</div>
        <div style="width: 20rem">1/4</div>
      </div>
    </div>
  </div>
  <div class="ScrollView__overflowDecorators ScrollView__overflowDecorators--shadows" aria-hidden="true"></div>
</div>
```

## Scrolling Overflow Decorators

The ScrollView component provides overflow decorators on its edges, showing that there is more content to scroll to. The default overflow
decorators use shadows:

```html
<div class="ScrollView__overflowDecorators ScrollView__overflowDecorators--shadows" aria-hidden="true"></div>
```

You can use borders instead:

```html
<div class="ScrollView__overflowDecorators ScrollView__overflowDecorators--borders" aria-hidden="true"></div>
```

Or both:

```html
<div
  class="ScrollView__overflowDecorators ScrollView__overflowDecorators--borders ScrollView__overflowDecorators--shadows"
  aria-hidden="true"
></div>
```

### Custom Shadows

You can customize the shadows by overriding the following CSS variables:

```css
--scroll-view-start-shadow-background: linear-gradient(to bottom, #9400d3 0%, #9400d300 100%);
--scroll-view-end-shadow-background: linear-gradient(to top, #9400d3 0%, #9400d300 100%);
```

## Scrollbar

Depending on user's operating system and browser, the scrollbar may be hidden by default, or take up space in the container element.

👉 Unless you decide to [hide the scrollbar](#hiding-the-scrollbar), you may need to provide spacing for the scrollbar, so it does
not cover your content when visible. For example, having a horizontal ScrollView, you can do so by adding a margin or padding utility
class to your content, for example `mb-700` or `pb-700`.

```html
<div class="ScrollView ScrollView--horizontal" data-spirit-toggle="scrollView" data-spirit-direction="horizontal">
  <div class="ScrollView__viewport" data-spirit-element="viewport">
    <div class="ScrollView__content" data-spirit-element="content">
      <p class="mb-700">…</p>
    </div>
  </div>
  <div class="ScrollView__overflowDecorators ScrollView__overflowDecorators--shadows" aria-hidden="true"></div>
</div>
```

### Hiding the Scrollbar

To hide the scrollbar, add the `ScrollView--hideScrollbar` class to the container element.

⚠️ Make sure that the content is still accessible to users who don't use a pointing device with support of horizontal scrolling, for example by providing keyboard navigation.

```html
<div
  class="ScrollView ScrollView--horizontal ScrollView--scrollbarDisabled"
  data-spirit-toggle="scrollView"
  data-spirit-direction="horizontal"
>
  <div class="ScrollView__viewport" data-spirit-element="viewport">
    <div class="ScrollView__content" data-spirit-element="content">
      <!-- … -->
    </div>
  </div>
  <div class="ScrollView__overflowDecorators ScrollView__overflowDecorators--shadows" aria-hidden="true"></div>
</div>
```

## JavaScript Plugin API

| Method                | Description                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getInstance`         | _Static_ method which allows you to get the ScrollView instance associated with a DOM element.                                                    |
| `getOrCreateInstance` | _Static_ method which allows you to get the ScrollView instance associated with a DOM element, or create a new one in case it wasn't initialized. |

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
