# Header

The Header is a highly variable and customizable component. It comes in several
design variants and provides a handful of building blocks you can use to achieve
your specific design goals.

## JavaScript Plugin

For full functionality you need to provide Spirit JavaScript which will handle
toggling of the Header component:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript
plugins.

Or feel free to write the controlling script yourself.

## Accessibility Guidelines

- Ensure accessibility by using a `<nav>` element or, if using a more generic
  element such as a `<div>`, add a `role="navigation"` to every navigation to
  explicitly identify it as a landmark region for users of assistive
  technologies.
- Indicate the current item by using `aria-current="page"` for the current
  page or `aria-current="true"` for the current item in a set.
- Don't forget to provide textual equivalents for icon buttons. Use either the
  `aria-label` attribute, or the provided `accessibility-hidden` helper class.
- For Header to work correctly with assistive technologies, the `aria-expanded`
  attributes need to be updated by JavaScript when Header is toggled.

👉 The animation effect of this component is dependent on the
`prefers-reduced-motion` media query.

🌍 Although we don't need it yet, this component experimentally supports RTL
languages (because just a single line had to be added to make it all work 🎉).

## Minimal Header

Without any modifier, Header is ready to contain necessary blocks in a classic
left-to-right layout (in LTR documents). Please note it is fully transparent
unless you add a color variant modifier class.

```html
<header class="Header">
  <a href="#" aria-label="Company homepage">
    <img src="…" alt="Company" />
  </a>
</header>
```

## Color Variants

Currently, Header comes in two color variants: **transparent** (for dark
backgrounds) and **inverted** (for light backgrounds). Add `Header--inverted`
modifier class to apply inverted background color to Header.

```html
<header class="Header Header--inverted">
  <a href="#" aria-label="Company homepage">
    <img src="…" alt="Company" />
  </a>
</header>
```

## Simple Header

The `Header--simple` modifier makes the header bar slightly shorter and aligns
its content to the center. Use this design variant when all you need on the page
is just branding.

```html
<header class="Header Header--simple">
  <a href="#" aria-label="Company homepage">
    <img src="…" alt="Company" />
  </a>
</header>
```

## Supported Content

To create a responsive header with top-level navigation, there are the following
building blocks to use:

1. Inside Header:
   1. mobile-only actions, including toggle button by default,
   2. desktop-only actions with primary and secondary action slots.
2. Inside Header Dialog:
   1. primary actions slot (all breakpoints),
   2. secondary actions slot (all breakpoints).

## Header

### Mobile-Only Actions

Slot for actions that are intended to display on mobile and tablet screens only.
It is designed to hold the toggle button (see below) but you can add as many
custom elements as the free space in Header allows.

```html
<div class="Header__actions Header__actions--mobileOnly">
  <!-- Mobile-only actions -->
</div>
```

#### Toggle Button

