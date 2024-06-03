import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Accordion from '../Accordion';
import AccordionContent from '../AccordionContent';
import AccordionHeader from '../AccordionHeader';
import AccordionItem from '../AccordionItem';

describe('AccordionItem', () => {
  classNamePrefixProviderTest(AccordionItem, 'Accordion__item');

  stylePropsTest(
    (props: Record<string, unknown>) => (
      <AccordionItem {...props} id="AccordionItemExample" data-testid="test-accordion-item" />
    ),
    'test-accordion-item',
  );

  restPropsTest(AccordionItem, '.Accordion__item');

  it('should render text children', () => {
    const dom = render(<AccordionItem id="AccordionItemExample">Hello World</AccordionItem>);
    const element = dom.container.querySelector('.Accordion__item') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('accordion item should be opened', () => {
    const toggle = () => null;
    const dom = render(
      <Accordion open={['AccordionItemExample1']} toggle={toggle}>
        <AccordionItem id="AccordionItemExample1">
          <AccordionHeader>header</AccordionHeader>
          <AccordionContent>content</AccordionContent>
        </AccordionItem>
        <AccordionItem id="AccordionItemExample2">
          <AccordionHeader>header</AccordionHeader>
          <AccordionContent>content</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    const itemElement = dom.container.querySelector('#AccordionItemExample1') as HTMLElement;
    const triggerElement = itemElement.querySelector('button') as HTMLElement;
    const collapseElement = itemElement.querySelector('.Collapse') as HTMLElement;

    expect(triggerElement).toHaveAttribute('aria-expanded', 'true');
    expect(collapseElement).toHaveClass('is-open');
  });
});
