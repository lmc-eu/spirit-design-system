import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AccordionHeaderProps, AccordionOpenStateType } from '../../../types';
import { Link } from '../../Link';
import { Pill } from '../../Pill';
import toggleValueByType from '../demo/toggleValueByType';
import { Accordion, AccordionHeader, AccordionContent, AccordionItem } from '..';
import content from './content';

const meta: Meta<typeof AccordionHeader> = {
  title: 'Components/Accordion',
  component: AccordionHeader,
  argTypes: {
    children: {
      control: 'text',
    },
    elementType: {
      control: 'text',
      table: {
        defaultValue: { summary: 'h3' },
      },
    },
    slot: {
      control: 'select',
      options: ['pill', 'link & pill', undefined],
      description:
        'This is the place for the content of the slot. In the real code you can pass in any ' +
        'children you want. In this demo we have predefined options: `pill` and `link & pill`. ' +
        'Please note the predefined options in this demo are not customizable.',
      mapping: {
        pill: <Pill>3</Pill>,
        'link & pill': (
          <>
            <Link href="/">Link</Link>
            <Pill>3</Pill>
          </>
        ),
      },
    },
  },
  args: {
    children: 'Accordion Header #0',
    elementType: 'h3',
    slot: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof AccordionHeader>;

const AccordionWithHooks = (args: AccordionHeaderProps) => {
  const [openState, setOpenState] = useState<AccordionOpenStateType>('AccordionItemExample1');

  const toggle = (id: string) => {
    setOpenState(toggleValueByType(id, openState));
  };

  return (
    <Accordion open={openState} toggle={toggle}>
      <AccordionItem id="AccordionItemExample0">
        <AccordionHeader {...args} />
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

export const AccordionHeaderPlayground: Story = {
  name: 'AccordionHeader',
  render: (args) => <AccordionWithHooks {...args} />,
};
