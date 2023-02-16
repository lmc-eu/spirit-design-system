# Button

This is Twig implementation of the [Button] component.

Basic example usage:

```twig
<Button>Primary button</Button>
```

Advanced example usage:

```twig
<Button
  color="primary"
  isBlock
  type="submit"
>
  Primary block submit button
</Button>
```

Without lexer:

```twig
{% embed "@spirit/button.twig" with { props: {
    color: 'primary'
}} %}
    {% block content %}
        Primary button
    {% endblock %}
{% endembed %}
```

## API

| Prop name    | Type                                                                                      | Default   | Required | Description                                          |
| ------------ | ----------------------------------------------------------------------------------------- | --------- | -------- | ---------------------------------------------------- |
| `class`      | `string`                                                                                  | `null`    | no       | Custom CSS class                                     |
| `color`      | [Action Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | no       | Color variant                                        |
| `size`       | [Size dictionary][dictionary-size]                                                        | `medium`  | no       | Size variant                                         |
| `isBlock`    | `bool`                                                                                    | `false`   | no       | Span the element to the full width of its parent     |
| `isDisabled` | `bool`                                                                                    | `false`   | no       | If true, Button is disabled                          |
| `isSquare`   | `bool`                                                                                    | `false`   | no       | If true, Button is square, usually only with an icon |
| `onClick`    | `string`                                                                                  | `null`    | no       | JS function to call on click                         |
| `type`       | `string`                                                                                  | `button`  | no       | Type of the Button                                   |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility.

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
