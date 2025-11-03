import { render } from '@testing-library/react';
import React, { type ComponentType } from 'react';
import { guardMissingSelector } from '../testUtils/guardMissingSelector';
import { type RunAxeOptions, runAxe } from '../testUtils/runAxe';

/**
 * Run accessibility checks for each validation state of a component.
 *
 * @param Component - Component factory used in the test.
 * @param selector - CSS selector used to resolve the element for axe.
 * @param axeOptions - Optional axe configuration overrides.
 */
export const accessibilityValidationStateTest = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<any>,
  selector: string,
  axeOptions?: RunAxeOptions,
) => {
  const validationStates = ['success', 'warning', 'danger'] as const;

  it.each(validationStates)('shoudl be accessible in %s state', async (validationState) => {
    const { container } = render(<Component validationState={validationState} />);
    const element = container.querySelector(selector);

    guardMissingSelector(selector, element);

    const results = await runAxe(element, axeOptions);

    expect(results).toHaveNoAxeViolations();
  });
};
