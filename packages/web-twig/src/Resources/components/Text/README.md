# Text

This is Twig implementation of the [Text][text] component.

## Basic Usage

```twig
<Text>This is a text</Text>
```

## Element Type

Use the `elementType` prop to set the HTML tag of the Text component.

```twig
<Text elementType="span">
  Text
</Text>
```

## Size

Use the `size` prop to set the size of the text.

```twig
<Text size="large">
  Text
</Text>
```

## Emphasis

Use the `emphasis` prop to set the emphasis of the text.

⚠️ This prop only affects styling, not the semantics of the element.

```twig
<Text emphasis="bold">Bold text</Text>
```

## Text Color

Use the `textColor` prop to set color of the text. When undefined, the text color
is inherited from the parent element.

```twig
<Text textColor="secondary">Secondary text</Heading>
```

## Text Alignment

Use the `textAlignment` prop to set the text alignment.

```twig
<Text textAlignment="center">Centered text</Text>
<Text textAlignment="right">Right aligned text</Text>
```

You can also define responsive values for the `textAlignment` prop using an object:

```twig
<Text textAlignment="{{ { mobile: 'left', tablet: 'center', desktop: 'right' } }}">
  Responsive text alignment
</Text>
```

## Full Example

```twig
<Text elementType="span" size="large" emphasis="bold" textColor="secondary">
  Text
</Text>
```

## Without Lexer

```twig
{% embed "@spirit/text.twig" with { props: {
  emphasis: 'bold',
  size: 'medium'
  textColor: 'secondary',
}} %}
  {% block content %}
    Text content
  {% endblock %}
{% endembed %}
```

## API

| Name            | Type                                                             | Default   | Required | Description                                                    |
| --------------- | ---------------------------------------------------------------- | --------- | -------- | -------------------------------------------------------------- |
| `elementType`   | `string`                                                         | `p`       | ✕        | HTML tag to render                                             |
| `emphasis`      | [Emphasis dictionary][dictionary-emphasis]                       | `regular` | ✕        | Emphasis of the text                                           |
| `size`          | [Size Extended dictionary][dictionary-size]                      | `medium`  | ✕        | Size of the text                                               |
| `textAlignment` | \[[Text Alignment dictionary][dictionary-alignment] \| `object`] | -         | ✕        | Text alignment                                                 |
| `textColor`     | [Text Color dictionary][dictionary-color]                        | -         | ✕        | Color of the text                                              |
| `translate`     | \[`yes` \| `no` \| `''`]                                         | `null`    | ✕        | Set to `no` to disable machine translation of the text content |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-alignment]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#alignment
[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[dictionary-emphasis]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#emphasis
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[text]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Text
