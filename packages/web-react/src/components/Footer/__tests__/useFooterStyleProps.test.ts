import { renderHook } from '@testing-library/react';
import { SpiritFooterProps } from '../../../types';
import { useFooterStyleProps } from '../useFooterStyleProps';

describe('useFooterStyleProps', () => {
  it('should return defaults', () => {
    const props: SpiritFooterProps = {};
    const { result } = renderHook(() => useFooterStyleProps(props));

    expect(result.current.classProps).toBe('');
  });

  it('should return background classProps', () => {
    const props: SpiritFooterProps = {
      backgroundColor: 'secondary',
    };
    const { result } = renderHook(() => useFooterStyleProps(props));

    expect(result.current.classProps).toBe('bg-secondary');
  });
});
