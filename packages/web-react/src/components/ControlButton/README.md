# ControlButton

ControlButton is ideal for interfaces where buttons aren't meant to draw a lot of attention.
It uses a lighter visual design than [Button][button] and adapts to its background color context.

## When to Use ControlButton

Use **ControlButton** for:

- **Close buttons** in modals, dialogs, and notifications
- **Navigation controls** like ScrollView arrows or carousel controls
- **Icon-only actions** that need minimal visual weight

Do you need size consistency with form controls or a heavier visual? Use [Button][button] instead.

## Basic Usage

```jsx
import { ControlButton, Icon } from '@lmc-eu/spirit-web-react';

<ControlButton aria-label="Close">
  <Icon name="close" />
</ControlButton>;
```

## Variants

### Default (With Border)

The default variant with a visible border:

```jsx
<ControlButton aria-label="Close">
  <Icon name="close" />
</ControlButton>
```

### Subtle (Without Border)

Remove the border by adding `isSubtle`:

```jsx
<ControlButton isSubtle aria-label="Close">
  <Icon name="close" />
</ControlButton>
```

## Sizes

ControlButton supports three sizes:

```jsx
<ControlButton size="small" aria-label="Close">
  <Icon name="close" />
</ControlButton>

{/* Default, i.e. medium size */}
<ControlButton aria-label="Close">
  <Icon name="close" />
</ControlButton>

<ControlButton size="large" aria-label="Close">
  <Icon name="close" />
</ControlButton>
```

## Adapting to Background Colors

ControlButtons automatically adapt to their parent's background color using the dynamic color system.
Set a background and text color on the parent element:

```jsx
<Box backgroundColor="emotion-informative-basic" textColor="emotion-informative-subtle">
  <ControlButton aria-label="Close">
    <Icon name="close" />
  </ControlButton>
</Box>
```

This works with any pair of available background and text colors.

## Accessibility

For icon-only buttons, always include an accessible label using the `aria-label` attribute:

```jsx
<ControlButton aria-label="Close dialog">
  <Icon name="close" />
</ControlButton>
```

## API

| Name            | Type                               | Default  | Required | Description                                         |
| --------------- | ---------------------------------- | -------- | -------- | --------------------------------------------------- |
| `children`      | `ReactNode`                        | `null`   | ✕        | Content of the button                               |
| `elementType`   | `ElementType`                      | `button` | ✕        | HTML element type or React component                |
| `isDisabled`    | `bool`                             | `false`  | ✕        | Whether the button is disabled                      |
| `isSubtle`      | `bool`                             | `false`  | ✕        | Whether the button is in subtle variant (no border) |
| `isSymmetrical` | `bool`                             | `false`  | ✕        | Whether the button should be symmetrical            |
| `onClick`       | `(event: ClickEvent) => void`      | —        | ✕        | Click handler                                       |
| `ref`           | `ForwardedRef<HTMLButtonElement>`  | —        | ✕        | Button element reference                            |
| `size`          | [Size dictionary][dictionary-size] | `medium` | ✕        | Size of the button                                  |
| `type`          | \[`button` \| `submit` \| `reset`] | `button` | ✕        | Type of the button                                  |

Check the web implementation of the [ControlButton][web-control-button] component for more information.
Depending on `elementType`, more props and attributes may be passed to the component.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Custom Element

The ControlButton component can be rendered as a custom element using the `elementType` prop.
This is useful when you need the styling of a ControlButton but the semantics of another element, such as a link:

```jsx
<ControlButton elementType="a" href="/close" aria-label="Close">
  <Icon name="close" />
</ControlButton>
```

You can even use a custom component, such as a Link component from a routing library:

```jsx
import { Link } from 'react-router-dom';

<ControlButton elementType={Link} to="/close" aria-label="Close">
  <Icon name="close" />
</ControlButton>;
```

[button]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Button/README.md
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[web-control-button]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/ControlButton/README.md
