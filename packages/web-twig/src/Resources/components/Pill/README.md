# Pill

This is Twig implementation of the [Pill] component.

Basic example usage:

```html
<Pill>3</Pill>
```

Advanced example usage:

```html
<Pill color="secondary" elementType="div">333</Pill>
```

Without lexer:

```twig
{% embed "@spirit/pill.twig" with { props: {
    color: 'secondary'
    elementType: 'div'
}} %}
    {% block content %}
          333
    {% endblock %}
{% endembed %}
```

## API

| Prop name     | Type                    | Default    | Required | Description        |
| ------------- | ----------------------- | ---------- | -------- | ------------------ |
| `class`       | `string`                | `null`     | no       | Custom CSS class   |
| `color`       | `selected`, `secondary` | `selected` | no       | Color variant      |
| `elementType` | `string`                | `span`     | no       | HTML tag to render |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[pill]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Pill
