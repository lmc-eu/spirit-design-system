# Tabs

This is Twig implementation of the [Tabs][tabs] component.

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

| Name         | Type     | Default | Required | Description                  |
| ------------ | -------- | ------- | -------- | ---------------------------- |
| `href`       | `string` | `null`  | ✕        | URL target of a link         |
| `isSelected` | `bool`   | `false` | ✕        | Whether is tab item selected |
| `target`     | `string` | `null`  | ✕        | Target tab pane ID           |

### TabPane

| Name         | Type      | Default | Required | Description                    |
| ------------ | --------- | ------- | -------- | ------------------------------ |
| `id`         | `string ` | `null`  | ✔        | Tab pane target identification |
| `isSelected` | `bool`    | `false` | ✕        | Whether is tab pane selected   |
| `label`      | `string`  | `null`  | ✕        | Aria label of the tab pane     |

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

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[tabs]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Tabs
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Tabs/README.md#javascript-plugin
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
