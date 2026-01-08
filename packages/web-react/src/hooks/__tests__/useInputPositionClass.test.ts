import { renderHook } from '@testing-library/react';
import { useInputPositionClass } from '../useInputPositionClass';

describe('useInputPositionClass', () => {
  it('should return empty string when property is undefined', () => {
    const { result } = renderHook(() => useInputPositionClass('Checkbox', undefined));

    expect(result.current).toBe('');
  });

  it('should return class for start position', () => {
    const { result } = renderHook(() => useInputPositionClass('Checkbox', 'start'));

    expect(result.current).toBe('Checkbox--inputPositionStart');
  });

  it('should return class for end position', () => {
    const { result } = renderHook(() => useInputPositionClass('Checkbox', 'end'));

    expect(result.current).toBe('Checkbox--inputPositionEnd');
  });

  it('should return responsive classes for all breakpoints', () => {
    const { result } = renderHook(() =>
      useInputPositionClass('Checkbox', {
        mobile: 'start',
        tablet: 'end',
        desktop: 'start',
      }),
    );

    expect(result.current).toBe(
      'Checkbox--inputPositionStart Checkbox--tablet--inputPositionEnd Checkbox--desktop--inputPositionStart',
    );
  });

  it('should return responsive classes for partial breakpoints', () => {
    const { result } = renderHook(() =>
      useInputPositionClass('Radio', {
        mobile: 'end',
        tablet: 'start',
      }),
    );

    expect(result.current).toBe('Radio--inputPositionEnd Radio--tablet--inputPositionStart');
  });
});
