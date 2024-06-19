import { renderHook } from '@testing-library/react';
import { useActionLayoutStyleProps } from '../useActionLayoutStyleProps';

describe('useActionLayoutStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useActionLayoutStyleProps(props));

    expect(result.current.classProps.root).toBe('UNSTABLE_ActionLayout');
  });
});
