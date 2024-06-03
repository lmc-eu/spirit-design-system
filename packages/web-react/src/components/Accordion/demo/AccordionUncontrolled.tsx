// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Link } from '../../Link';
import { Pill } from '../../Pill';
import AccordionContent from '../AccordionContent';
import AccordionHeader from '../AccordionHeader';
import AccordionItem from '../AccordionItem';
import UncontrolledAccordion from '../UncontrolledAccordion';
import { content } from './Accordion';

const Story: ComponentStory<typeof UncontrolledAccordion> = () => (
  <UncontrolledAccordion id="AccordionExample" defaultOpen="AccordionItemExample1">
    <AccordionItem id="AccordionItemExample0">
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
    <AccordionItem id="AccordionItemExample1">
      <AccordionHeader slot={<Pill>3</Pill>}>Accordion Header #1</AccordionHeader>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
    <AccordionItem id="AccordionItemExample2">
      <AccordionHeader>Accordion Header #2</AccordionHeader>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
    <AccordionItem id="AccordionItemExample3">
      <AccordionHeader slot={<Pill>3</Pill>}>Accordion Header #3</AccordionHeader>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  </UncontrolledAccordion>
);

export default Story;
