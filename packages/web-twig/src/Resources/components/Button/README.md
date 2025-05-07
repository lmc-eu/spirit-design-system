# Button

This is Twig implementation of the [Button][button] component.

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

## How to Make a Fluid Button

To span a `Button` to the full width of its parent, you can use display utility classes or the `Grid` component to achieve the desired layout.

```twig
<div class="d-grid">
  <Button>Primary block-level Button</Button>
</div>
<div class="d-grid d-tablet-block">
  <Button>Primary responsive block-level Button</Button>
</div>
<Grid
  cols="{{ { mobile: 1, tablet: 2 } }}"
  spacing="space-1100"
>
  <Button>Primary responsive block-level Button</Button>
  <Button color="secondary">Secondary responsive block-level Button</Button>
</Grid>
```

## DEPRECATION NOTICE

Property `isBlock` is deprecated and will be removed in the next major release.

For more information, please read the section [How to Make a Fluid Button](#how-to-make-a-fluid-button).

## API

| Name            | Type                                                                                             | Default   | Required | Description                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------ | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color`         | [Action Button Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                                                                                                                 |
| `formtarget`    | `string`                                                                                         | `null`    | ✕        | Submit button target                                                                                                                                          |
| `isBlock`       | `bool`                                                                                           | `false`   | ✕        | [**DEPRECATED**](#deprecation-notice) Span the element to the full width of its parent, see [How to Make a Fluid Button](#how-to-make-a-fluid-button) section |
| `isDisabled`    | `bool`                                                                                           | `false`   | ✕        | If true, Button is disabled                                                                                                                                   |
| `isLoading`     | `bool`                                                                                           | `false`   | ✕        | If true, Button is in a loading state, disabled and the Spinner is visible                                                                                    |
| `isSymmetrical` | `bool`                                                                                           | `false`   | ✕        | If true, Button has symmetrical dimensions, usually only with an Icon                                                                                         |
| `name`          | `string`                                                                                         | `null`    | ✕        | Submit button name                                                                                                                                            |
| `size`          | [Size dictionary][dictionary-size]                                                               | `medium`  | ✕        | Size variant                                                                                                                                                  |
| `type`          | `string`                                                                                         | `button`  | ✕        | Type of the Button                                                                                                                                            |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
