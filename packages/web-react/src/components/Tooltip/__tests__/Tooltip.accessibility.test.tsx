import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { runAxe } from '@local/tests/testUtils/runAxe';
import Tooltip from '../Tooltip';
import TooltipPopover from '../TooltipPopover';
import TooltipTrigger from '../TooltipTrigger';

describe('Tooltip accessibility', () => {
  it('should be accessible when open', async () => {
    // eslint-disable-next-line no-console -- Suppress FloatingUI NaN warnings in JSDOM environment
    const originalError = console.error;
    const spyOnConsoleError = jest.spyOn(console, 'error').mockImplementation((...args) => {
      // Suppress NaN CSS value warnings from FloatingUI in JSDOM
      if (typeof args[0] === 'string' && args[0].includes('NaN') && args[0].includes('css style property')) {
        return;
      }
      originalError(...args);
    });

    await act(async () => {
      render(
        <Tooltip id="tooltip-example" isOpen onToggle={() => {}}>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipPopover>Tooltip content</TooltipPopover>
        </Tooltip>,
      );
    });

    const element = await waitFor(() => screen.getByRole('tooltip'), { timeout: 1000 });

    const results = await runAxe(element);

    spyOnConsoleError.mockRestore();

    expect(results).toHaveNoAxeViolations();
  });
});
