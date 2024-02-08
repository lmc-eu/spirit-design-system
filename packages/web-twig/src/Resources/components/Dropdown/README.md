# Dropdown

This is the Twig implementation of the [Dropdown][dropdown] component.

Basic example usage:

```twig
<DropdownWrapper>
  <Button data-spirit-toggle="dropdown" data-spirit-target="DropdownExample" aria-controls="DropdownExample" aria-expanded="false">Open Dropdown</Button>
  <Dropdown id="DropdownExample">Dropdown Content</Dropdown>
</DropdownWrapper>
```

Full width on mobile

```twig
<DropdownWrapper>
  <Button data-spirit-toggle="dropdown" data-spirit-target="DropdownExample" aria-controls="DropdownExample" aria-expanded="false">Open Dropdown</Button>
  <Dropdown id="DropdownExample" fullWidthMode="mobile-only">Dropdown Content</Dropdown>
</DropdownWrapper>
```

Advanced example usage with positioning:

```twig
<DropdownWrapper>
  <Button data-spirit-toggle="dropdown" data-spirit-target="DropdownExample" aria-controls="DropdownExample" aria-expanded="false">Open Dropdown</Button>
  <Dropdown elementType="span" id="DropdownExample" placement="top-end" fullWidthMode="all">Dropdown Content</Dropdown>
</DropdownWrapper>
```

Example with [Item][item] component:

```twig
<DropdownWrapper>
  <Button data-spirit-toggle="dropdown" data-spirit-target="DropdownExample" aria-controls="DropdownExample" aria-expanded="false">Open Dropdown</Button>
  <Dropdown id="DropdownExample">
    <Item elementType="a" href="#" label="Item label" />
  </Dropdown>
</DropdownWrapper>
```

You can add any custom trigger like a `<Button>` but it is necessary to add `data-spirit-toggle="dropdown"`, `data-spirit-target="<id>"`
attributes to register trigger events.

## API

### Dropdown

| Name            | Type                                         | Default        | Required | Description                           |
| --------------- | -------------------------------------------- | -------------- | -------- | ------------------------------------- |
| `elementType`   | `string`                                     | `div`          | ✕        | HTML tag to render                    |
| `fullWidthMode` | `string`                                     | —              | ✕        | Full-width mode [off,mobile-only,all] |
| `id`            | `string`                                     | —              | ✔        | Dropdown ID                           |
| `placement`     | [Placement Dictionary][dictionary-placement] | `bottom-start` | ✕        | Placement of the dropdown             |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

#### ⚠️ DEPRECATION NOTICE

Both cross-axis placements have been renamed from `top-left`, `top-right`, `right-top`, `right-bottom`,
etc. to `top-start`, `top-end`, `right-start`, `right-end`, etc. The old names are deprecated and will be
removed in the next major release.

[What are deprecations?][readme-deprecations]

### Trigger attributes

| Name                 | Type     | Default    | Required | Description                |
| -------------------- | -------- | ---------- | -------- | -------------------------- |
| `aria-controls`      | `string` | —          | ✕        | Aria controls state (auto) |
| `aria-expanded`      | `string` | —          | ✕        | Aria expanded state (auto) |
| `data-spirit-target` | `string` | —          | ✔        | Target selector            |
| `data-spirit-toggle` | `string` | `dropdown` | ✔        | Iterable selector          |

Other necessary attributes are toggled automatically, like `aria-controls` and `aria-expanded` when the component is loaded
or the width of the window is changed. There can be several triggers, the same rules apply to each.

### DropdownWrapper

| Name          | Type     | Default | Required | Description        |
| ------------- | -------- | ------- | -------- | ------------------ |
| `elementType` | `string` | `div`   | ✕        | HTML tag to render |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[dictionary-placement]: https://github.com/lmc-eu/spirit-design-system/tree/main/docs/DICTIONARIES.md#placement
[dropdown]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Dropdown
[item]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/src/Resources/components/Item/README.md
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Dropdown/README.md#javascript
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
