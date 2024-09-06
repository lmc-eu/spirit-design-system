# UNSTABLE PartnerLogo

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

PartnerLogo is a component designed to display the partner's logo (e.g. advertiser, business partner, etc.).

```jsx
import { UNSTABLE_PartnerLogo } from '@lmc-eu/spirit-web-react';

<UNSTABLE_PartnerLogo aria-label="Logo of the partner">
  <!-- Logo go here -->
</UNSTABLE_PartnerLogo>
```

## Sizes

The PartnerLogo component is available in [sizes][dictionary-size].

```jsx
<UNSTABLE_PartnerLogo size="small" aria-label="Logo of the partner">
  <!-- Logo go here -->
</UNSTABLE_PartnerLogo>
<UNSTABLE_PartnerLogo size="medium" aria-label="Logo of the partner">
  <!-- Logo go here -->
</UNSTABLE_PartnerLogo>
<UNSTABLE_PartnerLogo size="large" aria-label="Logo of the partner">
  <!-- Logo go here -->
</UNSTABLE_PartnerLogo>
```

## Disabled safe area

The PartnerLogo component can be displayed without the safe area (padding). Use `hasSafeArea` prop set to `false` to disable safe area around logo.

```jsx
<UNSTABLE_PartnerLogo aria-label="Logo of the partner" hasSafeArea={false}>
  <!-- Logo go here -->
</UNSTABLE_PartnerLogo>
```

## Content

The content of the PartnerLogo component can be an image or svg.

### Image

```jsx
<UNSTABLE_PartnerLogo aria-label="Logo of the partner">
  <img src="path-to-logo" alt="Partner Logo" aria-hidden="true" />
</UNSTABLE_PartnerLogo>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.
The image should have an `alt` attribute set and can be aria-hidden, because the `aria-label`
attribute is set on the container.

### SVG

```jsx
<UNSTABLE_PartnerLogo aria-label="Logo of the partner">
  <svg width="300" height="130">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</UNSTABLE_PartnerLogo>
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
