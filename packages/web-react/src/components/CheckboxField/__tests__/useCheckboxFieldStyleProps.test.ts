import { renderHook } from '@testing-library/react-hooks';
import { SpiritCheckboxFieldProps } from '../../../types';
import { useCheckboxFieldStyleProps } from '../useCheckboxFieldStyleProps';

describe('useCheckboxFieldStyleProps', () => {
  it('should return defaults', () => {
    const props = { id: 'checkbox', label: 'Label' };
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

  it('should return field with danger', () => {
    const props = { validationState: 'danger' } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('CheckboxField CheckboxField--danger');
  });

  /* @deprecated Will be removed in next major version. */
  it('should return field with error', () => {
    const props = { validationState: 'error' } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('CheckboxField CheckboxField--error');
  });

  it('should return field as an Item', () => {
    const props = { isItem: true } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('CheckboxField CheckboxField--item');
  });
});
