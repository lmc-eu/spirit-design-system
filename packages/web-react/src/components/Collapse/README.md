# Collapse

## Usage

### Basic

```javascript
import React, { useState} from 'react';
import { Button } from '@lmc-eu/spirit-web-react/components';

// ...

const [isOpen, toggle] = useState<boolean>(true);

// ...

<Button onClick={() => toggle(!isOpen)}>Collapse Trigger ({ isOpen ? 'Open' : 'Closed' })</Button>
<Collapse isOpen={isOpen}>
  ...
</Collapse>
```

### With toggle from hook

```javascript
import React, { useState} from 'react';
import { Button, Collapse, useCollapse } from '@lmc-eu/spirit-web-react/components';

// ...

const { isOpen, toggle } = useCollapse(false);

// ...

<Button onClick={() => toggle(!isOpen)}>Collapse Trigger ({ isOpen ? 'Open' : 'Closed' })</Button>
<Collapse isOpen={isOpen}>
  ...
</Collapse>
```

### With toggle handler from hook

```javascript
import React, { useState} from 'react';
import { Button, Collapse, useCollapse } from '@lmc-eu/spirit-web-react/components';

// ...

const { isOpen, toggleHandler } = useCollapse(false);

// ...

<Button onClick={toggleHandler}>Collapse Trigger ({ isOpen ? 'Open' : 'Closed' })</Button>
<Collapse isOpen={isOpen}>
  ...
</Collapse>
```

### Responsive

```javascript
import React, { useState} from 'react';
import { Button, Collapse } from '@lmc-eu/spirit-web-react/components';

// ...

const [isOpen, toggle] = useState<boolean>(true);

// ...

<Button UNSAFE_className="d-tablet-none" onClick={() => toggle(!isOpen)}>Collapse Trigger ({ isOpen ? 'Open' : 'Closed' })</Button>
<Collapse isOpen={isOpen} collapsibleToBreakpoint="tablet">
  ...
</Collapse>
```

## Props

| Prop name                 | Type                            | Default    | Required | Description                                 |
| ------------------------- | ------------------------------- | ---------- | -------- | ------------------------------------------- |
| `id`                      | `string`                        | `<random>` | ✕        | Component id                                |
| `isOpen`                  | `boolean`                       | -          | ✕        | Is open on initialization                   |
| `collapsibleToBreakpoint` | `'mobile', 'tablet', 'desktop'` | -          | ✕        | Handle for responsive breakpoint            |
| `transitionDuration`      | `number`                        | `250`      | ✕        | Transition duration in miliseconds          |
| `elementType`             | `'span', 'div'`                 | `'div'`    | ✕        | Type of element used as wrapper and content |
| `UNSAFE_className`        | `string`                        | -          | ✕        | Wrapper custom class name                   |
| `UNSAFE_style`            | `CSSProperties`                 | -          | ✕        | Wrapper custom style                        |

## Uncontrolled Collapse

### Basic

```javascript
import React, { useState } from 'react';
import { Button, UncontrolledCollapse } from '@lmc-eu/spirit-web-react/components';

// ...

<UncontrolledCollapse
  id="CollapseExample"
  renderTrigger={({ isOpen, ...restProps }) => (
    <Button {...restProps}>Collapse Trigger ({isOpen ? 'Open' : 'Closed'})</Button>
  )}
>
  ...
</UncontrolledCollapse>;
```

```javascript
import React, { useState } from 'react';
import { Button, UncontrolledCollapse } from '@lmc-eu/spirit-web-react/components';

// ...

<UncontrolledCollapse
  id="CollapseExample"
  renderTrigger={({ isOpen, ...restProps }) => (
    <Button {...restProps}>Collapse Trigger ({isOpen ? 'Open' : 'Closed'})</Button>
  )}
  hideOnCollapse
>
  ...
</UncontrolledCollapse>;
```

## Props

| Prop name                 | Type                                         | Default    | Required | Description                            |
| ------------------------- | -------------------------------------------- | ---------- | -------- | -------------------------------------- |
| `id`                      | `string`                                     | `<random>` | ✕        | Component id                           |
| `isOpen`                  | `boolean`                                    | -          | ✕        | Is open on initialization              |
| `renderTrigger`           | `(render: CollapseRenderProps) => ReactNode` | -          | ✕        | Properties for trigger render          |
| `collapsibleToBreakpoint` | `'mobile', 'tablet', 'desktop'`              | -          | ✕        | Handle for responsive breakpoint       |
| `hideOnCollapse`          | `boolean`                                    | -          | ✕        | Hides button when content is displayed |
| `UNSAFE_className`        | `string`                                     | -          | ✕        | Wrapper custom classname               |
| `UNSAFE_style`            | `CSSProperties`                              | -          | ✕        | Wrapper custom style                   |

## Render Toggle Props

| Prop name       | Type         | Description           |
| --------------- | ------------ | --------------------- |
| `isOpen`        | `boolean`    | When collapse is open |
| `onClick`       | `string`     | Trigger onClick event |
| `aria-expanded` | `Booleanish` | Trigger aria expanded |
| `aria-controls` | `string`     | Trigger aria controls |
