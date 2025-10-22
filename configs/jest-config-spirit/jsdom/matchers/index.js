import { toHaveNoAxeViolations } from './toHaveNoAxeViolations.js';

export const registerA11yMatchers = () => {
  expect.extend({
    toHaveNoAxeViolations,
  });
};

export { toHaveNoAxeViolations } from './toHaveNoAxeViolations.js';

