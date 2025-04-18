# Header

This is the Twig implementation of the [Header][header] component.

The Header is a highly variable and customizable component. It comes in several
design variants and provides a handful of building blocks you can use to achieve
your specific design goals.

The Header is a composition of several subcomponents:

- [Header](#minimal-header)
  - [HeaderMobileActions](#mobile-only-actions)
  - [HeaderDesktopActions](#desktop-only-actions)
    - [HeaderNav](#navigation)
      - [HeaderNavItem](#navigation)
        - [HeaderLink](#navigation)
        - [HeaderButton](#navigation)
- [HeaderDialog](#header-dialog)
  - [HeaderDialogCloseButton](#close-button)
  - [HeaderDialogActions](#primary-and-secondary-actions)
    - [HeaderDialogNav](#navigation-1)
      - [HeaderDialogNavItem](#navigation-1)
        - [HeaderDialogLink](#navigation-1)
        - [HeaderDialogButton](#navigation-1)
        - [HeaderDialogText](#navigation-1)

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript, which will handle
toggling of the Header component:

```twig
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript
plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

## Accessibility Guidelines

👉 The animation effect of this component is dependent on the
`prefers-reduced-motion` media query.

🌍 Although we don't need it yet, this component experimentally supports RTL
languages (because just a single line had to be added to make it all work 🎉).

## Minimal Header

Without any modifier, Header is ready to contain necessary blocks in a classic
left-to-right layout (in LTR documents). Please note it is fully transparent
unless you specify a color variant.

```twig
<Header>
    <a href="/">
        <img
          src="https://www.example.com/logo.png"
          width="65"
          height="24"
          alt="Spirit"
        />
    </a>
</Header>
```

## Color Variants

Currently, Header comes in two color variants: **primary** and **transparent**
(for non-solid backgrounds like gradients or images). Use the `color` property
to apply the desired background color to Header.

```twig
<Header color="transparent">
    <a href="/">
        <img
          src="https://www.example.com/logo.png"
          width="65"
          height="24"
          alt="Spirit"
        />
    </a>
</Header>
```

## Simple Header

The `isSimple` modifier makes the header bar slightly shorter and aligns its
content to the center. Use this design variant when all you need on the page is
just branding.

```twig
<Header isSimple>
    <a href="/">
        <img
          src="https://www.example.com/logo.png"
          width="65"
          height="24"
          alt="Spirit"
        />
    </a>
</Header>
```

## API

| Name       | Type                          | Default   | Required | Description                         |
| ---------- | ----------------------------- | --------- | -------- | ----------------------------------- |
| `color`    | \[`primary` \| `transparent`] | `primary` | ✕        | Color variant                       |
| `isSimple` | `bool`                        | `false`   | ✕        | Shorter, centered version of Header |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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
It holds the toggle button by default, but you can add as many custom elements
as the free space in Header allows.

```twig
<HeaderMobileActions dialogId="my-header-dialog" />
```

Toggle button is already part of the mobile actions component. It is linked to
the [Header Dialog](#header-dialog) via the `dialogId` prop.

#### Custom Mobile Actions

You can place any custom content into the mobile actions component:

```twig
<HeaderMobileActions dialogId="my-header-dialog">
  <!-- Mobile-only actions -->
</HeaderMobileActions>
```

#### API

| Name              | Type     | Default | Required | Description                     |
| ----------------- | -------- | ------- | -------- | ------------------------------- |
| `dialogId`        | `string` | —       | ✓        | ID of the linked HeaderDialog   |
| `menuToggleLabel` | `string` | `Menu`  | ✕        | Label of the menu toggle button |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### Desktop-Only Actions

As the name suggests, desktop-only actions are intended to display on desktop screens only. They generally work as flex
containers that define vertical alignment and spacing.

If you need to align actions to the end of the Header, use the `isAtEnd` prop.

👉 It is critical to **make sure all your actions fit the Header on the
desktop breakpoint**. Spirit intentionally does not provide any overflow
control here.

```twig
<HeaderDesktopActions aria-label="Main navigation">
  <!-- Desktop-only actions -->
</HeaderDesktopActions>
<HeaderDesktopActions isAtEnd>
  <!-- Desktop-only actions aligned to the end -->
</HeaderDesktopActions>
```

#### API

| Name      | Type   | Default | Required | Description                                 |
| --------- | ------ | ------- | -------- | ------------------------------------------- |
| `isAtEnd` | `bool` | `false` | ✕        | If true, the actions are aligned to the end |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

#### Navigation

Navigation is designed to live in either of the action slots.

👉 As of now, only single-level navigation is supported. You may consider
using the [Header Dialog](#header-dialog) for other use cases such as the user
menu.

```twig
<HeaderNav>
  <HeaderNavItem>
    <HeaderLink href="/" isCurrent>Job offers</HeaderLink>
  </HeaderNavItem>
  <HeaderNavItem>
    <HeaderLink href="/">Part-time jobs</HeaderLink>
  </HeaderNavItem>
  <HeaderNavItem>
    <HeaderLink href="/">Inspiration</HeaderLink>
  </HeaderNavItem>
  <HeaderNavItem>
    <HeaderLink href="/">Replies</HeaderLink>
  </HeaderNavItem>
  <HeaderNavItem>
    <HeaderLink href="/">Employers</HeaderLink>
  </HeaderNavItem>
</HeaderNav>
```

Both links and buttons are supported:

```twig
<HeaderNav>
  <HeaderNavItem>
    <HeaderLink href="/">Link item</HeaderLink>
  </HeaderNavItem>
  <HeaderNavItem>
    <HeaderButton>Button item</HeaderButton>
  </HeaderNavItem>
</HeaderNav>
```

#### Other Content

You can avoid using the [HeaderNav](#navigation) for standalone links. That way, you can combine links and buttons in
the same container:

```twig
<HeaderDesktopActions isAtEnd>
  <HeaderButton>Marian</HeaderButton>
  <Button color="primary">Sign in</Button>
</HeaderDesktopActions>
```

##### HeaderNav API

There is no API for HeaderNav.

##### HeaderNavItem API

There is no API for HeaderNavItem.

##### HeaderLink API

| Name        | Type     | Default | Required | Description                   |
| ----------- | -------- | ------- | -------- | ----------------------------- |
| `href`      | `string` | —       | ✓        | Link URL                      |
| `isCurrent` | `bool`   | `false` | ✕        | Mark link as current          |
| `target`    | `string` | `null`  | ✕        | Browsing context for the link |

##### HeaderButton API

There is no API for HeaderButton.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Header Dialog

Header Dialog is Spirit's solution for responsive navigation and selected use
cases such as the user menu. Please note Header Dialog is not intended to be
used for second-level navigation in general.

```twig
<HeaderDialog id="my-header-dialog">
  <!-- Close button with primary and secondary actions -->
</HeaderDialog>
```

### API

| Name | Type     | Default | Required | Description                            |
| ---- | -------- | ------- | -------- | -------------------------------------- |
| `id` | `string` | —       | ✓        | ID to be linked in HeaderMobileActions |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### Close Button

Close button closes the Header Dialog using our Off-canvas JavaScript plugin.

```twig
<HeaderDialogCloseButton dialogId="my-header-dialog" />
```

#### API

| Name            | Type     | Default | Required | Description                     |
| --------------- | -------- | ------- | -------- | ------------------------------- |
| `dialogId`      | `string` | —       | ✓        | ID of the parent HeaderDialog   |
| `enableDismiss` | `bool`   | `true`  | ✕        | Enable Off-canvas JS dismiss    |
| `label`         | `string` | `Close` | ✕        | Label of the menu toggle button |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### Primary and Secondary Actions

There are two slots for actions inside Header Dialog: primary actions slot and
the optional secondary actions slot.

```twig
<HeaderDialogActions aria-label="Main navigation">
  <!-- Primary actions -->
</HeaderDialogActions>
<HeaderDialogActions color="secondary">
  <!-- Secondary actions -->
</HeaderDialogActions>
```

#### API

| Name    | Type                        | Default   | Required | Description               |
| ------- | --------------------------- | --------- | -------- | ------------------------- |
| `color` | \[`primary` \| `secondary`] | `primary` | ✕        | Color of the actions slot |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

#### Navigation

Navigation capabilities are very similar to those of Header. All principles
apply here as well, with the only difference in component names starting with
`HeaderDialog` instead of `Header`.

```twig
<HeaderDialogNav>
  <HeaderDialogNavItem>
    <HeaderDialogLink href="/" isCurrent>Job offers</HeaderDialogLink>
  </HeaderDialogNavItem>
  <HeaderDialogNavItem>
    <HeaderDialogLink href="/">Part-time jobs</HeaderDialogLink>
  </HeaderDialogNavItem>
  <HeaderDialogNavItem>
    <HeaderDialogLink href="/">Inspiration</HeaderDialogLink>
  </HeaderDialogNavItem>
  <HeaderDialogNavItem>
    <HeaderDialogLink href="/">Replies</HeaderDialogLink>
  </HeaderDialogNavItem>
  <HeaderDialogNavItem>
    <HeaderDialogLink href="/">Employers</HeaderDialogLink>
  </HeaderDialogNavItem>
</HeaderDialogNav>
```

Navigation items can be links, buttons, or just text:

```twig
<HeaderDialogNav>
  <HeaderDialogNavItem>
    <HeaderDialogLink href="/">
      Link item
    </HeaderDialogLink>
  </HeaderDialogNavItem>
  <HeaderDialogNavItem>
    <HeaderDialogButton>
      Button item
    </HeaderDialogButton>
  </HeaderDialogNavItem>
  <HeaderDialogNavItem>
    <HeaderDialogText>
      Text item
    </HeaderDialogText>
  </HeaderDialogNavItem>
</HeaderDialogNav>
```

##### HeaderDialogNav API

There is no API for HeaderDialogNav.

##### HeaderDialogNavItem API

There is no API for HeaderDialogNavItem.

##### HeaderDialogLink API

| Name        | Type     | Default | Required | Description                   |
| ----------- | -------- | ------- | -------- | ----------------------------- |
| `href`      | `string` | —       | ✓        | Link URL                      |
| `isCurrent` | `bool`   | `false` | ✕        | Mark link as current          |
| `target`    | `string` | `null`  | ✕        | Browsing context for the link |

##### HeaderDialogButton API

There is no API for HeaderDialogButton.

##### HeaderDialogText API

There is no API for HeaderDialogText.

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Composition

This is how all supported building blocks of the Header build up the complete
composition:

```twig
<Header>
  <!-- Branding -->
  <HeaderMobileActions dialogId="my-menu">
    <!-- Optional mobile-only actions -->
  </HeaderMobileActions>
  <HeaderDesktopActions>
    <!-- Desktop-only primary actions -->
    <HeaderNav>
      <HeaderNavItem>
        <HeaderLink href="/">Job offers</HeaderLink>
      </HeaderNavItem>
      <!-- … -->
    </HeaderNav>
  </HeaderDesktopActions>
  <HeaderDesktopActions isAtEnd>
    <!-- Desktop-only secondary actions -->
  </HeaderDesktopActions>
</Header>
```

And the complete Header Dialog:

```twig
<HeaderDialog id="my-menu">
  <HeaderDialogCloseButton dialogId="my-menu" />
  <HeaderDialogActions>
    <HeaderDialogNav>
      <!-- Primary actions -->
      <HeaderDialogNavItem>
        <HeaderDialogLink href="/">Job offers</HeaderDialogLink>
      </HeaderDialogNavItem>
      <!-- … -->
    </HeaderDialogNav>
  </HeaderDialogActions>
  <HeaderDialogActions color="secondary">
    <!-- Secondary actions -->
  </HeaderDialogActions>
</HeaderDialog>
```

<details>
  <summary>Show full example code of Header with responsive navigation</summary>

```twig
<Header>
  <a href="/" aria-label="Spirit homepage">
    <img src="…" width="65" height="24" alt="Spirit" />
  </a>
  <HeaderMobileActions dialogId="my-menu" />
  <HeaderDesktopActions aria-label="Main navigation">
    <HeaderNav>
      <HeaderNavItem>
        <HeaderLink href="/" isCurrent>Job offers</HeaderLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderLink href="/">Part-time jobs</HeaderLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderLink href="/">Inspiration</HeaderLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderLink href="/">Replies</HeaderLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderLink href="/">Employers</HeaderLink>
      </HeaderNavItem>
    </HeaderNav>
  </HeaderDesktopActions>
  <HeaderDesktopActions isAtEnd>
    <ButtonLink color="primary" href="/">Sign in</ButtonLink>
    <ButtonLink color="secondary" href="/">Enterprise</ButtonLink>
  </HeaderDesktopActions>
</Header>

<HeaderDialog id="my-menu">
  <HeaderDialogCloseButton dialogId="my-menu" />
  <HeaderDialogActions aria-label="Main navigation">
    <HeaderDialogNav>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="/" isCurrent>Job offers</HeaderDialogLink>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="/">Part-time jobs</HeaderDialogLink>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="/">Inspiration</HeaderDialogLink>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="/">Replies</HeaderDialogLink>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="/">Employers</HeaderDialogLink>
      </HeaderDialogNavItem>
    </HeaderDialogNav>
  </HeaderDialogActions>
  <HeaderDialogActions color="secondary">
    <ButtonLink color="primary" href="/">Sign in</ButtonLink>
    <ButtonLink color="secondary" href="/">Enterprise</ButtonLink>
  </HeaderDialogActions>
</HeaderDialog>
```

</details>

[header]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Header
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Header/README.md#javascript-plugin
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
