import { renderHook } from '@testing-library/react-hooks';
import { SpiritCheckboxFieldProps } from '../../../types';
import { ValidationStates } from '../../../constants';
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
      validationText: 'CheckboxField__validationText',
      helperText: 'CheckboxField__helperText',
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

  it('should return field as an Item', () => {
    const props = { isItem: true } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps.root).toBe('CheckboxField CheckboxField--item');
  });

  it.each([Object.values(ValidationStates)])('should return field with %s', (state) => {
    const props = { validationState: state } as SpiritCheckboxFieldProps;
    const { result } = renderHook(() => useCheckboxFieldStyleProps(props));

    expect(result.current.classProps.root).toBe(`CheckboxField CheckboxField--${state}`);
  });
});
