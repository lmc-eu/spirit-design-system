# Navigation

The `Navigation` component is a container for the navigation actions of the application.

It consists of a these parts:

- [Navigation](#navigation)
  - [NavigationItem](#navigation-item)
    - [NavigationAction](#navigation-action)

## Navigation

The `Navigation` is a `nav` wrapper for navigation items.

The `Navigation` component can be horizontal or vertical. Use `direction` prop to set the orientation. Default direction is `horizontal`.

```jsx
import { Navigation } from '@lmc-eu/spirit-web-react';

<Navigation aria-label="Main Navigation">{/* Navigation items go here */}</Navigation>;
<Navigation aria-label="Main Navigation" direction="vertical">
  {/* Navigation items go here */}
</Navigation>;
```

It centres its children vertically, and if the children do not include `NavigationAction` components,
it will apply a gap between them.

ℹ️ Don't forget to add the `aria-label` attribute to the `Navigation` component for correct accessible title.

### API

| Name        | Type                                                                                    | Default      | Required | Description                   |
| ----------- | --------------------------------------------------------------------------------------- | ------------ | -------- | ----------------------------- |
| `children`  | `ReactElement<HTMLLIElement>` \| `ReactElement<NavigationItem>` \| Array of these types | `null`       | ✓        | Content of the Navigation     |
| `direction` | [Direction dictionary][direction-dictionary]                                            | `horizontal` | ✕        | Orientation of the Navigation |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Navigation Item

The `NavigationItem` is a container for navigation actions.

```jsx
import { NavigationItem } from '@lmc-eu/spirit-web-react';

<NavigationItem>{/* Navigation actions go here */}</NavigationItem>;
```

### Navigation Item Alignment

Use `alignmentY` prop to center or stretch the content. If there is a `NavigationAction` inside, it overrides the prop and
stretches its content vertically.

```jsx
import { NavigationAction, NavigationItem } from '@lmc-eu/spirit-web-react';

<NavigationItem>{/* Vertically centered items */}</NavigationItem>;
<NavigationItem alignmentY="stretch">{/* Vertically stretched items */}</NavigationItem>;
<NavigationItem>
  <NavigationAction>{/* Vertically stretched Action */}</NavigationAction>
</NavigationItem>;
```

### API

| Name         | Type                     | Default  | Required | Description                        |
| ------------ | ------------------------ | -------- | -------- | ---------------------------------- |
| `alignmentY` | \[`center` \| `stretch`] | `center` | ✕        | Vertical alignment of the children |
| `children`   | `string` \| `ReactNode`  | `null`   | ✓        | Content of the NavigationItem      |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Navigation Action

The `NavigationAction` is component that is styled to be used as a navigation action.

```jsx
import { NavigationAction } from '@lmc-eu/spirit-web-react';

<NavigationAction href="#">Link</NavigationAction>;
```

It can obtain `isSelected` or `isDisabled` states by adding the respective props.

```jsx
<NavigationAction href="#" aria-current="page" isSelected>Selected Link</NavigationAction>
<NavigationAction href="#" isDisabled>Disabled Link</NavigationAction>
```

ℹ️ Don't forget to add the `aria-current="page"` attribute for correct accessible state if selected.

ℹ️ Please note that in the `isDisabled` state the `NavigationAction` will be a `span` tag.

If the `NavigationAction` is inside a [`UNSTABLE_Header`][web-react-unstable-header] component, it will
inherit the height of the `Header`.

### API

| Name          | Type                              | Default | Required | Description                     |
| ------------- | --------------------------------- | ------- | -------- | ------------------------------- |
| `children`    | `string` \| `ReactNode`           | `null`  | ✓        | Content of the NavigationAction |
| `elementType` | `ElementType`                     | `a`     | ✕        | Type of element used as         |
| `href`        | `string`                          | -       | ✕        | URL of the link                 |
| `isDisabled`  | `boolean`                         | `false` | ✕        | Whether the action is disabled  |
| `isSelected`  | `boolean`                         | `false` | ✕        | Whether the action is selected  |
| `ref`         | `ForwardedRef<HTMLAnchorElement>` | —       | ✕        | Anchor element reference        |
| `target`      | `string`                          | `null`  | ✕        | Link target                     |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### Full Example

With NavigationAction components:

```jsx
<Navigation aria-label="Main Navigation">
  <NavigationItem>
    <NavigationAction href="#" aria-current="page" isSelected>
      Selected Link
    </NavigationAction>
  </NavigationItem>
  <NavigationItem>
    <NavigationAction href="#" isDisabled>
      Disabled Link
    </NavigationAction>
  </NavigationItem>
  <NavigationItem>
    <NavigationAction href="#">Link</NavigationAction>
  </NavigationItem>
</Navigation>
```

With Buttons:

```jsx
<Navigation aria-label="Secondary Navigation">
  <NavigationItem>
    <ButtonLink href="#">Button</ButtonLink>
  </NavigationItem>
  <NavigationItem>
    <ButtonLink href="#" color="secondary">
      Button
    </ButtonLink>
  </NavigationItem>
</Navigation>
```

[direction-dictionary]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#direction
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[web-react-unstable-header]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/UNSTABLE_Header/README.md
