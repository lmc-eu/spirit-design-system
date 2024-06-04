import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import UNSTABLE_Divider from '../UNSTABLE_Divider';

describe('UNSTABLE_Divider', () => {
  classNamePrefixProviderTest(UNSTABLE_Divider, 'UNSTABLE_Divider');

  stylePropsTest(UNSTABLE_Divider);

  restPropsTest(UNSTABLE_Divider, 'hr');

  it('should have default classname', () => {
    render(<UNSTABLE_Divider />);

    expect(screen.getByRole('separator')).toHaveClass('UNSTABLE_Divider');
  });
});
