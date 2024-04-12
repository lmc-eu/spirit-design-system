# Tooltip

## Usage

### Basic

```javascript
<TooltipWrapper>
  <Button UNSAFE_className="TooltipTarget">I have a tooltip!</Button>
  <Tooltip>Hello there!</Tooltip>
</TooltipWrapper>
```

### Dismissible

```javascript
import { useState } from 'react';

const [open, setOpen] = useState(true);
const closeHandler = () => setOpen(false);

<TooltipWrapper>
  <Button>I have a tooltip!</Button>
  <Tooltip isDismissible open={open} onClose={closeHandler}>
    Hello there!
  </Tooltip>
</TooltipWrapper>;
```

### Tooltip on Click

```javascript
import { useState } from 'react';

const [open, setOpen] = useState(false);
const toggleHandler = () => setOpen(!open);

<div>
  <Button onClick={toggleHandler}>Toggle tooltip</Button>
</div>
<TooltipWrapper>
  <div>
    I have an externally-triggered tooltip
  </div>
  <Tooltip open={open}>
    Hello there!
  </Tooltip>
</TooltipWrapper>
```

### Basic Uncontrolled

```javascript
<TooltipWrapper>
  <Button UNSAFE_className="TooltipTarget">I have a tooltip!</Button>
  <UncontrolledTooltip>Hello there!</UncontrolledTooltip>
</TooltipWrapper>
```

### Uncontrolled Dismissible

```javascript
<TooltipWrapper>
  <Button>I have a tooltip 😎</Button>
  <UncontrolledTooltip isDismissible>Hello there!</UncontrolledTooltip>
</TooltipWrapper>
```

## Tooltip Props

| Name            | Type                                                | Default  | Required | Description                               |
| --------------- | --------------------------------------------------- | -------- | -------- | ----------------------------------------- |
| `children`      | `ReactNode`                                         | —        | ✔        | Tooltip children's nodes                  |
| `closeLabel`    | `string`                                            | `Close`  | ✕        | Tooltip label on close button             |
| `isDismissible` | `bool`                                              | —        | ✕        | When it should appear with a close button |
| `onClose`       | `(event: ClickEvent) => void`                       | —        | ✕        | Close button callback                     |
| `open`          | `bool`                                              | —        | ✕        | Tooltip open state control                |
| `placement`     | [Placement dictionary][dictionary-placement], 'off' | `bottom` | ✕        | Tooltip placement                         |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## UncontrolledTooltip Props

| Name            | Type                                                | Default  | Required | Description                               |
| --------------- | --------------------------------------------------- | -------- | -------- | ----------------------------------------- |
| `children`      | `ReactNode`                                         | —        | ✔        | Tooltip children's nodes                  |
| `closeLabel`    | `string`                                            | `Close`  | ✕        | Tooltip label on close button             |
| `isDismissible` | `bool`                                              | —        | ✕        | When it should appear with a close button |
| `placement`     | [Placement dictionary][dictionary-placement], 'off' | `bottom` | ✕        | Tooltip placement                         |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## TooltipWrapper Props

| Name       | Type        | Default | Required | Description                     |
| ---------- | ----------- | ------- | -------- | ------------------------------- |
| `children` | `ReactNode` | —       | ✔        | TooltipWrapper children's nodes |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## TooltipCloseButton Props

| Name      | Type                          | Default | Required | Description           |
| --------- | ----------------------------- | ------- | -------- | --------------------- |
| `label`   | `string`                      | `Close` | ✕        | Text label            |
| `onClick` | `(event: ClickEvent) => void` | —       | ✕        | Close Button callback |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Advanced Positioning with Floating UI

### ⚠️ DEPRECATION NOTICE

The `off` placement is [deprecated][readme-deprecations] and will be removed in the next major version.
Please use the `TooltipModern` component instead, which is the successor of the `Tooltip` component and
provides improved functionality.

[What are deprecations?][readme-deprecations]

### Basic

