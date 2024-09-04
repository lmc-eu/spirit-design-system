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

const scssObject = `$grids: (
spacing: (
desktop: $grid-spacing-desktop,
mobile: $grid-spacing-mobile,
tablet: $grid-spacing-tablet,
),
columns: $grid-columns,
),`;

describe('cssObjectHelper', () => {
  describe('mergeObjects', () => {
    it('should merge objects', () => {
      const result = deepMergeObjects(object1, object2);

      expect(result).toStrictEqual(mergedObject);
    });
  });

  describe('convertToScss', () => {
    it('should convert object to SCSS', () => {
      const result = convertToScss(mergedObject);

      expect(result).toBe(scssObject);
    });
  });
});
