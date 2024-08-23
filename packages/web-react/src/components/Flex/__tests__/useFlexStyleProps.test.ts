import { renderHook } from '@testing-library/react';
import { SpiritFlexProps } from '../../../types';
import { useFlexStyleProps } from '../useFlexStyleProps';

describe('useFlexStyleProps', () => {
  it.each([
    // props, expectedClasses
    [{}, 'Flex Flex--noWrap'],
    [{ isWrapping: true }, 'Flex Flex--wrap'],
    [
      {
        isWrapping: { mobile: true, tablet: false, desktop: true },
      },
      'Flex Flex--wrap Flex--tablet--noWrap Flex--desktop--wrap',
    ],
    [{ direction: 'row' }, 'Flex Flex--noWrap Flex--row'],
    [{ direction: 'column' }, 'Flex Flex--noWrap Flex--column'],
    [
      {
        direction: { mobile: 'row', tablet: 'column', desktop: 'row' },
      },
      'Flex Flex--noWrap Flex--row Flex--tablet--column Flex--desktop--row',
    ],
    [{ alignmentX: 'left' }, 'Flex Flex--noWrap Flex--alignmentXLeft'],
    [
      {
        alignmentX: 'left',
        alignmentY: 'top',
      },
      'Flex Flex--noWrap Flex--alignmentXLeft Flex--alignmentYTop',
    ],
    [
      {
        alignmentX: { mobile: 'left', tablet: 'center', desktop: 'right' },
      },
      'Flex Flex--noWrap Flex--alignmentXLeft Flex--tablet--alignmentXCenter Flex--desktop--alignmentXRight',
    ],
    [
      {
        alignmentX: { mobile: 'left', tablet: 'center', desktop: 'right' },
        alignmentY: { mobile: 'top', tablet: 'center', desktop: 'bottom' },
      },
      'Flex Flex--noWrap Flex--alignmentXLeft Flex--tablet--alignmentXCenter Flex--desktop--alignmentXRight Flex--alignmentYTop Flex--tablet--alignmentYCenter Flex--desktop--alignmentYBottom',
    ],
    [
      {
        alignmentX: 'left',
        alignmentY: { mobile: 'top', tablet: 'center', desktop: 'bottom' },
      },
      'Flex Flex--noWrap Flex--alignmentXLeft Flex--alignmentYTop Flex--tablet--alignmentYCenter Flex--desktop--alignmentYBottom',
    ],
  ])('should return the correct classes for props %o', (props, expectedClasses) => {
    const { result } = renderHook(() => useFlexStyleProps(props as SpiritFlexProps));

    expect(result.current.classProps).toBe(expectedClasses);
  });

  it.each([
    // props, expectedStyleProps
    [{}, {}],
    [{ spacing: 'space-100' }, { '--flex-spacing': 'var(--spirit-space-100)' }],
    [
      {
        spacing: { mobile: 'space-100', tablet: 'space-200' },
      },
      {
        '--flex-spacing': 'var(--spirit-space-100)',
        '--flex-spacing-tablet': 'var(--spirit-space-200)',
      },
    ],
    [
      {
        spacing: { mobile: 'space-100', tablet: 'space-200', desktop: 'space-400' },
      },
      {
        '--flex-spacing': 'var(--spirit-space-100)',
        '--flex-spacing-tablet': 'var(--spirit-space-200)',
        '--flex-spacing-desktop': 'var(--spirit-space-400)',
      },
    ],
  ])('should return the correct style properties for props %o', (props, expectedStyleProps) => {
    const { result } = renderHook(() => useFlexStyleProps(props as SpiritFlexProps));

    expect(result.current.styleProps).toEqual(expectedStyleProps);
  });
});
