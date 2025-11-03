import { render } from '@testing-library/react';
import React, { type ComponentType } from 'react';
import { guardMissingSelector } from '../testUtils/guardMissingSelector';
import { type RunAxeOptions, runAxe } from '../testUtils/runAxe';

/**
 * Run accessibility checks for a component when it is in the disabled state.
 *
 * @param Component - Component factory used in the test.
 * @param selector - CSS selector used to resolve the element for axe.
 * @param axeOptions - Optional axe configuration overrides.
 */
export const accessibilityDisabledTest = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>,
  selector: string,
  axeOptions?: RunAxeOptions,
) => {
  it('should be accessible when disabled', async () => {
    const { container } = render(<Component isDisabled />);
    const element = container.querySelector(selector);

    guardMissingSelector(selector, element);

    const results = await runAxe(element, axeOptions);

    expect(results).toHaveNoAxeViolations();
  });
};
