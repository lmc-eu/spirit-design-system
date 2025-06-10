export const ucFirst = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const ucFirstAll = (value: string, delimiter: string = '-'): string => {
  return value
    .split(delimiter)
    .map((word: string) => ucFirst(word))
    .join(delimiter);
};
