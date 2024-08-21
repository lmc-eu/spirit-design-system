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
