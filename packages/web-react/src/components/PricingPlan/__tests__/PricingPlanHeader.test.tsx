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
import { ButtonLink } from '../../ButtonLink';
import PricingPlanHeader from '../PricingPlanHeader';

describe('PricingPlanHeader', () => {
  classNamePrefixProviderTest(PricingPlanHeader, 'PricingPlanHeader');

  stylePropsTest(PricingPlanHeader);

  restPropsTest(PricingPlanHeader, 'header');

  validHtmlAttributesTest(PricingPlanHeader);

  ariaAttributesTest(PricingPlanHeader);

  describe('should render individual props correctly', () => {
    it('should render title', () => {
      render(<PricingPlanHeader title="Test Title" />);
      const title = screen.getByText('Test Title');

      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('PricingPlanHeader__title');
    });

    it('should render subtitle', () => {
      render(<PricingPlanHeader subtitle="Test Subtitle" />);
      const subtitle = screen.getByText('Test Subtitle');

      expect(subtitle).toBeInTheDocument();
      expect(subtitle).toHaveClass('PricingPlanHeader__subtitle');
    });

    it('should render price', () => {
      render(<PricingPlanHeader price="123 EUR" />);
      const price = screen.getByText('123 EUR');

      expect(price).toBeInTheDocument();
      expect(price).toHaveClass('PricingPlanHeader__price');
    });

    it('should render badge', () => {
      render(<PricingPlanHeader badge="Badge" />);
      const badge = screen.getByText('Badge');

      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass('PricingPlanHeader__badge');
    });

    it('should render note', () => {
      render(<PricingPlanHeader note="Note text" />);
      const note = screen.getByText('Note text');

      expect(note).toBeInTheDocument();
      expect(note).toHaveClass('PricingPlanHeader__note');
    });

    it('should render action', () => {
      render(
        <PricingPlanHeader
          action={
            <ButtonLink href="#" size="large">
              Click me
            </ButtonLink>
          }
        />,
      );
      const button = screen.getByRole('button', { name: 'Click me' });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('Button Button--primary Button--large');
    });
  });

  it('should render with default structure', () => {
    render(<PricingPlanHeader title="Sample" />);
    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('PricingPlanHeader');
    expect(header.firstElementChild).toHaveClass('PricingPlanHeader__content');
  });

  it('should render structure with badge', () => {
    render(<PricingPlanHeader title="Sample" badge="New" />);
    const header = screen.getByRole('banner');
    const badge = screen.getByText('New');

    expect(header).toBeInTheDocument();
    expect(header.children).toHaveLength(2);
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('PricingPlanHeader__badge');
    expect(badge.nextElementSibling).toHaveClass('PricingPlanHeader__content');
  });
});
