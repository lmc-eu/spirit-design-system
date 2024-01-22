import { renderHook } from '@testing-library/react-hooks';
import { PlacementDictionaryType } from '../../../types';
import { useTooltipModernStyleProps, UseTooltipModernStyleProps } from '../useTooltipModernStyleProps';

describe('useTooltipModernStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useTooltipModernStyleProps({}));

    expect(result.current.classProps.rootClassName).toBe('Tooltip Tooltip--bottom');
    expect(result.current.classProps.wrapperClassName).toBe('TooltipWrapper');
    expect(result.current.classProps.arrowClassName).toBe('Tooltip__arrow');
    expect(result.current.classProps.closeButtonClassName).toBe('Tooltip__close');
  });

  it('should change placement', () => {
    const props = {
      placement: 'top-right' as PlacementDictionaryType,
    } as UseTooltipModernStyleProps;
    const { result } = renderHook(() => useTooltipModernStyleProps(props));

    expect(result.current.classProps.rootClassName).toBe('Tooltip Tooltip--topRight');
  });

  it('should return dismissible class', () => {
    const { result } = renderHook(() => useTooltipModernStyleProps({ isDismissible: true }));

    expect(result.current.classProps.rootClassName).toBe('Tooltip Tooltip--bottom Tooltip--dismissible');
  });
});
