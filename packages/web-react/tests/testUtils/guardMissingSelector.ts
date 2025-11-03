/**
 * Error thrown when a selector does not resolve any element.
 */
export class MissingSelectorError extends Error {
  constructor(selector: string) {
    super(`Selector "${selector}" did not match any element.`);
    this.name = 'MissingSelectorError';
  }
}

/**
 * Ensure the provided selector resolves an element before running accessibility assertions.
 *
 * @param selector - CSS selector used to find the target element.
 * @param element - Element resolved from the selector.
 * @throws MissingSelectorError when the selector does not resolve any element.
 */
export const guardMissingSelector: (selector: string, element: Element | null) => asserts element is Element = (
  selector,
  element,
) => {
  if (!element) {
    throw new MissingSelectorError(selector);
  }
};
