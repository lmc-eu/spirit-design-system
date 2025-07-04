# Text

The Text component provides helper classes to render text.

## Basic Usage

```jsx
<Text>This is a text</Text>
```

## Element Type

Use the `elementType` prop to set the HTML tag of the Text component.

```jsx
<Text elementType="span">Text</Text>
```

## Size

Use the `size` prop to set the size of the text.

```jsx
<Text size="large">Text</Text>
```

## Emphasis

Use the `emphasis` prop to set the emphasis of the text.

⚠️ This prop only affects styling, not the semantics of the element.

```jsx
<Text emphasis="bold">Bold text</Text>
```

## Text Color

Use the `textColor` prop to set color of the text. When undefined, the text color
is inherited from the parent element.

```jsx
<Text textColor="secondary">Secondary text</Text>
```

## Text Alignment

Use the `textAlignment` prop to set the alignment of the text.

```jsx
<Text textAlignment="center">Centered text</Text>
<Text textAlignment="right">Right-aligned text</Text>
```

You can also define responsive values for the `textAlignment` prop using an object:

```jsx
<Text textAlignment={{ mobile: 'center', tablet: 'right', desktop: 'left' }}>Responsive text alignment</Text>
```

## Full Example

```jsx
<Text elementType="span" size="large" emphasis="bold" textColor="secondary">
  Text
</Text>
```

## API

| Name            | Type                                                                                                                                                        | Default   | Required | Description           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- | --------------------- |
| `elementType`   | `React.Element`                                                                                                                                             | `p`       | ✕        | HTML tag              |
| `emphasis`      | [Emphasis dictionary][dictionary-emphasis]                                                                                                                  | `regular` | ✕        | Emphasis of the text  |
| `size`          | [Size Extended dictionary][dictionary-size]                                                                                                                 | `medium`  | ✕        | Size of the text      |
| `textAlignment` | \[[Text Alignment dictionary][dictionary-alignment] \| `Partial<Record<BreakpointToken, TextAlignmentDictionaryType>>`]                                     | -         | ✕        | Alignment of the text |
| `textColor`     | \[[Text Color dictionary][dictionary-color] \| Accent Color \| [Emotion Color dictionary][dictionary-color] ✕ [Intensity dictionary][dictionary-intensity]] | —         | ✕        | Color of the text     |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Custom Component

Text classes are fabricated using `useTextStyleProps` hook. You can use it to create your own custom Text component.

```jsx
const CustomText = (props: SpiritTextProps): JSX.Element => {
  const { classProps, props: modifiedProps, children } = useTextStyleProps(props);

  return (
    <p className={classProps} {...modifiedProps}>
      {children}
    </p>
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
