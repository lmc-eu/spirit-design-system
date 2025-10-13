import { filterByBrandId } from '../brandIdFilter';

const createMockItem = (brandId: string, id: string = 'item-1'): { brandId: string; id: string } => ({
  brandId,
  id,
});

describe('brandIdFilter', () => {
  describe('filterByBrandId', () => {
    it('should return empty array when input array is empty', () => {
      const result = filterByBrandId([], 'brand-1');

      expect(result).toEqual([]);
      expect(result).toHaveLength(0);
    });

    it('should return empty array when no items match the brandId', () => {
      const items = [
        createMockItem('brand-1', 'item-1'),
        createMockItem('brand-2', 'item-2'),
        createMockItem('brand-3', 'item-3'),
      ];

      const result = filterByBrandId(items, 'brand-4');

      expect(result).toEqual([]);
      expect(result).toHaveLength(0);
    });

    it('should return single item when only one item matches brandId', () => {
      const matchingItem = createMockItem('target-brand', 'item-1');
      const items = [createMockItem('brand-1', 'item-2'), matchingItem, createMockItem('brand-2', 'item-3')];

      const result = filterByBrandId(items, 'target-brand');

      expect(result).toEqual([matchingItem]);
      expect(result).toHaveLength(1);
    });

    it('should return multiple items when multiple items match brandId', () => {
      const matchingItem1 = createMockItem('target-brand', 'item-1');
      const matchingItem2 = createMockItem('target-brand', 'item-2');
      const items = [
        matchingItem1,
        createMockItem('other-brand', 'item-3'),
        matchingItem2,
        createMockItem('another-brand', 'item-4'),
      ];

      const result = filterByBrandId(items, 'target-brand');

      expect(result).toEqual([matchingItem1, matchingItem2]);
      expect(result).toHaveLength(2);
    });

    it('should return all items when all items match the brandId', () => {
      const items = [
        createMockItem('same-brand', 'item-1'),
        createMockItem('same-brand', 'item-2'),
        createMockItem('same-brand', 'item-3'),
      ];

      const result = filterByBrandId(items, 'same-brand');

      expect(result).toEqual(items);
      expect(result).toHaveLength(3);
    });

    it('should preserve original object properties', () => {
      const item = { brandId: 'test-brand', name: 'Test Item', value: 42 };
      const items = [item];

      const result = filterByBrandId(items, 'test-brand');

      expect(result[0]).toBe(item);
      expect(result[0]).toEqual(item);
    });

    it('should work with different object types that extend brandId constraint', () => {
      interface CustomType {
        brandId: string;
        customProperty: string;
      }

      const customItems: CustomType[] = [
        { brandId: 'brand-a', customProperty: 'value-1' },
        { brandId: 'brand-b', customProperty: 'value-2' },
        { brandId: 'brand-a', customProperty: 'value-3' },
      ];

      const result = filterByBrandId(customItems, 'brand-a');

      expect(result).toHaveLength(2);
      expect(result[0].customProperty).toBe('value-1');
      expect(result[1].customProperty).toBe('value-3');
    });
  });
});
