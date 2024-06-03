import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AccordionItemProps, AccordionOpenStateType } from '../../../types';
import { Link } from '../../Link';
import { Pill } from '../../Pill';
import toggleValueByType from '../demo/toggleValueByType';
import { Accordion, AccordionHeader, AccordionContent, AccordionItem } from '..';
import content from './content';

const meta: Meta<typeof AccordionItem> = {
  title: 'Components/Accordion',
  component: AccordionItem,
  argTypes: {
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'article' },
      },
    },
    id: {
      control: 'text',
    },
  },
  args: {
    elementType: 'article',
  },
};

export default meta;
type Story = StoryObj<typeof AccordionItem>;

const AccordionWithHooks = (args: AccordionItemProps) => {
  const [openState, setOpenState] = useState<AccordionOpenStateType>('AccordionItemExample1');

  const toggle = (id: string) => {
    setOpenState(toggleValueByType(id, openState));
  };

  return (
    <Accordion open={openState} toggle={toggle}>
      <AccordionItem {...args} id="AccordionItemExample0">
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

export const AccordionItemPlayground: Story = {
  name: 'AccordionItem',
  render: (args) => <AccordionWithHooks {...args} />,
};
