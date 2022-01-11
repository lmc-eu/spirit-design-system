export const compose = (...functions: any[]) =>
  functions.reduceRight(
    (prevFunction: any, nextFunction: any) =>
      (...args: any[]) =>
        nextFunction(prevFunction(...args)),
    (value: unknown) => value,
  );
