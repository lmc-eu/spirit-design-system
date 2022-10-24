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
  <Dropdown elementType="span" id="DropdownExample" class="custom-dropdown-class" placement="top-right" isFullWidth>Dropdown Content</Dropdown>
</DropdownWrapper>
```

Without lexer:

```twig
{% embed "@spirit/dropdownWrapper.twig" %}
  {% block content %}
    {% embed "@spirit/dropdown.twig" with { props: {
        breakpoint: 'tablet',
        class: 'dropdown-custom-class',
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

| Prop name     | Type                                                     | Default       | Required | Description                                  |
| ------------- | -------------------------------------------------------- | ------------- | -------- | -------------------------------------------- |
| `id`          | `string`                                                 | -             | yes      | Dropdown ID                                  |
| `breakpoint`  | `string`                                                 | -             | no       | Breakpoint level [tablet,desktop]            |
| `class`       | `string`                                                 | `null`        | no       | Custom CSS class                             |
| `elementType` | `string`                                                 | `div`         | no       | HTML tag to render                           |
| `isFullWidth` | `boolean`                                                | `false`       | no       | Whether is component displayed in full width |
| `placement`   | [`bottom-left`, `bottom-right`, `top-left`, `top-right`] | `bottom-left` | no       | Alignment of the component                   |

### Trigger attributes

| Prop name       | Type     | Default    | Required | Description                |
| --------------- | -------- | ---------- | -------- | -------------------------- |
| `data-toggle`   | `string` | `dropdown` | yes      | Iterable selector          |
| `data-target`   | `string` | -          | yes      | Target selector            |
| `aria-expanded` | `string` | -          | no       | Aria expanded state (auto) |
| `aria-controls` | `string` | -          | no       | Aria controls state (auto) |

Other necessary attributes are toggled automatically, like `aria-controls` and `aria-expanded` when the component is loaded
or the width of the window is changed. There can be several triggers, the same rules apply to each.

### DropdownWrapper

| Prop name     | Type     | Default | Required | Description        |
| ------------- | -------- | ------- | -------- | ------------------ |
| `class`       | `string` | `null`  | no       | Custom CSS class   |
| `elementType` | `string` | `div`   | no       | HTML tag to render |

[dropdown]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Dropdown
