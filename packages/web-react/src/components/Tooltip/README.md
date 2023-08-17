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

| Name               | Type                                              | Default  | Required | Description                               |
| ------------------ | ------------------------------------------------- | -------- | -------- | ----------------------------------------- |
| `children`         | `ReactNode`                                       | -        | ✔        | Tooltip children's nodes                  |
| `closeLabel`       | `string`                                          | `Close`  | ✕        | Tooltip label on close button             |
| `isDismissible`    | `boolean`                                         | -        | ✕        | When it should appear with a close button |
| `onClose`          | `(event: ClickEvent) => void`                     | -        | ✕        | Close button callback                     |
| `open`             | `boolean`                                         | -        | ✕        | Tooltip open state control                |
| `placement`        | [`top` \| `right` \| `bottom` \| `left` \| `off`] | `bottom` | ✕        | Tooltip placement                         |
| `UNSAFE_className` | `string`                                          | -        | ✕        | Tooltip custom class name                 |
| `UNSAFE_style`     | `CSSProperties`                                   | -        | ✕        | Tooltip custom style                      |

## UncontrolledTooltip Props

| Name               | Type                                              | Default  | Required | Description                               |
| ------------------ | ------------------------------------------------- | -------- | -------- | ----------------------------------------- |
| `children`         | `ReactNode`                                       | -        | ✔        | Tooltip children's nodes                  |
| `closeLabel`       | `string`                                          | `Close`  | ✕        | Tooltip label on close button             |
| `isDismissible`    | `boolean`                                         | -        | ✕        | When it should appear with a close button |
| `placement`        | [`top` \| `right` \| `bottom` \| `left` \| `off`] | `bottom` | ✕        | Tooltip placement                         |
| `UNSAFE_className` | `string`                                          | -        | ✕        | Tooltip custom class name                 |
| `UNSAFE_style`     | `CSSProperties`                                   | -        | ✕        | Tooltip custom style                      |

## TooltipWrapper Props

| Name               | Type            | Default | Required | Description                     |
| ------------------ | --------------- | ------- | -------- | ------------------------------- |
| `children`         | `ReactNode`     | -       | ✔        | TooltipWrapper children's nodes |
| `UNSAFE_className` | `string`        | -       | ✕        | Wrapper custom class name       |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | Wrapper custom style            |

## TooltipCloseButton Props

| Name               | Type                          | Default | Required | Description                    |
| ------------------ | ----------------------------- | ------- | -------- | ------------------------------ |
| `label`            | `string`                      | `Close` | ✕        | Text label                     |
| `onClick`          | `(event: ClickEvent) => void` | -       | ✕        | Close Button callback          |
| `UNSAFE_className` | `string`                      | -       | ✕        | Close Button custom class name |
| `UNSAFE_style`     | `CSSProperties`               | -       | ✕        | Close Button custom style      |

## Advanced Positioning with Floating UI

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
    I have a flipping tooltip!
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
    I have a flipping tooltip!
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
