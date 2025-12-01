import { render, screen } from '@testing-library/react';
import React from 'react';
import { runAxe } from '@local/tests/testUtils/runAxe';
import Dialog from '../Dialog';

describe('Dialog accessibility', () => {
  it('should be accessible when open', async () => {
    render(
      <Dialog id="dialog-example" isOpen onClose={() => {}}>
        <div>Dialog content</div>
      </Dialog>,
    );

    const element = screen.getByRole('dialog');
    const results = await runAxe(element);

    expect(results).toHaveNoAxeViolations();
  });
});
