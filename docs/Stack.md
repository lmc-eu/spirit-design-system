# Stack

This is Twig implementation of the [Stack] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/stack.twig" %}
    {% block content %}
        <div>Block 1</div>
        <div>Block 2</div>
        <div>Block 3</div>
    {% endblock %}
{% endembed %}

{% embed "@spirit/stack.twig" with { props: {
    elementTyle: 'ul'
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

With Html syntax lexer (enabled by default):
```twig
<Stack>
    <div>Block 1</div>
    <div>Block 2</div>
    <div>Block 3</div>
</Stack>
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

## Available props

| Name          | Type                          | Description                          |
|---------------|-------------------------------|--------------------------------------|
| `elementType` | HTML element                  | Element type to use for the Grid     |
| `class`       | string                        | Additional class name                |

[Stack]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Stack