import { renderHook } from '@testing-library/react';
import { SpacingProp } from '../../types/shared';
import { useSpacingStyle } from '../useSpacingStyle';

describe('useSpacingStyles', () => {
  it('should process spacing if spacing is an object', () => {
    const mockProps = {
      mobile: 'space-100',
      tablet: 'space-200',
      desktop: 'space-300',
    };

    const { result } = renderHook(() => useSpacingStyle(mockProps as SpacingProp, 'test-prefix'));

    expect(result.current).toEqual({
      '--test-prefix-spacing': 'var(--spirit-space-100)',
      '--test-prefix-spacing-tablet': 'var(--spirit-space-200)',
      '--test-prefix-spacing-desktop': 'var(--spirit-space-300)',
    });
  });

  it('should process if spacing is a string', () => {
    const mockProps = 'space-100';

    const { result } = renderHook(() => useSpacingStyle(mockProps as SpacingProp, 'test-prefix'));

    expect(result.current).toEqual({
      '--test-prefix-spacing': 'var(--spirit-space-100)',
    });
  });

  it('should process if spacing is undefined', () => {
    const mockProps = undefined;

    const { result } = renderHook(() => useSpacingStyle(mockProps as SpacingProp | undefined, 'test-prefix'));

    expect(result.current).toEqual({});
  });
});
