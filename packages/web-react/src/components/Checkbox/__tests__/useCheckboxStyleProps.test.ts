import { renderHook } from '@testing-library/react-hooks';
import { ValidationStates } from '../../../constants';
import { SpiritCheckboxProps } from '../../../types';
import { useCheckboxStyleProps } from '../useCheckboxStyleProps';

describe('useCheckboxStyleProps', () => {
  it('should return defaults', () => {
    const props = { id: 'checkbox', label: 'Label' };
    const { result } = renderHook(() => useCheckboxStyleProps(props));

    expect(result.current.classProps).toEqual({
      root: 'Checkbox',
      text: 'Checkbox__text',
      input: 'Checkbox__input',
      label: 'Checkbox__label',
      validationText: 'Checkbox__validationText',
      helperText: 'Checkbox__helperText',
    });
  });

  it('should return required input', () => {
    const props = { isRequired: true } as SpiritCheckboxProps;
    const { result } = renderHook(() => useCheckboxStyleProps(props));

    expect(result.current.classProps.label).toBe('Checkbox__label Checkbox__label--required');
  });

  it('should return hidden label', () => {
    const props = { isLabelHidden: true } as SpiritCheckboxProps;
    const { result } = renderHook(() => useCheckboxStyleProps(props));

    expect(result.current.classProps.label).toBe('Checkbox__label Checkbox__label--hidden');
  });

  it('should return field as an Item', () => {
    const props = { isItem: true } as SpiritCheckboxProps;
    const { result } = renderHook(() => useCheckboxStyleProps(props));

    expect(result.current.classProps.root).toBe('Checkbox Checkbox--item');
  });

  it.each([Object.values(ValidationStates)])('should return field with %s', (state) => {
    const props = { validationState: state } as SpiritCheckboxProps;
    const { result } = renderHook(() => useCheckboxStyleProps(props));

    expect(result.current.classProps.root).toBe(`Checkbox Checkbox--${state}`);
  });
});
