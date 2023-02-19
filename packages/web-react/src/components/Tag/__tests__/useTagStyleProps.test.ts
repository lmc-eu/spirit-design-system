import { renderHook } from '@testing-library/react-hooks';
import { SpiritTagProps } from '../../../types';
import { useTagStyleProps } from '../useTagStyleProps';

describe('useTagStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useTagStyleProps(props));

    expect(result.current.classProps).toBe('Tag');
  });

  it.each([['neutral'], ['default'], ['success'], ['informative'], ['warning'], ['danger']])(
    'should return color class %s',
    (color) => {
      const props = { color } as SpiritTagProps;
      const { result } = renderHook(() => useTagStyleProps(props));

      expect(result.current.classProps).toBe(`Tag Tag--${color}`);
    },
  );

  it('should return small success subtle', () => {
    const props = {
      color: 'success',
      size: 'small',
      isSubtle: true,
    } as SpiritTagProps;
    const { result } = renderHook(() => useTagStyleProps(props));

    expect(result.current.classProps).toBe('Tag Tag--success Tag--small Tag--subtle');
  });

  it('should return large danger light', () => {
    const props = {
      color: 'danger',
      size: 'large',
      theme: 'light',
    } as SpiritTagProps;
    const { result } = renderHook(() => useTagStyleProps(props));

    expect(result.current.classProps).toBe('Tag Tag--danger Tag--large Tag--light');
  });
});
