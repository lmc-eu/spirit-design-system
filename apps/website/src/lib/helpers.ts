export const ucFirst = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const ucFirstAll = (value: string, delimiter: string = '-'): string => {
  return value
    .split(delimiter)
    .map((word: string) => ucFirst(word))
    .join(delimiter);
};

export const ucAll = (value: string): string => {
  return value.toUpperCase();
};

export const normalizeComponentName = (componentName: string): string => {
  let normalizedComponentName = componentName;

  if (normalizedComponentName.includes('_')) {
    const [firstPart, rest] = componentName.split('_');

    normalizedComponentName = `${ucAll(firstPart)}_${ucFirst(rest)}`;
  }

  return ucFirstAll(normalizedComponentName);
};
