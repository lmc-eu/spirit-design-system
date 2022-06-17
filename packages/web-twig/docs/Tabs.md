# Tabs

This is Twig implementation of the [Tabs] component.

Basic example usage:

```html
<Tabs>
  <TabsItem>
    <TabsLink isSelected id="pane1-tab" ariaTarget="pane1">
      Item selected
    </TabsLink>
  </TabsItem>
  <TabsItem>
    <TabsLink id="pane2-tab" ariaTarget="pane2">
      Item
    </TabsLink>
  </TabsItem>
  <TabsItem>
    <TabsLink href="https://www.example.com">
      Item link
    </TabsLink>
  </TabsItem>
</Tabs>
<TabsPane id="pane1" isSelected label="pane1-tab">
  Pane 1
</TabsPane>
<TabsPane id="pane2" label="pane2-tab">
  Pane 2
</TabsPane>
```

Without lexer:
```twig
{% embed "@spirit/tabs.twig" %}
    {% block content %}
        {% embed "@spirit/tabsItem.twig" %}
            {% block content %}
                {% embed "@spirit/tabsLink.twig" with { props: {
                  isSelected: true,
                  id: 'panel1-tab',
                  target: 'panel1',
                } } %}
                    {% block content %}
                        Item selected
                    {% endblock %}
                {% endembed %}
            {% endblock %}
        {% endembed %}
    {% endblock %}
{% endembed %}
```

## API

The Tabs itself consists of many components which cannot be used independently.

### Tabs

| Prop name | Type     | Default | Required | Description           |
|-----------|----------|---------|----------|-----------------------|
| `class`   | `string` | `null`  | no       | Additional class name |

### TabsItem

| Prop name | Type     | Default | Required | Description           |
|-----------|----------|---------|----------|-----------------------|
| `class`   | `string` | `null`  | no       | Additional class name |

### TabsLink

| Prop name    | Type      | Default | Required | Description                  |
|--------------|-----------|---------|----------|------------------------------|
| `class`      | `string`  | `null`  | no       | Additional class name        |
| `href`       | `string`  | `null`  | no       | URL target of a link         |
| `id`         | `string ` | `null`  | no       | Tab item identification      |
| `isSelected` | `boolean` | `false` | no       | Whether is tab item selected |
| `ariaTarget` | `string`  | `null`  | no       | Target pane of the tab item  |

### TabsPane

| Prop name    | Type      | Default | Required | Description                    |
|--------------|-----------|---------|----------|--------------------------------|
| `class`      | `string`  | `null`  | no       | Additional class name          |
| `id`         | `string ` | `null`  | yes      | Tab pane target identification |
| `isSelected` | `boolean` | `false` | no       | Whether is tab pane selected   |
| `label`      | `string`  | `null`  | no       | Aria label of the tab pane     |

[Tabs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tabs
