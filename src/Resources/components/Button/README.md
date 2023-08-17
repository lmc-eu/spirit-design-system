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

| Prop name    | Type                                                                                      | Default   | Required | Description                                                                |
| ------------ | ----------------------------------------------------------------------------------------- | --------- | -------- | -------------------------------------------------------------------------- |
| `color`      | [Action Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                              |
| `formtarget` | `string`                                                                                  | `null`    | ✕        | Submit button target                                                       |
| `isBlock`    | `bool`                                                                                    | `false`   | ✕        | Span the element to the full width of its parent                           |
| `isDisabled` | `bool`                                                                                    | `false`   | ✕        | If true, Button is disabled                                                |
| `isLoading`  | `bool`                                                                                    | `false`   | ✕        | If true, Button is in a loading state, disabled and the Spinner is visible |
| `isSquare`   | `bool`                                                                                    | `false`   | ✕        | If true, Button is square, usually only with an Icon                       |
| `name`       | `string`                                                                                  | `null`    | ✕        | Submit button name                                                         |
| `size`       | [Size dictionary][dictionary-size]                                                        | `medium`  | ✕        | Size variant                                                               |
| `type`       | `string`                                                                                  | `button`  | ✕        | Type of the Button                                                         |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
