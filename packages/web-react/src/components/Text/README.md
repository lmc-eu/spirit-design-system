# Text

The Text component provides helper classes to render text.

```jsx
<Text size="large" emphasis="bold" />
```

## Available props

| Name               | Type                                        | Default  | Description          |
| ------------------ | ------------------------------------------- | -------- | -------------------- | ------------------------- |
| `size`             | [Size Extended dictionary][dictionary-size] | `medium` | Size of the text     |
| `emphasis`         | `italic`, `bold`                            |          | Emphasis of the text |
| `UNSAFE_className` | `string`                                    | -        | no                   | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties`                             | -        | no                   | Wrapper custom style      |

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
