import { accentColors, emotionColors, textColors } from '@lmc-eu/spirit-design-tokens';
import {
  AccentColorNamesType,
  BackgroundAccentColorsType,
  BackgroundEmotionColorsType,
  BorderAccentColorsType,
  BorderEmotionColorsType,
  EmotionColorsDictionaryType,
  TextAccentColorsType,
  TextColorsDictionaryType,
  TextEmotionColorsType,
} from '../types';

/**
 * Generates a color object by processing a set of colors and filtering their keys based on type.
 *
 * @template T - The type of the keys in the resulting record.
 * @param {Record<string, Record<string, string>>} colors - A record of color categories and their properties.
 * @param {string} type - The type of property to filter (e.g., "content", "border", "background").
 * @param {string} prefix - A string prefix to prepend to the generated keys.
 * @returns {Record<T, T>} A record where the keys are formatted strings and the values are identical to the keys.
 */
export const generateColorsObject = <T extends string>(
  colors: Record<string, Record<string, string>>,
  type: string,
  prefix: string,
): Record<T, T> => {
  const result: Record<string, string> = {};

  for (const [key, properties] of Object.entries(colors)) {
    for (const [property] of Object.entries(properties)) {
      if (property.startsWith(type)) {
        const formattedValue = `${prefix}-${key}-${property.replace(type, '').toLowerCase()}`;
        const formattedKey = formattedValue.replace(/-/g, '_').toUpperCase();
        result[formattedKey] = formattedValue;
      }
    }
  }

  return result as Record<T, T>;
};

/**
 * Generates an object containing formatted keys for accent text colors.
 *
 * @returns {Record<string, TextAccentColorsType>} A record of formatted accent color keys.
 */
export const getAccentTextColors = (): Record<string, TextAccentColorsType> =>
  generateColorsObject(accentColors, 'content', 'accent');

/**
 * Generates an object containing formatted keys for emotion text colors.
 *
 * @returns {Record<string, TextEmotionColorsType>} A record of formatted emotion color keys.
 */
export const getEmotionTextColors = (): Record<string, TextEmotionColorsType> =>
  generateColorsObject(emotionColors, 'content', 'emotion');

/**
 * Generates an object containing formatted keys for accent background colors.
 *
 * @returns {Record<string, BackgroundAccentColorsType>} A record of formatted accent color keys.
 */
export const getAccentBackgroundColors = (): Record<string, BackgroundAccentColorsType> =>
  generateColorsObject(accentColors, 'background', 'accent');

/**
 * Generates an object containing formatted keys for emotion background colors.
 *
 * @returns {Record<string, BackgroundEmotionColorsType>} A record of formatted accent color keys.
 */
export const getEmotionBackgroundColors = (): Record<string, BackgroundEmotionColorsType> =>
  generateColorsObject(emotionColors, 'background', 'emotion');

/**
 * Generates an object containing formatted keys for accent border colors.
 *
 * @returns {Record<string, BorderAccentColorsType>} A record of formatted accent color keys.
 */
export const getAccentBorderColors = (): Record<string, BorderAccentColorsType> =>
  generateColorsObject(accentColors, 'border', 'accent');

/**
 * Generates an object containing formatted keys for emotion border colors.
 *
 * @returns {Record<string, BackgroundEmotionColorsType>} A record of formatted emotion color keys.
 */
export const getEmotionBorderColors = (): Record<string, BorderEmotionColorsType> =>
  generateColorsObject(emotionColors, 'border', 'emotion');

export const getAccentColorNames = () => Object.keys(accentColors) as AccentColorNamesType[];
export const getEmotionColorNames = () => Object.keys(emotionColors) as EmotionColorsDictionaryType[];
export const getTextColorNames = () => Object.keys(textColors) as TextColorsDictionaryType[];
