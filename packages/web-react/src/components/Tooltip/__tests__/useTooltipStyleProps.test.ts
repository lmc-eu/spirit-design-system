import { renderHook } from '@testing-library/react';
import { useTooltipStyleProps } from '../useTooltipStyleProps';

describe('useTooltipStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useTooltipStyleProps({}));

    expect(result.current.classProps.rootClassName).toBe('Tooltip');
    expect(result.current.classProps.arrowClassName).toBe('TooltipPopover__arrow');
    expect(result.current.classProps.closeButtonClassName).toBe('TooltipPopover__close');
  });

  it('should return dismissible class', () => {
    const { result } = renderHook(() => useTooltipStyleProps({ isDismissible: true }));

    expect(result.current.classProps.popoverClassName).toBe('TooltipPopover TooltipPopover--dismissible');
  });
});
