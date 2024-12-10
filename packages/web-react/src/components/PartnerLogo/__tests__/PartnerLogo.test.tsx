import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import { Sizes } from '../../../constants';
import PartnerLogo from '../PartnerLogo';

describe('PartnerLogo', () => {
  classNamePrefixProviderTest(PartnerLogo, 'PartnerLogo');

  stylePropsTest(PartnerLogo);

  restPropsTest(PartnerLogo, 'div');

  it('should render children', () => {
    render(<PartnerLogo>Content</PartnerLogo>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should have correct className', () => {
    render(<PartnerLogo>Content</PartnerLogo>);

    expect(screen.getByText('Content')).toHaveClass('PartnerLogo PartnerLogo--medium PartnerLogo--safeArea');
  });

  it.each(Object.values(Sizes))('should return %s size', (size) => {
    render(<PartnerLogo size={size}>Content</PartnerLogo>);

    expect(screen.getByText('Content')).toHaveClass(`PartnerLogo--${size}`);
  });

  it('should render without safe area', () => {
    render(<PartnerLogo hasSafeArea={false}>Content</PartnerLogo>);

    expect(screen.getByText('Content')).not.toHaveClass('PartnerLogo--safeArea');
  });
});
