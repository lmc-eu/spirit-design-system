/* eslint-disable @typescript-eslint/no-explicit-any */

export const compose = (...functions: any[]) =>
  functions.reduceRight(
    (prevFunction: any, nextFunction: any) =>
      (...args: any[]) =>
        nextFunction(prevFunction(...args)),
    (value: unknown) => value,
  );
