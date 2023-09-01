import React, { useState } from 'react';
import { Markdown } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { AccordionContentProps, AccordionOpenStateType } from '../../types';
import { Link } from '../Link';
import { Pill } from '../Pill';
import toggleValueByType from './demo/toggleValueByType';
import content from './stories/content';
import ReadMe from './README.md';
import { Accordion, AccordionHeader, AccordionContent, AccordionItem } from '.';

const meta: Meta<typeof AccordionContent> = {
  title: 'Components/Accordion',
  component: AccordionContent,
  parameters: {
    docs: {
      page: () => <Markdown>{ReadMe}</Markdown>,
    },
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Accordion Content',
  },
};

export default meta;
type Story = StoryObj<typeof AccordionContent>;

const AccordionWithHooks = (args: AccordionContentProps) => {
  const [openState, setOpenState] = useState<AccordionOpenStateType>('AccordionItemExample0');

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
        <AccordionContent {...args} />
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

export const AccordionContentPlayground: Story = {
  name: 'AccordionContent',
  render: (args) => <AccordionWithHooks {...args} />,
};
