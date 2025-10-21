# ControlButton

ControlButton is a simple button designed for secondary actions that adapt to their background color context.

## When to Use ControlButton

Use **ControlButton** for:

- **Close buttons** in modals, dialogs, and notifications
- **Navigation controls** like ScrollView arrows or carousel controls
- **Secondary actions** that should blend into their context
- **Icon-only actions** that need minimal visual weight

Use **Button with `plain` variant** instead when:

- The action is a **primary or important user decision**
- You need to place the button **alongside a form field** (because their sizes match)
- You need **text labels** alongside or instead of icons
- The button should **stand out** visually from its context
- You need **consistent button styling** across different backgrounds

## Basic Usage

ControlButtons use the component class with size modifiers:

```html
<button
  type="button"
  class="ControlButton ControlButton--small ControlButton--symmetrical accessibility-tap-target dynamic-color-background-interactive"
  aria-label="Close dialog"
>
  <svg class="Icon" width="16" height="16" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

### Required Classes

- `ControlButton` — Base component class with button reset and rounded styling
- `ControlButton--small|medium|large` — Size modifier for padding and typography
- `dynamic-color-background-interactive` — Provides hover/active states that adapt to the parent background

### Recommended Classes

- `ControlButton--symmetrical` — Creates perfect square buttons for icon-only use cases
- `accessibility-tap-target` — Ensures the tap target size is large enough without affecting the size of the button

### Optional Classes

- `border-100 border-solid` — Adds a border (example values)
- `dynamic-color-border` — Adapts the border color to the parent background,
  requires border classes above
- `px-* py-*` — Override padding for text buttons (e.g., `px-700 py-300`)

## Adapting to Background Colors

ControlButtons automatically adapt to their parent's background color using the dynamic color system.
Set a background and text color on the parent element:

```html
<div class="bg-emotion-informative-basic text-emotion-informative-subtle">
  <button
    type="button"
    class="button-unstyled accessibility-tap-target dynamic-color-background-interactive rounded-full p-300"
    aria-label="Close dialog"
  >
    <svg class="Icon" width="16" height="16" aria-hidden="true">
      <use xlink:href="/icons/svg/sprite.svg#close" />
    </svg>
  </button>
</div>
```

This works with any pair of available background and text colors.

## Variants

### Icon Only (Symmetrical)

For icon-only buttons, use the `ControlButton--symmetrical` modifier to create perfect square buttons:

```html
<button
  type="button"
  class="ControlButton ControlButton--small ControlButton--symmetrical accessibility-tap-target dynamic-color-background-interactive"
  aria-label="Close dialog"
>
  <svg class="Icon" width="16" height="16" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

### With Border

```html
<button
  type="button"
  class="ControlButton ControlButton--small ControlButton--symmetrical accessibility-tap-target dynamic-color-border dynamic-color-background-interactive border-100 border-solid"
  aria-label="Close dialog"
>
  <svg class="Icon" width="16" height="16" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

## Sizes

Control the size by adjusting padding and icon dimensions:

### Small (24px height, 16px icon)

Icon only:

```html
<button
  type="button"
  class="ControlButton ControlButton--small ControlButton--symmetrical accessibility-tap-target dynamic-color-background-interactive"
  aria-label="Close dialog"
>
  <svg class="Icon" width="16" height="16" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

Text label (note the typography class and the difference in horizontal padding):

```html
<button
  type="button"
  class="ControlButton ControlButton--small accessibility-tap-target dynamic-color-background-interactive px-700 py-300"
>
  Close
</button>
```

### Medium (32px height, 16px icon)

```html
<button
  type="button"
  class="ControlButton ControlButton--medium ControlButton--symmetrical accessibility-tap-target dynamic-color-background-interactive"
  aria-label="Close dialog"
>
  <svg class="Icon" width="16" height="16" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

Text label (note the typography class and the difference in horizontal padding):

```html
<button
  type="button"
  class="ControlButton ControlButton--medium accessibility-tap-target dynamic-color-background-interactive px-800 py-500"
>
  Close
</button>
```

### Large (36px height, 20px icon)

```html
<button
  type="button"
  class="ControlButton ControlButton--large ControlButton--symmetrical accessibility-tap-target dynamic-color-background-interactive"
  aria-label="Close dialog"
>
  <svg class="Icon" width="20" height="20" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

Text label (note the typography class and the difference in horizontal padding):

```html
<button
  type="button"
  class="ControlButton ControlButton--large accessibility-tap-target dynamic-color-background-interactive px-900 py-500"
>
  Close
</button>
```

## Accessibility

For icon-only buttons, always include an accessible label, for example, using
the `aria-label` attribute.

ℹ️ We recommend applying the `accessibility-tap-target` helper class to ensure
the tap target size of `ControlButton` is large enough.

## Related Components

- [Button](../Button/README.md) — For primary actions with text labels
- [Icon](../Icon/README.md) — Icon component documentation
- [Dynamic Color helpers](../../helpers/dynamic-color/README.md) — Background color adaptation system
