// if you want to add exceptions for specific tokens, add them here
const exceptionsMap = new Map<string, string | number>([['breakpoint-mobile', 0]]);

export const handleExceptions = <T extends string | number>(name: string, value: T): T => {
  const exceptionValue = exceptionsMap.get(name);

  if (typeof exceptionValue === 'number' && typeof value === 'number') {
    return exceptionValue as T;
  }

  if (typeof exceptionValue === 'string' && typeof value === 'string') {
    return exceptionValue as T;
  }

  return value;
};
