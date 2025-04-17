# Segmented Control

A Segmented Control is a linear set of two or more segments, each of which functions as a button. It allows users to select one or more options from a set of options, providing a clear and intuitive way to navigate or filter content.

The SegmentedControl is a composition of several subcomponents:

- [SegmentedControl](#segmentedcontrol)
  - [SegmentedControlItem](#segmentedcontrolitem)

## SegmentedControl

```jsx
import { SegmentedControl } from '@lmc-eu/spirit-web-react';
import { SegmentedControlItem } from '@lmc-eu/spirit-web-react';

<SegmentedControl name="segmented-control-example" label="Label">
    <!-- SegmentedControlItems go here-->
</SegmentedControl>
```

### Variants

You can set the design variant of the SegmentedControl using the `variant` prop. The default variant is `outline`.

```jsx
<SegmentedControl name="segmented-control-example" label="Label" variant="fill">
  <!-- SegmentedControlItems go here-->
</SegmentedControl>
```

### Multiple Selection

You can enable multiple selection by setting the `hasMultipleSelection` prop.

```jsx
<SegmentedControl name="segmented-control-example" label="Label" hasMultipleSelection>
  <!-- SegmentedControlItems go here-->
</SegmentedControl>
```

### Fluid Alignment

To make the `SegmentedControl` adjust to the size of its container, use the `isFluid` prop.

```jsx
<SegmentedControl name="segmented-control-example" label="Label" isFluid>
  <!-- SegmentedControlItems go here-->
</SegmentedControl>
```

### API

| Name                   | Type                                           | Default   | Required | Description                                           |
| ---------------------- | ---------------------------------------------- | --------- | -------- | ----------------------------------------------------- |
| `children`             | `ReactNode`                                    | —         | ✕        | Children node                                         |
| `hasMultipleSelection` | `bool`                                         | `false`   | ✕        | Allow multiple selection                              |
| `isFluid`              | `bool`                                         | `false`   | ✕        | Fluid alignment                                       |
| `label`                | `string`                                       | —         | ✓        | Accessible label for the control (rendered as legend) |
| `name`                 | `string`                                       | —         | ✓        | Name attribute for the input group.                   |
| `variant`              | [Fill Variants dictionary][dictionary-variant] | `outline` | ✕        | Visual style variant of the control.                  |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## SegmentedControlItem

The `SegmentedControlItem` component is a single item in the segmented control. It can be used to create a segmented control with multiple items.

```jsx
import {
  Icon,
  SegmentedControl,
  SegmentedControlItem,
  UNSTABLE_Truncate,
  VisuallyHidden,
} from '@lmc-eu/spirit-web-react';

<SegmentedControl name="segmented-control-example" label="Label">
  <SegmentedControlItem id="segmented-control-item-1" value="value-1">
    <UNSTABLE_Truncate>Label Only</UNSTABLE_Truncate>
  </SegmentedControlItem>
  <SegmentedControlItem id="segmented-control-item-2" value="value-2">
    <Icon name="file" boxSize={20} />
    <UNSTABLE_Truncate>Label And Icon</UNSTABLE_Truncate>
  </SegmentedControlItem>
  <SegmentedControlItem id="segmented-control-item-3" value="value-3">
    <Icon name="file" boxSize={20} />
    <VisuallyHidden>Label</VisuallyHidden>
  </SegmentedControlItem>
</SegmentedControl>;
```

### Disabled Item

To disable a `SegmentedControlItem`, you can use the `isDisabled` prop.

```jsx
<SegmentedControl name="segmented-control-example" label="Label">
  <SegmentedControlItem id="segmented-control-item-1" value="value-1" isDisabled>
    <UNSTABLE_Truncate>Label</UNSTABLE_Truncate>
  </SegmentedControlItem>
  <SegmentedControlItem id="segmented-control-item-2" value="value-2">
    <UNSTABLE_Truncate>Label</UNSTABLE_Truncate>
  </SegmentedControlItem>
</SegmentedControl>
```

### Default Selected Item

To set a default selected item, use the `isDefaultSelected` prop on the `SegmentedControlItem` component.
This item (or items, in the case of multiple selection) will be selected by default when the `SegmentedControl` is rendered.

If no item is marked with `isDefaultSelected`, the first item will be selected automatically by default.

```jsx
<SegmentedControl name="segmented-control-example" label="Label">
  <SegmentedControlItem id="segmented-control-item-1" value="value-1">
    <UNSTABLE_Truncate>Label</UNSTABLE_Truncate>
  </SegmentedControlItem>
  <SegmentedControlItem id="segmented-control-item-2" value="value-2" isDefaultSelected>
    <UNSTABLE_Truncate>Label</UNSTABLE_Truncate>
  </SegmentedControlItem>
  <SegmentedControlItem id="segmented-control-item-3" value="value-3">
    <Icon name="file" boxSize={20} />
  </SegmentedControlItem>
</SegmentedControl>
```

### API

| Name                | Type        | Default | Required | Description                                                 |
| ------------------- | ----------- | ------- | -------- | ----------------------------------------------------------- |
| `children`          | `ReactNode` | —       | ✕        | Content of the item                                         |
| `id`                | `string`    | —       | ✓        | ID for the input and label pair                             |
| `isDefaultSelected` | `bool`      | `false` | ✕        | If true, the item will be selected by default when rendered |
| `isDisabled`        | `bool`      | `false` | ✕        | If true, the item will be disabled and cannot be selected   |
| `value`             | `string`    | —       | ✓        | Value attribute for the input.                              |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-variant]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#variant
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
