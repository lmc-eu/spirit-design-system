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

⚠️ To ensure responsive sizes work correctly, the icon must have the class `.Icon`.

```html
<svg
  class="Icon"
  width="24"
  height="24"
  style="
    --spirit-icon-size: 20px;
    --spirit-icon-size-tablet: 30px;
    --spirit-icon-size-desktop: 40px;
        "
>
  <use xlink:href="/assets/icons/svg/sprite.svg#info" />
</svg>
```
