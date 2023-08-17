# Header and HeaderDialog

The Header is a highly variable and customizable component. It comes in several
design variants and provides a handful of building blocks you can use to achieve
your specific design goals.

The Header and HeaderDialog are a composition of several subcomponents:

```jsx
<Header />
  <HeaderMobileActions />
  <HeaderDesktopActions />
    <HeaderNav />
      <HeaderNavItem />
        <HeaderLink />
<HeaderDialog />
  <HeaderDialogCloseButton />
  <HeaderDialogActions />
    <HeaderDialogNav />
      <HeaderDialogNavItem />
        <HeaderDialogButton />
        <HeaderDialogLink />
        <HeaderDialogText />
```

## Minimal inverted Header

```jsx
<Header color="inverted">
  <Link href="#" aria-label="Company homepage">
    <img src="…" alt="Company" />
  </Link>
</Header>
```

## Header Actions

```jsx
const [isOpen, setOpen] = useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

// Header
<Header color="inverted">
  <Link href="#" aria-label="Company homepage">
    <img src="…" alt="Company" />
  </Link>
  <HeaderMobileActions dialogId="header_dialog_example" isOpen={isOpen} onOpen={handleOpen} />
  <HeaderDesktopActions color="primary" aria-label="Navigation">
    <HeaderNav>
      <HeaderNavItem>
        <HeaderLink href="…" isCurrent>Current menu link</HeaderLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderLink href="…">Menu link</HeaderLink>
      </HeaderNavItem>
      …
    </HeaderNav>
  </HeaderDesktopActions>
  <HeaderDesktopActions color="secondary">
    <Button color="primary">Primary button</Button>
    <Button color="inverted">Inverted button</Button>
    …
  </HeaderDesktopActions>
</Header>
// HeaderDialog
<HeaderDialog
  id="header_dialog_example"
  aria-label="Menu"
  isOpen={isOpen}
  onClose={handleClose}
>
  <HeaderDialogCloseButton />
  <HeaderDialogActions color="primary" aria-label="Main navigation">
    <HeaderDialogNav>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="…" isCurrent>Current menu link</HeaderDialogLink>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="…">Menu link</HeaderDialogLink>
      </HeaderDialogNavItem>
      …
    </HeaderDialogNav>
  </HeaderDialogActions>
  <HeaderDialogActions color="secondary">
    <Button color="primary">Primary button</Button>
    <Button color="inverted">Inverted button</Button>
    …
  </HeaderDialogActions>
</HeaderDialog>
```

## Header Actions and Header Dialog

```jsx
const [isMenuOpen, setMenuOpen] = useState(false);
const [isUserMenuOpen, setUserMenuOpen] = useState(false);

const handleMenuOpen = () => setMenuOpen(true);
const handleMenuClose = () => setMenuOpen(false);
const handleUserMenuOpen = () => setUserMenuOpen(true);
const handleUserMenuClose = () => setUserMenuOpen(false);

// Header
<Header color="inverted">
  <Link href="/">
    <SpiritLogo />
  </Link>
  <HeaderMobileActions dialogId="header_dialog_example_1" isOpen={isMenuOpen} onOpen={handleMenuOpen} />
  <HeaderDesktopActions color="primary" aria-label="Main navigation">
    <HeaderNav>
      <HeaderNavItem>
        <HeaderLink href="…" isCurrent>Current menu link</HeaderLink>
      </HeaderNavItem>
      <HeaderNavItem>
        <HeaderLink href="…">Menu link</HeaderLink>
      </HeaderNavItem>
      …
    </HeaderNav>
  </HeaderDesktopActions>
  <HeaderDesktopActions color="secondary" aria-label="User area">
    <HeaderNav>
      <HeaderNavItem>
        <HeaderDialogButton
          onClick={handleUserMenuOpen}
          aria-controls="header_dialog_example_2"
          aria-expanded={isUserMenuOpen}
        >
          Marian
        </HeaderDialogButton>
      </HeaderNavItem>
    </HeaderNav>
  </HeaderDesktopActions>
</Header>
// HeaderDialog #1
<HeaderDialog
  id="header_dialog_example_1"
  aria-label="Menu"
  isOpen={isMenuOpen}
  onClose={handleMenuClose}
>
  <HeaderDialogCloseButton />
  <HeaderDialogActions color="primary" aria-label="Main navigation">
    <HeaderDialogNav>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="…" isCurrent>Current menu link</HeaderDialogLink>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="…">Menu link</HeaderDialogLink>
      </HeaderDialogNavItem>
      …
    </HeaderDialogNav>
  </HeaderDialogActions>
  <HeaderDialogActions color="secondary" aria-label="Menu">
    <HeaderDialogNav>
      <HeaderDialogNavItem>
        <HeaderDialogText UNSAFE_className="text-primary-inverted-disabled">Marian</HeaderDialogText>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="…">Dashboard</HeaderDialogLink>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="…">Profile</HeaderDialogLink>
      </HeaderDialogNavItem>
      …
      <HeaderDialogNavItem>
        <HeaderDialogButton>Sign out</HeaderDialogButton>
      </HeaderDialogNavItem>
    </HeaderDialogNav>
  </HeaderDialogActions>
</HeaderDialog>
// HeaderDialog #2
<HeaderDialog
  id="header_dialog_example_2"
  aria-label="User menu"
  isOpen={isUserMenuOpen}
  onClose={handleUserMenuClose}
>
  <HeaderDialogCloseButton />
  <HeaderDialogActions color="primary" aria-label="User menu">
    <HeaderDialogNav>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="…">Dashboard</HeaderDialogLink>
      </HeaderDialogNavItem>
      <HeaderDialogNavItem>
        <HeaderDialogLink href="…">Profile</HeaderDialogLink>
      </HeaderDialogNavItem>
      …
      <HeaderDialogNavItem>
        <HeaderDialogButton>Sign out</HeaderDialogButton>
      </HeaderDialogNavItem>
    </HeaderDialogNav>
  </HeaderDialogActions>
</HeaderDialog>
```

