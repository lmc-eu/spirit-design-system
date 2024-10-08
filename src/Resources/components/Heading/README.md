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

## Full Example

```twig
<Heading elementType="h1" size="large" emphasis="semibold">
  Heading
</Heading>
```

## Without Lexer

```twig
{% embed "@spirit/heading.twig" with { props: {
  elementType: 'h1',
  emphasis: 'semibold',
  size: 'medium'
}} %}
  {% block content %}
    Text content
  {% endblock %}
{% endembed %}
```

## API

| Name          | Type                                        | Default  | Required | Description                                                    |
| ------------- | ------------------------------------------- | -------- | -------- | -------------------------------------------------------------- |
| `elementType` | `string`                                    | -        | ✓        | HTML tag to render                                             |
| `emphasis`    | [Emphasis dictionary][dictionary-emphasis]  | `bold`   | ✕        | Emphasis of the text                                           |
| `size`        | [Size Extended dictionary][dictionary-size] | `medium` | ✕        | Size of the text                                               |
| `translate`   | \[`yes` \| `no` \| `''`]                    | `null`   | ✕        | Set to `no` to disable machine translation of the text content |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[dictionary-emphasis]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#emphasis
[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#size
[heading]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Heading
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
