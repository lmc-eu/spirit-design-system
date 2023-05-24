import { renderHook } from '@testing-library/react-hooks';
import { useScrollViewStyleProps } from '../useScrollViewStyleProps';

describe('useScrollViewStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() =>
      useScrollViewStyleProps({
        direction: 'vertical',
        edgeIndicators: 'shadows',
        isScrollbarDisabled: true,
        isScrolledAtEnd: true,
        isScrolledAtStart: true,
      }),
    );

    expect(result.current.classProps).toBeDefined();
    expect(result.current.classProps.root).toBe(
      'ScrollView ScrollView--vertical ScrollView--scrollbarDisabled is-scrolled-at-end is-scrolled-at-start',
    );
    expect(result.current.classProps.viewport).toBe('ScrollView__viewport');
    expect(result.current.classProps.content).toBe('ScrollView__content');
    expect(result.current.classProps.indicators).toBe('ScrollView__indicators ScrollView__indicators--shadows');
  });

  it('should return horizontal both variants of indicator', () => {
    const { result } = renderHook(() =>
      useScrollViewStyleProps({
        direction: 'horizontal',
        edgeIndicators: 'both',
        isScrollbarDisabled: false,
        isScrolledAtEnd: false,
        isScrolledAtStart: false,
      }),
    );

    expect(result.current.classProps).toBeDefined();
    expect(result.current.classProps.root).toBe('ScrollView ScrollView--horizontal');
    expect(result.current.classProps.viewport).toBe('ScrollView__viewport');
    expect(result.current.classProps.content).toBe('ScrollView__content');
    expect(result.current.classProps.indicators).toBe(
      'ScrollView__indicators ScrollView__indicators--shadows ScrollView__indicators--borders',
    );
  });
});
