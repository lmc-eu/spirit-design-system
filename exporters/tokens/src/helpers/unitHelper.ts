import { DimensionToken, FontSizeToken, Token, TokenType } from '@supernovaio/sdk-exporters';
import { FONT_SIZE_BASE_DEFAULT } from '../constants';
import { getDeviceAlias } from './deviceHelpers';
import { pxToRem } from '../converters/pxToRemConverter';

export type FontSizeBaseMap = Map<string, number>;

/**
 * Creates a default FontSizeBaseMap with the same value for all breakpoints.
 * @param fontSizeBase - Font size base value in px (default: DEFAULT_FONT_SIZE_BASE)
 * @returns FontSizeBaseMap with mobile, tablet, and desktop set to the same value
 */
export const createDefaultFontSizeBaseMap = (fontSizeBase: number = FONT_SIZE_BASE_DEFAULT): FontSizeBaseMap => {
  return new Map([
    ['mobile', fontSizeBase],
    ['tablet', fontSizeBase],
    ['desktop', fontSizeBase],
  ]);
};

/**
 * Finds font-size-base token from tokens array
 * @param tokens - Array of tokens to search in
 * @returns FontSizeBaseMap with breakpoint as key and font-size-base value in px as value
 */
export const getFontSizeBaseMap = (tokens: Token[]): FontSizeBaseMap => {
  const fontSizeBaseMap = new Map<string, number>();

  const fontSizeBaseTokens = tokens.filter(
    (token) =>
      (token.tokenType === TokenType.fontSize || token.tokenType === TokenType.dimension) &&
      (token.name.toLowerCase().includes('font-size-base') ||
        token.origin?.name?.toLowerCase().includes('font-size-base')),
  );

  fontSizeBaseTokens.forEach((token) => {
    const device = getDeviceAlias(token).toLowerCase() || 'mobile';
    let measure: number | undefined;

    if (token.tokenType === TokenType.fontSize) {
      const fontSizeToken = token as FontSizeToken;
      measure = fontSizeToken.value?.measure;
    } else if (token.tokenType === TokenType.dimension) {
      const dimensionToken = token as DimensionToken;
      measure = dimensionToken.value?.measure;
    }

    if (typeof measure === 'number' && measure > 0) {
      fontSizeBaseMap.set(device, measure);
    }
  });

  if (fontSizeBaseMap.size === 0) {
    const singleFontSizeBase = tokens.find(
      (token) =>
        (token.tokenType === TokenType.fontSize || token.tokenType === TokenType.dimension) &&
        (token.name.toLowerCase() === 'font-size-base' || token.origin?.name?.toLowerCase() === 'font-size-base'),
    );

    let measure: number | undefined;
    if (singleFontSizeBase?.tokenType === TokenType.fontSize) {
      const fontSizeToken = singleFontSizeBase as FontSizeToken;
      measure = fontSizeToken.value?.measure;
    } else if (singleFontSizeBase?.tokenType === TokenType.dimension) {
      const dimensionToken = singleFontSizeBase as DimensionToken;
      measure = dimensionToken.value?.measure;
    }

    if (typeof measure === 'number' && measure > 0) {
      fontSizeBaseMap.set('mobile', measure);
      fontSizeBaseMap.set('tablet', measure);
      fontSizeBaseMap.set('desktop', measure);
    }
  }

  return fontSizeBaseMap;
};

/**
 * Gets font-size-base value for a specific breakpoint
 * @param fontSizeBaseMap - Map of breakpoint to font-size-base values
 * @param breakpoint - Breakpoint name (mobile, tablet, desktop)
 * @returns Font-size-base value in px, or DEFAULT_FONT_SIZE_BASE as default
 */
export const getFontSizeBaseForBreakpoint = (fontSizeBaseMap: FontSizeBaseMap, breakpoint: string): number => {
  const normalizedBreakpoint = breakpoint.toLowerCase();

  return fontSizeBaseMap.get(normalizedBreakpoint) || fontSizeBaseMap.get('mobile') || FONT_SIZE_BASE_DEFAULT;
};

/**
 * Converts a pixel value to rem units based on font-size-base
 * @param value - Value in pixels to convert
 * @param baseFontSize - Base font size in pixels (default: DEFAULT_FONT_SIZE_BASE)
 * @returns Value in rem units
 */
export const makeRelativeUnit = (
  value: string | number,
  baseFontSize: number = FONT_SIZE_BASE_DEFAULT,
): string | number => {
  if (baseFontSize && baseFontSize > 0) {
    return pxToRem(value, { baseFontSize });
  }

  return value;
};

/**
 * Replaces px units with rem units in a string
 * @param value - String containing px values
 * @param baseFontSize - Base font size in pixels (default: DEFAULT_FONT_SIZE_BASE)
 * @returns String with px replaced by rem
 */
export const replacePxWithRemUnits = (value: string, baseFontSize: number = FONT_SIZE_BASE_DEFAULT): string => {
  if (!baseFontSize || baseFontSize <= 0) {
    return value;
  }

  return value.replace(/(\d+(?:\.\d+)?)px/g, (_, number: string) => pxToRem(number, { baseFontSize }));
};
