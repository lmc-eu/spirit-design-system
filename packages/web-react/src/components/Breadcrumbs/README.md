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
      <a href={item.url}>{item.title}</a>
    </li>
  ))}
</Breadcrumbs>
```

## Available props

| Name          | Type                | Required | Description                                                                                                                                                                                 |
| ------------- | ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`    | `ReactNode`         | no       | Custom content to override items rendering from array                                                                                                                                       |
| `goBackTitle` | `string`            | no       | Title/translation for back link to previous page on mobile. It's essential to be set along with items. If items property is not passed, backlink is to be created within children property. |
| `items`       | `BreadcrumbsItem[]` | no       | Navigation menu items                                                                                                                                                                       |

For detailed information see [Breadcrumbs](https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/components/Breadcrumbs/README.md) component
