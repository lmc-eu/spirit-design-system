import { TokenType } from '@supernovaio/sdk-exporters';

export type FileData = {
  fileName: string;
  tokenTypes: TokenType[];
  groupNames?: string[];
  excludeGroupNames?: string[] | null;
  hasMixin?: boolean;
  hasStylesObject?: boolean;
  hasParentPrefix?: boolean;
  sortByNumValue?: boolean;
};

export const nonThemedFilesData: FileData[] = [
  {
    fileName: 'borders',
    tokenTypes: [TokenType.dimension],
    groupNames: ['Border'],
    hasStylesObject: false,
    sortByNumValue: true,
  },
  {
    fileName: 'other',
    tokenTypes: [TokenType.dimension, TokenType.string],
    excludeGroupNames: ['Border', 'Radius', 'Spacing'],
    sortByNumValue: true,
  },
  {
    fileName: 'radii',
    tokenTypes: [TokenType.dimension],
    groupNames: ['Radius'],
    hasParentPrefix: false,
    sortByNumValue: true,
  },
  {
    fileName: 'spacing',
    tokenTypes: [TokenType.dimension],
    groupNames: ['Spacing'],
    hasParentPrefix: false,
    sortByNumValue: true,
  },
  {
    fileName: 'shadows',
    tokenTypes: [TokenType.shadow],
    hasParentPrefix: false,
  },
  {
    fileName: 'gradients',
    tokenTypes: [TokenType.gradient],
    hasParentPrefix: true,
  },
  {
    fileName: 'typography',
    tokenTypes: [TokenType.typography],
    hasParentPrefix: false,
  },
];

export const themedFilesData: FileData[] = [
  {
    fileName: 'colors',
    tokenTypes: [TokenType.color],
    hasMixin: true,
    hasStylesObject: false,
  },
];

export const commonThemedFilesData: FileData[] = [{ fileName: 'color-tokens', tokenTypes: [TokenType.color] }];
