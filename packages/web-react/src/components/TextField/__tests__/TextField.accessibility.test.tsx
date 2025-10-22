import { render, screen } from '@testing-library/react';
import React from 'react';
import { runAxe } from '@local/tests';
import TextField from '../TextField';

jest.mock('../../../hooks/useIcon');

describe('TextField accessibility', () => {
  it('is accessible with helper text', async () => {
    render(<TextField id="textfield" label="Text field" helperText="Helper text" type="text" isRequired />);

    const result = await runAxe(screen.getByRole('textbox'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible in disabled state', async () => {
    render(<TextField id="textfield-email" label="Email address" type="email" isDisabled />);

    const result = await runAxe(screen.getByRole('textbox'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible in danger state with validation message', async () => {
    render(
      <TextField
        id="textfield-password"
        label="Password"
        type="password"
        validationState="danger"
        validationText="Validation text"
      />,
    );

    const result = await runAxe(screen.getByLabelText('Password'));

    expect(result).toHaveNoAxeViolations();
  });
});
