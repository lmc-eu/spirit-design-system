# UNSTABLE PartnerLogo

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

PartnerLogo is a component designed to display the partner's logo (e.g. advertiser, business partner, etc.).

```html
<div class="UNSTABLE_PartnerLogo" aria-label="Logo of the partner">
  <!-- Logo go here -->
</div>
```

## Sizes

The PartnerLogo component is available in [sizes][dictionary-size].
Use the `UNSTABLE_PartnerLogo--<size>` modifier class to change the size of the PartnerLogo component.

```html
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--small" aria-label="Logo of the partner">
  <!-- Logo go here -->
</div>
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--medium" aria-label="Logo of the partner">
  <!-- Logo go here -->
</div>
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--large" aria-label="Logo of the partner">
  <!-- Logo go here -->
</div>
```

## Enable Safe Area

The PartnerLogo component can be displayed with the safe area (padding). Use `UNSTABLE_PartnerLogo--safeArea` modifier to enable safe area around logo.

```html
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--medium UNSTABLE_PartnerLogo--safeArea">
  <!-- Logo go here -->
</div>
```

## Content

The content of the PartnerLogo component can be an image or svg.

### Image

```html
<div class="UNSTABLE_PartnerLogo" aria-label="Logo of the partner">
  <img src="path-to-logo" alt="Partner Logo" aria-hidden="true" />
</div>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.
The image should have an `alt` attribute set and can be aria-hidden, because the `aria-label`
attribute is set on the container.

### SVG

```html
<div class="UNSTABLE_PartnerLogo" aria-label="Logo of the partner">
  <svg width="300" height="130">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```

## Full Example

```html
<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--medium" aria-label="Logo of the partner">
  <img src="path-to-logo" alt="Partner Logo" aria-hidden="true" />
</div>

<div class="UNSTABLE_PartnerLogo UNSTABLE_PartnerLogo--large" aria-label="Logo of the partner">
  <svg width="300" height="130">
    <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="#fff" />
  </svg>
</div>
```

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#size
