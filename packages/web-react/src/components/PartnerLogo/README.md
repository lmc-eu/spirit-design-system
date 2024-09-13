# PartnerLogo

PartnerLogo is a component designed to display the partner's logo (e.g. advertiser, business partner, etc.).

```jsx
import { PartnerLogo } from '@lmc-eu/spirit-web-react';

<PartnerLogo aria-label="Logo of the partner">
  <!-- Logo go here -->
</PartnerLogo>
```

## Sizes

The PartnerLogo component is available in [sizes][dictionary-size].

```jsx
<PartnerLogo size="small" aria-label="Logo of the partner">
  <!-- Logo go here -->
</PartnerLogo>
<PartnerLogo size="medium" aria-label="Logo of the partner">
  <!-- Logo go here -->
</PartnerLogo>
<PartnerLogo size="large" aria-label="Logo of the partner">
  <!-- Logo go here -->
</PartnerLogo>
```

## Disabled safe area

The PartnerLogo component can be displayed without the safe area (padding). Use `hasSafeArea` prop set to `false` to disable safe area around logo.

```jsx
<PartnerLogo aria-label="Logo of the partner" hasSafeArea={false}>
  <!-- Logo go here -->
</PartnerLogo>
```

## Content

The content of the PartnerLogo component can be an image or svg.

### Image

```jsx
<PartnerLogo aria-label="Logo of the partner">
  <img src="path-to-logo" alt="Partner Logo" aria-hidden="true" />
</PartnerLogo>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.
The image should have an `alt` attribute set and can be aria-hidden, because the `aria-label`
attribute is set on the container.

### SVG

```jsx
<PartnerLogo aria-label="Logo of the partner">
  <svg width="300" height="130">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</PartnerLogo>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.

## API

| Name          | Type                               | Default  | Required | Description                                              |
| ------------- | ---------------------------------- | -------- | -------- | -------------------------------------------------------- |
| `children`    | `ReactNode`                        | `null`   | ✓        | Content of the PartnerLogo                               |
| `size`        | [Size dictionary][dictionary-size] | `medium` | ✕        | Size of the PartnerLogo                                  |
| `hasSafeArea` | `boolean`                          | `true`   | ✕        | If false, the PartnerLogo is displayed without safe area |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