## Header

**Available props**

| Name               | Type                        | Default | Required | Description                |
| ------------------ | --------------------------- | ------- | -------- | -------------------------- |
| `children`         | `ReactNode`                 | -       | ✕        | Children node              |
| `color`            | `'inverted', 'transparent'` | -       | ✕        | Header background color    |
| `isSimple`         | `boolean`                   | -       | ✕        | If header should be simple |
| `UNSAFE_className` | `string`                    | -       | ✕        | Header custom class name   |
| `UNSAFE_style`     | `CSSProperties`             | -       | ✕        | Header custom style        |

The rest of the properties are based on the type of `HTMLElement`. [Docs][HTMLElementDocs]

## HeaderButton

**Available props**

| Name               | Type            | Default | Required | Description                    |
| ------------------ | --------------- | ------- | -------- | ------------------------------ |
| `children`         | `ReactNode`     | -       | ✕        | Children node                  |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderButton custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderButton custom style      |

The rest of the properties are based on the type of `<button>`. [Docs][HTMLButtonDocs]

## HeaderDesktopActions

**Available props**

| Name               | Type                     | Default | Required | Description                            |
| ------------------ | ------------------------ | ------- | -------- | -------------------------------------- |
| `children`         | `ReactNode`              | -       | ✕        | Children node                          |
| `color`            | `'primary', 'secondary'` | -       | ✕        | HeaderDesktopActions background color  |
| `UNSAFE_className` | `string`                 | -       | ✕        | HeaderDesktopActions custom class name |
| `UNSAFE_style`     | `CSSProperties`          | -       | ✕        | HeaderDesktopActions custom style      |

The rest of the properties are based on the type of `HTMLElement`. [Docs][HTMLElementDocs]

## HeaderDialog

**Available props**

| Name               | Type                                           | Default | Required | Description                     |
| ------------------ | ---------------------------------------------- | ------- | -------- | ------------------------------- |
| `children`         | `ReactNode`                                    | -       | ✕        | Children node                   |
| `id`               | `string`                                       | -       | ✔        | Dialog ID                       |
| `isOpen`           | `boolean`                                      | `false` | ✔        | Open state                      |
| `onClose`          | `(event: ClickEvent or KeyboardEvent) => void` | -       | ✔        | Callback for dialog when closed |
| `UNSAFE_className` | `string`                                       | -       | ✕        | HeaderDialog custom class name  |
| `UNSAFE_style`     | `CSSProperties`                                | -       | ✕        | HeaderDialog custom style       |

The rest of the properties are based on the type of `<dialog>`. [Docs][DialogElementDocs]

## HeaderDialogActions

**Available props**

| Name               | Type                     | Default | Required | Description                           |
| ------------------ | ------------------------ | ------- | -------- | ------------------------------------- |
| `children`         | `ReactNode`              | -       | ✕        | Children node                         |
| `color`            | `'primary', 'secondary'` | -       | ✕        | HeaderDialogActions background color  |
| `UNSAFE_className` | `string`                 | -       | ✕        | HeaderDialogActions custom class name |
| `UNSAFE_style`     | `CSSProperties`          | -       | ✕        | HeaderDialogActions custom style      |

The rest of the properties are based on the type of `HTMLElement`. [Docs][HTMLElementDocs]

## HeaderDialogButton

**Available props**

| Name               | Type            | Default | Required | Description                          |
| ------------------ | --------------- | ------- | -------- | ------------------------------------ |
| `children`         | `ReactNode`     | -       | ✕        | Children node                        |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderDialogButton custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderDialogButton custom style      |

