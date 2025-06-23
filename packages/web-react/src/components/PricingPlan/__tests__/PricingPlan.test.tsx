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
import PricingPlan from '../PricingPlan';

describe('PricingPlan', () => {
  classNamePrefixProviderTest(PricingPlan, 'PricingPlan');

  stylePropsTest(PricingPlan);

  restPropsTest(PricingPlan, 'article');

  validHtmlAttributesTest(PricingPlan);

  ariaAttributesTest(PricingPlan);

  elementTypePropsTest(PricingPlan);

  describe('should render without side effects', () => {
    beforeEach(() => {
      render(<PricingPlan>Content</PricingPlan>);
    });

    it('should render children', () => {
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should render with correct class names', () => {
      expect(screen.getByRole('article')).toHaveClass('PricingPlan');
    });

    it('should render layout with correct class', () => {
      expect(screen.getByRole('article').firstElementChild).toHaveClass('PricingPlan__layout');
    });
  });

  it('should render with highlighted class when isHighlighted is true', () => {
    render(<PricingPlan isHighlighted>Content</PricingPlan>);

    expect(screen.getByRole('article')).toHaveClass('PricingPlan PricingPlan--highlighted');
  });

  it('should render with comparable class when isComparable is true', () => {
    render(<PricingPlan hasComparableFeatures>Content</PricingPlan>);

    expect(screen.getByRole('article')).toHaveClass('PricingPlan PricingPlan--comparableFeatures');
  });

  it('should render with custom rows number', () => {
    render(<PricingPlan rows={3}>Content</PricingPlan>);

    expect(screen.getByRole('article')).toHaveStyle('--spirit-pricing-plan-rows: 3;');
  });
});
