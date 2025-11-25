import { render } from '@testing-library/react';
import React, { type ComponentType } from 'react';
import { guardMissingSelector } from '../testUtils/guardMissingSelector';
import { type RunAxeOptions, runAxe } from '../testUtils/runAxe';

/**
 * Run accessibility checks for a component when it has a selected state.
 *
 * @param Component - Component factory used in the test. Should accept props and configure the component with selected state.
 * @param selector - CSS selector used to resolve the element for axe.
 * @param axeOptions - Optional axe configuration overrides.
 */
export const accessibilitySelectedTest = (
  Component: ComponentType<any>,
  selector: string,
  axeOptions?: RunAxeOptions,
) => {
  it('should be accessible when an item is selected', async () => {
    const { container } = render(<Component />);
    const element = container.querySelector(selector);

    guardMissingSelector(selector, element);

    const results = await runAxe(element, axeOptions);

    expect(results).toHaveNoAxeViolations();
  });
};
