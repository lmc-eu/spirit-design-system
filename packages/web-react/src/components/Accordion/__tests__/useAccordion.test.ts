import { act, renderHook } from '@testing-library/react';
import { useAccordion } from '../useAccordion';

describe('useAccordion', () => {
  it('should toggle state as string value', () => {
    const { result } = renderHook(() => useAccordion({}));
    const { toggle } = result.current;

    act(() => {
      toggle('testId');
    });

    expect(result.current.open).toBe('testId');
  });

  it('should toggle state as array value', () => {
    const { result } = renderHook(() => useAccordion({ stayOpen: true }));
    const { toggle } = result.current;

    act(() => {
      toggle('testId');
    });

    expect(result.current.open).toContain('testId');
  });

  it('should toggle state with default open', () => {
    const { result } = renderHook(() => useAccordion({ stayOpen: true, defaultOpen: ['defaultTestId'] }));
    const { toggle } = result.current;

    act(() => {
      toggle('testId');
    });

    expect(result.current.open).toContain('testId');

    act(() => {
      toggle('testId');
    });

    expect(result.current.open).toContain('defaultTestId');

    act(() => {
      toggle('defaultTestId');
    });

    expect(result.current.open).toStrictEqual([]);
  });
});
