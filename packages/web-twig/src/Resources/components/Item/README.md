# Item

The Item component is used to display a single item in a list. It can be used in Dropdown or similar.

To use Item with checkbox or radio please use components [Checkbox][checkbox] or [Radio][radio]
with `isItem` property. We do this to avoid repeating the same code and to simplify the API.

Simple Item example:

```twig
<Item label="Item" />;
```

Item with icon example:

```twig
<Item label="Item" iconName="search" />;
```

Item in selected state example:

```twig
<Item label="Item" isSelected />;
```

Item with Helper text example:

```twig
<Item label="Item" helperText="Helper text" />;
```

Item in disabled state example:

```twig
<Item label="Item" isDisabled />;
```

Item with icon and helper text in selected state example:

```twig
<Item label="Item" iconName="search" helperText="Helper text" isSelected />;
```

Item as a link example:

```twig
<Item label="Item" elementType="a" href="#" />;
```

Radio as Item:

```twig
<Radio id="radioItem" name="example" label="Radio Label" isItem />;
```

Checkbox as Item:

```twig
<Checkbox id="checkboxItem" name="example" label="Checkbox Label" isItem />;
```

Usage in [Dropdown][dropdown] component:

```twig
<DropdownWrapper>
  <Button data-spirit-toggle="dropdown" data-spirit-target="DropdownExample" aria-controls="DropdownExample" aria-expanded="false">Open Dropdown</Button>
  <Dropdown id="DropdownExample">
    <Item elementType="a" href="#" label="Item label" />
  </Dropdown>
</DropdownWrapper>
```

## API

| Name                | Type            | Default  | Required | Description                           |
| ------------------- | --------------- | -------- | -------- | ------------------------------------- |
| `elementType`       | `ElementType`   | `button` | ✕        | Type of element used as wrapper       |
| `helperText`        | `string`        | —        | ✕\*\*    | Custom helper text                    |
| `href`              | `string`        | —        | ✕        | Link URL if element type is anchor    |
| `iconName`          | `string`        | —        | ✕        | Icon used in item                     |
| `isDisabled`        | `bool`          | `false`  | ✕        | Whether is the item disabled          |
| `isSelected`        | `bool`          | `false`  | ✕        | Whether is the item selected          |
| `label`             | `string`        | -        | ✓\*      | Label of the item                     |
| `target`            | `string`        | —        | ✕        | Target prop if element type is anchor |
| `type`              | `string`        | `button` | ✕        | Input type if element type is button  |
| `UNSAFE_className`  | `string`        | —        | ✕        | Wrapper custom class name             |
| `UNSAFE_helperText` | `string`        | —        | ✕\*\*    | Unescaped custom helper text          |
| `UNSAFE_label`      | `string`        | —        | ✕        | Unescaped label text (allows HTML)    |
| `UNSAFE_style`      | `CSSProperties` | —        | ✕        | Wrapper custom style                  |

(\*) Label is required. You can use the `label` for simple text or `UNSAFE_label` for HTML content.
(\*\*) Props with and without `UNSAFE_` prefix are mutually exclusive.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[checkbox]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/src/Resources/components/Checkbox/README.md
[dropdown]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Dropdown
[radio]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/src/Resources/components/Radio/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
