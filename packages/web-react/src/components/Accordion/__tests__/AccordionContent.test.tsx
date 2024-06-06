import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import AccordionContent from '../AccordionContent';
import AccordionItem from '../AccordionItem';

describe('AccordionContent', () => {
  classNamePrefixProviderTest(AccordionContent, 'Collapse');

  stylePropsTest(
    (props: Record<string, unknown>) => (
      <AccordionItem id="accordion-item-example">
        <AccordionContent {...props} data-testid="test-accordion-content" />
      </AccordionItem>
    ),
    'test-accordion-content',
  );

  restPropsTest(AccordionContent, '.Accordion__content');

  it('should render text children', () => {
    const dom = render(<AccordionContent>Hello World</AccordionContent>);
    const element = dom.container.querySelector('.Collapse') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
