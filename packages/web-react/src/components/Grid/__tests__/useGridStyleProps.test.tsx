import { renderHook } from '@testing-library/react';
import { SpiritGridProps } from '../../../types';
import { useGridStyleProps } from '../useGridStyleProps';

describe('useGridStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.classProps).toBe('Grid');
  });

  it('should return responsive variants', () => {
    const props: SpiritGridProps = { cols: { mobile: 2, tablet: 4, desktop: 12 } };
    const { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.classProps).toBe('Grid Grid--cols-2 Grid--tablet--cols-4 Grid--desktop--cols-12');
  });

  it.each([
    // spacing, spacingX, spacingY, expectedStyle
    [undefined, undefined, undefined, {}],
    [
      'space-100',
      undefined,
      undefined,
      { '--grid-spacing-x': 'var(--spirit-space-100)', '--grid-spacing-y': 'var(--spirit-space-100)' },
    ],
    [undefined, 'space-100', undefined, { '--grid-spacing-x': 'var(--spirit-space-100)' }],
    [undefined, undefined, 'space-100', { '--grid-spacing-y': 'var(--spirit-space-100)' }],
  ])('should return spacing CSS properties', (spacing, spacingX, spacingY, expectedStyle) => {
    const props: SpiritGridProps = { spacing, spacingX, spacingY } as SpiritGridProps;
    const { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.styleProps).toEqual(expectedStyle);
  });

  it.each([
    // spacing, spacingX, spacingY, expectedStyle
    [
      { tablet: 'space-100' },
      undefined,
      undefined,
      { '--grid-spacing-x-tablet': 'var(--spirit-space-100)', '--grid-spacing-y-tablet': 'var(--spirit-space-100)' },
    ],
    [undefined, { tablet: 'space-100' }, undefined, { '--grid-spacing-x-tablet': 'var(--spirit-space-100)' }],
    [
      { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      undefined,
      undefined,
      {
        '--grid-spacing-x': 'var(--spirit-space-100)',
        '--grid-spacing-y': 'var(--spirit-space-100)',
        '--grid-spacing-x-tablet': 'var(--spirit-space-200)',
        '--grid-spacing-y-tablet': 'var(--spirit-space-200)',
        '--grid-spacing-x-desktop': 'var(--spirit-space-300)',
        '--grid-spacing-y-desktop': 'var(--spirit-space-300)',
      },
    ],
    [
      undefined,
      undefined,
      { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      {
        '--grid-spacing-y': 'var(--spirit-space-100)',
        '--grid-spacing-y-tablet': 'var(--spirit-space-200)',
        '--grid-spacing-y-desktop': 'var(--spirit-space-300)',
      },
    ],
    [
      { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      { mobile: 'space-400', tablet: 'space-500', desktop: 'space-600' },
      { mobile: 'space-700', tablet: 'space-800', desktop: 'space-900' },
      {
        '--grid-spacing-x': 'var(--spirit-space-400)',
        '--grid-spacing-y': 'var(--spirit-space-700)',
        '--grid-spacing-x-tablet': 'var(--spirit-space-500)',
        '--grid-spacing-y-tablet': 'var(--spirit-space-800)',
        '--grid-spacing-x-desktop': 'var(--spirit-space-600)',
        '--grid-spacing-y-desktop': 'var(--spirit-space-900)',
      },
    ],
  ])('should return responsive spacing CSS properties', (spacing, spacingX, spacingY, expectedStyle) => {
    const props: SpiritGridProps = { spacing, spacingX, spacingY } as SpiritGridProps;
    const { result } = renderHook(() => useGridStyleProps(props));

    expect(result.current.styleProps).toEqual(expectedStyle);
  });
});
