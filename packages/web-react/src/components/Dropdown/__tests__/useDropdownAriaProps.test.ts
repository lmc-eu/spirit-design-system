import { renderHook } from '@testing-library/react';
import { PlacementDictionaryType } from '../../../types';
import { fullWidthModeKeys, useDropdownAriaProps } from '../useDropdownAriaProps';

const defaultProps = {
  fullWidthMode: undefined,
  id: 'test-dropdown-id',
  isOpen: true,
  placement: 'bottom-start' as PlacementDictionaryType,
  toggleHandler: () => null,
};

const defaultTriggerPropsResult = {
  'aria-expanded': true,
  'aria-controls': 'test-dropdown-id',
  onClick: expect.any(Function),
};

const defaultContentPropsResult = {
  id: 'test-dropdown-id',
  'data-spirit-placement': 'bottom-start',
};

describe('useDropdownAriaProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useDropdownAriaProps(defaultProps));

    expect(result.current.triggerProps).toEqual(defaultTriggerPropsResult);
    expect(result.current.contentProps).toEqual(defaultContentPropsResult);
  });

  it('should return with full width mode prop', () => {
    const props = {
      ...defaultProps,
      fullWidthMode: 'all' as fullWidthModeKeys,
    };
    const { result } = renderHook(() => useDropdownAriaProps(props));

    expect(result.current.triggerProps).toEqual(defaultTriggerPropsResult);
    expect(result.current.contentProps).toEqual({ ...defaultContentPropsResult, 'data-spirit-fullwidthmode': 'all' });
  });

  it('should return correct props when isOpen is false', () => {
    const props = {
      ...defaultProps,
      isOpen: false,
    };
    const { result } = renderHook(() => useDropdownAriaProps(props));

    expect(result.current.triggerProps).toEqual({ ...defaultTriggerPropsResult, 'aria-expanded': false });
    expect(result.current.contentProps).toEqual(defaultContentPropsResult);
  });

  it('should return correct props when placement is top', () => {
    const props = {
      ...defaultProps,
      placement: 'top' as PlacementDictionaryType,
    };
    const { result } = renderHook(() => useDropdownAriaProps(props));

    expect(result.current.triggerProps).toEqual(defaultTriggerPropsResult);
    expect(result.current.contentProps).toEqual({ ...defaultContentPropsResult, 'data-spirit-placement': 'top' });
  });
});
