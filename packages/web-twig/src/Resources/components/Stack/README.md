# Stack

This is Twig implementation of the [Stack] component.

Basic example usage:

```html
<Stack>
  <div>Block 1</div>
  <div>Block 2</div>
  <div>Block 3</div>
</Stack>
```

Advanced example usage:

```html
<Stack elementType="ul">
  <li>
    <div>List item 1</div>
  </li>
  <li>
    <div>List item 1</div>
  </li>
  <li>
    <div>List item 1</div>
  </li>
</Stack>
```

Without lexer:

```twig
{% embed "@spirit/stack.twig" with { props: {
    elementType: 'ul'
}} %}
    {% block content %}
          <li>
            <div>List item 1</div>
          </li>
          <li>
            <div>List item 1</div>
          </li>
          <li>
            <div>List item 1</div>
          </li>
    {% endblock %}
{% endembed %}
```

## API

| Prop name     | Type     | Default | Required | Description        |
| ------------- | -------- | ------- | -------- | ------------------ |
| `elementType` | `string` | `div`   | no       | HTML tag to render |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[stack]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Stack
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
