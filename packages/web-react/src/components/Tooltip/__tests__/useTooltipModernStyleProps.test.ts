import { renderHook } from '@testing-library/react-hooks';
import { useTooltipModernStyleProps } from '../useTooltipModernStyleProps';

describe('useTooltipModernStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useTooltipModernStyleProps({}));

    expect(result.current.classProps.rootClassName).toBe('Tooltip');
    expect(result.current.classProps.arrowClassName).toBe('Tooltip__arrow');
    expect(result.current.classProps.closeButtonClassName).toBe('Tooltip__close');
  });

  it('should return dismissible class', () => {
    const { result } = renderHook(() => useTooltipModernStyleProps({ isDismissible: true }));

    expect(result.current.classProps.rootClassName).toBe('Tooltip Tooltip--dismissible');
  });
});
