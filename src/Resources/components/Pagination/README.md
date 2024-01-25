# Pagination

This is Twig implementation of the [Pagination][pagination] component.

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

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

| Name                 | Type     | Default | Required | Description                            |
| -------------------- | -------- | ------- | -------- | -------------------------------------- |
| `accessibilityLabel` | `string` | `null`  | ✔        | Accessibility label of the link        |
| `href`               | `string` | `null`  | ✕        | URL target of a link                   |
| `isCurrent`          | `bool`   | `false` | ✕        | Mark link as current                   |
| `pageNumber`         | `string` | `null`  | ✔        | Page number, hidden for screen readers |
| `target`             | `string` | `null`  | ✕        | Browsing context for the link          |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

| Name                 | Type     | Default              | Required | Description                       |
| -------------------- | -------- | -------------------- | -------- | --------------------------------- |
| `accessibilityLabel` | `string` | `Next` or `Previous` | ✕        | Accessibility label of the button |
| `href`               | `string` | —                    | ✕        | Link URL                          |
| `target`             | `string` | `null`               | ✕        | Browsing context for the link     |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

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

[pagination]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Pagination
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
