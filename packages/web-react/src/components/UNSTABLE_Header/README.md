# UNSTABLE Header

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

```jsx
import { UNSTABLE_Header } from '@lmc-eu/spirit-web-react';

<UNSTABLE_Header>{/* Content go here */}</UNSTABLE_Header>;
```

## Header

Without any modifier, Header is ready to contain necessary blocks in a classic
left-to-right layout (in LTR documents).

```jsx
<UNSTABLE_Header>
  <Container>
    <Flex alignmentX="left" alignmentY="center">
      <Link href="/">
        <ProductLogo>
          <img src="https://www.example.com/logo.png" width="65" height="24" alt="Spirit" />
        </ProductLogo>
      </Link>
    </Flex>
  </Container>
</UNSTABLE_Header>
```

## API

| Name       | Type                    | Default | Required | Description                                  |
| ---------- | ----------------------- | ------- | -------- | -------------------------------------------- |
| `children` | `string` \| `ReactNode` | `null`  | ✓        | Content of the UNSTABLE_Header               |
| `isFluid`  | `boolean`               | `false` | ✕        | UNSTABLE_Header without container            |
| `isSimple` | `bool`                  | `false` | ✕        | Shorter, centered version of UNSTABLE_Header |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