The rest of the properties are based on the type of `<button>`. [Docs][HTMLButtonDocs]

## HeaderDialogCloseButton

HeaderDialogCloseButton already contains handles for closing and the state of the open dialog.

**Available props**

| Name               | Type            | Default | Required | Description                               |
| ------------------ | --------------- | ------- | -------- | ----------------------------------------- |
| `label`            | `string`        | `Close` | ✕        | Button label                              |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderDialogCloseButton custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderDialogCloseButton custom style      |

The rest of the properties are based on the type of `<button>`. [Docs][HTMLButtonDocs]

## HeaderDialogLink

**Available props**

| Name               | Type            | Default | Required | Description                        |
| ------------------ | --------------- | ------- | -------- | ---------------------------------- |
| `children`         | `ReactNode`     | -       | ✕        | Children node                      |
| `isCurrent`        | `boolean`       | -       | ✕        | When link should be current page   |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderDialogLink custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderDialogLink custom style      |

The rest of the properties are based on the type of `<a>`. [Docs][DialogAnchorDocs]

## HeaderDialogNav

**Available props**

| Name               | Type            | Default | Required | Description                       |
| ------------------ | --------------- | ------- | -------- | --------------------------------- |
| `children`         | `ReactNode`     | -       | ✕        | Children node                     |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderDialogNav custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderDialogNav custom style      |

The rest of the properties are based on the type of `<ul>`. [Docs][DialogUListDocs]

## HeaderDialogNavItem

**Available props**

| Name               | Type            | Default | Required | Description                           |
| ------------------ | --------------- | ------- | -------- | ------------------------------------- |
| `children`         | `ReactNode`     | -       | ✕        | Children node                         |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderDialogNavItem custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderDialogNavItem custom style      |

The rest of the properties are based on the type of `<li>`. [Docs][DialogListItemDocs]

## HeaderDialogText

**Available props**

| Name               | Type            | Default | Required | Description                        |
| ------------------ | --------------- | ------- | -------- | ---------------------------------- |
| `children`         | `ReactNode`     | -       | ✕        | Children node                      |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderDialogText custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderDialogText custom style      |

The rest of the properties are based on the type of `<span>`. [Docs][DialogSpanDocs]

## HeaderLink

**Available props**

| Name               | Type            | Default | Required | Description                      |
| ------------------ | --------------- | ------- | -------- | -------------------------------- |
| `children`         | `ReactNode`     | -       | ✕        | Children node                    |
| `isCurrent`        | `boolean`       | -       | ✕        | When link should be current page |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderLink custom style          |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderLink custom class name     |

The rest of the properties are based on the type of `<a>`. [Docs][DialogAnchorDocs]

## HeaderMobileActions

**Available props**

| Name               | Type                                           | Default | Required | Description                           |
| ------------------ | ---------------------------------------------- | ------- | -------- | ------------------------------------- |
| `children`         | `ReactNode`                                    | -       | ✕        | Children node                         |
| `dialogId`         | `string`                                       | -       | ✕        | ID of dialog element                  |
| `isOpen`           | `boolean`                                      | `false` | ✔        | Dialog open state                     |
| `menuToggleLabel`  | `string`                                       | -       | `Menu`   | Label for button toggle               |
| `onOpen`           | `(event: ClickEvent or KeyboardEvent) => void` | -       | ✔        | Callback for dialog when opened       |
| `UNSAFE_style`     | `CSSProperties`                                | -       | ✕        | HeaderMobileActions custom style      |
| `UNSAFE_className` | `string`                                       | -       | ✕        | HeaderMobileActions custom class name |

The rest of the properties are based on the type of `HTMLElement`. [Docs][HTMLElementDocs]

## HeaderNav

**Available props**

| Name               | Type            | Default | Required | Description                 |
| ------------------ | --------------- | ------- | -------- | --------------------------- |
| `children`         | `ReactNode`     | -       | ✕        | Children node               |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderNav custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderNav custom style      |

The rest of the properties are based on the type of `<ul>`. [Docs][DialogUListDocs]

## HeaderNavItem

**Available props**

| Name               | Type            | Default | Required | Description                     |
| ------------------ | --------------- | ------- | -------- | ------------------------------- |
| `children`         | `ReactNode`     | -       | ✕        | Children node                   |
| `UNSAFE_className` | `string`        | -       | ✕        | HeaderNavItem custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | HeaderNavItem custom style      |

The rest of the properties are based on the type of `<li>`. [Docs][DialogListItemDocs]

For detailed information see the [Header](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Header/README.md) component

[HTMLElementDocs]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[HTMLButtonDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
[DialogElementDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
[DialogAnchorDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
[DialogUListDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
[DialogListItemDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
[DialogSpanDocs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
