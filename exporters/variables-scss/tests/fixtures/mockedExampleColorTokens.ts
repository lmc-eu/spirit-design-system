import { ColorToken, Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import { groupFunctions } from './mockedExampleTokens';

export const exampleMockedColorsTokens = new Map<string, Token>();
exampleMockedColorsTokens.set('actionColorRef', {
  id: 'actionColorRef',
  name: 'active',
  tokenType: TokenType.color,
  parentGroupId: '1',
  origin: {
    name: 'action/button/primary/default',
  },
  value: {
    color: {
      r: 202,
      g: 32,
      b: 38,
      referencedTokenId: null,
    },
    opacity: {
      unit: 'Raw',
      measure: 1,
      referencedTokenId: null,
    },
    referencedTokenId: null,
  },
} as ColorToken);
exampleMockedColorsTokens.set('backgroundColorRef', {
  id: 'backgroundColorRef',
  name: 'primary',
  tokenType: TokenType.color,
  parentGroupId: '2',
  origin: {
    name: 'background/primary',
  },
  value: {
    color: {
      r: 255,
      g: 255,
      b: 255,
      referencedTokenId: null,
    },
    opacity: {
      unit: 'Raw',
      measure: 1,
      referencedTokenId: null,
    },
    referencedTokenId: null,
  },
} as ColorToken);

export const exampleMockedColorGroups: TokenGroup[] = [
  {
    ...groupFunctions,
    id: '1',
    idInVersion: 'idInVersionValue',
    brandId: 'brandIdValue',
    designSystemVersionId: 'designSystemVersionIdValue',
    name: 'primary',
    description: '',
    isRoot: false,
    tokenType: TokenType.color,
    childrenIds: ['actionColorRef'],
    path: ['action', 'button'],
    tokenIds: ['actionColorRef'],
    subgroupIds: [],
    parentGroupId: 'parent1',
    sortOrder: -1,
    createdAt: null,
    updatedAt: null,
  },
  {
    ...groupFunctions,
    id: '2',
    idInVersion: 'idInVersionValue',
    brandId: 'brandIdValue',
    designSystemVersionId: 'designSystemVersionIdValue',
    name: 'background',
    description: '',
    isRoot: false,
    tokenType: TokenType.color,
    childrenIds: ['backgroundColorRef'],
    path: [],
    tokenIds: ['backgroundColorRef'],
    subgroupIds: [],
    parentGroupId: 'parent2',
    sortOrder: -1,
    createdAt: null,
    updatedAt: null,
  },
];
