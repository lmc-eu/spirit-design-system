# Item

The Item component is used to display a single item in a list. It can be used in Dropdown or similar.

To use Item with checkbox or radio please use components [Checkbox][checkbox] or [Radio][radio]
with `isItem` property. We do this to avoid repeating the same code and to simplify the API.

Simple Item example:

```jsx
import { Item } from '@lmc-eu/spirit-web-react';

<Item label="Item" />;
```

Item with icon example:

```jsx
import { Item } from '@lmc-eu/spirit-web-react';

<Item label="Item" iconName="search" />;
```

Item in selected state example:

```jsx
import { Item } from '@lmc-eu/spirit-web-react';

<Item label="Item" isSelected />;
```

Item with Helper text example:

```jsx
import { Item } from '@lmc-eu/spirit-web-react';

<Item label="Item" helperText="Helper text" />;
```

Item in disabled state example:

```jsx
import { Item } from '@lmc-eu/spirit-web-react';

<Item label="Item" isDisabled />;
```

Item with icon and helper text in selected state example:

```jsx
import { Item } from '@lmc-eu/spirit-web-react';

<Item label="Item" iconName="search" helperText="Helper text" isSelected />;
```

Item as a link example:

```jsx
import { Item } from '@lmc-eu/spirit-web-react';

<Item label="Item" elementType="a" href="#" />;
```

Radio as Item:

```jsx
import { Radio } from '@lmc-eu/spirit-web-react';

<Radio id="radioItem" name="example" label="Radio Label" isItem />;
```

Checkbox as Item:

```jsx
import { Checkbox } from '@lmc-eu/spirit-web-react';

<Checkbox id="checkboxItem" name="example" label="Checkbox Label" isItem />;
```

## API

| Name               | Type                      | Default  | Required | Description                     |
| ------------------ | ------------------------- | -------- | -------- | ------------------------------- |
| `elementType`      | `ElementType`             | `button` | ✕        | Type of element used as wrapper |
| `helperText`       | `string`                  | —        | ✕        | Custom helper text              |
| `iconName`         | `string`                  | —        | ✕        | Icon used in item               |
| `isDisabled`       | `bool`                    | `false`  | ✕        | Whether is the item disabled    |
| `isSelected`       | `bool`                    | `false`  | ✕        | Whether is the item selected    |
| `label`            | [`string` \| `ReactNode`] | -        | ✔        | Label of the item               |
| `UNSAFE_className` | `string`                  | —        | ✕        | Wrapper custom class name       |
| `UNSAFE_style`     | `CSSProperties`           | —        | ✕        | Wrapper custom style            |

[checkbox]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Checkbox/README.md
[radio]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Radio/README.md
