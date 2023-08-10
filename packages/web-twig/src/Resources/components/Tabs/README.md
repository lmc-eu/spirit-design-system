# Tabs

This is Twig implementation of the [Tabs] component.

Basic example usage:

```html
<TabList>
  <TabItem>
    <TabLink isSelected id="pane1-tab" target="pane1" data-spirit-toggle="tabs">Item selected</TabLink>
  </TabItem>
  <TabItem>
    <TabLink id="pane2-tab" target="pane2" data-spirit-toggle="tabs">Item</TabLink>
  </TabItem>
  <TabItem>
    <TabLink href="https://www.example.com">Item link</TabLink>
  </TabItem>
</TabList>
<TabPane id="pane1" isSelected label="pane1-tab">Pane 1</TabPane>
<TabPane id="pane2" label="pane2-tab">Pane 2</TabPane>
```

Without lexer:

```twig
{% embed "@spirit/tabList.twig" %}
    {% block content %}
        {% embed "@spirit/tabItem.twig" %}
            {% block content %}
                {% embed "@spirit/tabLink.twig" with { props: {
                  id: 'pane1-tab',
                  isSelected: true,
                  target: 'pane1',
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

### TabList

There is no API for TabList.

### TabItem

There is no API for TabItem.

### TabLink

| Prop name    | Type      | Default | Required | Description                  |
| ------------ | --------- | ------- | -------- | ---------------------------- |
| `href`       | `string`  | `null`  | no       | URL target of a link         |
| `isSelected` | `boolean` | `false` | no       | Whether is tab item selected |
| `target`     | `string`  | `null`  | no       | Target tab pane ID           |

### TabPane

| Prop name    | Type      | Default | Required | Description                    |
| ------------ | --------- | ------- | -------- | ------------------------------ |
| `id`         | `string ` | `null`  | yes      | Tab pane target identification |
| `isSelected` | `boolean` | `false` | no       | Whether is tab pane selected   |
| `label`      | `string`  | `null`  | no       | Aria label of the tab pane     |

You can add `id`, `data-*` or `aria-*` attributes to further extend component's
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

[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Tabs/README.md#javascript-plugin
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
[tabs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tabs
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
