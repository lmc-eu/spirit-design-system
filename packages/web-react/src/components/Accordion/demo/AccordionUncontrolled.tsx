// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import UncontrolledAccordion from '../UncontrolledAccordion';
import AccordionItem from '../AccordionItem';
import AccordionHeader from '../AccordionHeader';
import AccordionContent from '../AccordionContent';
import { Link } from '../../Link';
import { Pill } from '../../Pill';
import { content } from './Accordion';

const Story: ComponentStory<typeof UncontrolledAccordion> = () => (
  <UncontrolledAccordion id="accordion-example" defaultOpen="accordion-item-example-1">
    <AccordionItem id="accordion-item-example-0">
      <AccordionHeader
        slot={
          <>
            <Link href="/">Link</Link>
            <Pill>3</Pill>
          </>
        }
      >
        Accordion Header #0
      </AccordionHeader>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
    <AccordionItem id="accordion-item-example-1">
      <AccordionHeader slot={<Pill>3</Pill>}>Accordion Header #1</AccordionHeader>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
    <AccordionItem id="accordion-item-example-2">
      <AccordionHeader>Accordion Header #2</AccordionHeader>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
    <AccordionItem id="accordion-item-example-3">
      <AccordionHeader slot={<Pill>3</Pill>}>Accordion Header #3</AccordionHeader>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  </UncontrolledAccordion>
);

export default Story;
