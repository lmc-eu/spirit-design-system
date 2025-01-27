# Stack

[Stack][stack] is a component that allows you to compose elements vertically.

Basic example usage:

```twig
<Stack>
  <div>Block 1</div>
  <div>Block 2</div>
  <div>Block 3</div>
</Stack>
```

Advanced example usage:

```twig
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

## Custom Spacing

You can use the `spacing` prop to apply custom spacing between items. The prop
accepts either a spacing token (for example `space-100`) or an object with breakpoint keys and spacing token values.

Default spacing:

```twig
<Stack hasSpacing>
  <!-- Stacked content -->
</Stack>
```

Custom spacing:

```twig
<Stack spacing="space-1200">
  <!-- Stacked content -->
</Stack>
```

Custom responsive spacing:

```twig
<Stack spacing="{{ { mobile: 'space-400', tablet: 'space-800' } }}">
  <!-- Stacked content -->
</Stack>
```

## API

| Name                      | Type                           | Default | Required | Description                                           |
| ------------------------- | ------------------------------ | ------- | -------- | ----------------------------------------------------- |
| `elementType`             | `string`                       | `div`   | ✕        | Element type of the wrapper element                   |
| `hasEndDivider`           | `bool`                         | `false` | ✕        | Render a divider after the last item                  |
| `hasIntermediateDividers` | `bool`                         | `false` | ✕        | Render dividers between items                         |
| `hasSpacing`              | `bool`                         | `false` | ✕        | Apply default spacing between items                   |
| `hasStartDivider`         | `bool`                         | `false` | ✕        | Render a divider before the first item                |
| `spacing`                 | \[`spacing token` \| `object`] | `null`  | ✕        | Apply [custom spacing](#custom-spacing) between items |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[stack]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Stack
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
