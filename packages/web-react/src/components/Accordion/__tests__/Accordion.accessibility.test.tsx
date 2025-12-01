import { render } from '@testing-library/react';
import React from 'react';
import { guardMissingSelector } from '@local/tests/testUtils/guardMissingSelector';
import { runAxe } from '@local/tests/testUtils/runAxe';
import Accordion from '../Accordion';
import AccordionContent from '../AccordionContent';
import AccordionHeader from '../AccordionHeader';
import AccordionItem from '../AccordionItem';

jest.mock('../../../hooks/useIcon');

describe('Accordion accessibility', () => {
  it('should be accessible when open', async () => {
    const { container } = render(
      <Accordion open="accordion-item-1" toggle={() => {}}>
        <AccordionItem id="accordion-item-1">
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionContent>Accordion Content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const element = container.querySelector('#accordion-item-1');

    guardMissingSelector('#accordion-item-1', element);

    const results = await runAxe(element);

    expect(results).toHaveNoAxeViolations();
  });
});
