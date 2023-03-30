# Pagination

This is Twig implementation of the [Pagination] component.

Advanced example usage:

```html
<Pagination class="mb-800" elementType="nav" defaultPage="5" totalPages="10" />
```

Without lexer:

```twig
{% embed "@spirit/pagination.twig" with { props: {
    class: 'mb-800',
    elementType: 'nav',
    defaultPage: '5',
    totalPages: '10'
}} %}
{% endembed %}
```

## API

| Prop name     | Type     | Default  | Required | Description        |
| ------------- | -------- | -------- | -------- | ------------------ |
| `class`       | `string` | `mb-800` | no       | Custom CSS class   |
| `elementType` | `string` | `nav`    | no       | HTML tag to render |
| `defaulPage`  | `string` | `1`      | no       | The active page    |
| `totalPages`  | `string` | `5`      | no       | Total pages amount |

Component has a default chapter(page range or visible pages) size 5. If there are less pages, then chapter size will be same as totalPages prop.

[pill]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Pagination
