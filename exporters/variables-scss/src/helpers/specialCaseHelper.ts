// if you want to add exceptions for specific tokens, add them here
import { invariantTokenAlias } from '../config/invariantTokenAliasConfig';

const specialCaseMap = new Map<string, string | number>([['breakpoint-mobile', 0]]);

export const handleSpecialCase = <T extends string | number>(name: string, value: T): T => {
  const specialCaseValue = specialCaseMap.get(name);

  if (typeof specialCaseValue === typeof value) {
    return specialCaseValue as T;
  }

  return value;
};

/* This function handles cases that are outside the logic of aliases for the remaining tokens.
A common condition is that for tokens with a numeric part, the non-numeric part is dropped.
Non-numeric tokens are left in their original form. Deviations from this logic are addressed in
invariantTokenAliasConfig and handle here.
e.g. radius-full -> full */
export const handleInvariantTokenAlias = (tokenName: string): string => {
  if (invariantTokenAlias[tokenName]) {
    return invariantTokenAlias[tokenName];
  }

  return tokenName;
};
