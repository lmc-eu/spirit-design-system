# UNSTABLE ProductLogo

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

The ProductLogo component is used to display the logo of the product.

```html
<div class="UNSTABLE_ProductLogo" aria-label="Logo of the product">
  <!-- Logo go here -->
</div>
```

## Inverted variant

You can add an `UNSTABLE_ProductLogo--inverted` modifier class to invert the color of the background.
It is necessary to insert the appropriate inverted logo variant as a children.

```html
<div class="UNSTABLE_ProductLogo UNSTABLE_ProductLogo--inverted" aria-label="Logo of the product">
  <!-- Inverted logo go here -->
</div>
```

## Content

The content of the ProductLogo component can be an image or svg.

### Image

```html
<div class="UNSTABLE_ProductLogo" aria-label="Logo of the product">
  <img src="path-to-logo" alt="Product Logo" height="60px" width="120px" aria-hidden="true" />
</div>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.
The image should have an `alt` attribute set and can be aria-hidden, because the `aria-label`
attribute is set on the container. To reduce the unexpected layout shifts, it is strongly recommended
to specify the `height` and `width` of the embedded image.

### SVG

```html
<div class="UNSTABLE_ProductLogo" aria-label="Logo of the product">
  <svg width="300" height="130">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.

## Full Example

```html
<div class="UNSTABLE_ProductLogo" aria-label="Logo of the product">
  <img src="path-to-logo" alt="Product Logo" width="120" height="60" aria-hidden="true" />
</div>

<div class="UNSTABLE_ProductLogo">
  <svg width="300" height="130">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```
