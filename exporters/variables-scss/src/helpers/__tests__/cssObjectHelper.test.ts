import { Token, TokenType } from '@supernovaio/sdk-exporters';
import { convertToScss, deepMergeObjects, getTokenAlias, normalizeFirstNamePart } from '../cssObjectHelper';
import { exampleMockedTypographyTokens } from '../../../tests/fixtures/mockedExampleTokens';

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

const scssObject = `$grids: (
spacing: (
desktop: $grid-spacing-desktop,
mobile: $grid-spacing-mobile,
tablet: $grid-spacing-tablet,
),
columns: $grid-columns,
),`;

const scssTypographyObject = `$heading1: (
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

describe('cssObjectHelper', () => {
  describe('mergeObjects', () => {
    it('should merge objects', () => {
      const result = deepMergeObjects(object1, object2);

      expect(result).toStrictEqual(mergedObject);
    });

    it('should merge typography objects', () => {
      const result = deepMergeObjects(typographyObject1, typographyObject2);

      expect(result).toStrictEqual(mergedTypographyObject);
    });
  });

  describe('convertToScss', () => {
    it('should convert object to SCSS', () => {
      const result = convertToScss(mergedObject);

      expect(result).toBe(scssObject);
    });

    it('should convert typography object to SCSS', () => {
      const result = convertToScss(mergedTypographyObject);

      expect(result).toBe(scssTypographyObject);
    });
  });

  describe('getTokenAlias', () => {
    it('should return token alias for non-numeric', () => {
      const token = exampleMockedTypographyTokens.get('typographyHeadingRef2') as Token;
      expect(getTokenAlias(token, false)).toBe('bold-underline');
    });

    it('should return token alias for non-numeric with js output', () => {
      const token = exampleMockedTypographyTokens.get('typographyHeadingRef2') as Token;
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
});
