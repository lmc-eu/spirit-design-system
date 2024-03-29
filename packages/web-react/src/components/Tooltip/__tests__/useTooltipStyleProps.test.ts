import { renderHook } from '@testing-library/react-hooks';
import { PlacementDictionaryType } from '../../../types';
import { useTooltipStyleProps, UseTooltipStyleProps } from '../useTooltipStyleProps';

describe('useTooltipStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useTooltipStyleProps({}));

    expect(result.current.classProps.rootClassName).toBe('Tooltip Tooltip--bottom');
    expect(result.current.classProps.wrapperClassName).toBe('TooltipWrapper');
    expect(result.current.classProps.arrowClassName).toBe('Tooltip__arrow');
    expect(result.current.classProps.closeButtonClassName).toBe('Tooltip__close');
  });

  it('should change placement', () => {
    const props = {
      placement: 'top-right' as PlacementDictionaryType,
    } as UseTooltipStyleProps;
    const { result } = renderHook(() => useTooltipStyleProps(props));

    expect(result.current.classProps.rootClassName).toBe('Tooltip Tooltip--topRight');
  });

  it('should return dismissible class', () => {
    const { result } = renderHook(() => useTooltipStyleProps({ isDismissible: true }));

    expect(result.current.classProps.rootClassName).toBe('Tooltip Tooltip--bottom Tooltip--dismissible');
  });
});