```javascript
import { useState } from 'react';
import {
  autoUpdate,
  flip,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';

const [open, setOpen] = useState(false);
const { x, y, refs, context, placement } = useFloating({
  open,
  onOpenChange: setOpen,
  placement: 'top',
  whileElementsMounted: autoUpdate,
  middleware: [flip()],
});
const hover = useHover(context, { move: false });
const focus = useFocus(context);
const dismiss = useDismiss(context);
const role = useRole(context, { role: 'tooltip' });
const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

<div>
  <button
    type="button"
    className="Button Button--primary Button--medium"
    ref={refs.setReference}
    {...getReferenceProps()}
  >
    I have a tooltip!
  </button>
  <Tooltip
    placement="off"
    open={open}
    ref={refs.setFloating}
    UNSAFE_style={{
      top: y ?? 0,
      left: x ?? 0,
    }}
    data-spirit-placement={placement}
    {...getFloatingProps()}
  >
    Hello there!
  </Tooltip>
</div>;
```

### Dismissible

```javascript
import { useState } from 'react';
import {
  autoUpdate,
  flip,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';

const [open, setOpen] = useState(false);

const closeHandler = () => setOpen(false);

const { x, y, refs, context, placement } = useFloating({
  placement: 'top',
  whileElementsMounted: autoUpdate,
  middleware: [flip()],
});
const hover = useHover(context, { move: false });
const focus = useFocus(context);
const dismiss = useDismiss(context);
const role = useRole(context, { role: 'tooltip' });
const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

<div>
  <button
    type="button"
    className="Button Button--primary Button--medium"
    ref={refs.setReference}
    {...getReferenceProps()}
  >
    I have a tooltip!
  </button>
  <Tooltip
    placement="off"
    open={open}
    onClose={closeHandler}
    isDismissible
    ref={refs.setFloating}
    UNSAFE_style={{
      top: y ?? 0,
      left: x ?? 0,
    }}
    data-spirit-placement={placement}
    {...getFloatingProps()}
  >
    Hello there!
  </Tooltip>
</div>;
```

# TooltipModern

⚠️ `TooltipModern` component is [deprecated][readme-deprecations] and will be renamed to `Tooltip` in the next major version.

## Usage

To enable the advanced floating functionality, you need to have activated feature flag `spirit-feature-tooltip-enable-data-placement` on any parent element.
This requirement will be removed in future major version.

### Basic

```javascript
import { TooltipModern, TooltipTrigger, TooltipPopover, Button } from '@lmc-eu/spirit-web-react/components';

const [open, setOpen] = React.useState(false);

<div className="spirit-feature-tooltip-enable-data-placement">
  <TooltipModern id="TooltipModern" isOpen={open} onToggle={setOpen}>
    <TooltipTrigger>I have a tooltip!</TooltipTrigger>
    <TooltipPopover>Hello there!</TooltipPopover>
  </TooltipModern>
</div>;
```

### Dismissible

Add `isDismissible` prop to `TooltipModern` component.
there will be automatically displayed close button in `TooltipPopover`` component

```javascript
import { TooltipModern, TooltipTrigger, TooltipPopover, Button } from '@lmc-eu/spirit-web-react/components';

const [open, setOpen] = React.useState(false);

<div className="spirit-feature-tooltip-enable-data-placement">
  <TooltipModern id="TooltipModernDismissible" isOpen={open} onToggle={setOpen} placement="right" isDismissible>
    <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
    <TooltipPopover>Close me</TooltipPopover>
  </TooltipModern>
</div>;
```

### Trigger

You can choose whether you want to open the tooltip on `click` and/or `hover`.
By default, both options are active, e.g., `trigger={['click', 'hover']}`.
If you only want the `click` trigger, you need to specify the trigger, as shown in the example below.
This setup might be preferable when you have a link in your tooltip, for example.

```jsx
import { TooltipModern, TooltipTrigger, TooltipPopover, Button } from '@lmc-eu/spirit-web-react/components';

const [open, setOpen] = React.useState(false);

