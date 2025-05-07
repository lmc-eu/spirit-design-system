# Button

Variants:

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

Block-level Button:

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

Disabling a Button:

```html
<button type="button" class="Button Button--primary Button--medium" disabled>Disabled Button</button>
<button type="button" class="Button Button--primary Button--medium is-disabled">Disabled Button</button>
<button type="button" class="Button Button--primary Button--medium Button--disabled">Disabled Button</button>
```

Loading Button:
⚠️ In CSS we depend on the correct placement of the Spinner Icon. It should be the last child of the Button.

```html
<a href="#" class="Button Button--primary Button--medium Button--loading Button--disabled">
  Button primary
  <svg width="24" height="24" aria-hidden="true" class="animation-spin-clockwise">
    <use xlink:href="/icons/svg/sprite.svg#spinner" />
  </svg>
</a>
<button type="button" class="Button Button--primary Button--medium Button--loading" disabled>
  <svg class="mr-400" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  Menu
  <svg width="24" height="24" aria-hidden="true" class="animation-spin-clockwise">
    <use xlink:href="/icons/svg/sprite.svg#spinner" />
  </svg>
</button>
<button type="button" class="Button Button--primary Button--medium Button--symmetrical Button--loading" disabled>
  <span class="accessibility-hidden">Menu</span>
  <svg width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#hamburger" />
  </svg>
  <svg width="24" height="24" aria-hidden="true" class="animation-spin-clockwise">
    <use xlink:href="/icons/svg/sprite.svg#spinner" />
  </svg>
</button>
```

Sizes:

```html
<button type="button" class="Button Button--primary Button--small">Small Button</button>
<button type="button" class="Button Button--primary Button--medium">Medium Button</button>
<button type="button" class="Button Button--primary Button--large">Large Button</button>
```
