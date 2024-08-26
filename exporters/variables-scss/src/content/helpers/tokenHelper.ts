import { Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { NamingHelper, StringCase } from '@supernovaio/export-helpers';

export const tokenVariableName = (token: Token, tokenGroups: Array<TokenGroup>, withParent: boolean): string => {
  let parent;
  if (withParent) {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  } else {
    parent = null;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};
