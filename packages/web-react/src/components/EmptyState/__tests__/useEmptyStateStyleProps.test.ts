import { renderHook } from '@testing-library/react';
import { useEmptyStateStyleProps } from '../useEmptyStateStyleProps';

describe('useEmptyStateStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useEmptyStateStyleProps(props));

    expect(result.current.classProps.root).toBe('EmptyState');
    expect(result.current.classProps.section).toBe('EmptyState__section');
  });
});
