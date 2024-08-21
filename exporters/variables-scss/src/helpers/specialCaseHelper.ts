// if you want to add exceptions for specific tokens, add them here
const specialCaseMap = new Map<string, string | number>([['breakpoint-mobile', 0]]);

export const handleSpecialCase = <T extends string | number>(name: string, value: T): T => {
  const specialCaseValue = specialCaseMap.get(name);

  if (typeof specialCaseValue === typeof value) {
    return specialCaseValue as T;
  }

  return value;
};
