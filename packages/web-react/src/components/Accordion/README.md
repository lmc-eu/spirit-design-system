# Accordion

## Usage

### Default (Stay open)

```javascript
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '@lmc-eu/spirit-web-react/components';
import { AccordionOpenStateType } from '@lmc-eu/spirit-web-react/types';
```

```
const [openState, setOpenState] = useState<AccordionOpenStateType>(undefined);
```

```javascript
const toggle = (id) => {
  if (Array.isArray(openState)) {
    if (openState.includes(id)) {
      setOpenState(openState.filter((accordionId) => accordionId !== id));
    } else {
      setOpenState([...openState, id]);
    }
  } else if (openState === id) {
    setOpenState(undefined);
  } else {
    setOpenState(id);
  }
};
```

```javascript
<Accordion open={openState} toggle={toggle}>
  <AccordionItem id="accordion-item-example-0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="accordion-item-example-1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="accordion-item-example-2">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="accordion-item-example-3">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  ...
</Accordion>
```

### Default with opened on init

```
const [openState, setOpenState] = useState<AccordionOpenStateType>(['accordion-item-example-1']);
```

### Open only one at a time

```
const [openState, setOpenState] = useState<AccordionOpenStateType>('');
```

### Uncontrolled Accordion (Stay open)

```javascript
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from '@lmc-eu/spirit-web-react/components';
import { AccordionOpenStateType } from '@lmc-eu/spirit-web-react/types';
```

```javascript
<UncontrolledAccordion stayOpen>
  <AccordionItem id="accordion-item-example-0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="accordion-item-example-1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
</UncontrolledAccordion>
```

### Uncontrolled Accordion with default open value (Stay open)

```javascript
<UncontrolledAccordion defaultOpen={['accordion-item-example-1']} stayOpen>
  <AccordionItem id="accordion-item-example-0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="accordion-item-example-1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
</UncontrolledAccordion>
```

### Uncontrolled Accordion with open only one at a time

```javascript
<UncontrolledAccordion>
  <AccordionItem id="accordion-item-example-0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="accordion-item-example-1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
</UncontrolledAccordion>
```

### Uncontrolled Accordion with open only one at a time and default open value

```javascript
<UncontrolledAccordion defaultOpen="accordion-item-example-1">
  <AccordionItem id="accordion-item-example-0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="accordion-item-example-1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
</UncontrolledAccordion>
```

## Accordion Props

| Name          | Type                              | Default   | Required | Description                                      |
| ------------- | --------------------------------- | --------- | -------- | ------------------------------------------------ |
| `children`    | `ReactNode`                       | —         | ✓        | Accordion children’s nodes                       |
| `elementType` | [`section` \| `article` \| `div`] | `section` | ✕        | Type of element used as wrapper                  |
| `open`        | [`string` \| `string[]`]          | —         | ✕        | Open item or list of open items \*               |
| `toggle`      | `(id: string) => void`            | —         | ✕        | A generic handler for a single **AccordionItem** |

(\*) Depending on the type of default value, what is set as the default will affect whether one or more will be open at the same time.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## Uncontrolled Accordion Props

| Name          | Type                              | Default   | Required | Description                                    |
| ------------- | --------------------------------- | --------- | -------- | ---------------------------------------------- |
| `children`    | `ReactNode`                       | —         | ✓        | Accordion children’s nodes                     |
| `defaultOpen` | [`string` \| `string[]`]          | —         | ✕        | Default open item(s) \*                        |
| `elementType` | [`section` \| `article` \| `div`] | `section` | ✕        | Type of element used as wrapper                |
| `stayOpen`    | `bool`                            | —         | ✕        | Item stay open when another one is also opened |

(\*) If this attribute is an array, then the `stayOpen` parameter should also be set.

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## AccordionItem Props

| Name          | Type                              | Default   | Required | Description                                     |
| ------------- | --------------------------------- | --------- | -------- | ----------------------------------------------- |
| `children`    | `ReactNode`                       | —         | ✓        | Item children node                              |
| `elementType` | [`article` \| `section` \| `div`] | `article` | ✕        | Type of element used as wrapper for single item |
| `id`          | `string`                          | —         | ✓        | Item ID                                         |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## AccordionHeader Props

| Name          | Type          | Default | Required | Description             |
| ------------- | ------------- | ------- | -------- | ----------------------- |
| `children`    | `ReactNode`   | —       | ✓        | Header children node    |
| `elementType` | `ElementType` | `h3`    | ✕        | Type of element         |
| `slot`        | `ReactNode`   | —       | ✕        | Side slot in the header |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

## AccordionContent Props

| Name       | Type        | Default | Required | Description           |
| ---------- | ----------- | ------- | -------- | --------------------- |
| `children` | `ReactNode` | —       | ✓        | Content children node |

On top of the API options, the components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
