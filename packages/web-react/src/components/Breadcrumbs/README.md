# Breadcrumbs

## Usage

### Basic

```jsx
import { Breadcrumbs } from '@lmc-eu/spirit-web-react/components';
```

Define breadcrumb items as an array type of `BreadcrumbsItem[]`.

```jsx
const items = [
  {
    title: 'Root',
    url: '#rootUrl',
  },
  {
    title: 'Category',
    url: '#categoryUrl',
  },
  {
    title: 'Subcategory',
    url: '#subcategoryUrl',
  },
  {
    title: 'Current page',
    url: '#currentUrl',
  },
];
```

Simply pass the breadcrumbs array as a prop:

```jsx
<Breadcrumbs items={items} goBackTitle="Custom back link translation" />
```

### Custom usage

Use custom content for the ordered list as component's children instead of passing breadcrumb items array via props:

```jsx
<Breadcrumbs>
  {items.map((item) => (
    <li key={`BreadcrumbsItem_${item.title}`}>
      <Link color="primary" underlined="always">
        {item.title}
      </Link>
    </li>
  ))}
</Breadcrumbs>
```

### API

| Name          | Type                | Default | Required | Description                                                                                                                                                                                      |
| ------------- | ------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`    | `ReactNode`         | —       | ✕        | Custom content to override items rendering from array                                                                                                                                            |
| `elementType` | `ElementType`       | `nav`   | ✕        | Type of element used as wrapper                                                                                                                                                                  |
| `goBackTitle` | `string`            | —       | ✕        | Title/translation for back link to previous page on mobile. It's essential to be set along with items. If items property is not passed, the back link is to be created within children property. |
| `items`       | `BreadcrumbsItem[]` | —       | ✕        | Navigation menu items                                                                                                                                                                            |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## BreadcrumbsItem

Use the `BreadcrumbsItem` component for the ordered list as the component's children instead of passing the breadcrumb items array via props:

```jsx
<Breadcrumbs>
  {items.map((item, index) => (
    <BreadcrumbsItem key={`BreadcrumbsItem_${item.title}`} isCurrent={items.length === index - 1} href={item.url}>
      {item.title}
    </BreadcrumbsItem>
  ))}
</Breadcrumbs>
```

### API

| Name            | Type        | Default         | Required | Description                                           |
| --------------- | ----------- | --------------- | -------- | ----------------------------------------------------- |
| `children`      | `ReactNode` | —               | ✕        | Children node                                         |
| `href`          | `string`    | —               | ✕ \*     | URL, if not set, the item is rendered as a plain text |
| `iconNameEnd`   | `string`    | `chevron-right` | ✕        | Icon name at the end of the item                      |
| `iconNameStart` | `string`    | `chevron-left`  | ✕        | Icon name at the start of the item                    |
| `isCurrent`     | `boolean`   | `false`         | ✕        | Whether is the item the current page                  |
| `isGoBackOnly`  | `boolean`   | `false`         | ✕        | Whether should be displayed in go back mode           |

(\*) Optional only for the current page.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### Dealing with long titles

When you need to shorten the title of the BreadcrumbsItem the preferred way is to use platform native helpers.
There are multiple ways in JavaScript which will truncate a string for you like `.slice` or `.substring`, e.g. `str.slice(0, num) + '…'`.

Additional option is to use helper class `text-truncate` with defined width.

You can also use any of the existing [npm packages which deal with truncating the string][truncate-npm-search].

For detailed information see [Breadcrumbs][breadcrumbs] component.

[breadcrumbs]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Breadcrumbs/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[truncate-npm-search]: https://www.npmjs.com/search?q=truncate
