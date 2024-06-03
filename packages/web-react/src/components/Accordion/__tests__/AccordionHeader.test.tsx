import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import AccordionHeader from '../AccordionHeader';
import AccordionItem from '../AccordionItem';

describe('AccordionHeader', () => {
  classNamePrefixProviderTest(AccordionHeader, 'Accordion__itemHeader');

  stylePropsTest(
    (props: Record<string, unknown>) => (
      <AccordionItem id="AccordionItemExample">
        <AccordionHeader {...props} data-testid="test-accordion-header" />
      </AccordionItem>
    ),
    'test-accordion-header',
  );

  restPropsTest(AccordionHeader, '.Accordion__itemHeader');

  it('should render text children', () => {
    const dom = render(<AccordionHeader>Hello World</AccordionHeader>);
    const element = dom.container.querySelector('.Accordion__itemHeader') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
