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

| Name          | Type                                             | Default | Required | Description                         |
| ------------- | ------------------------------------------------ | ------- | -------- | ----------------------------------- |
| `cols`        | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12`] | `null`  | ✕        | Number of columns to use            |
| `desktop`     | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12`] | `null`  | ✕        | Number of columns to use on desktop |
| `elementType` | `string`                                         | `div`   | ✕        | HTML tag to render                  |
| `tablet`      | [`1` \| `2` \| `3` \| `4` \| `5` \| `6` \| `12`] | `null`  | ✕        | Number of columns to use on tablet  |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

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

| Name          | Type                                       | Default | Required | Description                               |
| ------------- | ------------------------------------------ | ------- | -------- | ----------------------------------------- |
| `desktop`     | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over on desktop |
| `elementType` | `string`                                   | `div`   | ✕        | HTML tag to render                        |
| `over`        | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over            |
| `tablet`      | [`2` \| `4` \| `6` \| `8` \| `10` \| `12`] | `null`  | ✕        | Number of columns to span over on tablet  |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[grid]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Grid
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
