import { convertToScss, deepMergeObjects } from '../cssObjectHelper';

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
});
