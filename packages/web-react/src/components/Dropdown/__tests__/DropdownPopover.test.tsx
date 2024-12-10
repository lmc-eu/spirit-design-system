import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
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
