import { COMPONENT_NAME_SEGMENTS } from '@local/lib/constants';

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

export const pascalizeComponentName = (name: string, dictionary = []) => {
  if (!name) return '';

  const lowerName = name.toLowerCase();
  const sortedDict = [...dictionary].sort((a, b) => b.length - a.length).map((d) => d.toLowerCase());

  let result = '';
  let remaining = lowerName;

  while (remaining.length) {
    const match = sortedDict.find((word) => remaining.startsWith(word));

    if (match) {
      result += match[0].toUpperCase() + match.slice(1);
      remaining = remaining.slice(match.length);
    } else {
      // Find the longest prefix not matching the dictionary
      let i = 1;
      while (i <= remaining.length && !sortedDict.some((word) => remaining.slice(i).startsWith(word))) {
        i++;
      }
      const unknownPart = remaining.slice(0, i);
      result += unknownPart[0].toUpperCase() + unknownPart.slice(1);
      remaining = remaining.slice(i);
    }
  }

  return result;
};

export const normalizeComponentName = (componentName: string): string => {
  let normalizedComponentName = componentName;

  if (normalizedComponentName.includes('_')) {
    const [firstPart, rest] = componentName.split('_');

    normalizedComponentName = `${ucAll(firstPart)}_${pascalizeComponentName(rest, COMPONENT_NAME_SEGMENTS)}`;
  } else {
    normalizedComponentName = pascalizeComponentName(normalizedComponentName, COMPONENT_NAME_SEGMENTS);
  }

  return normalizedComponentName;
};
