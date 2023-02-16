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

### DEPRECATION NOTICE

⚠️ The existing Header JavaScript plugin is deprecated and will be superseded
by the Off-canvas plugin in next major version.

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
<div class="HeaderMobileActions">
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
  <svg width="24" height="24" aria-hidden="true">
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
desktop breakpoint**. Spirit intentionally does not provide any overflow
control here.

```html
<nav class="HeaderDesktopActions HeaderDesktopActions--primary" aria-label="Main navigation">
  <!-- Desktop-only primary actions -->
</nav>
<nav class="HeaderDesktopActions HeaderDesktopActions--secondary">
  <!-- Desktop-only secondary actions -->
</nav>
```

#### Navigation

Navigation is designed to live in either of the action slots (just remember you
should use the `<nav>` element with the appropriate `aria-label` for that slot,
see the example above).

👉 As of now, only single-level navigation is supported. You may consider
using the [Header Dialog](#header-dialog) for other use cases such as the user
menu.

```html
<ul class="HeaderNav">
  <li class="HeaderNavItem">
    <a href="#" class="HeaderLink HeaderLink--current" aria-current="page">Job offers</a>
  </li>
  <li class="HeaderNavItem">
    <a href="#" class="HeaderLink">Part-time jobs</a>
  </li>
  <li class="HeaderNavItem">
    <a href="#" class="HeaderLink">Inspiration</a>
  </li>
  <li class="HeaderNavItem">
    <a href="#" class="HeaderLink">Replies</a>
  </li>
  <li class="HeaderNavItem">
    <a href="#" class="HeaderLink">Employers</a>
  </li>
</ul>
```

Both links and buttons are supported by `HeaderLink` class:

```html
<ul class="HeaderNav">
  <li class="HeaderNavItem">
    <a href="#" class="HeaderLink">Link item</a>
  </li>
  <li class="HeaderNavItem">
    <button type="button" class="HeaderLink">Button item</button>
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
      <!-- Close button with primary and secondary actions -->
    </div>
  </div>
</dialog>
```

### Close Button

Close button closes the Header Dialog using our Off-canvas JavaScript plugin.

```html
<button
  type="button"
  class="HeaderDialogCloseButton"
  data-dismiss="offcanvas"
  data-target="#my-header-dialog"
  aria-controls="my-header-dialog"
  aria-expanded="false"
>
  <svg width="24" height="24" aria-hidden="true">
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
<nav class="HeaderDialogActions HeaderDialogActions--primary" aria-label="Main navigation">
  <!-- Primary actions -->
</nav>
<nav class="HeaderDialogActions HeaderDialogActions--secondary">
  <!-- Secondary actions -->
</nav>
```

#### Navigation

Navigation capabilities are very similar to those of Header. All principles
apply here as well, with the only difference in class names starting with
`HeaderDialog` instead of `Header`.

```html
<ul class="HeaderDialogNav">
  <li class="HeaderDialogNavItem">
    <a href="#" class="HeaderDialogLink HeaderDialogLink--current" aria-current="page">Job offers</a>
  </li>
  <li class="HeaderDialogNavItem">
    <a href="#" class="HeaderDialogLink">Part-time jobs</a>
  </li>
  <li class="HeaderDialogNavItem">
    <a href="#" class="HeaderDialogLink">Inspiration</a>
  </li>
  <li class="HeaderDialogNavItem">
    <a href="#" class="HeaderDialogLink">Replies</a>
  </li>
  <li class="HeaderDialogNavItem">
    <a href="#" class="HeaderDialogLink">Employers</a>
  </li>
</ul>
```

Navigation items can be links, buttons, or just text:

```html
<ul class="HeaderDialogNav">
  <li class="HeaderDialogNavItem">
    <a href="#" class="HeaderDialogLink">Link item</a>
  </li>
  <li class="HeaderDialogNavItem">
    <button type="button" class="HeaderDialogLink">Button item</button>
  </li>
  <li class="HeaderDialogNavItem">
    <span class="HeaderDialogText">Text item</span>
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
  <!-- Desktop-only primary actions -->
  <!-- Desktop-only secondary actions -->
</header>
```

And the complete Header Dialog:

```html
<dialog class="HeaderDialog">
  <div class="HeaderDialog__panel">
    <div class="HeaderDialog__content">
      <!-- Close button -->
      <!-- Primary actions -->
      <!-- Secondary actions -->
    </div>
  </div>
</dialog>
```

<details>
  <summary>Show full example code of Header with responsive navigation</summary>

```html
<!-- Header: start -->
<header class="Header Header--inverted">
  <a href="#" aria-label="Spirit homepage">
    <img src="…" width="65" height="24" alt="Spirit" />
  </a>

  <!-- HeaderMobileActions: start -->
  <div class="HeaderMobileActions">
    <button
      type="button"
      class="Button Button--inverted Button--medium Button--square"
      data-toggle="offcanvas"
      data-target="#header_dialog_example_1"
      aria-controls="header_dialog_example_1"
      aria-expanded="false"
    >
      <svg width="24" height="24" aria-hidden="true">
        <use xlink:href="/icons/svg/sprite.svg#hamburger" />
      </svg>
      <span class="accessibility-hidden">Menu</span>
    </button>
  </div>
  <!-- HeaderMobileActions: end -->

  <!-- HeaderDesktopActions: start -->
  <nav class="HeaderDesktopActions HeaderDesktopActions--primary" aria-label="Main navigation">
    <!-- HeaderNav: start -->
    <ul class="HeaderNav">
      <li class="HeaderNavItem">
        <a href="#" class="HeaderLink HeaderLink--current" aria-current="page">Job offers</a>
      </li>
      <li class="HeaderNavItem">
        <a href="#" class="HeaderLink">Part-time jobs</a>
      </li>
      <li class="HeaderNavItem">
        <a href="#" class="HeaderLink">Inspiration</a>
      </li>
      <li class="HeaderNavItem">
        <a href="#" class="HeaderLink">Replies</a>
      </li>
      <li class="HeaderNavItem">
        <a href="#" class="HeaderLink">Employers</a>
      </li>
    </ul>
    <!-- HeaderNav: end -->
  </nav>
  <!-- HeaderDesktopActions: end -->

  <!-- HeaderDesktopActions: start -->
  <nav class="HeaderDesktopActions HeaderDesktopActions--secondary">
    <a href="#" class="Button Button--primary Button--medium">Sign in</a>
    <a href="#" class="Button Button--inverted Button--medium">Enterprise</a>
  </nav>
  <!-- HeaderDesktopActions: end -->
</header>
<!-- Header: end -->

<!-- HeaderDialog: start -->
<dialog id="header_dialog_example_1" class="HeaderDialog" aria-label="Menu">
  <div class="HeaderDialog__panel">
    <div class="HeaderDialog__content">
      <!-- HeaderDialogCloseButton: start -->
      <button
        type="button"
        class="HeaderDialogCloseButton"
        data-dismiss="offcanvas"
        data-target="#header_dialog_example_1"
        aria-controls="header_dialog_example_1"
        aria-expanded="false"
      >
        <svg width="24" height="24" aria-hidden="true">
          <use xlink:href="/icons/svg/sprite.svg#close" />
        </svg>
        <span class="accessibility-hidden">Close</span>
      </button>
      <!-- HeaderDialogCloseButton: end -->

      <!-- HeaderDialogActions: start -->
      <nav class="HeaderDialogActions HeaderDialogActions--primary" aria-label="Main navigation">
        <!-- HeaderDialogNav: start -->
        <ul class="HeaderDialogNav">
          <li class="HeaderDialogNavItem">
            <a href="#" class="HeaderDialogLink HeaderDialogLink--current" aria-current="page">Job offers</a>
          </li>
          <li class="HeaderDialogNavItem">
            <a href="#" class="HeaderDialogLink">Part-time jobs</a>
          </li>
          <li class="HeaderDialogNavItem">
            <a href="#" class="HeaderDialogLink">Inspiration</a>
          </li>
          <li class="HeaderDialogNavItem">
            <a href="#" class="HeaderDialogLink">Replies</a>
          </li>
          <li class="HeaderDialogNavItem">
            <a href="#" class="HeaderDialogLink">Employers</a>
          </li>
        </ul>
        <!-- HeaderDialogNav: end -->
      </nav>
      <!-- HeaderDialogActions: end -->

      <!-- HeaderDialogActions: start -->
      <nav class="HeaderDialogActions HeaderDialogActions--secondary">
        <a href="#" class="Button Button--primary Button--medium">Sign in</a>
        <a href="#" class="Button Button--inverted Button--medium">Enterprise</a>
      </nav>
      <!-- HeaderDialogActions: end -->
    </div>
  </div>
</dialog>
<!-- HeaderDialog: end -->
```

</details>

## Supported Content (DEPRECATED)

<details>
  <summary>Show instructions for the deprecated Header composition</summary>

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
  class="Button Button--inverted Button--medium"
  data-toggle="header"
  data-target="#my-header-actions"
  aria-controls="my-header-actions"
  aria-expanded="false"
>
  <svg width="24" height="24" aria-hidden="true">
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
      <svg width="24" height="24" aria-hidden="true">
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

</details>

## Composition (DEPRECATED)

<details>
  <summary>Show instructions for the deprecated Header composition</summary>

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
  <a href="#" aria-label="Company homepage">
    <img src="…" alt="Logo" />
  </a>
  <div class="Header__mobileOnlyActions">
    <button
      type="button"
      class="Button Button--inverted Button--medium"
      data-toggle="header"
      data-target="#my-header-actions"
      aria-controls="my-header-actions"
      aria-expanded="false"
    >
      <svg width="24" height="24" aria-hidden="true">
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
        <svg width="24" height="24" aria-hidden="true">
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
        <a href="#" class="Button Button--primary Button--medium">Sign in</a>
        <a href="#" class="Button Button--inverted Button--medium">Enterprise</a>
      </div>
    </div>
  </nav>
</header>
```

</details>

👉 See the [live demo][examples] for more examples, including the desktop dialog
demo.

</details>

## Known Limitations

- Header Dialog is currently the only responsive option for actions on mobile
  and tablet screens. As a consequence, the navigation markup needs to be
  duplicated in your HTML.
- Only single-level navigation is currently supported. However, you can provide
  a custom navigation component instead of the built-in `HeaderNav` (or
  `HeaderDialogNav`) as long as it works with the responsive off-canvas
  design of Header Dialog.
- The Header breakpoint is mapped to the desktop breakpoint and currently cannot
  be changed.
- As of now, the Header height cannot be changed.

✍️ Please do feel free to let us know should you believe this component lacks
some important capabilities. Thank you! 🙏

[examples]: https://lmc-eu.github.io/spirit-design-system/
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[mdn-dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
