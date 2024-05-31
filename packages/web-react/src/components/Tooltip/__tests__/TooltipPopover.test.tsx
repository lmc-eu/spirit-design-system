import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { TooltipPopover } from '..';

describe('TooltipPopover', () => {
  classNamePrefixProviderTest(TooltipPopover, 'Tooltip');

  stylePropsTest((props) => <TooltipPopover {...props} data-testid="TooltipPopover-test" />, 'TooltipPopover-test');

  restPropsTest((props) => <TooltipPopover {...props} />, 'div');

  it('should render tooltip popover', () => {
    const popoverText = 'TooltipPopover';

    render(<TooltipPopover data-testid="test-tooltipPopover">{popoverText}</TooltipPopover>);

    expect(screen.getByTestId('test-tooltipPopover').textContent).toBe(popoverText);
  });
});
