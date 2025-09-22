import type { SelectEntry } from './types';

/**
 * Convert a kebab-case token name to title case.
 *
 * @example
 * toTitleCase('theme-light-default'); // "Theme Light Default"
 *
 * @param value Kebab-case token name.
 * @returns Title-cased representation of the token.
 */
export const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');

/**
 * Convert an array of select entries to a map that Storybook controls can consume.
 *
 * @template T
 * @param entries Array of options `{ label, value }`.
 * @returns Record mapping labels to values for quick lookup.
 */
export const makeSelectMap = <T extends string | undefined>(entries: Array<SelectEntry<T>>): Record<string, T> =>
  Object.fromEntries(entries.map(({ label, value }) => [label, value])) as Record<string, T>;
