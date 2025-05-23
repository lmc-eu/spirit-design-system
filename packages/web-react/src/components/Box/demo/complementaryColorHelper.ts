type ColorGroup = Record<string, string>;

export const collectDefinedColorValues = <T extends string>(...colorObjects: Record<string, T | undefined>[]): T[] =>
  colorObjects.flatMap(Object.values).filter((value): value is T => typeof value === 'string');

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getComplementaryColor = ({
  sourceColor,
  groups,
  fromPrefix,
  toPrefix,
  fallback,
}: {
  sourceColor: string;
  groups: ColorGroup[];
  fromPrefix: string;
  toPrefix: string;
  fallback: string;
}): string => {
  const suffixes = ['basic', 'subtle'] as const;

  const matchSuffix = suffixes.find((suffix) => sourceColor.endsWith(suffix));
  if (!matchSuffix) {
    return fallback;
  }

  const oppositeSuffix = suffixes.find((s) => s !== matchSuffix)!;
  const fromKey = `${fromPrefix}${capitalize(matchSuffix)}`;
  const toKey = `${toPrefix}${capitalize(oppositeSuffix)}`;

  const found = groups.find((group) => group[fromKey] === sourceColor);

  return found?.[toKey] ?? sourceColor.replace(matchSuffix, oppositeSuffix);
};
