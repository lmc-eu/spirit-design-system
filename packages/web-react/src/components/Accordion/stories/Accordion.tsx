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
    Sit amet interdum, accumsan dolor sit amet posuere vel arcu mauris placerat non mauris, non sed vitae curabitur odio
    leo. Dignissim tristique, consequat vel arcu et nisi odio leo pretium accumsan condimentum at sem, mauris aenean
    aliquet enim. Neque sapien, volutpat erat id nunc facilisis eget ipsum phasellus, tellus ultricies sollicitudin
    ligula. Sem proin, nibh maximus donec nec commodo molestie nulla sapien nec commodo, commodo et fermentum et. Mauris
    posuere, mi orci et nisi et iaculis lorem fringilla sed mauris auctor, lorem tempus a pulvinar felis scelerisque.
    Suscipit vivamus, elit vel arcu lorem fringilla finibus quis sit amet ligula convallis, consectetur potenti aenean
    efficitur.
    <br />
    Non suspendisse, maximus suscipit tortor non mauris bibendum felis scelerisque bibendum, nam augue scelerisque non
    nulla. Erat nec, integer nec egestas integer consequat cursus sed porttitor, dolor sit amet lorem ipsum consectetur
    porta. Condimentum urna, suspendisse mauris ligula duis id vivamus quis odio eget, integer ornare fermentum et
    vehicula. Consequat bibendum, dui fusce gravida iaculis urna integer vitae id, ante purus nullam et nisl. Accumsan
    arcu, nunc nulla faucibus purus vivamus facilisis augue, volutpat convallis eget suscipit. Tellus nunc ut enim et,
    urna fusce pulvinar fusce et mauris donec, vitae odio morbi risus aliquet. et.
  </p>
);

const Story: ComponentStory<typeof Accordion> = () => {
  const [openState, setOpenState] = React.useState<AccordionOpenStateType>('AccordionItemExample1');

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
