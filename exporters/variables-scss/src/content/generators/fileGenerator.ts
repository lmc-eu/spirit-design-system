import { TokenGroup, Token, TokenType } from '@supernovaio/sdk-exporters';
import { generateFileContent } from './contentGenerator';

const filesData = [
  {
    fileName: '_spacing.scss',
    tokenTypes: TokenType.dimension,
    groupNames: 'Spacing',
    withCssObject: true,
    hasParentPrefix: false,
  },
  {
    fileName: '_radii.scss',
    tokenTypes: TokenType.dimension,
    groupNames: 'Radius',
    withCssObject: true,
    hasParentPrefix: false,
  },
  {
    fileName: '_borders.scss',
    tokenTypes: TokenType.dimension,
    groupNames: 'Border',
    withCssObject: false,
    hasParentPrefix: true,
  },
  {
    fileName: '_other.scss',
    tokenTypes: [TokenType.dimension, TokenType.string],
    groupNames: ['Grid', 'Container', 'Breakpoint'],
    withCssObject: true,
    hasParentPrefix: true,
  },
];

export const generateFiles = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
) => {
  return filesData.map(({ fileName, tokenTypes, groupNames, withCssObject, hasParentPrefix }) => {
    const fileContent = generateFileContent(
      tokens,
      mappedTokens,
      tokenGroups,
      tokenTypes,
      groupNames,
      withCssObject,
      hasParentPrefix,
    );

    return {
      fileName,
      ...fileContent,
    };
  });
};
