# Tooltip

## Usage

### Basic

```javascript
import { Tooltip, TooltipTrigger, TooltipPopover } from '@lmc-eu/spirit-web-react/components';

const [open, setOpen] = React.useState(false);

<Tooltip id="tooltip" isOpen={open} onToggle={setOpen}>
  <TooltipTrigger>I have a tooltip!</TooltipTrigger>
  <TooltipPopover>Hello there!</TooltipPopover>
</Tooltip>;
```

### Dismissible

To display close button, add `isDismissible` prop to the `Tooltip` component.

```javascript
import { Tooltip, TooltipTrigger, TooltipPopover, Button } from '@lmc-eu/spirit-web-react/components';

const [open, setOpen] = React.useState(false);

<Tooltip id="tooltip-dismissible" isOpen={open} onToggle={setOpen} placement="right" isDismissible>
  <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
  <TooltipPopover>Close me</TooltipPopover>
</Tooltip>;
```

### TooltipTrigger

You can choose whether you want to open the tooltip on `click` and/or `hover`.
By default, both options are active, e.g., `trigger={['click', 'hover']}`.
If you only want the `click` trigger, you need to specify the trigger, as shown in the example below.
This setup might be preferable when you have a link in your tooltip, for example.

```jsx
import { Tooltip, TooltipTrigger, TooltipPopover, Button } from '@lmc-eu/spirit-web-react/components';

const [open, setOpen] = React.useState(false);

<Tooltip
  id="TooltipTrigger"
  isOpen={open}
  onToggle={setOpen}
  trigger={['click']} // Only `click` trigger is active now.
>
  <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
  <TooltipPopover>
    You can click on the link: <a href="#">Link to unknown</a>
  </TooltipPopover>
</Tooltip>;
```

## API

| Attribute                       | Type                                                              | Default              | Required | Description                                                                                                                                                                                                                                                                |
| ------------------------------- | ----------------------------------------------------------------- | -------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`                      | `ReactNode`                                                       | —                    | ✓        | Tooltip children's nodes - `TooltipTrigger` and `TooltipPopover`                                                                                                                                                                                                           |
| `elementType`                   | `ElementType`                                                     | "button"             | ✕        | Type of element used as trigger                                                                                                                                                                                                                                            |
| `enableFlipping`                | `bool`                                                            | true                 | ✕        | Enables [flipping][floating-ui-flip] of the element’s placement when it starts to overflow its boundary area. For example `top` can be flipped to `bottom`.                                                                                                                |
| `enableFlippingCrossAxis`       | `bool`                                                            | true                 | ✕        | Enables flipping on the [cross axis][floating-ui-flip-cross-axis], the axis perpendicular to main axis. For example `top-end` can be flipped to the `top-start`.                                                                                                           |
| `enableShifting`                | `bool`                                                            | true                 | ✕        | Enables [shifting][floating-ui-shift] of the element to keep it inside the boundary area by adjusting its position.                                                                                                                                                        |
| `enableSizing`                  | `bool`                                                            | true                 | ✕        | Enables [sizing][floating-ui-size] of the element to keep it inside the boundary area by setting the max width.                                                                                                                                                            |
| `flipFallbackAxisSideDirection` | \[`none` \| `start` \| `end`]                                     | "none"               | ✕        | Whether to allow [fallback to the opposite axis][floating-ui-flip-fallback-axis-side-direction] if no placements along the preferred placement axis fit, and if so, which side direction along that axis to choose. If necessary, it will fallback to the other direction. |
| `flipFallbackPlacements`        | `string`                                                          | -                    | ✕        | This describes a list of [explicit placements][floating-ui-flip-fallback-placements] to try if the initial placement doesn’t fit on the axes in which overflow is checked. For example you can set `"top, right, bottom"`                                                  |
| `id`                            | `string`                                                          | -                    | ✓        | Tooltip id                                                                                                                                                                                                                                                                 |
| `isDismissible`                 | `bool`                                                            | false                | ✕        | Make tooltip dismissible                                                                                                                                                                                                                                                   |
| `isFocusableOnHover`            | `bool`                                                            | false                | ✕        | Allows you to mouse over a tooltip without closing it. We suggest turning off the `click` trigger if you use this feature.                                                                                                                                                 |
| `isOpen`                        | `bool`                                                            | -                    | ✓        | Open state                                                                                                                                                                                                                                                                 |
| `onToggle`                      | `() => void`                                                      | -                    | ✓        | Function for toggle open state of dropdown                                                                                                                                                                                                                                 |
| `placement`                     | [Placement Dictionary][dictionary-placement]                      | "bottom"             | ✕        | Placement of tooltip                                                                                                                                                                                                                                                       |
| `positionStrategy`              | \[`absolute` \| `fixed`] ([Strategy type][use-floating-strategy]) | "absolute"           | ✕        | This is the type of CSS position property to use.                                                                                                                                                                                                                          |
| `trigger`                       | \[`click` \| `hover` \| `manual`]                                 | \["click", "hover" ] | ✕        | How tooltip is triggered: `click`, `hover`, `manual`. You may pass multiple triggers. If you pass `manual`, there will be no toggle functionality and you should provide your own toggle solution.                                                                         |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Icons

This component uses the `Icon` component internally. To ensure correct rendering,
please refer to the [Icon component documentation][web-react-icon-documentation] for setup instructions.

[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#placement
[floating-ui-flip-cross-axis]: https://floating-ui.com/docs/flip#crossaxis
[floating-ui-flip-fallback-axis-side-direction]: https://floating-ui.com/docs/flip#fallbackaxissidedirection
[floating-ui-flip-fallback-placements]: https://floating-ui.com/docs/flip#fallbackplacements
[floating-ui-flip]: https://floating-ui.com/docs/flip
[floating-ui-shift]: https://floating-ui.com/docs/shift
[floating-ui-size]: https://floating-ui.com/docs/size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[use-floating-strategy]: https://floating-ui.com/docs/usefloating#strategy
[web-react-icon-documentation]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Icon/README.md#-usage
