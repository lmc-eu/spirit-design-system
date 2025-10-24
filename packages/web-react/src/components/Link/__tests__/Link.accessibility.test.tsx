import { render, screen } from '@testing-library/react';
import React from 'react';
import { runAxe } from '@local/tests';
import Link from '../Link';

describe('Link accessibility', () => {
  it('is accessible with default appearance', async () => {
    render(
      <Link href="https://example.com" target="_self">
        Click me
      </Link>,
    );

    const result = await runAxe(screen.getByRole('link'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible when opening in a new tab', async () => {
    render(
      <Link href="https://example.com" target="_blank" rel="noreferrer noopener">
        Click me
      </Link>,
    );

    const result = await runAxe(screen.getByRole('link'));

    expect(result).toHaveNoAxeViolations();
  });

  it('is accessible when visually disabled', async () => {
    render(
      <Link href="https://example.com" isDisabled aria-disabled="true">
        Disabled link
      </Link>,
    );

    const result = await runAxe(screen.getByRole('link'));

    expect(result).toHaveNoAxeViolations();
  });
});
