import { render } from '@testing-library/react';
import React from 'react';
import type { ComponentType } from 'react';
import { runAxe, type RunAxeOptions } from '../testUtils/runAxe';

/**
 * Run the default accessibility scenario for a component.
 *
 * @param Component - Component factory used in the test.
 * @param selector - CSS selector used to resolve the element for axe.
 * @param axeOptions - Optional axe configuration overrides.
 */
export const accessibilityTest = (Component: ComponentType<any>, selector: string, axeOptions?: RunAxeOptions) => {
  it('is accessible in its default state', async () => {
    const { container } = render(<Component />);
    const element = container.querySelector(selector);

    if (!element) {
      throw new Error(`Selector "${selector}" did not match any element.`);
    }

    const results = await runAxe(element, axeOptions);

    expect(results).toHaveNoAxeViolations();
  });
};
