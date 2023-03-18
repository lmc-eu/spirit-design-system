# Header

Header wraps top-level navigation and branding.

## Simple Header

```jsx
<Header id="simple">
  <Link href="/Users/tomas.sychra/Projects/Repos/spirit-design-system">
    <Logo />
  </Link>
</Header>
```

### Header

**Available props**

| Name         | Type      | Description                                    |
| ------------ | --------- | ---------------------------------------------- |
| `id`         | `string`  | Identification of header                       |
| `isInverted` | `boolean` | Whether it has inverted color, default `false` |
| `isSimple`   | `boolean` | Whether it is without actions, default `false` |

## Header with Actions

```jsx
<Header id="actions" isInverted>
  <Link href="/">
    <Logo />
  </Link>
  <NavbarToggler />
  <Navbar variant="bar">
    <NavbarClose />
    <NavbarActions color="primary">
      <Nav>
        <NavItem>
          <NavLink href="/" isCurrent>
            Job Offers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Intership</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Inspiration</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Job applications</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Employers</NavLink>
        </NavItem>
      </Nav>
    </NavbarActions>
    <NavbarActions color="secondary">
      <ButtonLink color="primary" href="/">
        Login
      </ButtonLink>
      <ButtonLink color="inverted" href="/">
        Login For Employers
      </ButtonLink>
    </NavbarActions>
  </Navbar>
</Header>
```

### HeaderActions

Header navigation actions wrapper

**Available props**

| Name    | Type    | Description            |
| ------- | ------- | ---------------------- |
| `color` | `Color` | Color of the component |

### HeaderBackdrop

Backdrop component for Header

### Navbar

Navigation wrapper

**Available props**

| Name      | Type            | Description                             |
| --------- | --------------- | --------------------------------------- |
| `variant` | `bar`, `dialog` | Variant of the component, default `bar` |

### NavbarClose

Navigation close button

### NavbarToggler

Hamburger menu button

### Nav

Navigation items wrapper

### NavItem

Navigation item

### NavLink

Navigation link

**Available props**

| Name        | Type      | Description                                |
| ----------- | --------- | ------------------------------------------ |
| `href`      | `string`  | Path to the referenced resource            |
| `isCurrent` | `boolean` | Whether the menu item matches current page |

For detailed information see [Header](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/Header/README.md) component
