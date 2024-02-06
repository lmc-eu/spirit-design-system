# Link

Link allows users to follow navigation.

```jsx
<Link href="/" color="primary" isUnderlined isDisabled />
```

## API

| Name           | Type                                             | Default   | Required | Description                    |
| -------------- | ------------------------------------------------ | --------- | -------- | ------------------------------ |
| `color`        | [Action Link Color dictionary][dictionary-color] | `primary` | ✕        | Color of the link              |
| `elementType`  | `ElementType`                                    | `a`       | ✕        | Type of element used as        |
| `href`         | `string`                                         | —         | ✕        | Link's href attribute          |
| `isDisabled`   | `bool`                                           | `false`   | ✕        | Whether is the link disabled   |
| `isUnderlined` | `bool`                                           | `false`   | ✕        | Whether is the link underlined |
| `ref`          | `ForwardedRef<HTMLAnchorElement>`                | —         | ✕        | Link element reference         |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
