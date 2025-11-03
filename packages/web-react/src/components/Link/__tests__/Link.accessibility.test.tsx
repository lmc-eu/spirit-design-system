import { render, screen } from '@testing-library/react';
import React from 'react';
import { accessibilityDisabledTest, accessibilityTest, runAxe } from '@local/tests';
import Link from '../Link';

describe('Link accessibility', () => {
  accessibilityTest(
    (props) => (
      <Link {...props} href="https://example.com" target="_self">
        Click me
      </Link>
    ),
    'a',
  );

  accessibilityDisabledTest(
    (props) => (
      <Link {...props} href="https://example.com">
        Disabled link
      </Link>
    ),
    'a',
  );

  it('should be accessible when opening in a new tab', async () => {
    render(
      <Link href="https://example.com" target="_blank" rel="noreferrer noopener">
        Click me
      </Link>,
    );

    const result = await runAxe(screen.getByRole('link'));

    expect(result).toHaveNoAxeViolations();
  });
});
