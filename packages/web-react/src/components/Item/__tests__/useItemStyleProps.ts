import { renderHook } from '@testing-library/react';
import { SpiritItemProps } from '../../../types';
import { useItemStyleProps } from '../useItemStyleProps';

describe('useItemStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useItemStyleProps(props));

    expect(result.current.classProps).toEqual({
      helperText: 'Item__helperText',
      icon: {
        root: 'Item__icon',
        start: 'Item__icon--start',
        end: 'Item__icon--end',
      },
      label: 'Item__label',
      root: 'Item',
    });
  });

  it('should return selected item', () => {
    const props = { isSelected: true } as SpiritItemProps;
    const { result } = renderHook(() => useItemStyleProps(props));

    expect(result.current.classProps.root).toBe('Item Item--selected');
  });

  it('should return disabled item', () => {
    const props = { isDisabled: true } as SpiritItemProps;
    const { result } = renderHook(() => useItemStyleProps(props));

    expect(result.current.classProps.root).toBe('Item Item--disabled');
  });
});
