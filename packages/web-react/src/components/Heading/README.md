# Heading

The Heading component provides helper classes to render headings.

## Basic Usage

```jsx
<Heading>This is a heading</Heading>
```

## Element Type

Use the `elementType` prop to set the HTML tag of the Heading component.

```jsx
<Heading elementType="h1">Heading</Heading>
```

## Size

Use the `size` prop to set the size of the text.

```jsx
<Heading size="large">Heading</Heading>
```

## Emphasis

Use the `emphasis` prop to set the emphasis of the text.

⚠️ This prop only affects styling, not the semantics of the element.

```jsx
<Heading emphasis="semibold">Semibold heading</Heading>
```

## Full Example

```jsx
<Heading elementType="h1" size="large" emphasis="semibold">
  Heading
</Heading>
```

## API

| Name          | Type                                        | Default  | Required | Description          |
| ------------- | ------------------------------------------- | -------- | -------- | -------------------- |
| `elementType` | `React.Element`                             | `div`    | ✕        | HTML tag             |
| `emphasis`    | [Emphasis dictionary][dictionary-emphasis]  | `bold`   | ✕        | Emphasis of the text |
| `size`        | [Size Extended dictionary][dictionary-size] | `medium` | ✕        | Size of the text     |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Custom component

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

[dictionary-emphasis]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#emphasis
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
