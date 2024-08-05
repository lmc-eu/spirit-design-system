# Link

Link allows users to follow navigation.

```jsx
<Link href="/" color="primary" isDisabled />
```

## Underlined

You can customize the underline behavior for links with three different settings:

### Hover

This is the **default** value, which makes the underline visible only when the component is hovered over.

```jsx
<Link href="/" underlined="hover">
  …
</Link>
```

Alternatively, you can omit this prop:

```jsx
<Link href="/">…</Link>
```

### Always

The underline is constantly visible, regardless of interaction.

```jsx
<Link href="/" underlined="always">
  …
</Link>
```

### Never

The underline is never visible, even when the link is hovered over.

```jsx
<Link href="/" underlined="never">
  …
</Link>
```

## API

| Name           | Type                                             | Default   | Required | Description                                                                          |
| -------------- | ------------------------------------------------ | --------- | -------- | ------------------------------------------------------------------------------------ |
| `color`        | [Action Link Color dictionary][dictionary-color] | `primary` | ✕        | Color of the link                                                                    |
| `elementType`  | `ElementType`                                    | `a`       | ✕        | Type of element used as                                                              |
| `href`         | `string`                                         | —         | ✕        | Link's href attribute                                                                |
| `isDisabled`   | `bool`                                           | `false`   | ✕        | Whether is the link disabled                                                         |
| `isUnderlined` | `bool`                                           | `false`   | ✕        | [**DEPRECATED**][deprecated] in favor of `underline`; Whether is the link underlined |
| `ref`          | `ForwardedRef<HTMLAnchorElement>`                | —         | ✕        | Link element reference                                                               |
| `underlined`   | `hover` \| `always` \| `never`                   | `hover`   | ✕        | When is the link underlined                                                          |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

#### ⚠️ DEPRECATION NOTICE

`isUnderlined` property will be replaced in the next major version. Please use `underlined` instead.

We are providing a [codemod](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/codemods/src/transforms/v3/web-react/README.md#v3web-reactlink-underlined-prop--link-isunderlined-to-udnerlined-prop-change) to assist with this change.

[What are deprecations?][deprecated]

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

## Custom polymorphic component

If you are using `forwardRef`, use the `PolymorphicRef` type for the reference.

```jsx
import { forwardRef } from 'react
import { Link } from '@lmc-eu/spirit-web-react';
import { PolymorphicRef } from '@lmc-eu/spirit-web-react/types';

type LinkProps<T extends ElementType = 'button'> = SpiritLinkProps<T, 'tertiary'>;

const CustomLinkRoot = <T extends ElementType = 'button'>(
  props: LinkProps<T>,
  ref: PolymorphicRef<T> // <-- Type `ref` prop with the `PolymorphicRef` here
): JSX.Element => (
  <Link
      ref={ref}
      elementType="button"
      {...props}
  />
);

export const CustomLink = forwardRef(CustomLinkRoot);
```

[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/README.md#deprecations
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
