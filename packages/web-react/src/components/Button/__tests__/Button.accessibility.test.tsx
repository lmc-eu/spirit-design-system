import { render, screen } from '@testing-library/react';
import React from 'react';
import { runAxe } from '@local/tests';
import Button from '../Button';

jest.mock('../../../hooks/useIcon');

describe('Button accessibility', () => {
  it('is accessible in its default state', async () => {
    render(<Button>Submit</Button>);

    const result = await runAxe(screen.getByRole('button'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible when disabled', async () => {
    render(<Button isDisabled>Submit</Button>);

    const result = await runAxe(screen.getByRole('button'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible while loading when contrast rule is ignored for animated spinner', async () => {
    render(
      <Button isLoading aria-live="polite">
        Loading
      </Button>,
    );

    const result = await runAxe(screen.getByRole('button'));

    expect(result).toHaveNoAxeViolations();
  });
});
