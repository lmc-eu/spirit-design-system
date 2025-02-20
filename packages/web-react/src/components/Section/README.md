# Section

The `Section` component is a fundamental building block to group related content into
semantically meaningful areas, enhancing both the structure and readability of your pages.

You can choose whether to render the inner `Container` component and what size of paddings
or you can set your own padding values. The `Section` component also supports setting the
background color.

```jsx
<Section>Content</Section>
```

## Padding

You can define padding using the `paddingY`, `paddingTop` or `paddingBottom` props.

```jsx
<Section paddingY="space-200">Content</Section>
```

Responsive values can be set for each prop using an object:

```jsx
<Section paddingTop={{ mobile: 'space-200', tablet: 'space-300', desktop: 'space-400' }}>Content</Section>
```

## Background Color

You can define background color using the `backgroundColor` prop.

```jsx
<Section backgroundColor="primary">Content</Section>
```

## Container

Section renders inner `Container` component by default. You can disable it by setting `hasContainer` prop to `false`.

```jsx
<Section hasContainer={false}>Content without Container</Section>
```

### Container Props

Additionally, you can pass props to the `Container` component using the `containerProps` prop.

```jsx
<Section containerProps={{ isFluid: true }}>Content</Section>
```

## Size

Sizes based on the Size Extended dictionary are provided.

Each size sets the paddingY of the Section using utility classes.

```jsx
<Section size="xsmall">Content</Section>
<Section size="small">Content</Section>
<Section size="medium">Content</Section>
<Section size="large">Content</Section>
<Section size="xlarge">Content</Section>
```

You can combine the `size` prop with `paddingTop` and `paddingBottom` for more control.

```jsx
<Section size="medium" paddingTop={{ desktop: 'space-200' }}>
  Section with medium size and custom padding top on desktop.
</Section>
```

However, the `paddingY` prop will override the `size` prop.

```jsx
<Section size="medium" paddingY={{ desktop: 'space-200' }}>
  Only the paddingY prop will be applied.
</Section>
```

## API

| Name              | Type                                                              | Default   | Required | Description                     |
| ----------------- | ----------------------------------------------------------------- | --------- | -------- | ------------------------------- |
| `backgroundColor` | [Background Color dictionary][dictionary-color]                   | -         | ✕        | Background color of the Section |
| `containerProps`  | `ContainerProps`                                                  | -         | ✕        | Props for the inner Container   |
| `elementType`     | `ElementType`                                                     | `section` | ✕        | Type of element                 |
| `hasContainer`    | `boolean`                                                         | `true`    | ✕        | Render inner Container          |
| `paddingY`        | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -         | ✕        | Vertical padding of the Section |
| `paddingTop`      | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -         | ✕        | Padding top of the Section      |
| `paddingBottom`   | \[`SpaceToken` \| `Partial<Record<BreakpointToken, SpaceToken>>`] | -         | ✕        | Padding bottom of the Section   |
| `size`            | [Size Extended dictionary][dictionary-size]                       | -         | ✕        | Size of the Section             |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
