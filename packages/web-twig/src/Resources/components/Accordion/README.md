# Accordion

This is Twig implementation of the [Accordion] component.

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

| Prop name     | Type     | Default     | Required | Description                                                                                       |
| ------------- | -------- | ----------- | -------- | ------------------------------------------------------------------------------------------------- |
| `elementType` | `string` | `'section'` | no       | Custom element type                                                                               |
| `id`          | `string` | `null`      | optional | It depends on whether the "Stay open" functionality is used. If so, the id field is not required. |

### AccordionItem

| Prop name     | Type     | Default     | Required | Description         |
| ------------- | -------- | ----------- | -------- | ------------------- |
| `elementType` | `string` | `'article'` | no       | Custom element type |
| `id`          | `string` | `null`      | yes      | AccordionItem ID    |

### AccordionHeader

| Prop name     | Type     | Default | Required | Description              |
| ------------- | -------- | ------- | -------- | ------------------------ |
| `elementType` | `string` | `'h3'`  | no       | Custom element type      |
| `for`         | `string` | `null`  | yes      | AccordionContent ID      |
| `id`          | `string` | `null`  | yes      | AccordionHeader ID       |
| `isOpen`      | `string` | `false` | no       | Whether the item is open |
| `UNSAFE_slot` | `HTML`   | ``      | no       | Side slot in the header  |

### AccordionContent

| Prop name      | Type      | Default | Required | Description                                                                 |
| -------------- | --------- | ------- | -------- | --------------------------------------------------------------------------- |
| `id`           | `string`  | `null`  | yes      | AccordionContent ID                                                         |
| `isOpen`       | `boolean` | `false` | no       | If true, make the item open on page load                                    |
| `labelledById` | `string`  | `null`  | yes      | AccordionHeader ID                                                          |
| `parent`       | `string`  | `null`  | no       | A parent element selector that ensures that only one item is open at a time |

On top of the API options, you can add `data-*` or `aria-*` attributes to
further extend component's descriptiveness and accessibility. Also, UNSAFE styling props are available,
see the [Escape hatches][escape-hatches] section in README to learn how and when to use them.
These attributes will be passed to the topmost HTML element of the component.

[accordion]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Accordion
[escape-hatches]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig/README.md#escape-hatches
