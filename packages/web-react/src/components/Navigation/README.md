# Navigation

The `Navigation` component is a container for the navigation links of the application.

It consists of a these parts:

- [Navigation](#navigation)
- [NavigationItem](#navigationitem)
- [NavigationLink](#navigationlink)

## Navigation

The `Navigation` is a `nav` wrapper for navigation items.

```jsx
import { Navigation } from '@lmc-eu/spirit-web-react';

<Navigation>{/* Navigation items go here */}</Navigation>;
```

It centers its children vertically and if the children are not `NavigationItem` components,
it will apply a gap between them.

### API

| Name       | Type                                                                                | Default | Required | Description               |
| ---------- | ----------------------------------------------------------------------------------- | ------- | -------- | ------------------------- |
| `children` | `ReactElement<HTMLLIElement>`\|`ReactElement<NavigationItem>`\|Array of these types | `null`  | ✓        | Content of the Navigation |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Navigation Item

The `NavigationItem` is a container for navigation links.

```jsx
import { NavigationItem } from '@lmc-eu/spirit-web-react';

<NavigationItem>{/* Navigation links go here */}</NavigationItem>;
```

### API

| Name       | Type                    | Default | Required | Description                   |
| ---------- | ----------------------- | ------- | -------- | ----------------------------- |
| `children` | `string` \| `ReactNode` | `null`  | ✓        | Content of the NavigationItem |

## Navigation Link

The `NavigationLink` is component that is styled to be used as a navigation link.

```jsx
import { NavigationLink } from '@lmc-eu/spirit-web-react';

<NavigationLink href="#">Link</NavigationLink>;
```

It can obtain `isSelected` or `isDisabled` states by adding the respective props.

```jsx
<NavigationLink href="#" aria-current="page" isSelected>Selected Link</NavigationLink>
<NavigationLink href="#" isDisabled>Disabled Link</NavigationLink>
```

ℹ️ Don't forget to add the `aria-current="page"` attribute for correct accessible state if selected.

If the `NavigationLink` is inside a [`UNSTABLE_Header`][web-react-unstable-header] component, it will
inherit the height of the `Header`.

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

### Full Example

With NavigationLink components:

```jsx
<Navigation>
  <NavigationItem>
    <NavigationLink href="#" isSelected>
      Selected Link
    </NavigationLink>
  </NavigationItem>
  <NavigationItem>
    <NavigationLink href="#" isDisabled>
      Disabled Link
    </NavigationLink>
  </NavigationItem>
  <NavigationItem>
    <NavigationLink href="#">Link</NavigationLink>
  </NavigationItem>
</Navigation>
```

With Buttons:

```jsx
<Navigation>
  <NavigationItem>
    <Button>Button</Button>
  </NavigationItem>
  <NavigationItem>
    <Button color="secondary">Button</Button>
  </NavigationItem>
</Navigation>
```

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[web-react-unstable-header]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/UNSTABLE_Header/README.md
