import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
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

export const formatTokenName = (name: string, value: string | number, unit?: string) => {
  if (unit) {
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
