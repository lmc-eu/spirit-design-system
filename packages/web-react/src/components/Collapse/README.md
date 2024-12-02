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

## API

| Name                      | Type                                | Default | Required | Description                                 |
| ------------------------- | ----------------------------------- | ------- | -------- | ------------------------------------------- |
| `collapsibleToBreakpoint` | [`mobile` \| `tablet` \| `desktop`] | —       | ✕        | Handle for responsive breakpoint            |
| `elementType`             | [`span` \| `div`]                   | `div`   | ✕        | Type of element used as wrapper and content |
| `id`                      | `string`                            | —       | ✓        | Component id                                |
| `isOpen`                  | `bool`                              | —       | ✕        | Is open on initialization                   |
| `transitionDuration`      | `number`                            | `250`   | ✕        | Transition duration in miliseconds          |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Uncontrolled Collapse

### Basic

```javascript
import React, { useState } from 'react';
import { Button, UncontrolledCollapse } from '@lmc-eu/spirit-web-react/components';

// ...

<UncontrolledCollapse
  id="collapse-example"
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
  id="collapse-example"
  renderTrigger={({ isOpen, ...restProps }) => (
    <Button {...restProps}>Collapse Trigger ({isOpen ? 'Open' : 'Closed'})</Button>
  )}
  hideOnCollapse
>
  ...
</UncontrolledCollapse>;
```

## API

| Name                      | Type                                         | Default | Required | Description                                                                                              |
| ------------------------- | -------------------------------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `collapsibleToBreakpoint` | [`mobile` \| `tablet` \| `desktop`]          | —       | ✕        | Handle for responsive breakpoint                                                                         |
| `elementType`             | [`span` \| `div`]                            | `div`   | ✕        | Type of element used as wrapper and content                                                              |
| `hideOnCollapse`          | `bool`                                       | `false` | ✕        | [**DEPRECATED**][readme-deprecations] in favor of `isDisposable`; Hides button when content is displayed |
| `id`                      | `string`                                     | —       | ✓        | Component id                                                                                             |
| `isDisposable`            | `bool`                                       | `false` | ✕        | Hides trigger when content is displayed                                                                  |
| `isOpen`                  | `bool`                                       | `false` | ✕        | Is open on initialization                                                                                |
| `renderTrigger`           | `(render: CollapseRenderProps) => ReactNode` | —       | ✕        | Properties for trigger render                                                                            |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### ⚠️ DEPRECATION NOTICE

`hideOnCollapse` property will be replaced in the next major version. Please use `isDisposable` instead.

We are providing a [codemod][codemod-collapse] to assist with this change.

[What are deprecations?][readme-deprecations]

## Render Toggle API

| Name            | Type         | Default | Required | Description           |
| --------------- | ------------ | ------- | -------- | --------------------- |
| `isOpen`        | `bool`       | —       | ✕        | When collapse is open |
| `onClick`       | `string`     | —       | ✕        | Trigger onClick event |
| `aria-expanded` | `Booleanish` | —       | ✕        | Trigger aria expanded |
| `aria-controls` | `string`     | —       | ✕        | Trigger aria controls |

[codemod-collapse]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/src/transforms/v4/web-react/README.md#v4web-reactcollapse-isdisposable-prop--uncontrolledcollapse-hideoncollapse-to-isdisposable-prop-change
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#deprecations
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
