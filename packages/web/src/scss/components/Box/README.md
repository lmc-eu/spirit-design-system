# Box

The Box component is a simple container around content or other components.

```html
<div>Content</div>
```

## Border

You can define border width, color, style using the utility classes `border-<width>`, `border-<color>`, `border-<style>` and radius using utility class `rounded-<radius>`.

```html
<div class="border-basic border-100 rounded-200 border-solid border-dashed">Without radius</div>
```

## Padding

You can define padding using utility class `p-<padding>`.

```html
<div class="p-200">With padding</div>
```

It is also possible to define padding for horizontal and vertical sides using utility classes `px-<padding>` and `py-<padding>`.

```html
<div class="px-200 py-300">With vertical and horizontal padding</div>
```

You can also define padding for each side using utility classes `pt-<padding>`, `pr-<padding>`, `pb-<padding>`, and `pl-<padding>`.

```html
<div class="pt-200 pr-300 pb-400 pl-500">With padding for each direction</div>
```

Responsive values can be set for each prop using utility classes `px-<padding>`, `px-tablet-<padding>`, `px-desktop-<padding>`, `py-<padding>`, `py-tablet-<padding>`, and `py-desktop-<padding>`.

```html
<div class="px-400 px-tablet-800 px-desktop-1200 py-200 py-tablet-400 py-desktop-600">With responsive padding</div>
```

Responsive values can be set for each prop using utility classes. For example, `p-<padding>` for mobile, `p-tablet-<padding>` for tablet, and `p-desktop-<padding>` for desktop.

```html
<div class="p-200 p-tablet-400 p-desktop-600">With responsive padding</div>
```

## Background Color

You can define background color using utility classes `bg-<color>`.

```html
<div class="bg-primary">Primary Background</div>
<div class="bg-secondary">Secondary Background</div>
<div class="bg-tertiary">Tertiary Background</div>
```
