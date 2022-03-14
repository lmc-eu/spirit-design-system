import { renderHook } from '@testing-library/react-hooks';
import { SpiritGridProps } from '../../../types';
import { useGridStyleProps } from '../useGridStyleProps';

describe('useGridStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.classProps).toBe('Grid');
  });

  it('should return narrow class', () => {
    const props: SpiritGridProps = { layout: 'narrow' };
    const { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.classProps).toBe('Grid Grid--narrow');
  });

  it('should return responsive variants', () => {
    const props: SpiritGridProps = { cols: 2, tablet: 4, desktop: 12 };
    const { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.classProps).toBe('Grid Grid--cols-2 Grid--tablet--cols-4 Grid--desktop--cols-12');
  });
});
