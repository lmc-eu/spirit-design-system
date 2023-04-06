import { renderHook } from '@testing-library/react-hooks';
import { SpiritHeaderProps } from '../../../../types';
import { useHeaderStyleProps } from '../useHeaderStyleProps';

describe('useHeaderStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useHeaderStyleProps(props as SpiritHeaderProps));

    expect(result.current.classProps.root).toBe('Header');
  });

  it('should return inverted variant', () => {
    const { result } = renderHook(() => useHeaderStyleProps({ isInverted: true } as SpiritHeaderProps));

    expect(result.current.classProps.header).toBe('Header Header--inverted');
  });

  it('should return simple variant', () => {
    const { result } = renderHook(() => useHeaderStyleProps({ isSimple: true } as SpiritHeaderProps));

    expect(result.current.classProps.header).toBe('Header Header--simple');
  });
});
