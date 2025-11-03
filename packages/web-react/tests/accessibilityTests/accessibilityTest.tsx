import { render } from '@testing-library/react';
import React, { type ComponentType } from 'react';
import { guardMissingSelector } from '../testUtils/guardMissingSelector';
import { type RunAxeOptions, runAxe } from '../testUtils/runAxe';

/**
 * Run accessibility checks for a component in the default state.
 *
 * @param Component - Component factory used in the test.
 * @param selector - CSS selector used to resolve the element for axe.
 * @param axeOptions - Optional axe configuration overrides.
 */
export const accessibilityTest = (Component: ComponentType<any>, selector: string, axeOptions?: RunAxeOptions) => {
  it('should be accessible in its default state', async () => {
    const { container } = render(<Component />);
    const element = container.querySelector(selector);

    guardMissingSelector(selector, element);

    const results = await runAxe(element, axeOptions);

    expect(results).toHaveNoAxeViolations();
  });
};
