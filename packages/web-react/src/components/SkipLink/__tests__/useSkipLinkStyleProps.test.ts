import { renderHook } from '@testing-library/react';
import { SpiritSkipLinkProps } from '../../../types';
import { useSkipLinkStyleProps } from '../useSkipLinkStyleProps';

describe('useSkipLinkStyleProps', () => {
  it('should return default class', () => {
    const props = {} as SpiritSkipLinkProps;
    const { result } = renderHook(() => useSkipLinkStyleProps(props));

    expect(result.current.classProps).toContain('SkipLink');
  });
});
