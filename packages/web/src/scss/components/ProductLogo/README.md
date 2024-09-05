# ProductLogo

The ProductLogo component is used to display the logo of the product.

```html
<div class="ProductLogo">
  <!-- Logo goes here -->
</div>
```

## Content

The content of the ProductLogo component can be an image or svg.

### Image

```html
<div class="ProductLogo">
  <img src="path-to-logo" alt="Product Logo" height="60" width="120" />
</div>
```

👉 To make the logo accessible, the image should have an `alt` attribute, or, if using inline SVG, the `<title>` element
should be present.

👉 To avoid unexpected layout shifts, it is strongly recommended to specify the `width` and `height` of the embedded
image.

### SVG

```html
<div class="ProductLogo">
  <svg width="300" height="130">
    <title>Product Logo</title>
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```

## Full Example

```html
<div class="ProductLogo">
  <img src="path-to-logo" alt="Product Logo" width="120" height="60" />
</div>

<div class="ProductLogo">
  <svg width="300" height="130">
    <title>Product Logo</title>
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```
