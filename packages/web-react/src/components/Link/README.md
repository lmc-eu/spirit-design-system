# Link

Link allows users to follow navigation.

```jsx
<Link href="/" color="primary" isUnderlined isDisabled />
```

## Available props

| Name               | Type                                             | Default   | Required | Description                    |
| ------------------ | ------------------------------------------------ | --------- | -------- | ------------------------------ |
| `color`            | [Action Link Color dictionary][dictionary-color] | `primary` | ✕        | Color of the link              |
| `href`             | `string`                                         | —         | ✕        | Link's href attribute          |
| `isUnderlined`     | `bool`                                           | `false`   | ✕        | Whether is the link underlined |
| `isDisabled`       | `bool`                                           | `false`   | ✕        | Whether is the link disabled   |
| `ref`              | `ForwardedRef<HTMLAnchorElement>`                | —         | ✕        | Link element reference         |
| `UNSAFE_className` | `string`                                         | —         | ✕        | Wrapper custom class name      |
| `UNSAFE_style`     | `CSSProperties`                                  | —         | ✕        | Wrapper custom style           |

## Custom component

Link classes are fabricated using `useLinkStyleProps` hook. You can use it to create your own custom Link component.

```jsx
const CustomLink = (props: SpiritLinkProps): JSX.Element => {
  const { classProps, props: modifiedProps, children } = useLinkStyleProps(props);

  return (
    <a {...modifiedProps} href={props.href} className={classProps}>
      {children}
    </a>
  );
};
```

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
