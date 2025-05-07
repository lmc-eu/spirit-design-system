import { renderHook } from '@testing-library/react';
import { SpiritHeaderProps } from '../../../types';
import { useUnstableHeaderStyleProps } from '../useUnstableHeaderStyleProps';

describe('useUnstableHeaderStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useUnstableHeaderStyleProps(props));

    expect(result.current.classProps.root).toBe('UNSTABLE_Header');
    expect(result.current.classProps.logo).toBe('UNSTABLE_HeaderLogo');
  });

  it('should return bottom divider classname', () => {
    const props = { hasBottomDivider: true } as SpiritHeaderProps;
    const { result } = renderHook(() => useUnstableHeaderStyleProps(props));

    expect(result.current.classProps.root).toBe('UNSTABLE_Header UNSTABLE_Header--hasBottomDivider');
  });
});
