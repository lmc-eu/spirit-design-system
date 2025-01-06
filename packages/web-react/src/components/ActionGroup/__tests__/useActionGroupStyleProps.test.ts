import { renderHook } from '@testing-library/react';
import { SpiritFlexProps } from '../../../types';
import { useActionGroupStyleProps } from '../useActionGroupStyleProps';

describe('useActionGroupStyleProps', () => {
  it.each([
    // props, expectedClasses
    [{}, 'ActionGroup'],
    [{ direction: 'row' }, 'ActionGroup ActionGroup--row'],
    [{ direction: 'column' }, 'ActionGroup ActionGroup--column'],
    [
      {
        direction: { mobile: 'row', tablet: 'column', desktop: 'row' },
      },
      'ActionGroup ActionGroup--row ActionGroup--tablet--column ActionGroup--desktop--row',
    ],
    [{ alignmentX: 'left' }, 'ActionGroup ActionGroup--alignmentXLeft'],
    [
      {
        alignmentX: { mobile: 'left', tablet: 'center', desktop: 'right' },
      },
      'ActionGroup ActionGroup--alignmentXLeft ActionGroup--tablet--alignmentXCenter ActionGroup--desktop--alignmentXRight',
    ],
  ])('should return the correct classes for props %o', (props, expectedClasses) => {
    const { result } = renderHook(() => useActionGroupStyleProps(props as SpiritFlexProps));

    expect(result.current.classProps).toBe(expectedClasses);
  });

  it.each([
    // props, expectedStyleProps
    [{}, {}],
    [
      { spacing: 'space-100' },
      { '--flex-spacing-x': 'var(--spirit-space-100)', '--flex-spacing-y': 'var(--spirit-space-100)' },
    ],
    [
      { spacingX: 'space-100', spacingY: 'space-200' },
      { '--flex-spacing-x': 'var(--spirit-space-100)', '--flex-spacing-y': 'var(--spirit-space-200)' },
    ],
    [
      {
        spacing: { mobile: 'space-100', tablet: 'space-200' },
      },
      {
        '--flex-spacing-x': 'var(--spirit-space-100)',
        '--flex-spacing-x-tablet': 'var(--spirit-space-200)',
        '--flex-spacing-y': 'var(--spirit-space-100)',
        '--flex-spacing-y-tablet': 'var(--spirit-space-200)',
      },
    ],
    [
      {
        spacingX: { mobile: 'space-100', tablet: 'space-200' },
        spacingY: { mobile: 'space-300', tablet: 'space-400' },
      },
      {
        '--flex-spacing-x': 'var(--spirit-space-100)',
        '--flex-spacing-x-tablet': 'var(--spirit-space-200)',
        '--flex-spacing-y': 'var(--spirit-space-300)',
        '--flex-spacing-y-tablet': 'var(--spirit-space-400)',
      },
    ],
    [
      {
        spacing: { mobile: 'space-100', tablet: 'space-200', desktop: 'space-400' },
      },
      {
        '--flex-spacing-x': 'var(--spirit-space-100)',
        '--flex-spacing-x-tablet': 'var(--spirit-space-200)',
        '--flex-spacing-x-desktop': 'var(--spirit-space-400)',
        '--flex-spacing-y': 'var(--spirit-space-100)',
        '--flex-spacing-y-tablet': 'var(--spirit-space-200)',
        '--flex-spacing-y-desktop': 'var(--spirit-space-400)',
      },
    ],
    [
      {
        spacingX: { mobile: 'space-100', tablet: 'space-200', desktop: 'space-400' },
      },
      {
        '--flex-spacing-x': 'var(--spirit-space-100)',
        '--flex-spacing-x-tablet': 'var(--spirit-space-200)',
        '--flex-spacing-x-desktop': 'var(--spirit-space-400)',
      },
    ],
  ])('should return the correct style properties for props %o', (props, expectedStyleProps) => {
    const { result } = renderHook(() => useActionGroupStyleProps(props as SpiritFlexProps));

    expect(result.current.styleProps).toEqual(expectedStyleProps);
  });
});
