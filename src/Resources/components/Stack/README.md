# Stack

[Stack] is a component that allows you to compose elements vertically.

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
<Stack elementType="ul" hasIntermediateDividers hasStartDivider hasEndDivider>
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

| Name                      | Type     | Default | Required | Description                            |
| ------------------------- | -------- | ------- | -------- | -------------------------------------- |
| `elementType`             | `string` | `div`   | ✕        | Element type of the wrapper element    |
| `hasEndDivider`           | `bool`   | `false` | ✕        | Render a divider after the last item   |
| `hasIntermediateDividers` | `bool`   | `false` | ✕        | Render dividers between items          |
| `hasSpacing`              | `bool`   | `false` | ✕        | Apply a spacing between items          |
| `hasStartDivider`         | `bool`   | `false` | ✕        | Render a divider before the first item |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[stack]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Stack
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
