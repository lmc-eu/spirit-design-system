import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { TooltipPopover } from '..';

describe('TooltipPopover', () => {
  classNamePrefixProviderTest(TooltipPopover, 'TooltipPopover');

  stylePropsTest((props) => <TooltipPopover {...props} data-testid="tooltip-popover-test" />, 'tooltip-popover-test');

  restPropsTest((props) => <TooltipPopover {...props} />, 'div');

  it('should render tooltip popover', () => {
    const popoverText = 'TooltipPopover';

    render(<TooltipPopover data-testid="test-tooltipPopover">{popoverText}</TooltipPopover>);

    expect(screen.getByTestId('test-tooltipPopover').textContent).toBe(popoverText);
  });
});
