# Heading

The Heading component provides helper classes to render headings.

```jsx
<Heading elementType="h1" size="large" />
```

## API

| Name               | Type                                        | Default  | Description      |
| ------------------ | ------------------------------------------- | -------- | ---------------- | ------------------------- |
| `elementType`      | `React.Element`                             | `div`    | HTML tag,        |
| `size`             | [Size Extended dictionary][dictionary-size] | `medium` | Size of the text |
| `UNSAFE_className` | `string`                                    | —        | ✕                | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties`                             | —        | ✕                | Wrapper custom style      |

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

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
