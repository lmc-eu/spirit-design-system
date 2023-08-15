# Pagination

This is Twig implementation of the [Pagination] component.

The Pagination is a composition of several subcomponents:

- [Pagination](#pagination)
  - [PaginationItem](#paginationitem)
    - [PaginationLink](#paginationlink)
    - [PaginationLinkNext](#paginationlinknext--paginationlinkprevious)
    - [PaginationLinkPrevious](#paginationlinknext--paginationlinkprevious)

Basic example usage:

### Pagination

#### Examples:

```twig
<Pagination aria-label="Page navigation">
  …
</Pagination>
```

#### API

There are no API options for Pagination.

You can add `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

### PaginationItem

#### Examples:

```twig
<PaginationItem>
  …
</PaginationItem>

<Pagination aria-label="Page navigation">
  <PaginationItem>
    …
  </PaginationItem>
</Pagination>
```

#### API

There are no API options for PaginationItem.

You can add `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

### PaginationLink

👉 Make sure to add all the necessary attributes and children to make the component accessible.

#### Examples:

```twig
<PaginationLink
    href="#"
    accessibilityLabel="Go to Page 1"
    pageNumber="1"
/>

<PaginationLink
  onclick="alert('this is not a link, but a button!')"
  accessibilityLabel="Go to Page 1"
  pageNumber="1"
/>

<Pagination aria-label="Page navigation">
  <PaginationItem>
    <PaginationLink
      href="#"
      isCurrent
      accessibilityLabel="Current Page, Page 1"
      pageNumber="1"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      accessibilityLabel="Go to Page 2"
      pageNumber="2"
    />
  </PaginationItem>
</Pagination>
```

#### API

| Prop name            | Type     | Default | Required | Description                            |
| -------------------- | -------- | ------- | -------- | -------------------------------------- |
| `accessibilityLabel` | `string` | `null`  | yes      | Accessibility label of the link        |
| `href`               | `string` | `null`  | no       | URL target of a link                   |
| `isCurrent`          | `bool`   | `false` | no       | Mark link as current                   |
| `pageNumber`         | `string` | `null`  | yes      | Page number, hidden for screen readers |
| `target`             | `string` | `null`  | no       | Browsing context for the link          |

You can add `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

### PaginationLinkNext & PaginationLinkPrevious

👉 Make sure to add all the necessary attributes and children to make the component accessible.

#### Examples:

```twig
<PaginationLinkPrevious href="#" />
<PaginationLinkNext href="#" />

<Pagination aria-label="Page navigation">
  <PaginationItem>
    <PaginationLinkPrevious href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      accessibilityLabel="Go to Page 2"
      pageNumber="2"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLinkNext href="#" />
  </PaginationItem>
</Pagination>
```

#### API

| Prop name            | Type     | Default              | Required | Description                       |
| -------------------- | -------- | -------------------- | -------- | --------------------------------- |
| `accessibilityLabel` | `string` | `Next` or `Previous` | no       | Accessibility label of the button |
| `href`               | `string` | —                    | no       | Link URL                          |
| `target`             | `string` | `null`               | no       | Browsing context for the link     |

You can add `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

### Full Example

When you put it all together:

```twig
<Pagination aria-label="Page navigation">
  <PaginationItem>
    <PaginationLink
      href="#"
      isCurrent
      accessibilityLabel="Current Page, Page 1"
      pageNumber="1"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      accessibilityLabel="Go to Page 2"
      pageNumber="2"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      accessibilityLabel="Go to Page 3"
      pageNumber="3"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      accessibilityLabel="Go to Page 4"
      pageNumber="4"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      accessibilityLabel="Go to Page 5"
      pageNumber="5"
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLinkNext href="#" />
  </PaginationItem>
</Pagination>
```

[Pagination]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Pagination
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
