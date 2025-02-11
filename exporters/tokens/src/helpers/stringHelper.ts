import { NamingHelper, StringCase } from '@supernovaio/export-helpers';

export const toPlural = (name: string): string => {
  const specialCases: Record<string, string> = {
    radius: 'radii',
    spacing: 'spaces',
  };

  return specialCases[name] || (name.endsWith('s') ? name : `${name}s`);
};

export const toCamelCase = (name: string): string => {
  const safeName = NamingHelper.codeSafeVariableName(name, StringCase.camelCase);

  /**
   * Transform the next character after `X` to uppercase.
   *
   * Example:
   * - `heading-xsmall` -> `headingXSmall`
   * - `heading-xlarge` -> `headingXLarge`
   */
  return safeName.replace(
    /(X+)([a-z])/g,
    (_match, xs: string, next: string) => `${xs.toUpperCase()}${next.toUpperCase()}`,
  );
};
