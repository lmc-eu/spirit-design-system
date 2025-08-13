import { DimensionToken, Token, TokenType } from '@supernovaio/sdk-exporters';

const testToken = {
  name: 'spacing',
  tokenType: TokenType.dimension,
  parentGroupId: '10',
  origin: {
    name: 'grid/spacing',
  },
  tokenPath: ['grid'],
  value: {
    unit: 'Pixels',
    measure: 0,
    referencedTokenId: null,
  },
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
        {
          id: 'device-tokens-id',
          name: 'Device',
        },
      ],
    },
  ],
  propertyValues: { collection: 'device-tokens-id' },
};

const testTokenBreakpoint = {
  name: 'breakpoint',
  tokenType: TokenType.dimension,
  parentGroupId: '0',
  origin: {
    name: 'breakpoint',
  },
  tokenPath: ['Measure'],
  value: {
    unit: 'Pixels',
    measure: 0,
    referencedTokenId: null,
  },
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
        {
          id: 'device-tokens-id',
          name: 'Device',
        },
      ],
    },
  ],
  propertyValues: {
    collection: 'device-tokens-id',
    device: 'mobile',
  },
};

const testTokenDeviceUpdated = {
  ...testToken,
  propertyValues: {
    collection: 'device-tokens-id',
    device: 'mobile',
  },
};

const testTokenBreakpointUpdated = {
  ...testTokenBreakpoint,
  name: 'breakpoint-test',
  origin: {
    name: 'breakpoint-test',
  },
};

const testTokenDeviceBreakpointCustom = {
  ...testTokenBreakpoint,
  propertyValues: {
    collection: 'device-tokens-id',
    device: 'Mobile-Custom',
  },
};

export const exampleDeviceTokens = new Map<string, Token>();
exampleDeviceTokens.set('stringRef1', testToken as unknown as DimensionToken);
exampleDeviceTokens.set('stringRef2', testToken as unknown as DimensionToken);
exampleDeviceTokens.set('stringRef3', testToken as unknown as DimensionToken);

export const exampleDeviceUpdatedTokens = new Map<string, Token>();
exampleDeviceUpdatedTokens.set('stringRef1', testTokenDeviceUpdated as unknown as DimensionToken);
exampleDeviceUpdatedTokens.set('stringRef2', testTokenDeviceUpdated as unknown as DimensionToken);
exampleDeviceUpdatedTokens.set('stringRef3', testTokenDeviceUpdated as unknown as DimensionToken);

export const exampleDeviceTokenBreakpointCustom = new Map<string, Token>();
exampleDeviceTokenBreakpointCustom.set('customRef1', testTokenDeviceBreakpointCustom as unknown as DimensionToken);

export const exampleDeviceTokenBreakpoint = new Map<string, Token>();
exampleDeviceTokenBreakpoint.set('breakpointRef1', testTokenBreakpoint as unknown as DimensionToken);

export const exampleDeviceTokenMultiWord = new Map<string, Token>();
exampleDeviceTokenMultiWord.set('multipleRef1', testTokenBreakpointUpdated as unknown as DimensionToken);
