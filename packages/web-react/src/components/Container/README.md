# Container

Container centers your content horizontally and sets its max-width with horizontal paddings.

```jsx
<Container>Content</Container>
```

## Fluid Container

If you need a full-width container, you can use the `isFluid` prop.

```jsx
<Container isFluid>Content</Container>
```

## Sizes

If you need different sizes of the container, you can use the `size` prop.

```jsx
<Container size="small">Content</Container>
```

## API

| Name      | Type                               | Default  | Required | Description                 |
| --------- | ---------------------------------- | -------- | -------- | --------------------------- |
| `isFluid` | `bool`                             | `false`  | ✕        | If true, Container is fluid |
| `size`    | [Size dictionary][dictionary-size] | `xlarge` | ✕        | Size variant                |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

For detailed information see [Container][web-container] component

[dictionary-size]: https://github.com/lmc-eu/spirit-design-system/blob/main/docs/DICTIONARIES.md#size
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
[web-container]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Container/README.md
