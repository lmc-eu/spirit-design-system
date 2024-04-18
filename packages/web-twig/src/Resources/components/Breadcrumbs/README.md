# Breadcrumbs

This is the Twig implementation of the [Breadcrumbs][breadcrumbs] component.

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

```twig
<Breadcrumbs goBackTitle="Back" items={ items } />
```

Without lexer:

```twig
{% embed "@spirit/breadcrumbs.twig" with { props: {
  goBackTitle: "Go back",
  items: items
}} %}{% endembed %}
```

Example of custom usage:

```html
<Breadcrumbs>
  <ol>
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
  </ol>
</Breadcrumbs>
```

Without lexer:

```twig
{% embed "@spirit/breadcrumbs.twig" with { props: {
    elementType: 'nav'
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

## Breadcrumbs

The Breadcrumbs component works with breadcrumb items passed from parent and renders the content by itself or its
content can be overridden by any custom block content.

### API

| Name          | Type     | Default | Required | Description                                                                                                                                                                                                                                                        |
| ------------- | -------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `elementType` | `string` | `nav`   | ✕        | HTML tag to render                                                                                                                                                                                                                                                 |
| `goBackTitle` | `string` | —       | ✕        | Title/translation for backlink to previous page on mobile. It's required to be set when `items` are present. If the `items` property is not passed and the link tree is constructed manually within the children, the backlink needs to be included there as well. |
| `items`       | `array`  | `[]`    | ✕        | Navigation menu items                                                                                                                                                                                                                                              |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## BreadcrumbsItem

Use the `BreadcrumbsItem` component for the ordered list as the component's children instead of passing the breadcrumb items array via props:

```twig
<Breadcrumbs>
  {% for item in items %}
    <BreadcrumbsItem isCurrent={ loop.last } href={ item.url }>
        {{ item.title }}
    </BreadcrumbsItem>
  {% endfor %}
</Breadcrumbs>
```

### API

| Name               | Type            | Default         | Required | Description                                           |
| ------------------ | --------------- | --------------- | -------- | ----------------------------------------------------- |
| `href`             | `string`        | —               | ✕ \*     | URL, if not set, the item is rendered as a plain text |
| `iconNameEnd`      | `string`        | `chevron-right` | ✕        | Icon name at the end of the item                      |
| `iconNameStart`    | `string`        | `chevron-left`  | ✕        | Icon name at the start of the item                    |
| `isCurrent`        | `boolean`       | `false`         | ✕        | Whether is the item the current page                  |
| `isGoBackOnly`     | `boolean`       | `false`         | ✕        | Whether should be displayed in go back mode           |
| `UNSAFE_className` | `string`        | —               | ✕        | Wrapper custom class name                             |
| `UNSAFE_style`     | `CSSProperties` | —               | ✕        | Wrapper custom style                                  |

(\*) Optional only for the current page.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

### Dealing with long titles

When you need to shorten the title of the BreadcrumbsItem the preferred way is to use platform native helpers.
Twig has an implementation of text truncating using [`u` filter][twig-truncate].
Please see the documentation for more details.

```twig
{{ 'Lorem ipsum'|u.truncate(8, '…') }}
```

Additional option is to use helper class `text-truncate` with defined width.

[breadcrumbs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Breadcrumbs
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[twig-truncate]: https://twig.symfony.com/doc/3.x/filters/u.html
