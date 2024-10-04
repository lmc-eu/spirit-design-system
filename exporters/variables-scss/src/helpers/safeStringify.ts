export const safeStringify = (obj: object) => {
  let cache: string[] | null = [];
  const str = JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache?.includes(value)) {
          return 'CIRCULAR_REFERENCE';
        }
        cache?.push(value);
      }

      return value;
    },
    2,
  );
  cache = null;

  return str;
};
