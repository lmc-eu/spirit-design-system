# UNSTABLE Header

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

The `UNSTABLE_Header` component is planned to replace the `Header` component in the future.

The `UNSTABLE_Header` is a composition of several subcomponents:

- [UNSTABLE_Header](#unstable-header)
- [UNSTABLE_HeaderLogo](#unstable-headerlogo)

## UNSTABLE Header

The `UNSTABLE_Header` component is a main wrapper which provides mainly the visual for the Header.

```jsx
import { UNSTABLE_Header } from '@lmc-eu/spirit-web-react';

<UNSTABLE_Header>{/* Content go here */}</UNSTABLE_Header>;
```

It also sets CSS variable for the Header height which can be used by nested components.

### API

| Name       | Type                    | Default | Required | Description                    |
| ---------- | ----------------------- | ------- | -------- | ------------------------------ |
| `children` | `string` \| `ReactNode` | `null`  | ✓        | Content of the UNSTABLE_Header |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## UNSTABLE HeaderLogo

The `UNSTABLE_HeaderLogo` component is a container for the logo.

```jsx
import { UNSTABLE_HeaderLogo } from '@lmc-eu/spirit-web-react';

<UNSTABLE_HeaderLogo>{/* Content go here */}</UNSTABLE_HeaderLogo>;
```

It inherits the `UNSTABLE_Header` height and sets the logo wrapper height to the same value.

You can use the `ProductLogo` component inside the `UNSTABLE_HeaderLogo` component.

```jsx
<UNSTABLE_HeaderLogo href="#">
  <ProductLogo>{/* Logo go here */}</ProductLogo>
</UNSTABLE_HeaderLogo>
```

### API

| Name          | Type                    | Default | Required | Description                        |
| ------------- | ----------------------- | ------- | -------- | ---------------------------------- |
| `children`    | `string` \| `ReactNode` | `null`  | ✓        | Content of the UNSTABLE_HeaderLogo |
| `elementType` | `ElementType`           | `a`     | ✕        | Type of element used as            |

## Component Composition

Use [`Container`][web-react-container] and [`Flex`][web-react-flex] components to create a layout for the Header content.

```jsx
<UNSTABLE_Header>
  <Container>
    <Flex alignmentX="left" alignmentY="center">
      <UNSTABLE_HeaderLogo href="#">
        <ProductLogo>{/* Logo go here */}</ProductLogo>
      </UNSTABLE_HeaderLogo>
      {/* Navigation go here */}
      {/* Other Navigation go here */}
    </Flex>
  </Container>
</UNSTABLE_Header>
```

This way you can easily modify the layout of the Header content.

For example you can make the content centered by setting the `Flex` alignment properties to center.

```jsx
<UNSTABLE_Header>
  <Flex alignmentX="center" alignmentY="center">
    <UNSTABLE_HeaderLogo href="#">
      <ProductLogo>{/* Content go here */}</ProductLogo>
    </UNSTABLE_HeaderLogo>
  </Flex>
</UNSTABLE_Header>
```

Or you can modify the gaps between the content by setting the `Flex` `spacing` property.

```jsx
<UNSTABLE_Header>
  <Container>
    <Flex alignmentX="left" alignmentY="center" spacing="space-500">
      <UNSTABLE_HeaderLogo href="#">
        <ProductLogo>{/* Logo go here */}</ProductLogo>
      </UNSTABLE_HeaderLogo>
      {/* Navigation go here */}
      {/* Other Navigation go here */}
    </Flex>
  </Container>
</UNSTABLE_Header>
```

If you need the whole Header fluid you can do it by adding the `isFluid` prop to the `Container`.

```jsx
<UNSTABLE_Header>
  <Container isFluid>
    <Flex alignmentX="left" alignmentY="center" spacing="space-500">
      <UNSTABLE_HeaderLogo href="#">
        <ProductLogo>{/* Content go here */}</ProductLogo>
      </UNSTABLE_HeaderLogo>
    </Flex>
  </Container>
</UNSTABLE_Header>
```

## With Navigation

You can use the [`Navigation`][web-react-navigation] component inside the `UNSTABLE_Header` component.

The `NavigationLink` components will inherit the `UNSTABLE_Header` height and set the navigation
link height to the same value.

Use the composition mentioned above to create the layout you need.

```jsx
<UNSTABLE_Header>
  <Container>
    <Flex alignmentX="left" alignmentY="center" spacing="space-1000">
      <UNSTABLE_HeaderLogo href="/">
        <ProductLogo>{/* Logo go here */}</ProductLogo>
      </UNSTABLE_HeaderLogo>
      <Navigation>
        <NavigationItem>
          <NavigationLink href="#">Link</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" aria-current="page" isSelected>
            Selected
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="#" isDisabled>
            Disabled
          </NavigationLink>
        </NavigationItem>
      </Navigation>
      <Navigation marginLeft="auto">
        <NavigationItem>
          <ButtonLink href="#" color="secondary">
            Sign up
          </ButtonLink>
        </NavigationItem>
        <NavigationItem>
          <ButtonLink href="#">Post a job</ButtonLink>
        </NavigationItem>
      </Navigation>
    </Flex>
  </Container>
</UNSTABLE_Header>
```

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[web-react-container]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Container/README.md
[web-react-flex]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Flex/README.md
[web-react-navigation]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Navigation/README.md
