import { accentColors, emotionColors } from '@lmc-eu/spirit-design-tokens';
import { TextAccentColorsType, TextEmotionColorsType } from '../types';

/**
 * Generates a color object by processing a set of colors and formatting their keys.
 *
 * @template T - The type of the keys in the resulting record.
 * @param {Record<string, Record<string, string>>} colors - A record of color categories and their properties.
 * @param {'content'} type - The type of property to filter (e.g., "content").
 * @param {string} prefix - A string prefix to prepend to the generated keys.
 * @returns {Record<T, T>} A record where the keys are formatted strings and the values are identical to the keys.
 */
export const generateColorsObject = <T extends string>(
  colors: Record<string, Record<string, string>>,
  type: 'content',
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
