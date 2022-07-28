# Modal

This is Twig implementation of the [Modal] component.

Basic example usage:

```html
<button
  type="button"
  data-toggle="modal"
  data-target="#modal-example"
  aria-controls="modal-example"
  aria-expanded="false"
>
  Open Modal
</button>
<Modal id="modal-example" />
```

Advanced example usage:

```html
<button
  type="button"
  data-toggle="modal"
  data-target="#modal-example"
  aria-controls="modal-example"
  aria-expanded="false"
>
  Open Modal
</button>
<Modal id="modal-example" closeLabel="Dismiss" />
```

Without lexer:

```twig
{% embed "@spirit/modal.twig" with { props: {
    id: 'modal-example',
}} %}
    {% block content %}
        Modal content
    {% endblock %}
{% endembed %}
```

## API

| Prop name    | Type     | Default | Required | Description        |
| ------------ | -------- | ------- | -------- | ------------------ |
| `class`      | `string` | `null`  | no       | Custom CSS class   |
| `closeLabel` | `string` | `Close` | no       | Custom close label |
| `id`         | `string` | —       | yes      | Modal ID           |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. These attributes
will be passed to the topmost HTML element of the component.

[modal]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Modal
