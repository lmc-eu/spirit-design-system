import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Link } from '../../Link';
import { Pill } from '../../Pill';
import { Accordion, AccordionHeader, AccordionContent, AccordionItem, UncontrolledAccordion } from '..';
import content from './content';

const meta: Meta<typeof UncontrolledAccordion> = {
  title: 'Components/Accordion',
  component: UncontrolledAccordion,
  argTypes: {
    defaultOpen: {
      control: 'array',
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'section' },
      },
    },
    stayOpen: {
      control: 'boolean',
    },
  },
  args: {
    defaultOpen: ['AccordionItemExample1'],
    elementType: 'section',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const UncontrolledAccordionPlayground: Story = {
  name: 'UncontrolledAccordion',
  render: (args) => (
    <UncontrolledAccordion {...args} id="AccordionExample">
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
  ),
};
