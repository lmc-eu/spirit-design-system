import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { ComponentProps } from 'react';
import { classNamePrefixProviderTest, validHtmlAttributesTest } from '@local/tests';
import { PricingPlanFeature } from '../../../types/pricingPlan';
import PricingPlanFeatureTitle from '../PricingPlanFeatureTitle';

const PricingPlanFeatureTitleWithRequiredProps = (props: Partial<ComponentProps<typeof PricingPlanFeatureTitle>>) => (
  <PricingPlanFeatureTitle feature={{ title: 'Test Feature' }} featureIndex={0} {...props} />
);

describe('PricingPlanFeatureTitle', () => {
  classNamePrefixProviderTest(PricingPlanFeatureTitleWithRequiredProps, 'PricingPlanBody__featureTitle');

  validHtmlAttributesTest(PricingPlanFeatureTitleWithRequiredProps);

  describe('should render without tooltip', () => {
    const feature: PricingPlanFeature = { title: 'Basic Feature' };

    beforeEach(() => {
      render(<PricingPlanFeatureTitle feature={feature} featureIndex={0} />);
    });

    it('should render the title', () => {
      expect(screen.getByText('Basic Feature')).toBeInTheDocument();
    });

    it('should not render tooltip trigger', () => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('should render inside dt element', () => {
      const title = screen.getByText('Basic Feature');

      expect(title.parentElement).toContainHTML('dt');
    });
  });

  describe('should render with tooltip', () => {
    const feature: PricingPlanFeature = {
      title: 'Feature with Tooltip',
      tooltipContent: 'Helpful information',
    };

    beforeEach(() => {
      render(<PricingPlanFeatureTitle feature={feature} featureIndex={1} />);
    });

    it('should render the title with tooltip trigger', () => {
      expect(screen.getByText('Feature with Tooltip')).toBeInTheDocument();
    });

    it('should render tooltip popover (initially hidden)', () => {
      const tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveClass('is-hidden');
    });

    it('should show tooltip on click', () => {
      const trigger = screen.getByText('Feature with Tooltip');
      const tooltip = screen.getByRole('tooltip');

      fireEvent.click(trigger);

      expect(tooltip).not.toHaveClass('is-hidden');
      expect(tooltip).toHaveTextContent('Helpful information');
    });

    it('should hide tooltip on close button click', () => {
      const trigger = screen.getByText('Feature with Tooltip');
      const closeButton = screen.getByRole('button', { name: 'close' });
      const tooltip = screen.getByRole('tooltip');

      fireEvent.click(trigger);

      expect(tooltip).not.toHaveClass('is-hidden');

      fireEvent.click(closeButton);

      expect(tooltip).toHaveClass('is-hidden');
    });
  });
});
