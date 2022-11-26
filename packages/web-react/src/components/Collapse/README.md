# Collapse

## Usage

### Basic

```javascript
import React, { useState} from 'react';
import { Button } from '@lmc-eu/spirit-web-react/components';

// ...

const [collapsed, setCollapsed] = useState<boolean>(true);

// ...

<Button onClick={() => setCollapsed(!collapsed)}>Collapse Trigger ({collapsed ? 'Open' : 'Closed'})</Button>
<Collapse isCollapsed={collapsed}>
  ...
</Collapse>
```

### Responsive

```javascript
import React, { useState} from 'react';
import { Button, Collapse } from '@lmc-eu/spirit-web-react/components';

// ...

const [collapsed, setCollapsed] = useState<boolean>(true);

// ...

<Button UNSAFE_className="d-tablet-none" onClick={() => setCollapsed(!collapsed)}>Collapse Trigger ({collapsed ? 'Open' : 'Closed'})</Button>
<Collapse isCollapsed={collapsed} collapsibleToBreakpoint="tablet">
  ...
</Collapse>
```

## Props

| Prop name                 | Type                            | Default    | Required | Description                      |
| ------------------------- | ------------------------------- | ---------- | -------- | -------------------------------- |
| `id`                      | `string`                        | `<random>` | no       | Component id                     |
| `isCollapsed`             | `boolean`                       | -          | no       | Is collapsed on init             |
| `collapsibleToBreakpoint` | `'mobile', 'tablet', 'desktop'` | -          | no       | Handle for responsive breakpoint |
| `UNSAFE_className`        | `string`                        | -          | no       | Wrapper custom classname         |
| `UNSAFE_style`            | `CSSProperties`                 | -          | no       | Wrapper custom style             |

## Uncontrolled Collapse

### Basic

```javascript
import React, { useState } from 'react';
import { Button, UncontrolledCollapse } from '@lmc-eu/spirit-web-react/components';

// ...

<UncontrolledCollapse
  id="CollapseExample"
  renderToggle={({ collapsed, ...restProps }) => (
    <Button {...restProps}>Collapse Trigger ({collapsed ? 'Open' : 'Closed'})</Button>
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
  renderToggle={({ collapsed, ...restProps }) => (
    <Button {...restProps}>Collapse Trigger ({collapsed ? 'Open' : 'Closed'})</Button>
  )}
  hideOnCollapse
>
  ...
</UncontrolledCollapse>;
```

## Props

| Prop name                 | Type                                         | Default    | Required | Description                            |
| ------------------------- | -------------------------------------------- | ---------- | -------- | -------------------------------------- |
| `id`                      | `string`                                     | `<random>` | no       | Component id                           |
| `isCollapsed`             | `boolean`                                    | -          | no       | Is collapsed on init                   |
| `renderTrigger`           | `(render: CollapseRenderProps) => ReactNode` | -          | no       | Properties for trigger render          |
| `collapsibleToBreakpoint` | `'mobile', 'tablet', 'desktop'`              | -          | no       | Handle for responsive breakpoint       |
| `hideOnCollapse`          | `boolean`                                    | -          | no       | Hides button when content is collapsed |
| `UNSAFE_className`        | `string`                                     | -          | no       | Wrapper custom classname               |
| `UNSAFE_style`            | `CSSProperties`                              | -          | no       | Wrapper custom style                   |

## Render Toggle Props

| Prop name       | Type         | Description                |
| --------------- | ------------ | -------------------------- |
| `collapsed`     | `boolean`    | When collapse is collapsed |
| `onClick`       | `string`     | Trigger onClick event      |
| `className`     | `string`     | Trigger state classname    |
| `aria-expanded` | `Booleanish` | Trigger aria expanded      |
| `aria-controls` | `string`     | Trigger aria controls      |
