import { type render } from '@testing-library/react';
import { type RunAxeOptions, runAxe } from './runAxe';

interface AccessibilityScenario {
  name: string;
  render: () => ReturnType<typeof render>;
  getTarget?: (api: ReturnType<typeof render>) => Element;
  axeOptions?: RunAxeOptions;
}

export const componentAccessibilityTest = (componentName: string, scenarios: AccessibilityScenario[]) => {
  describe(`${componentName} accessibility`, () => {
    scenarios.forEach(({ name, render: renderFn, getTarget, axeOptions }) => {
      it(name, async () => {
        const api = renderFn();
        const target = getTarget
          ? getTarget(api)
          : ((api.container.firstElementChild as Element | null) ?? api.container);
        const results = await runAxe(target, axeOptions);

        expect(results).toHaveNoAxeViolations();
      });
    });
  });
};
