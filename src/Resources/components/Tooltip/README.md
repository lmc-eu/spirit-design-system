# Tooltip

This is Twig implementation of the [Tooltip] component.

Basic usage:

```html
<Tooltip>Hello there!</Tooltip>
```

Custom placement:

```html
<Tooltip placement="right">
    Hello there!
</Tooltip>
```

Dismissible tooltip (requires `id` to be defined):

```html
<Tooltip id="my-tooltip" isDismissible>
    Hello there!
</Tooltip>
```

Without lexer:

```twig
{% embed "@spirit/tooltip.twig" with { props: {
    id: 'my-tooltip',
    isDismissible: true,
    placement: 'right'
}} %}
    {% block content %}
        Hello there!
    {% endblock %}
{% endembed %}
```

## Linking with Content

Tooltip is positioned relative to the closest parent element with
`position: relative` or `position: absolute`. You may either provide the CSS
yourself or you can use the prepared TooltipWrapper component:

```html
<TooltipWrapper>
    <Link href="#" aria-describedby="my-tooltip">
        I have a tooltip
    </Link>
    <Tooltip id="my-tooltip">
        Hello there!
    </Tooltip>
</TooltipWrapper>
```

Please consult the [CSS implementation of Tooltip][Tooltip] to help you pick the
best positioning approach for your use case.

## API

### Tooltip

| Prop name         | Type                               | Default   | Required | Description              |
|-------------------|------------------------------------|-----------|----------|--------------------------|
| `class`           | `string`                           | `null`    | no       | Custom CSS class         |
| `closeLabel`      | `string`                           | `Close`   | no       | Close label              |
| `id`              | `string`                           | `null`    | no       | Optional tooltip ID      |
| `isDismissible`   | `bool`                             | `false`   | no       | Make tooltip dismissible |
| `placement`       | [`top`, `bottom`, `left`, `right`] | `bottom`  | no       | Tooltip placement        |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

### TooltipWrapper

| Prop name         | Type                             | Default  | Required | Description              |
|-------------------|----------------------------------|----------|----------|--------------------------|
| `class`           | `string`                         | `null`   | no       | Custom CSS class         |

[Tooltip]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tooltip
