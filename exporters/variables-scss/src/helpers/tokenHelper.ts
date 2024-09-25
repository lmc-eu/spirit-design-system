import {
  ColorToken,
  DimensionToken,
  GradientToken,
  ShadowToken,
  StringToken,
  Token,
  TokenGroup,
  TokenType,
  TypographyTokenValue,
} from '@supernovaio/sdk-exporters';
import { NamingHelper, StringCase } from '@supernovaio/export-helpers';
import { toCamelCase } from './stringHelper';

export const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, hasParentPrefix: boolean): string => {
  let parent;
  if (hasParentPrefix) {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  } else {
    parent = null;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};

export const normalizeZeroValueWithUnit = (value: string | number, unit: string): string | number => {
  if (value === 0) {
    return 0;
  }

  return `${value}${unit}`;
};

export const formatTokenStyleByOutput = (name: string, value: string | number, hasJsOutput: boolean, unit?: string) => {
  const normalizedValue = unit ? normalizeZeroValueWithUnit(value, unit) : value;

  if (hasJsOutput) {
    return `export const ${toCamelCase(name)} = ${typeof normalizedValue === 'number' ? normalizedValue : `'${normalizedValue}'`};`;
  }

  return `$${name}: ${normalizedValue} !default;`;
};

export const sortTokens = (
  tokens: Token[],
  tokenGroups: Array<TokenGroup>,
  hasParentPrefix: boolean,
  group: string,
  sortByNumValue: boolean,
) => {
  const sortedTokens = tokens.sort((a, b) => {
    if (sortByNumValue) {
      const value = (token: Token) => {
        if (token.tokenType === TokenType.dimension) {
          const dimensionToken = token as DimensionToken;

          return dimensionToken.value.measure;
        }

        if (token.tokenType === TokenType.string) {
          const stringToken = token as StringToken;

          return stringToken.value.text;
        }

        return (token as ColorToken | ShadowToken | GradientToken).value;
      };

      const aNumMatch = value(a);
      const bNumMatch = value(b);

      if (aNumMatch && bNumMatch) {
        return parseInt(aNumMatch.toString(), 10) - parseInt(bNumMatch.toString(), 10);
      }
    }

    const aCompare = tokenVariableName(a, tokenGroups, hasParentPrefix);
    const bCompare = tokenVariableName(b, tokenGroups, hasParentPrefix);

    return aCompare.localeCompare(bCompare);
  });

  return sortedTokens;
};

export const addEmptyLineBetweenTokenGroups = (cssTokens: { css: string | null; parentGroupId: string }[]): string => {
  let lastGroupId: string | null = null;
  const cssWithGroupSpacing: string[] = [];

  cssTokens.forEach(({ css, parentGroupId }) => {
    if (lastGroupId && parentGroupId !== lastGroupId && css) {
      cssWithGroupSpacing.push('');
    }

    if (css) {
      cssWithGroupSpacing.push(css);
    }

    lastGroupId = parentGroupId;
  });

  return cssWithGroupSpacing.join('\n');
};

export const addAngleVarToGradient = (inputString: string): string => {
  // Regex to capture the angle and all color stops (with percentages if any)
  const regex = /linear-gradient\(([^,]+),\s*(.+)\)/;
  const match = inputString.match(regex);

  if (match) {
    const angle = match[1].trim(); // Extract the angle
    const angleValue = Number(angle.match(/\d+/)) + 90; // Normalize angle and add 90 degrees
    const angleUnit = angle.match(/deg/);
    const colorStops = match[2].trim(); // Extract the rest (color stops)
    const cssAngleVar = '--gradient-angle';

    return `linear-gradient(var(${cssAngleVar}, ${angleValue}${angleUnit}), ${colorStops})`;
  }

  return inputString;
};

export const typographyValue = (
  { fontFamily, fontSize, fontWeight, lineHeight }: TypographyTokenValue,
  isItalic: boolean,
  hasJsOutput: boolean,
): string => {
  const baseStyles = [
    `font-family: "'${fontFamily.text}', sans-serif"`,
    `font-size: ${fontSize.measure}${fontSize.unit === 'Pixels' ? 'px' : fontSize.unit}`,
    `font-style: ${isItalic ? 'italic' : 'normal'}`,
    `font-weight: ${fontWeight.text}`,
  ];

  const baseJsStyles = [
    `fontFamily: "'${fontFamily.text}', sans-serif"`,
    `fontSize: "${fontSize.measure}${fontSize.unit === 'Pixels' ? 'px' : fontSize.unit}"`,
    `fontStyle: "${isItalic ? 'italic' : 'normal'}"`,
    `fontWeight: ${fontWeight.text}`,
  ];

  if (lineHeight && lineHeight.measure) {
    hasJsOutput
      ? baseJsStyles.push(`lineHeight: ${lineHeight.measure / 100}`)
      : baseStyles.push(`line-height: ${lineHeight.measure / 100},`);
  }

  if (hasJsOutput) {
    return `{
${baseJsStyles.join(',\n')}
}`;
  }

  return `(
${baseStyles.join(',\n')}
)`;
};
