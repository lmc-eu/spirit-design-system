import { Token, TokenGroup, TokenType } from '@supernovaio/sdk-exporters';
import {
  colorGroupsReducer,
  createGlobalColorsObject,
  createObjectStructureFromTokenNameParts,
  generateCssObjectFromTokens,
  getTokenAlias,
  normalizeFirstNamePart,
  parseGroupName,
} from '../cssObjectGenerator';
import {
  exampleMockedColorGroups,
  exampleMockedColorsTokens,
  exampleMockedGroups,
  exampleMockedInvariantTokens,
  exampleMockedTokens,
} from '../../../tests/fixtures/mockedExampleTokens';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleMockedGroups;

describe('cssObjectGenerator', () => {
  describe('generateCssObjectFromTokens', () => {
    it('should generate CSS object from tokens', () => {
      const css = generateCssObjectFromTokens(
        Array.from(exampleMockedTokens.values()),
        mappedTokens,
        tokenGroups,
        true,
        false,
      );

      expect(css).toStrictEqual({
        $grids: { columns: '$grid-columns', spacing: { desktop: '$grid-spacing-desktop' } },
      });
    });

    it('should generate CSS object from tokens with colors', () => {
      const css = generateCssObjectFromTokens(
        Array.from(exampleMockedColorsTokens.values()),
        mappedTokens,
        exampleMockedColorGroups,
        true,
        false,
      );

      expect(css).toStrictEqual({
        '$action-colors': {
          button: {
            primary: {
              active: '$action-button-primary-active',
            },
          },
        },
        '$background-colors': {
          primary: '$background-primary',
        },
        $colors: {
          action: '$action-colors',
          background: '$background-colors',
        },
      });
    });
  });

  describe('createObjectStructureFromTokenNameParts', () => {
    it('should create object structure from token name parts', () => {
      const cssObject = createObjectStructureFromTokenNameParts(
        exampleMockedTokens.get('dimensionRef') as Token,
        tokenGroups,
        true,
        { $grids: { columns: '$grid-columns' } },
        false,
      );

      expect(cssObject).toStrictEqual({
        $grids: { columns: '$grid-columns', spacing: { desktop: '$grid-spacing-desktop' } },
      });
    });
  });

  describe('handleInvariantTokens', () => {
    it('should return token alias for invariant case', () => {
      const token = exampleMockedInvariantTokens.get('radiiRef') as Token;
      expect(getTokenAlias(token, false)).toBe('full');
    });

    it('should return token alias for non-invariant case', () => {
      const token = exampleMockedTokens.get('dimensionRef') as Token;
      expect(getTokenAlias(token, false)).toBe('desktop');
    });
  });

  describe('getTokenAlias', () => {
    it('should return token alias for non-numeric', () => {
      const token = exampleMockedTokens.get('dimensionRef') as Token;
      expect(getTokenAlias(token, false)).toBe('desktop');
    });
  });

  describe('normalizeFirstNamePart', () => {
    it('should return correct first part name for token type dimension', () => {
      expect(normalizeFirstNamePart('grid', TokenType.dimension, false)).toBe('$grids');
    });

    it('should return correct first part name for token type color', () => {
      expect(normalizeFirstNamePart('action', TokenType.color, false)).toBe('$action-colors');
    });
  });

  describe('createGlobalColorsObject', () => {
    it('should create global colors object', () => {
      const colorKeys = ['$action-colors', '$background-colors'];
      const colorsObject = createGlobalColorsObject(colorKeys);

      expect(colorsObject).toStrictEqual({ action: '$action-colors', background: '$background-colors' });
    });
  });

  describe('parseGroupName', () => {
    it('should parse group name', () => {
      expect(parseGroupName('$background-colors')).toBe('background');
    });
  });

  describe('colorGroupsReducer', () => {
    it('should reduce color groups', () => {
      const accumulatedColorKeys = { action: '$action-colors' };
      const currentColorKey = '$background-colors';
      const result = colorGroupsReducer(accumulatedColorKeys, currentColorKey);

      expect(result).toStrictEqual({ action: '$action-colors', background: '$background-colors' });
    });
  });
});
