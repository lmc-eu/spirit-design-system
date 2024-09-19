import { Token, TokenGroup, TypographyToken } from '@supernovaio/sdk-exporters';
import {
  colorGroupsReducer,
  createGlobalColorsObject,
  createStylesObjectStructureFromTokenNameParts,
  StylesObjectType,
  generateStylesObjectFromTokens,
  parseGroupName,
  createGlobalTypographyObject,
  typographyGroupReducer,
  handleTypographyTokens,
} from '../stylesObjectGenerator';
import { exampleDimensionAndStringTokens } from '../../../tests/fixtures/exampleDimensionAndStringTokens';
import { exampleColorsTokens } from '../../../tests/fixtures/exampleColorTokens';
import { exampleTypographyTokens } from '../../../tests/fixtures/exampleTypographyTokens';
import { exampleGroups } from '../../../tests/fixtures/exampleGroups';

const mappedTokens: Map<string, Token> = new Map([]);
const tokenGroups: Array<TokenGroup> = exampleGroups;

describe('stylesObjectGenerator', () => {
  describe('generateStylesObjectFromTokens', () => {
    const dataProvider = [
      {
        tokens: exampleDimensionAndStringTokens,
        expectedStyles: { $grids: { columns: '$grid-columns', spacing: { desktop: '$grid-spacing-desktop' } } },
        description: 'should generate object from tokens',
        hasJsOutput: false,
      },
      {
        tokens: exampleColorsTokens,
        expectedStyles: {
          '$action-colors': { button: { primary: { active: '$action-button-primary-active' } } },
          '$background-colors': { primary: '$background-primary' },
          $colors: { action: '$action-colors', background: '$background-colors' },
        },
        description: 'should generate object from tokens with colors',
        hasJsOutput: false,
      },
      {
        tokens: exampleDimensionAndStringTokens,
        expectedStyles: { grids: { columns: 'gridColumns', spacing: { desktop: 'gridSpacingDesktop' } } },
        description: 'should generate object from tokens with js output',
        hasJsOutput: true,
      },
      {
        tokens: exampleColorsTokens,
        expectedStyles: {
          actionColors: {
            button: {
              primary: {
                active: 'actionButtonPrimaryActive',
              },
            },
          },
          backgroundColors: {
            primary: 'backgroundPrimary',
          },
          colors: {
            action: 'actionColors',
            background: 'backgroundColors',
          },
        },
        description: 'should generate object from tokens with colors with js output',
        hasJsOutput: true,
      },
      {
        tokens: exampleTypographyTokens,
        expectedStyles: {
          '$heading-xlarge-bold': {
            desktop:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 64px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2,\n)',
          },
          '$heading-xlarge-bold-underline': {
            desktop:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 64px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2,\n)',
          },
          $styles: {
            'heading-xlarge-bold': '$heading-xlarge-bold',
            'heading-xlarge-bold-underline': '$heading-xlarge-bold-underline',
            moveToTheEnd: 'true',
          },
        },
        description: 'should generate object from typography tokens',
        hasJsOutput: false,
      },
      {
        tokens: exampleTypographyTokens,
        expectedStyles: {
          styles: {
            headingXlargeBold: 'headingXlargeBold',
            headingXlargeBoldUnderline: 'headingXlargeBoldUnderline',
            moveToTheEnd: 'true',
          },
          headingXlargeBold: {
            desktop: `{\nfontFamily: "'Inter', sans-serif",\nfontSize: '64px',\nfontStyle: 'normal',\nfontWeight: 700,\nlineHeight: 1.2,\n}`,
          },
          headingXlargeBoldUnderline: {
            desktop: `{\nfontFamily: "'Inter', sans-serif",\nfontSize: '64px',\nfontStyle: 'normal',\nfontWeight: 700,\nlineHeight: 1.2,\n}`,
          },
        },
        description: 'should generate object from typography tokens with js output',
        hasJsOutput: true,
      },
    ];

    it.each(dataProvider)('$description', ({ tokens, expectedStyles, hasJsOutput }) => {
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

  describe('createStylesObjectStructureFromTokenNameParts', () => {
    const dataProvider = [
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as Token,
        expectedObject: { $grids: { columns: '$grid-columns', spacing: { desktop: '$grid-spacing-desktop' } } },
        description: 'should create object structure from dimension token name parts',
        stylesObjectRef: { $grids: { columns: '$grid-columns' } } as StylesObjectType,
        hasJsOutput: false,
      },
      {
        token: exampleDimensionAndStringTokens.get('dimensionRef') as Token,
        expectedObject: { grids: { columns: 'gridColumns', spacing: { desktop: 'gridSpacingDesktop' } } },
        description: 'should create object structure from dimension token name parts with js output',
        stylesObjectRef: { grids: { columns: 'gridColumns' } } as StylesObjectType,
        hasJsOutput: true,
      },
      {
        token: exampleColorsTokens.get('backgroundColorRef') as Token,
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
        token: exampleTypographyTokens.get('typographyRef1') as Token,
        expectedObject: {
          '$heading-xlarge-bold': {
            desktop:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 64px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2,\n)',
            tablet:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 32px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2,\n)',
          },
        },
        description: 'should create object structure from typography token',
        stylesObjectRef: {
          '$heading-xlarge-bold': {
            tablet:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 32px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2,\n)',
          },
        } as StylesObjectType,
        hasJsOutput: false,
      },
      {
        token: exampleTypographyTokens.get('typographyRef1') as Token,
        expectedObject: {
          headingXlargeBold: {
            desktop: `{\nfontFamily: "'Inter', sans-serif",\nfontSize: '64px',\nfontStyle: 'normal',\nfontWeight: 700,\nlineHeight: 1.2,\n}`,
            tablet: `{\nfontFamily: "'Inter', sans-serif",\nfontSize: '32px',\nfontStyle: 'normal',\nfontWeight: 500,\nlineHeight: 1,\n}`,
          },
        },
        description: 'should create object structure from typography token with js output',
        stylesObjectRef: {
          headingXlargeBold: {
            tablet: `{\nfontFamily: "'Inter', sans-serif",\nfontSize: '32px',\nfontStyle: 'normal',\nfontWeight: 500,\nlineHeight: 1,\n}`,
          },
        } as StylesObjectType,
        hasJsOutput: true,
      },
    ];

    it.each(dataProvider)('$description', ({ token, expectedObject, stylesObjectRef, hasJsOutput }) => {
      const cssObject = createStylesObjectStructureFromTokenNameParts(
        token,
        tokenGroups,
        true,
        stylesObjectRef,
        hasJsOutput,
      );

      expect(cssObject).toStrictEqual(expectedObject);
    });
  });

  describe('handleTypographyTokens', () => {
    const dataProvider = [
      {
        tokens: exampleTypographyTokens.get('typographyRef1') as TypographyToken,
        tokenNameParts: ['heading', 'desktop', 'xLarge', 'bold'],
        expectedStyles: {
          '$heading-xlarge-bold': {
            desktop:
              '(\nfont-family: "\'Inter\', sans-serif",\nfont-size: 64px,\nfont-style: normal,\nfont-weight: 700,\nline-height: 1.2,\n)',
          },
          exampleRef: 'exampleRef',
        },
        description: 'should generate object from typography tokens',
        hasJsOutput: false,
      },
      {
        tokens: exampleTypographyTokens.get('typographyRef1') as TypographyToken,
        tokenNameParts: ['heading', 'desktop', 'xLarge', 'bold'],
        expectedStyles: {
          exampleRef: 'exampleRef',
          headingXlargeBold: {
            desktop: `{\nfontFamily: "'Inter', sans-serif",\nfontSize: '64px',\nfontStyle: 'normal',\nfontWeight: 700,\nlineHeight: 1.2,\n}`,
          },
        },
        description: 'should generate object from typography tokens with js output',
        hasJsOutput: true,
      },
    ];

    it.each(dataProvider)('$description', ({ tokens, tokenNameParts, expectedStyles, hasJsOutput }) => {
      const stylesObjectRef = { exampleRef: 'exampleRef' };
      handleTypographyTokens(tokenNameParts, tokens, stylesObjectRef, hasJsOutput);
      expect(stylesObjectRef).toStrictEqual(expectedStyles);
    });
  });

  describe('createGlobalColorsObject', () => {
    it('should create global colors object', () => {
      const colorKeys = ['$action-colors', '$background-colors'];
      const colorsObject = createGlobalColorsObject(colorKeys, false);

      expect(colorsObject).toStrictEqual({ action: '$action-colors', background: '$background-colors' });
    });

    it('should create global colors object with js output', () => {
      const colorKeys = ['actionColors', 'backgroundColors'];
      const colorsObject = createGlobalColorsObject(colorKeys, true);

      expect(colorsObject).toStrictEqual({ action: 'actionColors', background: 'backgroundColors' });
    });
  });

  describe('createGlobalTypographyObject', () => {
    it('should create global typography object', () => {
      const typographyKeys = ['$heading-xlarge-bold', '$body-large-regular'];
      const typographyObject = createGlobalTypographyObject(typographyKeys);

      expect(typographyObject).toStrictEqual({
        'body-large-regular': '$body-large-regular',
        'heading-xlarge-bold': '$heading-xlarge-bold',
      });
    });
  });

  describe('parseGroupName', () => {
    it('should parse group name', () => {
      expect(parseGroupName('$background-colors', false)).toBe('background');
    });

    it('should parse group name with js output', () => {
      expect(parseGroupName('backgroundColors', true)).toBe('background');
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

  describe('typographyGroupReducer', () => {
    it('should reduce typography groups', () => {
      const accumulatedTypographyKeys = { 'heading-xlarge-bold': '$heading-xlarge-bold' };
      const currentTypographyKey = '$body-large-regular';
      const result = typographyGroupReducer(accumulatedTypographyKeys, currentTypographyKey);

      expect(result).toStrictEqual({
        'body-large-regular': '$body-large-regular',
        'heading-xlarge-bold': '$heading-xlarge-bold',
      });
    });
  });
});
