# Spinner

The Spinner indicates something is loading.

```jsx
<Spinner />
<Spinner color="secondary" />
```

## API

| Name    | Type                                      | Default | Required | Description          |
| ------- | ----------------------------------------- | ------- | -------- | -------------------- |
| `color` | [Text Color dictionary][dictionary-color] | —       | ✕        | Color of the Spinner |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Icons

This component uses the `Icon` component internally. To ensure correct rendering,
please refer to the [Icon component documentation][web-react-icon-documentation] for setup instructions.

[dictionary-color]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#color
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[web-react-icon-documentation]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/src/components/Icon/README.md#-usage
