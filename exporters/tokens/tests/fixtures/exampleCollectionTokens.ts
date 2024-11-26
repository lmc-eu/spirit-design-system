import { ColorToken, StringToken, Token, TokenType } from '@supernovaio/sdk-exporters';

export const exampleCollectionTokens = new Map<string, Token>();
exampleCollectionTokens.set('colorCollectionRef1', {
  id: 'colorCollectionRef1',
  name: 'Theme Color',
  tokenType: TokenType.color,
  properties: [
    {
      name: 'Collection',
      options: [
        {
          id: 'theme-tokens-id',
          name: 'Theme tokens',
        },
        {
          id: 'primitives-id',
          name: 'Primitives',
        },
        {
          id: 'global-tokens-id',
          name: 'Global tokens',
        },
      ],
    },
  ],
  propertyValues: { collection: 'theme-tokens-id' },
} as unknown as ColorToken);

exampleCollectionTokens.set('colorCollectionRef2', {
  id: 'colorCollectionRef2',
  name: 'Primitive Color',
  tokenType: TokenType.color,
  properties: [
    {
      name: 'Collection',
      options: [
        {
          id: 'theme-tokens-id',
          name: 'Theme tokens',
        },
        {
          id: 'primitives-id',
          name: 'Primitives',
        },
        {
          id: 'global-tokens-id',
          name: 'Global tokens',
        },
      ],
    },
  ],
  propertyValues: { Collection: 'primitives-id' },
} as unknown as ColorToken);

exampleCollectionTokens.set('colorCollectionRef3', {
  id: 'colorCollectionRef3',
  name: 'Global Color',
  tokenType: TokenType.color,
  properties: [
    {
      name: 'Collection',
      options: [
        {
          id: 'theme-tokens-id',
          name: 'Theme tokens',
        },
        {
          id: 'primitives-id',
          name: 'Primitives',
        },
        {
          id: 'global-tokens-id',
          name: 'Global tokens',
        },
      ],
    },
  ],
  propertyValues: { Collection: 'global-tokens-id' },
} as unknown as ColorToken);

exampleCollectionTokens.set('stringRef', {
  id: 'stringRef',
  name: 'Columns',
  tokenType: TokenType.string,
  parentGroupId: '2',
  origin: {
    name: 'Grid/Columns',
  },
  value: 'value',
} as unknown as StringToken);

export const expectedCollectionValue = [
  {
    id: 'colorCollectionRef1',
    name: 'Theme Color',
    properties: [
      {
        name: 'Collection',
        options: [
          {
            id: 'theme-tokens-id',
            name: 'Theme tokens',
          },
          {
            id: 'primitives-id',
            name: 'Primitives',
          },
          {
            id: 'global-tokens-id',
            name: 'Global tokens',
          },
        ],
      },
    ],
    propertyValues: { collection: 'theme-tokens-id' },
    tokenType: 'Color',
  },
  {
    id: 'stringRef',
    name: 'Columns',
    origin: { name: 'Grid/Columns' },
    parentGroupId: '2',
    tokenType: 'String',
    value: 'value',
  },
];
