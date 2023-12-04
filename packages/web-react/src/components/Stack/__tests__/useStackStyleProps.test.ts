import { renderHook } from '@testing-library/react-hooks';
import { SpiritStackProps } from '../../../types';
import { useStackStyleProps } from '../useStackStyleProps';

describe('useStackStyleProps', () => {
  it.each([
    // hasEndDivider, hasIntermediateDividers, hasSpacing, hasStartDivider, expectedClasses
    [false, false, false, false, 'Stack'],
    [false, true, true, false, 'Stack Stack--hasIntermediateDividers Stack--hasSpacing'],
    [false, false, true, false, 'Stack Stack--hasSpacing'],
    [
      true,
      true,
      true,
      true,
      'Stack Stack--hasEndDivider Stack--hasIntermediateDividers Stack--hasSpacing Stack--hasStartDivider',
    ],
  ])(
    'should return classes',
    (hasEndDivider, hasIntermediateDividers, hasSpacing, hasStartDivider, expectedClasses) => {
      const props = { hasEndDivider, hasIntermediateDividers, hasSpacing, hasStartDivider } as SpiritStackProps;
      const { result } = renderHook(() => useStackStyleProps(props));

      expect(result.current.classProps).toBe(expectedClasses);
    },
  );

  it.each([
    // spacing, expectedStyle
    [undefined, {}],
    ['space-100', { '--stack-spacing': 'var(--spirit-space-100)' }],
    [{ tablet: 'space-100' }, { '--stack-spacing-tablet': 'var(--spirit-space-100)' }],
    [
      { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      {
        '--stack-spacing': 'var(--spirit-space-100)',
        '--stack-spacing-tablet': 'var(--spirit-space-200)',
        '--stack-spacing-desktop': 'var(--spirit-space-300)',
      },
    ],
  ])('should return style', (spacing, expectedStyle) => {
    const props = { spacing } as SpiritStackProps;
    const { result } = renderHook(() => useStackStyleProps(props));

    expect(result.current.styleProps).toEqual(expectedStyle);
  });
});
