import { TokenGroup, Token, TokenType } from '@supernovaio/sdk-exporters';
import { generateFileContent } from './contentGenerator';

export type FileData = {
  fileName: string;
  tokenTypes: TokenType[];
  groupNames: string[];
  withCssObject?: boolean;
  hasParentPrefix?: boolean;
  sortByNumValue?: boolean;
};

const filesData: FileData[] = [
  {
    fileName: '_borders.scss',
    tokenTypes: [TokenType.dimension],
    groupNames: ['Border'],
    withCssObject: false,
    sortByNumValue: true,
  },
  {
    fileName: '_other.scss',
    tokenTypes: [TokenType.dimension, TokenType.string],
    groupNames: ['Grid', 'Container', 'Breakpoint'],
  },
  {
    fileName: '_radii.scss',
    tokenTypes: [TokenType.dimension],
    groupNames: ['Radius'],
    hasParentPrefix: false,
    sortByNumValue: true,
  },
  {
    fileName: '_spacing.scss',
    tokenTypes: [TokenType.dimension],
    groupNames: ['Spacing'],
    hasParentPrefix: false,
    sortByNumValue: true,
  },
  {
    fileName: '_colors.scss',
    tokenTypes: [TokenType.color],
    groupNames: [''],
  },
];

export const generateFiles = (
  tokens: Array<Token>,
  mappedTokens: Map<string, Token>,
  tokenGroups: Array<TokenGroup>,
) => {
  return filesData.map(
    // TODO: refactor this to use fileData instead of destructuring
    ({ fileName, tokenTypes, groupNames, withCssObject = true, hasParentPrefix = true, sortByNumValue = false }) => {
      const fileContent = generateFileContent(
        tokens,
        mappedTokens,
        tokenGroups,
        tokenTypes,
        groupNames,
        withCssObject,
        hasParentPrefix,
        sortByNumValue,
      );

      return {
        fileName,
        ...fileContent,
      };
    },
  );
};
