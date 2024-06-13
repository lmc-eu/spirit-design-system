import { renderHook } from '@testing-library/react-hooks';
import { SizesExtended } from '../../../constants/dictionaries';
import { useAvatarStyleProps } from '../useAvatarStyleProps';

describe('useAvatarStyleProps', () => {
  const defaultProps = { size: SizesExtended.MEDIUM }; // default size passed to the hook from the component

  it('should return defaults', () => {
    const props = { ...defaultProps };
    const { result } = renderHook(() => useAvatarStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_Avatar UNSTABLE_Avatar--medium');
  });

  it('should return square avatar', () => {
    const props = {
      ...defaultProps,
      isSquare: true,
    };
    const { result } = renderHook(() => useAvatarStyleProps(props));

    expect(result.current.classProps).toBe('UNSTABLE_Avatar UNSTABLE_Avatar--medium UNSTABLE_Avatar--square');
  });

  it.each(Object.values(SizesExtended))('should return %s size avatar', (size) => {
    const props = { size };
    const { result } = renderHook(() => useAvatarStyleProps(props));

    expect(result.current.classProps).toBe(`UNSTABLE_Avatar UNSTABLE_Avatar--${size}`);
  });
});
