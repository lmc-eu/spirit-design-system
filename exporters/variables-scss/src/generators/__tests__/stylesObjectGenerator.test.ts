import { Token, TokenType } from '@supernovaio/sdk-exporters';
import {
  colorGroupsReducer,
  createGlobalColorsObject,
  createStylesObjectStructureFromTokenNameParts,
  StylesObjectType,
  generateStylesObjectFromTokens,
  getTokenAlias,
  normalizeFirstNamePart,
  parseGroupName,
} from '../stylesObjectGenerator';
import {
  exampleMockedColorGroups,
  exampleMockedColorsTokens,
  exampleMockedGroups,
  exampleMockedInvariantTokens,
  exampleMockedTokens,
  exampleTypographyMockedTokens,
} from '../../../tests/fixtures/mockedExampleTokens';

const mappedTokens: Map<string, Token> = new Map([]);

describe('stylesObjectGenerator', () => {
  describe('generateStylesObjectFromTokens', () => {
    const dataProvider = [
      {
        tokens: exampleMockedTokens,
        tokenGroups: exampleMockedGroups,
        expectedStyles: { $grids: { columns: '$grid-columns', spacing: { desktop: '$grid-spacing-desktop' } } },
        description: 'should generate object from tokens',
        hasJsOutput: false,
      },
      {
        tokens: exampleMockedColorsTokens,
        tokenGroups: exampleMockedColorGroups,
        expectedStyles: {
          '$action-colors': { button: { primary: { active: '$action-button-primary-active' } } },
          '$background-colors': { primary: '$background-primary' },
          $colors: { action: '$action-colors', background: '$background-colors' },
        },
        description: 'should generate object from tokens with colors',
        hasJsOutput: false,
      },
      {
        tokens: exampleMockedTokens,
        tokenGroups: exampleMockedGroups,
        expectedStyles: { grids: { columns: 'gridColumns', spacing: { desktop: 'gridSpacingDesktop' } } },
        description: 'should generate object from tokens with js output',
        hasJsOutput: true,
      },
      {
        tokens: exampleMockedColorsTokens,
        tokenGroups: exampleMockedColorGroups,
        expectedStyles: {
          actionColors: { button: { primary: { active: 'actionButtonPrimaryActive' } } },
          backgroundColors: { primary: 'backgroundPrimary' },
        },
        description: 'should generate object from tokens with colors with js output',
        hasJsOutput: true,
      },
    ];

    it.each(dataProvider)('$description', ({ tokens, tokenGroups, expectedStyles, hasJsOutput }) => {
      const styles = generateStylesObjectFromTokens(
        Array.from(tokens.values()),
        mappedTokens,
        tokenGroups,
        true,
        hasJsOutput,
      );

      expect(styles).toStrictEqual(expectedStyles);
    });
  });

  describe('createObjectStructureFromTokenNameParts', () => {
    const dataProvider = [
      {
        token: exampleMockedTokens.get('dimensionRef') as Token,
        tokenGroup: exampleMockedGroups,
        expectedObject: { $grids: { columns: '$grid-columns', spacing: { desktop: '$grid-spacing-desktop' } } },
        description: 'should create object structure from dimension token name parts',
        stylesObjectRef: { $grids: { columns: '$grid-columns' } } as StylesObjectType,
        hasJsOutput: false,
      },
      {
        token: exampleMockedTokens.get('dimensionRef') as Token,
        tokenGroup: exampleMockedGroups,
        expectedObject: { grids: { columns: 'gridColumns', spacing: { desktop: 'gridSpacingDesktop' } } },
        description: 'should create object structure from dimension token name parts with js output',
        stylesObjectRef: { grids: { columns: 'gridColumns' } } as StylesObjectType,
        hasJsOutput: true,
      },
      {
        token: exampleMockedColorsTokens.get('backgroundColorRef') as Token,
        tokenGroup: exampleMockedColorGroups,
        expectedObject: {
          actionColors: { button: { primary: { active: 'actionButtonPrimaryActive' } } },
          backgroundColors: {
            primary: 'backgroundPrimary',
          },
        },
        description: 'should create object structure from color token with js output',
        stylesObjectRef: {
          actionColors: { button: { primary: { active: 'actionButtonPrimaryActive' } } },
        } as StylesObjectType,
        hasJsOutput: true,
      },
      {
        token: exampleTypographyMockedTokens.get('typographyHeadingRef1') as Token,
        tokenGroup: exampleMockedColorGroups,
        expectedObject: {
          '$heading-xlarge-bold': {
            desktop:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 64px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2\n)',
            tablet:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 32px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2\n)',
          },
        },
        description: 'should create object structure from typography token',
        stylesObjectRef: {
          '$heading-xlarge-bold': {
            tablet:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 32px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2\n)',
          },
        } as StylesObjectType,
        hasJsOutput: false,
      },
      {
        token: exampleTypographyMockedTokens.get('typographyHeadingRef1') as Token,
        tokenGroup: exampleMockedColorGroups,
        expectedObject: {
          headingXlargeBold: {
            desktop:
              '{\nfontFamily: "\'Inter\', sans-serif",\nfontSize: "64px",\nfontStyle: "normal",\nfontWeight: 700,\nlineHeight: 1.2\n}',
            tablet:
              '{\nfontFamily: "\'Inter\', sans-serif",\nfontSize: "32px",\nfontStyle: "normal",\nfontWeight: 500,\nlineHeight: 1\n}',
          },
        },
        description: 'should create object structure from typography token with js output',
        stylesObjectRef: {
          headingXlargeBold: {
            tablet:
              '{\nfontFamily: "\'Inter\', sans-serif",\nfontSize: "32px",\nfontStyle: "normal",\nfontWeight: 500,\nlineHeight: 1\n}',
          },
        } as StylesObjectType,
        hasJsOutput: true,
      },
    ];

    it.each(dataProvider)('$description', ({ token, tokenGroup, expectedObject, stylesObjectRef, hasJsOutput }) => {
      const cssObject = createStylesObjectStructureFromTokenNameParts(
        token,
        tokenGroup,
        true,
        stylesObjectRef,
        hasJsOutput,
      );

      expect(cssObject).toStrictEqual(expectedObject);
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
      const token = exampleTypographyMockedTokens.get('typographyHeadingRef2') as Token;
      expect(getTokenAlias(token, false)).toBe('bold-underline');
    });

    it('should return token alias for non-numeric with js output', () => {
      const token = exampleTypographyMockedTokens.get('typographyHeadingRef2') as Token;
      expect(getTokenAlias(token, true)).toBe('boldUnderline');
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
