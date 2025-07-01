import { BackgroundColors, BorderColors, Intensity, TextColors } from '../../constants';
import {
  BorderAccentColorsType,
  BorderColorsDictionaryType,
  BorderEmotionColorsType,
  BoxBackgroundColorsType,
  IntensityDictionaryType,
  TextColorProps,
} from '../../types';

export interface UseIconBoxColorsProps {
  colors: {
    backgroundColor: BoxBackgroundColorsType;
    borderColor: BorderAccentColorsType | BorderEmotionColorsType | BorderColorsDictionaryType;
    textColor: TextColorProps['textColor'];
  };
}

type BackgroundColorValues = (typeof BackgroundColors)[keyof typeof BackgroundColors];

function parseColorIntensity(color: string): { colorName: string; intensity: IntensityDictionaryType } {
  if (color.endsWith('-basic')) {
    return { colorName: color.slice(0, -'-basic'.length), intensity: Intensity.BASIC };
  }
  if (color.endsWith('-subtle')) {
    return { colorName: color.slice(0, -'-subtle'.length), intensity: Intensity.SUBTLE };
  }

  return { colorName: color, intensity: Intensity.BASIC };
}

export const useIconBoxColors = (color?: string): UseIconBoxColorsProps => {
  if (!color) {
    return {
      colors: {
        backgroundColor: BackgroundColors.PRIMARY,
        borderColor: BorderColors.BASIC,
        textColor: TextColors.PRIMARY,
      },
    };
  }

  const staticColors = Object.values(BackgroundColors);

  if (staticColors.includes(color as BackgroundColorValues)) {
    return {
      colors: {
        backgroundColor: color as BoxBackgroundColorsType,
        borderColor: BorderColors.BASIC,
        textColor: color as TextColorProps['textColor'],
      },
    };
  }

  const { colorName, intensity } = parseColorIntensity(color);

  const complementaryIntensity = intensity === Intensity.BASIC ? Intensity.SUBTLE : Intensity.BASIC;

  return {
    colors: {
      backgroundColor: `${colorName}-${intensity}` as BoxBackgroundColorsType,
      borderColor: `${colorName}-${intensity}` as
        | BorderAccentColorsType
        | BorderEmotionColorsType
        | BorderColorsDictionaryType,
      textColor: `${colorName}-${complementaryIntensity}` as TextColorProps['textColor'],
    },
  };
};
