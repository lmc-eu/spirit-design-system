import { BackgroundColors, BorderColors, Intensity, TextColors } from '../../constants';
import type {
  BorderAccentColorsType,
  BorderColorsDictionaryType,
  BorderEmotionColorsType,
  BoxBackgroundColorsType,
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

type BackgroundColorValues = (typeof BackgroundColors)[keyof typeof BackgroundColors];

const parseColorIntensity = (color: string): { colorName: string; intensity: IntensityDictionaryType } => {
  switch (true) {
    case color.endsWith('-basic'):
      return { colorName: color.slice(0, -'-basic'.length), intensity: Intensity.BASIC };

    case color.endsWith('-subtle'):
      return { colorName: color.slice(0, -'-subtle'.length), intensity: Intensity.SUBTLE };

    default:
      return { colorName: color, intensity: Intensity.BASIC };
  }
};

export const useIconBoxColors = (color?: string): UseIconBoxColorsProps => {
  if (!color) {
    return {
      colors: {
        background: BackgroundColors.PRIMARY,
        border: BorderColors.BASIC,
        text: TextColors.PRIMARY,
      },
    };
  }

  const staticColors = Object.values(BackgroundColors);

  if (staticColors.includes(color as BackgroundColorValues)) {
    return {
      colors: {
        background: color as BoxBackgroundColorsType,
        border: BorderColors.BASIC,
        text: color as TextColorProps['textColor'],
      },
    };
  }

  const { colorName, intensity } = parseColorIntensity(color);

  const complementaryIntensity = intensity === Intensity.BASIC ? Intensity.SUBTLE : Intensity.BASIC;

  return {
    colors: {
      background: `${colorName}-${intensity}` as BoxBackgroundColorsType,
      border: `${colorName}-${intensity}` as
        | BorderAccentColorsType
        | BorderEmotionColorsType
        | BorderColorsDictionaryType,
      text: `${colorName}-${complementaryIntensity}` as TextColorProps['textColor'],
    },
  };
};
