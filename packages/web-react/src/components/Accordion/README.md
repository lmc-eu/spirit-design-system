# Accordion

## Usage

### Default (Always open)

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
    <AccordionHeader>Accordion header #0</AccordionHeader>
    <AccordionContent>{content}</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample1">
    <AccordionHeader>Accordion header #1 (open)</AccordionHeader>
    <AccordionContent>{content}</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample2">
    <AccordionHeader>Accordion header #2</AccordionHeader>
    <AccordionContent>{content}</AccordionContent>
  </AccordionItem>
  <AccordionItem id="AccordionItemExample3">
    <AccordionHeader>Accordion header #3</AccordionHeader>
    <AccordionContent>{content}</AccordionContent>
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

## Accordion Props

| Prop name          | Type                          | Default     | Required | Description                                      |
| ------------------ | ----------------------------- | ----------- | -------- | ------------------------------------------------ |
| `id`               | `string`                      | -           | no       | Accordion id                                     |
| `children`         | `ReactNode`                   | -           | yes      | Accordion children node                          |
| `elementType`      | `'section', 'article', 'div'` | `'section'` | no       | Type of element used as wrapper                  |
| `open`             | `string, string[]`            | `[]`        | no       | Open state \*                                    |
| `toggle`           | `(id: string) => void`        | -           | no       | A generic handler for a single **AccordionItem** |
| `UNSAFE_className` | `string`                      | -           | no       | Wrapper custom class name                        |
| `UNSAFE_style`     | `CSSProperties`               | -           | no       | Wrapper custom style                             |

(\*) Depending on the type of default value, what is set as the default will affect whether one or more will be open at the same time.

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
