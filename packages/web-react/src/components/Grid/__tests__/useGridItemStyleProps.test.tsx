import { renderHook } from '@testing-library/react';
import { GridItemSpan } from '../../../types';
import { useGridItemStyleProps } from '../useGridItemStyleProps';

describe('useGridItemStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.classProps).toBe('GridItem');
    expect(result.current.styleProps).toEqual({});
  });

  it('should set grid item column end style', () => {
    const props = { columnEnd: 5 };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-end']).toBe('5');
  });

  it('should set grid item column end with span style', () => {
    const props = { columnEnd: 'span 3' as GridItemSpan };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-end']).toBe('span 3');
  });

  it('should set grid item column start style', () => {
    const props = { columnStart: 1 };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-start']).toBe('1');
  });

  it('should set responsive grid item styles', () => {
    const props = {
      columnEnd: {
        mobile: 4,
        tablet: 6,
        desktop: 8,
      },
    };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-end']).toBe('4');
    expect(result.current.styleProps['--grid-item-column-end-tablet']).toBe('6');
    expect(result.current.styleProps['--grid-item-column-end-desktop']).toBe('8');
  });

  it('should ignore undefined style values', () => {
    const props = {
      columnEnd: {
        mobile: undefined,
        tablet: undefined,
        desktop: 8,
      },
    };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-end']).toBeUndefined();
    expect(result.current.styleProps['--grid-item-column-end-tablet']).toBeUndefined();
    expect(result.current.styleProps['--grid-item-column-end-desktop']).toBe('8');
  });

  it('should handle when column end is undefined', () => {
    const props = {
      columnEnd: {
        mobile: undefined,
        tablet: 5,
        desktop: 8,
      },
    };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-end']).toBeUndefined();
    expect(result.current.styleProps['--grid-item-column-end-tablet']).toBe('5');
    expect(result.current.styleProps['--grid-item-column-end-desktop']).toBe('8');
  });

  it('should not set style for column end when it is undefined', () => {
    const props = { columnEnd: undefined };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-end']).toBeUndefined();
  });

  it('should not set style for column start when it is undefined', () => {
    const props = { columnStart: undefined };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-start']).toBeUndefined();
  });

  it('should set multiple grid item styles', () => {
    const props = {
      columnEnd: 5,
      columnStart: 1,
    };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-end']).toBe('5');
    expect(result.current.styleProps['--grid-item-column-start']).toBe('1');
  });

  it('should set complex responsive grid item styles', () => {
    const props = {
      columnEnd: {
        mobile: 4,
        tablet: undefined,
        desktop: 'span 3' as GridItemSpan,
      },
      columnStart: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
      },
    };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-column-end']).toBe('4');
    expect(result.current.styleProps['--grid-item-column-end-tablet']).toBeUndefined();
    expect(result.current.styleProps['--grid-item-column-end-desktop']).toBe('span 3');

    expect(result.current.styleProps['--grid-item-column-start']).toBe('1');
    expect(result.current.styleProps['--grid-item-column-start-tablet']).toBe('2');
    expect(result.current.styleProps['--grid-item-column-start-desktop']).toBe('3');
  });

  it('should set grid item row end style', () => {
    const props = { rowEnd: 5 };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-row-end']).toBe('5');
  });

  it('should set grid item row start style', () => {
    const props = { rowStart: 3 };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-row-start']).toBe('3');
  });

  it('should set responsive grid item row styles', () => {
    const props = {
      rowEnd: {
        mobile: 4,
        tablet: 6,
        desktop: 8,
      },
      rowStart: {
        mobile: 1,
        tablet: 2,
        desktop: 'span 3' as GridItemSpan,
      },
    };
    const { result } = renderHook(() => useGridItemStyleProps(props));

    expect(result.current.styleProps['--grid-item-row-end']).toBe('4');
    expect(result.current.styleProps['--grid-item-row-end-tablet']).toBe('6');
    expect(result.current.styleProps['--grid-item-row-end-desktop']).toBe('8');

    expect(result.current.styleProps['--grid-item-row-start']).toBe('1');
    expect(result.current.styleProps['--grid-item-row-start-tablet']).toBe('2');
    expect(result.current.styleProps['--grid-item-row-start-desktop']).toBe('span 3');
  });
});
