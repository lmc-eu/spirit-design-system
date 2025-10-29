import { render } from '@testing-library/react';
import React from 'react';
import type { ComponentType } from 'react';
import { runAxe, type RunAxeOptions } from '../testUtils/runAxe';

/**
 * Run accessibility checks for a component when it is disabled.
 *
 * @param Component - Component factory used in the test.
 * @param selector - CSS selector used to resolve the element for axe.
 * @param axeOptions - Optional axe configuration overrides.
 */
export const accessibilityDisabledTest = (
  Component: ComponentType<any>,
  selector: string,
  axeOptions?: RunAxeOptions,
) => {
  it('is accessible when disabled', async () => {
    const { container } = render(<Component isDisabled />);
    const element = container.querySelector(selector);

    if (!element) {
      throw new Error(`Selector "${selector}" did not match any element.`);
    }

    const results = await runAxe(element, axeOptions);

    expect(results).toHaveNoAxeViolations();
  });
};
