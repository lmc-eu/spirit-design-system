# Breadcrumbs

```jsx
import { Breadcrumbs } from '@lmc-eu/spirit-web-react/components';
```

Define breadcrumb items as array type of `BreadcrumbsItem[]`.

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

## Basic example usage

Simply pass the breadcrumbs array as a prop:

```jsx
<Breadcrumbs items={items} goBackTitle="Custom back link translation" />
```

## Example of custom usage

Use custom content for ordered list as component's children instead of passing breadcrumb items array via props:

```jsx
<Breadcrumbs>
  {items.map((item) => (
    <li key={`BreadcrumbsItem_${item.title}`}>
      <Link color="primary" isUnderlined>
        {item.title}
      </Link>
    </li>
  ))}
</Breadcrumbs>
```

## API

| Name               | Type                | Required | Description                                                                                                                                                                                 |
| ------------------ | ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `children`         | `ReactNode`         | ✕        | Custom content to override items rendering from array                                                                                                                                       |
| `goBackTitle`      | `string`            | ✕        | Title/translation for back link to previous page on mobile. It's essential to be set along with items. If items property is not passed, backlink is to be created within children property. |
| `items`            | `BreadcrumbsItem[]` | ✕        | Navigation menu items                                                                                                                                                                       |
| `UNSAFE_className` | `string`            | —        | ✕                                                                                                                                                                                           | Wrapper custom class name |
| `UNSAFE_style`     | `CSSProperties`     | —        | ✕                                                                                                                                                                                           | Wrapper custom style      |

For detailed information see [Breadcrumbs](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Breadcrumbs/README.md) component
