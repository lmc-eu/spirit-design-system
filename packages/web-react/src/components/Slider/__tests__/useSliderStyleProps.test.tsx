import { renderHook } from '@testing-library/react';
import { useSliderStyleProps } from '../useSliderStyleProps';

const defaultProps = {
  label: 'Slider',
  value: 0,
  onChange: () => {},
};

describe('useSliderStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useSliderStyleProps(defaultProps));

    expect(result.current.classProps.root).toBe('Slider');
    expect(result.current.classProps.label).toBe('Slider__label');
    expect(result.current.classProps.input).toBe('Slider__input');
  });

  it('should return disabled class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, isDisabled: true }));

    expect(result.current.classProps.root).toContain('Slider--disabled');
  });

  it('should return fluid class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, isFluid: true }));

    expect(result.current.classProps.root).toContain('Slider--fluid');
  });

  it('should return validation state class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, validationState: 'danger' }));

    expect(result.current.classProps.root).toContain('Slider--danger');
  });

  it('should return hidden label class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, isLabelHidden: true }));

    expect(result.current.classProps.label).toContain('Slider__label--hidden');
  });

  it('should return helper text class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, helperText: 'Helper text' }));

    expect(result.current.classProps.helperText).toBe('Slider__helperText');
  });

  it('should return validation text class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, validationText: 'Validation text' }));

    expect(result.current.classProps.validationText).toBe('Slider__validationText');
  });
});
