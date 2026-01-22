# Button

## Variants

```html
<button type="button" class="Button Button--primary Button--medium">Primary Button</button>
<button type="button" class="Button Button--secondary Button--medium">Secondary Button</button>
<button type="button" class="Button Button--tertiary Button--medium">Tertiary Button</button>
<button type="button" class="Button Button--plain Button--medium">Plain Button</button>
<button type="button" class="Button Button--success Button--medium">Success button</button>
<button type="button" class="Button Button--informative Button--medium">Informative button</button>
<button type="button" class="Button Button--warning Button--medium">Warning button</button>
<button type="button" class="Button Button--danger Button--medium">Danger button</button>
```

## Block-Level Button

⚠️ DEPRECATION NOTICE: The `Button--block` modifier is deprecated and will be removed in the next major release.

To span a `Button` to the full width of its parent, you can use display utility classes or the `Grid` classes to achieve the desired layout.

```html
<div class="d-grid">
  <button type="button" class="Button Button--primary Button--medium">Primary block-level Button</button>
</div>
<div class="d-grid d-tablet-block">
  <button type="button" class="Button Button--primary Button--medium">Primary responsive block-level Button</button>
</div>
<div
  class="Grid Grid--cols-1 Grid--tablet--cols-2"
  style="
    --grid-spacing-x: var(--spirit-space-1100);
    --grid-spacing-y: var(--spirit-space-1100);
  "
>
  <button type="button" class="Button Button--primary Button--medium">Primary responsive block-level Button</button>
  <a href="#" class="Button Button--primary Button--medium">Primary responsive block-level Button</a>
</div>
```

## Disabling a Button

```html
<button type="button" class="Button Button--primary Button--medium" disabled>Disabled Button</button>
<button type="button" class="Button Button--primary Button--medium is-disabled">Disabled Button</button>
<button type="button" class="Button Button--primary Button--medium Button--disabled">Disabled Button</button>
```

## Loading Button

⚠️ In CSS we depend on the correct placement of the Spinner Icon. It should be the last child of the Button.

```html
<a href="#" class="Button Button--primary Button--medium Button--loading Button--disabled">
  Button primary
  <svg class="Icon animation-spin-clockwise" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#spinner" />
  </svg>
</a>
<button type="button" class="Button Button--primary Button--medium Button--loading" disabled>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  Menu
  <svg class="Icon animation-spin-clockwise" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#spinner" />
  </svg>
</button>
<button type="button" class="Button Button--primary Button--medium Button--symmetrical Button--loading" disabled>
  <span class="accessibility-hidden">Menu</span>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  <svg class="Icon animation-spin-clockwise" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#spinner" />
  </svg>
</button>
```

## Sizes

```html
<button type="button" class="Button Button--primary Button--small">Small Button</button>
<button type="button" class="Button Button--primary Button--medium">Medium Button</button>
<button type="button" class="Button Button--primary Button--large">Large Button</button>
```

## Symmetrical Button

A symmetrical button has equal width and height, typically used with icon-only buttons.

```html
<button type="button" class="Button Button--primary Button--medium Button--symmetrical">
  <span class="accessibility-hidden">Menu</span>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
</button>
```

### Responsive Symmetrical Button

To create a responsive symmetrical button, use breakpoint-specific modifiers. The button will be symmetrical at the specified breakpoint and above.

Symmetrical from tablet breakpoint and up:

```html
<button type="button" class="Button Button--primary Button--medium Button--tablet--symmetrical">
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#hamburger" />
  </svg>
  <span class="accessibility-hidden">Menu</span>
  <span class="d-tablet-none" aria-hidden="true">Menu</span>
</button>
```

Symmetrical from desktop breakpoint and up:

```html
<button type="button" class="Button Button--primary Button--medium Button--desktop--symmetrical">
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#hamburger" />
  </svg>
  <span class="accessibility-hidden">Menu</span>
  <span class="d-desktop-none" aria-hidden="true">Menu</span>
</button>
```

Symmetrical on mobile, not on tablet and up (use modifier class with suffix `--asymmetrical` to stop symmetrical behavior):

```html
<button type="button" class="Button Button--primary Button--medium Button--symmetrical Button--tablet--asymmetrical">
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  <span class="accessibility-hidden">Menu</span>
  <span class="d-none d-tablet-inline" aria-hidden="true">Menu</span>
</button>
```

Symmetrical on mobile and tablet, not on desktop (combine breakpoint-specific classes):

```html
<button type="button" class="Button Button--primary Button--medium Button--symmetrical Button--desktop--asymmetrical">
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  <span class="accessibility-hidden">Menu</span>
  <span class="d-none d-desktop-inline" aria-hidden="true">Menu</span>
</button>
```

Symmetrical only on tablet (combine breakpoint-specific classes):

```html
<button
  type="button"
  class="Button Button--primary Button--medium Button--tablet--symmetrical Button--desktop--asymmetrical"
>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#hamburger" />
  </svg>
  <span class="accessibility-hidden">Menu</span>
  <span class="d-tablet-none d-desktop-inline" aria-hidden="true">Menu</span>
</button>
```

⚠️ **Accessibility note:** Always use `accessibility-hidden` class for the accessible label and add `aria-hidden="true"`
to the visible text. Using `display: none` utility classes (like `d-tablet-none`) hides content from screen readers, so
the `accessibility-hidden` class ensures the label is always accessible regardless of viewport size.

## Custom Spacing

Use CSS custom properties to define custom spacing between button content items (icons and text). Set the `--button-spacing`
property to one of the spacing token values defined on the `:root` element, e.g. `--button-spacing: var(--spirit-space-600)`.
This will set the spacing to `var(--spirit-space-600)` for all breakpoints.

Custom spacing:

```html
<button type="button" class="Button Button--primary Button--medium" style="--button-spacing: var(--spirit-space-600)">
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  Menu
</button>
```

ℹ️ We highly discourage from using absolute values like `--button-spacing: 1rem`. It will work, but you will lose
the consistency between the spacing and the design tokens.

If you need to set custom spacing from a specific breakpoint, use the `--button-spacing-{breakpoint}` property,
e.g. `--button-spacing-tablet: var(--spirit-space-800)`. The breakpoint value must be one of the breakpoint tokens
except for the `mobile` breakpoint where you don't need the suffix at all. The spacing is set to all larger breakpoints
automatically if you don't set them explicitly. E.g. if you set only `--button-spacing-tablet: var(--spirit-space-800)`
the spacing will be set to `var(--spirit-space-800)` for `tablet` and `desktop` breakpoints while on the `mobile`
breakpoint the default spacing will be used.

Custom spacing from tablet up:

```html
<button
  type="button"
  class="Button Button--primary Button--medium"
  style="--button-spacing-tablet: var(--spirit-space-800)"
>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  Menu
</button>
```

Custom spacing for each breakpoint:

```html
<button
  type="button"
  class="Button Button--primary Button--medium"
  style="--button-spacing: var(--spirit-space-400); --button-spacing-tablet: var(--spirit-space-600); --button-spacing-desktop: var(--spirit-space-800)"
>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  Menu
</button>
```
