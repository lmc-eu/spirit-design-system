import { DimensionToken, FontSizeToken, Token, TokenType } from '@supernovaio/sdk-exporters';
import { getDeviceAlias } from './deviceHelpers';

export type FontSizeBaseMap = Map<string, number>;

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
 * @returns Font-size-base value in px, or 16 as default
 */
export const getFontSizeBaseForBreakpoint = (fontSizeBaseMap: FontSizeBaseMap, breakpoint: string): number => {
  const normalizedBreakpoint = breakpoint.toLowerCase();

  return fontSizeBaseMap.get(normalizedBreakpoint) || fontSizeBaseMap.get('mobile') || 16;
};

/**
 * Converts a pixel value to rem units based on font-size-base
 * @param value - Value in pixels to convert
 * @param baseFontSize - Base font size in pixels (default: 16)
 * @returns Value in rem units
 */
export const makeRelativeUnit = (value: string | number, baseFontSize: number = 16): string | number => {
  if (baseFontSize && baseFontSize > 0) {
    const raw = Number(value) / Number(baseFontSize);
    const rounded = Math.round((raw + Number.EPSILON) * 100) / 100;
    const normalized = Math.abs(rounded) === 0 ? 0 : rounded;
    const pretty = normalized.toFixed(2).replace(/\.?0+$/, '');

    return `${pretty}rem`;
  }

  return value;
};

/**
 * Replaces px units with rem units in a string
 * @param value - String containing px values
 * @param baseFontSize - Base font size in pixels (default: 16)
 * @returns String with px replaced by rem
 */
export const replacePxWithRemUnits = (value: string, baseFontSize: number = 16): string => {
  return value.replace(/(\d+(?:\.\d+)?)px/g, (_, number: string) => makeRelativeUnit(number, baseFontSize) as string);
};
