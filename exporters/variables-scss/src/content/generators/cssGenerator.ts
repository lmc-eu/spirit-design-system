import { DimensionToken, Token, TokenGroup } from '@supernovaio/sdk-exporters';
import { NamingHelper, StringCase } from '@supernovaio/export-helpers';
import { toPlural } from '../helpers/stringHelper';

export const tokenVariableName = (
  token: Token,
  tokenGroups: Array<TokenGroup>,
  withoutParent: boolean = false,
): string => {
  let parent;
  if (withoutParent) {
    parent = null;
  } else {
    parent = tokenGroups.find((group) => group.id === token.parentGroupId)!;
  }

  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.paramCase, parent, '');
};

const generateObjectContent = (tokens: Array<Token>, tokenGroups: Array<TokenGroup>): string => {
  let result = '';

  tokens.forEach((token) => {
    const dimensionToken = token as DimensionToken;
    const name = tokenVariableName(dimensionToken, tokenGroups, true);
    const numericPart = name.match(/\d+/)?.[0];
    const prefix = `${token.origin?.name?.split('/')[0].toLowerCase()}-`; // Use template literal
    const nonNumericPart = name.replace(prefix, '');
    if (numericPart) {
      result += `${numericPart}: $${name},\n`;
    } else if (nonNumericPart) {
      result += `${nonNumericPart}: $${name},\n`;
    }
  });

  return result;
};

export const generateCssObject = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
): string => {
  const [firstToken] = tokens;
  let objectName = '';
  if (firstToken && firstToken.origin?.name) {
    objectName = toPlural(firstToken.origin.name.split('/')[0].toLowerCase());
  }

  const objectContent = generateObjectContent(tokens, tokenGroups);

  return `$${objectName}: (\n${objectContent}) !default;`;
};
