import figma from '@figma/code-connect';
import React, { useState } from 'react';
import type { SpiritAccordionProps } from '../../../types';
import { Pill } from '../../Pill';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '..';

const AccordionExample = ({
  isItemOpen,
  ...props
}: Omit<SpiritAccordionProps, 'toggle' | 'open'> & {
  isItemOpen: boolean;
}) => {
  const [openState, setOpenState] = useState(isItemOpen ? 'accordion-item-example-0' : undefined);

  return (
    <Accordion
      {...props}
      open={openState}
      toggle={() => {
        setOpenState(openState === 'accordion-item-example-0' ? undefined : 'accordion-item-example-0');
      }}
    >
      <AccordionItem id="accordion-item-example-0">
        <AccordionHeader slot={<Pill>3</Pill>}>Accordion Header #0</AccordionHeader>
        <AccordionContent>Replace with content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

figma.connect(Accordion, '<FIGMA_FILE_ID>?node-id=8579%3A3560', {
  props: {
    isItemOpen: figma.boolean('Open'),
  },
  example: AccordionExample,
});
