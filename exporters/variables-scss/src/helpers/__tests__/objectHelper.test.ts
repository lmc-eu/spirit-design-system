import { Token, TokenType } from '@supernovaio/sdk-exporters';
import {
  convertToScss,
  convertToJs,
  deepMergeObjects,
  formatTypographyName,
  getBreakpoint,
  getTokenAlias,
  normalizeFirstNamePart,
} from '../objectHelper';
import { exampleMockedTypographyTokens } from '../../../tests/fixtures/mockedExampleTokens';

const mergedObject = {
  $grids: {
    spacing: {
      desktop: '$grid-spacing-desktop',
      mobile: '$grid-spacing-mobile',
      tablet: '$grid-spacing-tablet',
    },
    columns: '$grid-columns',
  },
};

const mergedTypographyObject = {
  $heading1: {
    fontFamily: '$font-family',
    fontSize: '$font-size',
  },
  $body1: {
    fontFamily: '$font-family',
    fontSize: '$font-size',
  },
  $styles: {
    heading1: '$heading1',
    body1: '$body1',
  },
};

describe('objectHelper', () => {
  describe('deepMergeObjects', () => {
    const object1 = {
      $grids: {
        spacing: {
          desktop: '$grid-spacing-desktop',
          mobile: '$grid-spacing-mobile',
          tablet: '$grid-spacing-tablet',
        },
      },
    };

    const object2 = {
      $grids: { columns: '$grid-columns' },
    };

    it('should merge objects', () => {
      const result = deepMergeObjects(object1, object2);

      expect(result).toStrictEqual(mergedObject);
    });

    it('should merge typography objects', () => {
      const typographyObject1 = {
        $heading1: {
          fontFamily: '$font-family',
          fontSize: '$font-size',
        },
        $styles: {
          heading1: '$heading1',
          moveToTheEnd: 'true',
        },
      };

      const typographyObject2 = {
        $body1: {
          fontFamily: '$font-family',
          fontSize: '$font-size',
        },
        $styles: {
          body1: '$body1',
        },
      };

      const result = deepMergeObjects(typographyObject1, typographyObject2);

      expect(result).toStrictEqual(mergedTypographyObject);
    });
  });

  describe('convertToScss', () => {
    it('should convert object to SCSS', () => {
      const expectedScssObject = `$grids: (
spacing: (
desktop: $grid-spacing-desktop,
mobile: $grid-spacing-mobile,
tablet: $grid-spacing-tablet,
),
columns: $grid-columns,
),`;

      const result = convertToScss(mergedObject);

      expect(result).toBe(expectedScssObject);
    });

    it('should convert typography object to SCSS', () => {
      const expectedScssTypographyObject = `$heading1: (
fontFamily: $font-family,
fontSize: $font-size,
),
$body1: (
fontFamily: $font-family,
fontSize: $font-size,
),
$styles: (
heading1: $heading1,
body1: $body1,
),`;

      const result = convertToScss(mergedTypographyObject);

      expect(result).toBe(expectedScssTypographyObject);
    });
  });

  describe('convertToJs', () => {
    it('should convert object to JS', () => {
      const expectedJsObject = `$grids: {
spacing: {
desktop: $grid-spacing-desktop,
mobile: $grid-spacing-mobile,
tablet: $grid-spacing-tablet,
},
columns: $grid-columns,
},`;
      const result = convertToJs(mergedObject);

      expect(result).toBe(expectedJsObject);
    });

    it('should convert typography object to JS', () => {
      const expectedJsTypographyObject = `$heading1: {
fontFamily: $font-family,
fontSize: $font-size,
},
$body1: {
fontFamily: $font-family,
fontSize: $font-size,
},
$styles: {
heading1: $heading1,
body1: $body1,
},`;

      const result = convertToJs(mergedTypographyObject);

      expect(result).toBe(expectedJsTypographyObject);
    });
  });

  describe('getTokenAlias', () => {
    it('should return token alias for non-numeric', () => {
      const token = exampleMockedTypographyTokens.get('typographyRef2') as Token;
      expect(getTokenAlias(token, false)).toBe('bold-underline');
    });

    it('should return token alias for non-numeric with js output', () => {
      const token = exampleMockedTypographyTokens.get('typographyRef2') as Token;
      expect(getTokenAlias(token, true)).toBe('boldUnderline');
    });
  });

  describe('getBreakpoint', () => {
    it('should return correct breakpoint if tokenNameParts has 4 items', () => {
      expect(getBreakpoint(['heading', 'desktop', 'xLarge', 'bold'])).toBe('desktop');
    });

    it('should return correct breakpoint if tokenNameParts has less than 4 items', () => {
      expect(getBreakpoint(['Heading', 'Desktop', 'XLarge'])).toBe('mobile');
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

  describe('formatTypographyName', () => {
    it('should return correct typography name', () => {
      const tokenNameParts = ['heading', 'desktop', 'xLarge', 'bold'];
      expect(formatTypographyName(tokenNameParts)).toBe('heading-xLarge-bold');
    });

    it('should return correct typography name if tokenNameParts has less than 4 items', () => {
      const tokenNameParts = ['heading', 'desktop', 'xLarge'];
      expect(formatTypographyName(tokenNameParts)).toBe('heading-desktop-xLarge');
    });
  });
});
