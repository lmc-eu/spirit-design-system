import { TokenGroup, Token, TokenType } from '@supernovaio/sdk-exporters';
import { createFileWithContent } from './contentGenerator';

const filesData = [
  {
    fileName: '_spaces.scss',
    tokenTypes: TokenType.dimension,
    groupNames: 'Spacing',
    withCssObject: true,
    withParent: false,
  },
  {
    fileName: '_radii.scss',
    tokenTypes: TokenType.dimension,
    groupNames: 'Radius',
    withCssObject: true,
    withParent: false,
  },
  {
    fileName: '_borders.scss',
    tokenTypes: TokenType.dimension,
    groupNames: 'Border',
    withCssObject: false,
    withParent: true,
  },
  {
    fileName: '_other.scss',
    tokenTypes: [TokenType.dimension, TokenType.string],
    groupNames: ['Grid', 'Container', 'Breakpoint'],
    withCssObject: true,
    withParent: true,
  },
];

export const generateFiles = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
) => {
  return filesData.map(({ fileName, tokenTypes, groupNames, withCssObject, withParent }) => {
    return createFileWithContent(
      tokens,
      mappedTokens,
      tokenGroups,
      fileName,
      tokenTypes,
      groupNames,
      withCssObject,
      withParent,
    );
  });
};
