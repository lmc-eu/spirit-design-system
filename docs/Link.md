# Text

This is Twig implementation of the [Link] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/link.twig" with { props: {
    color: 'primary',
    href: '/'
}} %}
    {% block content %}
        Primary Link
    {% endblock %}
{% endembed %}
```

With Html syntax lexer (enabled by default):
```twig
<Link href="#" color="primary">Primary Link</Link>
```

## Available props

| name         | type      | default value | description                                 |
|--------------|-----------|---------------|---------------------------------------------|
| color        | `string`  | primary       | its possible to use all theme colors        |
| href         | `string`  | #             | anchor href link                            |
| title        | `string`  | undefined     | anchor link title                           |
| target       | `string`  | __self        | anchor target                               |
| isUnderlined | `boolean` | false         | if the link is underlined                   |
| isDisabled   | `boolean` | false         |                                             |
| onClick      | `string`  | undefined     | execute a JavaScript when a link is clicked |
| class        | `string`  | undefined     | property to extend with custom classes      |

On this component it's possible to insert property `id`, `data-*` and `aria-*` properties.

[Tag]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Link
