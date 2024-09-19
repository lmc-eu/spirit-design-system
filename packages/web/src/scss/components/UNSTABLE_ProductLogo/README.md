# UNSTABLE ProductLogo

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

The ProductLogo component is used to display the logo of the product.

```html
<div class="UNSTABLE_ProductLogo">
  <!-- Logo goes here -->
</div>
```

## Inverted Variant

You can add an `UNSTABLE_ProductLogo--inverted` modifier class to invert the color of the background.
It is necessary to insert the appropriate inverted logo variant as a children.

```html
<div class="UNSTABLE_ProductLogo UNSTABLE_ProductLogo--inverted">
  <!-- Inverted logo goes here -->
</div>
```

## Content

The content of the ProductLogo component can be an image or svg.

### Image

```html
<div class="UNSTABLE_ProductLogo">
  <img src="path-to-logo" alt="Product Logo" height="60" width="120" />
</div>
```

👉 To make the logo accessible, the image should have an `alt` attribute, or, if using inline SVG, the `<title>` element
should be present.

👉 To avoid unexpected layout shifts, it is strongly recommended to specify the `width` and `height` of the embedded
image.

### SVG

```html
<div class="UNSTABLE_ProductLogo">
  <svg width="300" height="130">
    <title>Product Logo</title>
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```

## Full Example

```html
<div class="UNSTABLE_ProductLogo">
  <img src="path-to-logo" alt="Product Logo" width="120" height="60" />
</div>

<div class="UNSTABLE_ProductLogo">
  <svg width="300" height="130">
    <title>Product Logo</title>
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```
