import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import DropdownPopover from '../DropdownPopover';

describe('DropdownPopover', () => {
  classNamePrefixProviderTest(DropdownPopover, 'DropdownPopover');

  stylePropsTest(DropdownPopover);

  restPropsTest(DropdownPopover, '.DropdownPopover');

  it('should have children', () => {
    const dom = render(<DropdownPopover>Popover</DropdownPopover>);
    const popover = dom.container.querySelector('.DropdownPopover') as HTMLElement;

    expect(popover).toHaveTextContent('Popover');
  });
});
