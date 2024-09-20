import { Token, TokenGroup, TokenType, TypographyToken } from '@supernovaio/sdk-exporters';
import { groupFunctions } from './mockedExampleTokens';

export const exampleMockedTypographyTokens = new Map<string, Token>();
exampleMockedTypographyTokens.set('typographyRef1', {
  id: 'typographyRef1',
  name: 'Bold',
  tokenType: TokenType.typography,
  parentGroupId: '1',
  origin: {
    name: 'Heading/Desktop/XLarge/Bold',
  },
  value: {
    fontSize: { unit: 'Pixels', measure: 64 },
    lineHeight: { measure: 120 },
    fontFamily: { text: 'Inter' },
    fontWeight: { text: '700' },
  },
} as TypographyToken);
exampleMockedTypographyTokens.set('typographyRef2', {
  id: 'typographyRef2',
  name: 'Bold-Underline',
  tokenType: TokenType.typography,
  parentGroupId: '2',
  origin: {
    name: 'Heading/Desktop/XLarge/Bold-Underline',
  },
  value: {
    fontSize: { unit: 'Pixels', measure: 64 },
    lineHeight: { measure: 120 },
    fontFamily: { text: 'Inter' },
    fontWeight: { text: '700' },
  },
} as TypographyToken);

export const expectedTypographyValue = `(
font-family: "'Inter', sans-serif",
font-size: 64px,
font-style: italic,
font-weight: 700,
line-height: 1.2
)`;

export const exampleMockedTypographyGroups: TokenGroup[] = [
  {
    ...groupFunctions,
    id: '1',
    idInVersion: 'idInVersionValue',
    brandId: 'brandIdValue',
    designSystemVersionId: 'designSystemVersionIdValue',
    name: 'Heading',
    description: '',
    isRoot: false,
    tokenType: TokenType.typography,
    childrenIds: ['typographyRef1'],
    path: [],
    tokenIds: ['typographyRef1'],
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
    name: 'Heading',
    description: '',
    isRoot: false,
    tokenType: TokenType.typography,
    childrenIds: ['typographyRef2'],
    path: [],
    tokenIds: ['typographyRef2'],
    subgroupIds: [],
    parentGroupId: 'parent2',
    sortOrder: -1,
    createdAt: null,
    updatedAt: null,
  },
];
