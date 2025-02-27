# Icon

## Basic Usage

```html
<svg width="24" height="24">
  <use xlink:href="/assets/icons/svg/sprite.svg#info" />
</svg>
```

## Responsive Size

Use CSS custom properties to define the `size` of the icon.

- `--spirit-icon-size: number{px};`
- `--spirit-icon-size-tablet: number{px}`
- `--spirit-icon-size-desktop: number{px}`

The prefix `spirit-` is `css-variable-prefix` defined in the `design tokens` and can vary depending on the project.
Always refer to your project's design tokens for the correct prefix.

⚠️ To ensure responsive sizes work correctly, the icon must have the class `.Icon`.

The `width` and `height` attributes of the `<svg>` should correspond to the mobile breakpoint when using responsive sizes.
If only tablet or desktop is set, width and height is used for smaller breakpoints.

```html
<svg
  class="Icon"
  width="20"
  height="20"
  style="
    --spirit-icon-size: 20px;
    --spirit-icon-size-tablet: 30px;
    --spirit-icon-size-desktop: 40px;
  "
>
  <use xlink:href="/assets/icons/svg/sprite.svg#info" />
</svg>
```
