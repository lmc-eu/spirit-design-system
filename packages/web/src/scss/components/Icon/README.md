# Icon

## Basic Usage

```html
<svg width="24" height="24">
  <use xlink:href="/assets/icons/svg/sprite.svg#info" />
</svg>
```

## Responsive Size

Use CSS custom properties to define the `width` and `height` of the icon.

- `--spirit-icon-width: number{px};`
- `--spirit-icon-width-tablet: number{px}`
- `--spirit-icon-width-desktop: number{px}`
- `--spirit-icon-height: number{px};`
- `--spirit-icon-height-tablet: number{px}`
- `--spirit-icon-height-desktop: number{px}`

```html
<svg
  width="24"
  height="24"
  style="
      --spirit-icon-height: 20px;
      --spirit-icon-height-tablet: 30px;
      --spirit-icon-height-desktop: 40px;
      --spirit-icon-width: 20px;
      --spirit-icon-width-tablet: 30px;
      --spirit-icon-width-desktop: 40px;
      "
>
  <use xlink:href="/assets/icons/svg/sprite.svg#info" />
</svg>
```
