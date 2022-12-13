// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { AccordionOpenStateType } from '../../../types';
import Accordion from '../Accordion';
import AccordionItem from '../AccordionItem';
import AccordionHeader from '../AccordionHeader';
import AccordionContent from '../AccordionContent';
import toggleValueByType from './toggleValueByType';
import { Link } from '../../Link';
import { Pill } from '../../Pill';
import { content } from './Accordion';

const Story: ComponentStory<typeof Accordion> = () => {
  const [openState, setOpenState] = React.useState<AccordionOpenStateType>(['AccordionItemExample1']);

  const toggle = (id: string) => {
    setOpenState(toggleValueByType(id, openState));
  };

  return (
    <Accordion open={openState} toggle={toggle}>
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
    </Accordion>
  );
};

export default Story;
