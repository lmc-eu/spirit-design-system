# Accessibility Testing Guidelines

Spirit Web React components now include automated accessibility checks powered by [axe-core](https://github.com/dequelabs/axe-core) and [`jest-axe`](https://github.com/nickcolley/jest-axe). This document explains how to extend the existing coverage and how to handle known false positives.

## Test Harness

- Jest configuration automatically registers `jest-axe` matchers (including `toHaveNoViolations`) and a custom `toHaveNoAxeViolations` matcher with richer failure output.
- Reusable helpers live in `packages/web-react/tests/testUtils`. Import `runAxe` from `@local/tests` in component tests.
- Unit tests can be executed with:

  ```sh
  yarn workspace @alma-oss/spirit-web-react test:unit
  ```

  To focus on accessibility specs only, pass `--testPathPatterns=accessibility`.

## Authoring Accessibility Specs

Follow the render → analyze → assert pattern:

```tsx
import { render, screen } from '@testing-library/react';
import { runAxe } from '@local/tests';
import Button from '../Button';

it('should be accessible in its default state', async () => {
  render(<Button>Submit</Button>);
  const result = await runAxe(screen.getByRole('button'));

  expect(result).toHaveNoAxeViolations();
});
```

### Covering Key States

For each component ensure that accessible coverage includes:

- Visual defaults
- Disabled and readonly variations
- Validation or error states
- Interactive states (e.g. toggled, loading)

When adding new stories or props, extend the matching accessibility specification so that regressions are caught automatically.

### Naming Conventions

Component accessibility specs live alongside the component in files named `<Component>.accessibility.test.tsx`. The dedicated suffix keeps the tests discoverable, lets us scope a Jest run to `*accessibility.test.tsx`, and signals that the file should only contain a11y scenarios (visual, interactive, validation, etc.). Co-locating other shared helpers under `packages/web-react/tests/accessibilityTests` keeps the cross-component helpers in one place while allowing component suites to stay concise.

### Handling Known False Positives

Occasionally axe rules report violations that are not actionable in Jest/JSDOM (e.g. dynamic color contrast or animations). Disable only the specific rule that is noisy for the current scenario:

```tsx
const result = await runAxe(screen.getByRole('button'), {
  disabledRules: ['color-contrast'],
});

expect(result).toHaveNoAxeViolations();
```

Always leave a short comment in the test describing why the rule is disabled and, if possible, link to a tracking issue.

### Global Rule Overrides

If a rule needs to be disabled (or tuned) for the entire test suite, update the shared axe instance in `packages/web-react/tests/testUtils/runAxe.ts`. Pass the global overrides to `configureAxe` so every invocation respects the configuration:

```ts
const axe = configureAxe({
  rules: {
    'color-contrast': { enabled: false },
    // tweak additional rules here
  },
});
```

Keep the global overrides minimal—prefer test-local overrides when possible—and document the rationale in the pull request description.

### Useful Helpers

- `runAxe(container, { disabledRules, rules, ...options })`: wraps `axe(container, options)` and allows targeted rule overrides.
- `expect(results).toHaveNoAxeViolations({ includedImpacts })`: extends `toHaveNoViolations` by allowing you to filter violations by impact level (using the optional `includedImpacts` array) and prints a condensed view of offending nodes. This lets you focus the assertion on specific impact levels (`'minor' | 'moderate' | 'serious' | 'critical'`), e.g.:

```tsx
const result = await runAxe(screen.getByRole('button'));

// Fail only if serious or critical issues are present; warn-level findings remain visible in the console.
expect(result).toHaveNoAxeViolations({
  includedImpacts: ['serious', 'critical'],
});
```

Refer to the new specifications under `src/components/*/__tests__/*accessibility.test.tsx` for concrete examples.
