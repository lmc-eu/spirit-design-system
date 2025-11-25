import { Token, TokenType } from '@supernovaio/sdk-exporters';
import { PX_UNIT } from '../constants';
import { pxToRem } from '../converters/pxToRem';
import { UNIT_FORMAT_RULES } from '../config/unitFormatConfig';

export type UnitFormatContext = {
  token: Token;
  tokenType: TokenType;
  baseFontSize: number;
  isFontSizeBaseToken: boolean;
};

export type UnitFormatRule = {
  tokenTypes: TokenType[];
  shouldConvert: (ctx: UnitFormatContext) => boolean;
  converterNames: Array<'pxToRem'>;
};

export const DEFAULT_UNIT_RULES: UnitFormatRule[] = UNIT_FORMAT_RULES;

const applyConverters = (
  valuePx: string | number,
  ctx: UnitFormatContext,
  converterNames: UnitFormatRule['converterNames'],
) => {
  return converterNames.reduce<string>((acc, converterName) => {
    if (converterName === 'pxToRem') {
      return pxToRem(acc, { baseFontSize: ctx.baseFontSize });
    }

    return acc;
  }, String(valuePx));
};

/**
 * Formats a numeric token value with unit. If rules allow, converts px -> rem using configured converters.
 * Returns either `0` (number) for zeros, or a formatted string like `2rem`, `32px`, `50%`, ...
 *
 * @param value - The numeric value to format
 * @param unit - The unit of the value (e.g., 'px', 'rem', '%')
 * @param ctx - The formatting context (token type, name, etc.)
 * @param rules - Array of formatting rules to apply
 * @returns {string|number|undefined} Formatted value as string, number (0 for zeros), or undefined
 */
export const formatUnitValue = (
  value: number | undefined,
  unit: string | undefined,
  ctx: UnitFormatContext,
  rules: UnitFormatRule[] = DEFAULT_UNIT_RULES,
): string | number | undefined => {
  if (value === undefined) {
    return undefined;
  }

  if (value === 0) {
    return 0;
  }

  if (!unit) {
    return value;
  }

  if (unit !== PX_UNIT) {
    return `${value}${unit}`;
  }

  const rule = rules.find((r) => r.tokenTypes.includes(ctx.tokenType) && r.shouldConvert(ctx));
  if (!rule) {
    return `${value}${unit}`;
  }

  return applyConverters(value, ctx, rule.converterNames);
};

export const replacePxWithRem = (value: string, baseFontSize: number): string => {
  if (!baseFontSize || baseFontSize <= 0) {
    return value;
  }

  return value.replace(new RegExp(`(\\d+(?:\\.\\d+)?)${PX_UNIT}`, 'g'), (_, number: string) =>
    pxToRem(number, { baseFontSize }),
  );
};
