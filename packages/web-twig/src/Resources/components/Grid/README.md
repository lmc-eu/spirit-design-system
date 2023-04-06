# Grid

This is Twig implementation of the [Grid] component.

## Grid

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

### API

| Prop name     | Type                               | Default | Required | Description                         |
| ------------- | ---------------------------------- | ------- | -------- | ----------------------------------- |
| `cols`        | `1`, `2`, `3`, `4`, `5`, `6`, `12` | `null`  | no       | Number of columns to use            |
| `tablet`      | `1`, `2`, `3`, `4`, `5`, `6`, `12` | `null`  | no       | Number of columns to use on tablet  |
| `desktop`     | `1`, `2`, `3`, `4`, `5`, `6`, `12` | `null`  | no       | Number of columns to use on desktop |
| `class`       | `string`                           | `null`  | no       | Custom CSS class                    |
| `elementType` | `string`                           | `div`   | no       | HTML tag to render                  |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

## GridSpan

Grid Span allows to center content over multiple grid columns.

For more info when and why to use it, see [Grid] component.

Basic example usage:

```html
<Grid>
  <GridSpan over="2">2</GridSpan>
  <GridSpan over="4">4</GridSpan>
  <GridSpan over="6">6</GridSpan>
  <GridSpan over="8">8</GridSpan>
  <GridSpan over="10">10</GridSpan>
</Grid>
```

Advanced example usage:

```html
<Grid elementType="ul">
  <GridSpan elementType="li" over="10" tablet="8" desktop="6"> 10 on mobile, 8 on tablet, 6 on desktop </GridSpan>
</Grid>
```

Without lexer:

```twig
{% embed "@spirit/gridSpan.twig" with { props: {
    over: 2,
}} %}
    {% block content %}
        <span>over 2</span>
    {% endblock %}
{% endembed %}
```

### API

| Prop name     | Type                           | Default | Required | Description                               |
| ------------- | ------------------------------ | ------- | -------- | ----------------------------------------- |
| `over`        | `2`, `4`, `6`, `8`, `10`, `12` | `null`  | no       | Number of columns to span over            |
| `tablet`      | `2`, `4`, `6`, `8`, `10`, `12` | `null`  | no       | Number of columns to span over on tablet  |
| `desktop`     | `2`, `4`, `6`, `8`, `10`, `12` | `null`  | no       | Number of columns to span over on desktop |
| `class`       | `string`                       | `null`  | no       | Custom CSS class                          |
| `elementType` | `string`                       | `div`   | no       | HTML tag to render                        |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[grid]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Grid
