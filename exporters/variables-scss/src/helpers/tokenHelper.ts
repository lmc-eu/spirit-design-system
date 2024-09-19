import { Token, TokenGroup, TypographyTokenValue } from '@supernovaio/sdk-exporters';
import { NamingHelper, StringCase } from '@supernovaio/export-helpers';

export const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, hasParentPrefix: boolean): string => {
  let parent;
  if (hasParentPrefix) {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  } else {
    parent = null;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};

export const formatTokenName = (name: string, value: string | number, convertToJs: boolean, unit?: string) => {
  if (convertToJs) {
    if (unit) {
      return `export const ${NamingHelper.codeSafeVariableName(name, StringCase.camelCase)} = '${value}${unit};'`;
    }

    return `export const ${NamingHelper.codeSafeVariableName(name, StringCase.camelCase)} = '${value};'`;
  }

  if (!convertToJs && unit) {
    return `$${name}: ${value}${unit} !default;`;
  }

  return `$${name}: ${value} !default;`;
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
      const aNumMatch = a.name.match(/\d+$/);
      const bNumMatch = b.name.match(/\d+$/);

      if (aNumMatch && bNumMatch) {
        return parseInt(aNumMatch[0], 10) - parseInt(bNumMatch[0], 10);
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
  isJsToken: boolean,
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
    `fontWeight: "${fontWeight.text}"`,
  ];

  if (lineHeight && lineHeight.measure) {
    baseStyles.push(`line-height: ${lineHeight.measure / 100}`);
  }

  if (isJsToken) {
    return `{
${baseJsStyles.join(',\n')}
}`;
  }

  return `(
${baseStyles.join(',\n')}
)`;
};
