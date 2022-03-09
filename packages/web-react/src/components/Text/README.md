# Text

The Text component provides helper classes to render text.

```jsx
<Text type="body" size="large" variant="text" emphasis="bold" />
```

## Available props

| Name       | Type                                          | Description          |
| ---------- | --------------------------------------------- | -------------------- |
| `type`     | `heading`, `body`                             | Type of the text     |
| `size`     | `xlarge`, `large`, `medium`, `small`, `xmall` | Size of the text     |
| `variant`  | `text`, `link`, `button`                      | Variant of the text  |
| `emphasis` | `regular`, `italic`, `bold`                   | Emphasis of the text |

**Notes:**

- `emphasis` is only available for `type="body"` with `variant="text"`
- `type="body"` have only available `large`, `medium`, `small` sizes

## Custom component

Text classes are fabricated using `useTextdStyleProps` hook. You can use it to create your own custom Text component.

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
