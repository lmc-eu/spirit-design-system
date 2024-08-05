# Link

This is Twig implementation of the [Link][link] component.

Basic example usage:

```twig
<Link href="#">Link</Link>
```

Advanced example usage:

```twig
<Link
    href="#"
    color="primary"
    underline="always"
>
    Primary Underlined Link
</Link>
```

Without lexer:

```twig
{% embed "@spirit/link.twig" with { props: {
    color: 'primary',
    href: '/'
}} %}
    {% block content %}
        Primary Link
    {% endblock %}
{% endembed %}
```

## Underlined

You can customize the underline behavior for links with three different settings:

### Hover

This is the **default** value, which makes the underline visible only when the component is hovered over.

```twig
<Link href="/" underlined="hover">…</Link>
```

Alternatively, you can omit this prop:

```twig
<Link href="/">…</Link>
```

### Always

The underline is constantly visible, regardless of interaction.

```twig
<Link href="/" underlined="always">…</Link>
```

### Never

The underline is never visible, even when the link is hovered over.

```twig
<Link href="/" underlined="never">…</Link>
```

## API

| Name           | Type                                             | Default   | Required | Description                                                                                |
| -------------- | ------------------------------------------------ | --------- | -------- | ------------------------------------------------------------------------------------------ |
| `color`        | [Action Link Color dictionary][dictionary-color] | `primary` | ✕        | Color variant                                                                              |
| `href`         | `string`                                         | —         | ✓        | Link URL                                                                                   |
| `isDisabled`   | `bool`                                           | `false`   | ✕        | If true, Link is disabled                                                                  |
| `isUnderlined` | `bool`                                           | `false`   | ✕        | [**DEPRECATED**][readme-deprecations] in favor of `underline`; If true, Link is underlined |
| `target`       | `string`                                         | `null`    | ✕        | Browsing context for the link                                                              |
| `title`        | `string`                                         | `null`    | ✕        | Optional title to display on hover                                                         |
| `underlined`   | `hover` \| `always` \| `never`                   | `hover`   | ✕        | When is the link underlined                                                                |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

#### ⚠️ DEPRECATION NOTICE

`isUnderlined` property will be replaced in the next major version. Please use `underlined` instead.

[What are deprecations?][readme-deprecations]

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[link]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-react/src/components/Link
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
