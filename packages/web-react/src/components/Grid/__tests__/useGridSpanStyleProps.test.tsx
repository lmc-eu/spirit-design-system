import { renderHook } from '@testing-library/react-hooks';
import { SpiritGridSpanProps } from '../../../types';
import { useGridSpanStyleProps } from '../useGridSpanStyleProps';

describe('useGridSpanStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useGridSpanStyleProps(props));

    expect(result.current.classProps).toBe('Grid__span');
  });

  it('should return responsive variants', () => {
    const props: SpiritGridSpanProps = { over: 2, tablet: 4, desktop: 12 };
    const { result } = renderHook(() => useGridSpanStyleProps(props));

    expect(result.current.classProps).toBe(
      'Grid__span Grid__span--over-2 Grid__span--tablet--over-4 Grid__span--desktop--over-12',
    );
  });
});
