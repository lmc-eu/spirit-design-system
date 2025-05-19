# Heading

This is Twig implementation of the [Heading][heading] component.

## Basic Usage

Use the `elementType` prop to set the HTML tag of the Heading component.

```twig
<Heading elementType="h1">
  Heading
</Heading>
```

## Size

Use the `size` prop to set the size of the text.

```twig
<Heading elementType="h1" size="large">
  Heading
</Heading>
```

## Emphasis

Use the `emphasis` prop to set the emphasis of the text.

⚠️ This prop only affects styling, not the semantics of the element.

```twig
<Heading elementType="h1" emphasis="semibold">Semibold heading</Heading>
```

## Text Color

Use the `textColor` prop to set color of the text. When undefined, the text color
is inherited from the parent element.

```twig
<Heading textColor="secondary">Secondary heading</Heading>
```

## Text Alignment

Use the `textAlignment` prop to set the text alignment.

```twig
<Heading textAlignment="center">Centered heading</Heading>
<Heading textAlignment="right">Right aligned heading</Heading>
```

You can also define responsive values for the `textAlignment` prop using an object:

```twig
<Heading textAlignment="{{ { mobile: 'left', tablet: 'center', desktop: 'right' } }}">
  Responsive text alignment
</Heading>
```

## Full Example

```twig
<Heading elementType="h1" size="large" emphasis="semibold" textColor="secondary">
  Heading
</Heading>
```

## Without Lexer

```twig
{% embed "@spirit/heading.twig" with { props: {
  elementType: 'h1',
  emphasis: 'semibold',
  size: 'medium'
  textColor: 'secondary',
}} %}
  {% block content %}
    Text content
  {% endblock %}
{% endembed %}
```

## API

| Name            | Type                                                                                                                                                        | Default  | Required | Description                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | -------------------------------------------------------------- |
| `elementType`   | `string`                                                                                                                                                    | -        | ✓        | HTML tag to render                                             |
| `emphasis`      | [Emphasis dictionary][dictionary-emphasis]                                                                                                                  | `bold`   | ✕        | Emphasis of the text                                           |
| `size`          | [Size Extended dictionary][dictionary-size]                                                                                                                 | `medium` | ✕        | Size of the text                                               |
| `textAlignment` | \[[Text Alignment dictionary][dictionary-alignment] \| `object`]                                                                                            | -        | ✕        | Text alignment                                                 |
| `textColor`     | \[Accent Color \| [Emotion Color dictionary][dictionary-color] ✕ [Intensity dictionary][dictionary-intensity] \| [Text Color dictionary][dictionary-color]] | -        | ✕        | Color of the text                                              |
| `translate`     | \[`yes` \| `no` \| `''`]                                                                                                                                    | `null`   | ✕        | Set to `no` to disable machine translation of the text content |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#alignment
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-emphasis]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#emphasis
[dictionary-intensity]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#intensity
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[heading]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Heading
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
