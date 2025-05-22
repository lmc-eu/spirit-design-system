# Heading

The Heading component provides helper classes to render headings.

## Basic Usage

Use the `elementType` prop to set the HTML tag of the Heading component.

```jsx
<Heading elementType="h1">Heading</Heading>
```

## Size

Use the `size` prop to set the size of the text.

```jsx
<Heading elementType="h1" size="large">
  Heading
</Heading>
```

## Emphasis

Use the `emphasis` prop to set the emphasis of the text.

⚠️ This prop only affects styling, not the semantics of the element.

```jsx
<Heading elementType="h1" emphasis="semibold">
  Semibold heading
</Heading>
```

## Text Color

Use the `textColor` prop to set color of the text. When undefined, the text color
is inherited from the parent element.

```jsx
<Heading textColor="secondary">Secondary heading</Heading>
```

## Text Alignment

Use the `textAlignment` prop to set the alignment of the text.

```jsx
<Heading textAlignment="center">Centered heading</Heading>
<Heading textAlignment="right">Right-aligned heading</Heading>
```

You can define responsive values for the `textAlignment` prop using an object:

```jsx
<Heading textAlignment={{ mobile: 'center', tablet: 'right', desktop: 'left' }}>Responsive text alignment</Heading>
```

## Full Example

```jsx
<Heading elementType="h1" size="large" emphasis="semibold" textColor="secondary">
  Heading
</Heading>
```

## API

| Name            | Type                                                                                                                                                        | Default  | Required | Description          |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | -------------------- |
| `elementType`   | `React.Element`                                                                                                                                             | -        | ✓        | HTML tag             |
| `emphasis`      | [Emphasis dictionary][dictionary-emphasis]                                                                                                                  | `bold`   | ✕        | Emphasis of the text |
| `size`          | [Size Extended dictionary][dictionary-size]                                                                                                                 | `medium` | ✕        | Size of the text     |
| `textAlignment` | \[[Text Alignment dictionary][dictionary-alignment] \| `Partial<Record<BreakpointToken, TextAlignmentDictionaryType>>`]                                     | -        | ✕        | Text alignment       |
| `textColor`     | \[Accent Color \| [Emotion Color dictionary][dictionary-color] ✕ [Intensity dictionary][dictionary-intensity] \| [Text Color dictionary][dictionary-color]] | -        | ✕        | Color of the text    |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Custom Component

Heading classes are fabricated using `useHeadingStyleProps` hook. You can use it to create your own custom Heading component.

```jsx
const CustomText = (props: SpiritHeadingProps): JSX.Element => {
  const { classProps, props: modifiedProps, children } = useHeadingStyleProps(props);

  return (
    <div className={classProps} {...modifiedProps}>
      {children}
    </div>
  );
};
```

[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#alignment
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-emphasis]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#emphasis
[dictionary-intensity]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#intensity
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
