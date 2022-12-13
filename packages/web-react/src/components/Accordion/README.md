# Accordion

## Usage

### Default (Stay open)

```javascript
import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionOpenStateType,
} from '@lmc-eu/spirit-web-react/components';
```

```
const [openState, setOpenState] = useState<AccordionOpenStateType>(undefined);
```

```javascript
const toggle = (id) => {
  if (Array.isArray(openState)) {
    if (open.includes(id)) {
      setOpenState(open.filter((accordionId) => accordionId !== id));
    } else {
      setOpenState([...open, id]);
    }
  } else if (open === id) {
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
  AccordionOpenStateType,
} from '@lmc-eu/spirit-web-react/components';
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

| Prop name          | Type                          | Default     | Required | Description                                      |
| ------------------ | ----------------------------- | ----------- | -------- | ------------------------------------------------ |
| `children`         | `ReactNode`                   | -           | yes      | Accordion children's nodes                       |
| `elementType`      | `'section', 'article', 'div'` | `'section'` | no       | Type of element used as wrapper                  |
| `open`             | `string, string[]`            | -           | no       | Open item or list of open items \*               |
| `toggle`           | `(id: string) => void`        | -           | no       | A generic handler for a single **AccordionItem** |
| `UNSAFE_className` | `string`                      | -           | no       | Wrapper custom class name                        |
| `UNSAFE_style`     | `CSSProperties`               | -           | no       | Wrapper custom style                             |

(\*) Depending on the type of default value, what is set as the default will affect whether one or more will be open at the same time.

## Uncontrolled Accordion Props

| Prop name          | Type                          | Default     | Required | Description                                    |
| ------------------ | ----------------------------- | ----------- | -------- | ---------------------------------------------- |
| `children`         | `ReactNode`                   | -           | yes      | Accordion children's nodes                     |
| `elementType`      | `'section', 'article', 'div'` | `'section'` | no       | Type of element used as wrapper                |
| `defaultOpen`      | `string, string[]`            | -           | no       | Default open item(s) \*                        |
| `stayOpen`         | `boolean`                     | -           | no       | Item stay open when another one is also opened |
| `UNSAFE_className` | `string`                      | -           | no       | Wrapper custom class name                      |
| `UNSAFE_style`     | `CSSProperties`               | -           | no       | Wrapper custom style                           |

(\*) If this attribute is an array, then the `stayOpen` parameter should also be set.

## AccordionItem Props

| Prop name          | Type                          | Default     | Required | Description                                     |
| ------------------ | ----------------------------- | ----------- | -------- | ----------------------------------------------- |
| `id`               | `string`                      | -           | yes      | Item id                                         |
| `children`         | `ReactNode`                   | -           | yes      | Item children node                              |
| `elementType`      | `'article', 'section', 'div'` | `'article'` | no       | Type of element used as wrapper for single item |
| `UNSAFE_className` | `string`                      | -           | no       | Item custom class name                          |
| `UNSAFE_style`     | `CSSProperties`               | -           | no       | Item custom style                               |

## AccordionHeader Props

| Prop name          | Type            | Default | Required | Description              |
| ------------------ | --------------- | ------- | -------- | ------------------------ |
| `children`         | `ReactNode`     | -       | yes      | Header children node     |
| `slot`             | `ReactNode`     | -       | no       | Side slot in the header  |
| `UNSAFE_className` | `string`        | -       | no       | Header custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | no       | Header custom style      |

## AccordionContent Props

| Prop name          | Type            | Default | Required | Description               |
| ------------------ | --------------- | ------- | -------- | ------------------------- |
| `children`         | `ReactNode`     | -       | yes      | Content children node     |
| `UNSAFE_className` | `string`        | -       | no       | Content custom class name |
| `UNSAFE_style`     | `CSSProperties` | -       | no       | Content custom style      |
