# Tag

This is Twig implementation of the [Tag] component.

Basic example usage:

```html
<Tag>Tag</Tag>
```

Advanced example usage:

```html
<Tag 
    color="default" 
    elementType="div" 
    size="small" 
    theme="dark"
>
    Tag content
</Tag>
```

Without lexer:

```twig
{% embed "@spirit/tag.twig" with { props: {
    color: 'default',
    elementType: 'div'
    size: 'small',
    theme: 'dark'
}} %}
    {% block content %}
        Tag content
    {% endblock %}
{% endembed %}
```

## API

| Prop name     | Type                                                     | Default   | Required | Description        |
|---------------|----------------------------------------------------------|-----------|----------|--------------------|
| `class`       | `string`                                                 | `null`    | no       | Custom CSS class   |
| `color`       | `default`, `informative`, `success`, `warning`, `danger` | `default` | no       | Color variant      |
| `elementType` | `string`                                                 | `span`    | no       | HTML tag to render |
| `size`        | `xsmall`, `small`, `medium`                              | `medium`  | no       | Size of the Tag    |
| `theme`       | `light`, `dark`                                          | `dark`    | no       | Theme variant      |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[Tag]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tag
