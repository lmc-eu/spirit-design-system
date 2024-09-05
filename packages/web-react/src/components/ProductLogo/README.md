# ProductLogo

The ProductLogo component is used to display the logo of the product.

```jsx
import { ProductLogo } from '@spirit/web-react';

<ProductLogo aria-label="Logo of the product">
  <!-- Logo go here -->
</ProductLogo>;
```

## Content

The content of the ProductLogo component can be an image or svg.

### Image

```jsx
<ProductLogo aria-label="Logo of the product">
  <img src="path-to-logo" alt="Product Logo" height="60px" width="120px" aria-hidden="true" />
</ProductLogo>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.
The image should have an `alt` attribute set and can be aria-hidden, because the `aria-label`
attribute is set on the container. To reduce the unexpected layout shifts, it is strongly recommended
to specify the `height` and `width` of the embedded image.

### SVG

```jsx
<ProductLogo aria-label="Logo of the product">
  <svg width="300" height="130">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</ProductLogo>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.

## API

| Name       | Type        | Default | Required | Description                |
| ---------- | ----------- | ------- | -------- | -------------------------- |
| `children` | `ReactNode` | `null`  | ✓        | Content of the ProductLogo |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
