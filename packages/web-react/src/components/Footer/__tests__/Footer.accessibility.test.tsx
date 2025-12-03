import { render } from '@testing-library/react';
import React from 'react';
import { accessibilityTest, guardMissingSelector, runAxe } from '@local/tests';
import Footer from '../Footer';

describe('Footer accessibility', () => {
  const footerContent = (
    <>
      <nav>
        <a href="https://example.com">Link 1</a>
        <a href="https://example.com">Link 2</a>
      </nav>
      <p>Copyright text</p>
    </>
  );

  accessibilityTest((props) => <Footer {...props}>{footerContent}</Footer>, 'footer');

  it('should be accessible with different background colors', async () => {
    const { container } = render(<Footer backgroundColor="primary">{footerContent}</Footer>);

    const footer = container.querySelector('footer');
    guardMissingSelector('footer', footer);

    const results = await runAxe(footer);

    expect(results).toHaveNoAxeViolations();
  });

  it('should be accessible with text alignment', async () => {
    const { container } = render(<Footer textAlignment="center">{footerContent}</Footer>);

    const footer = container.querySelector('footer');
    guardMissingSelector('footer', footer);

    const results = await runAxe(footer);

    expect(results).toHaveNoAxeViolations();
  });
});
