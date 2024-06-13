# UNSTABLE Avatar

⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
Please use it with caution.

The `UNSTABLE_Avatar` component is used to display a user's profile picture or initials.

```jsx
import { UNSTABLE_Avatar } from '@lmc-eu/spirit-web-react';

<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</UNSTABLE_Avatar>;
```

## Square

Add `isSquare` prop to make the avatar a square.

```jsx
<UNSTABLE_Avatar isSquare aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</UNSTABLE_Avatar>
```

## Sizes

The Avatar component is available in all [extended sizes][dictionary-size].

```jsx
<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta" size="xsmall">
  <span aria-hidden="true">JB</span>
</UNSTABLE_Avatar>
<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta" size="small">
  <span aria-hidden="true">JB</span>
</UNSTABLE_Avatar>
<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta" size="medium">
  <span aria-hidden="true">JB</span>
</UNSTABLE_Avatar>
<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta" size="large">
  <span aria-hidden="true">JB</span>
</UNSTABLE_Avatar>
<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta" size="xlarge">
  <span aria-hidden="true">JB</span>
</UNSTABLE_Avatar>
```

## Content

The content of the `UNSTABLE_Avatar` component can be an image, an icon, or a text string.

### Icon

Add an Icon with correct size.

```jsx
<UNSTABLE_Avatar size="xsmall" aria-label="Profile of Jiří Bárta">
  <Icon name="profile" boxSize="16" />
</UNSTABLE_Avatar>
<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta">
  <Icon name="profile" boxSize="24" />
</UNSTABLE_Avatar>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.

### Image

Add an image, it will be resized to fit the avatar.

```jsx
<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta">
  <img src="https://picsum.photos/id/823/162/162" alt="Jiří Bárta" aria-hidden="true" />
</UNSTABLE_Avatar>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title.
The image should have an `alt` attribute set and can be aria-hidden, because the `aria-label`
attribute is set on the container.

### Text

It is possible to use text as the content of the `UNSTABLE_Avatar` component.
This is useful when you want to display the initials of a user. You need to
take care of the text length and case. The rest is handled by the component.

```jsx
<UNSTABLE_Avatar aria-label="Profile of Jiří Bárta">
  <span aria-hidden="true">JB</span>
</UNSTABLE_Avatar>
```

ℹ️ Don't forget to add the `aria-label` attribute for accessible title, especially when
using an abbreviation. The `aria-hidden` attribute is set on the text span, because the `aria-label`
attribute is set on the container and the abbreviation is not useful for screen readers.

## API

| Name          | Type                                        | Default  | Required | Description               |
| ------------- | ------------------------------------------- | -------- | -------- | ------------------------- |
| `children`    | `ReactNode`                                 | `null`   | ✓        | Content of the Avatar     |
| `elementType` | `ElementType`                               | `button` | ✕        | Type of element           |
| `isSquare`    | `bool`                                      | `false`  | ✕        | If true, Avatar is square |
| `ref`         | `ForwardedRef<HTMLButtonElement>`           | —        | ✕        | Avatar element reference  |
| `size`        | [Size Extended dictionary][dictionary-size] | `medium` | ✕        | Size of the Avatar        |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