<div className="spirit-feature-tooltip-enable-data-placement">
  <TooltipModern
    id="TooltipModernTrigger"
    isOpen={open}
    onToggle={setOpen}
    trigger={['click']} // Only `click` trigger is active now.
  >
    <TooltipTrigger elementType={Button}>I have a tooltip 😎</TooltipTrigger>
    <TooltipPopover>
      You can click on the link: <a href="#">Link to unknown</a>
    </TooltipPopover>
  </TooltipModern>
</div>;
```

## API

| Attribute                       | Type                                         | Default             | Required | Description                                                                                                                                                                                                                                                                |
| ------------------------------- | -------------------------------------------- | ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`                      | `ReactNode`                                  | —                   | ✔        | Tooltip children's nodes - `TooltipTrigger` and `TooltipPopover`                                                                                                                                                                                                           |
| `enableFlipping`                | `bool`                                       | true                | ✕        | Enables [flipping][floating-ui-flip] of the element’s placement when it starts to overflow its boundary area. For example `top` can be flipped to `bottom`.                                                                                                                |
| `enableFlippingCrossAxis`       | `bool`                                       | true                | ✕        | Enables flipping on the [cross axis][floating-ui-flip-cross-axis], the axis perpendicular to main axis. For example `top-end` can be flipped to the `top-start`.                                                                                                           |
| `enableShifting`                | `bool`                                       | true                | ✕        | Enables [shifting][floating-ui-shift] of the element to keep it inside the boundary area by adjusting its position.                                                                                                                                                        |
| `enableSizing`                  | `bool`                                       | true                | ✕        | Enables [sizing][floating-ui-size] of the element to keep it inside the boundary area by setting the max width.                                                                                                                                                            |
| `flipFallbackAxisSideDirection` | ["none" \| "start" \| "end"]                 | "none"              | ✕        | Whether to allow [fallback to the opposite axis][floating-ui-flip-fallback-axis-side-direction] if no placements along the preferred placement axis fit, and if so, which side direction along that axis to choose. If necessary, it will fallback to the other direction. |
| `flipFallbackPlacements`        | `string`                                     | -                   | ✕        | This describes a list of [explicit placements][floating-ui-flip-fallback-placements] to try if the initial placement doesn’t fit on the axes in which overflow is checked. For example you can set `"top, right, bottom"`                                                  |
| `id`                            | `string`                                     | -                   | ✔        | Tooltip id                                                                                                                                                                                                                                                                 |
| `isDismissible`                 | `bool`                                       | false               | ✕        | Make tooltip dismissible                                                                                                                                                                                                                                                   |
| `isOpen`                        | `bool`                                       | -                   | ✔        | Open state                                                                                                                                                                                                                                                                 |
| `onToggle`                      | `() => void`                                 | -                   | ✔        | Function for toggle open state of dropdown                                                                                                                                                                                                                                 |
| `placement`                     | [Placement Dictionary][dictionary-placement] | "bottom"            | ✕        | Placement of tooltip                                                                                                                                                                                                                                                       |
| `isFocusableOnHover`            | `bool`                                       | false               | ✕        | Allows you to mouse over a tooltip without closing it. We suggest turning off the `click` trigger if you use this feature.                                                                                                                                                 |
| `trigger`                       | ["click" \| "hover" \| "manual"]             | ["click", "hover" ] | ✕        | How tooltip is triggered: `click`, `hover`, `manual`. You may pass multiple triggers. If you pass `manual`, there will be no toggle functionality and you should provide your own toggle solution.                                                                         |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#placement
[example]: https://spirit-design-system-demo.netlify.app/src/scss/components/tooltip/#advanced-positioning
[floating-ui-flip-cross-axis]: https://floating-ui.com/docs/flip#crossaxis
[floating-ui-flip-fallback-axis-side-direction]: https://floating-ui.com/docs/flip#fallbackaxissidedirection
[floating-ui-flip-fallback-placements]: https://floating-ui.com/docs/flip#fallbackplacements
[floating-ui-flip]: https://floating-ui.com/docs/flip
[floating-ui-shift]: https://floating-ui.com/docs/shift
[floating-ui-size]: https://floating-ui.com/docs/size
[floating-ui]: https://floating-ui.com
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-feature-flags]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md#feature-flags
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
