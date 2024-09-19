import { TokenType } from '@supernovaio/sdk-exporters';

export type FileData = {
  fileName: string;
  tokenTypes: TokenType[];
  groupNames: string[];
  withCssObject?: boolean;
  hasParentPrefix?: boolean;
  sortByNumValue?: boolean;
};

export const nonThemedFilesData: FileData[] = [
  {
    fileName: 'borders',
    tokenTypes: [TokenType.dimension],
    groupNames: ['Border'],
    withCssObject: false,
    sortByNumValue: true,
  },
  {
    fileName: 'other',
    tokenTypes: [TokenType.dimension, TokenType.string],
    groupNames: ['Grid', 'Container', 'Breakpoint'],
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
    groupNames: [''],
    hasParentPrefix: false,
  },
  {
    fileName: 'gradients',
    tokenTypes: [TokenType.gradient],
    groupNames: [''],
    hasParentPrefix: true,
  },
  {
    fileName: 'typography',
    tokenTypes: [TokenType.typography],
    groupNames: [''],
    withCssObject: true,
    hasParentPrefix: false,
  },
];

export const themedFilesData: FileData[] = [
  {
    fileName: 'colors',
    tokenTypes: [TokenType.color],
    groupNames: [''],
  },
];
