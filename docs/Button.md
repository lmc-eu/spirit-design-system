# Button

This is Twig implementation of the [Button] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/button.twig" with { props: {
    color: 'primary'
}} %}
    {% block content %}
        Primary buttom
    {% endblock %}
{% endembed %}
```

With Html syntax lexer (enabled by default):
```twig
<Button color="primary">Primary buttom</Button>
```

## Available props

| name       | type      | default value | description                                     |
|------------|-----------|---------------|-------------------------------------------------|
| color      | `string`  | primary       | its possible to use all theme colors            |
| block      | `boolean` | false         | span the full width of a parent                 |
| square     | `boolean` | false         | if the button only has an icon                  |
| disabled   | `boolean` | false         | it specifies that the button should be disabled |                                              |
| type       | `string`  | button        | type of button (submit or button)               |
| ariaLabel  | `string`  | undefined     | accessible Rich Internet Applications label     |
| onClick    | `string`  | undefined     | execute a JavaScript when a button is clicked   |
| class      | `string`  | undefined     | adds additional classes                         |

[Button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Button