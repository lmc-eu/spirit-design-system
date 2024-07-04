import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { Sizes } from '../../../constants';
import UNSTABLE_PartnerLogo from '../UNSTABLE_PartnerLogo';

describe('UNSTABLE_PartnerLogo', () => {
  classNamePrefixProviderTest(UNSTABLE_PartnerLogo, 'UNSTABLE_PartnerLogo');

  stylePropsTest(UNSTABLE_PartnerLogo);

  restPropsTest(UNSTABLE_PartnerLogo, 'div');

  it('should render children', () => {
    render(<UNSTABLE_PartnerLogo>Content</UNSTABLE_PartnerLogo>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should have correct className', () => {
    render(<UNSTABLE_PartnerLogo>Content</UNSTABLE_PartnerLogo>);

    expect(screen.getByText('Content')).toHaveClass('UNSTABLE_PartnerLogo');
  });

  it.each(Object.values(Sizes))('should return %s size', (size) => {
    render(<UNSTABLE_PartnerLogo size={size}>Content</UNSTABLE_PartnerLogo>);

    expect(screen.getByText('Content')).toHaveClass(`UNSTABLE_PartnerLogo--${size}`);
  });

  it('should render without safe area', () => {
    render(<UNSTABLE_PartnerLogo hasSafeAreaDisabled>Content</UNSTABLE_PartnerLogo>);

    expect(screen.getByText('Content')).toHaveClass('UNSTABLE_PartnerLogo--hasSafeAreaDisabled');
  });
});
