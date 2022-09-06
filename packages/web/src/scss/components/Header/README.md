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

## Minimal Header

Without any modifier, Header is ready to contain necessary blocks in a classic
left-to-right layout. Please note it is fully transparent unless you add a color
variant modifier class.

```html
<header class="Header">
  <a href="#">
    <img src="…" alt="Logo" />
  </a>
</header>
```

## Color Variants

Currently, Header comes in two color variants: **transparent** (for dark
backgrounds) and **inverted** (for light backgrounds). Add `Header--inverted`
modifier class to make Header background inverted.

```html
<header class="Header Header--inverted">
  <a href="#">
    <img src="…" alt="Logo" />
  </a>
</header>
```

## Simple Header

The `Header--simple` modifier makes the header bar slightly shorter and aligns
its content to the center. Use this design variant when all you need on the page
is just branding.

```html
<header class="Header Header--simple">
  <a href="#">
    <img src="…" alt="Logo" />
  </a>
</header>
```

## Supported Content

To create a responsive header with top-level navigation, there are the following
building blocks to use:

1. mobile-only actions, including toggle button by default,
2. responsive actions bar with primary and secondary action slots,
3. responsive navigation,
4. header dialog.

### Mobile-Only Actions

Slot for actions that are intended to display on mobile and tablet screens only.
It is designed to hold the toggle button (see below) but you can add as many
custom elements as the free space in Header allows.

```html
<div class="Header__mobileOnlyActions">
  <!-- Mobile-only actions -->
</div>
```

#### Toggle Button

Toggle button reveals actions on small screens (up to the desktop breakpoint).
It makes use of an inverted Button by default.

```html
<button
  type="button"
  class="Button Button--inverted"
  data-toggle="header"
  data-target="#my-header-actions"
  aria-controls="my-header-actions"
  aria-expanded="false"
>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  <span class="accessibility-hidden">Menu</span>
</button>
```

### Actions Bar

Actions bar is a wrapper that holds one slot for primary actions (aligned to
left), one slot for secondary actions (aligned to right), and a closing button.
On small screens, actions are presented in form of an off-canvas pane sliding
from the right. From the desktop breakpoint up, the actions bar is rendered
inside Header.

👉 While vertical overflow is correctly handled on small screens
(`Header__content` provides vertical scrolling automatically), it is critical to
**make sure all your actions fit the Header on the desktop breakpoint**.

```html
<nav id="my-header-actions" class="Header__bar">
  <div class="Header__content">
    <button
      type="button"
      class="Header__close"
      data-toggle="header"
      data-target="#my-header-actions"
      aria-controls="my-header-actions"
      aria-expanded="false"
    >
      <svg class="Icon" width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#close" />
      </svg>
      <span class="accessibility-hidden">Close</span>
    </button>
    <div class="Header__actions Header__actions--primary">
      <!-- Primary actions -->
    </div>
    <div class="Header__actions Header__actions--secondary">
      <!-- Secondary actions -->
    </div>
  </div>
</nav>
```

### Navigation

Navigation is designed to live in either of the action slots. As of now, only
single-level navigation is supported. You may consider using the desktop dialog
for special use cases though.

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

Use `Header__text` class if you need to display text instead of link:

```html
<ul class="Header__nav">
  <li class="Header__navItem">
    <span class="Header__text">Job offers</span>
  </li>
</ul>
```

### Dialog

Dialog is an optional enhancement of the responsive actions pane. It looks and
behaves the same on small screens, but it keeps the off-canvas appearance also
on big screens (i.e. from the desktop breakpoint up).

Dialog consists of almost exactly the same code as the actions pane. The only
difference is the class of the wrapping `<nav>`:

```html
<nav id="my-header-desktop-dialog" class="Header__dialog">
  <div class="Header__content">
    <!-- Close button with optional primary and secondary action slots -->
  </div>
</nav>
```

## Composition

This is how all supported building blocks build up the complete Header:

```html
<header class="Header Header--inverted">
  <!-- Branding -->
  <!-- Toggle -->
  <!-- Actions bar: start -->
  <!--   Primary actions slot -->
  <!--   Secondary actions slot -->
  <!-- Actions bar: end -->
  <!-- Dialog: start -->
  <!--   Primary actions slot -->
  <!--   Secondary actions slot -->
  <!-- Dialog: end -->
</header>
```

<details>
  <summary>Show full example code (without desktop dialog)</summary>

```html
<header class="Header Header--inverted">
  <a href="#">
    <img src="…" alt="Logo" />
  </a>
  <div class="Header__mobileOnlyActions">
    <button
      type="button"
      class="Button Button--inverted"
      data-toggle="header"
      data-target="#my-header-actions"
      aria-controls="my-header-actions"
      aria-expanded="false"
    >
      <svg class="Icon" width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#hamburger" />
      </svg>
      <span class="accessibility-hidden">Menu</span>
    </button>
  </div>
  <nav id="my-header-actions" class="Header__bar">
    <div class="Header__content">
      <button
        type="button"
        class="Header__close"
        data-toggle="header"
        data-target="#my-header-actions"
        aria-controls="my-header-actions"
        aria-expanded="false"
      >
        <svg class="Icon" width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#close" />
        </svg>
        <span class="accessibility-hidden">Close</span>
      </button>
      <div class="Header__actions Header__actions--primary">
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
      </div>
      <div class="Header__actions Header__actions--secondary">
        <a href="#" class="Button Button--primary">Sign in</a>
        <a href="#" class="Button Button--inverted">Enterprise</a>
      </div>
    </div>
  </nav>
</header>
```

</details>

👉 See the [live demo][examples] for more examples, including the desktop dialog
demo.

## Known Limitations

- The off-canvas pane is currently the only responsive option for the actions
  bar on mobile and tablet screens.
- The header breakpoint is mapped to the desktop breakpoint and currently cannot
  be changed.
- Only single-level navigation is currently supported. However, you can provide
  a custom navigation component instead of the built-in `Header__nav` as long as
  it works with the responsive off-canvas design.
- As of now, the header height cannot be changed.

✍️ Please do feel free to let us know when you believe this component lacks some
important capabilities. Thank you! 🙏

[examples]: https://lmc-eu.github.io/spirit-design-system/web/
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
