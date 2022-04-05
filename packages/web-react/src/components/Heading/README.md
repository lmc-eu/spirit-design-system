# Heading

The Heading component provides helper classes to render headings.

```jsx
<Heading elementType="h1" size="large" />
```

## Available props

| Name          | Type                                          | Default  | Description      |
| ------------- | --------------------------------------------- | -------- | ---------------- |
| `elementType` | `React.Element`                               | `div`    | HTML tag,        |
| `size`        | `xlarge`, `large`, `medium`, `small`, `xmall` | `medium` | Size of the text |

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
