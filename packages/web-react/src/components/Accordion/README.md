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
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample2">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample3">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  ...
</Accordion>
```

### Default with opened on init

```
const [openState, setOpenState] = useState<AccordionOpenStateType>(['AccordionItemExample1']);
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
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
</UncontrolledAccordion>
```

### Uncontrolled Accordion with default open value (Stay open)

```javascript
<UncontrolledAccordion defaultOpen={['AccordionItemExample1']} stayOpen>
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
</UncontrolledAccordion>
```

### Uncontrolled Accordion with open only one at a time

```javascript
<UncontrolledAccordion>
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
</UncontrolledAccordion>
```

### Uncontrolled Accordion with open only one at a time and default open value

```javascript
<UncontrolledAccordion defaultOpen="AccordionItemExample1">
  <AccordionItem id="AccordionItemExample0">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader>Accordion Header</AccordionHeader>
    <AccordionContent>Accordion Content</AccordionContent>
  </AccordionItem>
</UncontrolledAccordion>
```

## Accordion Props

| Name               | Type                          | Default     | Required | Description                                      |
| ------------------ | ----------------------------- | ----------- | -------- | ------------------------------------------------ |
| `children`         | `ReactNode`                   | -           | ✔        | Accordion children's nodes                       |
| `elementType`      | `'section', 'article', 'div'` | `'section'` | ✕        | Type of element used as wrapper                  |
| `open`             | `string, string[]`            | -           | ✕        | Open item or list of open items \*               |
| `toggle`           | `(id: string) => void`        | -           | ✕        | A generic handler for a single **AccordionItem** |
| `UNSAFE_className` | `string`                      | -           | ✕        | Wrapper custom class name                        |
| `UNSAFE_style`     | `CSSProperties`               | -           | ✕        | Wrapper custom style                             |

(\*) Depending on the type of default value, what is set as the default will affect whether one or more will be open at the same time.

## Uncontrolled Accordion Props

| Name               | Type                          | Default     | Required | Description                                    |
| ------------------ | ----------------------------- | ----------- | -------- | ---------------------------------------------- |
| `children`         | `ReactNode`                   | -           | ✔        | Accordion children's nodes                     |
| `elementType`      | `'section', 'article', 'div'` | `'section'` | ✕        | Type of element used as wrapper                |
| `defaultOpen`      | `string, string[]`            | -           | ✕        | Default open item(s) \*                        |
| `stayOpen`         | `boolean`                     | -           | ✕        | Item stay open when another one is also opened |
| `UNSAFE_className` | `string`                      | -           | ✕        | Wrapper custom class name                      |
| `UNSAFE_style`     | `CSSProperties`               | -           | ✕        | Wrapper custom style                           |

(\*) If this attribute is an array, then the `stayOpen` parameter should also be set.

## AccordionItem Props

| Name               | Type                          | Default     | Required | Description                                     |
| ------------------ | ----------------------------- | ----------- | -------- | ----------------------------------------------- |
| `id`               | `string`                      | -           | ✔        | Item id                                         |
| `children`         | `ReactNode`                   | -           | ✔        | Item children node                              |
| `elementType`      | `'article', 'section', 'div'` | `'article'` | ✕        | Type of element used as wrapper for single item |
| `UNSAFE_className` | `string`                      | -           | ✕        | Item custom class name                          |
| `UNSAFE_style`     | `CSSProperties`               | -           | ✕        | Item custom style                               |

## AccordionHeader Props

| Name               | Type            | Default | Required | Description              |
| ------------------ | --------------- | ------- | -------- | ------------------------ |
| `children`         | `ReactNode`     | -       | ✔        | Header children node     |
| `slot`             | `ReactNode`     | -       | ✕        | Side slot in the header  |
| `UNSAFE_className` | `string`        | -       | ✕        | Header custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | Header custom style      |

## AccordionContent Props

| Name               | Type            | Default | Required | Description               |
| ------------------ | --------------- | ------- | -------- | ------------------------- |
| `children`         | `ReactNode`     | -       | ✔        | Content children node     |
| `UNSAFE_className` | `string`        | -       | ✕        | Content custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | ✕        | Content custom style      |
