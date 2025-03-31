import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import Accordion from '../Accordion';

describe('Accordion', () => {
  classNamePrefixProviderTest(Accordion, 'Accordion');

  stylePropsTest((props: Record<string, unknown>) => {
    const toggle = () => null;

    return <Accordion open={[]} toggle={toggle} {...props} id="accordion-example" data-testid="test-accordion" />;
  }, 'test-accordion');

  restPropsTest(Accordion, '.Accordion');

  validHtmlAttributesTest(Accordion);

  it('should render text children', () => {
    const toggle = () => null;
    const dom = render(
      <Accordion open={[]} toggle={toggle}>
        Hello World
      </Accordion>,
    );
    const element = dom.container.querySelector('.Accordion') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });
});
