# UNSTABLE PartnerLogo

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

PartnerLogo is a component designed to display the partner's logo (e.g. advertiser, business partner, etc.).

```html
<div class="UNSTABLE_PartnerLogo">
  <!-- Logo goes here -->
</div>
```

## Sizes

The PartnerLogo component is available in [sizes][dictionary-size].
Use the `UNSTABLE_PartnerLogo--<size>` modifier class to change the size of the PartnerLogo component.

```html
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--small">
  <!-- Logo goes here -->
</div>
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--medium">
  <!-- Logo goes here -->
</div>
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--large">
  <!-- Logo goes here -->
</div>
```

## Enable Safe Area

The PartnerLogo component can be displayed with the safe area (padding). Use `UNSTABLE_PartnerLogo--safeArea` modifier to enable safe area around logo.

```html
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--medium UNSTABLE_PartnerLogo--safeArea">
  <!-- Logo goes here -->
</div>
```

## Content

The content of the PartnerLogo component can be an image or svg.

### Image

```html
<div class="UNSTABLE_PartnerLogo">
  <img src="path-to-logo" alt="Partner Logo" />
</div>
```

👉 To make the logo accessible, the image should have an `alt` attribute, or, if using inline SVG, the `<title>` element
should be present.

### SVG

```html
<div class="UNSTABLE_PartnerLogo">
  <svg width="300" height="130">
    <title>Partner Logo</title>
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```

## Full Example

```html
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--medium">
  <img src="path-to-logo" alt="Partner Logo" />
</div>

<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--large">
  <svg width="300" height="130">
    <title>Partner Logo</title>
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#size
