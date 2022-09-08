# Grid

This is Twig implementation of the [Grid] component.

Basic example usage:

```html
<Grid>
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</Grid>
```

Advanced example usage:

```html
<Grid cols="2" tablet="3" desktop="4" elementType="section">
  <span>col 1</span>
  <span>col 2</span>
  <span>col 3</span>
  <span>col 4</span>
  <span>col 5</span>
  <span>col 6</span>
</Grid>
```

Without lexer:

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

## API

| Prop name     | Type                               | Default | Required | Description                         |
| ------------- | ---------------------------------- | ------- | -------- | ----------------------------------- |
| `cols`        | `1`, `2`, `3`, `4`, `5`, `6`, `12` | `null`  | no       | Number of columns to use            |
| `desktop`     | `1`, `2`, `3`, `4`, `5`, `6`, `12` | `null`  | no       | Number of columns to use on desktop |
| `tablet`      | `1`, `2`, `3`, `4`, `5`, `6`, `12` | `null`  | no       | Number of columns to use on tablet  |
| `class`       | `string`                           | `null`  | no       | Custom CSS class                    |
| `elementType` | `string`                           | `div`   | no       | HTML tag to render                  |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[grid]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Grid
