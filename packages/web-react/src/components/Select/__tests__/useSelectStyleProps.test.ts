import { renderHook } from '@testing-library/react';
import { ValidationStates } from '../../../constants';
import { useSelectStyleProps } from '../useSelectStyleProps';

describe('useSelectStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useSelectStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'Select',
      label: 'Select__label',
      container: 'Select__inputContainer',
      input: 'Select__input',
      icon: 'Select__icon',
      validationText: 'Select__validationText',
      helperText: 'Select__helperText',
    });
  });

  it('should return required input', () => {
    const props = { isRequired: true };
    const { result } = renderHook(() => useSelectStyleProps(props));

    expect(result.current.classProps.label).toBe('Select__label Select__label--required');
  });

  it('should return disabled', () => {
    const props = { isDisabled: true };
    const { result } = renderHook(() => useSelectStyleProps(props));

    expect(result.current.classProps.root).toBe('Select Select--disabled');
  });

  it('should return hidden label', () => {
    const props = { isLabelHidden: true };
    const { result } = renderHook(() => useSelectStyleProps(props));

    expect(result.current.classProps.label).toBe('Select__label Select__label--hidden');
  });

  it.each([Object.values(ValidationStates)])('should return field with %s', (state) => {
    const props = { validationState: state };
    const { result } = renderHook(() => useSelectStyleProps(props));

    expect(result.current.classProps.root).toBe(`Select Select--${state}`);
  });
});
