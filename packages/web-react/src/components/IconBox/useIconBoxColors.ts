import { accentColors } from '@lmc-eu/spirit-design-tokens';
import { EmotionColors, Intensity } from '../../constants';
import { ColorPrefixes } from '../../constants/colors';
import type {
  BackgroundAccentColorsType,
  BackgroundEmotionColorsType,
  BorderAccentColorsType,
  BorderEmotionColorsType,
  ColorPrefixesType,
  IconBoxColorsType,
  IntensityDictionaryType,
  TextColorProps,
} from '../../types';

export interface UseIconBoxColorsProps {
  colors: {
    background: BackgroundAccentColorsType | BackgroundEmotionColorsType;
    border: BorderAccentColorsType | BorderEmotionColorsType;
    text: TextColorProps['textColor'];
  };
}

const setFullColorName = (prefix: ColorPrefixesType, base: string, intensity: IntensityDictionaryType) =>
  `${prefix}-${base}-${intensity}`;

const derivePrefix = (base: string): ColorPrefixesType =>
  Object.keys(accentColors).includes(base) ? ColorPrefixes.ACCENT : ColorPrefixes.EMOTION;

export const useIconBoxColors = (color?: IconBoxColorsType, isSubtle = true): UseIconBoxColorsProps => {
  const intensity: IntensityDictionaryType = isSubtle ? Intensity.SUBTLE : Intensity.BASIC;
  const complementaryIntensity: IntensityDictionaryType =
    intensity === Intensity.BASIC ? Intensity.SUBTLE : Intensity.BASIC;
  const base: IconBoxColorsType = color ?? EmotionColors.INFORMATIVE;
  const prefix: ColorPrefixesType = derivePrefix(base);

  const background = setFullColorName(prefix, base, intensity) as
    | BackgroundAccentColorsType
    | BackgroundEmotionColorsType;
  const border = setFullColorName(prefix, base, intensity) as BorderAccentColorsType | BorderEmotionColorsType;
  const text = setFullColorName(prefix, base, complementaryIntensity) as TextColorProps['textColor'];

  return {
    colors: {
      background,
      border,
      text,
    },
  };
};
