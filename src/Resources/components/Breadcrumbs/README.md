# Breadcrumbs

This is Twig implementation of the [Breadcrumbs] component.

Basic example usage:

```twig
{% set items = [
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
] %}
```

```html
<Breadcrumbs items="{{ items }}" />
```

Without lexer:

```twig
{% embed "@spirit/breadcrumbs.twig" with { props: {
    items: items
}} %}{% endembed %}
```

Example of custom usage:

```html
<Breadcrumbs>
  <li class="d-none d-tablet-flex">
    <Link href="#rootUrl" color="primary" isUnderlined>Root</Link>
  </li>
  <li class="d-none d-tablet-flex">
    <Link href="#categoryUrl" color="primary" isUnderlined>Category</Link>
  </li>
  <li class="d-tablet-none">
    <Link href="#subcategoryUrl" color="primary" isUnderlined>Custom go back link</Link>
  </li>
  <li class="d-none d-tablet-flex">
    <Link href="#subcategoryUrl" color="primary" isUnderlined>Subcategory</Link>
  </li>
  <li class="d-none d-tablet-flex">
    <Link href="#currentUrl" color="secondary" aria-current="page">Current page</Link>
  </li>
</Breadcrumbs>
```

Without lexer:

```twig
{% embed "@spirit/breadcrumbs.twig" with { props: {
    elementType: 'nav'
    goBackTitle: 'Custom go back link title'
}} %}
    {% block content %}
      <li class="d-none d-tablet-flex">
        <Link href="#rootUrl" color="primary" isUnderlined>Root</Link>
      </li>
      <li class="d-none d-tablet-flex">
        <Link href="#categoryUrl" color="primary" isUnderlined>Category</Link>
      </li>
      <li class="d-tablet-none">
        <Link href="#subcategoryUrl" color="primary" isUnderlined>Custom go back link</Link>
      </li>
      <li class="d-none d-tablet-flex">
        <Link href="#subcategoryUrl" color="primary" isUnderlined>Subcategory</Link>
      </li>
      <li class="d-none d-tablet-flex">
        <Link href="#currentUrl" color="secondary" aria-current="page">Current page</Link>
      </li>
    {% endblock %}
{% endembed %}
```

## API

The Breadcrumbs component works with breadcrumb items passed from parent and renders the content by itself or its
content can be overridden by any custom block content.

## Breadcrumbs

| Prop name     | Type     | Default | Required | Description                                                                                                                                                                                 |
| ------------- | -------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `class`       | `string` | `null`  | no       | Additional CSS class                                                                                                                                                                        |
| `elementType` | `string` | `nav`   | no       | HTML tag to render                                                                                                                                                                          |
| `items`       | `array`  | `[]`    | no       | Navigation menu items                                                                                                                                                                       |
| `goBackTitle` | `string` | ``      | no       | Title/translation for back link to previous page on mobile. It's essential to be set along with items. If items property is not passed, backlink is to be created within children property. |

[breadcrumbs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Breadcrumbs
