# Link

Link allows users to follow navigation.

```jsx
<Link href="/" color="primary" isUnderlined isDisabled />
```

## Available props

| Name           | Type                                      | Description                                     |
| -------------- | ----------------------------------------- | ----------------------------------------------- |
| `href`         | `string`                                  | Link's href attribute                           |
| `color`        | [Text Color dictionary][dictionary-color] | Color of the link                               |
| `isUnderlined` | `boolean`                                 | Whether is the link underlined, default `false` |
| `isDisabled`   | `boolean`                                 | Wheter is the link disabled, default `false`    |

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
