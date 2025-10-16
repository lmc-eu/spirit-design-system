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

ControlButtons are composed using utility classes:

```html
<button
  type="button"
  class="button-unstyled accessibility-tap-target dynamic-color-background-interactive rounded-full p-300"
  aria-label="Close dialog"
>
  <svg class="Icon" width="16" height="16" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

### Required Classes

- `button-unstyled` — Removes default button styling
- `dynamic-color-background-interactive` — Provides hover/active states that adapt to the parent background
- `rounded-full` — Creates the circular shape

### Recommended Classes

- `accessibility-tap-target` — Ensures the tap target size is large enough without affecting the size of the button
- `p-*` — Padding to control button size (e.g., `p-300`, `p-500`)

### Optional Classes

- `border-100 border-solid` — Adds a border (example values)
- `dynamic-color-border` — Adapts the border color to the parent background,
  requires border classes above

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

### Subtle (Without Border)

```html
<button
  type="button"
  class="button-unstyled accessibility-tap-target dynamic-color-background-interactive rounded-full p-300"
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
  class="button-unstyled accessibility-tap-target dynamic-color-border dynamic-color-background-interactive border-100 border-solid rounded-full p-300"
  aria-label="Close dialog"
>
  <svg class="Icon" width="16" height="16" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

## Sizes

Control the size by adjusting padding and icon dimensions:

### Small (16px Icon)

Icon only:

```html
<button
  type="button"
  class="button-unstyled accessibility-tap-target dynamic-color-background-interactive rounded-full p-300"
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
  class="button-unstyled typography-body-small-regular accessibility-tap-target dynamic-color-background-interactive rounded-full px-700 py-300"
>
  Close
</button>
```

### Medium (16px Icon)

```html
<button
  type="button"
  class="button-unstyled accessibility-tap-target dynamic-color-background-interactive rounded-full p-500"
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
  class="button-unstyled typography-body-small-regular accessibility-tap-target dynamic-color-background-interactive rounded-full px-800 py-500"
>
  Close
</button>
```

### Large (24px Icon)

```html
<button
  type="button"
  class="button-unstyled accessibility-tap-target dynamic-color-background-interactive rounded-full p-500"
  aria-label="Close dialog"
>
  <svg class="Icon" width="24" height="24" aria-hidden="true">
    <use xlink:href="/icons/svg/sprite.svg#close" />
  </svg>
</button>
```

Text label (note the typography class and the difference in horizontal padding):

```html
<button
  type="button"
  class="button-unstyled typography-body-medium-regular accessibility-tap-target dynamic-color-background-interactive rounded-full px-900 py-500"
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
