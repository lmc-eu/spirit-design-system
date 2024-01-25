# Accordion

This is Twig implementation of the [Accordion][accordion] component.

## Default usage (Stay open)

```html
<Accordion>
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader id="AccordionItemExample0Header" for="AccordionItemExample0Content">
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample0Content" labelledById="AccordionItemExample0Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader id="AccordionItemExample1Header" for="AccordionItemExample1Content">
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample1Content" labelledById="AccordionItemExample1Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample2">
    <AccordionHeader id="AccordionItemExample2Header" for="AccordionItemExample2Content">
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample2Content" labelledById="AccordionItemExample2Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample3">
    <AccordionHeader id="AccordionItemExample3Header" for="AccordionItemExample3Content">
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample3Content" labelledById="AccordionItemExample3Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  ...
</Accordion>
```

## Usage with initial open state (Stay open)

```html
<Accordion>
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader id="AccordionItemExample0Header" for="AccordionItemExample0Content">
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample0Content" labelledById="AccordionItemExample0Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader id="AccordionItemExample1Header" for="AccordionItemExample1Content" isOpen>
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample1Content" labelledById="AccordionItemExample1Header" isOpen>
      Accordion Content
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Usage with only one open item at a time

```html
<Accordion id="AccordionExample">
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader id="AccordionItemExample0Header" for="AccordionItemExample0Content">
      Accordion Header
    </AccordionHeader>
    <AccordionContent
      id="AccordionItemExample0Content"
      labelledById="AccordionItemExample0Header"
      parent="AccordionExample"
    >
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader id="AccordionItemExample1Header" for="AccordionItemExample1Content">
      Accordion Header
    </AccordionHeader>
    <AccordionContent
      id="AccordionItemExample1Content"
      labelledById="AccordionItemExample1Header"
      parent="AccordionExample"
    >
      Accordion Content
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Slot

You can pass custom content (including HTML) into the slot inside Accordion
Header:

```html
<AccordionHeader
  id="AccordionItemExample1Header"
  for="AccordionItemExample1Content"
  UNSAFE_slot="<span>my content</span>"
>
  Accordion Item
</AccordionHeader>
```

⚠️ Due to TwigX limitations, TwigX content is **not allowed** inside `slot`.
To pass TwigX content into the slot, you must render it first and then pass the
rendered result into the slot:

```twig
{# This works #}

{% set slotContent %}
  <Pill color="selected">3</Pill>
{% endset %}

<AccordionHeader
    id="AccordionItemExample1Header"
    for="AccordionItemExample1Content"
    UNSAFE_slot={{ slotContent }}
>
    Accordion Item
</AccordionHeader>

{# This DOES NOT WORK #}

<AccordionHeader
    id="AccordionItemExample1Header"
    for="AccordionItemExample1Content"
    UNSAFE_slot="<Pill color="selected">3</Pill>"
>
    Accordion Item
</AccordionHeader>
```

## Usage without lexer:

```twig
{% embed "@spirit/accordion.twig" with { props: {
  id: 'AccordionExample',
} } %}
    {% block content %}
        {% embed "@spirit/accordionItem.twig" with { props: {
          id: `AccordionItemExample`,
        } } %}
            {% block content %}
                {% embed "@spirit/accordionHeader.twig" with { props: {
                  id: 'AccordionItemExampleHeader',
                  for: 'AccordionItemExampleContent',
                  isOpen: true,
                } } %}
                    {% block content %}
                        Accordion Header
                    {% endblock %}
                {% endembed %}
                {% embed "@spirit/accordionContent.twig" with { props: {
                  id: 'AccordionItemExampleContent',
                  labelledById: 'AccordionItemExampleHeader',
                  parent: 'AccordionExample',
                  isOpen: true,
                } } %}
                    {% block content %}
                        Accordion Content
                    {% endblock %}
                {% endembed %}
            {% endblock %}
        {% endembed %}
    {% endblock %}
{% endembed %}
```

## API

The Accordion itself consists of several components which cannot be used independently.

### Accordion

| Name          | Type     | Default   | Required | Description                                                                                       |
| ------------- | -------- | --------- | -------- | ------------------------------------------------------------------------------------------------- |
| `elementType` | `string` | `section` | ✕        | Custom element type                                                                               |
| `id`          | `string` | `null`    | optional | It depends on whether the "Stay open" functionality is used. If so, the id field is not required. |

### AccordionItem

| Name          | Type     | Default   | Required | Description         |
| ------------- | -------- | --------- | -------- | ------------------- |
| `elementType` | `string` | `article` | ✕        | Custom element type |
| `id`          | `string` | `null`    | ✔        | AccordionItem ID    |

### AccordionHeader

| Name          | Type     | Default | Required | Description              |
| ------------- | -------- | ------- | -------- | ------------------------ |
| `elementType` | `string` | `h3`    | ✕        | Custom element type      |
| `for`         | `string` | `null`  | ✔        | AccordionContent ID      |
| `id`          | `string` | `null`  | ✔        | AccordionHeader ID       |
| `isOpen`      | `string` | `false` | ✕        | Whether the item is open |
| `UNSAFE_slot` | `HTML`   | —       | ✕        | Side slot in the header  |

### AccordionContent

| Name           | Type     | Default | Required | Description                                                                 |
| -------------- | -------- | ------- | -------- | --------------------------------------------------------------------------- |
| `id`           | `string` | `null`  | ✔        | AccordionContent ID                                                         |
| `isOpen`       | `bool`   | `false` | ✕        | If true, make the item open on page load                                    |
| `labelledById` | `string` | `null`  | ✔        | AccordionHeader ID                                                          |
| `parent`       | `string` | `null`  | ✕        | A parent element selector that ensures that only one item is open at a time |

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

[accordion]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Accordion
[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#additional-attributes
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#style-props
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#escape-hatches
[web-js-api]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/src/scss/components/Accordion/README.md#javascript-plugin
[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
