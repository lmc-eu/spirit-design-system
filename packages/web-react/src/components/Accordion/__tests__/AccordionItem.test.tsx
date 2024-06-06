import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Accordion from '../Accordion';
import AccordionItem from '../AccordionItem';
import AccordionHeader from '../AccordionHeader';
import AccordionContent from '../AccordionContent';

describe('AccordionItem', () => {
  classNamePrefixProviderTest(AccordionItem, 'Accordion__item');

  stylePropsTest(
    (props: Record<string, unknown>) => (
      <AccordionItem {...props} id="accordion-item-example" data-testid="test-accordion-item" />
    ),
    'test-accordion-item',
  );

  restPropsTest(AccordionItem, '.Accordion__item');

  it('should render text children', () => {
    const dom = render(<AccordionItem id="accordion-item-example">Hello World</AccordionItem>);
    const element = dom.container.querySelector('.Accordion__item') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('accordion item should be opened', () => {
    const toggle = () => null;
    const dom = render(
      <Accordion open={['accordion-item-example-1']} toggle={toggle}>
        <AccordionItem id="accordion-item-example-1">
          <AccordionHeader>header</AccordionHeader>
          <AccordionContent>content</AccordionContent>
        </AccordionItem>
        <AccordionItem id="accordion-item-example-2">
          <AccordionHeader>header</AccordionHeader>
          <AccordionContent>content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const itemElement = dom.container.querySelector('#accordion-item-example-1') as HTMLElement;
    const triggerElement = itemElement.querySelector('button') as HTMLElement;
    const collapseElement = itemElement.querySelector('.Collapse') as HTMLElement;

    expect(triggerElement).toHaveAttribute('aria-expanded', 'true');
    expect(collapseElement).toHaveClass('is-open');
  });
});
