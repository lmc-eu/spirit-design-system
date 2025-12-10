import { FontSizeToken, Token, TokenType } from '@supernovaio/sdk-exporters';
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
      token.tokenType === TokenType.fontSize &&
      (token.name.toLowerCase().includes('font-size-base') ||
        token.origin?.name?.toLowerCase().includes('font-size-base')),
  ) as FontSizeToken[];

  fontSizeBaseTokens.forEach((token) => {
    const device = getDeviceAlias(token).toLowerCase() || 'mobile';
    const measure = token.value?.measure;

    if (typeof measure === 'number' && measure > 0) {
      fontSizeBaseMap.set(device, measure);
    }
  });

  if (fontSizeBaseMap.size === 0) {
    const singleFontSizeBase = tokens.find(
      (token) =>
        token.tokenType === TokenType.fontSize &&
        (token.name.toLowerCase() === 'font-size-base' || token.origin?.name?.toLowerCase() === 'font-size-base'),
    ) as FontSizeToken | undefined;

    if (singleFontSizeBase?.value?.measure && typeof singleFontSizeBase.value.measure === 'number') {
      fontSizeBaseMap.set('mobile', singleFontSizeBase.value.measure);
      fontSizeBaseMap.set('tablet', singleFontSizeBase.value.measure);
      fontSizeBaseMap.set('desktop', singleFontSizeBase.value.measure);
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
    return `${Number(value) / Number(baseFontSize)}rem`;
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
