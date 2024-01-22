import { renderHook } from '@testing-library/react-hooks';
import { useFloating } from '../useFloating';

describe('useFloatingUI', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() =>
      useFloating({
        arrowRef: { current: null },
        flipCrossAxis: false,
        flipFallbackAxisSideDirection: 'none',
        flipFallbackPlacements: 'bottom',
        flipProp: false,
        isOpen: false,
        onToggle: jest.fn(),
        shiftProp: false,
        sizeProp: false,
        tooltipPlacement: undefined,
      }),
    );

    expect(result.current.context).toBeDefined();
    expect(result.current.context.x).toBe(0);
    expect(result.current.context.y).toBe(0);
    expect(result.current.context.placement).toBe('bottom');
    expect(result.current.getFloatingProps).toBeDefined();
    expect(result.current.getReferenceProps).toBeDefined();
    expect(result.current.middlewareData).toBeDefined();
    expect(result.current.placement).toBeDefined();
    expect(result.current.refs).toBeDefined();
    expect(result.current.x).toBeDefined();
    expect(result.current.y).toBeDefined();
  });
});
