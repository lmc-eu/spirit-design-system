# ButtonLink

This is Twig implementation of the [ButtonLink][button] component.

Basic example usage:

```twig
<ButtonLink href="#">Primary ButtonLink</ButtonLink>
```

Advanced example usage:

```twig
<ButtonLink color="primary" href="#" isBlock>Primary block ButtonLink</ButtonLink>
```

Without lexer:

```twig
{% embed "@spirit/buttonLink.twig" with { props: {
    color: 'primary',
    href: '#'
}} %}
    {% block content %}
        Primary ButtonLink
    {% endblock %}
{% endembed %}
```

## How to Make a Fluid ButtonLink

To span a `ButtonLink` to the full width of its parent, you can use display utility classes or `Grid` to achieve the desired layout.

```twig
<div class="d-grid">
  <ButtonLink href="#">Primary block-level Button</ButtonLink>
</div>
<div class="d-grid d-tablet-block">
  <ButtonLink href="#">Primary responsive block-level Button</ButtonLink>
</div>
<Grid
  cols="{{ { mobile: 1, tablet: 2 } }}"
  spacing="space-1100"
>
  <ButtonLink href="#">Primary responsive block-level Button</ButtonLink>
  <ButtonLink href="#" color="secondary">Secondary responsive block-level Button</ButtonLink>
</Grid>
```

## DEPRECATION NOTICE

Property `isBlock` is deprecated and will be removed in the next major release.

For more information, please read the section [How to Make a Fluid ButtonLink](#how-to-make-a-fluid-buttonlink).

## API

| Name            | Type                                                                                             | Default   | Required | Description                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------ | --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color`         | [Action Button Color dictionary][dictionary-color], [Emotion Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                                                                                                                     |
| `href`          | `string`                                                                                         | —         | ✓        | Link URL                                                                                                                                                          |
| `isBlock`       | `bool`                                                                                           | `false`   | ✕        | [**DEPRECATED**](#deprecation-notice) Span the element to the full width of its parent, see [How to Make a Fluid Button](#how-to-make-a-fluid-buttonlink) section |
| `isDisabled`    | `bool`                                                                                           | `false`   | ✕        | If true, ButtonLink is disabled                                                                                                                                   |
| `isLoading`     | `bool`                                                                                           | `false`   | ✕        | If true, ButtonLink is in a loading state, disabled and the Spinner is visible                                                                                    |
| `isSymmetrical` | `bool`                                                                                           | `false`   | ✕        | If true, ButtonLink has symmetrical dimensions, usually only with an Icon                                                                                         |
| `size`          | [Size dictionary][dictionary-size]                                                               | `medium`  | ✕        | Size variant                                                                                                                                                      |
| `target`        | `string`                                                                                         | `null`    | ✕        | Browsing context for the link                                                                                                                                     |
| `title`         | `string`                                                                                         | `null`    | ✕        | Optional title to display on hover                                                                                                                                |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[button]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Button
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
