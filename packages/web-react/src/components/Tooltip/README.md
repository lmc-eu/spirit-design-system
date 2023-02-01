# Tooltip

## Usage

### Basic

```javascript
<TooltipWrapper>
  <button type="button" className="Button Button--primary Button--medium TooltipTarget">
    I have a tooltip!
  </button>
  <Tooltip>Hello there!</Tooltip>
</TooltipWrapper>
```

### Dismissible

```javascript
import { useState } from 'react';

const [open, setOpen] = useState(true);
const closeHandler = () => setOpen(false);

<TooltipWrapper>
  <button type="button" className="Button Button--primary Button--medium">
    I have a tooltip!
  </button>
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
  <button type="button" className="Button Button--primary Button--medium" onClick={toggleHandler}>
    Toggle tooltip
  </button>
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
  <button type="button" className="Button Button--primary Button--medium TooltipTarget">
    I have a tooltip!
  </button>
  <UncontrolledTooltip>Hello there!</UncontrolledTooltip>
</TooltipWrapper>
```

### Uncontrolled Dismissible

```javascript
<TooltipWrapper>
  <button type="button" className="Button Button--primary Button--medium">
    I have a tooltip 😎
  </button>
  <UncontrolledTooltip isDismissible>Hello there!</UncontrolledTooltip>
</TooltipWrapper>
```

## Tooltip Props

| Prop name          | Type                                      | Default    | Required | Description                               |
| ------------------ | ----------------------------------------- | ---------- | -------- | ----------------------------------------- |
| `children`         | `ReactNode`                               | -          | yes      | Tooltip children's nodes                  |
| `UNSAFE_className` | `string`                                  | -          | no       | Tooltip custom class name                 |
| `UNSAFE_style`     | `CSSProperties`                           | -          | no       | Tooltip custom style                      |
| `placement`        | `'top', 'right', 'bottom', 'left', 'off'` | `'bottom'` | no       | Tooltip placement                         |
| `isDismissible`    | `boolean`                                 | -          | no       | When it should appear with a close button |
| `closeLabel`       | `string`                                  | `'Close'`  | no       | Tooltip label on close button             |
| `open`             | `boolean`                                 | -          | no       | Tooltip open state control                |
| `onClose`          | `(event: ClickEvent) => void`             | -          | no       | Close button callback                     |

## UncontrolledTooltip Props

| Prop name          | Type                                      | Default    | Required | Description                               |
| ------------------ | ----------------------------------------- | ---------- | -------- | ----------------------------------------- |
| `children`         | `ReactNode`                               | -          | yes      | Tooltip children's nodes                  |
| `UNSAFE_className` | `string`                                  | -          | no       | Tooltip custom class name                 |
| `UNSAFE_style`     | `CSSProperties`                           | -          | no       | Tooltip custom style                      |
| `placement`        | `'top', 'right', 'bottom', 'left', 'off'` | `'bottom'` | no       | Tooltip placement                         |
| `isDismissible`    | `boolean`                                 | -          | no       | When it should appear with a close button |
| `closeLabel`       | `string`                                  | `'Close'`  | no       | Tooltip label on close button             |

## TooltipWrapper Props

| Prop name          | Type            | Default | Required | Description                     |
| ------------------ | --------------- | ------- | -------- | ------------------------------- |
| `children`         | `ReactNode`     | -       | yes      | TooltipWrapper children's nodes |
| `UNSAFE_className` | `string`        | -       | no       | Wrapper custom class name       |
| `UNSAFE_style`     | `CSSProperties` | -       | no       | Wrapper custom style            |

## TooltipCloseButton Props

| Prop name          | Type                          | Default   | Required | Description                    |
| ------------------ | ----------------------------- | --------- | -------- | ------------------------------ |
| `label`            | `string`                      | `'Close'` | no       | Text label                     |
| `onClick`          | `(event: ClickEvent) => void` | -         | no       | Close Button callback          |
| `UNSAFE_className` | `string`                      | -         | no       | Close Button custom class name |
| `UNSAFE_style`     | `CSSProperties`               | -         | no       | Close Button custom style      |

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
    data-placement={placement}
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
    data-placement={placement}
    {...getFloatingProps()}
  >
    Hello there!
  </Tooltip>
</div>;
```
