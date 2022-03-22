# Grid

This is Twig implementation of the [Grid] component.

## Examples
pure implementation:
```twig
{% embed "@spirit/grid.twig" with { props: {
    cols: 2,
    tablet: 3,
    desktop: 4,
}} %}
    {% block content %}
        <span>col 1</span>
        <span>col 2</span>
        <span>col 3</span>
        <span>col 4</span>
        <span>col 5</span>
        <span>col 6</span>
    {% endblock %}
{% endembed %}
```

With Html syntax lexer (enabled by default):
```twig
<Grid cols="2" tablet="3" desktop="4">
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</Grid>
```

## Available props

| Name          | Type                          | Description                          |
|---------------|-------------------------------|--------------------------------------|
| `cols`        | `1`, `2`, `3`, `4`, `6`, `12` | Number of columns to use             |
| `desktop`     | `1`, `2`, `3`, `4`, `6`, `12` | Number of columns to use on desktop  |
| `tablet`      | `1`, `2`, `3`, `4`, `6`, `12` | Number of columns to use on tablet   |
| `layout`      | `narrow`                      | Type of layout to display            |
| `elementType` | HTML element                  | Element type to use for the Grid     |
| `class`       | string                        | Additional class name                |

[Grid]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/components/Grid