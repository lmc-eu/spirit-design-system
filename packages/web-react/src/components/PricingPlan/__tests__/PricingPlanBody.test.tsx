import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import PricingPlanBody from '../PricingPlanBody';

describe('PricingPlanBody', () => {
  classNamePrefixProviderTest(PricingPlanBody, 'PricingPlanBody');

  stylePropsTest(PricingPlanBody);

  restPropsTest(PricingPlanBody, 'div');

  validHtmlAttributesTest(PricingPlanBody);

  ariaAttributesTest(PricingPlanBody);

  describe('should render without side effects', () => {
    beforeEach(() => {
      render(<PricingPlanBody description="Test description" />);
    });

    it('should render description', () => {
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('should render root with correct class', () => {
      expect(screen.getByText('Test description').parentElement).toHaveClass('PricingPlanBody');
    });

    it('should render empty feature list if none provided', () => {
      const featureList = screen.getByText('Test description').nextElementSibling;

      expect(featureList).toHaveClass('PricingPlanBody__featureList');
      expect(featureList?.tagName).toBe('DL');
      expect(featureList?.children).toHaveLength(0);
    });
  });

  it('should render all features correctly', () => {
    const features = [
      { title: 'Feature 1', description: 'Description 1' },
      { title: 'Feature 2', description: 'Description 2' },
    ];

    render(<PricingPlanBody features={features} />);

    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('should render features with correct structure', () => {
    const features = [
      { title: 'Feature 1', description: 'Description 1' },
      { title: 'Feature 2', description: 'Description 2' },
    ];

    render(<PricingPlanBody features={features} />);

    const titles = screen.getAllByRole('term');
    const descriptions = screen.getAllByRole('definition');

    expect(titles).toHaveLength(features.length);
    expect(descriptions).toHaveLength(features.length);

    titles.forEach((title, index) => {
      const description = descriptions[index];

      expect(title).toHaveClass('PricingPlanBody__featureTitle');
      expect(description).toHaveClass('PricingPlanBody__featureDescription');
      expect(title.parentElement).toHaveClass('PricingPlanBody__featureItem');
    });
  });
});
