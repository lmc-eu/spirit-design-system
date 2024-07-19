import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import Divider from '../Divider';

describe('Divider', () => {
  classNamePrefixProviderTest(Divider, 'Divider');

  stylePropsTest(Divider);

  restPropsTest(Divider, 'hr');

  it('should have default classname', () => {
    render(<Divider />);

    expect(screen.getByRole('separator')).toHaveClass('Divider');
  });
});
