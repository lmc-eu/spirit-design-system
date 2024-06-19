import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import UNSTABLE_ActionLayout from '../UNSTABLE_ActionLayout';

describe('UNSTABLE_ActionLayout', () => {
  classNamePrefixProviderTest(UNSTABLE_ActionLayout, 'UNSTABLE_ActionLayout');

  stylePropsTest(UNSTABLE_ActionLayout);

  restPropsTest(UNSTABLE_ActionLayout, 'div');

  beforeEach(() => {
    render(<UNSTABLE_ActionLayout>Content</UNSTABLE_ActionLayout>);
  });

  it('should render content', () => {
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should render children', () => {
    expect(screen.getByText('Content')).toHaveClass('UNSTABLE_ActionLayout');
  });
});
