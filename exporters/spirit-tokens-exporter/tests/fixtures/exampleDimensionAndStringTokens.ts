import {
  DimensionToken,
  DimensionTokenValue,
  StringToken,
  StringTokenValue,
  Token,
  TokenType,
  Unit,
} from '@supernovaio/sdk-exporters';

const testDimension: DimensionTokenValue = {
  measure: 32,
  unit: Unit.pixels,
  referencedTokenId: null,
};

const testString: StringTokenValue = {
  text: '12',
  referencedTokenId: null,
};

export const exampleDimensionAndStringTokens = new Map<string, Token>();
exampleDimensionAndStringTokens.set('dimensionRef', {
  id: 'dimensionRef',
  name: 'desktop',
  tokenType: TokenType.dimension,
  parentGroupId: '1',
  origin: {
    name: 'Grid/spacing/desktop',
  },
  value: testDimension,
} as DimensionToken);
exampleDimensionAndStringTokens.set('stringRef', {
  id: 'stringRef',
  name: 'Columns',
  tokenType: TokenType.string,
  parentGroupId: '2',
  origin: {
    name: 'Grid/Columns',
  },
  value: testString,
} as StringToken);

export const exampleInvariantTokens = new Map<string, Token>();
exampleInvariantTokens.set('radiiRef', {
  id: 'radiiRef',
  name: 'radius-full',
  tokenType: TokenType.dimension,
  parentGroupId: '1',
  origin: {
    name: 'Radius/radius-full',
  },
  value: {
    unit: 'Pixels',
    measure: 9999,
    referencedTokenId: null,
  },
} as DimensionToken);
