import { accentColors } from '@lmc-eu/spirit-design-tokens';
import { EmotionColors, Intensity } from '../../constants';
import type {
  AccentColorToken,
  BorderAccentColorsType,
  BorderColorsDictionaryType,
  BorderEmotionColorsType,
  BoxBackgroundColorsType,
  EmotionColorsDictionaryType,
  IntensityDictionaryType,
  TextColorProps,
} from '../../types';

export interface UseIconBoxColorsProps {
  colors: {
    background: BoxBackgroundColorsType;
    border: BorderAccentColorsType | BorderEmotionColorsType | BorderColorsDictionaryType;
    text: TextColorProps['textColor'];
  };
}

export const ColorPrefixes = {
  ACCENT: 'accent',
  EMOTION: 'emotion',
} as const;

export type ColorPrefixesType = (typeof ColorPrefixes)[keyof typeof ColorPrefixes];

type BaseAccent = AccentColorToken;
type BaseEmotion = EmotionColorsDictionaryType;
type BaseColor = BaseAccent | BaseEmotion;
type Prefix = ColorPrefixesType;

const setFullColorName = (prefix: Prefix, base: string, intensity: IntensityDictionaryType) =>
  `${prefix}-${base}-${intensity}`;

const derivePrefix = (base: string): Prefix => {
  if (Object.keys(accentColors).includes(base)) {
    return ColorPrefixes.ACCENT;
  }

  return ColorPrefixes.EMOTION;
};

export const useIconBoxColors = (baseColor?: BaseColor, isSubtle = true): UseIconBoxColorsProps => {
  const intensity: IntensityDictionaryType = isSubtle ? Intensity.SUBTLE : Intensity.BASIC;
  const complementaryIntensity: IntensityDictionaryType =
    intensity === Intensity.BASIC ? Intensity.SUBTLE : Intensity.BASIC;
  const base: BaseColor = baseColor ?? EmotionColors.INFORMATIVE;
  const prefix: Prefix = derivePrefix(base);

  const background = setFullColorName(prefix, base, intensity) as BoxBackgroundColorsType;
  const border = setFullColorName(prefix, base, intensity) as
    | BorderAccentColorsType
    | BorderEmotionColorsType
    | BorderColorsDictionaryType;
  const text = setFullColorName(prefix, base, complementaryIntensity) as TextColorProps['textColor'];

  return {
    colors: {
      background,
      border,
      text,
    },
  };
};
