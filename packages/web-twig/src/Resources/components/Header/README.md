# Header

This is Twig implementation of the [Header] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/header.twig" %}
    {% block content %}
    <a href="/">
        <img
          src="https://www.example.com/logo.png"
          width="65"
          height="24"
          alt="Spirit"
        />
    </a>
    {% endblock %}
{% endembed %}
```

With Html syntax lexer (enabled by default):
```twig
<Header>
    <a href="/">
        <img
          src="https://www.example.com/logo.png"
          width="65"
          height="24"
          alt="Spirit"
        />
    </a>
</Header>
<Header isSimple isInverted>
    <a href="/">
        <img
          src="https://www.example.com/logo.png"
          width="65"
          height="24"
          alt="Spirit"
        />
    </a>
</Header>
```

### Full Header example

```twig
<Header isInverted>
  <a href="/">
    <img
      src="https://www.example.com/logo.png"
      width="65"
      height="24"
      alt="Spirit"
    />
  </a>
  <NavbarToggle />
  <Navbar variant="bar">
    <NavbarClose />
    <NavbarActions color="primary">
      <Nav>
        <NavItem>
          <NavLink href="/" isCurrent>Nabídky práce</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Brigády</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Inspirace</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Historie odpovědí</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Zaměstnavatelé</NavLink>
        </NavItem>
      </Nav>
    </NavbarActions>
    <NavbarActions color="secondary">
      <ButtonLink color="primary" href="/">Přihlásit</ButtonLink>
      <ButtonLink color="inverted" href="/">Vstup pro firmy</ButtonLink>
    </NavbarActions>
  </Navbar>
</Header>
```

## Header components

The Header itself consists of many components which cannot be used independently.

### Header

#### Available props

| Name          | Type                          | Description                          |
|---------------|-------------------------------|--------------------------------------|
| `isSimple`    | boolean                       | Whether it is without components     |
| `isInverted`  | boolean                       | Whether it has inverted colors       |
| `class`       | string                        | Additional class name                |

### Navbar

#### Available props

| Name          | Type                          | Description                          |
|---------------|-------------------------------|--------------------------------------|
| `class`       | string                        | Additional class name                |

### NavbarActions

#### Available props

| Name          | Type                               | Description                          |
|---------------|------------------------------------|--------------------------------------|
| `color`       | `primary`, `secondary`, `inverted` | Colors                               |
| `class`       | string                             | Additional class name                |

### NavbarClose

#### Available props

| Name           | Type                          | Description                                |
|----------------|-------------------------------|--------------------------------------------|
| `label`        | string                        | Label of the close button                  |
| `ariaControls` | string                        | Target element which is controled by close |
| `class`        | string                        | Additional class name                      |

### NavbarToggle

#### Available props

| Name           | Type                               | Description                                |
|----------------|------------------------------------|--------------------------------------------|
| `label`        | string                             | Label of the toggle button                 |
| `ariaControls` | string                             | Target element which is controled by close |
| `color`        | `primary`, `secondary`, `inverted` | Colors                                     |
| `class`        | string                             | Additional class name                      |

### Nav

#### Available props

| Name          | Type                          | Description                          |
|---------------|-------------------------------|--------------------------------------|
| `class`       | string                        | Additional class name                |

### NavItem

#### Available props

| Name          | Type                          | Description                          |
|---------------|-------------------------------|--------------------------------------|
| `class`       | string                        | Additional class name                |

### NavItem

#### Available props

| Name          | Type                      | Description                                 |
|---------------|---------------------------|---------------------------------------------|
| href          | `string`  | #             | anchor href link                            |
| target        | `string`  | __self        | anchor target                               |
| ariaLabel     | `string`  | undefined     | Accessible Rich Internet Applications label |
| onClick       | `string`  | undefined     | execute a JavaScript when a link is clicked |
| `class`       | string                    | Additional class name                       |

[Header]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Header
