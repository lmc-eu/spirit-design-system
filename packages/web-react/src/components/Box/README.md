# Box

The Box component is a simple container around content or other components.

```jsx
<Box>{/* Content go here */}</Box>
```

## Border

You can define border color, radius, style and width using the `borderColor`, `borderRadius`, `borderStyle` and `borderWidth` props.

```jsx
<Box borderColor="basic" borderRadius="200" borderWidth="100" borderStyle="dashed">
  {/* Content go here */}
</Box>
```

The borderColor, borderRadius, and borderStyle props are applied only if borderWidth is greater than `0`.

## Padding

You can define padding using the `padding` prop.

```jsx
<Box padding="space-200">{/* Content go here */}</Box>
```

It is also possible to define padding for horizontal and vertical sides using the `paddingX` and `paddingY` props.

```jsx
<Box paddingX="space-200" paddingY="space-300">
  {/* Content go here */}
</Box>
```

You can also define padding for each side using the `paddingTop`, `paddingRight`, `paddingBottom`, and `paddingLeft` props.

```jsx
<Box paddingTop="space-200" paddingRight="space-300" paddingBottom="space-400" paddingLeft="space-500">
  {/* Content go here */}
</Box>
```

Responsive values can be set for each prop using an object:

```jsx
<Box padding={{ mobile: 'space-200', tablet: 'space-300', desktop: 'space-400' }}>{/* Content go here */}</Box>
```

## Background Color

You can define background color using the `backgroundColor` prop.

```jsx
<Box backgroundColor="primary">{/* Content go here */}</Box>
```

## API

| Name              | Type                                                              | Default | Required | Description                   |
| ----------------- | ----------------------------------------------------------------- | ------- | -------- | ----------------------------- |
| `backgroundColor` | [Background Color dictionary][dictionary-color]                   | -       | ✕        | Background color of the Box   |
| `borderColor`     | [Border Color dictionary][dictionary-border-properities]          | -       | ✕        | Border color of the Box       |
| `borderRadius`    | [Border Radius dictionary][dictionary-border-properities]         | -       | ✕        | Border radius of the Box      |
| `borderStyle`     | [Border Style dictionary][dictionary-border-properities]          | `solid` | ✕        | Border style of the Box       |
| `borderWidth`     | [Border Width dictionary][dictionary-border-properities]          | -       | ✕        | Border width of the Box       |
| `elementType`     | `ElementType`                                                     | `div`   | ✕        | Type of element               |
| `padding`         | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -       | ✕        | Padding of the Box            |
| `paddingX`        | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -       | ✕        | Horizontal padding of the Box |
| `paddingY`        | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -       | ✕        | Vertical padding of the Box   |
| `paddingTop`      | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -       | ✕        | Padding top of the Box        |
| `paddingRight`    | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -       | ✕        | Padding right of the Box      |
| `paddingBottom`   | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -       | ✕        | Padding bottom of the Box     |
| `paddingLeft`     | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -       | ✕        | Padding left of the Box       |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#color
[dictionary-border-properities]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#border-properties
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
