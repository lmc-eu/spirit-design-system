import { Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import type { Result as AxeResult, NodeResult } from 'axe-core';

/**
 * Configuration options for accessibility scans
 */
export interface A11yScanOptions {
  /** CSS selectors to exclude from scan */
  exclude?: string | string[];
  /** Rule IDs to disable */
  disableRules?: string | string[];
  /** Tags to filter rules (e.g., 'wcag2a', 'wcag2aa') */
  withTags?: string | string[];
  /** Specific rule IDs to test */
  withRules?: string | string[];
}

/**
 * Formatted violation information for clear error messages
 */
export interface FormattedViolation {
  ruleId: string;
  impact: 'minor' | 'moderate' | 'serious' | 'critical';
  description: string;
  helpUrl: string;
  nodes: FormattedNode[];
}

/**
 * Formatted node information showing affected elements
 */
export interface FormattedNode {
  html: string;
  target: string[];
  failureSummary: string;
}

/**
 * Result of accessibility scan with violations and metadata
 */
export interface A11yScanResult {
  violations: FormattedViolation[];
  violationCount: number;
  url: string;
  timestamp: string;
}

/**
 * Runs an accessibility scan on the current page
 *
 * @param page - Playwright Page object
 * @param options - Configuration options for the scan
 * @returns Promise resolving to scan results
 *
 * @example
 * ```typescript
 * const results = await runA11yScan(page, {
 *   exclude: ['.hide-from-visual-tests'],
 *   withTags: ['wcag2aa']
 * });
 * ```
 */
export const runA11yScan = async (page: Page, options: A11yScanOptions = {}): Promise<A11yScanResult> => {
  const builder = new AxeBuilder({ page });

  if (options.exclude) {
    const excludeSelectors = Array.isArray(options.exclude) ? options.exclude : [options.exclude];
    excludeSelectors.forEach((selector) => builder.exclude(selector));
  }

  if (options.disableRules) {
    builder.disableRules(options.disableRules);
  }

  if (options.withTags) {
    builder.withTags(options.withTags);
  }

  if (options.withRules) {
    builder.withRules(options.withRules);
  }

  const results = await builder.analyze();

  return {
    violations: formatViolations(results.violations),
    violationCount: results.violations.length,
    url: results.url,
    timestamp: new Date().toISOString(),
  };
};

/**
 * Asserts that a page has no accessibility violations
 * Throws an error with formatted violation details if any are found
 *
 * @param page - Playwright Page object
 * @param options - Configuration options for the scan
 * @throws Error with formatted violation details
 *
 * @example
 * ```typescript
 * await assertNoA11yViolations(page, {
 *   exclude: ['.hide-from-visual-tests']
 * });
 * ```
 */
export const assertNoA11yViolations = async (page: Page, options: A11yScanOptions = {}): Promise<void> => {
  const results = await runA11yScan(page, options);

  if (results.violations.length > 0) {
    const errorMessage = formatViolationError(results);
    throw new Error(errorMessage);
  }
};

/**
 * Formats violations into a more readable structure
 */
const formatViolations = (violations: AxeResult[]): FormattedViolation[] => {
  return violations.map((violation) => ({
    ruleId: violation.id,
    impact: violation.impact as 'minor' | 'moderate' | 'serious' | 'critical',
    description: violation.description,
    helpUrl: violation.helpUrl,
    nodes: violation.nodes.map(formatNode),
  }));
};

/**
 * Formats a single node with affected element information
 */
const formatNode = (node: NodeResult): FormattedNode => ({
  html: node.html,
  target: node.target,
  failureSummary: node.failureSummary || 'No summary available',
});

/**
 * Creates a detailed error message from scan results
 */
const formatViolationError = (results: A11yScanResult): string => {
  const header =
    `\n${'='.repeat(80)}\n` +
    `ACCESSIBILITY VIOLATIONS FOUND\n` +
    `URL: ${results.url}\n` +
    `Total Violations: ${results.violationCount}\n` +
    `${'='.repeat(80)}\n`;

  const violationDetails = results.violations
    .map((violation, index) => {
      const impactBadge = getImpactBadge(violation.impact);
      const violationHeader =
        `\n[${index + 1}] ${violation.ruleId} ${impactBadge}\n` +
        `Description: ${violation.description}\n` +
        `Help: ${violation.helpUrl}\n`;

      const affectedElements = violation.nodes
        .map(
          (node, nodeIndex) =>
            `  Element ${nodeIndex + 1}:\n` +
            `    Target: ${node.target.join(', ')}\n` +
            `    HTML: ${node.html}\n` +
            `    Issue: ${node.failureSummary}\n`,
        )
        .join('\n');

      return violationHeader + '\nAffected Elements:\n' + affectedElements;
    })
    .join('\n' + '-'.repeat(80) + '\n');

  const footer = `\n${'='.repeat(80)}\n`;

  return header + violationDetails + footer;
};

/**
 * Returns a visual badge for violation impact level
 */
const getImpactBadge = (impact: string): string => {
  const badges = {
    critical: '[CRITICAL]',
    serious: '[SERIOUS]',
    moderate: '[MODERATE]',
    minor: '[MINOR]',
  };

  return badges[impact] || '[UNKNOWN]';
};

/**
 * Excludes commonly problematic elements from a11y scans
 * Use this to exclude elements that are intentionally hidden or not relevant
 *
 * @returns Array of CSS selectors to exclude
 */
export const getCommonExclusions = (): string[] => [
  '.hide-from-visual-tests',
  '[aria-hidden="true"]',
  '[data-test-hidden]',
];

/**
 * Get default WCAG 2.1 AA configuration
 * This is the recommended configuration for most tests
 */
export const getWCAG2AAConfig = (): A11yScanOptions => ({
  withTags: ['wcag2a', 'wcag2aa'],
  exclude: getCommonExclusions(),
});
