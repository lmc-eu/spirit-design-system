# Dynamic Background

Dynamic background helpers allow you to create dynamic backgrounds derived from the background color of the parent element.

## General Usage

First, set the background color and a corresponding text color of the parent element.
You can use any pair of available background and text colors.
For example, a combination of basic informative background with subtle text color:

```html
<div class="bg-emotion-informative-basic text-emotion-informative-subtle">
  <!-- … -->
</div>
```

Second, add a `dynamic-background-*` class to the element inside:

```html
<div class="bg-emotion-informative-basic text-emotion-informative-subtle">
  <button type="button" class="dynamic-background-interactive">Click me</button>
</div>
```

ℹ️ Along with a background color, always set a corresponding text color so the content is readable.

## Interactive Background

Use `dynamic-background-interactive` class on interactive elements like buttons or links:

```html
<div class="bg-emotion-informative-basic text-emotion-informative-subtle">
  <button type="button" class="dynamic-background-interactive">Click me</button>
</div>
```

Specifically for buttons, we recommend using a combination of `dynamic-background-interactive` and `button-unstyled`
class, possibly with some additional styling:

```html
<div class="bg-emotion-informative-basic text-emotion-informative-subtle">
  <button type="button" class="button-unstyled dynamic-background-interactive rounded-200 px-700 py-500">
    Click me
  </button>
</div>
```

## Selected Background

Use `dynamic-background-selected` class on selected elements:

```html
<div class="bg-emotion-informative-basic text-emotion-informative-subtle">
  <a href="#" aria-current="page" class="dynamic-background-selected">Selected item</a>
  <a href="#">Not selected</a>
</div>
```

To prevent style changes on hover, we recommend using a combination of `dynamic-background-selected` and `link-not-underlined` class,
possibly with some additional styling:

```html
<div class="bg-emotion-informative-basic text-emotion-informative-subtle">
  <a href="#" aria-current="page" class="dynamic-background-selected link-not-underlined rounded-200 px-700 py-500">
    Selected link
  </a>
</div>
```
