# UNSTABLE Avatar

⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
Please use it with caution.

The `UNSTABLE_Avatar` component is used to represent a user or entity.

It can be a circle or a square (with rounded corners, using `radius-100` token) and
can have different sizes.

## Example

```html
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--medium" aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</div>

<a href="#" class="UNSTABLE_Avatar UNSTABLE_Avatar--xsmall" aria-label="Profile of Jiří Bárta">
  <img src="https://picsum.photos/id/823/162/162" alt="Jiří Bárta" aria-hidden="true" />
</a>
```

## Square

Add `UNSTABLE_Avatar--square` modifier to make the avatar a square.

```html
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--medium UNSTABLE_Avatar--square" aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</div>
```

## Sizes

The Avatar component supports `xsmall`, `small`, `medium`, `large`, and `xlarge` sizes.

```html
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--xsmall" aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</div>
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--small" aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</div>
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--medium" aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</div>
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--large" aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</div>
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--xlarge" aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</div>
```

## Content

The content of the `UNSTABLE_Avatar` component can be an image, an icon, or a text string.

### Icon

Add an icon with correct size.

```html
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--medium" aria-label="Profile of Jiří Bárta">
  <svg width="24" height="24" aria-hidden="true">
    <use xlink:href="/assets/icons/svg/sprite.svg#profile" />
  </svg>
</div>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.

### Image

Add an image, it will be resized to fit the avatar.

```html
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--medium" aria-label="Profile of Jiří Bárta">
  <img src="https://picsum.photos/id/823/162/162" alt="Jiří Bárta" aria-hidden="true" />
</div>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.
The image should have an `alt` attribute set and can be aria-hidden, because the `aria-label`
attribute is set on the container.

### Text

It is possible to use text as the content of the `UNSTABLE_Avatar` component.
This is useful when you want to display the initials of a user. You need to
take care of the text length and case. The rest is handled by the component.

```html
<div class="UNSTABLE_Avatar UNSTABLE_Avatar--medium" aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</div>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title, especially when
using an abbreviation. The `aria-hidden` attribute is set on the text span, because the `aria-label`
attribute is set on the container and the abbreviation is not useful for screen readers.
