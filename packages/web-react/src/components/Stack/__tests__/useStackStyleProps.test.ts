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
});
