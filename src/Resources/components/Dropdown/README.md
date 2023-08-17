# Dropdown

This is the Twig implementation of the [Dropdown] component.

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
  <Dropdown elementType="span" id="DropdownExample" placement="top-right" fullWidthMode="all">Dropdown Content</Dropdown>
</DropdownWrapper>
```

Without lexer:

```twig
{% embed "@spirit/dropdownWrapper.twig" %}
  {% block content %}
    {% embed "@spirit/dropdown.twig" with { props: {
        elementType: 'span',
        fullWidthMode: 'mobile-only',
        placement: 'top-right'
    }} %}
        {% block content %}
              Dropdown content
        {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}
```

You can add any custom trigger like a `<Button>` but it is necessary to add `data-spirit-toggle="dropdown"`, `data-spirit-target="<id>"`
attributes to register trigger events.

## API

### Dropdown

| Prop name       | Type                                                           | Default       | Required | Description                           |
| --------------- | -------------------------------------------------------------- | ------------- | -------- | ------------------------------------- |
| `elementType`   | `string`                                                       | `div`         | ✕        | HTML tag to render                    |
| `fullWidthMode` | `string`                                                       | —             | ✕        | Full-width mode [off,mobile-only,all] |
| `id`            | `string`                                                       | —             | ✔        | Dropdown ID                           |
| `placement`     | [`bottom-left` \| `bottom-right` \| `top-left` \| `top-right`] | `bottom-left` | ✕        | Alignment of the component            |

You can add `data-*` or `aria-*` attributes to further extend the component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

### Trigger attributes

| Prop name            | Type     | Default    | Required | Description                |
| -------------------- | -------- | ---------- | -------- | -------------------------- |
| `aria-controls`      | `string` | —          | ✕        | Aria controls state (auto) |
| `aria-expanded`      | `string` | —          | ✕        | Aria expanded state (auto) |
| `data-spirit-target` | `string` | —          | ✔        | Target selector            |
| `data-spirit-toggle` | `string` | `dropdown` | ✔        | Iterable selector          |

Other necessary attributes are toggled automatically, like `aria-controls` and `aria-expanded` when the component is loaded
or the width of the window is changed. There can be several triggers, the same rules apply to each.

### DropdownWrapper

| Prop name     | Type     | Default | Required | Description        |
| ------------- | -------- | ------- | -------- | ------------------ |
| `elementType` | `string` | `div`   | ✕        | HTML tag to render |

You can add `id`, `data-*` or `aria-*` attributes to further extend the component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

## JavaScript Plugin

For full functionality, you need to provide Spirit JavaScript:

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult the [main README][web-readme] for how to include JavaScript plugins.

Or, feel free to write the controlling script yourself.

👉 Check the [component's docs in the web package][web-js-api] to see the full documentation and API of the plugin.

[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Dropdown/README.md#javascript
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[dropdown]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Dropdown
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
