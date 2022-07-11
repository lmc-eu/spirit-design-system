# Button

This is Twig implementation of the [Button] component.

Basic example usage:

```html
<Button>Primary button</Button>
```

Advanced example usage:

```html
<Button 
    color="primary"
    isBlock
    type="submit"
>
    Primary block submit button
</Button>
```

Without lexer:

```twig
{% embed "@spirit/button.twig" with { props: {
    color: 'primary'
}} %}
    {% block content %}
        Primary button
    {% endblock %}
{% endembed %}
```

## API

| Prop name    | Type                                                     | Default   | Required | Description                                          |
|--------------|----------------------------------------------------------|-----------|----------|------------------------------------------------------|
| `class`      | `string`                                                 | `null`    | no       | Custom CSS class                                     |
| `color`      | `primary`, `secondary`, `tertiary`, `inverted`, `danger` | `primary` | no       | Color variant                                        |
| `isBlock`    | `bool`                                                   | `false`   | no       | Span the element to the full width of its parent     |
| `isDisabled` | `bool`                                                   | `false`   | no       | If true, Button is disabled                          |
| `isSquare`   | `bool`                                                   | `false`   | no       | If true, Button is square, usually only with an icon |
| `onClick`    | `string`                                                 | `null`    | no       | JS function to call on click                         |
| `type`       | `string`                                                 | `button`  | no       | Type of the Button                                   |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[Button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
