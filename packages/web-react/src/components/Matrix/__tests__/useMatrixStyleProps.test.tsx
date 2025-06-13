import { renderHook } from '@testing-library/react';
import { SpiritMatrixProps } from '../../../types';
import { useMatrixStyleProps } from '../useMatrixStyleProps';

describe('useMatrixStyleProps', () => {
  it('should return default className', () => {
    const props = {};
    const { result } = renderHook(() => useMatrixStyleProps(props));

    expect(result.current.classProps).toBe('Matrix');
  });

  it.each([
    // spacing, spacingX, spacingY, expectedStyle
    [undefined, undefined, undefined, {}],
    [
      'space-100',
      undefined,
      undefined,
      {
        '--spirit-matrix-spacing-x': 'var(--spirit-space-100)',
        '--spirit-matrix-spacing-y': 'var(--spirit-space-100)',
      },
    ],
    [undefined, 'space-100', undefined, { '--spirit-matrix-spacing-x': 'var(--spirit-space-100)' }],
    [undefined, undefined, 'space-100', { '--spirit-matrix-spacing-y': 'var(--spirit-space-100)' }],
    [
      'space-100',
      'space-200',
      'space-300',
      {
        '--spirit-matrix-spacing-x': 'var(--spirit-space-200)',
        '--spirit-matrix-spacing-y': 'var(--spirit-space-300)',
      },
    ],
  ])('should return spacing CSS properties', (spacing, spacingX, spacingY, expectedStyle) => {
    const props: SpiritMatrixProps = { spacing, spacingX, spacingY } as SpiritMatrixProps;
    const { result } = renderHook(() => useMatrixStyleProps(props));

    expect(result.current.styleProps).toEqual(expectedStyle);
  });

  it.each([
    // prop, value, expectedStyle
    [
      'cols',
      { mobile: '1', tablet: '2', desktop: '3' },
      {
        '--spirit-matrix-columns': '1',
        '--spirit-matrix-columns-tablet': '2',
        '--spirit-matrix-columns-desktop': '3',
      },
    ],
    [
      'rows',
      { mobile: '1', tablet: '2', desktop: '3' },
      {
        '--spirit-matrix-rows': '1',
        '--spirit-matrix-rows-tablet': '2',
        '--spirit-matrix-rows-desktop': '3',
      },
    ],
    [
      'itemRows',
      { mobile: '1', tablet: '2', desktop: '3' },
      {
        '--spirit-matrix-item-rows': '1',
        '--spirit-matrix-item-rows-tablet': '2',
        '--spirit-matrix-item-rows-desktop': '3',
      },
    ],
    ['cols', undefined, {}],
    ['rows', undefined, {}],
    ['itemRows', undefined, {}],
  ])('should return %s CSS properties', (propName, value, expectedStyle) => {
    const props = value !== undefined ? { [propName]: value } : {};
    const { result } = renderHook(() => useMatrixStyleProps(props));

    expect(result.current.styleProps).toEqual(expectedStyle);
  });
});
