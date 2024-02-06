# Text

The Text component provides helper classes to render text.

```jsx
<Text size="large" emphasis="bold" />
```

## API

| Name          | Type                                        | Default  | Required | Description          |
| ------------- | ------------------------------------------- | -------- | -------- | -------------------- |
| `elementType` | `React.Element`                             | `p`      | ✕        | HTML tag             |
| `emphasis`    | [`italic` \| `bold`]                        | —        | ✕        | Emphasis of the text |
| `size`        | [Size Extended dictionary][dictionary-size] | `medium` | ✕        | Size of the text     |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Custom component

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

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
