import { renderHook } from '@testing-library/react-hooks';
import { SpiritCheckboxFieldProps } from '../../../types';
import { useCheckboxFieldStyleProps } from '../useCheckboxFieldStyleProps';

describe('useCheckboxFieldStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'CheckboxField',
      text: 'CheckboxField__text',
      input: 'CheckboxField__input',
      label: 'CheckboxField__label',
      message: 'CheckboxField__message',
    });
  });

  it('should return required input', () => {
    const props = { isRequired: true } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('CheckboxField__label CheckboxField__label--required');
  });

  it('should return hidden label', () => {
    const props = { isLabelHidden: true } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps.label).toBe('CheckboxField__label CheckboxField__label--hidden');
  });

  it('should return field with error', () => {
    const props = { validationState: 'error' } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('CheckboxField CheckboxField--error');
  });
});
