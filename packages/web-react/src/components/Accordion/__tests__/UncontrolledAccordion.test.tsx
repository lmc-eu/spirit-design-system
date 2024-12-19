import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import AccordionContent from '../AccordionContent';
import AccordionHeader from '../AccordionHeader';
import AccordionItem from '../AccordionItem';
import UncontrolledAccordion from '../UncontrolledAccordion';

jest.mock('../../../hooks/useIcon');

describe('UncontrolledAccordion', () => {
  classNamePrefixProviderTest(UncontrolledAccordion, 'Accordion');

  stylePropsTest(
    (props: Record<string, unknown>) => (
      <UncontrolledAccordion {...props} id="accordion-example" data-testid="test-accordion" />
    ),
    'test-accordion',
  );

  restPropsTest(UncontrolledAccordion, '.Accordion');

  it('should render text children', () => {
    const dom = render(<UncontrolledAccordion>Hello World</UncontrolledAccordion>);
    const element = dom.container.querySelector('.Accordion') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('should toggle an accordion', () => {
    const dom = render(
      <UncontrolledAccordion>
        <AccordionItem id="accordion-item-example">
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionContent>Accordion Content</AccordionContent>
        </AccordionItem>
      </UncontrolledAccordion>,
    );
    const element = dom.container.querySelector('.Collapse') as HTMLElement;
    const trigger = dom.container.querySelector('.Accordion__itemToggle') as HTMLElement;

    fireEvent.click(trigger);

    expect(element).toHaveClass('is-open');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
