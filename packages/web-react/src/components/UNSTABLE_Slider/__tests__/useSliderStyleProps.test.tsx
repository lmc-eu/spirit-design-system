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

    expect(result.current.classProps.root).toBe('UNSTABLE_Slider');
    expect(result.current.classProps.label).toBe('UNSTABLE_Slider__label');
    expect(result.current.classProps.input).toBe('UNSTABLE_Slider__input');
  });

  it('should return selected class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, isSelected: true }));

    expect(result.current.classProps.root).toContain('UNSTABLE_Slider--selected');
  });

  it('should return fluid class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, isFluid: true }));

    expect(result.current.classProps.root).toContain('UNSTABLE_Slider--fluid');
  });

  it('should return validation state class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, validationState: 'danger' }));

    expect(result.current.classProps.root).toContain('UNSTABLE_Slider--danger');
  });

  it('should return hidden label class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, isLabelHidden: true }));

    expect(result.current.classProps.label).toContain('UNSTABLE_Slider__label--hidden');
  });

  it('should return required label class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, isRequired: true }));

    expect(result.current.classProps.label).toContain('UNSTABLE_Slider__label--required');
  });

  it('should return helper text class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, helperText: 'Helper text' }));

    expect(result.current.classProps.helperText).toBe('UNSTABLE_Slider__helperText');
  });

  it('should return validation text class', () => {
    const { result } = renderHook(() => useSliderStyleProps({ ...defaultProps, validationText: 'Validation text' }));

    expect(result.current.classProps.validationText).toBe('UNSTABLE_Slider__validationText');
  });
});
