# Dropdown

This is the Twig implementation of the [Dropdown] component.

Basic example usage:

```twig
<DropdownWrapper>
  <Button data-toggle="dropdown" data-target="DropdownExample" aria-controls="DropdownExample" aria-expanded="false">Open Dropdown</Button>
  <Dropdown id="DropdownExample">Dropdown Content</Dropdown>
</DropdownWrapper>
```

Full width on mobile

```twig
<DropdownWrapper>
  <Button data-toggle="dropdown" data-target="DropdownExample" aria-controls="DropdownExample" aria-expanded="false">Open Dropdown</Button>
  <Dropdown id="DropdownExample" isFullWidth breakpoint="tablet">Dropdown Content</Dropdown>
</DropdownWrapper>
```

Advanced example usage with positioning:

```twig
<DropdownWrapper>
  <Button data-toggle="dropdown" data-target="DropdownExample" aria-controls="DropdownExample" aria-expanded="false">Open Dropdown</Button>
  <Dropdown elementType="span" id="DropdownExample" placement="top-right" isFullWidth>Dropdown Content</Dropdown>
</DropdownWrapper>
```

Without lexer:

```twig
{% embed "@spirit/dropdownWrapper.twig" %}
  {% block content %}
    {% embed "@spirit/dropdown.twig" with { props: {
        breakpoint: 'tablet',
        elementType: 'span',
        isFullWidth: true,
        placement: 'top-right'
    }} %}
        {% block content %}
              Dropdown content
        {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}
```

You can add any custom trigger like a `<Button>` but it is necessary to add `data-toggle="dropdown"`, `data-target="<id>"`
attributes to register trigger events.

## API

### Dropdown

| Prop name       | Type                                                     | Default       | Required | Description                                                                                            |
| --------------- | -------------------------------------------------------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `breakpoint`    | `string`                                                 | -             | no       | [**DEPRECATED**][deprecated] in favor of `fullWidthMode`; Breakpoint level [tablet,desktop]            |
| `elementType`   | `string`                                                 | `div`         | no       | HTML tag to render                                                                                     |
| `fullWidthMode` | `string`                                                 | -             | no       | Full-width mode [off,mobile-only,all]                                                                  |
| `id`            | `string`                                                 | -             | yes      | Dropdown ID                                                                                            |
| `isFullWidth`   | `boolean`                                                | `false`       | no       | [**DEPRECATED**][deprecated] in favor of `fullWidthMode`; Whether is component displayed in full width |
| `placement`     | [`bottom-left`, `bottom-right`, `top-left`, `top-right`] | `bottom-left` | no       | Alignment of the component                                                                             |

You can add `data-*` or `aria-*` attributes to further extend the component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

### Trigger attributes

| Prop name       | Type     | Default    | Required | Description                |
| --------------- | -------- | ---------- | -------- | -------------------------- |
| `aria-controls` | `string` | -          | no       | Aria controls state (auto) |
| `aria-expanded` | `string` | -          | no       | Aria expanded state (auto) |
| `data-target`   | `string` | -          | yes      | Target selector            |
| `data-toggle`   | `string` | `dropdown` | yes      | Iterable selector          |

Other necessary attributes are toggled automatically, like `aria-controls` and `aria-expanded` when the component is loaded
or the width of the window is changed. There can be several triggers, the same rules apply to each.

### DropdownWrapper

| Prop name     | Type     | Default | Required | Description        |
| ------------- | -------- | ------- | -------- | ------------------ |
| `elementType` | `string` | `div`   | no       | HTML tag to render |

You can add `id`, `data-*` or `aria-*` attributes to further extend the component's
descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.

[dropdown]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Dropdown
[deprecated]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#deprecations
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
