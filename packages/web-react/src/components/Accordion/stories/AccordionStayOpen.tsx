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

export const content = (
  <p>
    Condimentum odio, pulvinar et sollicitudin accumsan ac hendrerit vestibulum commodo, molestie laoreet dui sit amet.
    Molestie consectetur, sed ac felis scelerisque lectus accumsan purus id dolor sed vitae, praesent aliquam dolor quis
    ornare. Nulla sit amet, rhoncus at quis odio et iaculis lacinia suscipit vivamus sodales, nunc id condimentum felis.
    Consectetur nec commodo, praesent et elit magna purus molestie cursus molestie, libero ut venenatis erat id et nisi.
    Quam posuere, aliquam quam leo vitae tellus semper eget nunc, ultricies adipiscing sit amet accumsan. Lorem rutrum,
    porttitor ante mauris suspendisse ultricies consequat purus, congue a commodo magna et.
  </p>
);

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
              <Link href="#">Link</Link>
              <Pill>3</Pill>
            </>
          }
        >
          Accordion header #0
        </AccordionHeader>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
      <AccordionItem id="AccordionItemExample1">
        <AccordionHeader slot={<Pill>3</Pill>}>Accordion header #1 (open)</AccordionHeader>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
      <AccordionItem id="AccordionItemExample2">
        <AccordionHeader>Accordion header #2</AccordionHeader>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
      <AccordionItem id="AccordionItemExample3">
        <AccordionHeader slot={<Pill>3</Pill>}>Accordion header #3</AccordionHeader>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Story;
