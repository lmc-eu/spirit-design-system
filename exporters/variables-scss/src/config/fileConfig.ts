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
    fileName: '_shadows.scss',
    tokenTypes: [TokenType.shadow],
    groupNames: [''],
    hasParentPrefix: false,
  },
  {
    fileName: '_gradients.scss',
    tokenTypes: [TokenType.gradient],
    groupNames: [''],
    hasParentPrefix: true,
  },
  {
    fileName: '_typography.scss',
    tokenTypes: [TokenType.typography],
    groupNames: [''],
    withCssObject: true,
    hasParentPrefix: false,
  },
];

export const themedFilesData: FileData[] = [
  {
    fileName: '_colors.scss',
    tokenTypes: [TokenType.color],
    groupNames: [''],
  },
];
