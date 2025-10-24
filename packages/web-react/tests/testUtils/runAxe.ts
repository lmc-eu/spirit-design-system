import { configureAxe } from 'jest-axe';

const axe = configureAxe();

type AxeRunner = typeof axe;
type AxeContainer = Parameters<AxeRunner>[0];
type AxeCoreOptions = NonNullable<Parameters<AxeRunner>[1]>;
type RuleOverrides = Record<string, { enabled?: boolean } & Record<string, unknown>>;
type AxeResults = Awaited<ReturnType<AxeRunner>>;

export interface RunAxeOptions extends Omit<AxeCoreOptions, 'rules'> {
  /**
   * Explicitly disable a subset of rules when running axe.
   * Useful for known false positives in specific component configurations.
   */
  disabledRules?: string[];
  /**
   * Provide fine-grained overrides for axe rules.
   * When both `disabledRules` and `rules` specify the same rule id, the `rules` definition wins.
   */
  rules?: RuleOverrides;
}

const resolveRuleOverrides = (rules?: RuleOverrides, disabledRules?: string[]): RuleOverrides | undefined => {
  const overrides: RuleOverrides = { ...(rules ?? {}) };

  disabledRules?.forEach((ruleId) => {
    overrides[ruleId] = { ...(overrides[ruleId] ?? {}), enabled: false };
  });

  return Object.keys(overrides).length ? overrides : undefined;
};

export const runAxe = (container: AxeContainer, options: RunAxeOptions = {}): Promise<AxeResults> => {
  const { disabledRules, rules, ...axeOptions } = options;

  return axe(container, {
    ...axeOptions,
    rules: resolveRuleOverrides(rules, disabledRules),
  });
};

export type { AxeResults };
