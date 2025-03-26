import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import { TooltipPopover } from '..';

describe('TooltipPopover', () => {
  classNamePrefixProviderTest(TooltipPopover, 'TooltipPopover');

  stylePropsTest((props) => <TooltipPopover {...props} data-testid="tooltip-popover-test" />, 'tooltip-popover-test');

  restPropsTest((props) => <TooltipPopover {...props} />, 'div');

  validHtmlAttributesTest(TooltipPopover);

  it('should render tooltip popover', () => {
    const popoverText = 'TooltipPopover';

    render(<TooltipPopover data-testid="test-tooltipPopover">{popoverText}</TooltipPopover>);

    expect(screen.getByTestId('test-tooltipPopover').textContent).toBe(popoverText);
  });
});