Toggle button reveals the [Header Dialog](#header-dialog) containing actions for
small screens (up to the desktop breakpoint). It makes use of an inverted Button
by default.

The toggle button implements Spirit's Off-canvas JavaScript plugin. It is linked
to the corresponding instance of Header Dialog via ID placed in `data-target`
and `aria-controls` attributes.

```html
<button
  type="button"
  class="Button Button--inverted Button--medium"
  data-toggle="offcanvas"
  data-target="#my-header-dialog"
  aria-controls="my-header-dialog"
  aria-expanded="false"
>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  <span class="accessibility-hidden">Menu</span>
</button>
```

### Desktop-Only Actions

As the name suggests, desktop-only actions are intended to display on desktop
screens only. There are two slots you can use: primary actions (aligned to
left in LTR documents), and secondary actions (aligned to right).

👉 It is critical to **make sure all your actions fit the Header on the
desktop breakpoint**. Spirit does not provide any overflow control here.

```html
<nav class="Header__actions Header__actions--desktopOnly Header__actions--primary" aria-label="Main navigation">
  <!-- Desktop-only primary actions -->
</nav>
<div class="Header__actions Header__actions--desktopOnly Header__actions--secondary">
  <!-- Desktop-only secondary actions -->
</div>
```

#### Navigation

Navigation is designed to live in either of the action slots (just remember you
should use the `<nav>` element with the appropriate `aria-label` for that slot,
see the example above).

👉 As of now, only single-level navigation is supported. You may consider
using the [Header Dialog](#header-dialog) for other use cases such as the user
menu.

```html
<ul class="Header__nav">
  <li class="Header__navItem">
    <a href="#" class="Header__link Header__link--current" aria-current="page">Job offers</a>
  </li>
  <li class="Header__navItem">
    <a href="#" class="Header__link">Part-time jobs</a>
  </li>
  <li class="Header__navItem">
    <a href="#" class="Header__link">Inspiration</a>
  </li>
  <li class="Header__navItem">
    <a href="#" class="Header__link">Replies</a>
  </li>
  <li class="Header__navItem">
    <a href="#" class="Header__link">Employers</a>
  </li>
</ul>
```

Both links and buttons are supported by `Header__link` class:

```html
<ul class="Header__nav">
  <li class="Header__navItem">
    <a href="#" class="Header__link">Link item</a>
  </li>
  <li class="Header__navItem">
    <button type="button" class="Header__link">Button item</button>
  </li>
</ul>
```

Use `Header__text` class if you need to display text instead of link:

```html
<ul class="Header__nav">
  <li class="Header__navItem">
    <span class="Header__text">Job offers</span>
  </li>
</ul>
```

## Header Dialog

Header Dialog is Spirit's solution for responsive navigation and selected use
cases such as the user menu. Please note Header Dialog is not intended to be
used for second-level navigation in general.

Header Dialog implements the [`<dialog>`][mdn-dialog] element to easily provide
the best possible user experience and accessibility.

```html
<dialog id="my-header-dialog" class="HeaderDialog" aria-label="Menu">
  <div class="HeaderDialog__panel">
    <div class="HeaderDialog__content">
      <!-- Close button with primary and secondary action slots -->
    </div>
  </div>
</dialog>
```

### Close Button

Close button closes the Header Dialog using our Off-canvas JavaScript plugin.

```html
<button
  type="button"
  class="HeaderDialog__close"
  data-dismiss="offcanvas"
  data-target="#my-header-dialog"
  aria-controls="my-header-dialog"
  aria-expanded="false"
>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
  <span class="accessibility-hidden">Close</span>
</button>
```

### Primary and Secondary Actions

There are two slots for actions inside Header Dialog: primary actions slot and
the optional secondary actions slot.

👉 When there are too many actions, vertical overflow is correctly handled on
small screens (`HeaderDialog__content` provides vertical scrolling when
necessary).

```html
<nav class="HeaderDialog__actions HeaderDialog__actions--primary" aria-label="Main navigation">
  <!-- Primary actions -->
</nav>
<div class="HeaderDialog__actions HeaderDialog__actions--secondary">
  <!-- Secondary actions -->
</div>
```

#### Navigation

Navigation capabilities are very similar to those of Header. All principles
apply here as well, with the only difference in class names starting with
`HeaderDialog` instead of `Header`.

```html
<ul class="HeaderDialog__nav">
  <li class="HeaderDialog__navItem">
    <a href="#" class="HeaderDialog__link HeaderDialog__link--current" aria-current="page">Job offers</a>
  </li>
  <li class="HeaderDialog__navItem">
    <a href="#" class="HeaderDialog__link">Part-time jobs</a>
  </li>
  <li class="HeaderDialog__navItem">
    <a href="#" class="HeaderDialog__link">Inspiration</a>
  </li>
  <li class="HeaderDialog__navItem">
    <a href="#" class="HeaderDialog__link">Replies</a>
  </li>
  <li class="HeaderDialog__navItem">
    <a href="#" class="HeaderDialog__link">Employers</a>
  </li>
</ul>
```

Again, navigation items can be links, buttons, or text:

```html
<ul class="HeaderDialog__nav">
  <li class="HeaderDialog__navItem">
    <a href="#" class="HeaderDialog__link">Link item</a>
  </li>
  <li class="HeaderDialog__navItem">
    <button type="button" class="HeaderDialog__link">Button item</button>
  </li>
  <li class="HeaderDialog__navItem">
    <span class="HeaderDialog__link">Text item</span>
  </li>
</ul>
```

## Composition

This is how all supported building blocks of the Header build up the complete
composition:

```html
<header class="Header Header--inverted">
  <!-- Branding -->
  <!-- Mobile-only actions -->
  <!-- Desktop-only primary actions slot -->
  <!-- Desktop-only secondary actions slot -->
</header>
```

And the complete Header Dialog:

```html
<dialog class="HeaderDialog">
  <div class="HeaderDialog__panel">
    <div class="HeaderDialog__content">
      <!-- Close button -->
      <!-- Primary actions slot -->
      <!-- Secondary actions slot -->
    </div>
  </div>
</dialog>
```

<details>
  <summary>Show full example code of Header with responsive navigation</summary>

```html
<!-- Header -->
<header class="Header Header--inverted">
  <a href="#" aria-label="Spirit homepage">
    <img src="…" width="65" height="24" alt="Spirit" />
  </a>
  <div class="Header__actions Header__actions--mobileOnly">
    <button
      type="button"
      class="Button Button--inverted Button--medium Button--square"
      data-toggle="offcanvas"
      data-target="#my-header-dialog"
      aria-controls="my-header-dialog"
      aria-expanded="false"
    >
      <svg class="Icon" width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#hamburger" />
      </svg>
      <span class="accessibility-hidden">Menu</span>
    </button>
  </div>
  <nav class="Header__actions Header__actions--desktopOnly Header__actions--primary" aria-label="Main navigation">
    <ul class="Header__nav">
      <li class="Header__navItem">
        <a href="#" class="Header__link Header__link--current" aria-current="page">Job offers</a>
      </li>
      <li class="Header__navItem">
        <a href="#" class="Header__link">Part-time jobs</a>
      </li>
      <li class="Header__navItem">
        <a href="#" class="Header__link">Inspiration</a>
      </li>
      <li class="Header__navItem">
        <a href="#" class="Header__link">Replies</a>
      </li>
      <li class="Header__navItem">
        <a href="#" class="Header__link">Employers</a>
      </li>
    </ul>
  </nav>
  <div class="Header__actions Header__actions--desktopOnly Header__actions--secondary">
    <a href="#" class="Button Button--primary Button--medium">Sign in</a>
    <a href="#" class="Button Button--inverted Button--medium">Enterprise</a>
  </div>
</header>

<!-- Header Dialog with mobile navigation -->
<dialog id="my-header-dialog" class="HeaderDialog" aria-label="Menu">
  <div class="HeaderDialog__panel">
    <div class="HeaderDialog__content">
      <button
        type="button"
        class="HeaderDialog__close"
        data-dismiss="offcanvas"
        data-target="#my-header-dialog"
        aria-controls="my-header-dialog"
        aria-expanded="false"
      >
        <svg class="Icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#close" />
        </svg>
        <span class="accessibility-hidden">Close</span>
      </button>
      <nav class="HeaderDialog__actions HeaderDialog__actions--primary" aria-label="Main navigation">
        <ul class="HeaderDialog__nav">
          <li class="HeaderDialog__navItem">
            <a href="#" class="HeaderDialog__link HeaderDialog__link--current" aria-current="page">Job offers</a>
          </li>
          <li class="HeaderDialog__navItem">
            <a href="#" class="HeaderDialog__link">Part-time jobs</a>
          </li>
          <li class="HeaderDialog__navItem">
            <a href="#" class="HeaderDialog__link">Inspiration</a>
          </li>
          <li class="HeaderDialog__navItem">
            <a href="#" class="HeaderDialog__link">Replies</a>
          </li>
          <li class="HeaderDialog__navItem">
            <a href="#" class="HeaderDialog__link">Employers</a>
          </li>
        </ul>
      </nav>
      <div class="HeaderDialog__actions HeaderDialog__actions--secondary">
        <a href="#" class="Button Button--primary Button--medium">Sign in</a>
        <a href="#" class="Button Button--inverted Button--medium">Enterprise</a>
      </div>
    </div>
  </div>
</dialog>
```

</details>

👉 See the [live demo][examples] for more examples, including the demo with
Header Dialog for desktop.

## Known Limitations

- The Header breakpoint is mapped to the desktop breakpoint and currently cannot
  be changed.
- As of now, the Header height cannot be changed.
- Header Dialog is currently the only responsive option for actions on mobile
  and tablet screens.
- Only single-level navigation is currently supported. However, you can provide
  a custom navigation component instead of the built-in `Header__nav` (or
  `HeaderDialog__nav`) as long as it works with the responsive off-canvas
  design of Header Dialog.

✍️ Please do feel free to let us know should you believe this component lacks
some important capabilities. Thank you! 🙏

[examples]: https://lmc-eu.github.io/spirit-design-system/web/
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[mdn-dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
