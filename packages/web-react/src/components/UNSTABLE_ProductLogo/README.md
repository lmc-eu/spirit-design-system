# UNSTABLE ProductLogo

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

The ProductLogo component is used to display the logo of the product.

```jsx
import { UNSTABLE_ProductLogo } from '@spirit/web-react';

<UNSTABLE_ProductLogo aria-label="Logo of the product">
  <!-- Logo go here -->
</UNSTABLE_ProductLogo>;
```

## Inverted variant

You can add an `isInverted` prop to invert the color of the background.
It is necessary to insert the appropriate inverted logo variant as a children.

```jsx
import { UNSTABLE_ProductLogo } from '@spirit/web-react';

<UNSTABLE_ProductLogo isInverted aria-label="Logo of the product">
  <!-- Inverted logo go here -->
</UNSTABLE_ProductLogo>;
```

## Content

The content of the ProductLogo component can be an image or svg.

### Image

```jsx
<UNSTABLE_ProductLogo aria-label="Logo of the product">
  <img src="path-to-logo" alt="Product Logo" height="60px" width="120px" aria-hidden="true" />
</UNSTABLE_ProductLogo>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.
The image should have an `alt` attribute set and can be aria-hidden, because the `aria-label`
attribute is set on the container. To reduce the unexpected layout shifts, it is strongly recommended
to specify the `height` and `width` of the embedded image.

### SVG

```jsx
<UNSTABLE_ProductLogo aria-label="Logo of the product">
  <svg width="300" height="130">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</UNSTABLE_ProductLogo>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.

## API

| Name         | Type        | Default | Required | Description                        |
| ------------ | ----------- | ------- | -------- | ---------------------------------- |
| `children`   | `ReactNode` | `null`  | ✓        | Content of the ProductLogo         |
| `isInverted` | `bool`      | `false` | ✕        | If true, Logo has inverted variant |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
