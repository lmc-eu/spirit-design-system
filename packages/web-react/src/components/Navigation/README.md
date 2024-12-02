# Navigation

The `Navigation` component provides a versatile and accessible way to build navigation menus.

The Navigation component consists of the following building blocks:

- [Navigation](#navigation)
  - [NavigationItem](#navigationitem)
  - [NavigationLink](#navigationlink)

## Navigation

The `Navigation` component is a container for navigation items.

### Usage

```jsx
import { Navigation, NavigationItem, NavigationLink } from '@lmc-eu/spirit-web-react';

<Navigation>
  <NavigationItem>
    <NavigationLink href="/" isSelected>
      Home
    </NavigationLink>
  </NavigationItem>
  <NavigationItem>
    <NavigationLink href="/about">About Us</NavigationLink>
  </NavigationItem>
  <NavigationItem>
    <NavigationLink href="/contact">Contact</NavigationLink>
  </NavigationItem>
</Navigation>;
```

### API

| Name       | Type                    | Default | Required | Description               |
| ---------- | ----------------------- | ------- | -------- | ------------------------- |
| `children` | `string` \| `ReactNode` | `null`  | ✓        | Content of the Navigation |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## NavigationItem

The `NavigationItem` component is a container for navigation links.

### Usage

```jsx
import { NavigationItem, NavigationLink } from '@lmc-eu/spirit-web-react';

<NavigationItem>
  <NavigationLink href="/" isSelected>
    Home
  </NavigationLink>
</NavigationItem>;
```

### API

| Name       | Type                    | Default | Required | Description                   |
| ---------- | ----------------------- | ------- | -------- | ----------------------------- |
| `children` | `string` \| `ReactNode` | `null`  | ✓        | Content of the NavigationItem |

## NavigationLink

The `NavigationLink` component is a link in the navigation.

### Usage

```jsx
import { NavigationLink } from '@lmc-eu/spirit-web-react';

<NavigationLink href="/" isSelected>
  Home
</NavigationLink>;
```

### Selected

The `isSelected` prop is used to indicate that the link is selected.

```jsx
<NavigationLink href="/" isSelected>
  Home
</NavigationLink>
```

### Disabled

The `isDisabled` prop is used to indicate that the link is disabled.

```jsx
<NavigationLink href="/" isDisabled>
  Home
</NavigationLink>
```

### API

| Name          | Type                              | Default | Required | Description                   |
| ------------- | --------------------------------- | ------- | -------- | ----------------------------- |
| `children`    | `string` \| `ReactNode`           | `null`  | ✓        | Content of the NavigationLink |
| `elementType` | `ElementType`                     | `a`     | ✕        | Type of element used as       |
| `href`        | `string`                          | -       | ✕        | URL of the link               |
| `isSelected`  | `boolean`                         | `false` | ✕        | Whether the link is selected  |
| `isDisabled`  | `boolean`                         | `false` | ✕        | Whether the link is disabled  |
| `ref`         | `ForwardedRef<HTMLAnchorElement>` | —       | ✕        | Anchor element reference      |
| `target`      | `string`                          | `null`  | ✕        | Link target                   |

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
