# Text

The Text component provides helper classes to render text.

```jsx
<Text size="large" emphasis="bold" />
```

## Available props

| Name       | Type                                | Default  | Description          |
| ---------- | ----------------------------------- | -------- | -------------------- |
| `size`     | `large`, `medium`, `small`, `xmall` | `medium` | Size of the text     |
| `emphasis` | `italic`, `bold`                    |          | Emphasis of the text |

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
