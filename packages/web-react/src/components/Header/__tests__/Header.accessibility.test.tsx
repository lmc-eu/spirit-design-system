import { render } from '@testing-library/react';
import React from 'react';
import { accessibilityTest, guardMissingSelector, runAxe } from '@local/tests';
import Header from '../Header';

describe('Header accessibility', () => {
  const headerContent = (
    <nav>
      <a href="https://example.com">Link 1</a>
      <a href="https://example.com">Link 2</a>
    </nav>
  );

  accessibilityTest((props) => <Header {...props}>{headerContent}</Header>, 'header');

  it('should be accessible in simple variant', async () => {
    const { container } = render(<Header isSimple>{headerContent}</Header>);

    const header = container.querySelector('header');
    guardMissingSelector('header', header);

    const results = await runAxe(header);

    expect(results).toHaveNoAxeViolations();
  });

  it('should be accessible with different colors', async () => {
    const { container } = render(<Header color="primary">{headerContent}</Header>);

    const header = container.querySelector('header');
    guardMissingSelector('header', header);

    const results = await runAxe(header);

    expect(results).toHaveNoAxeViolations();
  });
});
