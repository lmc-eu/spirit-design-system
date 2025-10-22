import { render, screen } from '@testing-library/react';
import React from 'react';
import { runAxe } from '@local/tests';
import Checkbox from '../Checkbox';

describe('Checkbox accessibility', () => {
  it('is accessible with label and helper text', async () => {
    render(<Checkbox id="checkbox" name="checkbox" label="Check me" helperText="Helper text" />);

    const result = await runAxe(screen.getByRole('checkbox'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible when disabled', async () => {
    render(<Checkbox id="checkbox" name="checkbox" label="Check me" isDisabled />);

    const result = await runAxe(screen.getByRole('checkbox'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible in danger state', async () => {
    render(
      <Checkbox
        id="checkbox"
        name="checkbox"
        label="Check me"
        isRequired
        validationState="danger"
        validationText="Validation text"
      />,
    );

    const result = await runAxe(screen.getByRole('checkbox'));

    expect(result).toHaveNoAxeViolations();
  });
});
