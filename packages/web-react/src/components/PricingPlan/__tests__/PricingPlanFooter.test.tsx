import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import PricingPlanFooter from '../PricingPlanFooter';

describe('PricingPlanFooter', () => {
  classNamePrefixProviderTest(PricingPlanFooter, 'PricingPlanFooter');

  stylePropsTest(PricingPlanFooter);

  restPropsTest(PricingPlanFooter, 'footer');

  validHtmlAttributesTest(PricingPlanFooter);

  ariaAttributesTest(PricingPlanFooter);

  elementTypePropsTest(PricingPlanFooter);

  beforeEach(() => {
    render(<PricingPlanFooter>Test footer content</PricingPlanFooter>);
  });

  it('should render children correctly', () => {
    expect(screen.getByText('Test footer content')).toBeInTheDocument();
  });

  it('should render root with correct class', () => {
    expect(screen.getByRole('contentinfo')).toHaveClass('PricingPlanFooter');
  });
});
