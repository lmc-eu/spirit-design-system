import { renderHook } from '@testing-library/react';
import { useValidationTextStyleProps } from '../useValidationTextStyleProps';

describe('useValidationTextStyleProps', () => {
  it('should return class with icon', () => {
    const { result } = renderHook(() => useValidationTextStyleProps('className', true));

    expect(result.current).toBe('className__validationText className__validationText--hasIcon');
  });

  it('should return default class', () => {
    const { result } = renderHook(() => useValidationTextStyleProps('className', false));

    expect(result.current).toBe('className__validationText');
  });
});
