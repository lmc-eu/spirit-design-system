import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import AccordionItem from '../AccordionItem';
import AccordionContent from '../AccordionContent';

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
