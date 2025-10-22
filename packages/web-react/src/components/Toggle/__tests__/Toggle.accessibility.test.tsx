import { render, screen } from '@testing-library/react';
import React from 'react';
import { runAxe } from '@local/tests';
import Toggle from '../Toggle';

describe('Toggle accessibility', () => {
  it('is accessible in default state', async () => {
    render(<Toggle id="toggle" label="Toggle me" helperText="Helper text" />);

    const result = await runAxe(screen.getByRole('checkbox'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible when checked and disabled', async () => {
    render(<Toggle id="toggle" label="Toggle me" isChecked isDisabled />);

    const result = await runAxe(screen.getByRole('checkbox'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible with validation danger', async () => {
    render(<Toggle id="toggle" label="Toggle me" validationState="danger" validationText="Validation text" />);

    const result = await runAxe(screen.getByRole('checkbox'));

    expect(result).toHaveNoAxeViolations();
  });
});
