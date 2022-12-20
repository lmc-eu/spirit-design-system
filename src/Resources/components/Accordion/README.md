# Accordion

This is Twig implementation of the [Accordion] component.

## Default usage (Stay open)

```html
<Accordion>
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader
      id="AccordionItemExample0Header"
      for="#AccordionItemExample0Content"
      slot="<Link href='#'>Link</Link><Pill color='selected'>3</Pill>"
    >
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample0Content" labelId="AccordionItemExample0Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader
      id="AccordionItemExample1Header"
      for="AccordionItemExample1Content"
      slot="<Pill color='selected'>3</Pill>"
    >
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample1Content" labelId="AccordionItemExample1Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample2">
    <AccordionHeader id="AccordionItemExample2Header" for="AccordionItemExample2Content">
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample2Content" labelId="AccordionItemExample2Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample3">
    <AccordionHeader
      id="AccordionItemExample3Header"
      for="AccordionItemExample3Content"
      slot="<Link href='#'>Link</Link>"
    >
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample3Content" labelId="AccordionItemExample3Header">
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
    <AccordionHeader
      id="AccordionItemExample0Header"
      for="#AccordionItemExample0Content"
      slot="<Link href='#'>Link</Link><Pill color='selected'>3</Pill>"
    >
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample0Content" labelId="AccordionItemExample0Header">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader
      id="AccordionItemExample1Header"
      for="AccordionItemExample1Content"
      slot="<Pill color='selected'>3</Pill>"
      isOpen
    >
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample1Content" labelId="AccordionItemExample1Header" isOpen>
      Accordion Content
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Usage with open only item one at a time

```html
<Accordion id="AccordionExample">
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader
      id="AccordionItemExample0Header"
      for="#AccordionItemExample0Content"
      slot="<Link href='#'>Link</Link><Pill color='selected'>3</Pill>"
    >
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample0Content" labelId="AccordionItemExample0Header" parent="AccordionExample">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader
      id="AccordionItemExample1Header"
      for="AccordionItemExample1Content"
      slot="<Pill color='selected'>3</Pill>"
    >
      Accordion Header
    </AccordionHeader>
    <AccordionContent id="AccordionItemExample1Content" labelId="AccordionItemExample1Header" parent="AccordionExample">
      Accordion Content
    </AccordionContent>
  </AccordionItem>
</Accordion>
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
                  slot: '<Link href="#">Link</Link><Pill color="selected">3</Pill>',
                  isOpen: true,
                } } %}
                    {% block content %}
                        Accordion Header
                    {% endblock %}
                {% endembed %}
                {% embed "@spirit/accordionContent.twig" with { props: {
                  id: 'AccordionItemExampleContent',
                  labelId: 'AccordionItemExampleHeader',
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
| `id`          | `string` | `null`      | optional | It depends on whether the "Stay open" functionality is used. If so, the id field is not required. |
| `class`       | `string` | `null`      | no       | Additional class name                                                                             |
| `elementType` | `string` | `'section'` | no       | Custom element type                                                                               |

### AccordionItem

| Prop name     | Type     | Default     | Required | Description           |
| ------------- | -------- | ----------- | -------- | --------------------- |
| `id`          | `string` | `null`      | yes      | AccordionItem ID      |
| `class`       | `string` | `null`      | no       | Additional class name |
| `elementType` | `string` | `'article'` | no       | Custom element type   |

### AccordionHeader

| Prop name     | Type     | Default | Required | Description              |
| ------------- | -------- | ------- | -------- | ------------------------ |
| `id`          | `string` | `null`  | yes      | AccordionHeader ID       |
| `class`       | `string` | `null`  | no       | Additional class name    |
| `for`         | `string` | `null`  | yes      | AccordionContent ID      |
| `elementType` | `string` | `'h3'`  | no       | Custom element type      |
| `slot`        | `HTML`   | ``      | no       | Side slot in the header  |
| `isOpen`      | `string` | `false` | no       | Whether the item is open |

### AccordionContent

| Prop name | Type     | Default | Required | Description                                                                 |
| --------- | -------- | ------- | -------- | --------------------------------------------------------------------------- |
| `id`      | `string` | `null`  | yes      | AccordionContent ID                                                         |
| `class`   | `string` | `null`  | no       | Additional class name                                                       |
| `labelId` | `string` | `null`  | yes      | AccordionHeader ID                                                          |
| `parent`  | `string` | `null`  | no       | A parent element selector that ensures that only one item is open at a time |
| `isOpen`  | `string` | `false` | no       | Whether the item is open                                                    |

[accordion]: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web/src/scss/components/Accordion
