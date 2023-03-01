import { DefaultWeightsType, normalizedWeights, NormalizedWeightsType } from '../constants/weight';

export function normalizeWeight(name: string, fontFamily: string): number | string {
  const fontFamilyLowerCase = fontFamily.toLowerCase();

  return (
    normalizedWeights[
      (normalizedWeights[fontFamilyLowerCase as keyof NormalizedWeightsType]
        ? fontFamilyLowerCase
        : 'default') as keyof NormalizedWeightsType
    ][name.toLowerCase().replace(/\W/g, '') as keyof DefaultWeightsType] || name // 1.
  );
}
